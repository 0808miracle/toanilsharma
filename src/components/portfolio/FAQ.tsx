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
    question: "Who is Anil Sharma and what is his background in industrial reliability?",
    answer: "Anil Sharma is a Senior Reliability Expert and SHRM Certified Facilitator with over 28 years of core industrial experience across Reliance Industries Limited and Ambuja Cements. He oversees reliability for 15+ large-scale petrochemical plants, specializing in RCM (Reliability Centered Maintenance), FMEA, RCA, and industrial automation."
  },
  {
    question: "What is the 'Zero-Breakdown Mindset' in reliability engineering?",
    answer: "It is a strategic philosophy where maintenance is treated as an investment in operational uptime rather than an operational cost center. By deploying RCM, FMEA, and RCA, plant teams transition from reactive firefighting to predictive asset integrity, targeting 100% operational reliability."
  },
  {
    question: "Where can engineers access Anil Sharma's free reliability engineering tools?",
    answer: "As part of his technical philanthropy mission to democratize engineering knowledge, Anil Sharma created ReliabilityTools.co.in (for Weibull analysis and MTBF modeling), DesignCalculators.co.in (150+ calculators across IEC, IEEE, and NFPA standards), and ElectroSafe.homes (home electrical fire prevention)—all completely free and ad-free."
  },
  {
    question: "What industries and systems does Anil Sharma specialize in?",
    answer: "With 28+ years of hands-on industrial leadership, Anil Sharma specializes in the Petrochemical, Refinery, Cement, and Industrial Automation sectors, with deep expertise in HT/LT electrical distribution, PLC-based automated load shedding, substation automation, and asset lifecycle management."
  },
  {
    question: "What training, mentorship, and certification programs does Anil Sharma offer?",
    answer: "As a SHRM Certified Facilitator and IMS Lead Auditor, Anil Sharma has trained and mentored over 200 engineers in RCM, FMEA, electrical safety compliance, and leadership development. He conducts structured workshops for industrial teams and young professionals."
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
