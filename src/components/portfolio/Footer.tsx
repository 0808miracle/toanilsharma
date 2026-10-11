import { useState, useEffect } from 'react';
import { 
  Linkedin, Mail, Phone, Copy, Check, ExternalLink, ArrowUp, ShieldCheck, Clock, MapPin,
  ShieldAlert, Scale, FileText, CheckCircle2 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

export const Footer = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [mumbaiTime, setMumbaiTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      try {
        const timeStr = new Intl.DateTimeFormat('en-US', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        }).format(new Date());
        setMumbaiTime(timeStr);
      } catch (e) {
        setMumbaiTime('IST (UTC+5:30)');
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(label);
    toast({
      title: "Copied to clipboard!",
      description: `${label}: ${text}`,
    });
    setTimeout(() => setCopiedField(null), 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-secondary/70 dark:bg-card/70 border-t border-border/70 dark:border-white/10 overflow-hidden">
      {/* Ambient Top Glow Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
      
      {/* Background radial gradient accent */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 pb-12 border-b border-border/60 dark:border-white/10">
          
          {/* Column 1 & 2: Executive Brand, Live Availability & Direct Contacts */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center space-x-3">
              <span className="text-xl font-bold bg-gradient-to-br from-blue-600 via-indigo-600 to-cyan-600 text-white w-11 h-11 flex items-center justify-center rounded-xl font-grotesk shadow-md shadow-blue-500/20 flex-shrink-0">
                AS
              </span>
              <div>
                <span className="font-grotesk font-bold text-xl leading-tight block text-foreground">
                  Anil Sharma
                </span>
                <span className="text-xs text-muted-foreground font-medium leading-tight block">
                  Senior Industrial Reliability Expert &amp; Trainer
                </span>
              </div>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              Dedicated to open-access engineering education, industrial reliability principles, and empowering students and engineers globally with free, enterprise-grade calculation tools.
            </p>

            {/* Live Timezone & Community Initiative Capsule */}
            <div className="inline-flex flex-col space-y-1.5 p-3 rounded-xl bg-background/80 dark:bg-background/50 border border-border/80 dark:border-white/10 text-xs">
              <div className="flex items-center space-x-2 text-foreground font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Non-Commercial • Open Engineering Initiative</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground text-[11px]">
                <span className="flex items-center">
                  <MapPin className="w-3 h-3 mr-1 text-primary" />
                  India
                </span>
                <span className="flex items-center">
                  <Clock className="w-3 h-3 mr-1 text-primary" />
                  {mumbaiTime ? `${mumbaiTime} IST` : 'IST (UTC+5:30)'}
                </span>
              </div>
            </div>

            {/* Direct Copy Action Buttons */}
            <div className="space-y-2 pt-1 max-w-sm">
              <div className="flex items-center justify-between p-2 rounded-lg bg-background/60 dark:bg-background/40 border border-border/60 dark:border-white/10 text-xs">
                <a href="mailto:toanilsharma@gmail.com" className="font-mono text-foreground hover:text-primary transition-colors truncate mr-2">
                  toanilsharma@gmail.com
                </a>
                <Button 
                  size="sm" 
                  variant="ghost" 
                  onClick={() => copyToClipboard('toanilsharma@gmail.com', 'Email')}
                  className="h-7 px-2 text-[11px] text-muted-foreground hover:text-primary"
                  title="Copy email to clipboard"
                >
                  {copiedField === 'Email' ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                </Button>
              </div>

              <div className="flex items-center justify-between p-2 rounded-lg bg-background/60 dark:bg-background/40 border border-border/60 dark:border-white/10 text-xs">
                <a href="tel:+917600025028" className="font-mono text-foreground hover:text-primary transition-colors truncate mr-2">
                  +91 7600025028
                </a>
                <Button 
                  size="sm" 
                  variant="ghost" 
                  onClick={() => copyToClipboard('+917600025028', 'Phone')}
                  className="h-7 px-2 text-[11px] text-muted-foreground hover:text-primary"
                  title="Copy phone to clipboard"
                >
                  {copiedField === 'Phone' ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                </Button>
              </div>
            </div>

            {/* Social Icons Stack */}
            <div className="flex items-center space-x-3 pt-2">
              <a 
                href="https://www.linkedin.com/in/toanilsharma" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-9 h-9 rounded-lg bg-background/80 dark:bg-background/50 border border-border/70 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all shadow-sm"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href="mailto:toanilsharma@gmail.com" 
                className="w-9 h-9 rounded-lg bg-background/80 dark:bg-background/50 border border-border/70 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all shadow-sm"
                aria-label="Email Anil Sharma"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a 
                href="tel:+917600025028" 
                className="w-9 h-9 rounded-lg bg-background/80 dark:bg-background/50 border border-border/70 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all shadow-sm"
                aria-label="Call Anil Sharma"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 3: Navigation */}
          <div>
            <h4 className="font-grotesk font-bold text-sm tracking-wide mb-4 text-foreground uppercase">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About &amp; Credentials</a></li>
              <li><a href="#expertise" className="text-muted-foreground hover:text-primary transition-colors">Core Competencies</a></li>
              <li><a href="#philosophy" className="text-muted-foreground hover:text-primary transition-colors">Zero-Breakdown Creed</a></li>
              <li><a href="#experience" className="text-muted-foreground hover:text-primary transition-colors">Career Timeline (28y)</a></li>
              <li><a href="#calculator" className="text-muted-foreground hover:text-primary transition-colors">Reliability Modeler</a></li>
              <li><a href="#architecture" className="text-muted-foreground hover:text-primary transition-colors">Tool Architecture</a></li>
              <li><a href="#awards" className="text-muted-foreground hover:text-primary transition-colors">Accolades &amp; Honors</a></li>
              <li><a href="#faq" className="text-muted-foreground hover:text-primary transition-colors">Technical FAQ</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Academic &amp; Student Inquiries</a></li>
            </ul>
          </div>

          {/* Column 4: Virtual Labs Ecosystem */}
          <div>
            <div className="flex items-center space-x-1.5 mb-4">
              <h4 className="font-grotesk font-bold text-sm tracking-wide text-foreground uppercase">
                Virtual Labs
              </h4>
              <span className="px-1.5 py-0.5 text-[9px] font-extrabold uppercase rounded bg-blue-500/15 text-blue-500">Live</span>
            </div>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="https://livesimulators.com" target="_blank" rel="noopener noreferrer" className="font-semibold text-foreground hover:text-primary flex items-center group">
                  <span>LiveSimulators.com</span>
                  <ExternalLink className="w-3 h-3 ml-1 opacity-60 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li className="pl-2 border-l border-border/80 dark:border-white/10">
                <a href="https://livesimulators.com/lab/power-electronics-lab" target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground hover:text-primary transition-colors">
                  Power Electronics Lab
                </a>
              </li>
              <li className="pl-2 border-l border-border/80 dark:border-white/10">
                <a href="https://livesimulators.com/lab/power-systems-lab" target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground hover:text-primary transition-colors">
                  Power Systems &amp; Grid
                </a>
              </li>
              <li className="pl-2 border-l border-border/80 dark:border-white/10">
                <a href="https://livesimulators.com/lab/safeops-ups" target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground hover:text-primary transition-colors">
                  SafeOps UPS Simulator
                </a>
              </li>
              <li className="pl-2 border-l border-border/80 dark:border-white/10">
                <a href="https://livesimulators.com/lab/electrolive-electrical-safety" target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground hover:text-primary transition-colors">
                  ElectroLive Safety Lab
                </a>
              </li>
              <li className="pl-2 border-l border-border/80 dark:border-white/10">
                <a href="https://mech.livesimulators.com/" target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground hover:text-primary transition-colors">
                  Turbomachinery Dynamics
                </a>
              </li>
            </ul>
          </div>

          {/* Column 5: Digital Platforms & Calculators */}
          <div>
            <h4 className="font-grotesk font-bold text-sm tracking-wide mb-4 text-foreground uppercase">
              Engineering Clouds
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="https://designcalculators.co.in" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary flex items-center group">
                  <span>DesignCalculators (150+)</span>
                  <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href="https://reliabilitytools.co.in" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary flex items-center group">
                  <span>ReliabilityTools (Weibull)</span>
                  <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href="https://arcflashinfo.netlify.app" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary flex items-center group">
                  <span>ArcFlash Tools (IEEE 1584)</span>
                  <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href="https://electrosafe.homes" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary flex items-center group">
                  <span>ElectroSafe.homes</span>
                  <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li className="pt-2">
                <div className="p-2.5 rounded-lg bg-background/60 dark:bg-background/40 border border-border/60 text-[11px] text-muted-foreground">
                  <ShieldCheck className="w-4 h-4 text-primary mb-1 inline mr-1" />
                  All engineering platforms are 100% free, ad-free, and dedicated to the global engineering community.
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright, System Specs & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-muted-foreground gap-4">
          <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-4 text-center sm:text-left">
            <p>&copy; {new Date().getFullYear()} Anil Sharma. All Rights Reserved.</p>
            <span className="hidden sm:inline text-border">•</span>
            <p className="text-[11px]">Engineered with React 18, TypeScript &amp; TailwindCSS</p>
          </div>

          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-3 sm:gap-4">
            {/* Common Website & Engineering Disclaimer Modal */}
            <Dialog>
              <DialogTrigger asChild>
                <button
                  className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-background dark:bg-card border border-border/80 hover:border-primary/50 text-foreground hover:text-primary transition-all text-xs font-medium shadow-sm cursor-pointer group"
                  aria-label="Open engineering and website disclaimer"
                >
                  <Scale className="w-3.5 h-3.5 text-primary" />
                  <span>Site Disclaimer</span>
                </button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto rounded-3xl bg-background/98 dark:bg-[#070D1A]/98 border border-border/80 dark:border-white/10 backdrop-blur-2xl p-6 sm:p-8">
                <DialogHeader className="text-left pb-4 border-b border-border/60 dark:border-white/10">
                  <div className="flex items-center gap-2 text-primary font-mono text-xs font-bold uppercase tracking-wider mb-1">
                    <ShieldAlert className="w-4 h-4 text-amber-500" />
                    <span>Official Governance &amp; Legal Framework</span>
                  </div>
                  <DialogTitle className="text-xl sm:text-2xl font-bold font-grotesk text-foreground">
                    Engineering, Educational &amp; Non-Affiliation Disclaimer
                  </DialogTitle>
                  <DialogDescription className="text-xs text-muted-foreground mt-1">
                    Governing terms for toanilsharma.co.in, LiveSimulators.com, DesignCalculators.co.in, ReliabilityTools.co.in, and ElectroSafe.homes.
                  </DialogDescription>
                </DialogHeader>

                <div className="space-y-3.5 pt-4 text-xs sm:text-sm text-foreground/85 leading-relaxed">
                  <div className="p-3.5 rounded-2xl bg-secondary/50 dark:bg-card/50 border border-border/70 dark:border-white/10 space-y-1">
                    <strong className="text-foreground font-bold flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      1. Personal Technical Philanthropy
                    </strong>
                    <p className="text-muted-foreground text-xs leading-normal">
                      This portfolio and its affiliated calculators are created, maintained, and self-funded by Anil Sharma as an independent, non-commercial public service initiative to democratize engineering education and workforce training globally. All platforms operate free of advertising, subscription paywalls, or commercial monetisation.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-secondary/50 dark:bg-card/50 border border-border/70 dark:border-white/10 space-y-1">
                    <strong className="text-foreground font-bold flex items-center gap-1.5">
                      <Scale className="w-4 h-4 text-blue-500 shrink-0" />
                      2. Non-Affiliation &amp; Independence
                    </strong>
                    <p className="text-muted-foreground text-xs leading-normal">
                      All viewpoints, methodologies, educational commentary, and mathematical tools presented herein represent the personal perspectives of Anil Sharma in his individual technical capacity. They do not constitute official corporate positions, engineering endorsements, or commercial statements of Reliance Industries Limited, Ambuja Cements Limited, or any former or current employers or affiliates.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-secondary/50 dark:bg-card/50 border border-border/70 dark:border-white/10 space-y-1">
                    <strong className="text-foreground font-bold flex items-center gap-1.5">
                      <ShieldAlert className="w-4 h-4 text-amber-500 shrink-0" />
                      3. Engineering Calculations &amp; Model Limitations
                    </strong>
                    <p className="text-muted-foreground text-xs leading-normal">
                      While calculation engines and interactive simulations implement recognized industry standards (e.g., IEEE 1584-2018, IEEE 399, IEC 60909, NFPA 70E, API 617, ISO 14224), they are provided exclusively for educational analysis, classroom instruction, and conceptual screening. They do not substitute for formal engineering studies, vendor design documents, stamped professional deliverables, or site safety permits.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-secondary/50 dark:bg-card/50 border border-border/70 dark:border-white/10 space-y-1">
                    <strong className="text-foreground font-bold flex items-center gap-1.5">
                      <FileText className="w-4 h-4 text-cyan-500 shrink-0" />
                      4. Mandatory Professional Engineer Verification
                    </strong>
                    <p className="text-muted-foreground text-xs leading-normal">
                      Live plant operations, equipment commissioning, switchgear racking, and high-voltage maintenance must strictly follow facility-specific operating manuals, formal short-circuit/arc flash analyses (via certified software like ETAP, SKM, or EasyPower), and review by a licensed Professional Engineer (PE) or accredited regulatory authority.
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-border/60 dark:border-white/10 flex items-center justify-between text-[11px] text-muted-foreground">
                  <span>Last Updated: October 2026</span>
                  <span className="font-mono text-primary">Anil Sharma Technical Philanthropy</span>
                </div>
              </DialogContent>
            </Dialog>

            <span className="text-[11px] text-muted-foreground/80 hidden sm:inline">Zero Tracking Cookies</span>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-background dark:bg-card border border-border/70 hover:border-primary/50 text-foreground hover:text-primary transition-all text-xs font-medium shadow-sm group cursor-pointer"
              aria-label="Scroll to top of page"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};