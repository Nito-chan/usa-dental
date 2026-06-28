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
      className="group relative rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] p-6 md:p-7 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
    >
      <div className="flex items-start justify-between mb-4">
        <span className="text-3xl font-bold text-[var(--primary)]/10 select-none">{service.id}</span>
        <span className="text-[var(--primary)]">
          <ServiceIcon name={service.icon} className="w-6 h-6" />
        </span>
      </div>
      <h3 className="text-lg font-bold text-[var(--text)] mb-2">{service.name}</h3>
      <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">{service.description}</p>
      <div className="flex items-center justify-between">
        {service.startingPrice && (
          <span className="text-sm font-semibold text-[var(--primary)]">
            From <span className="text-lg">{service.startingPrice}</span>
          </span>
        )}
        <a
          href="#booking"
          className="text-sm font-semibold text-[var(--primary)] hover:text-[var(--primary-dark)] transition-colors inline-flex items-center gap-1.5"
        >
          Book now
          <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
        </a>
      </div>
    </motion.div>
  );
}
