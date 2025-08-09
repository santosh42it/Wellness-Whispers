import { storage } from "./storage";

async function createAdminUser() {
  try {
    // Check if admin user already exists
    const existingAdmin = await storage.getAdminUserByEmail("admin@wellnesswhispers.in");
    
    if (existingAdmin) {
      console.log("Admin user already exists:");
      console.log(`Email: ${existingAdmin.email}`);
      console.log(`Name: ${existingAdmin.name}`);
      return;
    }

    // Create the admin user
    const adminUser = await storage.createAdminUser({
      email: "admin@wellnesswhispers.in",
      name: "Wellness Whispers Admin",
      passwordHash: "admin123", // This will be hashed automatically
      isActive: true,
    });

    console.log("✅ Admin user created successfully!");
    console.log(`Email: ${adminUser.email}`);
    console.log(`Name: ${adminUser.name}`);
    console.log("Password: admin123");
    console.log("\n🔗 Login at: http://localhost:5000/admin/login");
    
  } catch (error) {
    console.error("❌ Error creating admin user:", error);
  }
}

// Run if this file is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  createAdminUser().then(() => {
    process.exit(0);
  }).catch((error) => {
    console.error("Fatal error:", error);
    process.exit(1);
  });
}

export { createAdminUser };