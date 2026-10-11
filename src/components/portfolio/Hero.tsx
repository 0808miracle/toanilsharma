import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { SpotlightCard } from '@/components/ui/SpotlightCard';
import { ParticleGridCanvas } from '@/components/portfolio/ParticleGridCanvas';
import { 
  ArrowRight, 
  PlayCircle, 
  ShieldCheck, 
  Download, 
  Cpu, 
  Award, 
  Sparkles, 
  Layers, 
  TrendingUp, 
  Zap,
  CheckCircle2,
  Heart,
  Calculator,
  ExternalLink
} from 'lucide-react';
import { TextGradient } from '@/components/portfolio/Section';

const missionStats = [
  {
    value: "65+",
    label: "Virtual Labs & Simulators",
    subtext: "First-Principles Browser Physics",
    accent: "text-foreground",
    borderGlow: "group-hover:border-blue-500/50",
    href: "#simulators"
  },
  {
    value: "150+",
    label: "Engineering Calculators",
    subtext: "IEC, IEEE, ASME & API Standards",
    accent: "text-foreground",
    borderGlow: "group-hover:border-cyan-500/50",
    href: "#projects"
  },
  {
    value: "100%",
    label: "Free & Open Access",
    subtext: "Zero Ads • Zero Paywalls • Zero Logs",
    accent: "text-blue-600 dark:text-cyan-400 font-extrabold",
    borderGlow: "group-hover:border-emerald-500/50",
    href: "#philosophy"
  },
  {
    value: "28+",
    label: "Years Industrial Rigor",
    subtext: "Heavy Industry First-Principles",
    accent: "text-foreground",
    borderGlow: "group-hover:border-indigo-500/50",
    href: "#experience"
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
            
            {/* The "No-Conflict" Institutional Independence Banner */}
            <div className="inline-flex max-w-2xl items-center gap-2.5 rounded-2xl border border-blue-500/20 bg-blue-50/80 dark:bg-blue-950/40 px-4 py-2.5 text-xs text-blue-900 dark:text-blue-200 backdrop-blur-md shadow-sm text-left mb-6">
              <ShieldCheck className="h-4 w-4 shrink-0 text-blue-600 dark:text-blue-400 mt-0.5 sm:mt-0" />
              <p className="leading-relaxed">
                <strong className="font-semibold text-blue-950 dark:text-blue-100">A Personal Technical Philanthropy Initiative.</strong>{' '}
                Independent of corporate affiliations. Built strictly for non-commercial, educational, and community skill development.
              </p>
            </div>

            {/* Main Headline */}
            <h1 className="font-grotesk text-3xl sm:text-5xl lg:text-[3.65rem] font-extrabold tracking-tight leading-[1.12]">
              Democratizing Premium{' '}
              <TextGradient>Engineering Intelligence</TextGradient>.
            </h1>

            {/* Mission Sub-headline */}
            <p className="mt-6 text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Empowering hundreds of thousands of students and professionals with enterprise-grade AI tools, virtual labs, and reliability calculators—100% free, forever.
            </p>

            {/* CTA Hierarchy */}
            <div className="mt-8 flex flex-wrap gap-3.5 justify-center lg:justify-start items-center">
              {/* Primary Action */}
              <a href="#simulators" className="w-full sm:w-auto">
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto h-12 px-6 rounded-xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white shadow-lg shadow-blue-500/25 transition-all duration-300 hover:scale-[1.02] group"
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
                  className="w-full sm:w-auto h-12 px-5 rounded-xl font-semibold border-border/80 dark:border-white/15 bg-background/50 hover:bg-secondary/70 backdrop-blur-sm group"
                >
                  <Calculator className="mr-2 h-4 w-4 text-primary" />
                  <span>150+ Design Calculators</span>
                </Button>
              </a>

              {/* Philanthropy Philosophy Link */}
              <a href="#philosophy" className="w-full sm:w-auto">
                <Button 
                  size="lg" 
                  variant="ghost" 
                  className="w-full sm:w-auto h-12 px-4 rounded-xl text-xs sm:text-sm text-muted-foreground hover:text-foreground"
                >
                  <Heart className="mr-1.5 h-3.5 w-3.5 text-rose-500" />
                  <span>The Philanthropy Mission</span>
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
                  alt="Anil Sharma - Creator of Free Technical Engineering Tools"
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

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};