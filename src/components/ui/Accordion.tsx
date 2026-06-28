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
              ? 'border-[var(--primary)]/20 bg-[var(--primary)]/5 shadow-sm'
              : 'border-[var(--border)] bg-[var(--bg-card)] hover:border-[var(--border)]'
          }`}
        >
          <button
            onClick={() => toggle(idx)}
            className="w-full flex items-center justify-between px-5 md:px-6 py-4 md:py-5 text-left text-sm md:text-base font-semibold text-[var(--text)] gap-4"
            aria-expanded={openIndex === idx}
          >
            <span>{item.question}</span>
            <svg
              className={`w-5 h-5 shrink-0 text-[var(--primary)] transition-transform duration-200 ${
                openIndex === idx ? 'rotate-180' : ''
              }`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
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
