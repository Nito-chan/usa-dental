'use client';

import { useState, useEffect, useRef } from 'react';

interface UseAnimatedCounterOptions {
  end: number;
  duration?: number;
  isDecimal?: boolean;
  shouldStart?: boolean;
}

export function useAnimatedCounter({ end, duration = 2000, isDecimal = false, shouldStart = false }: UseAnimatedCounterOptions) {
  const [count, setCount] = useState(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    if (!shouldStart) return;
    const startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = isDecimal ? eased * end : Math.round(eased * end);
      setCount(current);
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      }
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [end, duration, isDecimal, shouldStart]);

  return count;
}
