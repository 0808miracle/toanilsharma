import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { SpotlightCard } from '@/components/ui/SpotlightCard';
import { 
  Download, 
  ArrowRight, 
  Settings, 
  Users, 
  LineChart, 
  Briefcase, 
  GraduationCap, 
  Network, 
  Award, 
  Target, 
  CheckCircle,
  ShieldCheck,
  Sparkles,
  Cpu,
  FileCheck2,
  ExternalLink
} from 'lucide-react';
import { Section, SectionHeader, SectionLabel, SectionTitle, TextGradient } from '@/components/portfolio/Section';
import { useInView } from '@/hooks/useInView';

const AnimatedCounter = ({ to }: { to: number }) => {
  const [count, setCount] = useState(0);
  const [ref, isInView] = useInView();

  useEffect(() => {
    if (isInView) {
      const animation = () => {
        setCount(prevCount => {
          const step = to / 100;
          if (prevCount < to) {
            return Math.min(prevCount + step, to);
          }
          return to;
        });
      };
      const interval = setInterval(animation, 20);
      if (count === to) clearInterval(interval);
      return () => clearInterval(interval);
    }
  }, [isInView, to, count]);

  return <div ref={ref}>{Math.floor(count)}</div>;
};

const metrics = [
  { icon: Briefcase, value: 28, label: "Years Experience" },
  { icon: GraduationCap, value: 200, label: "Engineers Trained" },
  { icon: Target, value: 15, label: "Petrochemical Plants" },
  { icon: LineChart, value: 100, label: "Reliability Focus %" },
];

const credentialBadges = [
  {
    code: "ISO-IMS-45001",
    title: "DNV Certified IMS Lead Auditor",
    issuer: "DNV GL / Integrated Management Systems",
    scope: "ISO 9001 (Quality) • ISO 14001 (Environment) • ISO 45001 (Occupational Safety)",
    status: "Verified Auditor",
    accent: "from-blue-600 to-cyan-500",
    glow: "shadow-blue-500/20"
  },
  {
    code: "SHRM-FACILITATOR",
    title: "SHRM Certified Facilitator & Trainer",
    issuer: "Society for Human Resource Management",
    scope: "Master Facilitator for 200+ Engineers & 40+ Continuous Operations Plant Leaders",
    status: "Corporate Masterclass",
    accent: "from-amber-500 to-yellow-500",
    glow: "shadow-amber-500/20"
  },
  {
    code: "RIL-SAFETY-AUDIT",
    title: "Process & Electrical Safety Auditor",
    issuer: "Reliance Industries Limited",
    scope: "Hazardous Area Classification (Zone 0/1/2) • Switchgear Interlocks • Turnaround Safety",
    status: "Authorized Lead",
    accent: "from-emerald-500 to-teal-500",
    glow: "shadow-emerald-500/20"
  },
  {
    code: "SAE-JA1011-RCM",
    title: "RCM & FMEA Masterclass Certified",
    issuer: "Reliability Engineering Excellence",
    scope: "SAE JA1011 RCM Compliant • AIAG/VDA FMEA • Root Cause Analysis (RCA)",
    status: "Certified Specialist",
    accent: "from-indigo-600 to-purple-500",
    glow: "shadow-indigo-500/20"
  }
];

