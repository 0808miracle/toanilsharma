import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, Linkedin, MapPin, Send, Loader2, Sparkles, BookOpen, ShieldCheck, Heart } from 'lucide-react';
import { Section, SectionHeader, SectionLabel, SectionTitle, TextGradient } from '@/components/portfolio/Section';
import { toast } from '@/hooks/use-toast';

const contactDetails = [
  { icon: Mail, title: "Email (Direct)", lines: ["toanilsharma@gmail.com", "anil_roopnagar@yahoo.com"], hrefs: ["mailto:toanilsharma@gmail.com", "mailto:anil_roopnagar@yahoo.com"] },
  { icon: Linkedin, title: "LinkedIn Profile", lines: ["linkedin.com/in/toanilsharma"], hrefs: ["https://www.linkedin.com/in/toanilsharma"] },
  { icon: Phone, title: "Phone", lines: ["+91 7600025028"], hrefs: ["tel:+917600025028"] },
  { icon: MapPin, title: "Location", lines: ["India", "Non-Commercial Community Educational Outreach"], hrefs: [] },
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
          title: "Message Sent Successfully!",
          description: "Thank you for reaching out. Anil Sharma will respond to your query shortly.",
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
      
      {/* Pre-Footer Non-Commercial Initiative Banner */}
      <div className="relative mb-20 p-8 sm:p-12 md:p-16 rounded-3xl bg-gradient-to-r from-blue-700 via-indigo-700 to-cyan-600 text-white shadow-2xl overflow-hidden max-w-6xl mx-auto">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/15 text-white text-xs font-mono font-semibold tracking-wide mb-4 backdrop-blur-sm">
            <Heart className="w-3.5 h-3.5 text-rose-300" />
            <span>NON-COMMERCIAL TECHNICAL PHILANTHROPY</span>
          </div>
          
          <h2 className="font-grotesk text-2xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1.15]">
            Empowering the Global Engineering Community with 100% Free Tools.
          </h2>
          
          <p className="mt-4 text-sm sm:text-base text-white/90 leading-relaxed max-w-2xl">
            All virtual laboratories, mathematical calculators, and reliability simulators are built independently 
            as an open educational initiative. Free for students, educators, and field practitioners worldwide.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 items-center">
            <a href="#simulators">
              <Button size="lg" className="h-12 px-6 rounded-xl bg-white text-blue-900 hover:bg-white/90 font-bold shadow-lg shadow-black/20 group">
                <Sparkles className="mr-2 h-4 w-4 text-primary" />
                <span>Explore Live Simulators (65+)</span>
              </Button>
            </a>

            <a href="#projects">
              <Button size="lg" variant="outline" className="h-12 px-5 rounded-xl border-white/30 text-white hover:bg-white/10 font-semibold backdrop-blur-sm">
                <BookOpen className="mr-2 h-4 w-4" />
                <span>150+ Design Calculators</span>
              </Button>
            </a>
          </div>
        </div>
      </div>

      <div id="contact-form" className="max-w-6xl mx-auto">
        <SectionHeader>
          <SectionLabel>Knowledge Sharing</SectionLabel>
          <SectionTitle>
            Connect &amp; <TextGradient>Share Feedback</TextGradient>
          </SectionTitle>
          <p className="mt-3 max-w-2xl mx-auto text-muted-foreground text-sm sm:text-base">
            Have a suggestion for a new engineering simulator, calculation verification, 
            or an academic inquiry? Reach out to connect.
          </p>
        </SectionHeader>

        <div className="grid lg:grid-cols-12 gap-10 sm:gap-12 items-start mt-10">
          
          {/* Direct Details & Philanthropic Clarity (5 Cols) */}
          <div className="lg:col-span-5 space-y-6 p-7 sm:p-8 rounded-3xl bg-secondary/40 dark:bg-[#0B0F19]/90 border border-border/70 dark:border-white/10 backdrop-blur-md">
            <div>
              <h3 className="font-grotesk text-xl font-bold text-foreground">Communication Channels</h3>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                Open channels for tool feedback, academic queries, and technical discussions.
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

            {/* Non-Commercial Statement Capsule */}
            <div className="p-4 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-xs text-foreground flex items-start gap-2.5">
              <ShieldCheck className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <span className="leading-relaxed">
                <strong>Non-Commercial Initiative:</strong> All web applications and calculators are created as a personal educational hobby. Free forever, independent of corporate employment, with no commercial services or consulting offered.
              </span>
            </div>
          </div>

          {/* Feedback Form (7 Cols) */}
          <div className="lg:col-span-7 p-7 sm:p-9 rounded-3xl bg-background/90 dark:bg-[#0B0F19]/90 border border-border/80 dark:border-white/10 shadow-2xl backdrop-blur-md">
            <h3 className="font-grotesk text-xl font-bold text-foreground mb-1">Send a Message</h3>
            <p className="text-xs text-muted-foreground mb-6">Drop a note regarding simulator suggestions, mathematical corrections, or academic queries.</p>
            
            <form onSubmit={onSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-foreground">Your Name</label>
                  <Input name="name" placeholder="e.g. Rahul Sharma" required className="rounded-xl h-11" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-foreground">Email Address</label>
                  <Input name="email" type="email" placeholder="name@domain.com" required className="rounded-xl h-11" />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-foreground">Phone (Optional)</label>
                  <Input name="phone" type="tel" placeholder="+91 98765 43210" className="rounded-xl h-11" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-foreground">Topic of Inquiry</label>
                  <Select name="service" defaultValue="feedback">
                    <SelectTrigger className="rounded-xl h-11">
                      <SelectValue placeholder="Select Topic" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="feedback">Tool Feedback &amp; Feature Suggestion</SelectItem>
                      <SelectItem value="student">Academic / Engineering Student Question</SelectItem>
                      <SelectItem value="standards">IEEE / IEC / ASME Standards Discussion</SelectItem>
                      <SelectItem value="reliability">Reliability &amp; Physics Exchange</SelectItem>
                      <SelectItem value="general">General Connection</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-foreground">Message</label>
                <Textarea 
                  name="message" 
                  placeholder="Share your thoughts on the tools, suggest a new standard to implement, or ask a technical question..." 
                  rows={4} 
                  required 
                  className="rounded-xl resize-none" 
                />
              </div>

              <Button type="submit" size="lg" className="w-full h-12 rounded-xl font-bold bg-primary text-primary-foreground shadow-lg shadow-primary/20 group" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending Message...
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
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