import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, BrainCircuit, Shield, Clock, Calculator, Target, Cpu, TrendingUp } from 'lucide-react';
import { Section, SectionHeader, SectionLabel, SectionTitle, TextGradient } from '@/components/portfolio/Section';

const projectsData = [
  {
    featured: true,
    image: "/images/designcalculators.png",
    title: "DesignCalculators.co.in",
    badge: "Engineering Cloud",
    description: "A massive library of 150+ calculators for electrical, mechanical, and instrumentation engineering.",
    caseStudy: {
      goal: "Centralize multi-disciplinary engineering calculations under one digital roof.",
      action: "Built a standards-based validator suite for NFPA, IEEE, and ASME.",
      result: "70% reduction in design cycles with high-precision digital validation."
    },
    metrics: ["150+ Calculators", "Multi-Disciplinary", "Standardized"],
    link: "http://designcalculators.co.in",
  },
  {
    image: "/images/reliabilitytools.png",
    title: "ReliabilityTools.co.in",
    badge: "Industrial Engineering",
    description: "A professional-grade reliability suite for industrial modeling and asset optimization.",
    caseStudy: {
      goal: "Eliminate manual modeling errors in complex reliability calculations.",
      action: "Engineered a high-precision toolkit for MTBF, Weibull, and RBD modeling.",
      result: "Standardized reliability modeling for global maintenance professionals."
    },
    metrics: ["MTBF", "Weibull Analysis", "Availability"],
    link: "https://reliabilitytools.co.in",
  },
  {
    image: "/images/electrosafe.png",
    title: "ElectroSafe.homes",
    badge: "Public Safety",
    description: "Global guide to fire prevention and electrical safety for modern households.",
    caseStudy: {
      goal: "Bridge the expertise gap in home electrical safety for non-technical users.",
      action: "Launched 30+ interactive risk assessors and safety calculators.",
      result: "Empowering homeowners worldwide with actionable fire prevention data."
    },
    metrics: ["Fire Prevention", "Risk Assessment", "Global Guides"],
    link: "https://electrosafe.homes",
  },
];

export const Projects = () => {
  return (
    <Section id="projects" className="bg-slate-950/5 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
      
      <SectionHeader>
        <SectionLabel>Innovation Hub</SectionLabel>
        <SectionTitle>
          Digital Solutions for <TextGradient>Engineering Excellence</TextGradient>
        </SectionTitle>
      </SectionHeader>

      <div className="grid gap-12 lg:gap-16">
        {projectsData.map((project, index) => (
          <div 
            key={index}
            className="group relative"
            itemScope itemType="https://schema.org/CreativeWork"
          >
            {/* Background Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-[2rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            
            <Card className="relative bg-background/80 backdrop-blur-xl border border-border/50 rounded-[2rem] overflow-hidden shadow-2xl transition-all duration-500 group-hover:translate-y-[-4px]">
              <div className="flex flex-col lg:flex-row">
                {/* Logo & Visual Area */}
                <div className="lg:w-1/3 p-8 lg:p-12 flex flex-col items-center justify-center bg-secondary/30 relative">
                  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,var(--primary)_0,transparent_70%)]"></div>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="relative z-10 transition-all duration-700 group-hover:scale-110 flex items-center justify-center h-48 w-full px-4">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      itemProp="image" 
                      className="max-h-full max-w-full object-contain drop-shadow-2xl" 
                    />
                  </a>
                  <div className="mt-8 flex flex-wrap gap-2 justify-center z-10">
                    {project.metrics.map((metric, mIndex) => (
                      <span key={mIndex} className="px-3 py-1 bg-background/50 border border-border/50 text-[10px] font-bold uppercase tracking-widest rounded-full opacity-70 group-hover:opacity-100 transition-opacity">
                        {metric}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Content Area */}
                <div className="lg:w-2/3 p-8 lg:p-12 flex flex-col">
                  <div className="flex justify-between items-center mb-4">
                    <Badge variant="outline" className="text-primary border-primary/20 px-4 py-1 rounded-full uppercase tracking-widest text-[10px]">
                      {project.badge}
                    </Badge>
                  </div>
                  
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-block group/title">
                    <h3 className="text-3xl lg:text-4xl font-bold font-grotesk mb-4 group-hover/title:text-primary transition-colors" itemProp="name">
                      {project.title}
                    </h3>
                  </a>
                  
                  <p className="text-lg text-muted-foreground mb-8 line-clamp-2" itemProp="description">
                    {project.description}
                  </p>

                  <div className="grid md:grid-cols-3 gap-6 mb-8 relative">
                    {/* The Process Timeline Effect */}
                    <div className="absolute top-1/2 left-0 right-0 h-px bg-border/50 hidden md:block"></div>
                    
                    {[
                      { label: "Goal", value: project.caseStudy.goal, icon: Target, color: "text-blue-500" },
                      { label: "Action", value: project.caseStudy.action, icon: Cpu, color: "text-primary" },
                      { label: "Result", value: project.caseStudy.result, icon: TrendingUp, color: "text-green-500" },
                    ].map((step, sIndex) => (
                      <div key={sIndex} className="relative z-10 bg-background/50 backdrop-blur-sm p-4 rounded-xl border border-border/50">
                        <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center mb-3 bg-secondary/50", step.color)}>
                          <step.icon className="w-5 h-5" />
                        </div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-1">{step.label}</p>
                        <p className="text-xs font-medium leading-relaxed">{step.value}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto flex items-center justify-between">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" itemProp="url" className="w-full sm:w-auto">
                      <Button size="lg" className="group/btn w-full sm:w-auto px-8 rounded-full">
                        Explore Platform
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                      </Button>
                    </a>
                    <span className="hidden sm:block text-[10px] font-bold text-muted-foreground tracking-tighter uppercase">
                      Engineering Innovation 
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </Section>
  );
};

// Helper function for class merging since cn is often used in this project
function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ');
}