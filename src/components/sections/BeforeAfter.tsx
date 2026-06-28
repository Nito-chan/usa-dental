'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ImageCompare } from '@/components/ui/ImageCompare';
import { SectionHeading } from '@/components/ui/SectionHeading';
import type { BeforeAfterItem } from '@/types';

interface BeforeAfterProps {
  items: BeforeAfterItem[];
}

export function BeforeAfter({ items }: BeforeAfterProps) {
  const [active, setActive] = useState(items[0]);

  return (
    <section id="before-after" className="section-padding bg-[var(--bg-alt)]">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="Before & After"
          title="See the Transformation"
          subtitle="Real results from real patients. Drag the slider to reveal the difference."
        />

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {items.map((item) => (
            <button
              key={item.id}
              onClick={() => setActive(item)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                active.id === item.id
                  ? 'bg-[var(--accent)] text-white shadow-sm'
                  : 'bg-[var(--bg-card)] text-[var(--text-secondary)] border border-[var(--border)] hover:border-[var(--accent)] hover:text-[var(--accent)] hover:-translate-y-0.5'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
            >
              <ImageCompare
                before={active.imageBefore}
                after={active.imageAfter}
                beforeLabel="Before"
                afterLabel="After"
              />
              <div className="mt-6 flex flex-wrap items-center gap-3 justify-center text-sm">
                <span className="px-3.5 py-1.5 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] font-medium text-xs">
                  {active.timeSpent}
                </span>
                <span className="px-3.5 py-1.5 rounded-full bg-[var(--text)]/5 text-[var(--text-secondary)] font-medium text-xs">
                  {active.service}
                </span>
                <span className="text-[var(--text-muted)] text-sm leading-relaxed w-full text-center mt-1">
                  &ldquo;{active.review}&rdquo; — {active.author}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
