import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Star } from 'lucide-react';
import { Section, SectionHeader, SectionLabel, SectionTitle, TextGradient } from '@/components/portfolio/Section';

const testimonialsData = [
  {
    quote: "Anil's expertise in RCM implementation transformed our maintenance strategy, resulting in a 22% increase in equipment reliability and significant cost savings. His approach is both practical and innovative.",
    author: "Senior Plant Manager",
    company: "Manufacturing Industry",
  },
  {
    quote: "The training programs developed by Anil have been instrumental in upskilling our technical team. His practical approach and real-world examples made complex concepts easily understandable.",
    author: "Head of Operations",
    company: "Oil & Gas Sector",
  },
  {
    quote: "Anil's deep knowledge of electrical systems and automation helped us solve persistent reliability issues that had plagued our operations for years. His solutions are always cutting-edge.",
    author: "Engineering Director",
    company: "Energy Company",
  },
];

export const Testimonials = () => {
  return (
    <Section id="testimonials" className="bg-secondary">
      <SectionHeader>
        <SectionLabel>Client Success</SectionLabel>
        <SectionTitle>
          What Industry Leaders <TextGradient>Say About My Work</TextGradient>
        </SectionTitle>
      </SectionHeader>
      <Carousel opts={{ loop: true }} className="w-full max-w-4xl mx-auto">
        <CarouselContent>
          {testimonialsData.map((testimonial, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex flex-col items-center justify-center p-8 text-center">
                    <div className="flex text-yellow-400 mb-4">
                      {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" />)}
                    </div>
                    <blockquote className="text-lg italic mb-6">"{testimonial.quote}"</blockquote>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:flex" />
        <CarouselNext className="hidden sm:flex" />
      </Carousel>
    </Section>
  );
};