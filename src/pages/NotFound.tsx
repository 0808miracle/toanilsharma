import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/portfolio/PageHeader";
import { Footer } from "@/components/portfolio/Footer";
import { 
  Home, 
  Sparkles, 
  BookOpen, 
  Scale, 
  Mail, 
  AlertOctagon, 
  ArrowLeft,
  Compass
} from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = "404 - Page Not Found | Anil Sharma";
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-primary transition-colors duration-300 flex flex-col justify-between">
      <div>
        <PageHeader 
          title="Page Not Found" 
          subtitle="404 Diagnostic • Resource Unmapped" 
        />

        <main className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
          {/* Ambient Glow */}
          <div className="relative mx-auto w-32 h-32 sm:w-40 sm:h-40 mb-8 flex items-center justify-center">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl animate-pulse" />
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-3xl bg-secondary/80 dark:bg-card/90 border border-border/80 dark:border-white/10 flex items-center justify-center shadow-2xl">
              <AlertOctagon className="w-14 h-14 text-primary" />
            </div>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-destructive/10 border border-destructive/20 text-xs font-mono font-semibold text-destructive mb-4">
            <span className="w-2 h-2 rounded-full bg-destructive animate-ping" />
            <span>ERROR 404 • COORDINATE UNMAPPED</span>
          </div>

          <h1 className="font-grotesk text-4xl sm:text-6xl font-black tracking-tight text-foreground">
            Simulation Node Not Found
          </h1>

          <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-lg mx-auto leading-relaxed">
            The page or engineering module at <code className="px-2 py-0.5 rounded bg-secondary font-mono text-xs text-primary font-bold">{location.pathname}</code> does not exist or has been restructured.
          </p>

          {/* Quick Recovery Options */}
          <div className="mt-10 max-w-xl mx-auto p-6 sm:p-8 rounded-3xl bg-secondary/30 dark:bg-card/40 border border-border/70 dark:border-white/10 backdrop-blur-md">
            <div className="flex items-center justify-center gap-2 text-xs font-mono font-semibold text-muted-foreground uppercase tracking-wider mb-4">
              <Compass className="w-4 h-4 text-primary" />
              <span>Recommended Trajectories</span>
            </div>

            <div className="grid sm:grid-cols-2 gap-3 text-left">
              <Link to="/">
                <Button variant="outline" className="w-full justify-start h-12 rounded-xl text-xs font-semibold gap-2.5 hover:border-primary/50">
                  <Home className="w-4 h-4 text-primary" />
                  <span>Return to Homepage</span>
                </Button>
              </Link>

              <Link to="/#simulators">
                <Button variant="outline" className="w-full justify-start h-12 rounded-xl text-xs font-semibold gap-2.5 hover:border-primary/50">
                  <Sparkles className="w-4 h-4 text-cyan-500" />
                  <span>Live Simulators (65+)</span>
                </Button>
              </Link>

              <Link to="/#projects">
                <Button variant="outline" className="w-full justify-start h-12 rounded-xl text-xs font-semibold gap-2.5 hover:border-primary/50">
                  <BookOpen className="w-4 h-4 text-indigo-500" />
                  <span>150+ Design Calculators</span>
                </Button>
              </Link>

              <Link to="/terms">
                <Button variant="outline" className="w-full justify-start h-12 rounded-xl text-xs font-semibold gap-2.5 hover:border-primary/50">
                  <Scale className="w-4 h-4 text-emerald-500" />
                  <span>Site Disclaimer &amp; Terms</span>
                </Button>
              </Link>
            </div>

            <div className="mt-6 pt-5 border-t border-border/60 text-xs text-muted-foreground flex items-center justify-between">
              <span>Need specific assistance?</span>
              <Link to="/#contact" className="text-primary font-semibold hover:underline flex items-center gap-1">
                <Mail className="w-3.5 h-3.5" />
                <span>Contact Anil Sharma</span>
              </Link>
            </div>
          </div>

          <div className="mt-8">
            <Link to="/">
              <Button size="lg" className="h-11 px-6 rounded-xl font-bold bg-primary text-primary-foreground shadow-lg shadow-primary/20">
                <ArrowLeft className="w-4 h-4 mr-2" />
                <span>Back to Safety (Home)</span>
              </Button>
            </Link>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default NotFound;
