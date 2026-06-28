'use client';

import { motion } from 'framer-motion';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import type { StatItem } from '@/types';

interface StatsProps {
  items: StatItem[];
}

export function Stats({ items }: StatsProps) {
  return (
    <section className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 md:p-10 rounded-2xl bg-[var(--bg-alt)] border border-[var(--border)]"
        >
          {items.map((stat) => (
            <AnimatedCounter
              key={stat.label}
              end={stat.value}
              suffix={stat.suffix}
              prefix={stat.prefix || ''}
              label={stat.label}
              isDecimal={stat.isDecimal}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
