import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
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
  CheckCircle2
} from 'lucide-react';
import { TextGradient } from '@/components/portfolio/Section';

const impactStats = [
  {
    value: "28+",
    label: "Years Experience",
    subtext: "Tier-1 Industrial Operations",
    accent: "text-foreground",
    borderGlow: "group-hover:border-blue-500/50"
  },
  {
    value: "15+",
    label: "Mega-Plants Managed",
    subtext: "World-Scale Petrochemicals",
    accent: "text-foreground",
    borderGlow: "group-hover:border-cyan-500/50"
  },
  {
    value: "27",
    label: "Automated Substations",
    subtext: "220kV to 6.6kV Load Shedding",
    accent: "text-foreground",
    borderGlow: "group-hover:border-indigo-500/50"
  },
  {
    value: "₹8 Cr",
    label: "Spares Inventory Saved",
    subtext: "Criticality & SAP Optimization",
    accent: "text-blue-600 dark:text-cyan-400 font-extrabold",
    borderGlow: "group-hover:border-emerald-500/50"
  }
];

export const Hero = () => {
  return (
    <section id="home" className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden">
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
          
          {/* Left Column: Command Center Pitch & CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left">
            
            {/* Live Status Capsule: Availability + Ecosystem */}
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2 p-1.5 pr-3.5 rounded-full bg-secondary/80 dark:bg-card/80 border border-border/80 dark:border-white/10 shadow-sm text-xs mb-6 backdrop-blur-sm">
              <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 mr-1.5 animate-ping" />
                Available for Advisory &amp; Turnarounds
              </span>
              <span className="hidden sm:inline-flex text-muted-foreground text-[11px] items-center">
                <Zap className="w-3 h-3 text-primary mr-1" />
                5 Free Engineering Clouds
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-grotesk text-3xl sm:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight leading-[1.15]">
              Driving Industrial Excellence in{' '}
              <TextGradient>Projects, Reliability, Maintenance &amp; Training</TextGradient>
            </h1>

            {/* Executive Subtitle */}
            <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Senior engineering leader with <span className="font-semibold text-foreground">28+ years of hands-on expertise</span> across Reliance Industries and Ambuja Cements. Spearheading world-scale petrochemical turnarounds, automated load-shedding systems, and creator of the open-access <span className="font-semibold text-foreground">LiveSimulators</span> engineering cloud.
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
              <a href="#contact" className="w-full sm:w-auto">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="w-full sm:w-auto h-12 px-5 rounded-xl font-semibold border-border/80 dark:border-white/15 bg-background/50 hover:bg-secondary/70 backdrop-blur-sm group"
                >
                  <span>Advisory &amp; Turnarounds</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>

              {/* Tertiary Action: Digital Platforms */}
              <a href="#projects" className="w-full sm:w-auto">
                <Button 
                  size="lg" 
                  variant="ghost" 
                  className="w-full sm:w-auto h-12 px-4 rounded-xl text-xs sm:text-sm text-muted-foreground hover:text-foreground"
                >
                  Digital Platforms (5)
                </Button>
              </a>

              {/* Download CV Chip */}
              <a 
                href="/Anil-Sharma-CV-2025.docx" 
                download
                className="w-full sm:w-auto"
                title="Download Anil Sharma Executive CV (.docx)"
              >
                <Button 
                  size="lg" 
                  variant="ghost" 
                  className="w-full sm:w-auto h-12 px-3.5 rounded-xl text-xs text-primary border border-primary/20 hover:bg-primary/5"
                >
                  <Download className="mr-1.5 h-3.5 w-3.5" />
                  <span>CV (.docx)</span>
                </Button>
              </a>
            </div>

            {/* Impact Metric Cards */}
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3.5 sm:gap-4 max-w-2xl mx-auto lg:mx-0">
              {impactStats.map((stat, index) => (
                <div 
                  key={index}
                  className={`group relative p-3.5 sm:p-4 rounded-2xl bg-secondary/50 dark:bg-card/50 border border-border/70 dark:border-white/10 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${stat.borderGlow}`}
                >
                  <div className="flex items-baseline space-x-1 justify-center lg:justify-start">
                    <span className={`text-2xl sm:text-3xl font-bold font-grotesk tracking-tight ${stat.accent}`}>
                      {stat.value}
                    </span>
                  </div>
                  <p className="mt-1 text-xs font-semibold text-foreground/90 leading-tight">
                    {stat.label}
                  </p>
                  <p className="mt-0.5 text-[10px] text-muted-foreground leading-tight truncate">
                    {stat.subtext}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Architectural Executive Portrait Frame */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <div className="relative w-full max-w-md mx-auto">
              
              {/* Backlight Ambient Glow Ring */}
              <div 
                className="absolute -inset-2 bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-500 rounded-3xl blur-2xl opacity-20 dark:opacity-30 animate-pulse pointer-events-none" 
                aria-hidden="true"
              />

              {/* Chamfered Architectural Photo Container */}
              <div className="relative p-2 rounded-3xl bg-background/80 dark:bg-card/80 border border-border/80 dark:border-white/15 shadow-2xl backdrop-blur-md overflow-hidden">
                <img
                  src="/images/anil-sharma.webp"
                  alt="Anil Sharma - Senior Industrial Reliability Expert & Trainer"
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
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary mr-1.5" />
                    <span>RCM • FMEA • RCA • Industrial Automation</span>
                  </div>
                </div>
              </div>

              {/* Floating Top-Left Micro-Badge */}
              <div className="absolute -top-3 -left-3 sm:-left-4 p-2.5 sm:p-3 rounded-2xl bg-background/95 dark:bg-card/95 border border-border/80 dark:border-white/15 shadow-xl backdrop-blur-md flex items-center space-x-2.5">
                <div className="w-8 h-8 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center flex-shrink-0">
                  <Award className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <span className="block text-xs font-bold font-grotesk text-foreground">SHRM Certified</span>
                  <span className="block text-[10px] text-muted-foreground font-medium">Leadership Facilitator</span>
                </div>
              </div>

              {/* Floating Bottom-Right Micro-Badge */}
              <div className="absolute -bottom-3 -right-3 sm:-right-4 p-2.5 sm:p-3 rounded-2xl bg-background/95 dark:bg-card/95 border border-border/80 dark:border-white/15 shadow-xl backdrop-blur-md flex items-center space-x-2.5">
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