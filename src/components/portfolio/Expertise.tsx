import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Settings, Zap, Bot, Presentation, Shield, Laptop } from 'lucide-react';
import { Section, SectionHeader, SectionLabel, SectionTitle, TextGradient } from '@/components/portfolio/Section';

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
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {expertiseData.map((item, index) => (
          <Card key={index} className="hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <CardHeader>
              <item.icon className="w-10 h-10 mb-4 text-primary" />
              <CardTitle>{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{item.description}</p>
              <ul className="space-y-2 text-sm">
                {item.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
};