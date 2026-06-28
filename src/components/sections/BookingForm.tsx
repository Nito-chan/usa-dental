'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';

interface BookingFormProps {
  phone: string;
}

interface FormData {
  name: string;
  phone: string;
  email: string;
  service: string;
  preferredDate: string;
  message: string;
}

interface FormErrors {
  [key: string]: string;
}

const services = ['Select Service', 'Cosmetic Dentistry', 'General Dentistry', 'Orthodontics', 'Pediatric Care', 'Dental Implants', 'Emergency Care'];

const inputClass = 'w-full px-4 py-2.5 rounded-xl border bg-[var(--bg)] text-sm text-[var(--text)] placeholder:text-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-[var(--accent)] transition-all duration-200';
const inputErrorClass = 'border-red-400 focus:ring-red-400 focus:border-red-400';
const inputNormalClass = 'border-[var(--border)]';

export function BookingForm({ phone }: BookingFormProps) {
  const [form, setForm] = useState<FormData>({ name: '', phone: '', email: '', service: '', preferredDate: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.phone.trim()) newErrors.phone = 'Phone is required';
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = 'Invalid email address';
    if (!form.service || form.service === 'Select Service') newErrors.service = 'Please select a service';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: '' }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSending(true);
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          service: form.service,
          message: `Date: ${form.preferredDate} | Notes: ${form.message}`,
          type: 'booking',
        }),
      });
    } catch {}
    setSending(false);
    setSubmitted(true);
  };

  const getInputClass = (field: string) => `${inputClass} ${errors[field] ? inputErrorClass : inputNormalClass}`;

  return (
    <section id="booking" className="section-padding bg-[var(--bg-alt)]">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          label="Book Now"
          title="Ready for Your Best Smile?"
          subtitle="Book a free consultation today — no commitment, just care. We will confirm your appointment within 24 hours."
        />

        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center p-12 rounded-2xl bg-[var(--bg-card)] border border-[var(--border)]"
            >
              <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-[var(--accent)]/10 flex items-center justify-center">
                <svg className="w-8 h-8 text-[var(--accent)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[var(--text)] mb-2">Request Received!</h3>
              <p className="text-[var(--text-secondary)] mb-2">We will review your details and confirm your appointment within 24 hours.</p>
              <p className="text-sm text-[var(--text-muted)]">
                Need immediate assistance? Call us at <a href={`tel:${phone.replace(/[^0-9+]/g, '')}`} className="text-[var(--accent)] font-medium hover:underline">{phone}</a>
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              exit={{ opacity: 0 }}
              className="rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] p-6 md:p-8"
            >
              <div className="mb-6 flex flex-wrap items-center justify-center gap-3 text-xs text-[var(--text-secondary)]">
                <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[var(--accent)]/5 border border-[var(--accent)]/15 text-[var(--accent)]">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  HIPAA Secure
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[var(--accent)]/5 border border-[var(--accent)]/15 text-[var(--accent)]">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  Free Consultation
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[var(--accent)]/5 border border-[var(--accent)]/15 text-[var(--accent)]">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                  No Commitment
                </span>
              </div>

              <div aria-live="polite" aria-atomic="true" className="sr-only">
                {Object.keys(errors).length > 0 && `Form has ${Object.keys(errors).length} error(s).`}
              </div>

              <form onSubmit={handleSubmit} noValidate>
                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-[var(--text)] mb-1.5">Full Name <span className="text-[var(--accent)]">*</span></label>
                    <input type="text" value={form.name} onChange={(e) => handleChange('name', e.target.value)} placeholder="Your full name" className={getInputClass('name')} aria-invalid={!!errors.name} aria-describedby={errors.name ? 'error-name' : undefined} />
                    {errors.name && <p id="error-name" className="text-xs text-red-500 mt-1.5">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[var(--text)] mb-1.5">Phone Number <span className="text-[var(--accent)]">*</span></label>
                    <input type="tel" value={form.phone} onChange={(e) => handleChange('phone', e.target.value)} placeholder="+1 (212) 555-0000" className={getInputClass('phone')} aria-invalid={!!errors.phone} />
                    {errors.phone && <p className="text-xs text-red-500 mt-1.5">{errors.phone}</p>}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-[var(--text)] mb-1.5">Email Address</label>
                    <input type="email" value={form.email} onChange={(e) => handleChange('email', e.target.value)} placeholder="your@email.com" className={getInputClass('email')} aria-invalid={!!errors.email} />
                    {errors.email && <p className="text-xs text-red-500 mt-1.5">{errors.email}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[var(--text)] mb-1.5">Service <span className="text-[var(--accent)]">*</span></label>
                    <select value={form.service} onChange={(e) => handleChange('service', e.target.value)} className={getInputClass('service')} aria-invalid={!!errors.service}>
                      {services.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                    {errors.service && <p className="text-xs text-red-500 mt-1.5">{errors.service}</p>}
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-[var(--text)] mb-1.5">Preferred Date</label>
                  <input type="date" value={form.preferredDate} onChange={(e) => handleChange('preferredDate', e.target.value)} className={`${inputClass} ${inputNormalClass}`} />
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-[var(--text)] mb-1.5">Additional Notes</label>
                  <textarea value={form.message} onChange={(e) => handleChange('message', e.target.value)} rows={3} placeholder="Any concerns, questions, or special requests..." className={`${inputClass} ${inputNormalClass} resize-none`} />
                </div>

                <p className="text-xs text-[var(--text-muted)] mb-4 text-center">
                  Your information is HIPAA secure and will never be shared with third parties.
                </p>

                <Button type="submit" variant="primary" size="lg" className="w-full" disabled={sending}>
                  {sending ? 'Sending...' : 'Confirm Booking'}
                </Button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
