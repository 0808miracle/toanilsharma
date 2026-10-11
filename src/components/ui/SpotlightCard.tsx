import React, { useRef, useState, useCallback } from 'react';
import { cn } from '@/lib/utils';

interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
  glowSize?: number;
}

export const SpotlightCard: React.FC<SpotlightCardProps> = ({
  children,
  className,
  spotlightColor = 'rgba(59, 130, 246, 0.25)',
  glowSize = 350,
  ...props
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
  }, []);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        'group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-border/70 dark:border-white/10 bg-card/90 dark:bg-[#0B0F19]/90 backdrop-blur-xl transition-all duration-300 hover:shadow-2xl dark:hover:shadow-[0_0_30px_rgba(15,76,255,0.2)]',
        className
      )}
      {...props}
    >
      {/* Radial Spotlight Follower */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl sm:rounded-3xl transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(${glowSize}px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 65%)`,
        }}
        aria-hidden="true"
      />
      
      {/* Content wrapper with relative z-index */}
      <div className="relative z-10 h-full">
        {children}
      </div>
    </div>
  );
};
