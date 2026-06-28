'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { FAQItem } from '@/types';

interface AccordionProps {
  items: FAQItem[];
}

export function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => setOpenIndex(openIndex === idx ? null : idx);

  return (
    <div className="space-y-3">
      {items.map((item, idx) => (
        <div
          key={idx}
          className={`rounded-2xl border transition-all duration-200 ${
            openIndex === idx
              ? 'border-[var(--accent)]/20 bg-[var(--accent)]/5 shadow-sm'
              : 'border-[var(--border)] bg-[var(--bg-card)] hover:border-[var(--border-hover)] card-hover'
          }`}
        >
          <button
            onClick={() => toggle(idx)}
            className="w-full flex items-center justify-between px-5 md:px-6 py-4 md:py-5 text-left text-sm md:text-base font-semibold text-[var(--text)] gap-4 focus-ring"
            aria-expanded={openIndex === idx}
          >
            <span>{item.question}</span>
            <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-all duration-200 ${
              openIndex === idx ? 'bg-[var(--accent)] text-white' : 'bg-[var(--bg-alt)] text-[var(--text-muted)]'
            }`}>
              <svg
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  openIndex === idx ? 'rotate-180' : ''
                }`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </div>
          </button>
          <AnimatePresence>
            {openIndex === idx && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="overflow-hidden"
              >
                <div className="px-5 md:px-6 pb-4 md:pb-5 text-sm md:text-base text-[var(--text-secondary)] leading-relaxed">
                  {item.answer}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
