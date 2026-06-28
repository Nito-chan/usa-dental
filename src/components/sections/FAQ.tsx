'use client';

import { Accordion } from '@/components/ui/Accordion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import type { FAQItem } from '@/types';

interface FAQProps {
  items: FAQItem[];
}

export function FAQ({ items }: FAQProps) {
  return (
    <section id="faq" className="section-padding">
      <div className="max-w-3xl mx-auto">
        <SectionHeading
          label="FAQ"
          title="Frequently Asked Questions"
          subtitle="Everything you need to know before your visit."
        />
        <Accordion items={items} />
      </div>
    </section>
  );
}
