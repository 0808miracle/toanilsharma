import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbNavProps {
  items: BreadcrumbItem[];
}

export const BreadcrumbNav = ({ items }: BreadcrumbNavProps) => {
  return (
    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
      <nav 
        aria-label="Breadcrumb"
        className="flex items-center space-x-2 text-xs font-mono text-muted-foreground"
      >
        <Link 
          to="/" 
          className="hover:text-primary transition-colors flex items-center gap-1"
          aria-label="Home"
        >
          <Home className="w-3.5 h-3.5" />
          <span>Home</span>
        </Link>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <div key={index} className="flex items-center space-x-2">
              <ChevronRight className="w-3 h-3 text-muted-foreground/60 shrink-0" />
              {isLast || !item.href ? (
                <span className="text-foreground font-semibold truncate max-w-[200px] sm:max-w-none">
                  {item.label}
                </span>
              ) : (
                <Link to={item.href} className="hover:text-primary transition-colors">
                  {item.label}
                </Link>
              )}
            </div>
          );
        })}
      </nav>
    </div>
  );
};

export default BreadcrumbNav;
