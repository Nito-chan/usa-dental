'use client';

import { SectionHeading } from '@/components/ui/SectionHeading';
import { ServiceCard } from '@/components/ui/ServiceCard';
import type { Service } from '@/types';

interface ServicesProps {
  items: Service[];
}

export function Services({ items }: ServicesProps) {
  return (
    <section id="services" className="section-padding bg-[var(--bg-alt)]">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="What We Offer"
          title="Our Services"
          subtitle="Comprehensive dental care for every smile — from routine cleanings to complete smile transformations."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((service, idx) => (
            <ServiceCard key={service.id} service={service} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
