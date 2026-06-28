'use client';

import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ServiceIcon } from '@/components/ui/ServiceIcon';
import type { WhyChooseUsItem } from '@/types';

interface WhyChooseUsProps {
  items: WhyChooseUsItem[];
}

export function WhyChooseUs({ items }: WhyChooseUsProps) {
  return (
    <section id="why-choose-us" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="Why Choose Us"
          title="A Different Kind of Dental Experience"
          subtitle="We blend clinical excellence with genuine warmth — because great dental care should never feel intimidating."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] p-6 md:p-7 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className="w-10 h-10 rounded-xl bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] mb-4">
                <ServiceIcon name={item.icon} className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[var(--text)] mb-2">{item.title}</h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
