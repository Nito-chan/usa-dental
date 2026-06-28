'use client';

import { motion } from 'framer-motion';

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: 'center' | 'left';
  className?: string;
}

export function SectionHeading({ label, title, subtitle, align = 'center', className = '' }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      className={`mb-10 md:mb-14 ${align === 'center' ? 'text-center' : 'text-left'} ${className}`}
    >
      {label && (
        <span className="inline-block text-xs font-semibold uppercase tracking-[0.15em] text-[var(--primary)] mb-4">
          {label}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--text)] leading-[1.1] tracking-tight text-balance">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 md:mt-5 text-base md:text-lg text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
