import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, BrainCircuit, Shield, Clock, Calculator } from 'lucide-react';
import { Section, SectionHeader, SectionLabel, SectionTitle, TextGradient } from '@/components/portfolio/Section';

const projectsData = [
  {
    featured: true,
    image: "/placeholder.svg",
    title: "ToolboxTalk.co.in",
    badge: "AI-Powered Safety",
    description: "Independently designed and launched India’s first AI-powered free platform that enables site engineers and supervisors to instantly generate structured toolbox talks by simply entering the work activity. The tool intelligently maps hazards, risk scenarios, and mitigation plans based on industry safety norms (IEC, OSHA, IS).",
    features: [
      { icon: BrainCircuit, text: "AI Generation" },
      { icon: Shield, text: "Safety Focused" },
      { icon: Clock, text: "Instant Results" },
    ],
    link: "http://toolboxtalk.co.in",
  },
  {
    image: "/placeholder.svg",
    title: "DesignCalculators.co.in",
    badge: "Free Engineering Tools",
    description: "Initiated and built a free online engineering calculators platform enabling electrical, mechanical, and instrumentation engineers to perform precise calculations aligned with international standards (IEC, IEEE, NFPA, NEC, ASME, etc.).",
    tags: ["Calculators", "Standards", "Engineering", "Free Resource"],
    link: "http://designcalculators.co.in",
  },
];

export const Projects = () => {
  return (
    <Section id="projects">
      <SectionHeader>
        <SectionLabel>Innovation Hub</SectionLabel>
        <SectionTitle>
          Digital Solutions for <TextGradient>Engineering Excellence</TextGradient>
        </SectionTitle>
      </SectionHeader>
      <div className="grid lg:grid-cols-2 gap-8">
        {projectsData.map((project, index) => (
          <Card key={index} className={project.featured ? "lg:col-span-2 flex flex-col md:flex-row overflow-hidden" : "overflow-hidden flex flex-col"}>
            <div className={project.featured ? "md:w-1/2" : ""}>
              <img src={project.image} alt={project.title} className="w-full h-48 md:h-full object-cover" />
            </div>
            <div className={project.featured ? "md:w-1/2 p-8 flex flex-col" : "p-6 flex flex-col flex-grow"}>
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-xl">{project.title}</h3>
                <Badge>{project.badge}</Badge>
              </div>
              <p className="text-muted-foreground flex-grow">{project.description}</p>
              {project.features && (
                <div className="flex space-x-4 my-4">
                  {project.features.map((feature, i) => (
                    <div key={i} className="flex items-center text-sm">
                      <feature.icon className="w-4 h-4 mr-2 text-primary" />
                      <span>{feature.text}</span>
                    </div>
                  ))}
                </div>
              )}
              {project.tags && (
                <div className="flex flex-wrap gap-2 my-4">
                  {project.tags.map((tag, i) => (
                    <Badge key={i} variant="outline">{tag}</Badge>
                  ))}
                </div>
              )}
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="mt-auto">
                <Button className="w-full group mt-4">
                  {project.featured ? "Explore Platform" : "Visit Site"}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};