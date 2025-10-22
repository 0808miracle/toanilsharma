import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, Linkedin, MapPin, Send } from 'lucide-react';
import { Section, SectionHeader, SectionLabel, SectionTitle, TextGradient } from '@/components/portfolio/Section';

const contactDetails = [
  { icon: Phone, title: "Phone", lines: ["+91 7600025028", "+91 9724179160"], hrefs: ["tel:+917600025028", "tel:+919724179160"] },
  { icon: Mail, title: "Email", lines: ["toanilsharma@gmail.com", "anil_roopnagar@yahoo.com"], hrefs: ["mailto:toanilsharma@gmail.com", "mailto:anil_roopnagar@yahoo.com"] },
  { icon: Linkedin, title: "LinkedIn", lines: ["/in/toanilsharma"], hrefs: ["https://www.linkedin.com/in/toanilsharma"] },
  { icon: MapPin, title: "Location", lines: ["Mumbai, India", "Available for global projects"] },
];

export const Contact = () => {
  return (
    <Section id="contact">
      <SectionHeader>
        <SectionLabel>Get In Touch</SectionLabel>
        <SectionTitle>
          Ready to Elevate <TextGradient>Your Operations?</TextGradient>
        </SectionTitle>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
          Let's discuss how my expertise in projects, reliability, maintenance, and training can help you achieve operational excellence.
        </p>
      </SectionHeader>
      <div className="grid lg:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
          <p className="text-muted-foreground mb-8">I'm available for consulting, training, and long-term reliability improvement projects globally.</p>
          <div className="space-y-6">
            {contactDetails.map((item, index) => (
              <div key={index} className="flex items-start">
                <item.icon className="w-6 h-6 mr-4 mt-1 text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">{item.title}</h4>
                  {item.lines.map((line, i) => (
                    item.hrefs?.[i] ? (
                      <a key={i} href={item.hrefs[i]} target="_blank" rel="noopener noreferrer" className="block text-muted-foreground hover:text-primary">{line}</a>
                    ) : (
                      <p key={i} className="text-muted-foreground">{line}</p>
                    )
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <form className="space-y-6">
          <div className="grid sm:grid-cols-2 gap-6">
            <Input placeholder="Your Name" />
            <Input type="email" placeholder="Your Email" />
          </div>
          <Input placeholder="Subject" />
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select Service" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="consulting">Reliability Consulting</SelectItem>
              <SelectItem value="training">Training Programs</SelectItem>
              <SelectItem value="audit">Safety Audit</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
          <Textarea placeholder="Your Message" rows={5} />
          <Button type="submit" size="lg" className="w-full group">
            Send Message <Send className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </form>
      </div>
    </Section>
  );
};