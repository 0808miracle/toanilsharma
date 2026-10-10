import { useState } from 'react';
import { Section, SectionHeader, SectionLabel, SectionTitle, TextGradient } from '@/components/portfolio/Section';
import { Quote, ShieldCheck, Zap, Users, AlertTriangle, CheckCircle2, ArrowRight } from 'lucide-react';

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

export const Philosophy = () => {
  const [activeComparison, setActiveComparison] = useState<'both' | 'reactive' | 'zerobreakdown'>('both');

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
        <div className="relative p-8 sm:p-12 md:p-14 rounded-3xl bg-gradient-to-br from-secondary/80 via-background to-secondary/60 dark:from-card/90 dark:via-background/80 dark:to-card/70 border border-border/80 dark:border-white/10 shadow-2xl backdrop-blur-xl">
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
        </div>

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
                <span>Inventory hoarding: uncataloged critical spares tying up tens of crores in working capital.</span>
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
                <span>₹8 Crore spares reduction through rigorous criticality categorization in SAP-PM.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* 3 Interactive Leadership Pillars */}
        <div className="grid md:grid-cols-3 gap-6 pt-4">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div 
                key={index}
                className="group relative p-6 sm:p-7 rounded-2xl bg-background/80 dark:bg-card/80 border border-border/70 dark:border-white/10 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl backdrop-blur-sm flex flex-col justify-between"
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
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};
