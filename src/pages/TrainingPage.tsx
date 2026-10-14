import { Header } from '@/components/portfolio/Header';
import { Footer } from '@/components/portfolio/Footer';
import { BackToTopButton } from '@/components/portfolio/BackToTopButton';
import { SpotlightCard } from '@/components/ui/SpotlightCard';
import { 
  GraduationCap, 
  Award, 
  Users, 
  BookOpen, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Heart,
  Presentation,
  Flame,
  Zap,
  BatteryCharging,
  Battery,
  Lock,
  RotateCcw,
  Target,
  Clock,
  Workflow,
  Cpu,
  TrendingDown,
  Gauge,
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

// The verified suite of specialized industrial training sessions conducted by Anil Sharma
const deliveredTrainings = [
  {
    icon: Flame,
    title: "Electrical Safety & Arc Flash Risk (NFPA 70E / IEEE 1584)",
    code: "TRAIN-SAF-01",
    hours: "280+ Hours Conducted",
    category: "Life-Critical Safety",
    image: "/images/electrical-safety.jpg",
    theme: "amber" as const,
    summary: "Comprehensive electrical safety governance, incident energy calculations (cal/cm²), arc flash boundary marking, PPE selection, energized electrical work permits, and zero-harm culture.",
    keyTakeaways: [
      "Incident energy calculations per IEEE 1584 mathematical models",
      "Shock & Arc flash protection boundary determinations",
      "Hazardous area classification & ATEX / IEC 60079 compliance",
      "Personal Protective Equipment (PPE) category selection"
    ]
  },
  {
    icon: Zap,
    title: "UPS & Industrial Inverter Topologies",
    code: "TRAIN-PWR-02",
    hours: "220+ Hours Conducted",
    category: "Power Electronics",
    image: "/images/ups-batteries.jpg",
    theme: "cyan" as const,
    summary: "Deep-dive operational and troubleshooting training on online double-conversion UPS, static bypass mechanisms, parallel redundancy (N+1 and 2N), and harmonic distortion suppression.",
    keyTakeaways: [
      "SPWM inverter switching dynamics and IGBT thermal networks",
      "Static transfer switch (STS) millisecond commutation logic",
      "DC bus ripple voltage and DC capacitor health assessment",
      "SafeOps operational protocols for continuous manufacturing uptime"
    ]
  },
  {
    icon: BatteryCharging,
    title: "Industrial Battery Chargers & Rectifiers",
    code: "TRAIN-PWR-03",
    hours: "180+ Hours Conducted",
    category: "Substation DC Systems",
    image: "/images/ups-batteries.jpg",
    theme: "cyan" as const,
    summary: "Engineering training covering controlled SCR/Thyristor rectifiers, float/boost charging regimens, auto-changeover switchgear, and DC earth fault tracing in mission-critical substations.",
    keyTakeaways: [
      "SCR firing angle control & automatic voltage regulation (AVR)",
      "Float, equalize, and boost charge curve parameters",
      "DC ground fault detection and line insulation monitoring",
      "Ripple voltage filtration and AC mains failure immunity"
    ]
  },
  {
    icon: Battery,
    title: "Substation Batteries (VRLA, Flooded Lead-Acid & Ni-Cd)",
    code: "TRAIN-BAT-04",
    hours: "190+ Hours Conducted",
    category: "Energy Storage",
    image: "/images/ups-batteries.jpg",
    theme: "cyan" as const,
    summary: "Practical battery chemistry, discharge C-rate physics, internal conductance/impedance testing, thermal runaway prevention, and IEEE 450/1188 capacity discharge test standards.",
    keyTakeaways: [
      "Battery life cycle modeling & temperature de-rating curves",
      "Internal resistance and inter-cell connection resistance testing",
      "Electrolyte specific gravity and thermal runaway containment",
      "Discharge load bank profiling per IEEE 450 guidelines"
    ]
  },
  {
    icon: Lock,
    title: "Lockout / Tagout (LOTO) & Zero-Energy State",
    code: "TRAIN-SAF-05",
    hours: "240+ Hours Conducted",
    category: "Operational Safety",
    image: "/images/electrical-safety.jpg",
    theme: "amber" as const,
    summary: "Practical isolation integrity protocols: mechanical, high-voltage electrical, hydraulic, and pneumatic isolation, group lockout verification, and zero-accident isolation audits.",
    keyTakeaways: [
      "Zero-energy state verification procedures and live testing",
      "Complex multi-source group lockout and key box management",
      "Try-step verification prior to hazardous equipment entry",
      "Integration with corporate electronic Permit-to-Work (e-PTW)"
    ]
  },
  {
    icon: RotateCcw,
    title: "Reliability-Centered Maintenance (SAE JA1011 RCM)",
    code: "TRAIN-REL-06",
    hours: "310+ Hours Conducted",
    category: "Asset Integrity",
    image: "/images/petrochemical-complex.jpg",
    theme: "emerald" as const,
    summary: "Systematic failure mode categorization, FMEA risk priority number scoring, and maintenance task selection that transforms reactive plant teams into predictive reliability leaders.",
    keyTakeaways: [
      "The Seven RCM Questions applied to world-scale plant machinery",
      "Failure Mode and Effects Analysis (FMEA) criticality scoring",
      "Condition-based vs. time-directed maintenance strategy selection",
      "Translating RCM failure logic into CMMS / SAP-PM maintenance plans"
    ]
  },
  {
    icon: Target,
    title: "Learning From Incidents (LFI) & Systematic Prevention",
    code: "TRAIN-LFI-07",
    hours: "160+ Hours Conducted",
    category: "Operational Governance",
    image: "/images/electrical-safety.jpg",
    theme: "amber" as const,
    summary: "Structured methodologies for disseminating operational lessons, analyzing human factors, eliminating repeat trips, and institutionalizing systemic knowledge across cross-functional plant units.",
    keyTakeaways: [
      "Cross-site incident alert drafting and communication workflows",
      "Identifying systemic organizational & management of change (MOC) gaps",
      "Barrier analysis and Swiss Cheese model incident mapping",
      "Tracking corrective action effectiveness and repeat incident metrics"
    ]
  },
  {
    icon: Workflow,
    title: "Root Cause Analysis (RCA & 5-Whys Methodology)",
    code: "TRAIN-RCA-08",
    hours: "260+ Hours Conducted",
    category: "Problem Solving",
    image: "/images/petrochemical-complex.jpg",
    theme: "emerald" as const,
    summary: "Rigorous forensic investigation workflows utilizing 5-Whys, Ishikawa (Fishbone) diagrams, and Fault Tree Analysis (FTA) to discover and permanently eradicate chronic root causes.",
    keyTakeaways: [
      "Distinguishing physical, human, and organizational root causes",
      "Fault Tree Analysis (FTA) for complex high-voltage trip events",
      "Forensic physical evidence preservation and non-destructive testing",
      "Corrective and Preventive Action (CAPA) verification audits"
    ]
  },
  {
    icon: Award,
    title: "Capital Project Engineering & Greenfield Execution",
    code: "TRAIN-PRJ-09",
    hours: "210+ Hours Conducted",
    category: "Project Management",
    image: "/images/petrochemical-complex.jpg",
    theme: "emerald" as const,
    summary: "End-to-end capital project governance: greenfield engineering commissioning, vendor quality inspections, multi-discipline coordination, and pre-commissioning stage gates.",
    keyTakeaways: [
      "Stage-gate governance from EPC design through plant start-up",
      "Multi-disciplinary engineering coordination (Civil, Mech, E&I)",
      "Factory Acceptance Testing (FAT) & Site Acceptance Testing (SAT)",
      "Cold & hot commissioning stabilization checklists"
    ]
  },
  {
    icon: Clock,
    title: "Equipment Life Cycle Management & Total Cost (TCO)",
    code: "TRAIN-LCC-10",
    hours: "150+ Hours Conducted",
    category: "Asset Optimization",
    image: "/images/petrochemical-complex.jpg",
    theme: "emerald" as const,
    summary: "Aligning maintenance with ISO 55000 asset management standards: calculating life cycle cost (LCC), economic life modeling, CapEx vs. OpEx evaluations, and residual life assessment.",
    keyTakeaways: [
      "Total Lifecycle Cost formulation LCC = CapEx + sum(OpEx) + Risk",
      "Economic replacement timing based on degradation rate curves",
      "Condition assessment criteria and non-destructive life extension",
      "ISO 55000 asset management governance frameworks"
    ]
  },
  {
    icon: TrendingDown,
    title: "Industrial Obsolescence Management & Modernization",
    code: "TRAIN-OBS-11",
    hours: "140+ Hours Conducted",
    category: "Modernization",
    image: "/images/petrochemical-complex.jpg",
    theme: "emerald" as const,
    summary: "Proactive risk mitigation for sunsetting legacy DCS, PLC, numerical relays, and power electronics. Strategies for backward-compatible retrofits and long-term spares assurance.",
    keyTakeaways: [
      "Equipment obsolescence criticality tiering matrices",
      "Form-fit-function replacement and legacy communication gateways",
      "Component level refurbishing and certified third-party testing",
      "Long-term strategic roadmap planning for brownfield plants"
    ]
  },
  {
    icon: Cpu,
    title: "Smart Manufacturing, Industrial IoT & Digital Twins",
    code: "TRAIN-SM-12",
    hours: "130+ Hours Conducted",
    category: "Industry 4.0",
    image: "/images/livesimulators-preview.jpg",
    theme: "blue" as const,
    summary: "Practical Industry 4.0 applications in continuous process facilities: edge telemetry collection, wireless vibration monitoring, predictive health dashboards, and physics-based digital twins.",
    keyTakeaways: [
      "Sensors and wireless industrial protocols (WirelessHART, MQTT)",
      "Edge computing vs. cloud telemetry architectures",
      "Predictive anomaly detection on critical rotating machinery",
      "Browser-based digital physics twins for engineer upskilling"
    ]
  },
  {
    icon: Gauge,
    title: "Industrial Automation, SCADA & PLC Architectures",
    code: "TRAIN-AUT-13",
    hours: "220+ Hours Conducted",
    category: "Automation",
    image: "/images/substation-automation.jpg",
    theme: "blue" as const,
    summary: "Engineering resilient industrial control systems: PLC automated high-speed load shedding schemes, SCADA human-machine interfaces, and DCS network reliability.",
    keyTakeaways: [
      "Substation automated load shedding algorithms in <100ms",
      "IEC 61850 substation communication & GOOSE messaging",
      "Redundant PLC/DCS architectures and dual-ring optical fiber networks",
      "Fail-safe emergency shutdown (ESD) interlocking logic"
    ]
  },
  {
    icon: ShieldCheck,
    title: "Energy Management Systems (EMS & ISO 50001)",
    code: "TRAIN-EMS-14",
    hours: "170+ Hours Conducted",
    category: "Energy Optimization",
    image: "/images/substation-automation.jpg",
    theme: "blue" as const,
    summary: "Plant-wide energy conservation audits, power factor correction, harmonic mitigation per IEEE 519, VFD efficiency optimization, and ISO 50001 energy baseline governance.",
    keyTakeaways: [
      "Automated capacitor bank and active harmonic filter tuning",
      "Transformer no-load and load loss optimization",
      "Variable frequency drive (VFD) application on pumps and fans",
      "ISO 50001 energy performance indicators (EnPIs) and carbon reduction"
    ]
  }
];

export const TrainingPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-primary transition-colors duration-300">
      <Header />
      
      <main className="pt-24 sm:pt-28">
        {/* Breadcrumb Navigation Bar */}
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center space-x-2 text-xs text-muted-foreground font-mono">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-foreground font-semibold">Technical Training &amp; Mentorship</span>
          </nav>
        </div>

        {/* Page Hero Header */}
        <section className="relative py-12 sm:py-16 bg-secondary/30 dark:bg-card/30 border-b border-border/60 dark:border-white/10 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(rgba(59,130,246,0.08)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
          
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-700 dark:text-cyan-400 mb-4">
                <GraduationCap className="w-3.5 h-3.5" />
                <span>TECHNICAL CAPABILITY BUILDING • VERIFIED RECORD</span>
              </div>
              
              <h1 className="font-grotesk text-3xl sm:text-5xl font-black tracking-tight text-foreground leading-tight">
                Workforce Capability Building &amp; Training Track Record
              </h1>
              
              <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
                Over his 28+ years of industrial leadership, Anil Sharma has served as a Master Technical Facilitator and SHRM Certified Facilitator, conducting specialized engineering programs across continuous-process plant disciplines.
              </p>

              {/* Strict Non-Commercial Historical Record Notice */}
              <div className="mt-6 inline-flex items-center gap-2.5 p-3 rounded-xl bg-background/80 dark:bg-card/80 border border-border/80 text-xs text-muted-foreground">
                <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>
                  <strong>Historical Corporate Facilitation Record:</strong> The modules presented below reflect internal corporate and professional engineering programs delivered to upskill industrial engineers. Anil Sharma does not offer commercial or paid training services.
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Proven Facilitation Metrics (200+ Engineers, 2500+ Hours, Awards) */}
        <section className="py-12 bg-background border-b border-border/60 dark:border-white/10">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              
              {/* Metric 1 */}
              <div className="p-6 rounded-2xl bg-secondary/40 dark:bg-card/40 border border-border/70 text-center hover:border-primary/50 transition-colors">
                <Users className="w-7 h-7 text-primary mx-auto mb-2" />
                <span className="block text-3xl sm:text-4xl font-black font-grotesk text-foreground">200+</span>
                <span className="text-xs text-muted-foreground font-semibold block mt-1">Engineers Upskilled</span>
                <span className="text-[11px] text-muted-foreground/80 block mt-0.5">Fresh Graduates &amp; Senior Professionals</span>
              </div>

              {/* Metric 2 */}
              <div className="p-6 rounded-2xl bg-secondary/40 dark:bg-card/40 border border-border/70 text-center hover:border-cyan-500/50 transition-colors">
                <Clock className="w-7 h-7 text-cyan-500 mx-auto mb-2" />
                <span className="block text-3xl sm:text-4xl font-black font-grotesk text-foreground">2,500+</span>
                <span className="text-xs text-muted-foreground font-semibold block mt-1">Training Hours Conducted</span>
                <span className="text-[11px] text-muted-foreground/80 block mt-0.5">Both Online &amp; In-Plant Offline Modes</span>
              </div>

              {/* Metric 3 */}
              <div className="p-6 rounded-2xl bg-secondary/40 dark:bg-card/40 border border-border/70 text-center hover:border-amber-500/50 transition-colors">
                <Award className="w-7 h-7 text-amber-500 mx-auto mb-2" />
                <span className="block text-3xl sm:text-4xl font-black font-grotesk text-foreground">Top Trainer</span>
                <span className="text-xs text-muted-foreground font-semibold block mt-1">Facilitator Accolades</span>
                <span className="text-[11px] text-muted-foreground/80 block mt-0.5">Multiple Best Trainer &amp; Safety Awards</span>
              </div>

              {/* Metric 4 */}
              <div className="p-6 rounded-2xl bg-secondary/40 dark:bg-card/40 border border-border/70 text-center hover:border-emerald-500/50 transition-colors">
                <ShieldCheck className="w-7 h-7 text-emerald-500 mx-auto mb-2" />
                <span className="block text-3xl sm:text-4xl font-black font-grotesk text-foreground">SHRM</span>
                <span className="text-xs text-muted-foreground font-semibold block mt-1">Certified Facilitator</span>
                <span className="text-[11px] text-muted-foreground/80 block mt-0.5">&amp; DNV GL Certified IMS Lead Auditor</span>
              </div>

            </div>
          </div>
        </section>

        {/* The 14 Delivered Training Programs Showcase */}
        <section className="py-16 sm:py-20 bg-secondary/20 dark:bg-card/20">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-bold uppercase tracking-widest text-primary font-grotesk">
                Specialized Technical Portfolio
              </span>
              <h2 className="font-grotesk text-3xl sm:text-4xl font-black text-foreground mt-2">
                Delivered Engineering Training Programs
              </h2>
              <p className="mt-3 text-muted-foreground text-sm sm:text-base leading-relaxed">
                Detailed curriculum modules conducted across petrochemical complexes, manufacturing plants, and technical capability academies.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
              {deliveredTrainings.map((item, idx) => {
                const Icon = item.icon;
                const themeStyles = {
                  amber: {
                    spotlight: "rgba(245, 158, 11, 0.25)",
                    badge: "bg-amber-500/20 text-amber-300 border-amber-400/40",
                    borderHover: "hover:border-amber-500/60",
                    check: "text-amber-500",
                    accent: "group-hover:text-amber-400"
                  },
                  cyan: {
                    spotlight: "rgba(6, 182, 212, 0.25)",
                    badge: "bg-cyan-500/20 text-cyan-300 border-cyan-400/40",
                    borderHover: "hover:border-cyan-500/60",
                    check: "text-cyan-400",
                    accent: "group-hover:text-cyan-400"
                  },
                  emerald: {
                    spotlight: "rgba(16, 185, 129, 0.25)",
                    badge: "bg-emerald-500/20 text-emerald-300 border-emerald-400/40",
                    borderHover: "hover:border-emerald-500/60",
                    check: "text-emerald-400",
                    accent: "group-hover:text-emerald-400"
                  },
                  blue: {
                    spotlight: "rgba(59, 130, 246, 0.25)",
                    badge: "bg-blue-500/20 text-blue-300 border-blue-400/40",
                    borderHover: "hover:border-blue-500/60",
                    check: "text-blue-400",
                    accent: "group-hover:text-blue-400"
                  }
                }[item.theme];

                return (
                  <SpotlightCard
                    key={idx}
                    spotlightColor={themeStyles.spotlight}
                    className={cn(
                      "rounded-3xl flex flex-col justify-between bg-background/90 dark:bg-card/90 border border-border/70 transition-all duration-300 hover:-translate-y-1.5 overflow-hidden shadow-md group",
                      themeStyles.borderHover
                    )}
                  >
                    <div>
                      {/* Visual Image Header */}
                      <div className="relative h-44 w-full overflow-hidden bg-slate-900">
                        <img 
                          src={item.image} 
                          alt={item.title} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-black/40" />
                        <div className="absolute top-3 left-3 flex items-center gap-2">
                          <span className={cn("px-2.5 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider backdrop-blur-md border flex items-center gap-1.5 shadow-sm", themeStyles.badge)}>
                            <Icon className="w-3 h-3" />
                            <span>{item.category}</span>
                          </span>
                        </div>
                        <div className="absolute top-3 right-3">
                          <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-black/70 text-emerald-300 backdrop-blur-md border border-emerald-500/30 shadow-sm">
                            {item.hours}
                          </span>
                        </div>
                      </div>

                      <div className="p-6 sm:p-7">
                        <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-muted-foreground mb-1">
                          {item.code}
                        </div>
                        <h3 className={cn("font-grotesk text-xl font-bold text-foreground mb-3 leading-snug transition-colors", themeStyles.accent)}>
                          {item.title}
                        </h3>

                        <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-6">
                          {item.summary}
                        </p>

                        <div className="pt-4 border-t border-border/50">
                          <h4 className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-3 font-mono">
                            Key Competencies Developed:
                          </h4>
                          <ul className="space-y-2 text-xs sm:text-sm">
                            {item.keyTakeaways.map((takeaway, i) => (
                              <li key={i} className="flex items-start text-foreground/90 font-medium">
                                <CheckCircle2 className={cn("w-3.5 h-3.5 mr-2 shrink-0 mt-0.5", themeStyles.check)} />
                                <span>{takeaway}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </SpotlightCard>
                );
              })}
            </div>
          </div>
        </section>

        {/* Educational Cross-Link Hub */}
        <section className="py-16 bg-background border-t border-border/60 dark:border-white/10">
          <div className="container mx-auto max-w-5xl px-4 text-center">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-6 h-6" />
            </div>
            <h2 className="font-grotesk text-2xl sm:text-3xl font-bold text-foreground">
              Explore the Underlying Engineering Methodologies
            </h2>
            <p className="mt-3 text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto">
              These training principles are directly integrated into our open-access engineering simulators and standardized design calculation suites.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link to="/services">
                <Button size="lg" className="rounded-xl px-6 font-semibold bg-primary text-primary-foreground shadow-md group">
                  <span>Explore Engineering Services</span>
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/simulators">
                <Button size="lg" variant="outline" className="rounded-xl px-6 font-semibold border-border">
                  <span>Practice with 65+ Simulators</span>
                </Button>
              </Link>
              <Link to="/insights">
                <Button size="lg" variant="outline" className="rounded-xl px-6 font-semibold border-border">
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

export default TrainingPage;
