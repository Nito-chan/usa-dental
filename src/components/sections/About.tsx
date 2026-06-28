'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';

export function About() {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[var(--border)] shadow-md">
              <Image src="/images/about-clinic.jpg" alt="Bright Smile Dentary clinic interior" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-[var(--bg-card)] rounded-2xl border border-[var(--border)] shadow-lg p-4 md:p-5 max-w-[180px]">
              <div className="text-2xl font-bold accent-gradient-text">Est. 2009</div>
              <div className="text-xs text-[var(--text-secondary)]">15+ Years of Smiles</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <SectionHeading
              label="Our Story"
              title="More Than a Clinic — A Smile Partner"
              subtitle=""
              align="left"
            />
            <p className="text-base text-[var(--text-secondary)] leading-relaxed mb-4">
              Bright Smile Dentary was founded on a simple belief: that great dental care should never feel intimidating. For over 15 years, we have blended clinical excellence with genuine human warmth to create an experience unlike any other.
            </p>
            <p className="text-base text-[var(--text-secondary)] leading-relaxed mb-6">
              Our team of board-certified specialists uses cutting-edge technology while keeping compassion at the core of every treatment. From your very first appointment, you will feel the difference.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                'Board-certified specialists in every discipline',
                'Sterilized, state-of-the-art equipment',
                'Transparent pricing — no surprises, ever',
                'Family-friendly environment for all ages',
                'HIPAA-compliant, secure patient records',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-[var(--text)]">
                  <svg className="w-4 h-4 mt-0.5 text-[var(--accent)] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <Button href="#booking" variant="primary" size="md">
              Book Your Visit
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
