import React from 'react';
import { 
  BrainCircuit, 
  Cpu, 
  ShieldCheck, 
  Terminal, 
  Layers, 
  Lock, 
  Zap, 
  CheckCircle2, 
  Sparkles,
  Code2,
  ServerOff
} from 'lucide-react';
import { Section, SectionHeader, SectionLabel, SectionTitle, TextGradient } from '@/components/portfolio/Section';
import { SpotlightCard } from '@/components/ui/SpotlightCard';
import { cn } from '@/lib/utils';

const architecturePillars = [
  {
    id: 'ai-safety',
    icon: BrainCircuit,
    iconColor: 'text-indigo-500',
    iconBg: 'bg-indigo-500/10 border-indigo-500/20',
    title: 'AI Safety Engines',
    badge: 'RAG & Semantic Guardrails',
    badgeColor: 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20',
    spotlightColor: 'rgba(99, 102, 241, 0.35)',
    hoverBorder: 'hover:border-indigo-500/50',
    summary: 'Custom Prompt Engineering & RAG architectures ensuring engineering safety and calculation assistants are strictly grounded in verified IEEE, IEC, OSHA, and IS standards.',
    technicalDetails: [
      'Deterministic safety constraints preventing LLM hallucination',
      'Contextual retrieval against OSHA 1910/1926 and IS 5216 standards',
      'Zero-shot hazard-to-mitigation mapping algorithms'
    ],
    techStack: ['RAG Architectures', 'Few-Shot Grounding', 'OSHA / IS Vectors']
  },
  {
    id: 'physics-engines',
    icon: Cpu,
    iconColor: 'text-cyan-500',
    iconBg: 'bg-cyan-500/10 border-cyan-500/20',
    title: 'High-Performance Physics',
    badge: 'Browser-Native Float64',
    badgeColor: 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20',
    spotlightColor: 'rgba(6, 182, 212, 0.35)',
    hoverBorder: 'hover:border-cyan-500/50',
    summary: 'Browser-native physics engines powering LiveSimulators, allowing complex electrical transient calculations to run instantly on low-end student hardware.',
    technicalDetails: [
      'Sub-millisecond numerical solvers running in client main thread',
      'First-principles differential equations for RLC and switching dynamics',
      'Zero server round-trips for real-time slider updates'
    ],
    techStack: ['Float64 Numerical Solvers', 'WebAssembly / Native JS', '60 FPS Canvas']
  },
  {
    id: 'zero-tracker',
    icon: ShieldCheck,
    iconColor: 'text-emerald-500',
    iconBg: 'bg-emerald-500/10 border-emerald-500/20',
    title: 'Zero-Ad, Zero-Tracker Architecture',
    badge: 'Privacy-First & Air-Gapped',
    badgeColor: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
    spotlightColor: 'rgba(16, 185, 129, 0.35)',
    hoverBorder: 'hover:border-emerald-500/50',
    summary: 'Engineered with privacy-first, lightweight frameworks to ensure a 100% distraction-free learning environment.',
    technicalDetails: [
      'Zero telemetry, tracking pixels, or third-party ad scripts',
      'Air-gapped calculation models where confidential plant data never leaves browser',
      'Lightweight PWA offline-ready bundles delivered via edge CDN'
    ],
    techStack: ['Zero Telemetry', 'Air-Gapped Math', 'Edge Cache Architecture']
  }
];

export const ToolArchitecture: React.FC = () => {
  return (
    <Section id="architecture" className="relative py-20 bg-secondary/30 dark:bg-card/30 border-y border-border/70 overflow-hidden">
      {/* Background Ambience */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(rgba(59,130,246,0.06)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="relative z-10">
        
        {/* Section Header */}
        <SectionHeader className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-primary mb-3">
            <Code2 className="w-3.5 h-3.5" />
            <span>FULL-STACK SYSTEM DESIGN &bull; ARCHITECTURE OF OPEN ACCESS</span>
          </div>
          
          <SectionLabel>Under The Hood</SectionLabel>
          <SectionTitle>
            The Engineering Behind <TextGradient>The Tools</TextGradient>
          </SectionTitle>

          <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
            How these platforms maintain sub-second response times, zero running costs for users, and scale seamlessly to hundreds of thousands of engineers without corporate server overhead.
          </p>
        </SectionHeader>

        {/* 3 Architecture Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 max-w-6xl mx-auto mt-12">
          {architecturePillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <SpotlightCard 
                key={pillar.id}
                spotlightColor={pillar.spotlightColor}
                className={cn(
                  "group relative rounded-2xl bg-background/80 dark:bg-[#0B0F19]/90 border border-border/80 dark:border-white/10 p-6 sm:p-7 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between backdrop-blur-md",
                  pillar.hoverBorder
                )}
              >
                <div>
                  {/* Icon & Badge Header */}
                  <div className="flex items-start justify-between gap-3 mb-5">
                    <div className={`w-12 h-12 rounded-xl ${pillar.iconBg} border flex items-center justify-center ${pillar.iconColor} shadow-inner group-hover:scale-105 transition-transform duration-300`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${pillar.badgeColor}`}>
                      {pillar.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold font-grotesk text-foreground mb-3 group-hover:text-primary transition-colors">
                    {pillar.title}
                  </h3>

                  {/* Core Content Strategy Statement */}
                  <p className="text-sm text-foreground/90 font-medium leading-relaxed mb-5">
                    &ldquo;{pillar.summary}&rdquo;
                  </p>

                  {/* Technical Bullet Details */}
                  <div className="space-y-2 mb-6 pt-4 border-t border-border/60">
                    {pillar.technicalDetails.map((detail, dIdx) => (
                      <div key={dIdx} className="flex items-start space-x-2 text-xs text-muted-foreground">
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                        <span className="leading-snug">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack Tags Footer */}
                <div className="pt-4 border-t border-border/60">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground/70 block mb-2">
                    Implementation Primitives:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {pillar.techStack.map((tech, tIdx) => (
                      <span 
                        key={tIdx} 
                        className="px-2 py-0.5 rounded-md bg-secondary/80 dark:bg-secondary/40 text-[10px] font-mono font-medium text-foreground/80 border border-border/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </SpotlightCard>
            );
          })}
        </div>

        {/* Bottom Architectural Guarantee Ribbon */}
        <div className="mt-12 max-w-4xl mx-auto p-4 sm:p-5 rounded-2xl bg-background/60 dark:bg-card/40 border border-border/80 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-sm">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-xl bg-blue-500/10 text-primary flex items-center justify-center shrink-0">
              <Zap className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold font-grotesk text-foreground">
                Independent Builder Mindset
              </h4>
              <p className="text-xs text-muted-foreground">
                Built strictly for community empowerment—proving that enterprise-grade engineering intelligence can be fast, free, and privacy-first.
              </p>
            </div>
          </div>
          <span className="inline-flex items-center text-[11px] font-mono text-primary font-bold shrink-0 bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
            Client-Side &bull; Zero Server Latency
          </span>
        </div>

      </div>
    </Section>
  );
};
