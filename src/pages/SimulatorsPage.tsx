import { Header } from '@/components/portfolio/Header';
import { LiveSimulatorsSection } from '@/components/portfolio/LiveSimulatorsSection';
import { Footer } from '@/components/portfolio/Footer';
import { BackToTopButton } from '@/components/portfolio/BackToTopButton';
import { Sparkles, ArrowRight, Cpu, Layers, ExternalLink, ShieldCheck, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { BreadcrumbNav } from '@/components/portfolio/BreadcrumbNav';

export const SimulatorsPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-primary transition-colors duration-300">
      <Header />
      
      <main className="pt-24 sm:pt-28">
        <BreadcrumbNav items={[{ label: 'Virtual Simulators (Float64)' }]} />
        
        {/* Page Hero Header */}
        <section className="relative py-12 sm:py-16 bg-secondary/30 dark:bg-card/30 border-b border-border/60 dark:border-white/10 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(rgba(59,130,246,0.08)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
          
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold text-cyan-700 dark:text-cyan-400 mb-4">
                <Cpu className="w-3.5 h-3.5" />
                <span>REAL-TIME BROWSER PHYSICS • FLOAT64 SOLVERS</span>
              </div>
              
              <h1 className="font-grotesk text-3xl sm:text-5xl font-black tracking-tight text-foreground leading-tight">
                Live Virtual Engineering Simulators
              </h1>
              
              <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
                Over 65+ interactive engineering laboratories engineered to run first-principles physics directly inside your browser. No installs, no paywalls, and zero ads—designed as a free educational resource for engineering students and working plant professionals.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-mono text-muted-foreground">
                <span className="text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1.5">
                  <Heart className="w-3.5 h-3.5" />
                  <span>100% Free Educational Hobby</span>
                </span>
                <span>•</span>
                <span>Power Systems &bull; Harmonics &bull; SPWM Inverters &bull; Arc Flash</span>
                <span>•</span>
                <span className="text-primary font-semibold">IEEE &bull; IEC Adherent</span>
              </div>
            </div>
          </div>
        </section>

        {/* Live Simulator Models & Real-time Canvas Simulator */}
        <LiveSimulatorsSection />

        {/* External Cloud Link Banner */}
        <section className="py-16 bg-secondary/20 dark:bg-card/20 border-t border-border/60 dark:border-white/10">
          <div className="container mx-auto max-w-5xl px-4 text-center">
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 text-cyan-500 flex items-center justify-center mx-auto mb-4">
              <Layers className="w-6 h-6" />
            </div>
            <h2 className="font-grotesk text-2xl sm:text-3xl font-bold text-foreground">
              Explore the Full 65+ Lab Ecosystem
            </h2>
            <p className="mt-3 text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto">
              LiveSimulators.com features dedicated virtual laboratories across Power Electronics, Microgrids, SafeOps UPS topologies, and Turbomachinery Dynamics.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a 
                href="https://livesimulators.com" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button size="lg" className="rounded-xl px-6 font-semibold bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white shadow-md group">
                  <span>Visit LiveSimulators.com</span>
                  <ExternalLink className="ml-2 w-4 h-4 opacity-80" />
                </Button>
              </a>
              <Link to="/calculators">
                <Button size="lg" variant="outline" className="rounded-xl px-6 font-semibold border-border">
                  <span>Go to Reliability Calculators</span>
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <BackToTopButton />
    </div>
  );
};

export default SimulatorsPage;
