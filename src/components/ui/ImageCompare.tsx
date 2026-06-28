'use client';

import { useState, useRef, useCallback } from 'react';

interface ImageCompareProps {
  before: string;
  after: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export function ImageCompare({ before, after, beforeLabel = 'Before', afterLabel = 'After' }: ImageCompareProps) {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPos((x / rect.width) * 100);
  }, []);

  const onMouseDown = () => { isDragging.current = true; };
  const onMouseUp = () => { isDragging.current = false; };
  const onMouseMove = (e: React.MouseEvent) => { if (isDragging.current) updatePosition(e.clientX); };
  const onTouchMove = (e: React.TouchEvent) => { updatePosition(e.touches[0].clientX); };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') setSliderPos((p) => Math.max(0, p - 5));
    if (e.key === 'ArrowRight') setSliderPos((p) => Math.min(100, p + 5));
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden select-none cursor-ew-resize border border-[var(--border)] bg-[var(--bg-secondary)]"
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseUp}
      onTouchMove={onTouchMove}
      role="slider"
      aria-label="Compare before and after images"
      aria-valuenow={Math.round(sliderPos)}
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      <img src={after} alt={afterLabel} className="absolute inset-0 w-full h-full object-cover" draggable={false} />
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}>
        <img src={before} alt={beforeLabel} className="w-full h-full object-cover" draggable={false} />
      </div>
      <div className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg" style={{ left: `${sliderPos}%`, transform: 'translateX(-50%)' }}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white shadow-md flex items-center justify-center">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </div>
      </div>
      <span className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-black/50 text-white text-xs font-medium">{beforeLabel}</span>
      <span className="absolute top-3 right-3 px-2.5 py-1 rounded-lg bg-black/50 text-white text-xs font-medium">{afterLabel}</span>
    </div>
  );
}
