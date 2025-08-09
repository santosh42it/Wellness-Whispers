const serverless = require('serverless-http');
const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const postgres = require('postgres');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Handle Netlify Function path forwarding - add /api prefix for auth routes
app.use('/auth/*', (req, res, next) => {
  req.url = '/api' + req.url;
  req.path = '/api' + req.path;
  next();
});

// Simple logging
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
  next();
});

// Database connection for Supabase
let sql = null;
if (process.env.DATABASE_URL && process.env.USE_DATABASE === 'true') {
  try {
    sql = postgres(process.env.DATABASE_URL, {
      ssl: 'require',
      max: 1,
      idle_timeout: 20,
      connect_timeout: 10,
    });
    console.log('📊 Connected to Supabase database');
  } catch (error) {
    console.log('⚠️ Database connection failed, using fallback admin');
    sql = null;
  }
}

// In-memory fallback admin user
const FALLBACK_ADMIN = {
  email: 'admin@wellnesswhispers.in',
  password_hash: '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // admin123
};

// Simple auth route for Netlify direct path
app.post('/auth/login', async (req, res) => {
  const { email, password } = req.body;
  console.log('Direct auth route - Login attempt for:', email);
  
  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password required' });
  }
  
  // Simple check for fallback admin
  const isValid = email === 'admin@wellnesswhispers.in' && password === 'admin123';
  
  if (isValid) {
    res.json({
      message: 'Login successful',
      admin: {
        email: email,
        id: 'fallback-admin'
      }
    });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

// Admin login endpoint
app.post('/api/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    console.log('Login attempt for:', email);
    
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password required' });
    }

    let admin = null;

    // Try database first, fallback to in-memory
    if (sql) {
      try {
        const result = await sql`
          SELECT * FROM admin_users WHERE email = ${email} LIMIT 1
        `;
        admin = result[0];
        console.log('Database admin found:', !!admin);
      } catch (dbError) {
        console.log('Database query failed:', dbError.message);
        // Fallback to in-memory admin
        if (email === FALLBACK_ADMIN.email) {
          admin = FALLBACK_ADMIN;
          console.log('Using fallback admin');
        }
      }
    } else {
      // Use fallback admin when no database
      if (email === FALLBACK_ADMIN.email) {
        admin = FALLBACK_ADMIN;
        console.log('Using fallback admin (no database)');
      }
    }

    if (!admin) {
      console.log('Admin not found for email:', email);
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Verify password
    const isValid = await bcrypt.compare(password, admin.password_hash);
    console.log('Password valid:', isValid);
    
    if (!isValid) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Return success with admin info
    res.json({
      message: 'Login successful',
      admin: {
        email: admin.email,
        id: admin.id || 'fallback-admin'
      }
    });

  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    timestamp: new Date().toISOString(),
    database: sql ? 'connected' : 'fallback'
  });
});

// Content and gallery endpoints (simplified versions)
app.get('/api/content', async (req, res) => {
  try {
    if (sql) {
      const content = await sql`SELECT * FROM content_blocks WHERE is_active = true ORDER BY created_at DESC`;
      res.json(content);
    } else {
      // Fallback content
      res.json([
        {
          id: "default-1",
          blockKey: "hero_title",
          title: "Hero Main Title",
          content: "Welcome to Your Healing Space",
          blockType: "text",
          isActive: true
        },
        {
          id: "default-2",
          blockKey: "about_title",
          title: "About Section Title", 
          content: "About Me",
          blockType: "text",
          isActive: true
        }
      ]);
    }
  } catch (error) {
    console.error('Content fetch error:', error);
    res.status(500).json({ message: 'Error fetching content' });
  }
});

app.get('/api/gallery', async (req, res) => {
  try {
    if (sql) {
      const images = await sql`SELECT * FROM gallery_images ORDER BY created_at DESC`;
      res.json(images);
    } else {
      // Fallback gallery with actual uploaded images for production
      const fallbackGallery = [
        {
          id: "25xzpfcuf",
          title: "Healing Forest Path",
          description: "Main hero section background image",
          imageUrl: "https://storage.googleapis.com/replit-objstore-dd1a2975-7265-48bf-aaf9-288573bdfa2b/.private/uploads/82a0bf61-87fb-42d7-a502-7c3eee64149d",
          altText: "Healing does not shout it whispers - Misty green leaves in peaceful nature",
          category: "hero",
          uploadedBy: "admin",
          createdAt: "2025-08-03T19:54:57.178Z",
          updatedAt: "2025-08-03T19:54:57.178Z"
        },
        {
          id: "rhe1qhv63",
          title: "Rainy Window Reflection",
          description: "Emotional validation image in hero section",
          imageUrl: "https://storage.googleapis.com/replit-objstore-dd1a2975-7265-48bf-aaf9-288573bdfa2b/.private/uploads/94c883dc-cee9-476e-820f-27b37fa5d496",
          altText: "You are not too much - Rainy window with gentle reflection and emotional validation",
          category: "hero",
          uploadedBy: "admin",
          createdAt: "2025-08-03T19:54:24.611Z",
          updatedAt: "2025-08-03T19:54:24.611Z"
        }
      ];
      console.log('Using fallback gallery with', fallbackGallery.length, 'images');
      res.json(fallbackGallery);
    }
  } catch (error) {
    console.error('Gallery fetch error:', error);
    res.status(500).json({ message: 'Error fetching gallery' });
  }
});

// Object storage route for serving uploaded images
app.get('/objects/*', async (req, res) => {
  try {
    // Extract the object path from the URL
    const objectPath = req.params[0];
    console.log('Serving object:', objectPath);
    
    // For Netlify, we need to redirect to the actual storage URL
    // This is a simplified approach - in production you'd want proper object storage
    const storageUrl = `https://storage.googleapis.com/replit-objstore-dd1a2975-7265-48bf-aaf9-288573bdfa2b/.private/${objectPath}`;
    
    // Set appropriate headers for image serving
    res.set({
      'Cache-Control': 'public, max-age=31536000',
      'Access-Control-Allow-Origin': '*'
    });
    
    // Redirect to the actual storage URL
    res.redirect(301, storageUrl);
    
  } catch (error) {
    console.error('Error serving object:', error);
    res.status(404).json({ error: 'Object not found' });
  }
});

// Root route for testing
app.get('/', (req, res) => {
  res.json({ message: 'Wellness Whispers API is running' });
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Catch-all for unmatched routes
app.use('*', (req, res) => {
  console.log(`Unmatched route: ${req.method} ${req.path} ${req.url}`);
  res.status(404).json({ 
    message: 'API endpoint not found',
    path: req.path,
    url: req.url,
    method: req.method
  });
});

// Export the serverless function
module.exports.handler = serverless(app);