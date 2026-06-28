'use client';

import { SectionHeading } from '@/components/ui/SectionHeading';
import { PricingCard } from '@/components/ui/PricingCard';
import type { PricingPlan } from '@/types';

interface PricingProps {
  items: PricingPlan[];
}

export function Pricing({ items }: PricingProps) {
  return (
    <section id="pricing" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="Pricing"
          title="Transparent, Upfront Pricing"
          subtitle="No hidden fees, no surprises. What you see is what you pay."
        />
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto items-start">
          {items.map((plan, idx) => (
            <PricingCard key={plan.name} plan={plan} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
