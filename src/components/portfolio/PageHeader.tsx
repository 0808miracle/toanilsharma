import { Link } from 'react-router-dom';
import { ArrowLeft, Sparkles, FileText, Scale, Shield, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ThemeToggle';

interface PageHeaderProps {
  title: string;
  subtitle: string;
  badge?: string;
}

export const PageHeader = ({ title, subtitle, badge }: PageHeaderProps) => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/85 dark:bg-background/80 border-b border-border/70 dark:border-white/10 px-4 sm:px-6 lg:px-8 py-3.5 transition-all">
      <div className="mx-auto max-w-7xl flex items-center justify-between">
        <div className="flex items-center space-x-3 sm:space-x-4">
          <Link 
            to="/" 
            className="flex items-center space-x-2 text-xs sm:text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors group px-2.5 py-1.5 rounded-lg hover:bg-secondary/60"
            aria-label="Return to portfolio home"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1 text-primary" />
            <span className="hidden sm:inline">Portfolio Home</span>
            <span className="sm:hidden">Home</span>
          </Link>

          <span className="text-border dark:text-white/10">•</span>

          <Link to="/" className="flex items-center space-x-2.5">
            <span className="text-xs font-bold bg-gradient-to-br from-blue-600 via-indigo-600 to-cyan-600 text-white w-7 h-7 flex items-center justify-center rounded-lg font-grotesk shadow-sm">
              AS
            </span>
            <span className="font-grotesk font-bold text-sm tracking-tight text-foreground hidden md:inline">
              Anil Sharma
            </span>
          </Link>
        </div>

        <nav className="flex items-center space-x-1.5 sm:space-x-2 text-xs font-medium">

          <Link 
            to="/terms" 
            className="px-2.5 py-1 rounded-full text-muted-foreground hover:text-foreground hover:bg-secondary/60 transition-colors hidden md:flex items-center gap-1.5"
          >
            <Scale className="w-3.5 h-3.5 text-primary" />
            <span>Disclaimer</span>
          </Link>

          <Link 
            to="/privacy" 
            className="px-2.5 py-1 rounded-full text-muted-foreground hover:text-foreground hover:bg-secondary/60 transition-colors hidden md:flex items-center gap-1.5"
          >
            <Shield className="w-3.5 h-3.5 text-primary" />
            <span>Privacy</span>
          </Link>

          <div className="pl-1 sm:pl-2">
            <ThemeToggle />
          </div>

          <Link to="/#simulators">
            <Button size="sm" className="h-8 px-3 rounded-full text-xs font-semibold bg-primary text-primary-foreground shadow-sm">
              <Sparkles className="w-3.5 h-3.5 mr-1" />
              <span>Simulators</span>
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
};
