import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const contacts = pgTable("contacts", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  message: text("message").notNull(),
  preferredContact: text("preferred_contact").notNull().default("whatsapp"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Admin users table
export const adminUsers = pgTable("admin_users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  email: varchar("email").unique().notNull(),
  passwordHash: varchar("password_hash").notNull(),
  name: varchar("name").notNull(),
  isActive: boolean("is_active").default(true),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Gallery images table for admin management
export const galleryImages = pgTable("gallery_images", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  title: varchar("title").notNull(),
  description: text("description"),
  imageUrl: varchar("image_url").notNull(),
  altText: varchar("alt_text").notNull(),
  category: varchar("category").notNull(), // 'hero', 'about', 'services', 'testimonials'
  isActive: boolean("is_active").default(true),
  sortOrder: varchar("sort_order").default("0"),
  uploadedBy: varchar("uploaded_by").references(() => adminUsers.id),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Website content blocks for easy editing
export const contentBlocks = pgTable("content_blocks", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  blockKey: varchar("block_key").unique().notNull(), // 'hero_title', 'about_text', etc.
  title: varchar("title").notNull(),
  content: text("content").notNull(),
  blockType: varchar("block_type").notNull(), // 'text', 'html', 'image'
  isActive: boolean("is_active").default(true),
  updatedBy: varchar("updated_by").references(() => adminUsers.id),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const insertContactSchema = createInsertSchema(contacts).omit({
  id: true,
  createdAt: true,
});

export const insertAdminUserSchema = createInsertSchema(adminUsers).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const insertGalleryImageSchema = createInsertSchema(galleryImages).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const insertContentBlockSchema = createInsertSchema(contentBlocks).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

// Type exports
export type Contact = typeof contacts.$inferSelect;
export type InsertContact = z.infer<typeof insertContactSchema>;

export type AdminUser = typeof adminUsers.$inferSelect;
export type InsertAdminUser = z.infer<typeof insertAdminUserSchema>;

export type GalleryImage = typeof galleryImages.$inferSelect;
export type InsertGalleryImage = z.infer<typeof insertGalleryImageSchema>;

export type ContentBlock = typeof contentBlocks.$inferSelect;
export type InsertContentBlock = z.infer<typeof insertContentBlockSchema>;
