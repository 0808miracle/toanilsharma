import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, Factory, Zap, Award, ShieldCheck, MapPin, Calendar, TrendingUp, Sparkles } from 'lucide-react';
import { Section, SectionHeader, SectionLabel, SectionTitle, TextGradient } from '@/components/portfolio/Section';

interface ExperienceItem {
  company: string;
  location: string;
  date: string;
  tenureYears: string;
  role: string;
  category: 'automation' | 'optimization' | 'commissioning' | 'training';
  highlightBadge?: {
    label: string;
    type: 'gold' | 'cyan' | 'sapphire';
  };
  achievements: string[];
  tags: string[];
}

const experienceData: ExperienceItem[] = [
  {
    company: "Reliance Industries Limited",
    location: "Bharuch Complex – Gujarat",
    date: "Feb 2008 – Present",
    tenureYears: "17+ Years",
    role: "AGM – Central Engineering Services (Electrical, Power Electronics & Automation)",
    category: "optimization",
    highlightBadge: {
      label: "₹8 Crore Spares Saved • 27 Substations Automated",
      type: "gold",
    },
    achievements: [
      "Overseeing plant reliability, electrical infrastructure, and asset integrity for 15+ world-scale petrochemical plants and multiple industrial townships.",
      "Engineered and deployed a PLC-based Electrical Distribution & Load Shedding System across 27 substations (220kV to 6.6kV), automating power management and eliminating 39 manual monitoring positions.",
      "Reduced critical spares inventory by ₹8 Crore through process re-engineering, failure mode criticality analysis (FMEA), and standardized SAP-PM categorization.",
      "Led electrical & instrumentation commissioning for major world-scale units including PTA, PET, GCU (Gas Cracking Unit), and complex utility systems.",
      "Designed and delivered 80+ technical workshops at RIL Learning Academy (2015–2025) on E&I reliability, power electronics, and electrical safety.",
      "Active DNV Certified IMS Lead Auditor and Process Safety Auditor for complex turnarounds and Management of Change (MOC) governance.",
      "Mentored 40+ junior engineers and specialists into senior technical leadership roles across the group.",
    ],
    tags: ["Multi-Site Leadership", "Substation Automation", "₹8 Cr Spares Optimization", "PTA/PET/GCU Commissioning", "SHRM Facilitation", "IMS Safety Auditing"],
  },
  {
    company: "RIL – Petroleum Retail",
    location: "Punjab & Rajasthan Network",
    date: "Feb 2004 – Jan 2008",
    tenureYears: "4 Years",
    role: "Commissioning & Reliability Lead (Engineering Incharge)",
    category: "commissioning",
    highlightBadge: {
      label: "Zero Incidents • 350+ Technicians Trained",
      type: "cyan",
    },
    achievements: [
      "Directed end-to-end engineering commissioning for a multi-state network of automated retail outlets across Punjab and Rajasthan.",
      "Provided unified cross-disciplinary leadership covering Electrical, Mechanical, Instrumentation, Civil, and IT data networks.",
      "Designed and delivered specialized hands-on hazardous area classification training to 350+ technicians with zero reported safety incidents.",
      "Served as regional RCA (Root Cause Analysis) facilitator and electrical systems trainer for technical talent pipelines.",
    ],
    tags: ["Retail Infrastructure", "Hazardous Area Safety", "Multi-Disciplinary Commissioning", "RCA Facilitation"],
  },
  {
    company: "Ambuja Cements Limited",
    location: "Punjab & Himachal Pradesh",
    date: "Jul 1995 – Feb 2004",
    tenureYears: "8.5 Years",
    role: "Engineer – Electrical & Instrumentation",
    category: "commissioning",
    highlightBadge: {
      label: "2.5 MTPA Greenfield Plant • -2.5% Energy Savings",
      type: "sapphire",
    },
    achievements: [
      "Key electrical and instrumentation commissioning team member for a 2.5 MTPA greenfield cement manufacturing complex in Punjab and Himachal Pradesh.",
      "Spearheaded plant-wide electrical automation and energy conservation initiatives, lowering annual energy consumption by 2.5%.",
      "Automated substation and capacitor switching banks, substantially improving power factor and eliminating downtime.",
      "Facilitated on-the-job training for junior technicians, shift engineers, and maintenance crews.",
    ],
    tags: ["Greenfield Cement Commissioning", "Energy Conservation", "Substation Automation", "E&I Maintenance"],
  },
];

