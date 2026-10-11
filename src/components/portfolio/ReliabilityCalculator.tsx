import { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { SpotlightCard } from '@/components/ui/SpotlightCard';
import { Section, SectionHeader, SectionLabel, SectionTitle, TextGradient } from '@/components/portfolio/Section';
import { 
  Calculator, 
  TrendingUp, 
  TrendingDown, 
  ShieldAlert, 
  Clock, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Factory, 
  Layers,
  Percent,
  Sigma,
  Activity,
  Gauge
} from 'lucide-react';
import { MathTex } from '@/components/ui/MathTex';

interface IndustryPreset {
  id: string;
  name: string;
  icon: string;
  operatingHours: number;
  hourlyCost: number; // in INR
  unplannedTrips: number;
  sparesValueCr: number; // in Crores
}

const presets: IndustryPreset[] = [
  {
    id: 'petrochem',
    name: 'Petrochemical / Refinery',
    icon: '🏭',
    operatingHours: 8400,
    hourlyCost: 250000,
    unplannedTrips: 16,
    sparesValueCr: 22,
  },
  {
    id: 'cement',
    name: 'Continuous Cement Plant',
    icon: '🏗️',
    operatingHours: 7800,
    hourlyCost: 120000,
    unplannedTrips: 22,
    sparesValueCr: 14,
  },
  {
    id: 'power',
    name: 'Power Generation & Grid',
    icon: '⚡',
    operatingHours: 8600,
    hourlyCost: 350000,
    unplannedTrips: 10,
    sparesValueCr: 28,
  },
  {
    id: 'manufacturing',
    name: 'Heavy Industrial / Metals',
    icon: '⚙️',
    operatingHours: 7200,
    hourlyCost: 90000,
    unplannedTrips: 26,
    sparesValueCr: 10,
  },
];

export const ReliabilityCalculator = () => {
  const [selectedPreset, setSelectedPreset] = useState<string>('petrochem');
  const [operatingHours, setOperatingHours] = useState<number>(8400);
  const [hourlyCost, setHourlyCost] = useState<number>(250000);
  const [unplannedTrips, setUnplannedTrips] = useState<number>(16);
  const [sparesValueCr, setSparesValueCr] = useState<number>(22);

  const applyPreset = (preset: IndustryPreset) => {
    setSelectedPreset(preset.id);
    setOperatingHours(preset.operatingHours);
    setHourlyCost(preset.hourlyCost);
    setUnplannedTrips(preset.unplannedTrips);
    setSparesValueCr(preset.sparesValueCr);
  };

  // Calculations based on Anil Sharma's RCM / FMEA / Spares Criticality benchmarks
  const results = useMemo(() => {
    const avgHoursPerTrip = 6.5;
    const currentDowntimeHours = unplannedTrips * avgHoursPerTrip;
    const currentAnnualDowntimeLossINR = currentDowntimeHours * hourlyCost;
    
    // Projected improvements
    const tripReductionPercent = 38;
    const tripsAvoided = Math.round(unplannedTrips * (tripReductionPercent / 100));
    const optimizedTrips = Math.max(1, unplannedTrips - tripsAvoided);
    const hoursSaved = tripsAvoided * avgHoursPerTrip;
    const annualDowntimeSavingsINR = hoursSaved * hourlyCost;
    const downtimeSavingsCr = annualDowntimeSavingsINR / 10000000;

    // Spares optimization savings
    const sparesOptimizationRate = 0.18; // 18%
    const sparesCapitalReleasedCr = sparesValueCr * sparesOptimizationRate;

    // Total Economic Value Added (EVA)
    const totalAnnualBenefitCr = downtimeSavingsCr + (sparesCapitalReleasedCr * 0.22); // carrying cost of capital (22%)

    // Plant Availability % boost
    const baseAvailability = ((operatingHours - currentDowntimeHours) / operatingHours) * 100;
    const optimizedAvailability = Math.min(99.8, ((operatingHours - (currentDowntimeHours - hoursSaved)) / operatingHours) * 100);
    const availabilityGain = optimizedAvailability - baseAvailability;

    // MTBF (Mean Time Between Failures in operating hours)
    const currentMTBF = Math.round(operatingHours / Math.max(1, unplannedTrips));
    const optimizedMTBF = Math.round(operatingHours / Math.max(1, optimizedTrips));

    // Failure rate per 1,000 operating hours
    const lambdaBase = ((unplannedTrips / operatingHours) * 1000).toFixed(2);
    const lambdaOpt = ((optimizedTrips / operatingHours) * 1000).toFixed(2);

    return {
      tripsAvoided,
      hoursSaved,
      currentMTBF,
      optimizedMTBF,
      lambdaBase,
      lambdaOpt,
      downtimeSavingsCr: downtimeSavingsCr.toFixed(2),
      sparesCapitalReleasedCr: sparesCapitalReleasedCr.toFixed(2),
      totalAnnualBenefitCr: totalAnnualBenefitCr.toFixed(2),
      baseAvailability: baseAvailability.toFixed(2),
      optimizedAvailability: optimizedAvailability.toFixed(2),
      availabilityGain: availabilityGain.toFixed(2),
    };
  }, [operatingHours, hourlyCost, unplannedTrips, sparesValueCr]);

  const formatINR = (val: number) => {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(val);
  };

  return (
    <Section id="calculator" className="relative py-20 bg-secondary/30 dark:bg-card/30 border-y border-border/70 dark:border-white/10 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10">
        <SectionHeader>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-mono font-semibold text-primary mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>INTERACTIVE ROI SIMULATOR • PROVEN RIL BENCHMARKS</span>
          </div>
          <SectionLabel>Plant Performance Modeler</SectionLabel>
          <SectionTitle>
            Estimate Your Facility's <TextGradient>Downtime &amp; Spares Savings</TextGradient>
          </SectionTitle>
          <p className="mt-3 max-w-2xl mx-auto text-muted-foreground text-sm sm:text-base">
            Model the economic impact of moving from reactive firefighting to Anil Sharma's 
            Zero-Breakdown RCM &amp; Criticality Framework.
          </p>
        </SectionHeader>

        {/* Industry Presets */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10 max-w-4xl mx-auto">
          {presets.map((preset) => (
            <button
              key={preset.id}
              onClick={() => applyPreset(preset)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center space-x-2 ${
                selectedPreset === preset.id
                  ? 'bg-primary text-primary-foreground shadow-md shadow-primary/20 scale-[1.02]'
                  : 'bg-background/80 dark:bg-card/80 border border-border/70 text-muted-foreground hover:text-foreground'
              }`}
            >
              <span>{preset.icon}</span>
              <span>{preset.name}</span>
            </button>
          ))}
        </div>

        {/* Main Interactive Grid */}
        <div className="grid lg:grid-cols-12 gap-8 max-w-6xl mx-auto items-start">
          
          {/* Sliders Input Panel (7 Cols) */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-background/90 dark:bg-card/90 border border-border/80 dark:border-white/10 shadow-xl backdrop-blur-md space-y-7">
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-bold text-foreground font-grotesk flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" />
                  Annual Plant Operating Hours
                </label>
                <span className="font-mono text-sm font-bold text-primary">
                  {operatingHours.toLocaleString()} hrs/year
                </span>
              </div>
              <Slider
                value={[operatingHours]}
                min={4000}
                max={8760}
                step={100}
                onValueChange={(val) => setOperatingHours(val[0])}
                className="py-1"
              />
              <div className="flex justify-between text-[11px] text-muted-foreground mt-1 font-mono">
                <span>4,000 hrs</span>
                <span>8,760 hrs (Continuous 24/7)</span>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-bold text-foreground font-grotesk flex items-center gap-2">
                  <ShieldAlert className="w-4 h-4 text-amber-500" />
                  Estimated Unplanned Downtime Cost / Hour
                </label>
                <span className="font-mono text-sm font-bold text-amber-500">
                  {formatINR(hourlyCost)} / hr
                </span>
              </div>
              <Slider
                value={[hourlyCost]}
                min={25000}
                max={1000000}
                step={25000}
                onValueChange={(val) => setHourlyCost(val[0])}
                className="py-1"
              />
              <div className="flex justify-between text-[11px] text-muted-foreground mt-1 font-mono">
                <span>₹25,000/hr</span>
                <span>₹10,00,000/hr (Mega-Complex)</span>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-bold text-foreground font-grotesk flex items-center gap-2">
                  <TrendingDown className="w-4 h-4 text-destructive" />
                  Current Unplanned Trips &amp; Breakdowns / Year
                </label>
                <span className="font-mono text-sm font-bold text-destructive">
                  {unplannedTrips} trips/year
                </span>
              </div>
              <Slider
                value={[unplannedTrips]}
                min={2}
                max={60}
                step={1}
                onValueChange={(val) => setUnplannedTrips(val[0])}
                className="py-1"
              />
              <div className="flex justify-between text-[11px] text-muted-foreground mt-1 font-mono">
                <span>2 trips</span>
                <span>60 trips/year</span>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-bold text-foreground font-grotesk flex items-center gap-2">
                  <Layers className="w-4 h-4 text-blue-500" />
                  Critical Spares Inventory Carrying Value
                </label>
                <span className="font-mono text-sm font-bold text-blue-500">
                  ₹{sparesValueCr} Crore
                </span>
              </div>
              <Slider
                value={[sparesValueCr]}
                min={2}
                max={60}
                step={1}
                onValueChange={(val) => setSparesValueCr(val[0])}
                className="py-1"
              />
              <div className="flex justify-between text-[11px] text-muted-foreground mt-1 font-mono">
                <span>₹2 Cr</span>
                <span>₹60 Cr</span>
              </div>
            </div>

            {/* DYNAMIC BATHTUB & RELIABILITY CURVE VISUALIZER */}
            <div className="p-4 sm:p-5 rounded-2xl bg-secondary/50 dark:bg-[#0B0F19]/90 border border-border/80 dark:border-white/10 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-bold font-grotesk text-foreground">
                  <Activity className="w-4 h-4 text-cyan-400" />
                  <span>Dynamic Reliability Curve: Bathtub Model &amp; MTBF</span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-500 border border-cyan-500/20 font-semibold">
                  Weibull &beta; &amp; &lambda;(t)
                </span>
              </div>

              {/* Dynamic SVG Bathtub Curve */}
              <div className="relative w-full h-32 bg-background/80 dark:bg-card/50 rounded-xl border border-border/50 p-2 overflow-hidden flex flex-col justify-end">
                <svg className="w-full h-full overflow-visible" viewBox="0 0 320 90">
                  <defs>
                    <linearGradient id="optGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>

                  {/* Grid lines */}
                  <line x1="10" y1="20" x2="310" y2="20" stroke="currentColor" strokeOpacity="0.08" strokeDasharray="3,3" />
                  <line x1="10" y1="50" x2="310" y2="50" stroke="currentColor" strokeOpacity="0.08" strokeDasharray="3,3" />
                  <line x1="10" y1="80" x2="310" y2="80" stroke="currentColor" strokeOpacity="0.15" />

                  {/* Reactive Unoptimized Baseline Curve (Red dashed) */}
                  {/* Infant mortality -> Flat baseline -> Wearout */}
                  <path
                    d={`M 15 25 Q 45 ${50 + unplannedTrips * 0.25} 100 ${52 + unplannedTrips * 0.25} L 210 ${52 + unplannedTrips * 0.25} Q 260 ${45 - unplannedTrips * 0.3} 305 18`}
                    fill="none"
                    stroke="#f43f5e"
                    strokeWidth="2"
                    strokeDasharray="4,4"
                    opacity="0.8"
                  />

                  {/* Optimized RCM Curve (Cyan solid, lower failure floor, extended wearout) */}
                  <path
                    d={`M 15 35 Q 55 68 110 70 L 240 70 Q 280 60 305 28`}
                    fill="none"
                    stroke="#06b6d4"
                    strokeWidth="2.5"
                  />

                  {/* Shaded Area under Optimized Curve */}
                  <path
                    d={`M 15 35 Q 55 68 110 70 L 240 70 Q 280 60 305 28 L 305 80 L 15 80 Z`}
                    fill="url(#optGrad)"
                  />

                  {/* Marker Points */}
                  <circle cx="160" cy={`${52 + unplannedTrips * 0.25}`} r="4" fill="#f43f5e" />
                  <circle cx="160" cy="70" r="4" fill="#06b6d4" />
                </svg>

                {/* Graph Labels */}
                <div className="flex justify-between text-[9px] font-mono text-muted-foreground pt-1">
                  <span>Infant Mortality</span>
                  <span className="text-cyan-400 font-semibold">Useful Life Floor (&lambda;)</span>
                  <span>Wear-Out Zone</span>
                </div>
              </div>

              {/* Instantaneous Metrics Readout */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 text-center font-mono text-[11px]">
                <div className="p-2 rounded-xl bg-background/80 dark:bg-card/60 border border-border/50">
                  <span className="text-muted-foreground block text-[10px]">Base MTBF</span>
                  <span className="font-bold text-foreground">{results.currentMTBF} hrs</span>
                </div>
                <div className="p-2 rounded-xl bg-background/80 dark:bg-card/60 border border-cyan-500/30">
                  <span className="text-cyan-400 block text-[10px]">Target MTBF</span>
                  <span className="font-bold text-cyan-400">{results.optimizedMTBF} hrs</span>
                </div>
                <div className="p-2 rounded-xl bg-background/80 dark:bg-card/60 border border-border/50">
                  <span className="text-muted-foreground block text-[10px]">&lambda; (Base)</span>
                  <span className="font-bold text-rose-400">{results.lambdaBase}/1k hrs</span>
                </div>
                <div className="p-2 rounded-xl bg-background/80 dark:bg-card/60 border border-emerald-500/30">
                  <span className="text-emerald-400 block text-[10px]">&lambda; (Optimized)</span>
                  <span className="font-bold text-emerald-400">{results.lambdaOpt}/1k hrs</span>
                </div>
              </div>
            </div>

            {/* Governing Formulation */}
            <div className="p-3.5 rounded-2xl bg-secondary/50 dark:bg-card/50 border border-border/60 text-xs text-muted-foreground leading-relaxed space-y-2">
              <div className="flex items-center justify-between text-[11px] font-mono text-muted-foreground">
                <span className="font-semibold text-foreground flex items-center gap-1.5">
                  <Sigma className="w-3.5 h-3.5 text-primary" />
                  Governing Reliability Formulation
                </span>
                <span className="text-[10px] text-primary">IEEE 3006 / ISO 14224</span>
              </div>
              <div className="py-1 px-2 rounded-xl bg-background/80 dark:bg-card/80 border border-border/40 text-center overflow-x-auto text-primary">
                <MathTex math="A = \frac{\text{MTBF}}{\text{MTBF} + \text{MTTR}} \quad \Big| \quad R(t) = \exp\left(-\frac{t}{\text{MTBF}}\right)" block={true} className="text-xs sm:text-sm" />
              </div>
              <p className="text-[11px] text-muted-foreground pt-1">
                Field-validated across 15+ world-scale continuous petrochemical plants at Reliance Bharuch Complex.
              </p>
            </div>
          </div>

          {/* Real-time Economic Results Dashboard (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Main Primary Savings Highlight Card */}
            <div className="relative p-6 sm:p-7 rounded-3xl bg-gradient-to-br from-blue-600 via-indigo-600 to-cyan-600 text-white shadow-2xl overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
              
              <div className="relative z-10">
                <span className="text-xs uppercase font-extrabold tracking-widest text-cyan-200">
                  Projected Annual Downtime Savings
                </span>
                <div className="text-4xl sm:text-5xl font-black font-grotesk mt-2 tracking-tight">
                  ₹{results.downtimeSavingsCr} <span className="text-2xl font-bold">Cr</span>
                </div>
                <p className="mt-2 text-xs text-white/80 leading-relaxed font-medium">
                  By eliminating ~{results.tripsAvoided} trips/year and recapturing {results.hoursSaved} operating hours via RCM &amp; FMEA.
                </p>

                <div className="mt-6 pt-5 border-t border-white/20 grid grid-cols-2 gap-4">
                  <div>
                    <span className="text-[11px] text-cyan-200 block">Trips Avoided</span>
                    <span className="text-xl font-bold font-grotesk">-{results.tripsAvoided} / yr</span>
                  </div>
                  <div>
                    <span className="text-[11px] text-cyan-200 block">Availability Boost</span>
                    <span className="text-xl font-bold font-grotesk">+{results.availabilityGain}%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Spares Inventory Capital Release Card */}
            <SpotlightCard className="p-5 sm:p-6 rounded-2xl flex items-center justify-between">
              <div>
                <span className="text-xs text-muted-foreground uppercase font-bold tracking-wider block">
                  Spares Capital Released
                </span>
                <span className="text-2xl sm:text-3xl font-extrabold font-grotesk text-foreground mt-0.5 block">
                  ₹{results.sparesCapitalReleasedCr} Crore
                </span>
                <span className="text-[11px] text-emerald-500 font-semibold block mt-0.5">
                  18% optimized via Criticality Matrix
                </span>
              </div>
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0">
                <TrendingUp className="w-6 h-6" />
              </div>
            </SpotlightCard>

            {/* Target Plant Availability Card */}
            <SpotlightCard className="p-5 sm:p-6 rounded-2xl flex items-center justify-between">
              <div>
                <span className="text-xs text-muted-foreground uppercase font-bold tracking-wider block">
                  Target Operating Availability
                </span>
                <span className="text-2xl sm:text-3xl font-extrabold font-grotesk text-foreground mt-0.5 block">
                  {results.optimizedAvailability}%
                </span>
                <span className="text-[11px] text-muted-foreground block mt-0.5">
                  Base was {results.baseAvailability}%
                </span>
              </div>
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-primary flex items-center justify-center shrink-0">
                <Percent className="w-6 h-6" />
              </div>
            </SpotlightCard>

            {/* Action CTA */}
            <a href="#contact" className="block pt-2">
              <Button size="lg" className="w-full rounded-2xl h-12 bg-primary text-primary-foreground font-bold shadow-lg shadow-primary/20 group">
                <span>Request Facility Reliability Scoping</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </a>

          </div>

        </div>
      </div>
    </Section>
  );
};
