import { Badge } from '@/components/ui/badge';
import { CheckCircle } from 'lucide-react';
import { Section, SectionHeader, SectionLabel, SectionTitle, TextGradient } from '@/components/portfolio/Section';

const experienceData = [
  {
    company: "Reliance Industries Limited",
    date: "2008 - Present",
    role: "AGM – Central Engineering Services",
    achievements: [
      "Automated 27 substations, redeploying 39 personnel",
      "Increased system availability from 96% to 99%",
      "Reduced spares inventory by 50% through optimization",
    ],
    tags: ["Automation", "Reliability", "Cost Optimization"],
  },
  {
    company: "RIL Petroleum Retail",
    date: "2004 - 2008",
    role: "Commissioning & Reliability Lead",
    achievements: [
      "Led commissioning of 15 high-automation retail outlets",
      "Trained 350+ technicians in hazardous area operations",
      "Achieved record-time project delivery",
    ],
    tags: ["Project Management", "Safety Training", "Commissioning"],
  },
  {
    company: "Ambuja Cements Ltd.",
    date: "1995 - 2004",
    role: "Engineer – Electrical & Instrumentation",
    achievements: [
      "Commissioned greenfield 2.5 MT Cement Plant",
      "Reduced energy consumption by 2.5%",
      "Implemented plant-wide automation systems",
    ],
    tags: ["Energy Efficiency", "Plant Commissioning", "Automation"],
  },
];

export const Experience = () => {
  return (
    <Section id="experience" className="bg-secondary">
      <SectionHeader>
        <SectionLabel>Career Journey</SectionLabel>
        <SectionTitle>
          28 Years of <TextGradient>Industry Leadership</TextGradient>
        </SectionTitle>
      </SectionHeader>
      <div className="relative">
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-border"></div>
        {experienceData.map((item, index) => (
          <div key={index} className="relative mb-12">
            <div className="absolute left-1/2 -translate-x-1/2 top-1 w-4 h-4 bg-primary rounded-full border-4 border-secondary"></div>
            <div className="md:w-5/12 p-6 bg-background rounded-lg shadow-md ml-auto md:ml-[54%]">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-lg">{item.company}</h3>
                <span className="text-sm text-muted-foreground">{item.date}</span>
              </div>
              <h4 className="font-semibold text-primary mb-4">{item.role}</h4>
              <ul className="space-y-2 mb-4">
                {item.achievements.map((ach, i) => (
                  <li key={i} className="flex items-start text-sm">
                    <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-green-500 flex-shrink-0" />
                    <span>{ach}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag, i) => (
                  <Badge key={i} variant="secondary">{tag}</Badge>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};