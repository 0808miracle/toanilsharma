import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Section, SectionHeader, SectionLabel, SectionTitle, TextGradient } from '@/components/portfolio/Section';
import { LiveWaveformSimulator } from '@/components/portfolio/LiveWaveformSimulator';
import { 
  Zap, 
  Activity, 
  Cpu, 
  ShieldAlert, 
  ExternalLink, 
  Layers, 
  Gauge, 
  RotateCw,
  Sliders,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { MathTex } from '@/components/ui/MathTex';

interface SimulatorLab {
  id: string;
  code: string;
  title: string;
  category: 'electrical' | 'safety' | 'power' | 'mechanical';
  categoryLabel: string;
  tagline: string;
  description: string;
  standards: string[];
  features: string[];
  formula: string;
  url: string;
  accentColor: string;
  highlight: string;
}

const simulatorLabs: SimulatorLab[] = [
  {
    id: 'power-electronics',
    code: 'LAB-PE200',
    title: 'Power Electronics Virtual Lab',
    category: 'electrical',
    categoryLabel: 'Power Electronics & Drives',
    tagline: 'Real-time switching topologies, converters, inverters & harmonic synthesis',
    description: 'First-principles browser simulation of DC-DC Buck, Boost, and Buck-Boost converters, SPWM inverter modulation, Foster thermal networks, and SiC/IGBT switching loss dynamics.',
    standards: ['IEC 61800', 'IEEE 519', 'JEDEC JESD51'],
    features: [
      'Buck, Boost & Buck-Boost continuous/discontinuous conduction modes',
      'Sinusoidal PWM inverter synthesis with FFT harmonic decomposition',
      'SiC MOSFET double-pulse test & dynamic switching dissipation'
    ],
    formula: 'V_{\\text{out}} = \\frac{V_{\\text{in}}}{1 - D} \\cdot \\eta = \\frac{P_{\\text{out}}}{P_{\\text{out}} + P_{\\text{sw}} + P_{\\text{cond}}}',
    url: 'https://livesimulators.com/lab/power-electronics-lab',
    accentColor: 'from-cyan-500/20 to-blue-600/20',
    highlight: 'Float64 Real-Time Numerical Solvers'
  },
  {
    id: 'power-systems',
    code: 'LAB-PS300',
    title: 'Power Systems & Grid Lab',
    category: 'power',
    categoryLabel: 'Substation & Grid Automation',
    tagline: 'Substation load flow, transformer test analysis & automated load shedding',
    description: 'Dynamic grid modeling inspired by industrial electrical distribution networks. Interactive 3-phase symmetrical fault analysis, transformer OC/SC parameter extraction, and frequency-based load shedding.',
    standards: ['IEEE 399 (Brown Book)', 'IEC 60909', 'IEEE 242'],
    features: [
      'Interactive 3-Phase balanced & unbalanced fault impedance solver',
      'Automated frequency/voltage load shedding priority matrix',
      'Transformer open-circuit & short-circuit equivalent circuit extraction'
    ],
    formula: 'I_{\\text{sc}} = \\frac{V_{\\text{LL}}}{\\sqrt{3} \\cdot Z_{\\text{th}}} \\quad \\Big| \\quad \\Delta f = \\frac{P_{\\text{gen}} - P_{\\text{load}}}{2H \\cdot f_0}',
    url: 'https://livesimulators.com/lab/power-systems-lab',
    accentColor: 'from-blue-600/20 to-indigo-600/20',
    highlight: '220kV to 6.6kV Grid Scenarios'
  },
  {
    id: 'safeops-ups',
    code: 'LAB-UPS100',
    title: 'SafeOps Industrial UPS Simulator',
    category: 'electrical',
    categoryLabel: 'Critical Power Architecture',
    tagline: 'Industrial UPS operation, static bypass transfers & battery discharge modeling',
    description: 'Zero-downtime industrial power simulator. Model dual-bus UPS redundancy (2N/2N+1), static bypass synchronization windows, inverter SCR commutation, and Peukert battery autonomy curves.',
    standards: ['IEC 62040-3', 'IEEE 485', 'IEEE 1184'],
    features: [
      'Static bypass phase synchronization & seamless sub-cycle transfers',
      'Dual-feed 2N redundant busbar failure mode mitigation',
      'Battery string runtime estimation via Peukert exponent modeling'
    ],
    formula: 't = H \\cdot \\left(\\frac{C}{I \\cdot H}\\right)^k \\quad \\Big| \\quad \\text{THD}_v < 3\\%',
    url: 'https://livesimulators.com/lab/safeops-ups',
    accentColor: 'from-emerald-500/20 to-teal-600/20',
    highlight: 'Zero-Transfer-Time Simulation'
  },
  {
    id: 'electrolive-safety',
    code: 'LAB-SAFE400',
    title: 'ElectroLive Electrical Safety & Arc Flash',
    category: 'safety',
    categoryLabel: 'Process Safety & Arc Flash',
    tagline: 'Arc flash boundary calculations, step/touch potentials & NFPA 70E compliance',
    description: 'Interactive occupational safety simulator for industrial switchgear. Compute incident energy in cal/cm², define boundary clearance zones, test earth grid step/touch voltages, and select PPE categories.',
    standards: ['IEEE 1584-2018', 'NFPA 70E', 'IEEE 80 Earth Grids'],
    features: [
      'Incident energy analysis (cal/cm²) based on clearing time & bolted fault',
      'Substation earth mesh step & touch potential risk distribution',
      'Hazard Risk Category (HRC 1-4) PPE compliance interactive selector'
    ],
    formula: 'E_i = 4.184 \\cdot C_f \\cdot E_n \\cdot \\left(\\frac{t}{0.2}\\right) \\cdot \\left(\\frac{610^x}{D^x}\\right) \\text{ cal/cm}^2',
    url: 'https://livesimulators.com/lab/electrolive-electrical-safety',
    accentColor: 'from-amber-500/20 to-orange-600/20',
    highlight: 'Zero-Incident Safety Engineering'
  },
  {
    id: 'mechanical-turbomachinery',
    code: 'LAB-ME500',
    title: 'Turbomachinery & Rotor Dynamics Suite',
    category: 'mechanical',
    categoryLabel: 'Turbomachinery & Mechanical Dynamics',
    tagline: 'Rotor critical speeds, Campbell diagrams, vibration resonance & balancing',
    description: 'Advanced rotating equipment dynamics platform. Model Jeffcott rotor whirling, hydrodynamic bearing stiffness/damping coefficients, Campbell frequency diagrams, and dual-plane dynamic balancing.',
    standards: ['API 612 / 617', 'ISO 10816 / 20816', 'API 684'],
    features: [
      'Campbell diagram critical speed margin calculation against operating RPM',
      'Harmonic resonance amplitude peak estimation with damping ratio ζ',
      'Influence coefficient method for 2-plane field vibration trim balancing'
    ],
    formula: 'M \\ddot{q} + (C + \\Omega G) \\dot{q} + K q = F_{\\text{unbal}}(\\Omega) \\quad \\Big| \\quad \\omega_{\\text{cr}} = \\sqrt{\\frac{k}{m}}',
    url: 'https://mech.livesimulators.com/',
    accentColor: 'from-purple-500/20 to-pink-600/20',
    highlight: 'Advanced API 617 / 684 Solver'
  }
];

export const LiveSimulatorsSection = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'electrical' | 'power' | 'safety' | 'mechanical'>('all');

  const filteredLabs = activeFilter === 'all' 
    ? simulatorLabs 
    : simulatorLabs.filter(lab => lab.category === activeFilter);

  return (
    <Section id="simulators" className="bg-slate-950/20 relative overflow-hidden">
      {/* Background radial gradient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-primary/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="relative z-10">
        <SectionHeader>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-mono font-medium text-primary mb-3">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            LIVE VIRTUAL LABORATORIES • FIRST-PRINCIPLES SOLVERS
          </div>
          <SectionLabel>LiveSimulators Ecosystem</SectionLabel>
          <SectionTitle>
            Interactive <TextGradient>Virtual Engineering Labs</TextGradient>
          </SectionTitle>
          <p className="mt-4 max-w-3xl mx-auto text-muted-foreground text-lg">
            Bridging 28 years of continuous process plant leadership with real-time web simulation. 
            Engineers, students, and plant operators can simulate complex physics, test fault scenarios, and explore 
            rigorous mathematical formulations directly in the browser—100% free and ad-free.
          </p>
        </SectionHeader>

        {/* Live Interactive Oscilloscope Simulator Preview */}
        <LiveWaveformSimulator />

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {[
            { key: 'all', label: 'All Laboratories' },
            { key: 'electrical', label: 'Power Electronics & UPS' },
            { key: 'power', label: 'Substation & Grid' },
            { key: 'safety', label: 'Arc Flash & Safety' },
            { key: 'mechanical', label: 'Turbomachinery & Dynamics' }
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveFilter(tab.key as any)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                activeFilter === tab.key
                  ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25 scale-105'
                  : 'bg-secondary/60 text-muted-foreground hover:text-foreground hover:bg-secondary'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Simulator Cards Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {filteredLabs.map((lab) => (
            <Card 
              key={lab.id}
              className="group relative bg-background/60 backdrop-blur-xl border border-border/60 hover:border-primary/50 transition-all duration-500 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-primary/10 flex flex-col justify-between"
            >
              {/* Top ambient glow */}
              <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${lab.accentColor}`}></div>

              <div>
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold text-primary tracking-wider uppercase px-2.5 py-1 rounded-md bg-primary/10 border border-primary/20">
                        {lab.code}
                      </span>
                      <span className="text-xs text-muted-foreground font-medium">
                        {lab.categoryLabel}
                      </span>
                    </div>
                    <Badge variant="outline" className="text-[11px] font-mono border-emerald-500/30 text-emerald-400 bg-emerald-500/5">
                      <Sparkles className="w-3 h-3 mr-1" />
                      {lab.highlight}
                    </Badge>
                  </div>

                  <CardTitle className="text-2xl font-bold font-grotesk tracking-tight group-hover:text-primary transition-colors flex items-center justify-between">
                    <span>{lab.title}</span>
                  </CardTitle>
                  <p className="text-sm font-medium text-foreground/80 mt-1">
                    {lab.tagline}
                  </p>
                </CardHeader>

                <CardContent className="space-y-5 pb-6">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {lab.description}
                  </p>

                  {/* Core Mathematical Formulation Box */}
                  <div className="p-3 rounded-xl bg-secondary/50 dark:bg-card/70 border border-border/60 text-xs flex items-center gap-2 overflow-x-auto text-foreground">
                    <Activity className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-[11px] font-mono font-semibold text-muted-foreground shrink-0">Formulation:</span>
                    <MathTex math={lab.formula} className="text-primary text-xs" />
                  </div>

                  {/* Key Capabilities */}
                  <div className="space-y-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground block">
                      Interactive Engineering Capabilities:
                    </span>
                    <ul className="space-y-1.5 text-xs text-foreground/85">
                      {lab.features.map((feat, fIndex) => (
                        <li key={fIndex} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Standards badges */}
                  <div className="pt-2 flex flex-wrap items-center gap-1.5">
                    <span className="text-[11px] text-muted-foreground mr-1">Standards:</span>
                    {lab.standards.map((std, sIndex) => (
                      <span 
                        key={sIndex}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-secondary text-secondary-foreground border border-border/40"
                      >
                        {std}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </div>

              {/* Bottom Action Footer */}
              <div className="p-6 pt-0 border-t border-border/30 mt-4 bg-secondary/10 flex items-center justify-between">
                <span className="text-xs text-muted-foreground font-mono">
                  Browser-Based Numerical Solver
                </span>
                <a 
                  href={lab.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Button size="sm" className="group/btn gap-2 font-medium">
                    <span>Launch Lab</span>
                    <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </Button>
                </a>
              </div>
            </Card>
          ))}
        </div>

        {/* Global Hub CTA Banner */}
        <div className="relative rounded-2xl p-6 sm:p-8 bg-gradient-to-r from-slate-900 via-secondary/70 to-slate-900 border border-primary/20 shadow-2xl text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-primary">
              <Zap className="w-3.5 h-3.5" />
              <span>OVER 65+ ACTIVE FIRST-PRINCIPLES SIMULATORS</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-grotesk">
              Explore the Complete LiveSimulators Interactive Catalog
            </h3>
            <p className="text-sm text-muted-foreground">
              Covering electrical transmission lines, chemical reactors (CSTR), civil Euler-Bernoulli beam deflections, 
              quantum band diagrams, and planar 4-bar kinematics.
            </p>
          </div>
          <a 
            href="https://livesimulators.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="shrink-0"
          >
            <Button size="lg" className="gap-2 shadow-lg shadow-primary/20">
              <span>Open LiveSimulators.com</span>
              <ExternalLink className="w-4 h-4" />
            </Button>
          </a>
        </div>
      </div>
    </Section>
  );
};
