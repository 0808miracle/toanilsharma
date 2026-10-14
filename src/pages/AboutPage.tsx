import { Header } from '@/components/portfolio/Header';
import { About } from '@/components/portfolio/About';
import { Philosophy } from '@/components/portfolio/Philosophy';
import { Awards } from '@/components/portfolio/Awards';
import { Footer } from '@/components/portfolio/Footer';
import { BackToTopButton } from '@/components/portfolio/BackToTopButton';
import { Sparkles, ArrowRight, ShieldCheck, Award, GraduationCap, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { BreadcrumbNav } from '@/components/portfolio/BreadcrumbNav';

export const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-primary transition-colors duration-300">
      <Header />
      
      <main className="pt-24 sm:pt-28">
        <BreadcrumbNav items={[{ label: 'About & Leadership' }]} />
        
        {/* Executive Page Breadcrumb & Header Hero */}
        <section className="relative py-12 sm:py-16 bg-secondary/30 dark:bg-card/30 border-b border-border/60 dark:border-white/10 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(rgba(59,130,246,0.08)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
          
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-700 dark:text-cyan-400 mb-4">
                <GraduationCap className="w-3.5 h-3.5" />
                <span>EXECUTIVE BIOGRAPHY &amp; ENGINEERING ETHOS</span>
              </div>
              
              <h1 className="font-grotesk text-3xl sm:text-5xl font-black tracking-tight text-foreground leading-tight">
                About Anil Sharma
              </h1>
              
              <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
                Senior engineering &amp; reliability leader with over 28 years of industrial rigor across petrochemical complexes and heavy manufacturing. Creator of globally utilized open-access simulation tools, and dedicated community mentor.
              </p>

              {/* Compliance & Non-commercial ethos pill */}
              <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-medium text-muted-foreground">
                <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
                  <Heart className="w-3.5 h-3.5" />
                  <span>Non-Commercial Community Service</span>
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-500" />
                  <span>28+ Years Continuous Process Experience</span>
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-indigo-500" />
                  <span>SHRM Certified Facilitator &amp; Lead Auditor</span>
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Core Biography & Career Pillars */}
        <About />

        {/* Technical Philosophy & Zero-Breakdown Mindset */}
        <Philosophy />

        {/* Accolades & Professional Recognitions */}
        <Awards />

        {/* Seamless Navigation Call-to-Action to Experience & Services */}
        <section className="py-16 bg-background border-t border-border/60 dark:border-white/10">
          <div className="container mx-auto max-w-5xl px-4 text-center">
            <h2 className="font-grotesk text-2xl sm:text-3xl font-bold text-foreground">
              Explore 28+ Years of Industrial Leadership
            </h2>
            <p className="mt-3 text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto">
              Dive into multi-site project executions, automated power distribution, and greenfield commissioning milestones across India&apos;s leading energy &amp; cement plants.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link to="/experience">
                <Button size="lg" className="rounded-xl px-6 font-semibold bg-primary text-primary-foreground shadow-md group">
                  <span>View Project Chronology</span>
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline" className="rounded-xl px-6 font-semibold border-border">
                  <span>Engineering Methodologies</span>
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

export default AboutPage;
