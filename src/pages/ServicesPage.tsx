import { Header } from '@/components/portfolio/Header';
import { Expertise } from '@/components/portfolio/Expertise';
import { Footer } from '@/components/portfolio/Footer';
import { BackToTopButton } from '@/components/portfolio/BackToTopButton';
import { SpotlightCard } from '@/components/ui/SpotlightCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Settings, 
  Zap, 
  ShieldCheck, 
  Cpu, 
  BookOpen, 
  Calculator, 
  ArrowRight, 
  Flame, 
  Activity,
  Layers,
  HeartHandshake,
  CheckCircle2
} from 'lucide-react';
import { BreadcrumbNav } from '@/components/portfolio/BreadcrumbNav';
import { cn } from '@/lib/utils';

const deepMethodologies = [
  {
    title: "Reliability-Centered Maintenance (RCM per SAE JA1011)",
    tag: "Asset Reliability",
    image: "/images/petrochemical-complex.jpg",
    theme: {
      spotlight: "rgba(16, 185, 129, 0.3)",
      badge: "bg-emerald-500/20 text-emerald-300 border-emerald-400/40",
      borderHover: "hover:border-emerald-500/60",
      accent: "group-hover:text-emerald-400",
      check: "text-emerald-500"
    },
    description: "Systematic failure mode categorization, maintenance strategy optimization, and asset life-cycle management that eliminates repetitive equipment downtime in continuous process facilities.",
    deliverables: [
      "Failure Mode and Effects Analysis (FMEA)",
      "Criticality ranking matrices (A/B/C tiering)",
      "Condition-based vs. time-based maintenance selection",
      "Spares inventory rationalization via SAP-PM"
    ]
  },
  {
    title: "Electrical Substation Automation & Load Shedding (220kV–6.6kV)",
    tag: "Power Distribution",
    image: "/images/substation-automation.jpg",
    theme: {
      spotlight: "rgba(59, 130, 246, 0.3)",
      badge: "bg-blue-500/20 text-blue-300 border-blue-400/40",
      borderHover: "hover:border-blue-500/60",
      accent: "group-hover:text-blue-400",
      check: "text-blue-500"
    },
    description: "Design and deployment of PLC-driven high-speed automated load shedding schemes and intelligent numerical relay architectures that prevent grid instability and cascading blackout events.",
    deliverables: [
      "Island mode transition & automated frequency tracking",
      "SCADA & DCS bi-directional telemetry integration",
      "Power factor optimization & capacitor bank switching",
      "Transformer health monitoring and dissolved gas analysis (DGA)"
    ]
  },
  {
    title: "Electrical Safety & Arc Flash Risk Mitigation (NFPA 70E / IEEE 1584)",
    tag: "Workforce Safety",
    image: "/images/electrical-safety.jpg",
    theme: {
      spotlight: "rgba(245, 158, 11, 0.3)",
      badge: "bg-amber-500/20 text-amber-300 border-amber-400/40",
      borderHover: "hover:border-amber-500/60",
      accent: "group-hover:text-amber-400",
      check: "text-amber-500"
    },
    description: "Comprehensive arc flash incident energy calculations, boundary determinations, and hazardous area classification protocols to secure zero-harm operating environments.",
    deliverables: [
      "Incident energy calculations (cal/cm²) per IEEE 1584",
      "PPE category classification and labeling protocols",
      "Lockout/Tagout (LOTO) and permit-to-work governance",
      "ATEX / IEC 60079 hazardous area classification adherence"
    ]
  },
  {
    title: "Root Cause Analysis (RCA) & Zero-Breakdown Governance",
    tag: "Quality & Uptime",
    image: "/images/ups-batteries.jpg",
    theme: {
      spotlight: "rgba(6, 182, 212, 0.3)",
      badge: "bg-cyan-500/20 text-cyan-300 border-cyan-400/40",
      borderHover: "hover:border-cyan-500/60",
      accent: "group-hover:text-cyan-400",
      check: "text-cyan-500"
    },
    description: "Deep-dive root-cause investigative workflows utilizing 5-Whys, Ishikawa diagrams, and fault tree analyses to permanently eliminate chronic failure modes.",
    deliverables: [
      "Cross-functional post-incident forensic reviews",
      "Standard operating procedure (SOP) revision",
      "Human-machine interface error prevention",
      "Continuous process uptime KPI governance"
    ]
  }
];

