import { useEffect } from 'react';

// Google Analytics tracking
export function usePageTracking() {
  useEffect(() => {
    // Track page view
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: document.title,
        page_location: window.location.href,
      });
    }
  }, []);
}

// Event tracking for therapy-specific actions
export function trackEvent(action: string, category: string, label?: string, value?: number) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
}

// Therapy-specific event tracking
export const therapyEvents = {
  // Contact & Booking Events
  whatsappClick: () => trackEvent('whatsapp_click', 'contact', 'therapy_booking'),
  contactFormSubmit: () => trackEvent('form_submit', 'contact', 'therapy_inquiry'),
  phoneClick: () => trackEvent('phone_click', 'contact', 'therapy_booking'),
  
  // Service Interest Events
  serviceView: (serviceName: string) => trackEvent('service_view', 'services', serviceName),
  approachView: (approachName: string) => trackEvent('approach_view', 'therapy_approach', approachName),
  
  // Engagement Events
  testimonialView: () => trackEvent('testimonial_view', 'engagement', 'social_proof'),
  aboutView: () => trackEvent('about_view', 'engagement', 'therapist_info'),
  sessionInfoView: () => trackEvent('session_info_view', 'engagement', 'session_details'),
  
  // Navigation Events
  sectionScroll: (sectionName: string) => trackEvent('section_scroll', 'navigation', sectionName),
  menuClick: (menuItem: string) => trackEvent('menu_click', 'navigation', menuItem),
  
  // Conversion Events
  sessionBooked: () => trackEvent('session_booked', 'conversion', 'therapy_session', 1),
  consultationRequest: () => trackEvent('consultation_request', 'conversion', 'therapy_consultation', 1),
};

// Scroll depth tracking for engagement
export function useScrollTracking() {
  useEffect(() => {
    const thresholds = [25, 50, 75, 90];
    const trackedThresholds = new Set();
    
    const handleScroll = () => {
      const scrollPercent = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      );
      
      thresholds.forEach(threshold => {
        if (scrollPercent >= threshold && !trackedThresholds.has(threshold)) {
          trackedThresholds.add(threshold);
          trackEvent('scroll_depth', 'engagement', `${threshold}%`, threshold);
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
}

// Session duration tracking
export function useSessionTracking() {
  useEffect(() => {
    const startTime = Date.now();
    
    const handleBeforeUnload = () => {
      const sessionDuration = Math.round((Date.now() - startTime) / 1000);
      trackEvent('session_duration', 'engagement', 'time_on_site', sessionDuration);
    };
    
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, []);
}

// Performance tracking
export function usePerformanceTracking() {
  useEffect(() => {
    if ('performance' in window) {
      window.addEventListener('load', () => {
        setTimeout(() => {
          const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
          const loadTime = navigation.loadEventEnd - navigation.fetchStart;
          
          trackEvent('page_load_time', 'performance', 'load_time', Math.round(loadTime));
          
          // Track Core Web Vitals if available
          if ('web-vitals' in window) {
            // Would integrate with web-vitals library here
          }
        }, 0);
      });
    }
  }, []);
}

// A11y and UX tracking
export function useAccessibilityTracking() {
  useEffect(() => {
    // Track keyboard navigation usage
    let keyboardUser = false;
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab' && !keyboardUser) {
        keyboardUser = true;
        trackEvent('keyboard_navigation', 'accessibility', 'tab_usage');
      }
    };
    
    // Track screen reader usage (basic detection)
    const checkScreenReader = () => {
      if (window.speechSynthesis || window.navigator.userAgent.includes('NVDA') || 
          window.navigator.userAgent.includes('JAWS')) {
        trackEvent('screen_reader_detected', 'accessibility', 'assistive_technology');
      }
    };
    
    document.addEventListener('keydown', handleKeyDown);
    checkScreenReader();
    
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);
}

// Declare gtag types for TypeScript
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}