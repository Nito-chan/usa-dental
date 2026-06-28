'use client';

import { motion } from 'framer-motion';
import { ServiceIcon } from '@/components/ui/ServiceIcon';
import type { Certification } from '@/types';

interface CertificationsProps {
  items: Certification[];
}

export function Certifications({ items }: CertificationsProps) {
  return (
    <section className="section-padding bg-[var(--bg-secondary)]">
      <div className="max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-xs text-[var(--text-muted)] font-medium mb-6 tracking-widest uppercase"
        >
          Our Credentials
        </motion.p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          {items.map((cert, idx) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.06 }}
              className="flex items-center gap-2.5 px-5 py-3 rounded-xl bg-[var(--bg-card)] border border-[var(--border)] shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
            >
              <span className="text-[var(--primary)]"><ServiceIcon name={cert.icon} className="w-5 h-5" /></span>
              <span className="text-sm font-semibold text-[var(--text)]">{cert.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
