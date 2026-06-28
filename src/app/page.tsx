import dynamic from 'next/dynamic';
import { ThemeProvider } from '@/providers/ThemeProvider';
import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';

const Services = dynamic(() => import('@/components/sections/Services').then(m => ({ default: m.Services })));
const WhyChooseUs = dynamic(() => import('@/components/sections/WhyChooseUs').then(m => ({ default: m.WhyChooseUs })));
const BeforeAfter = dynamic(() => import('@/components/sections/BeforeAfter').then(m => ({ default: m.BeforeAfter })));
const Team = dynamic(() => import('@/components/sections/Team').then(m => ({ default: m.Team })));
const Gallery = dynamic(() => import('@/components/sections/Gallery').then(m => ({ default: m.Gallery })));
const Testimonials = dynamic(() => import('@/components/sections/Testimonials').then(m => ({ default: m.Testimonials })));
const Stats = dynamic(() => import('@/components/sections/Stats').then(m => ({ default: m.Stats })));
const Pricing = dynamic(() => import('@/components/sections/Pricing').then(m => ({ default: m.Pricing })));
const Insurance = dynamic(() => import('@/components/sections/Insurance').then(m => ({ default: m.Insurance })));
const FAQ = dynamic(() => import('@/components/sections/FAQ').then(m => ({ default: m.FAQ })));
const Certifications = dynamic(() => import('@/components/sections/Certifications').then(m => ({ default: m.Certifications })));
const BookingForm = dynamic(() => import('@/components/sections/BookingForm').then(m => ({ default: m.BookingForm })));
const EmergencyBanner = dynamic(() => import('@/components/sections/EmergencyBanner').then(m => ({ default: m.EmergencyBanner })));
const FinalCTA = dynamic(() => import('@/components/sections/FinalCTA').then(m => ({ default: m.FinalCTA })));
const Footer = dynamic(() => import('@/components/layout/Footer').then(m => ({ default: m.Footer })));
const FloatingActions = dynamic(() => import('@/components/layout/FloatingActions').then(m => ({ default: m.FloatingActions })));

import config from '../../config/site-config.json';

export default function Home() {
  const { site, nav, hero, services, beforeAfter, whyChooseUs, process, pricing, testimonials, stats, team, gallery, insurance, faq, certifications, footer } = config;

  return (
    <ThemeProvider>
      <Navbar nav={nav} site={site} />
      <Hero hero={hero} />
      <Certifications items={certifications} />
      <Services items={services} />
      <WhyChooseUs items={whyChooseUs} />
      <BeforeAfter items={beforeAfter} />
      <About />
      <Stats items={stats} />
      <Team items={team} />
      <Gallery items={gallery} />
      <Testimonials items={testimonials} />
      <Pricing items={pricing} />
      <Insurance providers={insurance} phone={site.phone} />
      <FAQ items={faq} />
      <EmergencyBanner phone={site.phone} />
      <BookingForm phone={site.phone} />
      <FinalCTA phone={site.phone} />
      <Footer footer={footer} site={site} />
      <FloatingActions site={site} />
    </ThemeProvider>
  );
}
