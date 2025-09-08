# Overview

This is a therapy and wellness website called "Wellness Whispers" built for Ms. Pavan Chowdhary, a licensed therapist offering online talk therapy services. The application is a modern full-stack web application that provides information about therapy services, allows potential clients to learn about the therapist, and facilitates contact through both traditional forms and WhatsApp integration.

The site features a warm, calming design with a therapy-focused color palette (peach, sage, soft beige, cream) and includes sections for services offered, therapeutic approaches, session information, testimonials, and contact forms. The primary goal is to create a welcoming online presence that helps clients feel comfortable reaching out for mental health support.

## Recent Changes (August 2025)
- **✅ Image Upload System Complete**: Admin can now upload custom images that appear on the hero section
- **✅ File Persistence Fixed**: Implemented file-based storage to survive server restarts
- **✅ Object Storage Integration**: Full integration with Replit object storage for WebP image handling
- **✅ React Query Fixed**: Resolved query configuration issues that blocked API calls
- **✅ Image Matching System**: Smart keyword-based matching to replace specific hero images with uploaded content
- **✅ Hero Section Redesigned**: Replaced polaroid-style layout with modern card-based grid design
- **✅ Pricing Section Fixed**: "Most Popular" badge now properly positioned on large screens
- **✅ Crushed Paper Background**: Added authentic paper texture throughout entire website
- **✅ Image Quality Improved**: Updated to high-resolution Unsplash images for better visual appeal
- **✅ Dynamic Content System**: All website sections now read from admin-editable content blocks
- **✅ Netlify Build Fixed**: Resolved vite command and secrets scanning issues preventing deployment
- **✅ Serverless Functions**: Converted Express.js to Netlify Functions for production compatibility  
- **✅ Custom Build Script**: Created `build.sh` script that builds frontend without server compilation
- **✅ Security Compliance**: Fixed secrets scanning by removing exposed values from documentation
- **✅ API Routing Fixed**: Implemented proper path forwarding in Netlify Functions for admin login
- **✅ Homepage Restructured**: Changed hero section from 3 to 2 images for cleaner layout
- **✅ Page Separation**: Moved About Me and After Therapy sections to dedicated pages (/about, /after-therapy)
- **✅ Navigation Updated**: Header menu now includes direct links to About and After Therapy pages
- **✅ Production Ready**: Complete deployment pipeline working with admin login functionality
- **✅ Supabase Integration**: Database connection ready with fallback authentication system
- **✅ Build Fix August 2025**: Fixed critical Netlify deployment failure by updating CSS background image reference to use existing assets
- **✅ Footer Background Update**: Added footer-bg.jpg golden grass field background with card-based footer design for optimal text visibility
- **✅ Nature Healing Section**: Added new full-size image section after Services using middle-bg2.jpg with healing quote about stillness
- **✅ Therapy Section Hidden**: Temporarily hidden "Therapy in Everyday Moments" section while preserving code in comments
- **✅ Hero Layout Updates**: Completed 40%-60% split with text on left, background on right, centered portrait image, capitalized title, removed duplicates and CTA button
- **✅ Transition Content Added**: Replaced empty breathing space with meaningful transitional message between hero and full image section for better flow
- **✅ Hero Font Finalized**: Updated hero section to use Cormorant Garamond (Extralight) with proper capitalization "WELCOME TO YOUR SAFE SPACE" (no full stop)
- **✅ Background Cleanup**: Removed colored background from hero left panel to use natural body background texture

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React with TypeScript using Vite as the build tool
- **Styling**: Tailwind CSS with a custom therapy-themed color palette and shadcn/ui component library
- **UI Components**: Comprehensive component system using Radix UI primitives for accessibility
- **State Management**: React Query (TanStack Query) for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Form Handling**: React Hook Form with Zod validation for type-safe form management

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **API Design**: RESTful API with structured error handling and request logging
- **Data Storage**: In-memory storage with interface for future database integration
- **Development Setup**: Hot module replacement with Vite integration for seamless development

## Data Layer
- **Schema Definition**: Shared TypeScript types and Zod schemas for type safety across client/server
- **Database Ready**: Drizzle ORM configured for PostgreSQL with migration support
- **Contact Management**: Contact form submissions with validation and storage

## External Service Integrations
- **WhatsApp Web API**: Direct chat functionality for immediate client communication
- **Image Services**: Unsplash integration for therapy-related imagery
- **Development Tools**: Replit-specific tooling for cloud development environment

## Key Architectural Decisions

### Monorepo Structure
The application uses a well-organized monorepo with clear separation:
- `client/` - React frontend application
- `server/` - Express.js backend API
- `shared/` - Common types, schemas, and utilities
- `components.json` - shadcn/ui configuration for consistent UI components

### Database Architecture
Currently uses in-memory storage for rapid development, but includes full Drizzle ORM setup with PostgreSQL configuration for production deployment. The storage interface allows for seamless transition from memory to persistent database storage.

### Type Safety
Comprehensive TypeScript implementation with shared schemas using Zod for runtime validation. This ensures type safety across the entire application stack, from database queries to API responses to frontend forms.

### Responsive Design
Mobile-first approach using Tailwind CSS with custom breakpoints and extensive use of responsive utilities. The design system includes therapy-specific color variables and consistent spacing.

### Development Experience
Hot module replacement, comprehensive error handling, and development-specific tooling for rapid iteration. The Vite configuration includes custom aliases and development plugins for enhanced productivity.