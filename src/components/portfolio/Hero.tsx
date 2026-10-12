import { Button } from '@/components/ui/button';
import { SpotlightCard } from '@/components/ui/SpotlightCard';
import { ParticleGridCanvas } from '@/components/portfolio/ParticleGridCanvas';
import { 
  PlayCircle, 
  ShieldCheck, 
  Cpu, 
  Award, 
  Sparkles, 
  Zap,
  CheckCircle2,
  Calculator,
  ExternalLink,
  Linkedin,
  GraduationCap,
  Factory
} from 'lucide-react';
import { TextGradient } from '@/components/portfolio/Section';

const missionStats = [
  {
    value: "28+",
    label: "Years Industrial Rigor",
    subtext: "Reliance Industries & Ambuja",
    accent: "text-foreground",
    borderGlow: "group-hover:border-blue-500/50",
    href: "#experience"
  },
  {
    value: "65+",
    label: "Live Virtual Labs",
    subtext: "Float64 Browser Physics",
    accent: "text-foreground",
    borderGlow: "group-hover:border-cyan-500/50",
    href: "#simulators"
  },
  {
    value: "150+",
    label: "Design Calculators",
    subtext: "IEC, IEEE, ASME & API Codes",
    accent: "text-foreground",
    borderGlow: "group-hover:border-indigo-500/50",
    href: "#projects"
  },
  {
    value: "200+",
    label: "Engineers Mentored",
    subtext: "SHRM Facilitator & Lead Auditor",
    accent: "text-blue-600 dark:text-cyan-400 font-extrabold",
    borderGlow: "group-hover:border-emerald-500/50",
    href: "#about"
  }
];

