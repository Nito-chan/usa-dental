'use client';

import { motion } from 'framer-motion';
import { Button } from './Button';
import type { PricingPlan } from '@/types';

interface PricingCardProps {
  plan: PricingPlan;
  index: number;
}

export function PricingCard({ plan, index }: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className={`relative rounded-2xl border p-6 md:p-7 transition-all duration-200 ${
        plan.featured
          ? 'border-[var(--accent)]/30 bg-[var(--accent)]/5 shadow-lg amber-glow'
          : 'border-[var(--border)] bg-[var(--bg-card)] card-hover'
      }`}
    >
      {plan.badge && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[var(--accent)] text-white text-xs font-semibold shadow-sm">
          {plan.badge}
        </span>
      )}
      <div className="text-center mb-6">
        <h3 className="text-lg font-bold text-[var(--text)] mb-1">{plan.name}</h3>
        <p className="text-sm text-[var(--text-secondary)] mb-4">{plan.description}</p>
        <div className="mb-2">
          <span className="text-4xl font-bold accent-gradient-text">{plan.price}</span>
          {plan.period && <span className="text-sm text-[var(--text-muted)]">{plan.period}</span>}
        </div>
      </div>
      <ul className="space-y-3 mb-6">
        {plan.features.map((feat, idx) => (
          <li key={idx} className={`flex items-start gap-3 text-sm ${feat.included ? 'text-[var(--text)]' : 'text-[var(--text-muted)] line-through'}`}>
            <svg
              className={`w-4 h-4 mt-0.5 shrink-0 ${feat.included ? 'text-[var(--accent)]' : 'text-[var(--text-muted)]'}`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {feat.included ? <polyline points="20 6 9 17 4 12" /> : <line x1="18" y1="6" x2="6" y2="18" />}
            </svg>
            {feat.text}
          </li>
        ))}
      </ul>
      <Button href="#booking" variant={plan.featured ? 'primary' : 'outline'} className="w-full" size="md">
        {plan.cta}
      </Button>
    </motion.div>
  );
}
