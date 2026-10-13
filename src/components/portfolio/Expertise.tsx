import { Settings, Zap, Bot, Presentation, Shield, Laptop, CheckCircle2 } from 'lucide-react';
import { Section, SectionHeader, SectionLabel, SectionTitle, TextGradient } from '@/components/portfolio/Section';
import { SpotlightCard } from '@/components/ui/SpotlightCard';

const expertiseData = [
  { icon: Settings, title: "Reliability & Integrity", description: "Focused on keeping industrial plants running without breakdowns using RCM and TPM.", features: ["RCM (SAE JA1011) & FMEA", "Root Cause Analysis (RCA)", "TPM & Lean Maintenance", "Zero-Breakdown Mindset"] },
  { icon: Zap, title: "Electrical Systems (HT/LT)", description: "Management of high-voltage power systems and critical industrial assets.", features: ["HT/LT Distribution & Substation Automation", "PLC Automated Load Shedding", "Arc Flash (NFPA 70E / IEEE 1584)", "Condition Monitoring"] },
  { icon: Bot, title: "Smart Automation & E&I", description: "Implementing SCADA, PLC, and DCS for better control and uptime in manufacturing.", features: ["E&I (Electrical & Instrumentation)", "F&G (Fire & Gas Systems)", "PLC & DCS Architectures", "Digital Twin & Telemetry"] },
  { icon: Presentation, title: "Technical Mentorship", description: "Corporate and technical facilitation for engineers as a SHRM Certified Facilitator.", features: ["Trained 200+ Engineers", "IMS Lead Auditor (ISO 9001/14001)", "Leadership Mentoring", "Process & Electrical Safety"] },
  { icon: Shield, title: "Risk & Standards", description: "Ensuring absolute safety by adhering to global engineering standards.", features: ["NFPA 70E / IEEE 1584 Arc Safety", "IEC & IEEE Substation Codes", "Asset Integrity Governance", "Root Cause Mastery"] },
  { icon: Laptop, title: "Digital Solutions & Free Tools", description: "Building free engineering tools to help students and working professionals.", features: ["DesignCalculators.co.in (150+)", "ReliabilityTools.co.in (Weibull)", "ElectroSafe.homes Fire Safety", "LiveSimulators.com (65+ Labs)"] },
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