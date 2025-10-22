import { Card, CardContent } from '@/components/ui/card';
import { Award, Star } from 'lucide-react';
import { Section, SectionHeader, SectionLabel, SectionTitle, TextGradient } from '@/components/portfolio/Section';

const awardsData = [
  {
    title: "Top Trainer – RIL Learning Academy",
    years: "2019, 2021, 2022, 2024",
  },
  {
    title: "Safety Champion Awards",
    years: "2012, 2014, 2016, 2018, 2022",
  },
  {
    title: "Leadership in Reliability Innovation",
    years: "2020, 2023",
  },
];

export const Awards = () => {
  return (
    <Section id="awards">
      <SectionHeader>
        <SectionLabel>Recognition</SectionLabel>
        <SectionTitle>
          Awards & <TextGradient>Accolades</TextGradient>
        </SectionTitle>
      </SectionHeader>
      <div className="grid md:grid-cols-3 gap-8">
        {awardsData.map((award, index) => (
          <Card key={index} className="text-center p-6">
            <CardContent>
              <Award className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="font-bold text-lg mb-2">{award.title}</h3>
              <p className="text-sm text-muted-foreground">{award.years}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
};