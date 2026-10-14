import { Header } from '@/components/portfolio/Header';
import { Hero } from '@/components/portfolio/Hero';
import { LogoWall } from '@/components/portfolio/LogoWall';
import { Footer } from '@/components/portfolio/Footer';
import { BackToTopButton } from '@/components/portfolio/BackToTopButton';
import { SpotlightCard } from '@/components/ui/SpotlightCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Settings, 
  Cpu, 
  Calculator, 
  GraduationCap, 
  ArrowRight, 
  ExternalLink, 
  Sparkles, 
  CheckCircle2, 
  Factory, 
  Layers, 
  Heart,
  Award,
  Zap,
  Globe2,
  BookOpen
} from 'lucide-react';

export const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-primary transition-colors duration-300">
      <Header />
      
      <main>
        {/* Executive Hero */}
        <Hero />

        {/* Global Standards & Industrial Credibility Marquee */}
        <LogoWall />

        {/* Executive Core Pillars: The 3 Tenets of Anil Sharma's Leadership */}
        <section className="py-20 sm:py-24 bg-secondary/30 dark:bg-card/30 border-b border-border/60 dark:border-white/10 relative overflow-hidden">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-700 dark:text-cyan-400 mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>EXECUTIVE VALUE PILLARS</span>
              </div>
              <h2 className="font-grotesk text-3xl sm:text-5xl font-black text-foreground tracking-tight">
                Engineering Rigor, Open Tools &amp; Capability Building
              </h2>
              <p className="mt-4 text-muted-foreground text-base sm:text-lg leading-relaxed">
                Combining three decades of continuous-process plant leadership with open-access digital engineering tools created for the global community.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Pillar 1 */}
              <SpotlightCard
                spotlightColor="rgba(59, 130, 246, 0.3)"
                className="rounded-3xl flex flex-col justify-between bg-background/90 dark:bg-card/90 border border-border/70 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-2 overflow-hidden shadow-lg group"
              >
                <div>
                  {/* Visual Header Image Banner */}
                  <div className="relative h-48 w-full overflow-hidden">
                    <img 
                      src="/images/petrochemical-complex.jpg" 
                      alt="Asset Integrity & Continuous Process Plant" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                    <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider backdrop-blur-md bg-black/60 text-cyan-300 border border-cyan-400/30">
                      <Factory className="w-3.5 h-3.5" />
                      <span>Pillar I &bull; Plant Reliability</span>
                    </div>
                  </div>

                  <div className="p-7">
                    <h3 className="font-grotesk font-bold text-xl text-foreground mb-3 group-hover:text-primary transition-colors">
                      Asset Integrity &amp; Plant Reliability
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                      Specialized in Reliability Centered Maintenance (SAE JA1011 RCM), FMEA, automated substation distribution (220kV to 6.6kV), and the Zero-Breakdown operational creed.
                    </p>
                    <ul className="space-y-2.5 text-xs font-medium text-foreground/85">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                        <span>RCM &amp; Failure Mode Elimination</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                        <span>Automated PLC High-Speed Load Shedding</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                        <span>Electrical Arc Flash Safety (NFPA 70E)</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="p-7 pt-0 border-t border-border/50">
                  <div className="pt-4">
                    <Link to="/services" className="inline-flex items-center text-xs font-semibold text-primary hover:underline group/link">
                      <span>Explore Engineering Expertise</span>
                      <ArrowRight className="ml-1.5 w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </SpotlightCard>

              {/* Pillar 2 */}
              <SpotlightCard
                spotlightColor="rgba(6, 182, 212, 0.3)"
                className="rounded-3xl flex flex-col justify-between bg-background/90 dark:bg-card/90 border border-border/70 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-2 overflow-hidden shadow-lg group"
              >
                <div>
                  {/* Visual Header Image Banner */}
                  <div className="relative h-48 w-full overflow-hidden">
                    <img 
                      src="/images/livesimulators-preview.jpg" 
                      alt="Virtual Labs and Power Electronics Simulators" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                    <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider backdrop-blur-md bg-black/60 text-cyan-300 border border-cyan-400/30">
                      <Cpu className="w-3.5 h-3.5" />
                      <span>Pillar II &bull; Simulation Labs</span>
                    </div>
                  </div>

                  <div className="p-7">
                    <h3 className="font-grotesk font-bold text-xl text-foreground mb-3 group-hover:text-cyan-500 transition-colors">
                      Open Engineering Labs &amp; Tools
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                      Creator of LiveSimulators.com, DesignCalculators.co.in (150+ tools), ReliabilityTools.co.in, and ElectroSafe.homes—free, ad-free browser software with Float64 physics.
                    </p>
                    <ul className="space-y-2.5 text-xs font-medium text-foreground/85">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-500 shrink-0" />
                        <span>65+ Float64 Real-Time Virtual Labs</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-500 shrink-0" />
                        <span>150+ Standardized Design Calculators</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-500 shrink-0" />
                        <span>100% Free Educational Hobby Initiative</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="p-7 pt-0 border-t border-border/50">
                  <div className="pt-4">
                    <Link to="/simulators" className="inline-flex items-center text-xs font-semibold text-cyan-600 dark:text-cyan-400 hover:underline group/link">
                      <span>Launch Virtual Laboratories</span>
                      <ArrowRight className="ml-1.5 w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </SpotlightCard>

              {/* Pillar 3 */}
              <SpotlightCard
                spotlightColor="rgba(99, 102, 241, 0.3)"
                className="rounded-3xl flex flex-col justify-between bg-background/90 dark:bg-card/90 border border-border/70 hover:border-indigo-500/50 transition-all duration-300 hover:-translate-y-2 overflow-hidden shadow-lg group"
              >
                <div>
                  {/* Visual Header Image Banner */}
                  <div className="relative h-48 w-full overflow-hidden">
                    <img 
                      src="/images/substation-automation.jpg" 
                      alt="Substation Automation & Technical Mentorship" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                    <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider backdrop-blur-md bg-black/60 text-indigo-300 border border-indigo-400/30">
                      <GraduationCap className="w-3.5 h-3.5" />
                      <span>Pillar III &bull; Mentorship</span>
                    </div>
                  </div>

                  <div className="p-7">
                    <h3 className="font-grotesk font-bold text-xl text-foreground mb-3 group-hover:text-indigo-500 transition-colors">
                      Capability Building &amp; Mentorship
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                      SHRM Certified Facilitator and DNV GL Certified IMS Lead Auditor who has facilitated 80+ specialized technical workshops and mentored 200+ practicing engineers.
                    </p>
                    <ul className="space-y-2.5 text-xs font-medium text-foreground/85">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
                        <span>200+ Engineers Formally Mentored</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
                        <span>80+ Specialized E&amp;I Workshops</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
                        <span>Safety &bull; Quality &bull; Operational Rigor</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="p-7 pt-0 border-t border-border/50">
                  <div className="pt-4">
                    <Link to="/training" className="inline-flex items-center text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline group/link">
                      <span>View Mentorship Curriculum</span>
                      <ArrowRight className="ml-1.5 w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </SpotlightCard>
            </div>
          </div>
        </section>

        {/* Featured Open Engineering Platforms Spotlight */}
        <section className="py-20 sm:py-24 bg-background relative overflow-hidden">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-primary font-grotesk">
                  Digital Platforms
                </span>
                <h2 className="font-grotesk text-3xl sm:text-4xl font-black text-foreground mt-2">
                  Featured Open-Access Ecosystem
                </h2>
                <p className="mt-2 text-muted-foreground text-sm sm:text-base max-w-2xl">
                  Non-commercial engineering platforms conceived and engineered to democratize technical precision worldwide.
                </p>
              </div>
              <div className="mt-6 md:mt-0">
                <Link to="/tools">
                  <Button variant="outline" className="rounded-full px-5 font-semibold text-xs border-border">
                    <span>View All Platforms &amp; Architecture</span>
                    <ArrowRight className="ml-2 w-3.5 h-3.5" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Tool 1 */}
              <div className="rounded-2xl bg-secondary/40 dark:bg-card/40 border border-border/70 hover:border-blue-500/60 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden shadow-sm group">
                <div>
                  <div className="relative h-44 w-full overflow-hidden bg-slate-900">
                    <img 
                      src="/images/livesimulators-preview.jpg" 
                      alt="LiveSimulators UI Interface" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-black/30" />
                    <span className="absolute top-3 left-3 px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-blue-500/90 text-white backdrop-blur-sm shadow-sm">
                      65+ Virtual Labs
                    </span>
                  </div>
                  <div className="p-5">
                    <span className="text-[11px] font-mono font-bold text-blue-500 uppercase tracking-wider block mb-1">
                      Power Electronics
                    </span>
                    <h3 className="font-grotesk font-bold text-lg text-foreground mb-2 group-hover:text-blue-500 transition-colors">
                      LiveSimulators.com
                    </h3>
                    <p className="text-muted-foreground text-xs leading-relaxed">
                      Float64 browser virtual labs modeling switching converter topologies, SPWM inverters, and grid synchronization.
                    </p>
                  </div>
                </div>
                <div className="p-5 pt-0">
                  <div className="pt-3 border-t border-border/50 flex items-center justify-between">
                    <Link to="/simulators" className="text-xs font-semibold text-primary hover:underline">
                      Run Simulators
                    </Link>
                    <a href="https://livesimulators.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Tool 2 */}
              <div className="rounded-2xl bg-secondary/40 dark:bg-card/40 border border-border/70 hover:border-indigo-500/60 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden shadow-sm group">
                <div>
                  <div className="relative h-44 w-full overflow-hidden bg-slate-900">
                    <img 
                      src="/images/designcalculators.webp" 
                      alt="DesignCalculators Standardized Engineering Suite" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-black/30" />
                    <span className="absolute top-3 left-3 px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-indigo-500/90 text-white backdrop-blur-sm shadow-sm">
                      150+ Design Tools
                    </span>
                  </div>
                  <div className="p-5">
                    <span className="text-[11px] font-mono font-bold text-indigo-500 uppercase tracking-wider block mb-1">
                      Design Suite
                    </span>
                    <h3 className="font-grotesk font-bold text-lg text-foreground mb-2 group-hover:text-indigo-500 transition-colors">
                      DesignCalculators
                    </h3>
                    <p className="text-muted-foreground text-xs leading-relaxed">
                      Standardized engineering calculators covering cable sizing, transformer impedance, and voltage drops per IEC &amp; IEEE.
                    </p>
                  </div>
                </div>
                <div className="p-5 pt-0">
                  <div className="pt-3 border-t border-border/50 flex items-center justify-between">
                    <Link to="/tools" className="text-xs font-semibold text-primary hover:underline">
                      View Architecture
                    </Link>
                    <a href="https://designcalculators.co.in" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Tool 3 */}
              <div className="rounded-2xl bg-secondary/40 dark:bg-card/40 border border-border/70 hover:border-cyan-500/60 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden shadow-sm group">
                <div>
                  <div className="relative h-44 w-full overflow-hidden bg-slate-900">
                    <img 
                      src="/images/reliabilitytools.webp" 
                      alt="ReliabilityTools Weibull and MTBF Modeling" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-black/30" />
                    <span className="absolute top-3 left-3 px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-cyan-600/90 text-white backdrop-blur-sm shadow-sm">
                      Weibull Analysis
                    </span>
                  </div>
                  <div className="p-5">
                    <span className="text-[11px] font-mono font-bold text-cyan-500 uppercase tracking-wider block mb-1">
                      Reliability Engineering
                    </span>
                    <h3 className="font-grotesk font-bold text-lg text-foreground mb-2 group-hover:text-cyan-500 transition-colors">
                      ReliabilityTools
                    </h3>
                    <p className="text-muted-foreground text-xs leading-relaxed">
                      2-Parameter Weibull distribution calculator, MTBF / MTTR forecasting, and asset availability estimators.
                    </p>
                  </div>
                </div>
                <div className="p-5 pt-0">
                  <div className="pt-3 border-t border-border/50 flex items-center justify-between">
                    <Link to="/calculators" className="text-xs font-semibold text-primary hover:underline">
                      Open Calculator
                    </Link>
                    <a href="https://reliabilitytools.co.in" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Tool 4 */}
              <div className="rounded-2xl bg-secondary/40 dark:bg-card/40 border border-border/70 hover:border-amber-500/60 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden shadow-sm group">
                <div>
                  <div className="relative h-44 w-full overflow-hidden bg-slate-900">
                    <img 
                      src="/images/electrosafe.webp" 
                      alt="ElectroSafe Public Safety Advisory" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-black/30" />
                    <span className="absolute top-3 left-3 px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-500/90 text-white backdrop-blur-sm shadow-sm">
                      Public Good
                    </span>
                  </div>
                  <div className="p-5">
                    <span className="text-[11px] font-mono font-bold text-amber-500 uppercase tracking-wider block mb-1">
                      Electrical Fire Safety
                    </span>
                    <h3 className="font-grotesk font-bold text-lg text-foreground mb-2 group-hover:text-amber-500 transition-colors">
                      ElectroSafe.homes
                    </h3>
                    <p className="text-muted-foreground text-xs leading-relaxed">
                      Public good electrical safety advisory educating citizens and homeowners on residential electrical fire prevention.
                    </p>
                  </div>
                </div>
                <div className="p-5 pt-0">
                  <div className="pt-3 border-t border-border/50 flex items-center justify-between">
                    <Link to="/tools" className="text-xs font-semibold text-primary hover:underline">
                      Learn More
                    </Link>
                    <a href="https://electrosafe.homes" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Career Timeline Highlight & Accolades Banner */}
        <section className="py-16 sm:py-20 bg-secondary/30 dark:bg-card/30 border-y border-border/60 dark:border-white/10">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-blue-900/30 via-background to-secondary/60 border border-border/80 flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-mono font-semibold text-primary mb-3">
                  <Award className="w-3.5 h-3.5" />
                  <span>28+ YEARS INDUSTRIAL LEADERSHIP</span>
                </div>
                <h3 className="font-grotesk text-2xl sm:text-3xl font-bold text-foreground">
                  From Greenfield Commissioning to World-Scale Petrochemical Capital Projects
                </h3>
                <p className="mt-3 text-muted-foreground text-sm sm:text-base leading-relaxed">
                  Steering multidisciplinary engineering integrity across continuous process plants, greenfield cement units, automated high-voltage switchyards, and corporate capability development.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto shrink-0">
                <Link to="/experience">
                  <Button size="lg" className="w-full sm:w-auto rounded-xl px-6 font-semibold bg-primary text-primary-foreground shadow-md group">
                    <span>View Career Timeline</span>
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link to="/about">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-xl px-6 font-semibold border-border">
                    <span>About Anil Sharma</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Community & Academic Dialogue CTA */}
        <section className="py-20 bg-background">
          <div className="container mx-auto max-w-5xl px-4 text-center">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
              <Heart className="w-6 h-6 text-emerald-500" />
            </div>
            <h2 className="font-grotesk text-3xl sm:text-4xl font-black text-foreground">
              Technical Dialogue &amp; Community Mentorship
            </h2>
            <p className="mt-3 text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
              All tools and educational models are free and non-commercial. Open for student career mentorship, technical engineering exchange, and simulator feedback.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <Button size="lg" className="rounded-xl px-8 font-semibold bg-primary text-primary-foreground shadow-lg group">
                  <span>Get in Touch</span>
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/insights">
                <Button size="lg" variant="outline" className="rounded-xl px-8 font-semibold border-border">
                  <BookOpen className="mr-2 w-4 h-4 text-primary" />
                  <span>Read Field Insights</span>
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

export default Index;