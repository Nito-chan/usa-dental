import Image from 'next/image';
import { motion } from 'framer-motion';
import type { TeamMember } from '@/types';

interface TeamCardProps {
  member: TeamMember;
  index: number;
}

export function TeamCard({ member, index }: TeamCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] p-6 text-center hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
    >
      <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-[var(--bg-secondary)]">
        <Image src={member.photo} alt={member.name} width={96} height={96} className="w-full h-full object-cover" />
      </div>
      <h3 className="text-lg font-bold text-[var(--text)]">{member.name}</h3>
      <p className="text-sm font-medium text-[var(--primary)] mb-3">{member.position}</p>
      <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{member.bio}</p>
      <div className="mt-3 inline-flex items-center gap-1 text-xs text-[var(--text-muted)]">
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
        {member.yearsExperience}+ years experience
      </div>
    </motion.div>
  );
}
