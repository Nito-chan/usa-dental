'use client';

import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';

interface InsuranceProps {
  providers: string[];
  phone: string;
}

export function Insurance({ providers, phone }: InsuranceProps) {
  return (
    <section id="insurance" className="section-padding bg-[var(--bg-secondary)]">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          label="Insurance & Financing"
          title="We Accept Most Major Plans"
          subtitle="Dental care should be accessible. We work with most major insurance providers and offer flexible financing options."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] p-6 md:p-8 shadow-sm"
        >
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {providers.map((ins) => (
              <span
                key={ins}
                className="px-4 py-2 rounded-xl bg-[var(--bg)] border border-[var(--border)] text-sm font-medium text-[var(--text)] hover:border-[var(--primary)]/30 hover:bg-[var(--primary)]/5 transition-all duration-200"
              >
                {ins}
              </span>
            ))}
          </div>

          <div className="text-center border-t border-[var(--border-light)] pt-6">
            <p className="text-sm text-[var(--text-secondary)] mb-4">
              Don&apos;t see your plan? Call us — we&apos;ll verify your benefits and provide a clear estimate before your visit.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button href={`tel:${phone.replace(/[^0-9+]/g, '')}`} variant="outline" size="md">
                Call to Verify Benefits
              </Button>
              <Button href="#booking" variant="primary" size="md">
                Book an Appointment
              </Button>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-6 rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] p-6 md:p-8 shadow-sm"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)]">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 1v3m0 16v3M4.22 4.22l2.12 2.12m11.32 11.32l2.12 2.12M1 12h3m16 0h3M4.22 19.78l2.12-2.12m11.32-11.32l2.12-2.12" /></svg>
            </div>
            <div>
              <h3 className="text-base font-bold text-[var(--text)]">Financing Available</h3>
              <p className="text-sm text-[var(--text-secondary)]">CareCredit and in-house payment plans available for qualifying patients.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
