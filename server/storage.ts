import {
  contacts,
  adminUsers,
  galleryImages,
  contentBlocks,
  type Contact,
  type InsertContact,
  type AdminUser,
  type InsertAdminUser,
  type GalleryImage,
  type InsertGalleryImage,
  type ContentBlock,
  type InsertContentBlock,
} from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";
import bcrypt from "bcryptjs";

export interface IStorage {
  // Contact methods
  createContact(contact: InsertContact): Promise<Contact>;
  getContacts(): Promise<Contact[]>;
  getContact(id: string): Promise<Contact | undefined>;
  
  // Admin user methods
  getAdminUserByEmail(email: string): Promise<AdminUser | undefined>;
  createAdminUser(user: InsertAdminUser): Promise<AdminUser>;
  validateAdminPassword(email: string, password: string): Promise<AdminUser | null>;
  
  // Gallery image methods
  getGalleryImages(category?: string): Promise<GalleryImage[]>;
  createGalleryImage(image: InsertGalleryImage): Promise<GalleryImage>;
  updateGalleryImage(id: string, image: Partial<GalleryImage>): Promise<GalleryImage>;
  deleteGalleryImage(id: string): Promise<void>;
  
  // Content block methods
  getContentBlocks(): Promise<ContentBlock[]>;
  getContentBlockByKey(blockKey: string): Promise<ContentBlock | undefined>;
  upsertContentBlock(block: InsertContentBlock): Promise<ContentBlock>;
}

import fs from 'fs';
import path from 'path';

// Database storage implementation for production
class DatabaseStorage implements IStorage {
  // Contact methods
  async createContact(contact: InsertContact): Promise<Contact> {
    const [created] = await db.insert(contacts).values(contact).returning();
    return created;
  }

  async getContacts(): Promise<Contact[]> {
    return await db.select().from(contacts);
  }

  async getContact(id: string): Promise<Contact | undefined> {
    const [contact] = await db.select().from(contacts).where(eq(contacts.id, id));
    return contact;
  }

  // Admin user methods
  async getAdminUserByEmail(email: string): Promise<AdminUser | undefined> {
    const [user] = await db.select().from(adminUsers).where(eq(adminUsers.email, email));
    return user;
  }

  async createAdminUser(user: InsertAdminUser): Promise<AdminUser> {
    const hashedPassword = await bcrypt.hash(user.passwordHash, 10);
    const [created] = await db.insert(adminUsers).values({
      ...user,
      passwordHash: hashedPassword,
    }).returning();
    return created;
  }

  async validateAdminPassword(email: string, password: string): Promise<AdminUser | null> {
    const user = await this.getAdminUserByEmail(email);
    if (!user) return null;
    
    const isValid = await bcrypt.compare(password, user.passwordHash);
    return isValid ? user : null;
  }

  // Gallery image methods
  async getGalleryImages(category?: string): Promise<GalleryImage[]> {
    if (category) {
      return await db.select().from(galleryImages).where(eq(galleryImages.category, category));
    }
    return await db.select().from(galleryImages);
  }

  async createGalleryImage(image: InsertGalleryImage): Promise<GalleryImage> {
    const [created] = await db.insert(galleryImages).values(image).returning();
    return created;
  }

  async updateGalleryImage(id: string, image: Partial<GalleryImage>): Promise<GalleryImage> {
    const [updated] = await db.update(galleryImages)
      .set({ ...image, updatedAt: new Date() })
      .where(eq(galleryImages.id, id))
      .returning();
    return updated;
  }

  async deleteGalleryImage(id: string): Promise<void> {
    await db.delete(galleryImages).where(eq(galleryImages.id, id));
  }

  // Content block methods
  async getContentBlocks(): Promise<ContentBlock[]> {
    return await db.select().from(contentBlocks);
  }

  async getContentBlockByKey(blockKey: string): Promise<ContentBlock | undefined> {
    const [block] = await db.select().from(contentBlocks).where(eq(contentBlocks.blockKey, blockKey));
    return block;
  }

  async upsertContentBlock(block: InsertContentBlock): Promise<ContentBlock> {
    const existing = await this.getContentBlockByKey(block.blockKey);
    
    if (existing) {
      const [updated] = await db.update(contentBlocks)
        .set({ ...block, updatedAt: new Date() })
        .where(eq(contentBlocks.blockKey, block.blockKey))
        .returning();
      return updated;
    } else {
      const [created] = await db.insert(contentBlocks).values(block).returning();
      return created;
    }
  }
}

// File-based storage that persists across server restarts (for development)
class MemoryStorage implements IStorage {
  private contacts: Contact[] = [];
  private adminUsers: AdminUser[] = [];
  private galleryImages: GalleryImage[] = [];
  private contentBlocks: ContentBlock[] = [];
  private dataFile = path.join(process.cwd(), 'storage-data.json');

  constructor() {
    this.loadData();
  }

  private loadData() {
    try {
      if (fs.existsSync(this.dataFile)) {
        const data = JSON.parse(fs.readFileSync(this.dataFile, 'utf8'));
        this.contacts = data.contacts || [];
        this.adminUsers = data.adminUsers || [];
        this.galleryImages = (data.galleryImages || []).map((img: any) => ({
          ...img,
          createdAt: new Date(img.createdAt),
          updatedAt: new Date(img.updatedAt)
        }));
        this.contentBlocks = data.contentBlocks || [];
        console.log(`📁 Loaded data: ${this.galleryImages.length} gallery images`);
      }
    } catch (error) {
      console.error('Error loading storage data:', error);
    }
  }

