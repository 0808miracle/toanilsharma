import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { SpotlightCard } from '@/components/ui/SpotlightCard';
import { ArrowRight, BrainCircuit, Shield, Clock, Calculator, Target, Cpu, TrendingUp, ExternalLink } from 'lucide-react';
import { Section, SectionHeader, SectionLabel, SectionTitle, TextGradient } from '@/components/portfolio/Section';

const projectsData = [
  {
    featured: true,
    image: "/images/livesimulators.svg",
    title: "LiveSimulators.com",
    badge: "Virtual Laboratory Cloud",
    description: "An advanced suite of 65+ interactive first-principles browser simulations and virtual engineering laboratories covering Power Electronics, Power Systems & Grid Automation, SafeOps UPS, ElectroLive Safety, and Turbomachinery.",
    caseStudy: {
      goal: "Eliminate abstract theoretical barriers by turning complex engineering equations into interactive browser physics.",
      action: "Built real-time float64 numerical solvers for switching circuits, transient waveforms, and rotor dynamics.",
      result: "Real-time interactive experimentation in the browser with zero installation, 100% free."
    },
    metrics: ["Virtual Labs", "Float64 Physics", "Interactive Solvers"],
    link: "https://livesimulators.com",
  },
  {
    image: "/images/designcalculators.webp",
    title: "DesignCalculators.co.in",
    badge: "Engineering Cloud",
    description: "I created this massive library of 150+ calculators to help electrical, mechanical, and instrumentation engineers perform complex design validations with a 100% free and ad-free experience.",
    caseStudy: {
      goal: "Centralize multi-disciplinary engineering calculations under one digital roof.",
      action: "Built a standards-based validator suite for NFPA, IEEE, IEC, and ASME.",
      result: "70% reduction in design cycles with high-precision digital validation."
    },
    metrics: ["150+ Calculators", "Multi-Disciplinary", "Standardized"],
    link: "https://designcalculators.co.in",
  },
  {
    image: "/images/reliabilitytools.webp",
    title: "ReliabilityTools.co.in",
    badge: "Industrial Engineering",
    description: "Developed as a professional-grade suite to help the engineering community master industrial modeling and asset optimization through high-precision, accessible digital tools.",
    caseStudy: {
      goal: "Eliminate manual modeling errors in complex plant reliability calculations.",
      action: "Engineered a high-precision toolkit for MTBF, Weibull distribution, and RBD availability modeling.",
      result: "Standardized reliability modeling for global maintenance and plant asset managers."
    },
    metrics: ["MTBF Modeling", "Weibull Analysis", "Availability"],
    link: "https://reliabilitytools.co.in",
  },
  {
    image: "/images/electrosafe.webp",
    title: "ElectroSafe.homes",
    badge: "Public Safety",
    description: "My mission to spread safety awareness led to the creation of this global guide, providing homeowners and professionals with free access to critical electrical fire prevention data.",
    caseStudy: {
      goal: "Bridge the expertise gap in home electrical safety for non-technical users.",
      action: "Launched 30+ interactive risk assessors, breaker calculators, and safety guides.",
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
        <SectionLabel>Technical Philanthropy</SectionLabel>
        <SectionTitle>
          Empowering the Community through <TextGradient>Digital Innovation</TextGradient>
        </SectionTitle>
        <p className="mt-4 max-w-3xl mx-auto text-muted-foreground text-lg leading-relaxed">
          Beyond industrial leadership, my mission is to democratize high-precision engineering knowledge. 
          I have personally conceptualized and developed these suites to provide engineers, students, and professionals 
          with a <strong className="text-foreground">100% free, ad-free experience</strong>—fostering technical excellence and safety awareness worldwide.
        </p>
      </SectionHeader>

      <div className="grid gap-12 lg:gap-16">
        {projectsData.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group block cursor-pointer select-none text-left rounded-2xl sm:rounded-[2rem] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-all duration-500 hover:-translate-y-2"
            itemScope 
            itemType="https://schema.org/CreativeWork"
            aria-label={`Explore ${project.title}`}
          >
            {/* Background Glow */}
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-blue-500/20 to-cyan-500/20 rounded-2xl sm:rounded-[2rem] blur-xl opacity-20 group-hover:opacity-60 transition duration-500"></div>
              
              <SpotlightCard 
                spotlightColor="rgba(59, 130, 246, 0.35)"
                glowSize={450}
                className="relative bg-background/80 dark:bg-card/80 backdrop-blur-xl border border-border/60 group-hover:border-primary/60 rounded-2xl sm:rounded-[2rem] overflow-hidden shadow-2xl transition-all duration-500 group-hover:shadow-[0_15px_45px_rgba(0,102,255,0.2)]"
              >
                <div className="flex flex-col lg:flex-row">
                  {/* Logo & Visual Area */}
                  <div className="lg:w-1/3 p-4 sm:p-6 lg:p-12 flex flex-col items-center justify-center bg-secondary/30 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,var(--primary)_0,transparent_70%)]"></div>
                    <div className="relative z-10 transition-all duration-500 group-hover:scale-105 flex items-center justify-center h-32 sm:h-48 w-full px-4">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        itemProp="image" 
                        className="max-h-full max-w-full object-contain drop-shadow-2xl" 
                      />
                    </div>
                    <div className="mt-8 flex flex-wrap gap-2 justify-center z-10">
                      {project.metrics.map((metric, mIndex) => (
                        <span key={mIndex} className="px-3 py-1 bg-background/60 border border-border/60 text-[10px] sm:text-xs font-bold uppercase tracking-widest rounded-full opacity-80 group-hover:opacity-100 group-hover:border-primary/40 transition-all">
                          {metric}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className="lg:w-2/3 p-4 sm:p-6 lg:p-12 flex flex-col">
                    <div className="flex justify-between items-center mb-4">
                      <Badge variant="outline" className="text-primary border-primary/20 px-4 py-1 rounded-full uppercase tracking-widest text-[10px] sm:text-xs group-hover:bg-primary/10 transition-colors">
                        {project.badge}
                      </Badge>
                      <div className="inline-flex items-center gap-1.5 text-xs text-muted-foreground group-hover:text-primary transition-colors font-mono">
                        <span>Click to open platform</span>
                        <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    </div>
                    
                    <div className="inline-block group/title">
                      <h3 className="text-3xl lg:text-4xl font-bold font-grotesk mb-4 group-hover:text-primary transition-colors flex items-center justify-between" itemProp="name">
                        <span>{project.title}</span>
                      </h3>
                    </div>
                    
                    <p className="text-base sm:text-lg text-muted-foreground mb-8 line-clamp-3 sm:line-clamp-2 overflow-wrap-anywhere break-words leading-relaxed" itemProp="description">
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
                        <div key={sIndex} className="relative z-10 bg-background/60 dark:bg-secondary/40 backdrop-blur-sm p-4 rounded-xl border border-border/50 group-hover:border-primary/30 transition-colors">
                          <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center mb-3 bg-secondary/60", step.color)}>
                            <step.icon className="w-5 h-5" />
                          </div>
                          <p className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-muted-foreground mb-1">{step.label}</p>
                          <p className="text-xs sm:text-sm font-medium leading-relaxed">{step.value}</p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-auto flex items-center justify-between">
                      <div className="w-full sm:w-auto">
                        <Button 
                          size="lg" 
                          className="w-full sm:w-auto px-8 rounded-full group-hover:bg-primary group-hover:text-primary-foreground shadow-md transition-all duration-300"
                        >
                          <span>Explore Platform</span>
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1.5" />
                        </Button>
                      </div>
                      <span className="hidden sm:block text-[10px] font-bold text-muted-foreground tracking-tighter uppercase font-mono">
                        Free &bull; Open-Access &bull; Zero-Ads
                      </span>
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
};

// Helper function for class merging
function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ');
}