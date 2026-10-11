import { useState, useMemo } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Section, SectionHeader, SectionLabel, SectionTitle, TextGradient } from "./Section";
import { SpotlightCard } from '@/components/ui/SpotlightCard';
import { 
  HelpCircle, 
  Search, 
  ShieldCheck, 
  Zap, 
  BookOpen, 
  Sparkles,
  ExternalLink,
  CheckCircle2
} from "lucide-react";

interface FAQItem {
  category: 'all' | 'philosophy' | 'tools' | 'credentials';
  question: string;
  answer: string;
  highlights?: string[];
  reference?: string;
}

const faqData: FAQItem[] = [
  {
    category: 'credentials',
    question: "Who is Anil Sharma and what is his core industrial leadership background?",
    answer: "Anil Sharma is an industrial engineering leader with over 28 years of continuous process experience across petrochemical and heavy manufacturing complexes. Currently serving as Deputy General Manager (DGM) – Central Engineering Services at Reliance Industries Limited, he specializes in plant reliability (RCM/FMEA), high-reliability electrical distribution, automated switchyards, and technical capability building.",
    highlights: [
      "28+ years continuous operations leadership (Reliance Industries, Ambuja Cements)",
      "DNV GL Certified IMS Lead Auditor (ISO 9001 / 14001 / 45001)",
      "SHRM Certified Facilitator & Master Technical Trainer (200+ engineers upskilled)"
    ],
    reference: "ISO 55000 / IEEE Reliability Society"
  },
  {
    category: 'philosophy',
    question: "What is the 'Zero-Breakdown Mindset' in reliability engineering?",
    answer: "The Zero-Breakdown Mindset is a foundational paradigm shift where industrial maintenance is treated as an investment in operational uptime rather than an unavoidable expense. By deploying SAE JA1011 RCM, AIAG/VDA FMEA, and Root Cause Analysis (RCA), plant teams transition from frantic reactive firefighting to predictive asset integrity, targeting 100% operational uptime.",
    highlights: [
      "Breakdowns recognized as preventable system design failures, not machine destiny",
      "Field-proven 38% reduction in unplanned trips across continuous process complexes",
      "Substantial spares optimization releasing tied-up inventory capital via SAP-PM"
    ],
    reference: "SAE JA1011 / AIAG & VDA FMEA"
  },
  {
    category: 'tools',
    question: "Are these engineering tools commercial or associated with his corporate employment?",
    answer: "No. All web platforms (LiveSimulators.com, DesignCalculators.co.in, ReliabilityTools.co.in, ElectroSafe.homes) are conceived and engineered independently as a personal, non-commercial technical philanthropy initiative. They are 100% free, ad-free, air-gapped, and created solely for student education, engineering interview preparation, and community skill development.",
    highlights: [
      "100% Free Forever • Zero Ads • Zero Paywalls",
      "Air-gapped client-side calculations: confidential plant data never leaves your browser",
      "Float64 first-principles numerical physics running directly in modern browsers"
    ],
    reference: "Non-Commercial Technical Philanthropy"
  },
  {
    category: 'credentials',
    question: "What industries, voltage levels, and critical systems does Anil Sharma specialize in?",
    answer: "With nearly three decades of hands-on industrial leadership, Anil Sharma specializes in continuous petrochemical manufacturing, continuous cement plants, and high-voltage grid infrastructure. His domain covers 220kV down to 6.6kV/415V electrical distribution, automated fast load shedding architectures, critical 2N industrial UPS dual-bus synchronization, and turbomachinery rotor dynamics.",
    highlights: [
      "220kV / 66kV / 11kV Substation Design & Automated Load Shedding",
      "Hazardous Area Compliance (Zone 0/1/2, NFPA 70E, IEC 60079)",
      "Critical turbomachinery protection & API 617 / 670 vibration telemetry"
    ],
    reference: "IEEE 399 / IEC 60909 / API 617"
  },
  {
    category: 'tools',
    question: "How do the browser simulators achieve 60 FPS real-time physics without server lag?",
    answer: "The simulators are built from first principles using optimized Float64 numerical integration algorithms and client-side HTML5 Canvas pipelines. By running ordinary differential equations (ODEs) and Fourier transforms directly on the user's hardware via JavaScript/WebAssembly, the tools achieve sub-millisecond response times with zero network round-trips.",
    highlights: [
      "Float64 precision solvers matching professional SPICE / MATLAB outputs",
      "Instantaneous slider updates running at steady 60 frames per second",
      "Zero server overhead: completely accessible on low-bandwidth student connections"
    ],
    reference: "IEEE 754 Floating-Point Standard"
  },
  {
    category: 'philosophy',
    question: "What mentorship and capability-building programs has Anil Sharma facilitated?",
    answer: "As an SHRM Certified Facilitator and 4-time recipient of the Top Trainer Award at Reliance Industries Academy, Anil Sharma has designed and delivered over 80 specialized technical masterclasses. He has mentored more than 200 engineers in power systems, switchgear arc flash safety, FMEA criticality, and leadership operational excellence.",
    highlights: [
      "80+ Specialized E&I Reliability & Safety Masterclasses designed",
      "Net Promoter Score (NPS) consistently exceeding 95% among corporate participants",
      "Development of 40+ next-generation plant leaders and maintenance supervisors"
    ],
    reference: "SHRM Facilitator & Corporate Academy Accreditation"
  }
];

