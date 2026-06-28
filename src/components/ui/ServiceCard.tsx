'use client';

import { motion } from 'framer-motion';
import { ServiceIcon } from './ServiceIcon';
import type { Service } from '@/types';

interface ServiceCardProps {
  service: Service;
  index: number;
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="group relative rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] p-6 md:p-7 card-hover"
    >
      <div className="flex items-start justify-between mb-5">
        <div className="w-12 h-12 rounded-xl bg-[var(--accent)]/10 flex items-center justify-center text-[var(--accent)] group-hover:bg-[var(--accent)] group-hover:text-white transition-all duration-300">
          <ServiceIcon name={service.icon} className="w-5 h-5" />
        </div>
        <span className="text-5xl font-bold font-display text-[var(--border)] select-none leading-none">{service.id}</span>
      </div>
      <h3 className="text-xl font-bold text-[var(--text)] mb-2">{service.name}</h3>
      <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-5">{service.description}</p>
      <div className="flex items-center justify-between">
        {service.startingPrice && (
          <span className="text-sm font-semibold text-[var(--accent)]">
            From <span className="text-lg">{service.startingPrice}</span>
          </span>
        )}
        <a
          href="#booking"
          className="text-sm font-semibold text-[var(--accent)] hover:text-[var(--accent-dark)] transition-colors inline-flex items-center gap-1.5"
        >
          Book now
          <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
        </a>
      </div>
    </motion.div>
  );
}
