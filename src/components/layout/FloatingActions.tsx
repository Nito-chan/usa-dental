'use client';

import { Button } from '@/components/ui/Button';
import type { SiteInfo } from '@/types';

interface FloatingActionsProps {
  site: SiteInfo;
}

export function FloatingActions({ site }: FloatingActionsProps) {
  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-[var(--bg)]/95 backdrop-blur-md border-t border-[var(--border)] px-4 py-2 flex items-center gap-2 safe-area-bottom">
        <a
          href={`tel:${site.phone.replace(/[^0-9+]/g, '')}`}
          className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl border border-[var(--border)] text-sm font-semibold text-[var(--text)] hover:bg-[var(--bg-alt)] transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
          </svg>
          Call Now
        </a>
        <Button href="#booking" className="flex-1" size="sm">
          Book Appointment
        </Button>
      </div>

      <a
        href={`tel:${site.phone.replace(/[^0-9]/g, '')}`}
        className="fixed bottom-4 right-4 z-40 w-12 h-12 rounded-full bg-[var(--accent)] text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 flex items-center justify-center md:bottom-6 md:right-6 md:w-14 md:h-14"
        aria-label="Call us"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="md:w-6 md:h-6">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
        </svg>
      </a>
    </>
  );
}
