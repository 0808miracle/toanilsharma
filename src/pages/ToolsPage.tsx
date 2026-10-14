import { Header } from '@/components/portfolio/Header';
import { Projects } from '@/components/portfolio/Projects';
import { ToolArchitecture } from '@/components/portfolio/ToolArchitecture';
import { Footer } from '@/components/portfolio/Footer';
import { BackToTopButton } from '@/components/portfolio/BackToTopButton';
import { Laptop, Cpu, ExternalLink, ArrowRight, ShieldCheck, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { BreadcrumbNav } from '@/components/portfolio/BreadcrumbNav';

export const ToolsPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-primary transition-colors duration-300">
      <Header />
      
      <main className="pt-24 sm:pt-28">
        <BreadcrumbNav items={[{ label: 'Open Software Platforms & Architecture' }]} />
        
        {/* Page Hero Header */}
        <section className="relative py-12 sm:py-16 bg-secondary/30 dark:bg-card/30 border-b border-border/60 dark:border-white/10 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(rgba(59,130,246,0.08)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
          
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-700 dark:text-cyan-400 mb-4">
                <Laptop className="w-3.5 h-3.5" />
                <span>OPEN-ACCESS ENGINEERING SOFTWARE SUITE</span>
              </div>
              
              <h1 className="font-grotesk text-3xl sm:text-5xl font-black tracking-tight text-foreground leading-tight">
                Engineering Platforms &amp; Software Architecture
              </h1>
              
              <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
                An ecosystem of free web platforms serving global engineers, students, and plant professionals. Built with zero tracking, high-precision client-side physics, and rigorous adherence to international engineering standards (IEC, IEEE, NFPA, ASME).
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-mono text-muted-foreground">
                <span className="text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1.5">
                  <Heart className="w-3.5 h-3.5" />
                  <span>100% Non-Commercial • Ad-Free Community Initiatives</span>
                </span>
                <span>•</span>
                <span>LiveSimulators &bull; DesignCalculators &bull; ReliabilityTools &bull; ElectroSafe</span>
              </div>
            </div>
          </div>
        </section>

        {/* Global Web Platforms Grid */}
        <Projects />

        {/* Deep Software & Numerical Architecture */}
        <ToolArchitecture />

        {/* Bottom Conversion / Next Step */}
        <section className="py-16 bg-background border-t border-border/60 dark:border-white/10">
          <div className="container mx-auto max-w-5xl px-4 text-center">
            <h2 className="font-grotesk text-2xl sm:text-3xl font-bold text-foreground">
              Experience the Solvers in Action
            </h2>
            <p className="mt-3 text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto">
              Launch real-time browser waveform simulations or run life-data reliability modeling directly on the site.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link to="/simulators">
                <Button size="lg" className="rounded-xl px-6 font-semibold bg-primary text-primary-foreground shadow-md group">
                  <Cpu className="mr-2 w-4 h-4" />
                  <span>Launch Simulators</span>
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/calculators">
                <Button size="lg" variant="outline" className="rounded-xl px-6 font-semibold border-border">
                  <span>Reliability Calculators</span>
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

export default ToolsPage;
