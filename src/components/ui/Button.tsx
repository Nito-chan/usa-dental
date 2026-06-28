'use client';

import { type ReactNode } from 'react';

interface ButtonBaseProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const base = 'inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)] disabled:opacity-50 disabled:pointer-events-none select-none';

const variants: Record<string, string> = {
  primary: 'bg-[var(--primary)] text-white shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 active:brightness-95',
  secondary: 'bg-[var(--secondary)] text-white shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0',
  outline: 'border-2 border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white hover:-translate-y-0.5 active:translate-y-0',
  ghost: 'text-[var(--text-secondary)] hover:text-[var(--primary)] hover:bg-[var(--bg-secondary)]',
};

const sizes: Record<string, string> = {
  sm: 'px-5 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-3.5 text-lg',
};

export function Button({ variant = 'primary', size = 'md', children, className = '', href, onClick, type = 'button', disabled, ...rest }: ButtonBaseProps) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