export const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-primary transition-colors duration-300">
      <Header />
      
      <main className="pt-24 sm:pt-28">
        <BreadcrumbNav items={[{ label: 'Engineering Expertise & Methodologies' }]} />
        
        {/* Page Hero Header */}
        <section className="relative py-12 sm:py-16 bg-secondary/30 dark:bg-card/30 border-b border-border/60 dark:border-white/10 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(rgba(59,130,246,0.08)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
          
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-700 dark:text-cyan-400 mb-4">
                <Settings className="w-3.5 h-3.5" />
                <span>TECHNICAL EXPERTISE &amp; INDUSTRIAL FRAMEWORKS</span>
              </div>
              
              <h1 className="font-grotesk text-3xl sm:text-5xl font-black tracking-tight text-foreground leading-tight">
                Engineering Expertise &amp; Methodologies
              </h1>
              
              <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
                Proven engineering frameworks refined over 28+ years of continuous-process operations across petrochemical complexes and heavy manufacturing. Shared openly for technical education, student mentorship, and industry peer dialogue.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-mono text-muted-foreground">
                <span className="text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1.5">
                  <HeartHandshake className="w-3.5 h-3.5" />
                  <span>Open Knowledge Sharing • Non-Commercial</span>
                </span>
                <span>•</span>
                <span>Adherence to SAE JA1011 &bull; IEEE 1584 &bull; NFPA 70E</span>
              </div>
            </div>
          </div>
        </section>

        {/* Core Expertise Grid */}
        <Expertise />

        {/* Deep Methodologies Section */}
        <section className="py-16 sm:py-20 bg-secondary/20 dark:bg-card/20 border-t border-border/60 dark:border-white/10">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-bold uppercase tracking-widest text-primary font-grotesk">
                Methodological Depth
              </span>
              <h2 className="font-grotesk text-2xl sm:text-4xl font-bold text-foreground mt-2">
                Core Engineering Disciplines in Action
              </h2>
              <p className="mt-3 text-muted-foreground text-sm sm:text-base">
                How theoretical engineering standards translate into real-world plant availability, zero unplanned trips, and electrical safety.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {deepMethodologies.map((method, idx) => (
                <SpotlightCard
                  key={idx}
                  spotlightColor={method.theme.spotlight}
                  className={cn(
                    "rounded-3xl flex flex-col justify-between bg-background/90 dark:bg-card/90 border border-border/70 transition-all duration-300 hover:-translate-y-2 overflow-hidden shadow-lg group",
                    method.theme.borderHover
                  )}
                >
                  <div>
                    {/* Visual Header Image Banner */}
                    <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                      <img 
                        src={method.image} 
                        alt={method.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-black/40" />
                      
                      <div className="absolute top-3.5 left-3.5">
                        <span className={cn("px-2.5 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider backdrop-blur-md border shadow-sm", method.theme.badge)}>
                          {method.tag}
                        </span>
                      </div>
                    </div>

                    <div className="p-7">
                      <h3 className={cn("font-grotesk text-xl font-bold text-foreground mb-3 leading-snug transition-colors", method.theme.accent)}>
                        {method.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                        {method.description}
                      </p>

                      <div className="pt-4 border-t border-border/50">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3 font-mono">
                          Key Technical Tenets:
                        </h4>
                        <ul className="space-y-2 text-xs sm:text-sm">
                          {method.deliverables.map((item, i) => (
                            <li key={i} className="flex items-start text-foreground/90 font-medium">
                              <CheckCircle2 className={cn("w-3.5 h-3.5 mr-2 shrink-0 mt-0.5", method.theme.check)} />
                              <span>{item}</span>
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

        {/* Interactive Tools Bridge */}
        <section className="py-16 bg-background border-t border-border/60 dark:border-white/10">
          <div className="container mx-auto max-w-5xl px-4 text-center">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
              <Calculator className="w-6 h-6" />
            </div>
            <h2 className="font-grotesk text-2xl sm:text-3xl font-bold text-foreground">
              Calculate &amp; Simulate Online
            </h2>
            <p className="mt-3 text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto">
              Test these reliability principles with real mathematical models: run Weibull analysis, calculate MTBF/MTTR, or simulate power electronics and waveform dynamics in real time.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link to="/calculators">
                <Button size="lg" className="rounded-xl px-6 font-semibold bg-primary text-primary-foreground shadow-md group">
                  <Calculator className="mr-2 w-4 h-4" />
                  <span>Open Reliability Calculators</span>
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/simulators">
                <Button size="lg" variant="outline" className="rounded-xl px-6 font-semibold border-border">
                  <Zap className="mr-2 w-4 h-4 text-primary" />
                  <span>Explore 65+ Simulators</span>
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

export default ServicesPage;
