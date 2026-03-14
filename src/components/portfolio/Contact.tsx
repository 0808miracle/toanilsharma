import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, Linkedin, MapPin, Send, Loader2 } from 'lucide-react';
import { Section, SectionHeader, SectionLabel, SectionTitle, TextGradient } from '@/components/portfolio/Section';
import { toast } from '@/hooks/use-toast';

const contactDetails = [
  { icon: Phone, title: "Phone", lines: ["+91 7600025028", "+91 9724179160"], hrefs: ["tel:+917600025028", "tel:+919724179160"] },
  { icon: Mail, title: "Email", lines: ["toanilsharma@gmail.com", "anil_roopnagar@yahoo.com"], hrefs: ["mailto:toanilsharma@gmail.com", "mailto:anil_roopnagar@yahoo.com"] },
  { icon: Linkedin, title: "LinkedIn", lines: ["/in/toanilsharma"], hrefs: ["https://www.linkedin.com/in/toanilsharma"] },
  { icon: MapPin, title: "Location", lines: ["Mumbai, India", "Available for global projects"] },
];

export const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "1c2bc895-94d2-45e4-899d-e42b8b544b83");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();
      if (data.success) {
        toast({
          title: "Message Sent!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        (event.target as HTMLFormElement).reset();
      } else {
        toast({
          variant: "destructive",
          title: "Submission Error",
          description: data.message || "Something went wrong. Please try again.",
        });
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Connection Error",
        description: "Failed to connect to the server. Please check your internet.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section id="contact">
      <SectionHeader>
        <SectionLabel>Get In Touch</SectionLabel>
        <SectionTitle>
          Let's Share <TextGradient>Engineering Insights</TextGradient>
        </SectionTitle>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
          I am passionate about discussing the future of reliability engineering and industrial excellence. Reach out to share knowledge, discuss trends, or connect with a fellow expert.
        </p>
      </SectionHeader>
      <div className="grid lg:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-bold mb-4">Professional Networking</h3>
          <p className="text-muted-foreground mb-8">Open to discussing reliability engineering, industrial automation, and professional development within the engineering community.</p>
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
        <form onSubmit={onSubmit} className="space-y-6">
          <div className="grid sm:grid-cols-2 gap-6">
            <Input name="name" placeholder="Your Name" required />
            <Input name="email" type="email" placeholder="Your Email" required />
          </div>
          <Input name="subject" placeholder="Subject" required />
          <Select name="service">
            <SelectTrigger>
              <SelectValue placeholder="Select Service" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="consulting">Reliability Consulting</SelectItem>
              <SelectItem value="training">Training Programs</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
          <Textarea name="message" placeholder="Your Message" rows={5} required />
          <Button type="submit" size="lg" className="w-full group" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                Send Message <Send className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </>
            )}
          </Button>
        </form>
      </div>
    </Section>
  );
};