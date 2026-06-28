import Image from 'next/image';
import { motion } from 'framer-motion';
import type { Testimonial } from '@/types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] p-6 md:p-7 min-w-[320px] md:min-w-[380px] shrink-0"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <svg
              key={i}
              className={`w-4 h-4 ${i < testimonial.rating ? 'text-amber-400' : 'text-[var(--border)]'}`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <span className="text-xs text-[var(--text-muted)]">{testimonial.service}</span>
      </div>
      <blockquote className="text-sm md:text-base text-[var(--text-secondary)] leading-relaxed mb-4">
        &ldquo;{testimonial.text}&rdquo;
      </blockquote>
      <div className="flex items-center gap-3 pt-3 border-t border-[var(--border-light)]">
        <div className="w-9 h-9 rounded-full overflow-hidden bg-[var(--bg-secondary)] shrink-0">
          <Image src={testimonial.avatar} alt={testimonial.name} width={36} height={36} className="w-full h-full object-cover" />
        </div>
        <div>
          <div className="text-sm font-semibold text-[var(--text)]">{testimonial.name}</div>
          <div className="text-xs text-[var(--text-muted)]">{testimonial.city}</div>
        </div>
      </div>
    </motion.div>
  );
}
