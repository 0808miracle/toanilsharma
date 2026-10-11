import { useState } from 'react';
import { Section, SectionHeader, SectionLabel, SectionTitle, TextGradient } from '@/components/portfolio/Section';
import { SpotlightCard } from '@/components/ui/SpotlightCard';
import { Slider } from '@/components/ui/slider';
import { 
  Quote, 
  ShieldCheck, 
  Zap, 
  Users, 
  AlertTriangle, 
  CheckCircle2, 
  ArrowRight,
  Calculator,
  Activity,
  Flame,
  Gauge
} from 'lucide-react';
import { MathTex } from '@/components/ui/MathTex';

const pillars = [
  {
    icon: Zap,
    title: "Predictive Foresight",
    subtitle: "RCM & FMEA Root Cause Discipline",
    description: "Eliminating the costly trap of reactive 'firefighting'. Every asset failure leaves early vibrational, thermal, and electrical signals that disciplined teams can predict and eliminate weeks in advance.",
    accent: "text-blue-500",
    bg: "from-blue-500/10 to-indigo-500/5",
  },
  {
    icon: ShieldCheck,
    title: "Safety as First Principle",
    subtitle: "Zero Incidents by Design",
    description: "Zero incidents are not an accidental stroke of luck; they are the direct mathematical byproduct of uncompromising asset integrity, certified hazardous area protocols, and thorough MOC governance.",
    accent: "text-emerald-500",
    bg: "from-emerald-500/10 to-teal-500/5",
  },
  {
    icon: Users,
    title: "Human Ownership Culture",
    subtitle: "SHRM Facilitated Capability Building",
    description: "World-class tools fail without team ownership. Training over 200 engineers has proven that when frontline operators truly understand the physics of failure, they treat the asset as their own.",
    accent: "text-indigo-500",
    bg: "from-indigo-500/10 to-purple-500/5",
  },
];

const fmeaPresets = [
  {
    label: "Turbine Bearing Starvation",
    s: 9,
    o: 4,
    d: 3,
    mitigation: "Online dual vibration proximity probes + automated emergency lube pump cut-in"
  },
  {
    label: "HV GIS Substation SF6 Leak",
    s: 10,
    o: 2,
    d: 2,
    mitigation: "Continuous gas density monitoring + dual-stage micro-switch pressure telemetry"
  },
  {
    label: "Unmonitored Cable Arc Runaway",
    s: 10,
    o: 6,
    d: 6,
    mitigation: "Thermal IR acoustic imaging + fiber-optic distributed temperature sensing (DTS)"
  }
];

