'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { ServiceIcon } from '@/components/ui/ServiceIcon';
import type { Hero as HeroType } from '@/types';

interface HeroProps {
  hero: HeroType;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function Hero({ hero }: HeroProps) {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-24">
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/5 via-transparent to-[var(--accent-dark)]/5" />
      <div className="absolute top-20 right-0 w-[600px] h-[600px] rounded-full bg-[var(--accent)]/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[var(--accent-dark)]/5 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/15 text-xs font-semibold text-[var(--accent)] mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
              Now accepting new patients
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-display text-[var(--text)] leading-[1.05] tracking-tight mb-6 text-balance">
              {hero.title.map((part, idx) => (
                <span key={idx} className={part.type === 'highlight' ? 'accent-gradient-text' : ''}>
                  {part.text}{' '}
                </span>
              ))}
            </motion.h1>

            <motion.p variants={itemVariants} className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed mb-8 max-w-lg">
              {hero.description}
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-12">
              <Button href={hero.primaryCta.href} size="lg" variant="primary">
                {hero.primaryCta.label}
              </Button>
              <Button href={hero.secondaryCta.href} size="lg" variant="outline">
                {hero.secondaryCta.label}
              </Button>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
              {hero.trustBadges.map((badge) => (
                <div
                  key={badge.label}
                  className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-[var(--bg-card)] border border-[var(--border)] text-xs font-medium text-[var(--text-secondary)] shadow-sm"
                >
                  <span className="text-[var(--accent)] shrink-0">
                    <ServiceIcon name={badge.icon} className="w-3.5 h-3.5" />
                  </span>
                  {badge.label}
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[var(--border)] shadow-xl">
              <Image src="/images/hero.jpg" alt="Bright Smile Dentary dental clinic interior" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" priority />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 md:mt-16 p-6 md:p-8 rounded-2xl bg-[var(--bg-card)] border border-[var(--border)] shadow-sm card-hover"
        >
          {hero.stats.map((stat) => (
            <AnimatedCounter
              key={stat.label}
              end={stat.value}
              suffix={stat.suffix}
              prefix={stat.prefix || ''}
              label={stat.label}
              isDecimal={stat.isDecimal}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
