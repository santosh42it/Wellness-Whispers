import { useEffect } from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

export default function SEOHead({
  title = "Wellness Whispers - Professional Online Therapy | Ms. Pavan Chowdhary | Anxiety & Emotional Support",
  description = "Professional online talk therapy with Ms. Pavan Chowdhary, Gold Medalist MPA. Specializing in anxiety, depression, relationship healing, emotional support, mindfulness, and somatic techniques. 6+ years experience, affordable sessions via WhatsApp/Google Meet.",
  keywords = "online therapy, talk therapy, anxiety therapy, depression support, relationship counseling, emotional healing, mindfulness therapy, somatic grounding, EMDR techniques, affordable therapy, WhatsApp therapy, Google Meet therapy, Ms Pavan Chowdhary, licensed therapist, mental health support, emotional clarity, healing therapy, online counseling",
  image = "https://wellnesswhispers.in/og-image.jpg",
  url = "https://wellnesswhispers.in/",
  type = "website"
}: SEOHeadProps) {
  
  useEffect(() => {
    // Update document title
    document.title = title;
    
    // Update meta tags
    const updateMetaTag = (name: string, content: string, property = false) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector(selector);
      if (!meta) {
        meta = document.createElement('meta');
        if (property) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // Update basic meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    
    // Update Open Graph tags
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', image, true);
    updateMetaTag('og:url', url, true);
    updateMetaTag('og:type', type, true);
    
    // Update Twitter Card tags
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', image);
    
    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);
    
  }, [title, description, keywords, image, url, type]);

  return null;
}

// Page-specific SEO configurations
export const seoConfig = {
  home: {
    title: "Wellness Whispers - Professional Online Therapy | Ms. Pavan Chowdhary",
    description: "Professional online talk therapy with Ms. Pavan Chowdhary. Specializing in anxiety, relationship healing, emotional support & mindfulness. Book your healing session today.",
    keywords: "online therapy, anxiety support, relationship healing, emotional therapy, mindfulness, Ms Pavan Chowdhary, professional therapist",
    url: "https://wellnesswhispers.in/"
  },
  about: {
    title: "About Ms. Pavan Chowdhary - Licensed Therapist | Wellness Whispers",
    description: "Meet Ms. Pavan Chowdhary, Gold Medalist MPA with 6+ years therapy experience. Specialized in anxiety, relationship healing & somatic techniques. Licensed professional therapist.",
    keywords: "Ms Pavan Chowdhary, licensed therapist, therapy qualifications, professional counselor, anxiety specialist, relationship therapist",
    url: "https://wellnesswhispers.in/#about"
  },
  services: {
    title: "Online Therapy Services - Anxiety, Depression & Relationship Support | Wellness Whispers",
    description: "Comprehensive online therapy services: anxiety support, depression help, relationship healing, emotional clarity, mindfulness & somatic grounding. Affordable, professional care.",
    keywords: "therapy services, anxiety therapy, depression support, relationship counseling, emotional healing, mindfulness therapy, online counseling",
    url: "https://wellnesswhispers.in/#services"
  },
  approach: {
    title: "Therapy Approach - Mindfulness, Somatic & EMDR Techniques | Wellness Whispers",
    description: "Gentle therapy approach using mindfulness, somatic grounding, breathwork, guided imagery & butterfly hug EMDR techniques. Person-centered, healing-focused sessions.",
    keywords: "therapy approach, mindfulness therapy, somatic grounding, EMDR techniques, breathwork, guided imagery, healing techniques",
    url: "https://wellnesswhispers.in/#approach"
  },
  contact: {
    title: "Book Your Therapy Session - WhatsApp & Online Booking | Wellness Whispers",
    description: "Book your online therapy session with Ms. Pavan Chowdhary. Available via WhatsApp +91 98806 07355 or Google Meet. Flexible timing, affordable rates.",
    keywords: "book therapy session, online therapy booking, WhatsApp therapy, Google Meet therapy, therapy appointment, mental health support",
    url: "https://wellnesswhispers.in/#contact"
  }
};