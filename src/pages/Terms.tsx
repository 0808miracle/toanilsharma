import { useEffect } from 'react';
import { PageHeader } from '@/components/portfolio/PageHeader';
import { Footer } from '@/components/portfolio/Footer';
import { SpotlightCard } from '@/components/ui/SpotlightCard';
import { 
  Scale, 
  ShieldAlert, 
  CheckCircle2, 
  FileText, 
  Zap, 
  AlertTriangle, 
  Cpu, 
  Building2, 
  ExternalLink,
  ArrowLeft
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Terms = () => {
  useEffect(() => {
    document.title = "Terms of Service & Engineering Disclaimer | Anil Sharma";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-primary transition-colors duration-300 flex flex-col justify-between">
      <div>
        <PageHeader 
          title="Terms & Disclaimer" 
          subtitle="Engineering Standards, Legal Boundaries & Non-Affiliation Framework" 
        />

        <main className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          {/* Header Hero */}
          <div className="mb-12 text-center sm:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-mono font-semibold text-amber-500 mb-4">
              <ShieldAlert className="w-3.5 h-3.5" />
              <span>OFFICIAL GOVERNANCE & LEGAL FRAMEWORK</span>
            </div>
            
            <h1 className="font-grotesk text-3xl sm:text-5xl font-black tracking-tight text-foreground">
              Terms &amp; Engineering Disclaimer
            </h1>
            
            <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl">
              Terms governing the access, educational use, and simulation modeling across <strong className="text-foreground">toanilsharma.co.in</strong>, <strong className="text-foreground">LiveSimulators.com</strong>, <strong className="text-foreground">DesignCalculators.co.in</strong>, <strong className="text-foreground">ReliabilityTools.co.in</strong>, and <strong className="text-foreground">ElectroSafe.homes</strong>.
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-4 text-xs font-mono text-muted-foreground">
              <span>Jurisdiction: International Engineering Guidelines</span>
              <span>•</span>
              <span>Updated: October 2026</span>
              <span>•</span>
              <span className="text-cyan-500 font-semibold">Educational License</span>
            </div>
          </div>

          <div className="space-y-8">
            {/* 1. Technical Philanthropy */}
            <SpotlightCard className="p-6 sm:p-8 rounded-3xl border border-border/80 dark:border-white/10 bg-secondary/30 dark:bg-card/40">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <h2 className="font-grotesk text-xl font-bold text-foreground">
                    1. Independent Technical Philanthropy
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    This website and its associated virtual laboratories and design calculators are conceptualized, built, and maintained entirely by Anil Sharma in a personal capacity. The primary purpose is to provide open-access, zero-cost, ad-free engineering tools for students, academic researchers, and industrial maintenance personnel worldwide.
                  </p>
                  <p className="text-xs text-muted-foreground">
                    All tools are offered without subscription fees, monetization, corporate sponsorships, or advertising trackers.
                  </p>
                </div>
              </div>
            </SpotlightCard>

            {/* 2. Non-Affiliation */}
            <div className="p-6 sm:p-8 rounded-3xl border border-border/80 dark:border-white/10 bg-background/80 dark:bg-card/30 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-primary flex items-center justify-center shrink-0">
                  <Building2 className="w-5 h-5" />
                </div>
                <h2 className="font-grotesk text-xl font-bold text-foreground">
                  2. Corporate Independence &amp; Non-Affiliation
                </h2>
              </div>

              <div className="text-sm text-muted-foreground leading-relaxed space-y-3 pl-2 sm:pl-13">
                <p>
                  All opinions, mathematical models, reliability methodologies, educational articles, and web tools published on this domain represent the independent, personal technical views of Anil Sharma alone.
                </p>
                <div className="p-4 rounded-2xl bg-secondary/60 dark:bg-secondary/30 border border-border/60 text-xs text-foreground font-medium">
                  <strong>Strict Notice:</strong> The content does NOT constitute official statements, endorsements, engineering advice, or corporate representations of Reliance Industries Limited, Ambuja Cements Limited, or any former, current, or prospective employers and corporate affiliates.
                </div>
              </div>
            </div>

            {/* 3. Mathematical & Standards Limitations */}
            <div className="p-6 sm:p-8 rounded-3xl border border-amber-500/30 bg-amber-500/5 dark:bg-amber-500/10 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-500 flex items-center justify-center shrink-0">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <h2 className="font-grotesk text-xl font-bold text-foreground">
                  3. Simulation Accuracy &amp; Engineering Model Limitations
                </h2>
              </div>

              <div className="text-sm text-muted-foreground leading-relaxed space-y-3 pl-2 sm:pl-13">
                <p>
                  While calculation engines faithfully implement internationally recognized engineering standards (including <strong>IEEE 1584-2018</strong> Arc Flash Guide, <strong>IEC 60909</strong> Short-Circuit Currents, <strong>NFPA 70E</strong> Workplace Safety, <strong>API 617</strong> Centrifugal Compressors, <strong>ISO 14224</strong> Reliability Data, and <strong>ASME</strong> codes), these tools are provided strictly for:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-xs">
                  <li>Educational instruction and university laboratory demonstrations.</li>
                  <li>Initial conceptual screening and feasibility exploration.</li>
                  <li>Understanding dynamic physical relationships (e.g., IGBT PWM harmonics, turbomachinery Campbell diagrams, Weibull failure curves).</li>
                </ul>
                <p className="text-foreground font-semibold text-xs pt-1">
                  They are NOT a replacement for stamped engineering deliverables, certified vendor documentation, or site safety permits.
                </p>
              </div>
            </div>

            {/* 4. Mandatory Professional Engineer Verification */}
            <div className="p-6 sm:p-8 rounded-3xl border border-border/80 dark:border-white/10 bg-background/80 dark:bg-card/30 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-500 flex items-center justify-center shrink-0">
                  <Zap className="w-5 h-5" />
                </div>
                <h2 className="font-grotesk text-xl font-bold text-foreground">
                  4. Life-Safety &amp; Mandatory Professional Engineer (PE) Sign-Off
                </h2>
              </div>

              <div className="text-sm text-muted-foreground leading-relaxed space-y-3 pl-2 sm:pl-13">
                <p>
                  Industrial facilities handling high-voltage power distribution, hazardous gas compressor trains, or chemical refinery reactors must NEVER execute switching, protective relay trip settings, breaker retrofits, or arc flash PPE selection based solely on web browser calculations.
                </p>
                <p>
                  All plant modifications require:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-xs">
                  <li>Rigorous system studies conducted via validated industrial software packages (e.g., ETAP, SKM Power*Tools, EasyPower, or PSCAD).</li>
                  <li>Review and stamping by a licensed Professional Engineer (PE) or accredited statutory electrical inspector.</li>
                  <li>Adherence to plant-specific lockout/tagout (LOTO), hot work, and arc flash safety permits.</li>
                </ul>
              </div>
            </div>

            {/* 5. Limitation of Liability */}
            <div className="p-6 sm:p-8 rounded-3xl border border-border/80 dark:border-white/10 bg-background/80 dark:bg-card/30 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-500/10 text-muted-foreground flex items-center justify-center shrink-0">
                  <Scale className="w-5 h-5" />
                </div>
                <h2 className="font-grotesk text-xl font-bold text-foreground">
                  5. "As-Is" Warranty &amp; Limitation of Liability
                </h2>
              </div>

              <div className="text-sm text-muted-foreground leading-relaxed space-y-2 pl-2 sm:pl-13 text-xs">
                <p>
                  TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, ALL PLATFORMS, SIMULATORS, SOFTWARE CODE, AND DESIGNS ARE PROVIDED "AS IS" AND "AS AVAILABLE", WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.
                </p>
                <p>
                  Under no circumstances shall Anil Sharma or his associates be held liable for any direct, indirect, incidental, consequential, or punitive damages resulting from equipment downtime, mechanical failures, electrical faults, physical injuries, or economic loss arising out of the use or reliance upon these open educational tools.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-border/60 dark:border-white/10 flex items-center justify-between text-xs text-muted-foreground">
            <Link to="/" className="inline-flex items-center gap-1.5 text-primary hover:underline">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Portfolio</span>
            </Link>
            <Link to="/privacy" className="text-primary hover:underline">
              Read Privacy Policy &rarr;
            </Link>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default Terms;
