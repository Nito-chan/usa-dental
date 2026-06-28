'use client';

import { SectionHeading } from '@/components/ui/SectionHeading';
import { TeamCard } from '@/components/ui/TeamCard';
import type { TeamMember } from '@/types';

interface TeamProps {
  items: TeamMember[];
}

export function Team({ items }: TeamProps) {
  return (
    <section id="team" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="Meet the Experts"
          title="Our Doctors & Team"
          subtitle="Experienced, compassionate specialists dedicated to your smile."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((member, idx) => (
            <TeamCard key={member.name} member={member} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
