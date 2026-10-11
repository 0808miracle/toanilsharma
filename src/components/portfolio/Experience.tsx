import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { 
  Compass, 
  Milestone, 
  Factory, 
  Cpu, 
  ShieldCheck, 
  TrendingUp, 
  Sparkles, 
  Calendar, 
  MapPin, 
  Award, 
  Zap, 
  CheckCircle2, 
  Layers,
  ArrowRight,
  Flame,
  Globe2,
  Building2,
  ChevronDown,
  BookOpen
} from 'lucide-react';
import { Section, SectionHeader, SectionLabel, SectionTitle, TextGradient } from '@/components/portfolio/Section';
import { MathTex } from '@/components/ui/MathTex';

interface JourneyMilestone {
  era: string;
  yearRange: string;
  phaseTitle: string;
  roleHighlight: string;
  organization: string;
  location: string;
  category: 'executive' | 'petrochem' | 'automation' | 'infrastructure' | 'foundations';
  statusBadge: {
    label: string;
    type: 'gold' | 'emerald' | 'cyan' | 'sapphire' | 'violet';
  };
  summary: string;
  strategicImpact: string[];
  latexFormula: {
    equation: string;
    title: string;
    standard: string;
  };
  tags: string[];
}

const journeyMilestones: JourneyMilestone[] = [
  {
    era: "2026 – Present",
    yearRange: "2026 – Present",
    phaseTitle: "Capital Project Engineering & Asset Integrity • Mega Petrochemical Operations",
    roleHighlight: "DGM – Central Engineering Services (Electrical, Automation & Capital Projects)",
    organization: "Reliance Industries Limited",
    location: "Continuous Petrochemical Operations",
    category: "executive",
    statusBadge: {
      label: "2026 – Present • DGM Central Engineering Services",
      type: "emerald",
    },
    summary: "Promoted to Deputy General Manager (DGM) – Central Engineering Services. Entrusted with executive project governance and capital execution oversight across continuous process petrochemical facilities, integrating high-reliability power systems, automated switchyards, advanced telemetry, and enterprise asset integrity standards.",
    strategicImpact: [
      "Steering large-scale capital project expansions, equipment retrofits, and electrical infrastructure modernizations.",
      "Directing cross-functional engineering integrity across continuous process petrochemical facilities and industrial complexes.",
      "Overseeing enterprise Management of Change (MOC), process safety compliance, and multidiscipline technical governance.",
      "Ensuring zero-interruption power system resilience for continuous manufacturing units."
    ],
    latexFormula: {
      equation: "\\text{LCC} = \\text{CapEx}_{\\text{initial}} + \\sum_{t=1}^N \\frac{\\text{OpEx}(t) + \\text{RiskCost}(t)}{(1 + r)^t}",
      title: "Total Lifecycle Asset Optimization",
      standard: "ISO 55000 / IEC 60300-3-3"
    },
    tags: ["2026 – Present", "DGM Central Engineering", "Capital Projects", "Continuous Manufacturing", "Asset Integrity"]
  },
  {
    era: "2024 & Beyond",
    yearRange: "2024 & Beyond",
    phaseTitle: "Scaling Open-Access Engineering Simulations",
    roleHighlight: "Technical Philanthropist & Keynote Speaker",
    organization: "Bharat Electricity Summit & Open-Access Ecosystem",
    location: "National Industrial Corridors & Global Web",
    category: "executive",
    statusBadge: {
      label: "2024 & Beyond • Scaling Open-Access Simulations",
      type: "gold",
    },
    summary: "Translating three decades of physical plant engineering and zero-breakdown philosophy into nationwide engineering impact. Keynote address at Bharat Electricity Summit, scaling open-access, browser-native simulations to democratize technical intelligence for every student and working professional.",
    strategicImpact: [
      "Keynote Speaker at Bharat Electricity Summit delivering actionable frameworks on industrial grid stability, substation automation, and electrical asset life extension.",
      "Expanding LiveSimulators.com, DesignCalculators.co.in, ReliabilityTools.co.in, and ElectroSafe.homes to empower hundreds of thousands of students and engineers with free, high-fidelity engineering simulations.",
      "Pioneering air-gapped, privacy-first technical web tools running complex first-principles mathematical models without paywalls, ads, or tracking."
    ],
    latexFormula: {
      equation: "\\lim_{t \\to \\infty} \\mathcal{A}_{\\text{system}}(t) = 1.0 \\quad \\Longleftrightarrow \\quad \\text{Zero-Breakdown Target}",
      title: "Asymptotic System Availability",
      standard: "IEEE Reliability Society & Industrial Philanthropy"
    },
    tags: ["2024 & Beyond", "Bharat Electricity Summit", "Digital Democratization", "LiveSimulators.com", "First-Principles Web"]
  },
  {
    era: "2018 – 2023",
    yearRange: "2018 – 2023",
    phaseTitle: "Asset Integrity Architecture, RIL Learning Academy & People Capability",
    roleHighlight: "AGM – CES (Reliability, Asset Integrity & Technical Capability)",
    organization: "Reliance Industries Limited",
    location: "Bharuch Complex – Gujarat",
    category: "petrochem",
    statusBadge: {
      label: "80+ Workshops • 200+ Engineers Trained • DNV Lead Auditor",
      type: "sapphire",
    },
    summary: "Institutionalized the 'Zero-Breakdown Mindset' across large-scale continuous manufacturing facilities. Designed and delivered technical masterclasses at RIL Learning Academy, spearheaded DNV-certified IMS safety audits, and mentored technical specialists into senior plant leadership.",
    strategicImpact: [
      "Conducted 80+ specialized technical workshops at RIL Learning Academy on E&I reliability, power electronics, and electrical safety.",
      "Trained 200+ engineers and mentored 40+ junior specialists into senior technical leadership roles across the group.",
      "Served as certified DNV IMS Lead Auditor (ISO 9001/14001/45001) and Process Safety Auditor for major turnarounds.",
      "Led Failure Mode Criticality Analysis (FMEA) and Root Cause Analysis (RCA) frameworks preventing recurring unscheduled plant trips."
    ],
    latexFormula: {
      equation: "R(t) = \\exp\\left(-\\left(\\frac{t}{\\eta}\\right)^\\beta\\right) \\quad \\mid \\quad \\beta > 1 \\implies \\text{Wearout Fatigue}",
      title: "Weibull Asset Reliability Model",
      standard: "IEC 61649 / ISO 14224"
    },
    tags: ["RIL Learning Academy", "SHRM Facilitation", "DNV Lead Auditor", "RCA Masterclass", "Talent Pipeline"]
  },
  {
    era: "2008 – 2018",
    yearRange: "2008 – 2018",
    phaseTitle: "Continuous Petrochemical Commissioning & Power Distribution Automation",
    roleHighlight: "Senior Manager to AGM – Central Engineering Services",
    organization: "Reliance Industries Limited",
    location: "Continuous Petrochemical Operations",
    category: "automation",
    statusBadge: {
      label: "Multi-Plant Commissioning • Automated Load Shedding",
      type: "cyan",
    },
    summary: "Directed electrical and automation commissioning across continuous petrochemical complexes. Engineered and deployed an integrated automated load shedding and electrical power management architecture, safeguarding continuous manufacturing from blackout cascades.",
    strategicImpact: [
      "Led electrical & instrumentation commissioning for major continuous petrochemical units and complex utility systems.",
      "Engineered PLC-based automated load shedding architectures across plant electrical distribution networks (220kV to 6.6kV).",
      "Optimized critical spares inventory through structured failure mode criticality analysis (FMEA) and standardized equipment categorization.",
      "Designed robust electrical protection coordination and transient fault containment for continuous manufacturing reliability."
    ],
    latexFormula: {
      equation: "\\Delta f = \\frac{P_{\\text{gen}} - P_{\\text{load}}}{2 H \\cdot f_0} \\quad \\longrightarrow \\quad P_{\\text{shed}} = \\sum_{i=1}^m P_{\\text{feeder},i}",
      title: "Frequency-Responsive Automated Load Shedding",
      standard: "IEEE 399 / IEC 60909"
    },
    tags: ["Power Systems SCADA", "220kV to 6.6kV", "Continuous Process", "Automated Load Shedding", "Reliability Engineering"]
  },
  {
    era: "2004 – 2008",
    yearRange: "2004 – 2008",
    phaseTitle: "Distributed Infrastructure & Hazardous Area Engineering",
    roleHighlight: "Commissioning & Reliability Lead (Engineering Incharge)",
    organization: "Reliance Petroleum Retail",
    location: "Punjab & Rajasthan Network",
    category: "infrastructure",
    statusBadge: {
      label: "Zero Incidents • 350+ Technicians Certified",
      type: "violet",
    },
    summary: "Directed end-to-end engineering commissioning for a multi-state network of automated retail outlets across Punjab and Rajasthan, enforcing strict hazardous area compliance and unified multidisciplinary project delivery.",
    strategicImpact: [
      "Provided unified cross-disciplinary leadership covering Electrical, Instrumentation, Mechanical, Civil, and SCADA data networks.",
      "Designed and delivered specialized hands-on hazardous area classification (Zone 0/1/2) training to 350+ technicians with zero reported safety incidents.",
      "Served as regional Root Cause Analysis (RCA) facilitator and electrical systems trainer for northern region operations."
    ],
    latexFormula: {
      equation: "\\mathcal{I}_{\\text{fault}} \\le \\mathcal{I}_{\\text{safe}} \\quad \\Longleftrightarrow \\quad W_{\\text{spark}} < W_{\\text{MIE}}(\\text{Hydrocarbon})",
      title: "Intrinsic Safety & Explosive Atmosphere Limit",
      standard: "IEC 60079-11 (Ex-i)"
    },
    tags: ["Hazardous Area Safety", "Multi-State Network", "Zero Incidents", "Zone 0/1/2", "Retail Automation"]
  },
  {
    era: "1995 – 2004",
    yearRange: "1995 – 2004",
    phaseTitle: "Industrial Foundations & Greenfield Continuous Process Commissioning",
    roleHighlight: "Engineer – Electrical & Instrumentation",
    organization: "Ambuja Cements Limited",
    location: "Continuous Manufacturing Complex",
    category: "foundations",
    statusBadge: {
      label: "Greenfield Commissioning • Plant Automation",
      type: "sapphire",
    },
    summary: "Launched foundational engineering career following Electrical Engineering graduation at CCET (1995). Core member of the commissioning team for a greenfield continuous process manufacturing complex, leading plant-wide automation and energy efficiency.",
    strategicImpact: [
      "Key electrical and instrumentation commissioning team member for a greenfield continuous manufacturing complex.",
      "Spearheaded plant-wide electrical automation and energy conservation initiatives, lowering annual energy consumption by 2.5%.",
      "Automated electrical switchgear and capacitor switching banks, substantially improving power factor and eliminating downtime.",
      "Facilitated on-the-job training for junior technicians, shift engineers, and maintenance crews."
    ],
    latexFormula: {
      equation: "Q_c = P \\cdot \\left(\\tan\\phi_1 - \\tan\\phi_2\\right) \\quad \\mid \\quad \\cos\\phi_1 \\to \\cos\\phi_2 \\ge 0.98",
      title: "Reactive Power & Power Factor Optimization",
      standard: "IEC 60831 / IEEE 141"
    },
    tags: ["Greenfield Commissioning", "Continuous Process", "Switchgear Automation", "Energy Optimization", "Foundational Genesis"]
  }
];