export const FAQ = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredFaqs = useMemo(() => {
    return faqData.filter(item => {
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const matchesSearch = 
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <Section id="faq" className="relative py-24 bg-secondary/20 dark:bg-card/20 overflow-hidden">
      {/* Background radial glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-primary/5 rounded-full blur-[130px] pointer-events-none" 
        aria-hidden="true" 
      />

      <SectionHeader>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-mono font-semibold text-primary mb-3">
          <BookOpen className="w-3.5 h-3.5" />
          <span>VERIFIED ENGINEERING KNOWLEDGE BASE</span>
        </div>
        <SectionLabel>Knowledge Repository</SectionLabel>
        <SectionTitle>
          Frequently Asked <TextGradient>Questions &amp; Insights</TextGradient>
        </SectionTitle>
        <p className="mt-3 max-w-2xl mx-auto text-muted-foreground text-sm sm:text-base">
          Detailed technical answers addressing reliability methodology, open-access architecture, 
          and professional engineering scope.
        </p>
      </SectionHeader>

      <div className="max-w-4xl mx-auto space-y-6">
        {/* Search & Category Filter Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-2 rounded-2xl bg-background/80 dark:bg-[#0B0F19]/80 border border-border/70 dark:border-white/10 backdrop-blur-md shadow-sm">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-1 w-full sm:w-auto">
            {[
              { id: 'all', label: 'All Queries' },
              { id: 'philosophy', label: 'RCM & Philosophy' },
              { id: 'tools', label: 'Free Web Simulators' },
              { id: 'credentials', label: 'Leadership & Scope' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  selectedCategory === tab.id
                    ? 'bg-primary text-primary-foreground shadow-md shadow-primary/25'
                    : 'text-muted-foreground hover:text-foreground hover:bg-secondary/60'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Quick Filter Input */}
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search answers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 rounded-xl bg-secondary/50 dark:bg-card/50 border border-border/60 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>
        </div>

        {/* Accordion List */}
        <Accordion type="single" collapsible className="w-full space-y-3.5">
          {filteredFaqs.map((faq, index) => (
            <SpotlightCard key={index} className="border border-border/70 dark:border-white/10 rounded-2xl overflow-hidden shadow-sm">
              <AccordionItem value={`item-${index}`} className="border-0 px-6 py-1">
                <AccordionTrigger className="text-left font-bold font-grotesk text-sm sm:text-base hover:text-primary transition-colors py-4">
                  <div className="flex items-center gap-3 pr-2">
                    <div className="w-8 h-8 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      <HelpCircle className="w-4 h-4" />
                    </div>
                    <span>{faq.question}</span>
                  </div>
                </AccordionTrigger>
                
                <AccordionContent className="text-muted-foreground pb-5 pt-1 text-xs sm:text-sm leading-relaxed border-t border-border/40 mt-1">
                  <p className="mb-4 text-foreground/90 font-normal">
                    {faq.answer}
                  </p>

                  {faq.highlights && (
                    <div className="mb-4 p-3.5 rounded-xl bg-secondary/50 dark:bg-card/50 border border-border/50 space-y-2">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-primary block">
                        Key Takeaways:
                      </span>
                      {faq.highlights.map((h, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2 text-xs text-foreground/80">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {faq.reference && (
                    <div className="flex items-center justify-between pt-2 text-[10px] font-mono text-muted-foreground">
                      <span className="flex items-center gap-1.5">
                        <ShieldCheck className="w-3.5 h-3.5 text-primary" />
                        Standard Reference: {faq.reference}
                      </span>
                      <span className="text-primary font-semibold">100% Verified Rigor</span>
                    </div>
                  )}
                </AccordionContent>
              </AccordionItem>
            </SpotlightCard>
          ))}
        </Accordion>

        {filteredFaqs.length === 0 && (
          <div className="text-center py-12 p-6 rounded-2xl bg-background/50 border border-border/60">
            <p className="text-sm text-muted-foreground">No questions found matching &ldquo;{searchQuery}&rdquo;.</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
              className="mt-2 text-xs font-semibold text-primary hover:underline"
            >
              Reset Search Filter
            </button>
          </div>
        )}
      </div>
    </Section>
  );
};

export default FAQ;
