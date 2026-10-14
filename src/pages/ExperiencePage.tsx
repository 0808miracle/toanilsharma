import { Header } from '@/components/portfolio/Header';
import { Experience } from '@/components/portfolio/Experience';
import { Footer } from '@/components/portfolio/Footer';
import { BackToTopButton } from '@/components/portfolio/BackToTopButton';
import { BreadcrumbNav } from '@/components/portfolio/BreadcrumbNav';
import { SpotlightCard } from '@/components/ui/SpotlightCard';
import { Factory, ArrowRight, ShieldCheck, Cpu, Briefcase, Award, Zap, Activity, CheckCircle2, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const caseStudies = [
  {
    title: "High-Speed Automated Substation Load Shedding (220kV to 6.6kV)",
    plant: "Continuous Petrochemical Complex",
    impact: "100% Blackout Cascade Immunity",
    badge: "Grid Automation",
    image: "/images/substation-automation.jpg",
    theme: {
      spotlight: "rgba(59, 130, 246, 0.3)",
      badge: "bg-blue-500/20 text-blue-300 border-blue-400/40",
      borderHover: "hover:border-blue-500/60",
      accent: "group-hover:text-blue-400",
      check: "text-blue-500"
    },
    challenge: "Sudden external grid disturbances and frequency drops were putting continuous process units at risk of severe tripping and multi-crore restart losses.",
    solution: "Engineered and deployed PLC-based automated load shedding logic with <80ms execution speed. Configured multi-stage feeder shedding that instantly isolates non-critical utility loops while preserving captive generators in stable islanded operation.",
    metrics: [
      "Zero cascading total plant blackouts achieved across operating tenure",
      "Automated islanding transition stabilized within 4 cycles (80ms)",
      "Continuous process integrity secured across 15+ world-scale manufacturing units"
    ]
  },
  {
    title: "Greenfield 2.5 MTPA Cement Plant Commissioning & Energy Optimization",
    plant: "Heavy Continuous Process Manufacturing",
    impact: "2.5% Plant Energy Reduction",
    badge: "Greenfield Commissioning",
    image: "/images/petrochemical-complex.jpg",
    theme: {
      spotlight: "rgba(245, 158, 11, 0.3)",
      badge: "bg-amber-500/20 text-amber-300 border-amber-400/40",
      borderHover: "hover:border-amber-500/60",
      accent: "group-hover:text-amber-400",
      check: "text-amber-500"
    },
    challenge: "Executing end-to-end electrical, instrumentation, and control stabilization for a 2.5 MTPA greenfield cement plant under tight startup timelines.",
    solution: "Led integrated E&I commissioning teams across heavy crushers, raw mills, rotary kiln, and captive power plant. Spearheaded automated capacitor bank tuning, power factor correction, and variable frequency drive (VFD) implementation on high-inertia fans.",
    metrics: [
      "Achieved on-schedule plant stabilization with zero reportable safety incidents",
      "Reduced overall specific electrical energy consumption by 2.5%",
      "Substation automated power factor maintained consistently at >0.98"
    ]
  },
  {
    title: "SAE JA1011 RCM Asset Criticality & Spares Rationalization",
    plant: "Multi-Unit Industrial Complex",
    impact: "38% Reduction in Unplanned Trips",
    badge: "Asset Integrity",
    image: "/images/electrical-safety.jpg",
    theme: {
      spotlight: "rgba(16, 185, 129, 0.3)",
      badge: "bg-emerald-500/20 text-emerald-300 border-emerald-400/40",
      borderHover: "hover:border-emerald-500/60",
      accent: "group-hover:text-emerald-400",
      check: "text-emerald-500"
    },
    challenge: "Excessive reactive breakdown firefighting and bloated unrationalized spares inventory tying up critical operational working capital.",
    solution: "Instituted SAE JA1011 Reliability Centered Maintenance (RCM) and FMEA matrices across critical rotating machinery. Mapped failure physics into predictive condition-based maintenance tasks within enterprise SAP-PM.",
    metrics: [
      "38% verified reduction in chronic unplanned equipment outages",
      "Rationalized critical spares inventory, substantially releasing tied-up capital",
      "Established standard operating procedures (SOPs) adopted by over 200 plant engineers"
    ]
  }
];

export const ExperiencePage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-primary transition-colors duration-300">
      <Header />
      
      <main className="pt-24 sm:pt-28">
        <BreadcrumbNav items={[{ label: 'Industrial Leadership & Chronology' }]} />

        {/* Page Hero Header */}
        <section className="relative py-12 sm:py-16 bg-secondary/30 dark:bg-card/30 border-b border-border/60 dark:border-white/10 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(rgba(59,130,246,0.08)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
          
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-700 dark:text-cyan-400 mb-4">
                <Factory className="w-3.5 h-3.5" />
                <span>28+ YEARS INDUSTRIAL LEADERSHIP CHRONOLOGY</span>
              </div>
              
              <h1 className="font-grotesk text-3xl sm:text-5xl font-black tracking-tight text-foreground leading-tight">
                Industrial Leadership &amp; Project Track Record
              </h1>
              
              <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
                A verified three-decade engineering chronology: from greenfield continuous-process cement manufacturing in 1995 to steering capital project governance, switchyard modernizations, and automated power distribution across world-scale continuous petrochemical complexes.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-mono text-muted-foreground">
                <span className="text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Verified Industrial Rigor</span>
                </span>
                <span>•</span>
                <span>Petrochemical Complex &bull; 2.5 MTPA Greenfield Cement &bull; 220kV Automated Grids</span>
              </div>
            </div>
          </div>
        </section>

        {/* Full Experience Timeline Component */}
        <Experience />

        {/* Concrete Engineering Case Studies Silo */}
        <section className="py-16 sm:py-20 bg-secondary/20 dark:bg-card/20 border-t border-border/60 dark:border-white/10">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-bold uppercase tracking-widest text-primary font-grotesk">
                Proven Plant Impact
              </span>
              <h2 className="font-grotesk text-3xl sm:text-4xl font-black text-foreground mt-2">
                Flagship Industrial Case Studies
              </h2>
              <p className="mt-3 text-muted-foreground text-sm sm:text-base leading-relaxed">
                Documented engineering achievements demonstrating measurable ROI, power stability, and asset life extension in continuous process operations.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {caseStudies.map((cs, idx) => (
                <SpotlightCard
                  key={idx}
                  spotlightColor={cs.theme.spotlight}
                  className={cn(
                    "rounded-3xl flex flex-col justify-between bg-background/90 dark:bg-card/90 border border-border/70 transition-all duration-300 hover:-translate-y-2 overflow-hidden shadow-lg group",
                    cs.theme.borderHover
                  )}
                >
                  <div>
                    {/* Visual Header Image Banner */}
                    <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                      <img 
                        src={cs.image} 
                        alt={cs.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-black/40" />
                      
                      <div className="absolute top-3.5 left-3.5">
                        <span className={cn("px-2.5 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider backdrop-blur-md border shadow-sm", cs.theme.badge)}>
                          {cs.badge}
                        </span>
                      </div>
                      
                      <div className="absolute bottom-3 right-3">
                        <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-black/80 text-emerald-300 backdrop-blur-md border border-emerald-500/30 shadow-sm">
                          {cs.impact}
                        </span>
                      </div>
                    </div>

                    <div className="p-6 sm:p-7">
                      <p className="text-xs text-primary font-semibold mb-2 font-mono">
                        {cs.plant}
                      </p>

                      <h3 className={cn("font-grotesk text-xl font-bold text-foreground mb-4 leading-snug transition-colors", cs.theme.accent)}>
                        {cs.title}
                      </h3>

                      <div className="space-y-3 text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6">
                        <p>
                          <strong className="text-foreground">Challenge:</strong> {cs.challenge}
                        </p>
                        <p>
                          <strong className="text-foreground">Engineered Solution:</strong> {cs.solution}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-border/50">
                        <h4 className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-3 font-mono">
                          Quantified Deliverables:
                        </h4>
                        <ul className="space-y-2 text-xs">
                          {cs.metrics.map((m, i) => (
                            <li key={i} className="flex items-start text-foreground/90 font-medium">
                              <CheckCircle2 className={cn("w-3.5 h-3.5 mr-2 shrink-0 mt-0.5", cs.theme.check)} />
                              <span>{m}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </SpotlightCard>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom Conversion / Next Step */}
        <section className="py-16 bg-background border-t border-border/60 dark:border-white/10">
          <div className="container mx-auto max-w-5xl px-4 text-center">
            <h2 className="font-grotesk text-2xl sm:text-3xl font-bold text-foreground">
              Explore Technical Methodologies &amp; Simulators
            </h2>
            <p className="mt-3 text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto">
              Review the underlying RCM, FMEA, and automated electrical distribution methodologies that drove these zero-breakdown achievements.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link to="/services">
                <Button size="lg" className="rounded-xl px-6 font-semibold bg-primary text-primary-foreground shadow-md group">
                  <span>Explore Engineering Services</span>
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/tools">
                <Button size="lg" variant="outline" className="rounded-xl px-6 font-semibold border-border">
                  <span>View Open Software Platforms</span>
                </Button>
              </Link>
              <Link to="/training">
                <Button size="lg" variant="outline" className="rounded-xl px-6 font-semibold border-border">
                  <span>View Training Track Record</span>
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

export default ExperiencePage;
