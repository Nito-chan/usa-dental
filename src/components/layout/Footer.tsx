'use client';

import { useState, useEffect, type ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Footer as FooterType, SiteInfo } from '@/types';

interface FooterProps {
  footer: FooterType;
  site: SiteInfo;
}

export function Footer({ footer, site }: FooterProps) {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowBackToTop(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const socialIcons: Record<string, ReactNode> = {
    facebook: <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>,
    instagram: <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z" /></svg>,
    twitter: <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231z" /></svg>,
    youtube: <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z" /></svg>,
  };

  return (
    <footer className="bg-[var(--bg-alt)] border-t border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[var(--accent)] flex items-center justify-center text-white font-bold text-sm">BS</div>
              <span className="text-base font-bold text-[var(--text)]">{site.shortName}</span>
            </div>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-5 max-w-sm">
              {footer.description}
            </p>
            <div className="flex gap-2">
              {Object.entries(site.social).map(([key, url]) => (
                <a
                  key={key}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-[var(--bg)] border border-[var(--border)] flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--accent)] hover:border-[var(--accent)] hover:-translate-y-0.5 transition-all duration-200"
                  aria-label={key}
                >
                  {socialIcons[key]}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-[var(--text)] uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {footer.quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-[var(--text)] uppercase tracking-wider mb-4">Services</h4>
            <ul className="space-y-2.5">
              {footer.serviceLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-[var(--text)] uppercase tracking-wider mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-[var(--text-secondary)]">
              <li><a href={`tel:${site.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-[var(--accent)] transition-colors">{site.phone}</a></li>
              <li><a href={`mailto:${site.email}`} className="hover:text-[var(--accent)] transition-colors break-all">{site.email}</a></li>
              <li className="leading-relaxed">{site.address}</li>
              <li className="pt-2">
                <span className="font-semibold text-[var(--text)]">Hours</span><br />
                {site.businessHours.weekdays}<br />
                {site.businessHours.saturday}<br />
                {site.businessHours.sunday}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-[var(--border)]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            <div>
              <iframe
                src={site.googleMapsEmbedSrc}
                width="100%"
                height="200"
                style={{ border: 0, borderRadius: '12px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Bright Smile Dentary location"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h4 className="text-sm font-semibold text-[var(--text)] mb-3">We Accept</h4>
              <div className="flex flex-wrap gap-2">
                {['Delta Dental', 'Cigna', 'MetLife', 'Aetna', 'Guardian', 'BlueCross'].map((ins) => (
                  <span key={ins} className="px-3 py-1.5 rounded-lg bg-[var(--bg)] border border-[var(--border)] text-xs font-medium text-[var(--text-secondary)]">
                    {ins}
                  </span>
                ))}
                <span className="px-3 py-1.5 rounded-lg bg-[var(--accent)]/5 border border-[var(--accent)]/15 text-xs font-medium text-[var(--accent)]">
                  + more
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-[var(--border)] flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[var(--text-muted)]">
          <div>&copy; {new Date().getFullYear()} {site.name}. All rights reserved.</div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-[var(--accent)] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[var(--accent)] transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-[var(--accent)] transition-colors">HIPAA Notice</a>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-24 right-4 md:bottom-6 z-30 w-10 h-10 rounded-full bg-[var(--accent)] text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center"
            aria-label="Back to top"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 15l-6-6-6 6" />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}
