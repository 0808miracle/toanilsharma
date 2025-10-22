import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Settings, Zap, Bot, Presentation, Shield, Laptop } from 'lucide-react';
import { Section, SectionHeader, SectionLabel, SectionTitle, TextGradient } from '@/components/portfolio/Section';

const expertiseData = [
  { icon: Settings, title: "Reliability Engineering", description: "Advanced RCM, FMEA, and RCA implementation for maximum asset performance.", features: ["Reliability Centered Maintenance", "Failure Mode Analysis", "Root Cause Analysis", "Asset Lifecycle Management"] },
  { icon: Zap, title: "Electrical Systems", description: "Comprehensive electrical infrastructure optimization and safety enhancement.", features: ["Power Distribution Systems", "UPS & Backup Solutions", "Motor Control Centers", "HT/LT Switchyards"] },
  { icon: Bot, title: "Industrial Automation", description: "Cutting-edge automation solutions for enhanced operational efficiency.", features: ["PLC Programming & Integration", "SCADA Systems", "DCS Implementation", "Process Optimization"] },
  { icon: Presentation, title: "Training & Development", description: "Transformative training programs that build high-performing technical teams.", features: ["Technical Skills Development", "Safety Training Programs", "Leadership Development", "SHRM Certified Training"] },
  { icon: Shield, title: "Safety & Compliance", description: "Ensuring operational excellence through rigorous safety standards.", features: ["IEC 61508 Compliance", "NFPA Standards", "Safety Audits", "Risk Assessment"] },
  { icon: Laptop, title: "Digital Solutions", description: "Innovative engineering tools and AI-powered platforms.", features: ["AI-Based Safety Tools", "Engineering Calculators", "Web Applications", "Technical Consulting"] },
];

export const Expertise = () => {
  return (
    <Section id="expertise">
      <SectionHeader>
        <SectionLabel>What I Do</SectionLabel>
        <SectionTitle>
          Comprehensive <TextGradient>Reliability Solutions</TextGradient>
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