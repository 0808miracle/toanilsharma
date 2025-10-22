import { Badge } from '@/components/ui/badge';
import { CheckCircle } from 'lucide-react';
import { Section, SectionHeader, SectionLabel, SectionTitle, TextGradient } from '@/components/portfolio/Section';

const experienceData = [
  {
    company: "Reliance Industries Limited",
    date: "2008 - Present",
    role: "AGM – Central Engineering Services",
    achievements: [
      "Overseeing reliability for 15+ large-scale petrochemical plants and multiple townships.",
      "Led automation of 27 substations, removing the need for 39 personnel and boosting operational excellence.",
      "Improved system availability from 96% to 99% with an online compliance monitoring system.",
      "Mentored 40+ young professionals into senior roles through structured coaching.",
    ],
    tags: ["Multi-Site Management", "Automation", "Reliability", "Leadership"],
  },
  {
    company: "RIL - Petroleum Retail",
    date: "2004 - 2008",
    role: "Engineering Incharge (Commissioning & Reliability)",
    achievements: [
      "Directed end-to-end engineering commissioning across multiple sites in Punjab & Rajasthan, leading all technical disciplines.",
      "Delivered hands-on hazardous area training to 350+ technicians, achieving zero incidents.",
      "Served as RCA and Electrical Systems Trainer for in-house talent development.",
    ],
    tags: ["Project Management", "Safety Training", "Commissioning"],
  },
  {
    company: "Ambuja Cements Ltd.",
    date: "1995 - 2004",
    role: "Engineer – Electrical & Instrumentation",
    achievements: [
      "Participated in commissioning of a greenfield 2.5 MT Cement Plant.",
      "Spearheaded plant-wide automation and energy-saving projects, reducing energy usage by 2.5%.",
      "Automated substation and capacitor systems, improving power factor and system uptime.",
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
            <div className={`md:w-5/12 p-6 bg-background rounded-lg shadow-md ${index % 2 === 0 ? 'ml-auto md:ml-[54%]' : 'mr-auto md:mr-[54%] md:text-right'}`}>
              <div className={`flex items-start mb-2 ${index % 2 === 0 ? 'justify-between' : 'md:flex-row-reverse justify-between'}`}>
                <h3 className="font-bold text-lg">{item.company}</h3>
                <span className="text-sm text-muted-foreground">{item.date}</span>
              </div>
              <h4 className="font-semibold text-primary mb-4">{item.role}</h4>
              <ul className="space-y-2 mb-4">
                {item.achievements.map((ach, i) => (
                  <li key={i} className={`flex items-start text-sm ${index % 2 !== 0 && 'md:flex-row-reverse'}`}>
                    <CheckCircle className={`w-4 h-4 mt-0.5 text-green-500 flex-shrink-0 ${index % 2 === 0 ? 'mr-2' : 'md:ml-2'}`} />
                    <span>{ach}</span>
                  </li>
                ))}
              </ul>
              <div className={`flex flex-wrap gap-2 ${index % 2 !== 0 && 'md:justify-end'}`}>
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