'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';

interface FinalCTAProps {
  phone: string;
}

export function FinalCTA({ phone }: FinalCTAProps) {
  return (
    <section className="section-padding">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-[var(--text)] leading-[1.1] tracking-tight mb-4 text-balance">
            Ready for Your <span className="accent-gradient-text">Best Smile</span>?
          </h2>
          <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-8 max-w-lg mx-auto">
            Book a free consultation today — no commitment, just care. Your smile transformation starts here.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="#booking" variant="primary" size="lg">
              Book Free Consultation
            </Button>
            <Button href={`tel:${phone.replace(/[^0-9+]/g, '')}`} variant="outline" size="lg">
              Call Now
            </Button>
          </div>
          <p className="mt-4 text-xs text-[var(--text-muted)]">New patient special: Exam + X-rays + cleaning for $199</p>
        </motion.div>
      </div>
    </section>
  );
}
