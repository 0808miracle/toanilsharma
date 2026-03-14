import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Lightbulb, ShieldCheck, HeartHandshake } from 'lucide-react';
import { Section, SectionHeader, SectionLabel, SectionTitle, TextGradient } from '@/components/portfolio/Section';

const insightsData = [
  {
    icon: Lightbulb,
    title: "Practical Reliability",
    note: "Reliability is not just about complex formulas. In my 28 years, I have seen that simple things like regular inspection and understanding your machine's 'voice' can prevent 80% of major failures."
  },
  {
    icon: ShieldCheck,
    title: "Safety is Personal",
    note: "Whether it is a multi-billion dollar petrochemical plant or your own home, safety shouldn't be a burden. Through ElectroSafe, I want to make fire prevention knowledge simple for everyone."
  },
  {
    icon: HeartHandshake,
    title: "Why Free Tools?",
    note: "I have learned so much from the industry and the society. Building these 150+ calculators is just my small way of giving back to the young engineers and students who will lead tomorrow."
  }
];

export const Insights = () => {
  return (
    <Section id="insights" className="bg-slate-950/5">
      <SectionHeader>
        <SectionLabel>Thoughts & Vision</SectionLabel>
        <SectionTitle>
          Reliability <TextGradient>Insights</TextGradient>
        </SectionTitle>
      </SectionHeader>
      <div className="grid md:grid-cols-3 gap-8">
        {insightsData.map((item, index) => (
          <Card key={index} className="bg-background/50 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all duration-300">
            <CardHeader>
              <item.icon className="w-10 h-10 mb-2 text-primary opacity-80" />
              <CardTitle className="text-xl">{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground italic leading-relaxed">
                "{item.note}"
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
};