export const Hero = () => {
  return (
    <section id="home" className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden">
      {/* Interactive Particle Constellation Grid */}
      <ParticleGridCanvas />

      {/* High-tech Background Ambient Grid & Radial Glow Mesh */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(rgba(59,130,246,0.12)_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" 
        aria-hidden="true"
      />
      <div 
        className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-blue-600/10 via-indigo-500/10 to-cyan-500/10 blur-[100px] pointer-events-none rounded-full" 
        aria-hidden="true"
      />

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Mission-Driven Authority Content */}
          <div className="lg:col-span-7 text-center lg:text-left">
            
            {/* The Executive Credibility & Philanthropy Banner */}
            <div className="inline-flex max-w-2xl items-center gap-2.5 rounded-full border border-blue-500/25 bg-blue-50/90 dark:bg-blue-950/40 px-4 py-2 text-xs text-blue-900 dark:text-blue-200 backdrop-blur-md shadow-sm text-left mb-6 hover:border-blue-500/40 transition-colors">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
              <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
                <span className="font-semibold text-blue-950 dark:text-blue-100">Personal Technical Philanthropy</span>
                <span className="text-blue-400 hidden sm:inline">•</span>
                <span className="text-blue-700/80 dark:text-blue-300/80">DGM &bull; Central Engineering Services, Reliance Industries</span>
              </div>
            </div>

            {/* Main Headline - Structured for Luxury Typographic Hierarchy and Pure SEO Integrity */}
            <h1 className="font-grotesk tracking-tight leading-[1.12]">
              {/* Executive Nameplate */}
              <span className="block text-4xl sm:text-6xl lg:text-[4.1rem] font-black text-foreground tracking-tight">
                Anil Sharma
              </span>

              {/* Specialization with Radiant Luminous Gradient */}
              <span className="block mt-2 sm:mt-3 text-2xl sm:text-4xl lg:text-[2.95rem] font-extrabold tracking-tight leading-[1.15]">
                <TextGradient className="bg-gradient-to-r from-blue-600 via-cyan-400 to-indigo-600 dark:from-blue-400 dark:via-cyan-300 dark:to-indigo-400 drop-shadow-[0_2px_18px_rgba(59,130,246,0.25)]">
                  Reliability &amp; Maintenance Expert
                </TextGradient>
              </span>

              {/* Executive Disciplines & Experience Badges */}
              <span className="mt-4 sm:mt-5 flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-2.5 text-xs sm:text-sm font-semibold tracking-normal font-sans">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-500/10 dark:bg-blue-400/10 border border-blue-500/20 text-blue-700 dark:text-blue-300 backdrop-blur-md shadow-sm hover:border-blue-500/40 transition-colors">
                  <GraduationCap className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                  <span>Trainer</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-cyan-500/10 dark:bg-cyan-400/10 border border-cyan-500/20 text-cyan-700 dark:text-cyan-300 backdrop-blur-md shadow-sm hover:border-cyan-500/40 transition-colors">
                  <Zap className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0" />
                  <span>E &amp; I Specialist</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-indigo-500/10 dark:bg-indigo-400/10 border border-indigo-500/20 text-indigo-700 dark:text-indigo-300 backdrop-blur-md shadow-sm hover:border-indigo-500/40 transition-colors">
                  <Factory className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0" />
                  <span>28+ Years Industrial Experience</span>
                </span>
              </span>
            </h1>

            {/* Mission Sub-headline */}
            <p className="mt-6 text-base sm:text-lg lg:text-xl text-muted-foreground/90 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Empowering hundreds of thousands of engineers, plant professionals, and students with enterprise-grade AI tools, interactive physics virtual labs, and reliability calculators{' '}
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-emerald-500/15 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 font-bold text-xs sm:text-sm tracking-wide align-middle shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                100% Free
              </span>
              . Built from 28+ years of continuous-process industrial leadership across petrochemicals and cement.
            </p>

            {/* Trust & Engineering Rigor Signals */}
            <div className="mt-6 flex flex-wrap gap-4 justify-center lg:justify-start items-center text-xs text-muted-foreground font-medium">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                <span>Zero Ads &bull; No Paywalls</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-cyan-500 shrink-0" />
                <span>Float64 Real-Time Solvers</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span>IEC &bull; IEEE &bull; ASME Adherent</span>
              </span>
            </div>

            {/* CTA Hierarchy */}
            <div className="mt-8 flex flex-wrap gap-3.5 justify-center lg:justify-start items-center">
              {/* Primary Action */}
              <a href="#simulators" className="w-full sm:w-auto">
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto h-12 px-6 rounded-xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] group"
                >
                  <PlayCircle className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                  Explore Live Virtual Labs (65+)
                </Button>
              </a>

              {/* Secondary Action */}
              <a href="#projects" className="w-full sm:w-auto">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="w-full sm:w-auto h-12 px-5 rounded-xl font-semibold border-border/80 dark:border-white/15 bg-background/50 hover:bg-secondary/70 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 group"
                >
                  <Calculator className="mr-2 h-4 w-4 text-primary" />
                  <span>150+ Design Calculators</span>
                </Button>
              </a>

              {/* LinkedIn Profile Direct Link */}
              <a 
                href="https://www.linkedin.com/in/toanilsharma" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full sm:w-auto"
                aria-label="Visit Anil Sharma's official LinkedIn profile"
              >
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="w-full sm:w-auto h-12 px-4 rounded-xl font-semibold border-[#0077B5]/40 hover:border-[#0077B5] bg-[#0077B5]/10 hover:bg-[#0077B5]/20 text-[#0077B5] dark:text-[#38BDF8] transition-all duration-300 group shadow-sm hover:shadow-[0_0_20px_rgba(0,119,181,0.25)]"
                >
                  <Linkedin className="mr-2 h-4 w-4 fill-current transition-transform group-hover:scale-110" />
                  <span>LinkedIn Profile</span>
                  <ExternalLink className="ml-1.5 h-3.5 w-3.5 opacity-70" />
                </Button>
              </a>
            </div>

            {/* Impact Metric Cards - WHOLE CARD CLICKABLE with Spotlight */}
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3.5 sm:gap-4 max-w-2xl mx-auto lg:mx-0">
              {missionStats.map((stat, index) => (
                <a 
                  key={index}
                  href={stat.href}
                  className="block select-none"
                >
                  <SpotlightCard
                    spotlightColor="rgba(59, 130, 246, 0.35)"
                    glowSize={200}
                    className={`cursor-pointer text-left p-3.5 sm:p-4 rounded-2xl bg-secondary/50 dark:bg-[#0B0F19]/90 border border-border/70 dark:border-white/10 dark:shadow-[0_0_20px_rgba(15,76,255,0.12)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl dark:hover:shadow-[0_0_25px_rgba(15,76,255,0.3)] ${stat.borderGlow}`}
                  >
                    <div className="flex items-baseline space-x-1 justify-center lg:justify-start">
                      <span className={`text-2xl sm:text-3xl font-bold font-grotesk tracking-tight ${stat.accent}`}>
                        {stat.value}
                      </span>
                    </div>
                    <p className="mt-1 text-xs font-semibold text-foreground/90 leading-tight group-hover:text-primary transition-colors">
                      {stat.label}
                    </p>
                    <p className="mt-0.5 text-[10px] text-muted-foreground leading-tight truncate">
                      {stat.subtext}
                    </p>
                  </SpotlightCard>
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Architectural Executive Portrait Frame */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <div className="relative w-full max-w-md mx-auto">
              
              {/* Backlight Ambient Glow Ring */}
              <div 
                className="absolute -inset-2 bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-500 rounded-3xl blur-2xl opacity-20 dark:opacity-35 animate-pulse pointer-events-none" 
                aria-hidden="true"
              />

              {/* Chamfered Architectural Photo Container */}
              <div className="relative p-2 rounded-3xl bg-background/80 dark:bg-[#0B0F19]/90 border border-border/80 dark:border-white/15 shadow-2xl dark:shadow-[0_0_35px_rgba(15,76,255,0.28)] backdrop-blur-md overflow-hidden">
                <img
                  src="/images/anil-sharma.webp"
                  alt="Anil Sharma - Reliability &amp; Maintenance Expert"
                  width={781}
                  height={1159}
                  fetchPriority="high"
                  className="relative w-full h-auto rounded-2xl object-cover shadow-inner"
                />

                {/* Subtle bottom gradient vignette */}
                <div className="absolute inset-x-2 bottom-2 h-28 bg-gradient-to-t from-background/90 dark:from-card/90 via-background/30 to-transparent rounded-b-2xl pointer-events-none" />
                
                {/* Embedded Title Pill inside portrait base */}
                <div className="absolute bottom-5 inset-x-5 text-center">
                  <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-background/90 dark:bg-card/90 border border-border/80 dark:border-white/15 backdrop-blur-md shadow-lg text-xs font-grotesk font-bold">
                    <Sparkles className="w-3.5 h-3.5 text-primary mr-1.5" />
                    <span>Free Virtual Labs &bull; 150+ Open Calculators</span>
                  </div>
                </div>
              </div>

              {/* Floating Top-Left Micro-Badge */}
              <div className="absolute -top-3 -left-3 sm:-left-4 p-2.5 sm:p-3 rounded-2xl bg-background/95 dark:bg-card/95 border border-border/80 dark:border-white/15 shadow-xl backdrop-blur-md flex items-center space-x-2.5 animate-float-slow">
                <div className="w-8 h-8 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center flex-shrink-0">
                  <Award className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <span className="block text-xs font-bold font-grotesk text-foreground">SHRM Certified</span>
                  <span className="block text-[10px] text-muted-foreground font-medium">Leadership Facilitator</span>
                </div>
              </div>

              {/* Floating Bottom-Right Micro-Badge */}
              <div className="absolute -bottom-3 -right-3 sm:-right-4 p-2.5 sm:p-3 rounded-2xl bg-background/95 dark:bg-card/95 border border-border/80 dark:border-white/15 shadow-xl backdrop-blur-md flex items-center space-x-2.5 animate-float-reverse">
                <div className="w-8 h-8 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <span className="block text-xs font-bold font-grotesk text-foreground">DNV Certified</span>
                  <span className="block text-[10px] text-muted-foreground font-medium">IMS Lead Auditor</span>
                </div>
              </div>

              {/* Floating Top-Right LinkedIn Verified Badge */}
              <a 
                href="https://www.linkedin.com/in/toanilsharma" 
                target="_blank" 
                rel="noopener noreferrer"
                className="absolute -top-3 -right-3 sm:-right-4 p-2 sm:p-2.5 rounded-2xl bg-background/95 dark:bg-card/95 border border-[#0077B5]/30 shadow-xl backdrop-blur-md flex items-center space-x-2 transition-transform hover:scale-105 group"
                aria-label="Anil Sharma verified LinkedIn profile"
              >
                <div className="w-7 h-7 rounded-lg bg-[#0077B5]/15 text-[#0077B5] dark:text-[#38BDF8] flex items-center justify-center flex-shrink-0">
                  <Linkedin className="w-3.5 h-3.5 fill-current" />
                </div>
                <div className="text-left pr-1">
                  <span className="block text-[11px] font-bold font-grotesk text-foreground flex items-center gap-1 leading-none">
                    Verified <ExternalLink className="w-2.5 h-2.5 opacity-60" />
                  </span>
                  <span className="block text-[9px] text-muted-foreground font-medium leading-none mt-1">LinkedIn</span>
                </div>
              </a>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};