export const Experience = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [expandedEra, setExpandedEra] = useState<string | null>(null);

  const filteredMilestones = selectedFilter === 'all'
    ? journeyMilestones
    : journeyMilestones.filter(m => {
        if (selectedFilter === 'executive') return m.category === 'executive';
        if (selectedFilter === 'petrochem') return m.category === 'petrochem' || m.category === 'executive';
        if (selectedFilter === 'automation') return m.category === 'automation';
        if (selectedFilter === 'foundations') return m.category === 'foundations' || m.category === 'infrastructure';
        return true;
      });

  return (
    <Section id="experience" className="relative py-24 bg-secondary/30 dark:bg-card/25 border-y border-border/70 dark:border-white/10 overflow-hidden">
      {/* Subtle Background Radial Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-gradient-to-b from-blue-500/5 via-cyan-500/5 to-transparent blur-[140px] pointer-events-none rounded-full" />

      <SectionHeader>
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-mono font-semibold text-primary mb-3">
          <Compass className="w-3.5 h-3.5" />
          <span>CHRONOLOGY OF INDUSTRIAL EXCELLENCE • 1995 – 2026</span>
        </div>
        <SectionLabel>Life &amp; Industrial Journey</SectionLabel>
        <SectionTitle>
          Three Decades of <TextGradient>Industrial Leadership</TextGradient>
        </SectionTitle>
        <p className="mt-4 max-w-3xl mx-auto text-muted-foreground text-sm sm:text-base leading-relaxed">
          From greenfield continuous process plant commissioning in 1995 to executive leadership in 
          <strong className="text-foreground font-semibold"> large-scale petrochemical capital projects</strong> as 
          <strong className="text-primary font-semibold"> DGM Central Engineering Services</strong> and nationwide engineering thought leadership.
        </p>
      </SectionHeader>

      {/* Apex Executive Leadership Banner */}
      <div className="max-w-5xl mx-auto mb-16 px-4">
        <div className="relative p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-blue-950/40 via-background to-secondary/60 dark:from-blue-950/50 dark:via-[#0B0F19]/90 dark:to-card/70 border border-blue-500/30 shadow-2xl backdrop-blur-xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div>
              <div className="flex flex-wrap items-center gap-2.5 mb-2">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold font-mono tracking-wide bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
                  <Sparkles className="w-3.5 h-3.5 mr-1.5" />
                  PRESENT ROLE • EXECUTIVE LEADERSHIP
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold font-mono bg-blue-500/15 text-blue-600 dark:text-cyan-400 border border-blue-500/30">
                  <Factory className="w-3.5 h-3.5 mr-1.5" />
                  Continuous Petrochemical Operations
                </span>
              </div>
              <h3 className="font-grotesk font-extrabold text-2xl sm:text-3xl text-foreground tracking-tight">
                DGM – Central Engineering Services
              </h3>
              <p className="text-primary font-semibold text-base sm:text-lg mt-1 flex items-center gap-2">
                <span>Steering Capital Projects &amp; Asset Integrity in Continuous Petrochemical Operations</span>
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground mt-2 max-w-2xl leading-relaxed">
                Directing multidisciplinary project execution, switchyard infrastructure, power automation, and asset integrity across continuous process facilities.
              </p>
            </div>

            {/* Metric Pillars */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 shrink-0">
              <div className="p-3.5 rounded-2xl bg-background/80 dark:bg-card/80 border border-border/80 text-center">
                <span className="text-[11px] font-mono text-muted-foreground uppercase tracking-wide block">Projects Scope</span>
                <span className="text-xl sm:text-2xl font-black font-grotesk text-primary">World-Scale</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-background/80 dark:bg-card/80 border border-border/80 text-center">
                <span className="text-[11px] font-mono text-muted-foreground uppercase tracking-wide block">Career Span</span>
                <span className="text-xl sm:text-2xl font-black font-grotesk text-foreground">28+ Years</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-background/80 dark:bg-card/80 border border-border/80 text-center col-span-2 sm:col-span-1">
                <span className="text-[11px] font-mono text-muted-foreground uppercase tracking-wide block">Distribution</span>
                <span className="text-xl sm:text-2xl font-black font-grotesk text-cyan-500">Grid SCADA</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Era Navigation Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12 max-w-3xl mx-auto px-4">
        {[
          { key: 'all', label: 'All Milestones (1995–2026)' },
          { key: 'executive', label: '2026 DGM & 2024 Simulations' },
          { key: 'petrochem', label: 'Petrochemical Complex' },
          { key: 'automation', label: 'Power & Automation' },
          { key: 'foundations', label: 'Greenfield & Foundations' },
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => setSelectedFilter(tab.key)}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
              selectedFilter === tab.key
                ? 'bg-primary text-primary-foreground shadow-md shadow-primary/20 scale-105'
                : 'bg-background/80 dark:bg-card/80 border border-border/70 text-muted-foreground hover:text-foreground'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Journey Map Timeline */}
      <div className="max-w-5xl mx-auto px-4 relative">
        {/* Central Vertical Connector Line */}
        <div className="absolute left-6 md:left-1/2 top-4 bottom-4 w-0.5 -translate-x-1/2 bg-gradient-to-b from-blue-500 via-cyan-400 to-indigo-500/20 pointer-events-none hidden sm:block" />

        <div className="space-y-12 sm:space-y-16">
          {filteredMilestones.map((milestone, index) => {
            const isEven = index % 2 === 0;
            const isExpanded = expandedEra === milestone.era;

            return (
              <div 
                key={milestone.era}
                className={`relative flex flex-col sm:flex-row items-center gap-6 sm:gap-8 ${
                  isEven ? 'sm:flex-row-reverse' : ''
                }`}
              >
                {/* Central Milestone Timeline Node */}
                <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-background dark:bg-card border-2 border-primary items-center justify-center shadow-lg shadow-primary/20 z-10">
                  <span className="w-3 h-3 rounded-full bg-primary animate-pulse" />
                </div>

                {/* Date / Era Pill (Opposite Side) */}
                <div className={`w-full sm:w-1/2 flex ${isEven ? 'sm:justify-start' : 'sm:justify-end'}`}>
                  <div className={`p-4 rounded-2xl bg-background/90 dark:bg-card/90 border border-border/80 shadow-md flex items-center gap-3 ${
                    isEven ? 'sm:ml-8' : 'sm:mr-8'
                  }`}>
                    <Calendar className="w-4 h-4 text-primary shrink-0" />
                    <div>
                      <span className="text-xs font-mono font-bold text-primary block">
                        {milestone.yearRange}
                      </span>
                      <span className="text-xs text-muted-foreground font-medium">
                        {milestone.era}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Journey Milestone Card */}
                <div className={`w-full sm:w-1/2 ${isEven ? 'sm:mr-8' : 'sm:ml-8'}`}>
                  <div className="group relative p-6 sm:p-7 rounded-3xl bg-background/95 dark:bg-card/95 border border-border/80 dark:border-white/10 hover:border-primary/50 shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1">
                    
                    {/* Header info */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold font-mono tracking-wide ${
                        milestone.statusBadge.type === 'emerald'
                          ? 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30'
                          : milestone.statusBadge.type === 'gold'
                          ? 'bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/30'
                          : milestone.statusBadge.type === 'cyan'
                          ? 'bg-cyan-500/15 text-cyan-600 dark:text-cyan-400 border border-cyan-500/30'
                          : 'bg-blue-500/15 text-blue-600 dark:text-blue-400 border border-blue-500/30'
                      }`}>
                        <Sparkles className="w-3 h-3 mr-1" />
                        {milestone.statusBadge.label}
                      </span>
                      <span className="text-[11px] font-mono text-muted-foreground flex items-center">
                        <MapPin className="w-3 h-3 mr-1 text-primary" />
                        {milestone.location}
                      </span>
                    </div>

                    <h3 className="font-grotesk font-bold text-lg sm:text-xl text-foreground group-hover:text-primary transition-colors">
                      {milestone.phaseTitle}
                    </h3>

                    <div className="mt-1 flex flex-wrap items-center gap-1.5 text-xs text-muted-foreground">
                      <strong className="text-primary font-semibold">{milestone.roleHighlight}</strong>
                      <span>•</span>
                      <span>{milestone.organization}</span>
                    </div>

                    <p className="mt-3 text-xs sm:text-sm text-foreground/80 leading-relaxed">
                      {milestone.summary}
                    </p>

                    {/* Pure Math LaTeX Box */}
                    <div className="mt-4 p-3 rounded-2xl bg-secondary/60 dark:bg-secondary/25 border border-border/60">
                      <div className="flex items-center justify-between text-[11px] font-mono text-muted-foreground mb-1.5">
                        <span className="font-semibold text-foreground flex items-center gap-1">
                          <Zap className="w-3 h-3 text-primary" />
                          {milestone.latexFormula.title}
                        </span>
                        <span className="text-[10px] opacity-80">{milestone.latexFormula.standard}</span>
                      </div>
                      <div className="py-1 px-2 rounded-xl bg-background/80 dark:bg-card/80 border border-border/40 text-center overflow-x-auto text-primary">
                        <MathTex math={milestone.latexFormula.equation} block={true} className="text-xs sm:text-sm" />
                      </div>
                    </div>

                    {/* Expandable Strategic Impact Bullets */}
                    <div className="mt-4 pt-3 border-t border-border/50">
                      <button
                        onClick={() => setExpandedEra(isExpanded ? null : milestone.era)}
                        className="w-full flex items-center justify-between text-xs font-semibold text-primary hover:text-primary/80 transition-colors py-1"
                      >
                        <span className="flex items-center gap-1.5">
                          <BookOpen className="w-3.5 h-3.5" />
                          {isExpanded ? 'Hide Strategic Deliverables' : 'View Key Industrial Deliverables'}
                        </span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} />
                      </button>

                      {isExpanded && (
                        <div className="mt-3 space-y-2.5 animate-in fade-in slide-in-from-top-2 duration-200">
                          {milestone.strategicImpact.map((item, idx) => (
                            <div key={idx} className="flex items-start gap-2.5 text-xs text-foreground/85">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 mt-0.5 shrink-0" />
                              <span className="leading-relaxed">{item}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Tags */}
                    <div className="mt-4 pt-3 border-t border-border/40 flex flex-wrap gap-1.5">
                      {milestone.tags.map((tag, i) => (
                        <Badge key={i} variant="secondary" className="text-[10px] font-normal bg-secondary/80 text-muted-foreground">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export default Experience;