export const Philosophy = () => {
  // FMEA Interactive RPN Calculator State
  const [severity, setSeverity] = useState<number>(9);
  const [occurrence, setOccurrence] = useState<number>(4);
  const [detection, setDetection] = useState<number>(3);
  const [activePreset, setActivePreset] = useState<number>(0);

  const rpn = severity * occurrence * detection;

  const handleApplyPreset = (preset: typeof fmeaPresets[0], idx: number) => {
    setActivePreset(idx);
    setSeverity(preset.s);
    setOccurrence(preset.o);
    setDetection(preset.d);
  };

  const getRpnStatus = (val: number) => {
    if (val < 100) {
      return {
        label: "Low Risk • Standard Preventive Maintenance",
        color: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
        action: "Controlled via regular ISO/IEEE PM schedules."
      };
    } else if (val < 250) {
      return {
        label: "Medium Risk • Predictive Condition Monitoring Required",
        color: "text-amber-400 border-amber-500/30 bg-amber-500/10",
        action: "Implement vibration FFT analysis, oil spectroscopy, and thermography."
      };
    } else {
      return {
        label: "CRITICAL RISK • Immediate Engineering Redesign",
        color: "text-rose-400 border-rose-500/40 bg-rose-500/15 animate-pulse",
        action: "High severity & poor detection. Requires architectural fail-safe redesign & interlocks."
      };
    }
  };

  const status = getRpnStatus(rpn);

  return (
    <Section id="philosophy" className="relative py-24 overflow-hidden">
      {/* Ambient background lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-blue-600/10 via-primary/5 to-cyan-500/10 blur-[130px] pointer-events-none rounded-full" />

      <SectionHeader>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-mono font-semibold text-primary mb-3">
          <Quote className="w-3.5 h-3.5" />
          <span>EDITORIAL KEYNOTE • LEADERSHIP THESIS</span>
        </div>
        <SectionLabel>Core Philosophy</SectionLabel>
        <SectionTitle>
          The <TextGradient>Zero-Breakdown</TextGradient> Mindset
        </SectionTitle>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground text-sm sm:text-base">
          A fundamental paradigm shift: moving maintenance from a grudging operational expense 
          into a strategic catalyst for enterprise uptime and profitability.
        </p>
      </SectionHeader>

      <div className="max-w-5xl mx-auto space-y-12">
        {/* Keynote Featured Quote Banner */}
        <SpotlightCard className="relative p-8 sm:p-12 md:p-14 rounded-3xl bg-gradient-to-br from-secondary/80 via-background to-secondary/60 dark:from-card/90 dark:via-background/80 dark:to-card/70 border border-border/80 dark:border-white/10 shadow-2xl backdrop-blur-xl">
          <Quote className="absolute top-6 left-6 sm:top-8 sm:left-8 w-16 h-16 sm:w-20 sm:h-20 text-primary/10 -scale-x-100 pointer-events-none" />
          
          <div className="relative z-10">
            <blockquote className="text-xl sm:text-2xl md:text-3xl font-medium font-grotesk leading-relaxed text-foreground tracking-tight">
              “Reliability is not merely about fixing machines quickly; it is about fostering an industrial culture where <span className="text-primary font-bold">every breakdown is recognized as a preventable failure of the system</span>, not an unavoidable destiny of the asset.”
            </blockquote>

            <div className="mt-8 pt-6 border-t border-border/60 dark:border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-primary text-primary-foreground font-bold font-grotesk flex items-center justify-center text-sm shadow-md">
                  AS
                </div>
                <div>
                  <h4 className="font-bold text-sm font-grotesk text-foreground">Anil Sharma</h4>
                  <p className="text-xs text-muted-foreground">The Zero-Breakdown Creed • 28 Years Industrial Leadership</p>
                </div>
              </div>

              <div className="inline-flex items-center text-xs font-mono text-primary font-semibold px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
                <span>RIL &amp; Ambuja Plant Operational Benchmark</span>
              </div>
            </div>
          </div>
        </SpotlightCard>

        {/* Side-by-Side Paradigm Shift: Reactive vs Zero-Breakdown */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Reactive Firefighting Card */}
          <div className="p-6 sm:p-7 rounded-2xl bg-destructive/5 dark:bg-destructive/10 border border-destructive/20 shadow-sm relative overflow-hidden">
            <div className="flex items-center space-x-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-destructive/15 text-destructive flex items-center justify-center shrink-0">
                <AlertTriangle className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-grotesk font-bold text-base text-foreground">Conventional Reactive Mindset</h4>
                <span className="text-[11px] text-destructive font-semibold">The Costly "Firefighting" Trap</span>
              </div>
            </div>

            <ul className="space-y-3 text-xs sm:text-sm text-muted-foreground">
              <li className="flex items-start gap-2.5">
                <span className="text-destructive font-bold text-base leading-none">✕</span>
                <span>Breakdowns viewed as inevitable consequences of machine wear and tear.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-destructive font-bold text-base leading-none">✕</span>
                <span>Teams scramble to fix assets after tripping, resulting in emergency spares surcharges.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-destructive font-bold text-base leading-none">✕</span>
                <span>High safety and environmental hazards during frantic emergency restarts.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-destructive font-bold text-base leading-none">✕</span>
                <span>Inventory bloating: uncataloged critical spares tying up excessive working capital.</span>
              </li>
            </ul>
          </div>

          {/* Anil's Zero-Breakdown Ecosystem Card */}
          <div className="p-6 sm:p-7 rounded-2xl bg-primary/5 dark:bg-primary/10 border border-primary/30 shadow-md relative overflow-hidden">
            <div className="flex items-center space-x-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary/15 text-primary flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-grotesk font-bold text-base text-foreground">Anil's Zero-Breakdown Ecosystem</h4>
                <span className="text-[11px] text-primary font-semibold">Predictive Uptime &amp; Asset Integrity</span>
              </div>
            </div>

            <ul className="space-y-3 text-xs sm:text-sm text-foreground/90">
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-500 font-bold text-base leading-none">✓</span>
                <span>RCM &amp; FMEA framework ensuring 100% of potential failure modes are preempted.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-500 font-bold text-base leading-none">✓</span>
                <span>Automated load-shedding and condition monitoring preventing cascade trips.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-500 font-bold text-base leading-none">✓</span>
                <span>Zero-incident culture: safety audits (DNV IMS) built into daily operational rhythm.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-500 font-bold text-base leading-none">✓</span>
                <span>Substantial spares optimization through rigorous criticality categorization in SAP-PM.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* INTERACTIVE FMEA / RPN MATRIX WIDGET */}
        <SpotlightCard className="p-6 sm:p-8 rounded-3xl bg-secondary/30 dark:bg-card/40 border border-border/80 dark:border-white/10 shadow-xl space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-border/60 dark:border-white/10">
            <div>
              <div className="flex items-center gap-2">
                <Gauge className="w-4 h-4 text-primary" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-primary">
                  Interactive Asset Integrity Lab • AIAG / VDA Standard
                </span>
              </div>
              <h3 className="font-grotesk text-xl font-bold mt-1 text-foreground">
                FMEA Risk Priority Number (RPN) Modeler
              </h3>
            </div>

            {/* Presets */}
            <div className="flex flex-wrap gap-1.5">
              {fmeaPresets.map((p, idx) => (
                <button
                  key={idx}
                  onClick={() => handleApplyPreset(p, idx)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                    activePreset === idx
                      ? 'bg-primary text-primary-foreground shadow-md shadow-primary/20 scale-105'
                      : 'bg-background/80 dark:bg-card/80 border border-border/60 text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {p.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-12 gap-8 items-center">
            {/* Sliders (7 Cols) */}
            <div className="md:col-span-7 space-y-5">
              <div>
                <div className="flex justify-between items-center text-xs font-bold mb-1.5">
                  <span className="text-foreground">Severity (S) — Consequence on Plant</span>
                  <span className="font-mono text-primary font-bold">{severity} / 10</span>
                </div>
                <Slider value={[severity]} min={1} max={10} step={1} onValueChange={(v) => { setSeverity(v[0]); setActivePreset(-1); }} />
                <div className="flex justify-between text-[10px] text-muted-foreground mt-1 font-mono">
                  <span>1 (No Effect)</span>
                  <span>10 (Catastrophic / Safety Hazard)</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center text-xs font-bold mb-1.5">
                  <span className="text-foreground">Occurrence (O) — Likelihood of Failure</span>
                  <span className="font-mono text-amber-500 font-bold">{occurrence} / 10</span>
                </div>
                <Slider value={[occurrence]} min={1} max={10} step={1} onValueChange={(v) => { setOccurrence(v[0]); setActivePreset(-1); }} />
                <div className="flex justify-between text-[10px] text-muted-foreground mt-1 font-mono">
                  <span>1 (Highly Unlikely &lt;0.01/yr)</span>
                  <span>10 (Frequent &gt;1/week)</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center text-xs font-bold mb-1.5">
                  <span className="text-foreground">Detection (D) — Likelihood of Pre-Trip Discovery</span>
                  <span className="font-mono text-cyan-400 font-bold">{detection} / 10</span>
                </div>
                <Slider value={[detection]} min={1} max={10} step={1} onValueChange={(v) => { setDetection(v[0]); setActivePreset(-1); }} />
                <div className="flex justify-between text-[10px] text-muted-foreground mt-1 font-mono">
                  <span>1 (Automated Telemetry Detection)</span>
                  <span>10 (Completely Undetectable)</span>
                </div>
              </div>
            </div>

            {/* Live RPN Gauge Output (5 Cols) */}
            <div className="md:col-span-5 p-6 rounded-2xl bg-background/90 dark:bg-[#0B0F19]/90 border border-border/80 dark:border-white/10 text-center space-y-3">
              <span className="text-[11px] font-mono text-muted-foreground uppercase tracking-widest block font-bold">
                Calculated RPN Score
              </span>
              
              <div className="text-4xl sm:text-5xl font-black font-grotesk tracking-tight text-foreground">
                {rpn} <span className="text-xs font-mono text-muted-foreground font-normal">/ 1000</span>
              </div>

              <div className={`p-2 rounded-xl text-xs font-bold border ${status.color}`}>
                {status.label}
              </div>

              <p className="text-[11px] text-muted-foreground leading-relaxed pt-1">
                {status.action}
              </p>

              <div className="pt-2 border-t border-border/50 text-[10px] font-mono text-primary flex items-center justify-center gap-1">
                <span>RPN = S &times; O &times; D</span>
                <span>&bull;</span>
                <span>SAE JA1011 RCM Compliant</span>
              </div>
            </div>
          </div>
        </SpotlightCard>

        {/* 3 Interactive Leadership Pillars */}
        <div className="grid md:grid-cols-3 gap-6 pt-4">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <SpotlightCard 
                key={index}
                className="p-6 sm:p-7 rounded-2xl flex flex-col justify-between"
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${pillar.bg} border border-border/60 flex items-center justify-center mb-5 ${pillar.accent} group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-grotesk font-bold text-lg text-foreground mb-1">
                    {pillar.title}
                  </h4>
                  <p className="text-xs font-semibold text-primary mb-3 font-mono">
                    {pillar.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </SpotlightCard>
            );
          })}
        </div>
      </div>
    </Section>
  );
};
