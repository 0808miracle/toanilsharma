import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';

export const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

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
      className={cn(
        'fixed bottom-8 right-8 rounded-full transition-opacity duration-300',
        isVisible ? 'opacity-100' : 'opacity-0'
      )}
    >
      <ChevronUp className="h-6 w-6" />
    </Button>
  );
};