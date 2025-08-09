import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema, insertGalleryImageSchema, insertContentBlockSchema } from "@shared/schema";
import { ZodError } from "zod";
import session from "express-session";
import { ObjectStorageService, ObjectNotFoundError } from "./objectStorage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Configure session middleware BEFORE any routes
  app.use(session({
    secret: process.env.SESSION_SECRET || 'wellness-whispers-secret-key',
    resave: true, // Force session save to prevent loss
    saveUninitialized: true, // Save uninitialized sessions
    name: 'connect.sid',
    cookie: {
      secure: false, // Set to true in production with HTTPS
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000, // 24 hours
      sameSite: 'lax'
    }
  }));

  // Initialize admin user at startup (especially important for Netlify deployments)
  const initAdmin = async () => {
    try {
      // Use environment variables for production, fallback to defaults
      const adminEmail = process.env.ADMIN_EMAIL || "admin@wellnesswhispers.in";
      const adminPassword = process.env.ADMIN_PASSWORD || "admin123";
      const adminName = process.env.ADMIN_NAME || "Wellness Whispers Admin";
      
      const adminExists = await storage.getAdminUserByEmail(adminEmail);
      if (!adminExists) {
        console.log("🔧 Creating initial admin user for deployment...");
        await storage.createAdminUser({
          email: adminEmail,
          name: adminName,
          passwordHash: adminPassword,
          isActive: true,
        });
        console.log("✅ Admin user created successfully!");
        console.log("📧 Login credentials:");
        console.log(`   Email: ${adminEmail}`);
        console.log(`   Password: ${adminPassword}`);
      } else {
        console.log("✅ Admin user already exists");
      }
    } catch (error) {
      console.error("❌ Error initializing admin user:", error);
      // Try to create with basic info if there's an error
      console.log("🔄 Attempting fallback admin creation...");
      try {
        await storage.createAdminUser({
          email: "admin@wellnesswhispers.in",
          name: "Admin",
          passwordHash: "admin123",
          isActive: true,
        });
        console.log("✅ Fallback admin user created!");
      } catch (fallbackError) {
        console.error("❌ Fallback admin creation failed:", fallbackError);
      }
    }
  };
  
  // Initialize admin user - critical for production deployments
  await initAdmin();
  
  // Log storage type being used
  const storageType = storage.constructor.name === 'DatabaseStorage' ? 'Supabase Database' : 'File-based';
  console.log(`📊 Storage type: ${storageType}`);

  // Public gallery endpoint (for website display)
  app.get("/api/gallery", async (req, res) => {
    try {
      const images = await storage.getGalleryImages();
      res.json(images);
    } catch (error) {
      console.error("Error fetching gallery images:", error);
      res.status(500).json({ error: "Failed to fetch images" });
    }
  });

  // Contact form submission
  app.post("/api/contacts", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(validatedData);
      res.json({ success: true, contact });
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Invalid form data", 
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Failed to submit contact form" 
        });
      }
    }
  });

  // Middleware to check admin authentication
  const requireAdmin = (req: any, res: any, next: any) => {
    console.log("RequireAdmin check - Session:", req.session);
    console.log("RequireAdmin check - Admin user:", req.session.adminUser);
    if (!req.session.adminUser) {
      return res.status(401).json({ error: "Admin authentication required" });
    }
    next();
  };

  // Content blocks API
  app.get("/api/content", async (req, res) => {
    try {
      const blocks = await storage.getContentBlocks();
      res.json(blocks);
    } catch (error) {
      console.error("Error fetching content blocks:", error);
      res.status(500).json({ error: "Failed to fetch content blocks" });
    }
  });

  app.get("/api/content/:blockKey", async (req, res) => {
    try {
      const block = await storage.getContentBlockByKey(req.params.blockKey);
      if (!block) {
        return res.status(404).json({ error: "Content block not found" });
      }
      res.json(block);
    } catch (error) {
      console.error("Error fetching content block:", error);
      res.status(500).json({ error: "Failed to fetch content block" });
    }
  });

  app.post("/api/content", requireAdmin, async (req, res) => {
    try {
      console.log("Content save attempt:", req.body);
      const validatedData = insertContentBlockSchema.parse({
        ...req.body,
        updatedBy: (req.session as any).adminUser.id
      });
      console.log("Validated data:", validatedData);
      const block = await storage.upsertContentBlock(validatedData);
      console.log("Saved block:", block);
      res.json(block);
    } catch (error) {
      if (error instanceof ZodError) {
        console.error("Validation error:", error.errors);
        res.status(400).json({ 
          message: "Invalid content data", 
          errors: error.errors 
        });
      } else {
        console.error("Error saving content block:", error);
        res.status(500).json({ error: "Failed to save content block" });
      }
    }
  });

  // Get all contacts (for admin purposes)
  app.get("/api/contacts", async (req, res) => {
    try {
      const contacts = await storage.getContacts();
      res.json(contacts);
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Failed to fetch contacts" 
      });
    }
  });

  // Admin authentication routes
  app.post("/api/admin/login", async (req, res) => {
    try {
      const { email, password } = req.body;
      
      console.log("Login attempt:", { email, password: "***" });
      
      if (!email || !password) {
        return res.status(400).json({ error: "Email and password are required" });
      }

      // Check if user exists
      const userExists = await storage.getAdminUserByEmail(email);
      console.log("User exists:", userExists ? "YES" : "NO");

      const user = await storage.validateAdminPassword(email, password);
      console.log("Password validation result:", user ? "SUCCESS" : "FAILED");
      
      if (!user) {
        return res.status(401).json({ error: "Invalid credentials" });
      }

      // Store user in session and save immediately
      (req.session as any).adminUser = {
        id: user.id,
        email: user.email,
        name: user.name
      };
      
      // Force save session
      req.session.save((err) => {
        if (err) {
          console.error("Session save error:", err);
        } else {
          console.log("Session saved successfully with admin user:", (req.session as any).adminUser);
        }
      });

      res.json({ 
        success: true, 
        user: { id: user.id, email: user.email, name: user.name } 
      });
    } catch (error) {
      console.error("Error during login:", error);
      res.status(500).json({ error: "Login failed" });
    }
  });

  app.post("/api/admin/logout", (req, res) => {
    req.session.destroy((err) => {
      if (err) {
        return res.status(500).json({ error: "Could not log out" });
      }
      res.json({ success: true });
    });
  });

  // Check admin session
  app.get("/api/admin/me", (req, res) => {
    console.log("Session check - Admin user:", (req.session as any).adminUser);
    if ((req.session as any).adminUser) {
      res.json({ user: (req.session as any).adminUser });
    } else {
      res.status(401).json({ error: "Not authenticated" });
    }
  });

  // Debug endpoint to test admin functionality
  app.get("/api/admin/debug", async (req, res) => {
    try {
      const adminUser = await storage.getAdminUserByEmail("admin@wellnesswhispers.in");
      const validation = adminUser ? await storage.validateAdminPassword("admin@wellnesswhispers.in", "admin123") : null;
      
      res.json({
        adminUserExists: !!adminUser,
        passwordValidation: !!validation,
        adminUserEmail: adminUser?.email,
        adminUserName: adminUser?.name,
      });
    } catch (error) {
      res.status(500).json({ error: error instanceof Error ? error.message : 'Unknown error occurred' });
    }
  });

  // Admin gallery routes
  app.get("/api/admin/gallery", requireAdmin, async (req, res) => {
    try {
      const category = req.query.category as string;
      const images = await storage.getGalleryImages(category);
      res.json(images);
    } catch (error) {
      console.error("Error getting gallery images:", error);
      res.status(500).json({ error: "Failed to get gallery images" });
    }
  });

  app.post("/api/admin/gallery", requireAdmin, async (req, res) => {
    try {
      const validatedData = insertGalleryImageSchema.parse({
        ...req.body,
        uploadedBy: (req.session as any).adminUser.id
      });
      const image = await storage.createGalleryImage(validatedData);
      res.status(201).json(image);
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({ error: "Validation failed", details: error.errors });
      } else {
        console.error("Error creating gallery image:", error);
        res.status(500).json({ error: "Failed to create gallery image" });
      }
    }
  });

  // Object storage endpoints
  app.post("/api/objects/upload", requireAdmin, async (req, res) => {
    try {
      const objectStorageService = new ObjectStorageService();
      const uploadURL = await objectStorageService.getObjectEntityUploadURL();
      res.json({ uploadURL });
    } catch (error) {
      console.error("Error getting upload URL:", error);
      res.status(500).json({ error: "Failed to get upload URL" });
    }
  });

  app.get("/objects/:objectPath(*)", async (req, res) => {
    const objectStorageService = new ObjectStorageService();
    try {
      const objectFile = await objectStorageService.getObjectEntityFile(
        req.path,
      );
      objectStorageService.downloadObject(objectFile, res);
    } catch (error) {
      console.error("Error checking object access:", error);
      if (error instanceof ObjectNotFoundError) {
        return res.sendStatus(404);
      }
      return res.sendStatus(500);
    }
  });

  // Update gallery image with uploaded file URL
  app.put("/api/admin/gallery/:id", requireAdmin, async (req, res) => {
    try {
      const { id } = req.params;
      const { imageUrl, ...otherData } = req.body;
      
      // If imageUrl is from upload, normalize it
      let finalImageUrl = imageUrl;
      if (imageUrl && imageUrl.startsWith("https://storage.googleapis.com/")) {
        const objectStorageService = new ObjectStorageService();
        finalImageUrl = objectStorageService.normalizeObjectEntityPath(imageUrl);
      }
      
      const updatedImage = await storage.updateGalleryImage(id, {
        ...otherData,
        imageUrl: finalImageUrl,
      });
      
      if (!updatedImage) {
        return res.status(404).json({ error: "Image not found" });
      }
      
      res.json(updatedImage);
    } catch (error) {
      console.error("Error updating gallery image:", error);
      res.status(500).json({ error: "Failed to update gallery image" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