export const About = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <Section id="about" className="relative py-24 bg-secondary/40 dark:bg-card/20 overflow-hidden">
      {/* Background glow accent */}
      <div 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-primary/5 blur-[120px] pointer-events-none rounded-full" 
        aria-hidden="true"
      />

      <SectionHeader>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-mono font-semibold text-primary mb-3">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>28 YEARS CONTINUOUS OPERATIONS LEADERSHIP</span>
        </div>
        <SectionLabel>Executive Background</SectionLabel>
        <SectionTitle>
          Driving Excellence Through <TextGradient>Reliability Engineering</TextGradient>
        </SectionTitle>
      </SectionHeader>

      <div className="grid lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Scope and Focus */}
        <div className="lg:col-span-7">
          <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-2xl mb-8 backdrop-blur-sm">
            <h3 className="font-bold text-primary mb-2 flex items-center">
              <ArrowRight className="w-4 h-4 mr-2" />
              Professional Background &amp; Engineering Scope
            </h3>
            <p className="text-sm leading-relaxed text-foreground/80">
              Senior engineering professional with over <strong className="text-primary font-bold">28 years</strong> of hands-on industrial leadership across continuous process and petrochemical manufacturing complexes. Dedicated specialist in plant reliability (RCM/FMEA), electrical power distribution, automation architectures, and engineering capability development.
            </p>
          </div>
          
          <p className="text-base sm:text-lg text-muted-foreground mb-8 leading-relaxed">
            Industrial engineering leader and SHRM Certified Facilitator with extensive operational experience across continuous process plants. Passionate about applying first-principles physics to plant reliability, while authoring 100% free, open-access engineering simulation platforms for the worldwide engineering community.
          </p>

          <div className="space-y-4 mb-8">
            <SpotlightCard className="p-4 sm:p-5">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center mr-4 shrink-0">
                  <Network className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm sm:text-base">Large-Scale Capital Project Governance</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">Steering multi-disciplinary engineering, electrical switchyards, and plant infrastructure modernizations.</p>
                </div>
              </div>
            </SpotlightCard>

            <SpotlightCard className="p-4 sm:p-5">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center mr-4 shrink-0">
                  <Settings className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm sm:text-base">Proven First-Principles Methodologies</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">Expertise in RCM, FMEA, RCA, and global engineering standards (IEC, IEEE, ISO, NFPA).</p>
                </div>
              </div>
            </SpotlightCard>

            <SpotlightCard className="p-4 sm:p-5">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center mr-4 shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm sm:text-base">People Development &amp; Technical Mentorship</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">Trained 200+ engineers in power systems, switchgear safety, and reliability-centered maintenance.</p>
                </div>
              </div>
            </SpotlightCard>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#simulators">
              <Button size="lg" className="w-full sm:w-auto group h-12 px-6 rounded-xl font-bold bg-primary hover:bg-primary/90">
                Explore Live Simulators <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </a>
            <a href="#projects">
              <Button size="lg" variant="outline" className="w-full sm:w-auto h-12 px-6 rounded-xl font-semibold border-border/70 dark:border-white/10">
                View 150+ Design Calculators
              </Button>
            </a>
          </div>
        </div>

        {/* Right Column: Interactive Executive Credential Passport (Replacing Duplicate Photo) */}
        <div className="lg:col-span-5 relative">
          <SpotlightCard 
            spotlightColor="rgba(59, 130, 246, 0.4)" 
            glowSize={380}
            className="p-6 sm:p-8 rounded-3xl bg-background/90 dark:bg-[#0B0F19]/95 border border-border/80 dark:border-white/15 shadow-2xl backdrop-blur-xl"
          >
            {/* Header badge */}
            <div className="flex items-center justify-between pb-6 border-b border-border/60 dark:border-white/10">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-500 flex items-center justify-center text-white font-bold font-grotesk shadow-md shadow-blue-500/20">
                  AS
                </div>
                <div>
                  <h4 className="font-bold text-sm sm:text-base font-grotesk text-foreground">Anil Sharma</h4>
                  <p className="text-[11px] font-mono text-muted-foreground">EXECUTIVE CREDENTIAL PASSPORT</p>
                </div>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Active Credentials</span>
              </div>
            </div>

            {/* Interactive Credential Selector */}
            <div className="mt-6 space-y-3">
              {credentialBadges.map((badge, idx) => {
                const isActive = activeTab === idx;
                return (
                  <div
                    key={idx}
                    onClick={() => setActiveTab(idx)}
                    className={`p-3.5 rounded-2xl cursor-pointer transition-all duration-300 border ${
                      isActive 
                        ? 'bg-primary/10 border-primary/40 shadow-lg dark:bg-blue-950/30' 
                        : 'bg-secondary/40 dark:bg-card/40 border-border/60 dark:border-white/5 hover:border-primary/30'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-primary">
                        {badge.code}
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-background/80 dark:bg-card/80 border border-border/60 text-muted-foreground font-medium">
                        {badge.status}
                      </span>
                    </div>
                    <h5 className="font-bold text-xs sm:text-sm text-foreground flex items-center">
                      <CheckCircle className={`w-3.5 h-3.5 mr-1.5 shrink-0 ${isActive ? 'text-primary' : 'text-muted-foreground'}`} />
                      {badge.title}
                    </h5>
                    {isActive && (
                      <div className="mt-2.5 pt-2 border-t border-border/40 text-[11px] text-muted-foreground leading-relaxed animate-in fade-in duration-300">
                        <p className="font-medium text-primary/90 mb-1">{badge.issuer}</p>
                        <p>{badge.scope}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Bottom Official Seal */}
            <div className="mt-6 pt-5 border-t border-border/60 dark:border-white/10 flex items-center justify-between text-[11px] text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-primary" />
                Verified Industrial Rigor
              </span>
              <span className="font-mono">RIL &bull; SMU &bull; CCET &bull; DNV</span>
            </div>
          </SpotlightCard>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {metrics.map((metric, index) => (
          <SpotlightCard key={index} className="p-6 rounded-2xl">
            <metric.icon className="w-8 h-8 mx-auto mb-3 text-primary" />
            <div className="text-3xl sm:text-4xl font-extrabold font-grotesk tracking-tight">
              <AnimatedCounter to={metric.value} />+
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground font-medium mt-1">{metric.label}</p>
          </SpotlightCard>
        ))}
      </div>

      {/* Verified Academic & Professional Qualifications Grid */}
      <div className="mt-16 pt-12 border-t border-border/40">
        <div className="text-center mb-8">
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-primary">
            VERIFIED CREDENTIALS &amp; CERTIFICATIONS
          </span>
          <h3 className="text-2xl font-bold font-grotesk mt-1">
            Formal Qualifications &amp; Industry Accreditations
          </h3>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              title: "MBA – Project Management",
              institution: "Sikkim Manipal University (SMU)",
              detail: "Graduated with 74% • Focus on industrial operations and capital project lifecycle"
            },
            {
              title: "Diploma in Electrical Engineering",
              institution: "Chandigarh College of Engg. & Technology",
              detail: "CCET Chandigarh • Strong foundational power systems & machine control"
            },
            {
              title: "SHRM Certified Facilitator & Trainer",
              institution: "Society for Human Resource Management",
              detail: "Master technical trainer for 200+ engineers & 40+ future plant leaders"
            },
            {
              title: "DNV Certified IMS Lead Auditor",
              institution: "Integrated Management Systems",
              detail: "Certified in ISO 9001 (Quality), ISO 14001 (Environment) & ISO 45001 (Safety)"
            },
            {
              title: "Process & Electrical Safety Auditor",
              institution: "Reliance Industries Limited",
              detail: "Authorized complex safety auditor for mega-scale petrochemical sites"
            },
            {
              title: "RCM & FMEA Masterclass Certified",
              institution: "Reliability Engineering Excellence",
              detail: "Advanced implementation of SAE JA1011 RCM and AIAG/VDA FMEA standards"
            }
          ].map((cred, cIndex) => (
            <SpotlightCard key={cIndex} className="p-4 sm:p-5 rounded-2xl">
              <div className="flex items-center gap-2 mb-1.5">
                <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                <h4 className="font-semibold text-sm">{cred.title}</h4>
              </div>
              <p className="text-xs text-primary/80 font-medium mb-1 pl-6">{cred.institution}</p>
              <p className="text-[11px] text-muted-foreground pl-6 leading-relaxed">{cred.detail}</p>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </Section>
  );
};