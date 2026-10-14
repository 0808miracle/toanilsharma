import { useState } from 'react';
import { Header } from '@/components/portfolio/Header';
import { Insights } from '@/components/portfolio/Insights';
import { Footer } from '@/components/portfolio/Footer';
import { BackToTopButton } from '@/components/portfolio/BackToTopButton';
import { SpotlightCard } from '@/components/ui/SpotlightCard';
import { 
  BookOpen, 
  Quote, 
  ShieldCheck, 
  Zap, 
  ArrowRight, 
  Clock, 
  User, 
  Heart,
  ChevronRight,
  FileText,
  CheckCircle2,
  Share2,
  Sparkles
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { BreadcrumbNav } from '@/components/portfolio/BreadcrumbNav';
import { cn } from '@/lib/utils';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

interface Whitepaper {
  id: string;
  title: string;
  readTime: string;
  category: string;
  image: string;
  theme: {
    spotlight: string;
    badge: string;
    borderHover: string;
    accent: string;
  };
  summary: string;
  highlights: string[];
  fullBody: {
    sectionTitle: string;
    paragraphs: string[];
  }[];
}

const whitepapers: Whitepaper[] = [
  {
    id: "zero-breakdown-mindset",
    title: "The Zero-Breakdown Mindset: Shifting from Reactive Firefighting to Systematic Reliability",
    readTime: "6 min read",
    category: "Asset Integrity",
    image: "/images/petrochemical-complex.jpg",
    theme: {
      spotlight: "rgba(16, 185, 129, 0.3)",
      badge: "bg-emerald-500/20 text-emerald-300 border-emerald-400/40",
      borderHover: "hover:border-emerald-500/60",
      accent: "group-hover:text-emerald-400"
    },
    summary: "Why world-class continuous plants don't celebrate fast repairs—they eliminate the failure modes entirely. A deep dive into SAE JA1011 RCM principles, failure physics, and operator-centric autonomous care.",
    highlights: ["RCM Logic trees", "Chronic vs. Sporadic failures", "Total Productive Maintenance"],
    fullBody: [
      {
        sectionTitle: "1. The Fallacy of Celebrating Heroic Repairs",
        paragraphs: [
          "In many traditional manufacturing and continuous process facilities, the hero of the day is the technician or engineer who quickly restores a tripped pump or blown breaker in record time. While rapid response is commendable, it conceals a dangerous cultural flaw: celebrating the repair rather than interrogating why the failure was allowed to occur in the first place.",
          "Over 28 years of plant operations, empirical observation demonstrates that up to 80% of major industrial breakdowns are preceded by detectable warning signs—vibration anomalies, localized thermal gradients, ultrasonic hiss, or lubrication breakdown. A true 'Zero-Breakdown Mindset' treats every equipment breakdown not as an inevitability of machinery, but as a preventable failure of asset governance."
        ]
      },
      {
        sectionTitle: "2. The P-F Interval: The Window of Opportunity",
        paragraphs: [
          "The core of SAE JA1011 Reliability-Centered Maintenance is understanding the P-F Interval—the elapsed time between when a potential failure (P) first becomes detectable, and when it deteriorates into a catastrophic functional failure (F).",
          "By deploying condition-monitoring tools (infrared thermography, vibration FFT analysis, oil spectroscopy, and acoustic ultrasound), engineers intercept the asset high on the P-F curve. Corrective intervention is scheduled during planned windows without disrupting continuous petrochemical production, yielding massive reductions in unbudgeted outage costs."
        ]
      },
      {
        sectionTitle: "3. Transforming Operator Ownership through TPM",
        paragraphs: [
          "Asset reliability cannot be outsourced solely to the electrical or mechanical maintenance department. Operators who work adjacent to machines for 8 hours daily are the first line of defense. When operators are trained in Autonomous Maintenance (Jishu Hozen)—cleaning, inspecting, and listening to machine resonance—they detect microscopic deviations weeks before numerical alarms trip the DCS."
        ]
      }
    ]
  },
  {
    id: "automated-load-shedding",
    title: "High-Speed Automated Load Shedding & Grid Islanding in Continuous Process Plants",
    readTime: "8 min read",
    category: "Power Systems",
    image: "/images/substation-automation.jpg",
    theme: {
      spotlight: "rgba(59, 130, 246, 0.3)",
      badge: "bg-blue-500/20 text-blue-300 border-blue-400/40",
      borderHover: "hover:border-blue-500/60",
      accent: "group-hover:text-blue-400"
    },
    summary: "How millisecond PLC-based load shedding schemes preserve generator stability and prevent cascading blackouts across 220kV to 6.6kV petrochemical distribution systems during sudden grid trips.",
    highlights: ["Frequency drop detection (df/dt)", "Critical vs. Non-critical feeder shedding", "Islanded transition"],
    fullBody: [
      {
        sectionTitle: "1. The High Cost of Uncontrolled Power Cascades",
        paragraphs: [
          "In continuous petrochemical facilities, an unplanned loss of electrical power is catastrophic. Polymerizing reactors freeze, catalysts choke, and flaring systems are overwhelmed. A complete facility blackout can require 5 to 7 days of arduous chemical restart procedures, costing tens of crores.",
          "When an external 220kV grid fault occurs, the sudden deficit causes the captive steam turbine generators (STGs) to rapidly decelerate. Unless electrical load is shed within 80 to 100 milliseconds, captive generators trip on under-frequency protections (<47.5Hz), collapsing the entire plant electrical island."
        ]
      },
      {
        sectionTitle: "2. Architecture of a High-Speed PLC Load Shedding Scheme",
        paragraphs: [
          "To secure blackout immunity, an automated PLC load shedding system was engineered across 27 substations. The architecture operates on real-time matrix logic:",
          "1. Rapid disturbance detection using rate-of-change-of-frequency (df/dt) and optical breaker auxiliary status.",
          "2. Real-time generation-versus-load deficit calculation executed in <30ms.",
          "3. Instantaneous trip signaling sent over redundant optical fiber loops to non-critical utility feeders (water cooling fans, offsite compressors, administration HVAC).",
          "4. Preserving essential continuous process reactors, PTA/PET lines, and critical lube oil systems."
        ]
      },
      {
        sectionTitle: "3. Results: Zero Cascading Blackouts",
        paragraphs: [
          "This automated scheme proved its worth repeatedly during severe external grid disturbances. Captive generators stabilized at 49.2 Hz, the plant safely separated into island mode, and continuous process production continued uninterrupted."
        ]
      }
    ]
  },
  {
    id: "free-engineering-tools-philosophy",
    title: "Why Free Open-Access Simulators Accelerate Engineering Education Globally",
    readTime: "5 min read",
    category: "Technical Philanthropy",
    image: "/images/livesimulators-preview.jpg",
    theme: {
      spotlight: "rgba(6, 182, 212, 0.3)",
      badge: "bg-cyan-500/20 text-cyan-300 border-cyan-400/40",
      borderHover: "hover:border-cyan-500/60",
      accent: "group-hover:text-cyan-400"
    },
    summary: "The philosophy behind building 65+ browser-based physics simulators and 150+ calculators. Eliminating expensive proprietary software barriers for polytechnic and university engineering students.",
    highlights: ["Float64 precision solvers", "Zero paywalls or ads", "Democratizing engineering tools"],
    fullBody: [
      {
        sectionTitle: "1. The Barrier of Expensive Engineering Software",
        paragraphs: [
          "Commercial power systems and circuit simulation software packages (such as ETAP, PSCAD, MATLAB/Simulink) carry enterprise licensing costs of thousands of dollars. For engineering students in developing nations, polytechnic institutions, or young plant engineers working in remote industrial sites, these tools are financially inaccessible.",
          "Consequently, theoretical engineering education remains largely confined to chalkboard equations, without intuitive visual feedback on how harmonics distort sinusoidal waveforms, or how thermal Foster networks dissipate semiconductor switching losses."
        ]
      },
      {
        sectionTitle: "2. First-Principles Float64 Physics in the Browser",
        paragraphs: [
          "Modern web browsers with WebAssembly, Web Workers, and Float64 hardware acceleration possess enough compute power to solve stiff differential equations in real time.",
          "By building LiveSimulators.com and DesignCalculators.co.in directly in client-side TypeScript, these simulation models run instantaneously on any smartphone or low-cost laptop, without installation, zero cloud latency, and 100% privacy."
        ]
      },
      {
        sectionTitle: "3. Technical Philanthropy as an Ethos",
        paragraphs: [
          "Engineering knowledge belongs to the global community. Creating these 65+ labs and 150+ calculators is a non-commercial lifelong hobby designed to give back to the next generation of engineers who will build tomorrow's resilient infrastructure."
        ]
      }
    ]
  },
  {
    id: "arc-flash-incident-energy",
    title: "Demystifying Arc Flash Incident Energy: Practical NFPA 70E & IEEE 1584 Compliance",
    readTime: "7 min read",
    category: "Electrical Safety",
    image: "/images/electrical-safety.jpg",
    theme: {
      spotlight: "rgba(245, 158, 11, 0.3)",
      badge: "bg-amber-500/20 text-amber-300 border-amber-400/40",
      borderHover: "hover:border-amber-500/60",
      accent: "group-hover:text-amber-400"
    },
    summary: "Moving beyond warning stickers to actual risk engineering. Understanding clearing time effects, enclosure size factors, and working boundary definitions in industrial switchgear.",
    highlights: ["Incident energy (cal/cm2)", "PPE categories", "Clearing time optimization"],
    fullBody: [
      {
        sectionTitle: "1. The True Danger of Arc Flash Events",
        paragraphs: [
          "An electrical arc flash is an explosive release of thermal energy caused by an ionized phase-to-phase or phase-to-ground plasma bridge. Temperatures can exceed 19,000°C (four times hotter than the surface of the sun), vaporizing copper busbars and producing catastrophic blast pressure waves.",
          "For decades, electrical safety focused narrowly on shock prevention (insulating gloves, rubber mats). However, arc flash accounts for the overwhelming majority of severe electrical burn injuries in heavy continuous manufacturing."
        ]
      },
      {
        sectionTitle: "2. The Mathematical Relationship: IEEE 1584 Mechanics",
        paragraphs: [
          "Under IEEE 1584, incident energy (E) in cal/cm² at working distance (D) is directly proportional to arcing fault clearing time (t).",
          "Because incident energy scales linearly with clearing time (t), shaving even 100 milliseconds off an upstream relay trip time often reduces PPE category requirements from a hazardous 40 cal/cm² blast suit down to an 8 cal/cm² standard everyday safety face shield."
        ]
      },
      {
        sectionTitle: "3. Engineering Controls Over PPE",
        paragraphs: [
          "PPE is the last line of defense, not the first. Practical risk mitigation involves engineered controls: maintenance mode switches that temporarily eliminate intentional relay time delays during energized inspection, remote motorized racking of 6.6kV vacuum circuit breakers, and infrared inspection windows."
        ]
      }
    ]
  }
];

export const InsightsPage = () => {
  const [selectedWhitepaper, setSelectedWhitepaper] = useState<Whitepaper | null>(null);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-primary transition-colors duration-300">
      <Header />
      
      <main className="pt-24 sm:pt-28">
        <BreadcrumbNav items={[{ label: 'Reliability Insights & Whitepapers' }]} />

        {/* Page Hero Header */}
        <section className="relative py-12 sm:py-16 bg-secondary/30 dark:bg-card/30 border-b border-border/60 dark:border-white/10 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(rgba(59,130,246,0.08)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
          
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-700 dark:text-cyan-400 mb-4">
                <BookOpen className="w-3.5 h-3.5" />
                <span>FIELD PHILOSOPHY &amp; ENGINEERING WHITEPAPERS</span>
              </div>
              
              <h1 className="font-grotesk text-3xl sm:text-5xl font-black tracking-tight text-foreground leading-tight">
                Reliability Insights &amp; Technical Reflections
              </h1>
              
              <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
                Reflections, failure physics analyses, and maintenance philosophies distilled from 28+ years of continuous-process plant operations across heavy petrochemical complexes and cement manufacturing.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-mono text-muted-foreground">
                <span className="text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1.5">
                  <Heart className="w-3.5 h-3.5" />
                  <span>Educational Knowledge Base</span>
                </span>
                <span>•</span>
                <span>Zero-Breakdown Mindset &bull; Power Grid Automation &bull; Electrical Safety</span>
              </div>
            </div>
          </div>
        </section>

        {/* Existing High-Impact Insights Quotes & Pillars */}
        <Insights />

        {/* Interactive Technical Whitepapers Grid */}
        <section className="py-16 sm:py-20 bg-secondary/20 dark:bg-card/20 border-t border-border/60 dark:border-white/10">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-bold uppercase tracking-widest text-primary font-grotesk">
                Knowledge Base &bull; Technical Whitepapers
              </span>
              <h2 className="font-grotesk text-2xl sm:text-4xl font-bold text-foreground mt-2">
                Engineering Essays &amp; Field Analyses
              </h2>
              <p className="mt-3 text-muted-foreground text-sm sm:text-base">
                Click any whitepaper below to read the comprehensive technical analysis and engineering formulations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {whitepapers.map((essay, idx) => (
                <SpotlightCard
                  key={idx}
                  spotlightColor={essay.theme.spotlight}
                  className={cn(
                    "rounded-3xl flex flex-col justify-between bg-background/90 dark:bg-card/90 border border-border/70 transition-all duration-300 hover:-translate-y-2 overflow-hidden shadow-lg group",
                    essay.theme.borderHover
                  )}
                >
                  <div>
                    {/* Visual Header Image Banner */}
                    <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                      <img 
                        src={essay.image} 
                        alt={essay.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-black/40" />
                      
                      <div className="absolute top-3.5 left-3.5">
                        <span className={cn("px-2.5 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider backdrop-blur-md border shadow-sm", essay.theme.badge)}>
                          {essay.category}
                        </span>
                      </div>

                      <div className="absolute top-3.5 right-3.5">
                        <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-black/70 text-slate-200 backdrop-blur-md border border-white/20 shadow-sm flex items-center gap-1.5">
                          <Clock className="w-3 h-3 text-cyan-400" />
                          <span>{essay.readTime}</span>
                        </span>
                      </div>
                    </div>

                    <div className="p-6 sm:p-7">
                      <h3 className={cn("font-grotesk text-xl font-bold text-foreground mb-3 leading-snug transition-colors", essay.theme.accent)}>
                        {essay.title}
                      </h3>

                      <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                        {essay.summary}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 sm:p-7 pt-0">
                    <div className="pt-4 border-t border-border/50">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {essay.highlights.map((h, i) => (
                          <span key={i} className="text-[11px] px-2.5 py-1 rounded-md bg-secondary/80 text-foreground/80 font-medium border border-border/50">
                            {h}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="text-xs text-muted-foreground flex items-center gap-1.5 font-mono">
                          <User className="w-3.5 h-3.5 text-primary" />
                          <span>Anil Sharma</span>
                        </div>
                        <Button 
                          size="sm" 
                          variant="ghost" 
                          onClick={() => setSelectedWhitepaper(essay)}
                          className="text-xs font-semibold text-primary hover:text-primary hover:bg-primary/10 group/btn"
                        >
                          <span>Read Full Whitepaper</span>
                          <ChevronRight className="ml-1 w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                        </Button>
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
              Have a Technical Perspective to Share?
            </h2>
            <p className="mt-3 text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto">
              Engineering discussions, student guidance, and academic peer dialogue are warmly welcomed.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <Button size="lg" className="rounded-xl px-6 font-semibold bg-primary text-primary-foreground shadow-md group">
                  <span>Connect for Technical Dialogue</span>
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline" className="rounded-xl px-6 font-semibold border-border">
                  <span>Read Full Biography</span>
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Complete Technical Whitepaper Reading Dialog Modal */}
      <Dialog open={!!selectedWhitepaper} onOpenChange={(open) => !open && setSelectedWhitepaper(null)}>
        <DialogContent className="max-w-3xl max-h-[85vh] overflow-y-auto p-6 sm:p-8">
          {selectedWhitepaper && (
            <div>
              <DialogHeader className="text-left border-b border-border/60 pb-5">
                <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground mb-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20 font-semibold">
                    {selectedWhitepaper.category}
                  </span>
                  <span>•</span>
                  <span>{selectedWhitepaper.readTime}</span>
                </div>
                <DialogTitle className="font-grotesk text-2xl sm:text-3xl font-black text-foreground leading-snug">
                  {selectedWhitepaper.title}
                </DialogTitle>
                <DialogDescription className="text-xs font-mono text-muted-foreground mt-2">
                  By Anil Sharma • Senior Engineering &amp; Reliability Leader (28+ Years Continuous Process Operations)
                </DialogDescription>
              </DialogHeader>

              {/* Whitepaper Body Content */}
              <div className="space-y-6 pt-6 text-sm text-foreground/90 leading-relaxed font-sans">
                {selectedWhitepaper.fullBody.map((sec, idx) => (
                  <div key={idx} className="space-y-3">
                    <h4 className="font-grotesk font-bold text-lg text-foreground">
                      {sec.sectionTitle}
                    </h4>
                    {sec.paragraphs.map((p, pIdx) => (
                      <p key={pIdx} className="text-muted-foreground leading-relaxed">
                        {p}
                      </p>
                    ))}
                  </div>
                ))}
              </div>

              {/* Bottom Whitepaper Dialog Footer */}
              <div className="mt-8 pt-5 border-t border-border/60 flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground font-mono">
                <span>Non-Commercial Engineering Knowledge Sharing</span>
                <Button 
                  size="sm" 
                  variant="outline" 
                  onClick={() => setSelectedWhitepaper(null)}
                  className="rounded-lg text-xs"
                >
                  Close Whitepaper
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
      <BackToTopButton />
    </div>
  );
};

export default InsightsPage;
