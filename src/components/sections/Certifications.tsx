'use client';

import { motion } from 'framer-motion';
import { ServiceIcon } from '@/components/ui/ServiceIcon';
import type { Certification } from '@/types';

interface CertificationsProps {
  items: Certification[];
}

export function Certifications({ items }: CertificationsProps) {
  return (
    <section className="py-10 md:py-12 bg-[var(--bg-alt)]">
      <div className="max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-xs text-[var(--text-muted)] font-medium mb-6 tracking-widest uppercase"
        >
          Our Credentials
        </motion.p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          {items.map((cert, idx) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.06 }}
              className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border)] hover:border-[var(--accent)]/30 hover:shadow-sm transition-all duration-200"
            >
              <span className="text-[var(--accent)]"><ServiceIcon name={cert.icon} className="w-4 h-4" /></span>
              <span className="text-sm font-semibold text-[var(--text)]">{cert.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
