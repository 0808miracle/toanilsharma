import { useEffect } from 'react';
import { PageHeader } from '@/components/portfolio/PageHeader';
import { Footer } from '@/components/portfolio/Footer';
import { SpotlightCard } from '@/components/ui/SpotlightCard';
import { 
  ShieldCheck, 
  Lock, 
  EyeOff, 
  Cookie, 
  FileCheck, 
  Mail, 
  Heart, 
  ArrowLeft,
  Server,
  UserCheck,
  CheckCircle2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Privacy = () => {
  useEffect(() => {
    document.title = "Privacy Policy | Anil Sharma - Industrial Reliability Expert";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-primary transition-colors duration-300 flex flex-col justify-between">
      <div>
        <PageHeader 
          title="Privacy Policy" 
          subtitle="Data Governance, Telemetry Transparency & Philanthropic Commitment" 
        />

        <main className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          {/* Header Hero */}
          <div className="mb-12 text-center sm:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-mono font-semibold text-primary mb-4">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>DATA GOVERNANCE & PRIVACY COMPLIANCE</span>
            </div>
            
            <h1 className="font-grotesk text-3xl sm:text-5xl font-black tracking-tight text-foreground">
              Privacy Policy
            </h1>
            
            <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl">
              This policy explains how <strong className="text-foreground">toanilsharma.co.in</strong> and associated technical tools handle visitor data. As an independent, non-commercial public service initiative, your privacy is safeguarded with zero data monetization.
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-4 text-xs font-mono text-muted-foreground">
              <span>Effective Date: October 2026</span>
              <span>•</span>
              <span>Jurisdiction: India & Global GDPR/CCPA Standards</span>
              <span>•</span>
              <span className="text-emerald-500 font-semibold">100% Non-Monetized</span>
            </div>
          </div>

          <div className="space-y-8">
            {/* 1. Core Commitment */}
            <SpotlightCard className="p-6 sm:p-8 rounded-3xl border border-border/80 dark:border-white/10 bg-secondary/30 dark:bg-card/40">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <Heart className="w-6 h-6 text-rose-500" />
                </div>
                <div className="space-y-2">
                  <h2 className="font-grotesk text-xl font-bold text-foreground">
                    1. Non-Commercial Educational Philanthropy
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    This website, along with its affiliated suites (<strong>LiveSimulators.com</strong>, <strong>DesignCalculators.co.in</strong>, <strong>ReliabilityTools.co.in</strong>, and <strong>ElectroSafe.homes</strong>), is operated by Anil Sharma purely as an educational, non-profit community outreach initiative.
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-2 pt-2 text-xs text-foreground font-medium">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>Zero targeted behavioral advertisements</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>No selling or renting of personal data</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>No subscription or commercial paywalls</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>No mandatory user registration required</span>
                    </li>
                  </ul>
                </div>
              </div>
            </SpotlightCard>

            {/* 2. Information Collected */}
            <div className="p-6 sm:p-8 rounded-3xl border border-border/80 dark:border-white/10 bg-background/80 dark:bg-card/30 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-primary flex items-center justify-center shrink-0">
                  <UserCheck className="w-5 h-5" />
                </div>
                <h2 className="font-grotesk text-xl font-bold text-foreground">
                  2. Information We Collect & Why
                </h2>
              </div>

              <div className="space-y-4 text-sm text-muted-foreground leading-relaxed pl-2 sm:pl-13">
                <div>
                  <h3 className="font-semibold text-foreground text-sm mb-1">A. Voluntary Contact Inquiries</h3>
                  <p>
                    When you voluntarily submit a message through the contact form, you provide your <strong>Name</strong>, <strong>Email Address</strong>, optional <strong>Phone Number</strong>, and <strong>Inquiry Topic</strong>. This data is transmitted through Web3Forms API encrypted via TLS to deliver your message directly to Anil Sharma's personal inbox (<code className="text-primary font-mono text-xs">toanilsharma@gmail.com</code>). It is used exclusively to answer technical questions, mentor students, or evaluate tool suggestions.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground text-sm mb-1">B. Aggregated Telemetry & Analytics (Google Analytics)</h3>
                  <p>
                    We deploy Google Analytics 4 (Measurement ID: <code className="text-primary font-mono text-xs">G-V5ZE67EECX</code>) to monitor site health, identify broken simulation algorithms, and understand general geographic distribution. Google Analytics collects pseudonymous metrics such as browser type, operating system, page views, and session duration. IP addresses are masked and anonymized by default.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground text-sm mb-1">C. Client-Side Local Storage</h3>
                  <p>
                    We store small key-value strings strictly on your local device for UI customization:
                  </p>
                  <ul className="list-disc pl-5 mt-1 space-y-1 text-xs">
                    <li><code className="text-foreground font-mono">anil-sharma-theme</code>: remembers your Dark / Light theme preference.</li>
                    <li><code className="text-foreground font-mono">portfolio_sound_enabled</code>: remembers your optional audio feedback preference.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 3. Cookies & Tracking Control */}
            <div className="p-6 sm:p-8 rounded-3xl border border-border/80 dark:border-white/10 bg-background/80 dark:bg-card/30 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center shrink-0">
                  <Cookie className="w-5 h-5" />
                </div>
                <h2 className="font-grotesk text-xl font-bold text-foreground">
                  3. Cookie Policy & How to Opt Out
                </h2>
              </div>

              <div className="text-sm text-muted-foreground leading-relaxed space-y-3 pl-2 sm:pl-13">
                <p>
                  Cookies dropped on this domain are strictly limited to Google Analytics measurement cookies (<code className="text-foreground font-mono text-xs">_ga</code>, <code className="text-foreground font-mono text-xs">_ga_*</code>) which distinguish unique sessions.
                </p>
                <p>
                  If you prefer not to share anonymous analytics, you have full control to disable cookies:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-xs">
                  <li>Configure your web browser to block third-party cookies or reject all cookies.</li>
                  <li>Install the official <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary/80">Google Analytics Opt-Out Browser Add-on</a>.</li>
                  <li>Enable "Do Not Track" (DNT) or Global Privacy Control (GPC) in your browser settings.</li>
                </ul>
              </div>
            </div>

            {/* 4. Rights Under Global Regulations */}
            <div className="p-6 sm:p-8 rounded-3xl border border-border/80 dark:border-white/10 bg-background/80 dark:bg-card/30 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0">
                  <FileCheck className="w-5 h-5" />
                </div>
                <h2 className="font-grotesk text-xl font-bold text-foreground">
                  4. Your Data Protection Rights
                </h2>
              </div>

              <div className="text-sm text-muted-foreground leading-relaxed space-y-2 pl-2 sm:pl-13">
                <p>
                  Regardless of your jurisdiction (under the EU General Data Protection Regulation - GDPR, California Consumer Privacy Act - CCPA, or the Digital Personal Data Protection Act of India - DPDP), you possess the right to:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-xs">
                  <li><strong>Access:</strong> Inquire about what correspondence or contact information we hold.</li>
                  <li><strong>Erasure (Right to be Forgotten):</strong> Request the permanent deletion of any past emails or form submissions sent to us.</li>
                  <li><strong>Correction:</strong> Rectify inaccurate contact records.</li>
                </ul>
              </div>
            </div>

            {/* 5. Contact & Data Officer */}
            <div className="p-6 sm:p-8 rounded-3xl border border-primary/30 bg-primary/5 dark:bg-primary/10 space-y-4">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <h3 className="font-grotesk text-lg font-bold text-foreground">
                    Have questions regarding your privacy?
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                    Contact Anil Sharma directly for any data queries or erasure requests.
                  </p>
                </div>
                <a href="mailto:toanilsharma@gmail.com">
                  <Button className="rounded-xl h-11 px-5 font-bold shadow-md">
                    <Mail className="w-4 h-4 mr-2" />
                    <span>toanilsharma@gmail.com</span>
                  </Button>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-border/60 dark:border-white/10 flex items-center justify-between text-xs text-muted-foreground">
            <Link to="/" className="inline-flex items-center gap-1.5 text-primary hover:underline">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Portfolio</span>
            </Link>
            <Link to="/terms" className="text-primary hover:underline">
              Read Terms &amp; Disclaimer &rarr;
            </Link>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default Privacy;
