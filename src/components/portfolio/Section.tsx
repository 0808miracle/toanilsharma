import React, { useRef } from 'react';
import { useInView } from '@/hooks/useInView';
import { cn } from '@/lib/utils';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

export const Section = ({ children, className, ...props }: SectionProps) => {
  const [ref, isInView] = useInView();

  return (
    <section
      ref={ref}
      className={cn(
        'py-16 sm:py-24 px-4 sm:px-6 lg:px-8 opacity-0 transition-opacity duration-500',
        isInView ? 'animate-fade-in-up' : '',
        className
      )}
      {...props}
    >
      <div className="container mx-auto max-w-7xl">
        {children}
      </div>
    </section>
  );
};

export const SectionHeader = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <div className={cn("text-center mb-12", className)}>
    {children}
  </div>
);

export const SectionLabel = ({ children, className }: { children: React.ReactNode, className?: string }) => (
    <span className={cn("text-sm font-bold uppercase text-primary tracking-widest", className)}>{children}</span>
);

export const SectionTitle = ({ children, className }: { children: React.ReactNode, className?: string }) => (
    <h2 className={cn("text-3xl sm:text-4xl lg:text-5xl font-bold font-grotesk mt-2", className)}>{children}</h2>
);

export const TextGradient = ({ children, className }: { children: React.ReactNode, className?: string }) => (
    <span className={cn("text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500", className)}>{children}</span>
);