'use client';

import { motion } from 'framer-motion';

interface EmergencyBannerProps {
  phone: string;
}

export function EmergencyBanner({ phone }: EmergencyBannerProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="section-padding py-8"
    >
      <div className="max-w-4xl mx-auto">
        <a
          href={`tel:${phone.replace(/[^0-9+]/g, '')}`}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 p-6 rounded-2xl bg-gradient-to-r from-red-500/10 via-red-500/5 to-red-500/10 border border-red-200 dark:border-red-900/30 hover:from-red-500/15 hover:to-red-500/15 transition-all duration-200 group"
        >
          <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 group-hover:scale-110 transition-transform duration-200">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
          </div>
          <div className="text-center sm:text-left">
            <div className="text-base font-bold text-[var(--text)]">Dental Emergency? We are here for you.</div>
            <div className="text-sm text-[var(--text-secondary)]">Same-day emergency appointments available. Call us now.</div>
          </div>
          <span className="text-lg font-bold text-[var(--primary)] whitespace-nowrap">{phone}</span>
        </a>
      </div>
    </motion.div>
  );
}
