import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Settings, Zap, Bot, Presentation, Shield, Laptop } from 'lucide-react';
import { Section, SectionHeader, SectionLabel, SectionTitle, TextGradient } from '@/components/portfolio/Section';

const expertiseData = [
  { icon: Settings, title: "Reliability Engineering", description: "Enhancing asset performance and lifecycle through proven methodologies.", features: ["RCA & FMEA", "Asset Lifecycle Management", "Predictive Maintenance", "SAP-PM"] },
  { icon: Zap, title: "Electrical & Instrumentation", description: "Expertise in power systems, drives, and control instrumentation.", features: ["UPS, Inverters, Batteries", "HT/LT Motors & Switch-yards", "MCC/PCC", "CP Systems"] },
  { icon: Bot, title: "Automation Systems", description: "Implementing robust automation for process and building efficiency.", features: ["PLC & DCS", "SCADA Systems", "OFC Networks", "Load Shedding Systems"] },
  { icon: Presentation, title: "Training & Development", description: "Designing and delivering high-impact technical training as a SHRM Certified Trainer.", features: ["Technical Facilitation", "Learning Design", "Leadership Mentoring", "Safety Programs"] },
  { icon: Shield, title: "Standards & Compliance", description: "Ensuring operational safety and excellence through rigorous standards.", features: ["IEC 61508, NFPA, IS/IEEE", "ISO 9001/14001/55000", "Safety Audits", "Risk Assessment"] },
  { icon: Laptop, title: "AI & Digital Solutions", description: "Developing innovative AI-powered and web-based engineering tools.", features: ["AI-Based Tool Development", "Web Safety Applications", "User-Centric UI Design", "Engineering Calculators"] },
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