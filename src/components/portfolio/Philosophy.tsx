import { Section, SectionHeader, SectionLabel, SectionTitle, TextGradient } from '@/components/portfolio/Section';
import { Quote } from 'lucide-react';

export const Philosophy = () => {
  return (
    <Section id="philosophy" className="relative overflow-hidden">
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      
      <SectionHeader>
        <SectionLabel>Core Philosophy</SectionLabel>
        <SectionTitle>
          The <TextGradient>Zero-Breakdown</TextGradient> Mindset
        </SectionTitle>
      </SectionHeader>
      
      <div className="max-w-4xl mx-auto">
        <div className="relative p-8 md:p-12 bg-secondary/50 rounded-2xl border border-border shadow-sm">
          <Quote className="absolute top-6 left-6 w-12 h-12 text-primary/10 -scale-x-100" />
          <div className="relative z-10">
            <p className="text-xl md:text-2xl font-medium leading-relaxed text-foreground italic">
              "Reliability is not just about fixing machines; it is about fostering a culture where every breakdown is seen as a preventable failure of the system, not an inevitability of the asset."
            </p>
            <div className="mt-8 flex items-center space-x-4">
              <div className="h-px w-12 bg-primary"></div>
              <p className="font-bold text-lg">My Reliability Creed</p>
            </div>
            <div className="mt-8 grid md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <h4 className="font-bold text-primary">Predictive & Preventive</h4>
                <p className="text-sm text-muted-foreground">Moving from reactive "firefighting" to data-driven foresight.</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-bold text-primary">Safety First</h4>
                <p className="text-sm text-muted-foreground">Zero incidents are the byproduct of perfect reliability.</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-bold text-primary">Human-Centric</h4>
                <p className="text-sm text-muted-foreground">Empowering teams with the tools and mindsets to own their assets.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
