import { Settings, Zap, Bot, Presentation, Shield, Laptop, CheckCircle2 } from 'lucide-react';
import { Section, SectionHeader, SectionLabel, SectionTitle, TextGradient } from '@/components/portfolio/Section';
import { SpotlightCard } from '@/components/ui/SpotlightCard';

const expertiseData = [
  { icon: Settings, title: "Reliability & Integrity", description: "Focused on keeping industrial plants running without breakdowns using RCM and TPM.", features: ["Asset Integrity Management (AIM)", "Risk-Based Inspection (RBI)", "TPM & Lean Maintenance", "RCA & FMEA Expert"] },
  { icon: Zap, title: "Electrical Systems", description: "Management of high-voltage power systems and critical industrial assets.", features: ["HT/LT System Reliability", "Infrastructure Protection", "Manpower Optimization", "Condition Monitoring"] },
  { icon: Bot, title: "Smart Automation", description: "Implementing SCADA and DCS for better control and efficiency in manufacturing.", features: ["Digital Twin Strategy", "Distributed Control (DCS)", "Intelligent Load Management", "Digital Transformation"] },
  { icon: Presentation, title: "Technical Mentorship", description: "Helpful training for engineers as a SHRM Certified facilitator.", features: ["Leadership Mentoring", "Technical Facilitation", "Change Management", "Skill Building"] },
  { icon: Shield, title: "Risk & Standards", description: "Ensuring safety by following global engineering standards with a simple mindset.", features: ["Process Safety (NFPA/IEEE)", "ISO 55000 (Asset Mgmt)", "Root Cause Mastery", "Safety Culture Design"] },
  { icon: Laptop, title: "Digital Solutions", description: "Building free engineering tools to help students and working professionals.", features: ["Tool Conceptualization", "Engineering Algorithms", "Free Community Resources", "Ad-Free Platforms"] },
];

export const Expertise = () => {
  return (
    <Section id="expertise">
      <SectionHeader>
        <SectionLabel>Core Competencies</SectionLabel>
        <SectionTitle>
          A Spectrum of <TextGradient>Technical Expertise</TextGradient>
        </SectionTitle>
      </SectionHeader>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
        {expertiseData.map((item, index) => (
          <SpotlightCard 
            key={index} 
            spotlightColor="rgba(59, 130, 246, 0.3)"
            className="p-6 sm:p-7 rounded-3xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="font-grotesk font-bold text-lg sm:text-xl text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-xs sm:text-sm mb-6 leading-relaxed">{item.description}</p>
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm pt-4 border-t border-border/50">
              {item.features.map((feature, i) => (
                <li key={i} className="flex items-center text-foreground/90 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-primary mr-2 shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </SpotlightCard>
        ))}
      </div>
    </Section>
  );
};