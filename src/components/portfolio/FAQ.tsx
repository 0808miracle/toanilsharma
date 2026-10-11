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
    question: "Who is Anil Sharma and what is his engineering background?",
    answer: "Anil Sharma is an industrial engineering leader with over 28 years of continuous process experience across petrochemical and heavy manufacturing complexes. He specializes in plant reliability (RCM/FMEA), high-reliability electrical distribution, and technical capability building, alongside creating free open-access engineering tools for students and practitioners worldwide."
  },
  {
    question: "What is the 'Zero-Breakdown Mindset' in reliability engineering?",
    answer: "It is a strategic philosophy where maintenance is treated as an investment in operational uptime rather than an operational cost center. By deploying RCM, FMEA, and RCA, plant teams transition from reactive firefighting to predictive asset integrity, targeting 100% operational reliability."
  },
  {
    question: "Are these engineering tools commercial or associated with his corporate employment?",
    answer: "No. All web applications (LiveSimulators.com, DesignCalculators.co.in, ReliabilityTools.co.in, ElectroSafe.homes) are developed independently as a personal, non-commercial technical philanthropy initiative. They are 100% free, ad-free, and created solely for student education, engineering interview preparation, and community skill development."
  },
  {
    question: "What industries and systems does Anil Sharma specialize in?",
    answer: "With over 28 years of hands-on industrial leadership, Anil Sharma specializes in continuous petrochemical operations, process manufacturing, and power systems, with deep domain expertise in electrical distribution, automated load shedding architectures, asset lifecycle governance, and first-principles physics."
  },
  {
    question: "What mentorship and capability building programs has Anil Sharma facilitated?",
    answer: "As a SHRM Certified Facilitator and DNV-certified IMS Lead Auditor, Anil Sharma has conducted technical masterclasses and mentored over 200 engineers in RCM, FMEA, electrical safety standards (NFPA 70E / IEC), and operational excellence."
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
