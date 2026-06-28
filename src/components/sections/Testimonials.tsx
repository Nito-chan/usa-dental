'use client';

import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { TestimonialCard } from '@/components/ui/TestimonialCard';
import type { Testimonial } from '@/types';

interface TestimonialsProps {
  items: Testimonial[];
}

export function Testimonials({ items }: TestimonialsProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="testimonials" className="section-padding overflow-hidden">
      <div ref={sectionRef} className="max-w-7xl mx-auto">
        <SectionHeading
          label="Patient Stories"
          title="What Our Patients Say"
          subtitle="Don&apos;t take our word for it — hear from real patients who trust us with their smiles."
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="flex gap-6 pb-2"
            style={{ overflow: 'hidden' }}
          >
            <div
              className="flex gap-6"
              style={{
                animation: isVisible && !isPaused ? 'scroll-left 50s linear infinite' : 'none',
                width: 'max-content',
              }}
            >
              {[...items, ...items, ...items].map((item, idx) => (
                <div key={`${item.id}-${idx}`} className="shrink-0 w-[380px] max-w-[85vw]">
                  <TestimonialCard testimonial={item} />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
