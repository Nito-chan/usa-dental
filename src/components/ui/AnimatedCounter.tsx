'use client';

import { useAnimatedCounter } from '@/hooks/useAnimatedCounter';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  label: string;
  isDecimal?: boolean;
}

export function AnimatedCounter({ end, suffix = '', prefix = '', label, isDecimal = false }: AnimatedCounterProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 });
  const count = useAnimatedCounter({ end, duration: 2000, isDecimal, shouldStart: isVisible });

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-[var(--primary)] mb-1" aria-live="polite" aria-atomic="true">
        {prefix}{isDecimal ? count.toFixed(1) : count}{suffix}
      </div>
      <div className="text-sm text-[var(--text-secondary)] font-medium">{label}</div>
    </div>
  );
}
