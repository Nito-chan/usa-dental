'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import type { GalleryImage } from '@/types';

interface GalleryProps {
  items: GalleryImage[];
}

export function Gallery({ items }: GalleryProps) {
  const [selected, setSelected] = useState<GalleryImage | null>(null);

  return (
    <section id="gallery" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="Inside Bright Smile"
          title="A Glimpse of Our Clinic"
          subtitle="Modern, comfortable spaces designed with your peace of mind in mind."
        />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {items.map((img, idx) => (
            <motion.button
              key={img.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              onClick={() => setSelected(img)}
              className={`relative rounded-2xl overflow-hidden border border-[var(--border)] group cursor-pointer card-hover ${
                idx === 0 ? 'col-span-2 row-span-2' : ''
              }`}
              aria-label={`View ${img.label}`}
            >
              <div className={`${idx === 0 ? 'aspect-[4/3]' : 'aspect-[4/3] md:aspect-square'}`}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              <span className="absolute bottom-3 left-3 text-xs font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                {img.label}
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="relative max-w-4xl w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-[4/3]">
                <Image src={selected.src} alt={selected.alt} fill className="object-contain" sizes="100vw" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                <p className="text-white font-semibold">{selected.label}</p>
              </div>
              <button
                onClick={() => setSelected(null)}
                className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors"
                aria-label="Close gallery"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