export const Experience = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filteredData = activeFilter === 'all' 
    ? experienceData 
    : experienceData.filter(item => {
        if (activeFilter === 'automation') return item.tags.some(t => t.includes('Automation'));
        if (activeFilter === 'optimization') return item.tags.some(t => t.includes('Optimization'));
        if (activeFilter === 'commissioning') return item.tags.some(t => t.includes('Commissioning'));
        if (activeFilter === 'training') return item.tags.some(t => t.includes('Facilitation') || t.includes('Safety'));
        return true;
      });

  return (
    <Section id="experience" className="relative py-24 bg-secondary/30 dark:bg-card/30 border-y border-border/70 dark:border-white/10">
      <SectionHeader>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-mono font-semibold text-primary mb-3">
          <Factory className="w-3.5 h-3.5" />
          <span>CHRONOLOGY OF LEADERSHIP • 1995 – PRESENT</span>
        </div>
        <SectionLabel>Career Journey</SectionLabel>
        <SectionTitle>
          28 Years of <TextGradient>Industry Leadership</TextGradient>
        </SectionTitle>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground text-sm sm:text-base">
          From greenfield cement commissioning to steering electrical asset integrity 
          across 15+ world-scale petrochemical plants at Reliance Industries.
        </p>
      </SectionHeader>

      {/* Filter Badges */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12 max-w-3xl mx-auto">
        {[
          { key: 'all', label: 'All Milestones (28y)' },
          { key: 'automation', label: 'Substation Automation (27)' },
          { key: 'optimization', label: '₹8 Cr Spares Optimization' },
          { key: 'commissioning', label: 'Mega-Plant Commissioning' },
          { key: 'training', label: 'Safety & Capability Building' }
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveFilter(tab.key)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
              activeFilter === tab.key
                ? 'bg-primary text-primary-foreground shadow-md shadow-primary/20 scale-105'
                : 'bg-background/80 dark:bg-card/80 border border-border/70 text-muted-foreground hover:text-foreground'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="max-w-4xl mx-auto space-y-8">
        {filteredData.map((item, index) => (
          <div 
            key={index}
            className="group relative p-7 sm:p-9 rounded-3xl bg-background/90 dark:bg-card/90 border border-border/80 dark:border-white/10 hover:border-primary/50 shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1"
          >
            {/* Header info */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-border/60 dark:border-white/10">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-1.5">
                  <h3 className="font-grotesk font-bold text-xl sm:text-2xl text-foreground">
                    {item.company}
                  </h3>
                  {item.highlightBadge && (
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold font-grotesk tracking-wide ${
                      item.highlightBadge.type === 'gold'
                        ? 'bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/30'
                        : item.highlightBadge.type === 'cyan'
                        ? 'bg-cyan-500/15 text-cyan-600 dark:text-cyan-400 border border-cyan-500/30'
                        : 'bg-blue-500/15 text-blue-600 dark:text-blue-400 border border-blue-500/30'
                    }`}>
                      <Sparkles className="w-3 h-3 mr-1" />
                      {item.highlightBadge.label}
                    </span>
                  )}
                </div>
                <h4 className="font-semibold text-primary text-sm sm:text-base">
                  {item.role}
                </h4>
              </div>

              <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between text-xs text-muted-foreground shrink-0 gap-1 font-mono">
                <span className="inline-flex items-center px-2.5 py-1 rounded-lg bg-secondary/80 dark:bg-card/80 border border-border/60 text-foreground font-semibold">
                  <Calendar className="w-3 h-3 mr-1.5 text-primary" />
                  {item.date}
                </span>
                <span className="inline-flex items-center text-[11px] text-muted-foreground">
                  <MapPin className="w-3 h-3 mr-1 text-primary" />
                  {item.location}
                </span>
              </div>
            </div>

            {/* Achievements bullets */}
            <div className="py-6">
              <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground block mb-3 font-grotesk">
                Key Accomplishments &amp; Strategic Deliverables:
              </span>
              <ul className="space-y-3 text-xs sm:text-sm text-foreground/85">
                {item.achievements.map((ach, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span className="leading-relaxed">{ach}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tags footer */}
            <div className="pt-4 border-t border-border/40 flex flex-wrap gap-2">
              {item.tags.map((tag, i) => (
                <Badge key={i} variant="secondary" className="text-xs font-normal bg-secondary/70">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};