/**
 * analytics.ts — GA4 Custom Event Tracking
 *
 * Utilizes the gtag function provided by @next/third-parties/google
 * to fire custom lead_inquiry events.
 */

import { sendGAEvent } from '@next/third-parties/google';

export const trackWhatsAppInquiry = (toolName: string = 'General Inquiry') => {
  // Only track in production and if GA ID is present
  if (process.env.NODE_ENV !== 'production' || !process.env.NEXT_PUBLIC_GA_ID) {
    console.log(`[Analytics Mock] Tracking lead_inquiry: ${toolName}`);
    return;
  }

  try {
    sendGAEvent('event', 'lead_inquiry', {
      tool_name: toolName,
      conversion_point: 'WhatsApp Inquiry',
      timestamp: new Date().toISOString(),
    });
    console.log(`[Analytics] lead_inquiry success: ${toolName}`);
  } catch (error) {
    console.error('[Analytics] Failed to send GA event:', error);
  }
};

/**
 * Basic Consent Mode Initialization
 * Prepares the site for international privacy standards (GDPR/CCPA).
 */
export const initConsentMode = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('consent', 'default', {
            'ad_storage': 'denied',
            'analytics_storage': 'denied',
            'wait_for_update': 500
        });
    }
};