  private saveData() {
    try {
      const data = {
        contacts: this.contacts,
        adminUsers: this.adminUsers,
        galleryImages: this.galleryImages,
        contentBlocks: this.contentBlocks
      };
      fs.writeFileSync(this.dataFile, JSON.stringify(data, null, 2));
    } catch (error) {
      console.error('Error saving storage data:', error);
    }
  }

  // Contact methods
  async createContact(contact: InsertContact): Promise<Contact> {
    const newContact: Contact = {
      id: Math.random().toString(36).substr(2, 9),
      ...contact,
      phone: contact.phone || null,
      createdAt: new Date(),
    };
    this.contacts.push(newContact);
    this.saveData();
    return newContact;
  }

  async getContacts(): Promise<Contact[]> {
    return [...this.contacts].sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }

  async getContact(id: string): Promise<Contact | undefined> {
    return this.contacts.find(c => c.id === id);
  }

  // Admin user methods
  async getAdminUserByEmail(email: string): Promise<AdminUser | undefined> {
    return this.adminUsers.find(u => u.email === email);
  }

  async createAdminUser(user: InsertAdminUser): Promise<AdminUser> {
    const hashedPassword = await bcrypt.hash(user.passwordHash, 12);
    const newUser: AdminUser = {
      id: Math.random().toString(36).substr(2, 9),
      ...user,
      passwordHash: hashedPassword,
      isActive: user.isActive ?? true,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.adminUsers.push(newUser);
    this.saveData();
    return newUser;
  }

  async validateAdminPassword(email: string, password: string): Promise<AdminUser | null> {
    const user = await this.getAdminUserByEmail(email);
    if (!user || !user.isActive) return null;
    
    const isValid = await bcrypt.compare(password, user.passwordHash);
    return isValid ? user : null;
  }

  // Gallery image methods
  async getGalleryImages(category?: string): Promise<GalleryImage[]> {
    let images = this.galleryImages;
    if (category) {
      images = images.filter(img => img.category === category);
    }
    return images.sort((a, b) => b.createdAt!.getTime() - a.createdAt!.getTime());
  }

  async createGalleryImage(image: InsertGalleryImage): Promise<GalleryImage> {
    const newImage: GalleryImage = {
      id: Math.random().toString(36).substr(2, 9),
      ...image,
      isActive: image.isActive ?? true,
      description: image.description || null,
      sortOrder: image.sortOrder || null,
      uploadedBy: image.uploadedBy || null,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.galleryImages.push(newImage);
    this.saveData();
    console.log(`💾 Saved gallery image: ${newImage.title} (Total: ${this.galleryImages.length})`);
    return newImage;
  }

  async updateGalleryImage(id: string, image: Partial<GalleryImage>): Promise<GalleryImage> {
    const index = this.galleryImages.findIndex(img => img.id === id);
    if (index === -1) throw new Error("Image not found");
    
    this.galleryImages[index] = {
      ...this.galleryImages[index],
      ...image,
      updatedAt: new Date(),
    };
    this.saveData();
    return this.galleryImages[index];
  }

  async deleteGalleryImage(id: string): Promise<void> {
    const index = this.galleryImages.findIndex(img => img.id === id);
    if (index !== -1) {
      this.galleryImages.splice(index, 1);
    }
  }

  // Content block methods
  async getContentBlocks(): Promise<ContentBlock[]> {
    return this.contentBlocks.sort((a, b) => a.blockKey.localeCompare(b.blockKey));
  }

  async getContentBlockByKey(blockKey: string): Promise<ContentBlock | undefined> {
    return this.contentBlocks.find(block => block.blockKey === blockKey);
  }

  async upsertContentBlock(block: InsertContentBlock): Promise<ContentBlock> {
    console.log("Upserting content block:", block);
    const existing = await this.getContentBlockByKey(block.blockKey);
    console.log("Existing block:", existing);
    
    if (existing) {
      const index = this.contentBlocks.findIndex(b => b.blockKey === block.blockKey);
      this.contentBlocks[index] = {
        ...existing,
        ...block,
        updatedAt: new Date(),
      };
      console.log("Updated existing block:", this.contentBlocks[index]);
      this.saveData();
      return this.contentBlocks[index];
    } else {
      const newBlock: ContentBlock = {
        id: Math.random().toString(36).substr(2, 9),
        ...block,
        isActive: block.isActive ?? true,
        updatedBy: block.updatedBy || null,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      console.log("Creating new block:", newBlock);
      this.contentBlocks.push(newBlock);
      this.saveData();
      return newBlock;
    }
  }
}

// Create storage with fallback logic
function createStorage(): IStorage {
  // Always try memory storage first if database connection fails
  try {
    // For production, try database first but fallback to memory if it fails
    if (process.env.NODE_ENV === 'production' || process.env.USE_DATABASE === 'true') {
      console.log('🔄 Attempting to use database storage...');
      return new DatabaseStorage();
    }
  } catch (error) {
    console.log('⚠️ Database storage failed, falling back to memory storage:', error);
  }
  
  console.log('📁 Using memory storage (file-based)');
  return new MemoryStorage();
}

export const storage = createStorage();

// Export both for testing
export { DatabaseStorage, MemoryStorage };
