import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Section, SectionHeader, SectionLabel, SectionTitle, TextGradient } from "./Section";
import { HelpCircle } from "lucide-react";

const faqData = [
  {
    question: "What is the 'Zero-Breakdown Mindset'?",
    answer: "It is a strategic philosophy where maintenance is viewed as an investment in operational uptime rather than a cost. By using RCM, FMEA, and RCA, we shift from reactive fixes to predictive excellence, aiming for 100% asset reliability."
  },
  {
    question: "How do your digital engineering tools help the community?",
    answer: "I developed ReliabilityTools, DesignCalculators, and ElectroSafe as free, ad-free platforms. They help engineers, students, and professionals perform complex industrial calculations and safety assessments with 100% precision and zero cost."
  },
  {
    question: "What industries do you specialize in?",
    answer: "With 28+ years of experience, I specialize in the Petrochemical, Cement, and Industrial Automation sectors, focusing on large-scale plant reliability and technical workforce development."
  },
  {
    question: "Are you available for professional mentorship?",
    answer: "Yes, as a SHRM Certified technical facilitator, I am passionate about mentoring the next generation of engineers. I am open to professional networking and sharing insights within the engineering community."
  }
];

export const FAQ = () => {
  return (
    <Section id="faq" className="bg-secondary/10">
      <SectionHeader>
        <SectionLabel>Knowledge Base</SectionLabel>
        <SectionTitle>
          Common <TextGradient>Queries & Insights</TextGradient>
        </SectionTitle>
      </SectionHeader>

      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {faqData.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-border/50 bg-background/50 px-4 rounded-xl mb-4">
              <AccordionTrigger className="text-left font-bold hover:text-primary transition-colors py-6">
                <div className="flex items-center">
                  <HelpCircle className="w-5 h-5 mr-3 text-primary opacity-50" />
                  {faq.question}
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  );
};
