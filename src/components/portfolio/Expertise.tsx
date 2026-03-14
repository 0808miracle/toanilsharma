import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Settings, Zap, Bot, Presentation, Shield, Laptop } from 'lucide-react';
import { Section, SectionHeader, SectionLabel, SectionTitle, TextGradient } from '@/components/portfolio/Section';

const expertiseData = [
  { icon: Settings, title: "Reliability Engineering", description: "Driving Operational Excellence through proven RCM and TPM methodologies.", features: ["RCA & FMEA (Expert)", "Asset Lifecycle Management", "TPM & Lean Maintenance", "Predictive Analytics"] },
  { icon: Zap, title: "Electrical & Instrumentation", description: "Management of critical power systems and high-value industrial assets.", features: ["HT/LT System Reliability", "Infrastructure Protection", "Manpower Optimization", "Condition Monitoring"] },
  { icon: Bot, title: "Automation & Industry 4.0", description: "Strategic implementation of SCADA and DCS for smart manufacturing.", features: ["Digital Transformation", "Distributed Control (DCS)", "Intelligent Load Management", "Network Resilience"] },
  { icon: Presentation, title: "Strategic Mentorship", description: "Cultivating technical leadership as a SHRM Certified technical facilitator.", features: ["Leadership Mentorship", "Technical Facilitation", "Change Management", "Capability Building"] },
  { icon: Shield, title: "Risk & Compliance", description: "Zero-breakdown mindset applied to global safety and quality standards.", features: ["Process Safety (NFPA/IEEE)", "ISO 55000 (Asset Mgmt)", "Root Cause Mastery", "Safety Culture Design"] },
  { icon: Laptop, title: "Technical Philanthropy", description: "Building high-precision digital tools to democratize engineering knowledge.", features: ["Tool Conceptualization", "Engineering Algorithm Dev", "Community Resource Design", "Ad-Free Safety Platforms"] },
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