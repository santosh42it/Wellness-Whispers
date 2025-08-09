# How to Check and Fix Your Supabase Database

## Current Issue
Your Supabase database `db.fnmgkzvkhcaqopacduqs.supabase.co` is not reachable. This is likely because:

1. **Project is Paused** (most common with free tier)
2. **Project was deleted or renamed**
3. **Database credentials changed**

## Step 1: Check Your Supabase Dashboard

1. Go to [supabase.com/dashboard/projects](https://supabase.com/dashboard/projects)
2. Log in with your Supabase account
3. Look for your project in the list

### If Project Shows "Paused" Status:
- Click on the project
- Click "Resume Project" or "Restore Project"
- Wait 2-3 minutes for it to restart

### If Project is Active:
- Go to **Settings → Database**
- Copy the new **Connection string** (URI format)
- Make sure to replace `[YOUR-PASSWORD]` with your actual password

## Step 2: Get New Database URL

In your Supabase project dashboard:
1. Go to **Settings → Database**
2. Find **Connection pooling** section
3. Copy the **Connection string** (should look like):
   ```
   postgresql://postgres.xxxxx:[YOUR-PASSWORD]@aws-0-us-west-1.pooler.supabase.com:6543/postgres
   ```
4. Replace `[YOUR-PASSWORD]` with your database password

## Step 3: Update Environment Variables

### In Replit:
1. Click the lock icon (Secrets tab)
2. Update `DATABASE_URL` with your new connection string

### In Netlify (when you deploy):
1. Go to your Netlify site dashboard
2. Go to **Site configuration → Environment variables**
3. Add/update `DATABASE_URL` with your new connection string

## Step 4: Create Database Tables

Once the connection is working, run this command to create your tables:

```bash
npm run db:push
```

This will create all the necessary tables:
- `contacts` - for contact form submissions
- `admin_users` - for admin login
- `gallery_images` - for uploaded images
- `content_blocks` - for editable website content

## Step 5: Test Connection

Run this to test if everything works:
```bash
export USE_DATABASE=true && npm run dev
```

You should see:
```
📊 Storage type: Supabase Database
✅ Admin user created successfully!
```

## Alternative: Create New Supabase Project

If your current project is deleted or can't be recovered:

1. Go to [supabase.com/dashboard](https://supabase.com/dashboard/projects)
2. Click **"New Project"**
3. Name: `wellness-whispers`
4. Set a strong password (save it!)
5. Choose your region
6. Wait for creation (2-3 minutes)
7. Get the new connection string from Settings → Database
8. Update your `DATABASE_URL` environment variable

## Current Status

Your website works perfectly with file-based storage, but for production Netlify deployment with persistent data, you'll need the Supabase database connection working.

**No urgent action needed** - your site deploys fine as-is, but database gives you better data persistence.