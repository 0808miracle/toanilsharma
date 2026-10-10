import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowUp } from 'lucide-react';
import { cn } from '@/lib/utils';

export const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Button
      size="icon"
      onClick={scrollToTop}
      aria-label="Scroll to top of page"
      className={cn(
        'fixed bottom-6 right-6 z-40 h-10 w-10 rounded-full shadow-xl transition-all duration-300 bg-background/90 dark:bg-card/90 text-foreground hover:text-primary border border-border/80 dark:border-white/10 backdrop-blur-md hover:-translate-y-1 hover:shadow-primary/20',
        isVisible 
          ? 'opacity-100 translate-y-0 pointer-events-auto' 
          : 'opacity-0 translate-y-4 pointer-events-none'
      )}
    >
      <ArrowUp className="h-4 w-4" />
    </Button>
  );
};