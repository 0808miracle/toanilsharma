import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#philosophy', label: 'Philosophy' },
  { href: '#expertise', label: 'Expertise' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#testimonials', label: 'Testimonials' },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      const sections = navLinks.map(link => document.getElementById(link.href.substring(1)));
      let currentSection = 'home';
      sections.forEach(section => {
        if (section && window.scrollY >= section.offsetTop - 100) {
          currentSection = section.id;
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavLink = ({ href, label }: { href: string; label: string }) => (
    <a
      href={href}
      className={cn(
        'text-sm font-medium transition-colors hover:text-primary',
        activeSection === href.substring(1) ? 'text-primary' : 'text-muted-foreground'
      )}
    >
      {label}
    </a>
  );

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-background/80 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#home" className="flex items-center space-x-3">
            <span className="text-2xl font-bold bg-primary text-primary-foreground w-10 h-10 flex items-center justify-center rounded-md flex-shrink-0">AS</span>
            <div>
              <span className="font-grotesk font-bold text-lg leading-tight block">Anil Sharma</span>
              <span className="text-xs text-muted-foreground leading-tight block">Reliability Expert & Trainer</span>
            </div>
          </a>

          <nav className="hidden md:flex items-center space-x-6" aria-label="Main Navigation">
            {navLinks.map(link => (
              <NavLink key={link.href} {...link} />
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <a href="#contact">
              <Button className="hidden md:flex items-center group">
                Let's Talk
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </a>
            <Sheet>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="outline" size="icon" aria-label="Open Menu">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col space-y-6 mt-8">
                  {navLinks.map(link => (
                    <a key={link.href} href={link.href} className="text-lg font-medium text-foreground hover:text-primary">{link.label}</a>
                  ))}
                  <a href="#contact">
                    <Button className="w-full">Let's Talk</Button>
                  </a>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};