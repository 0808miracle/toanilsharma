import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, Linkedin, MapPin, Send, Loader2, Download, Calendar, CheckCircle2, Copy, Check, Sparkles } from 'lucide-react';
import { Section, SectionHeader, SectionLabel, SectionTitle, TextGradient } from '@/components/portfolio/Section';
import { toast } from '@/hooks/use-toast';

const contactDetails = [
  { icon: Phone, title: "Phone (Direct)", lines: ["+91 7600025028", "+91 9724179160"], hrefs: ["tel:+917600025028", "tel:+919724179160"] },
  { icon: Mail, title: "Email (Direct)", lines: ["toanilsharma@gmail.com", "anil_roopnagar@yahoo.com"], hrefs: ["mailto:toanilsharma@gmail.com", "mailto:anil_roopnagar@yahoo.com"] },
  { icon: Linkedin, title: "LinkedIn Profile", lines: ["linkedin.com/in/toanilsharma"], hrefs: ["https://www.linkedin.com/in/toanilsharma"] },
  { icon: MapPin, title: "Headquarters & Availability", lines: ["Mumbai, India", "Available for Global & On-Site Projects"] },
];

export const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(label);
    toast({
      title: "Copied to clipboard!",
      description: `${label}: ${text}`,
    });
    setTimeout(() => setCopiedField(null), 2500);
  };

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
          title: "Message Sent Successfully!",
          description: "Thank you for reaching out. Anil Sharma will reply shortly.",
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
        description: "Failed to connect to the server. Please check your internet connection.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section id="contact" className="relative py-24 overflow-hidden">
      
      {/* Pre-Footer Executive Conversion Banner */}
      <div className="relative mb-20 p-8 sm:p-12 md:p-16 rounded-3xl bg-gradient-to-r from-blue-700 via-indigo-700 to-cyan-600 text-white shadow-2xl overflow-hidden max-w-6xl mx-auto">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/15 text-white text-xs font-mono font-semibold tracking-wide mb-4 backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>EXECUTIVE ADVISORY &amp; OPERATIONAL TURNAROUNDS</span>
          </div>
          
          <h2 className="font-grotesk text-2xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1.15]">
            Ready to elevate your facility to 99.8% uptime and zero preventable failures?
          </h2>
          
          <p className="mt-4 text-sm sm:text-base text-white/90 leading-relaxed max-w-2xl">
            Available for advisory boards, turnaround audits, substation automation consultations, 
            and enterprise workforce training across heavy process industries.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 items-center">
            <a href="#contact-form">
              <Button size="lg" className="h-12 px-6 rounded-xl bg-white text-blue-900 hover:bg-white/90 font-bold shadow-lg shadow-black/20 group">
                <span>Book Scoping Consultation</span>
                <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </a>

            <a href="/Anil-Sharma-CV-2025.docx" download>
              <Button size="lg" variant="outline" className="h-12 px-5 rounded-xl border-white/30 text-white hover:bg-white/10 font-semibold backdrop-blur-sm">
                <Download className="mr-2 h-4 w-4" />
                <span>Download Executive CV (.docx)</span>
              </Button>
            </a>
          </div>
        </div>
      </div>

      <div id="contact-form" className="max-w-6xl mx-auto">
        <SectionHeader>
          <SectionLabel>Direct Communication</SectionLabel>
          <SectionTitle>
            Initiate <TextGradient>Executive Contact</TextGradient>
          </SectionTitle>
          <p className="mt-3 max-w-2xl mx-auto text-muted-foreground text-sm sm:text-base">
            Reach out directly to discuss turnaround consulting, RCM implementation, 
            learning academy workshops, or engineering platforms.
          </p>
        </SectionHeader>

        <div className="grid lg:grid-cols-12 gap-10 sm:gap-12 items-start mt-10">
          
          {/* Direct Details & Verification (5 Cols) */}
          <div className="lg:col-span-5 space-y-6 p-7 sm:p-8 rounded-3xl bg-secondary/40 dark:bg-card/40 border border-border/70 dark:border-white/10 backdrop-blur-md">
            <div>
              <h3 className="font-grotesk text-xl font-bold text-foreground">Direct Contact Channels</h3>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                Prompt response within 24 hours. Confidentiality respected for all industrial plant queries.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              {contactDetails.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex items-start space-x-3.5 p-3 rounded-2xl bg-background/80 dark:bg-card/80 border border-border/60 dark:border-white/10">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs font-bold font-grotesk text-foreground uppercase tracking-wide">{item.title}</h4>
                      {item.lines.map((line, i) => (
                        item.hrefs?.[i] ? (
                          <a 
                            key={i} 
                            href={item.hrefs[i]} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="block text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors truncate font-mono mt-0.5"
                          >
                            {line}
                          </a>
                        ) : (
                          <p key={i} className="text-xs sm:text-sm text-muted-foreground mt-0.5">{line}</p>
                        )
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Availability Capsule */}
            <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-foreground flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
              <span>
                <strong>Immediate Availability:</strong> Open for non-executive board advisory, turnaround scoping, and technical keynotes across India and overseas.
              </span>
            </div>
          </div>

          {/* Contact Web Form (7 Cols) */}
          <div className="lg:col-span-7 p-7 sm:p-9 rounded-3xl bg-background/90 dark:bg-card/90 border border-border/80 dark:border-white/10 shadow-2xl backdrop-blur-md">
            <h3 className="font-grotesk text-xl font-bold text-foreground mb-1">Send a Confidential Message</h3>
            <p className="text-xs text-muted-foreground mb-6">Fill in the parameters below to receive an executive briefing or proposal.</p>
            
            <form onSubmit={onSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-foreground">Full Name</label>
                  <Input name="name" placeholder="e.g. Rajesh Kumar" required className="rounded-xl h-11" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-foreground">Corporate / Official Email</label>
                  <Input name="email" type="email" placeholder="name@company.com" required className="rounded-xl h-11" />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-foreground">Phone Number</label>
                  <Input name="phone" type="tel" placeholder="+91 98765 43210" className="rounded-xl h-11" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-foreground">Area of Engagement</label>
                  <Select name="service" defaultValue="consulting">
                    <SelectTrigger className="rounded-xl h-11">
                      <SelectValue placeholder="Select Area" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="consulting">Plant Reliability &amp; RCM Consulting</SelectItem>
                      <SelectItem value="turnaround">Turnaround &amp; Substation Automation</SelectItem>
                      <SelectItem value="training">L&amp;D Corporate Academy Workshops</SelectItem>
                      <SelectItem value="platforms">LiveSimulators &amp; Engineering Tools</SelectItem>
                      <SelectItem value="advisory">Advisory Board / Speaking</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-foreground">Brief Project / Operational Scope</label>
                <Textarea 
                  name="message" 
                  placeholder="Describe your plant challenges, critical assets, or timeline..." 
                  rows={4} 
                  required 
                  className="rounded-xl resize-none" 
                />
              </div>

              <Button type="submit" size="lg" className="w-full h-12 rounded-xl font-bold bg-primary text-primary-foreground shadow-lg shadow-primary/20 group" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Transmitting Message...
                  </>
                ) : (
                  <>
                    <span>Submit Executive Inquiry</span>
                    <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </Button>
            </form>
          </div>

        </div>
      </div>
    </Section>
  );
};