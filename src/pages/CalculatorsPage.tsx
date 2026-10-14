import { Header } from '@/components/portfolio/Header';
import { ReliabilityCalculator } from '@/components/portfolio/ReliabilityCalculator';
import { Footer } from '@/components/portfolio/Footer';
import { BackToTopButton } from '@/components/portfolio/BackToTopButton';
import { Calculator, ArrowRight, ExternalLink, Heart, Sigma, Activity, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { BreadcrumbNav } from '@/components/portfolio/BreadcrumbNav';

export const CalculatorsPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-primary transition-colors duration-300">
      <Header />
      
      <main className="pt-24 sm:pt-28">
        <BreadcrumbNav items={[{ label: 'Reliability Mathematics & Calculators' }]} />
        
        {/* Page Hero Header */}
        <section className="relative py-12 sm:py-16 bg-secondary/30 dark:bg-card/30 border-b border-border/60 dark:border-white/10 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(rgba(59,130,246,0.08)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
          
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-semibold text-indigo-700 dark:text-indigo-400 mb-4">
                <Calculator className="w-3.5 h-3.5" />
                <span>RELIABILITY MATHEMATICS • WEIBULL &bull; MTBF &bull; AVAILABILITY</span>
              </div>
              
              <h1 className="font-grotesk text-3xl sm:text-5xl font-black tracking-tight text-foreground leading-tight">
                Reliability Engineering Calculators
              </h1>
              
              <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
                Empirical mathematical models to predict equipment failure probabilities, calculate Mean Time Between Failures (MTBF), evaluate Mean Time to Repair (MTTR), and plot 2-parameter Weibull life distributions.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-mono text-muted-foreground">
                <span className="text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1.5">
                  <Heart className="w-3.5 h-3.5" />
                  <span>Free Non-Commercial Engineering Resource</span>
                </span>
                <span>•</span>
                <span>Weibull $\beta$ / $\eta$ Modeling &bull; OEE Math &bull; Inherent Availability $A_i$</span>
              </div>
            </div>
          </div>
        </section>

        {/* The Full Interactive Reliability Calculator Suite */}
        <ReliabilityCalculator />

        {/* 150+ Design Calculators Bridge */}
        <section className="py-16 bg-secondary/20 dark:bg-card/20 border-t border-border/60 dark:border-white/10">
          <div className="container mx-auto max-w-5xl px-4 text-center">
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center mx-auto mb-4">
              <Sigma className="w-6 h-6" />
            </div>
            <h2 className="font-grotesk text-2xl sm:text-3xl font-bold text-foreground">
              Looking for Electrical &amp; Mechanical Sizing Tools?
            </h2>
            <p className="mt-3 text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto">
              Explore <strong>DesignCalculators.co.in</strong> for 150+ specialized engineering calculators spanning cable sizing, transformer impedance, arc flash, motor starting voltage dip, and pump hydraulics.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a 
                href="https://designcalculators.co.in" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button size="lg" className="rounded-xl px-6 font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-md group">
                  <span>Open DesignCalculators.co.in (150+)</span>
                  <ExternalLink className="ml-2 w-4 h-4 opacity-80" />
                </Button>
              </a>
              <a 
                href="https://reliabilitytools.co.in" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button size="lg" variant="outline" className="rounded-xl px-6 font-semibold border-border">
                  <span>ReliabilityTools.co.in</span>
                  <ExternalLink className="ml-2 w-4 h-4 opacity-80" />
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <BackToTopButton />
    </div>
  );
};

export default CalculatorsPage;
