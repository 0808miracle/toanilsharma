import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Menu, ArrowRight, Sparkles, Phone, Mail, Download, ExternalLink } from 'lucide-react';
import { ThemeToggle } from '@/components/ThemeToggle';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '#about', label: 'About' },
  { href: '#expertise', label: 'Expertise' },
  { href: '#experience', label: 'Journey Map' },
  { href: '#simulators', label: 'Simulators', badge: 'Live' },
  { href: '#projects', label: 'Platforms' },
  { href: '#architecture', label: 'Architecture' },
  { href: '#awards', label: 'Accolades' },
  { href: '#faq', label: 'FAQ' },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);

      // Calculate scroll progress percentage
      const winHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = winHeight > 0 ? (scrollY / winHeight) * 100 : 0;
      setScrollProgress(Math.min(100, Math.max(0, progress)));

      // Detect active section
      const sections = ['home', 'about', 'philosophy', 'expertise', 'experience', 'simulators', 'projects', 'architecture', 'awards', 'faq', 'contact']
        .map(id => document.getElementById(id));

      let current = 'home';
      sections.forEach(section => {
        if (section && scrollY >= section.offsetTop - 140) {
          current = section.id;
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* 2px Global Reading Scroll Progress Indicator */}
      <div 
        className="fixed top-0 left-0 right-0 h-[2.5px] z-[60] bg-transparent pointer-events-none"
        aria-hidden="true"
      >
        <div 
          className="h-full bg-gradient-to-r from-blue-600 via-cyan-400 to-indigo-600 transition-all duration-150 ease-out shadow-[0_0_8px_rgba(59,130,246,0.6)]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Floating Glassmorphic Header Dock */}
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out px-4 sm:px-6 lg:px-8',
          isScrolled 
            ? 'py-3' 
            : 'py-5'
        )}
      >
        <div 
          className={cn(
            'mx-auto max-w-7xl transition-all duration-500 rounded-2xl md:rounded-full px-4 sm:px-6 py-2.5',
            isScrolled
              ? 'backdrop-blur-xl bg-background/85 dark:bg-background/80 border border-border/70 dark:border-white/10 shadow-xl shadow-black/5 dark:shadow-black/20'
              : 'bg-transparent border border-transparent'
          )}
        >
          <div className="flex items-center justify-between">
            {/* Executive Brand & Monogram Logo */}
            <a 
              href="#home" 
              className="flex items-center space-x-3 group outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg"
              aria-label="Anil Sharma Home"
            >
              <div className="relative">
                <span className="text-base font-bold bg-gradient-to-br from-blue-600 via-indigo-600 to-cyan-600 text-white w-10 h-10 flex items-center justify-center rounded-xl font-grotesk shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform duration-300">
                  AS
                </span>
                <span 
                  className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 rounded-full border-2 border-background animate-pulse" 
                  title="Open-Access Engineering Education • Non-Commercial"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center space-x-2">
                  <span className="font-grotesk font-bold text-base sm:text-lg leading-tight tracking-tight text-foreground group-hover:text-primary transition-colors">
                    Anil Sharma
                  </span>
                </div>
                <span className="text-[11px] text-muted-foreground font-medium leading-tight tracking-wide flex items-center">
                  Reliability Expert & Trainer
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav 
              className="hidden lg:flex items-center space-x-1 xl:space-x-2 px-3 py-1.5 rounded-full bg-secondary/40 dark:bg-secondary/20 border border-border/40" 
              aria-label="Main Navigation"
            >
              {navItems.map(item => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className={cn(
                      'relative px-3 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 flex items-center space-x-1.5',
                      isActive
                        ? 'text-primary bg-background dark:bg-card shadow-sm'
                        : 'text-muted-foreground hover:text-foreground hover:bg-background/50'
                    )}
                  >
                    <span>{item.label}</span>
                    {item.badge && (
                      <span className="inline-flex items-center px-1.5 py-0.2 text-[9px] font-extrabold uppercase tracking-wider rounded-full bg-blue-500/15 text-blue-500 dark:text-cyan-400 border border-blue-500/30">
                        {item.badge}
                      </span>
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Right Action Stack: Theme Toggle & Explore Tools Button */}
            <div className="flex items-center space-x-2.5 sm:space-x-3">
              <ThemeToggle />

              <a href="#simulators" className="hidden sm:inline-flex">
                <Button 
                  size="sm" 
                  className="rounded-full px-4 h-9 font-semibold text-xs bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-md shadow-blue-500/20 group"
                >
                  <Sparkles className="mr-1.5 h-3.5 w-3.5" />
                  <span>Explore Free Tools</span>
                  <ArrowRight className="ml-1.5 h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </a>

              {/* Mobile Menu Trigger */}
              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild className="lg:hidden">
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="h-9 w-9 rounded-full border-border/70"
                    aria-label="Open Navigation Menu"
                  >
                    <Menu className="h-4 w-4" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[85vw] sm:w-[380px] p-6 flex flex-col justify-between">
                  <div>
                    <SheetHeader className="text-left pb-6 border-b border-border/60">
                      <div className="flex items-center space-x-3">
                        <span className="text-base font-bold bg-gradient-to-br from-blue-600 to-indigo-600 text-white w-10 h-10 flex items-center justify-center rounded-xl font-grotesk shadow-md">
                          AS
                        </span>
                        <div>
                          <SheetTitle className="font-grotesk text-lg font-bold">Anil Sharma</SheetTitle>
                          <p className="text-xs text-muted-foreground">Reliability Expert & Trainer</p>
                        </div>
                      </div>
                    </SheetHeader>

                    {/* Navigation Links */}
                    <div className="flex flex-col space-y-1.5 py-6">
                      {navItems.map(item => (
                        <a
                          key={item.href}
                          href={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className={cn(
                            'flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-colors',
                            activeSection === item.href.substring(1)
                              ? 'bg-primary/10 text-primary font-semibold'
                              : 'text-foreground hover:bg-secondary'
                          )}
                        >
                          <span>{item.label}</span>
                          {item.badge && (
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-500 border border-blue-500/20">
                              {item.badge}
                            </span>
                          )}
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Drawer Footer Actions */}
                  <div className="pt-6 border-t border-border/60 space-y-3">
                    <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
                      <span>Appearance</span>
                      <ThemeToggle />
                    </div>
                    
                    <a 
                      href="#simulators" 
                      onClick={() => setMobileMenuOpen(false)}
                      className="block w-full"
                    >
                      <Button className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                        <Sparkles className="mr-2 h-4 w-4" />
                        Explore Live Simulators
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </a>

                    <a 
                      href="#contact" 
                      onClick={() => setMobileMenuOpen(false)}
                      className="block w-full"
                    >
                      <Button variant="outline" className="w-full rounded-xl text-xs">
                        <Mail className="mr-2 h-3.5 w-3.5" />
                        Academic &amp; Student Inquiries
                      </Button>
                    </a>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};