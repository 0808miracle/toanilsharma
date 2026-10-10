import { ShieldCheck, Award, Factory, Cpu, Flame, Layers, CheckCircle2 } from "lucide-react";

interface MarqueeItem {
  name: string;
  subtitle: string;
  icon: typeof ShieldCheck;
  highlight?: boolean;
}

const marqueeItems: MarqueeItem[] = [
  {
    name: "Reliance Industries Limited",
    subtitle: "Dahej, Bharuch & Jamnagar Mega-Complexes",
    icon: Factory,
    highlight: true,
  },
  {
    name: "Ambuja Cements Limited",
    subtitle: "2.5 MTPA Greenfield Plant Commissioning",
    icon: Factory,
    highlight: true,
  },
  {
    name: "RIL Learning Academy",
    subtitle: "80+ Specialized E&I Workshops Facilitated",
    icon: Award,
    highlight: false,
  },
  {
    name: "DNV GL Certified",
    subtitle: "IMS Lead Auditor & Safety Governance",
    icon: ShieldCheck,
    highlight: false,
  },
  {
    name: "IEEE Standards",
    subtitle: "Power & Energy Reliability Compliance",
    icon: Cpu,
    highlight: false,
  },
  {
    name: "IEC 61800 & 60079",
    subtitle: "Power Electronics & Hazardous Area Systems",
    icon: Layers,
    highlight: false,
  },
  {
    name: "NFPA 70E & OSHA",
    subtitle: "Electrical Safety & Work Activity Protocols",
    icon: Flame,
    highlight: false,
  },
  {
    name: "ISO 55000",
    subtitle: "Asset Integrity & Lifecycle Management",
    icon: CheckCircle2,
    highlight: false,
  },
];

export const LogoWall = () => {
  // Duplicate array for seamless infinite marquee loop
  const duplicatedItems = [...marqueeItems, ...marqueeItems];

  return (
    <div className="relative bg-secondary/40 dark:bg-card/40 py-10 border-y border-border/60 dark:border-white/10 overflow-hidden">
      <div className="container mx-auto px-4 mb-6">
        <div className="flex items-center justify-center space-x-2 text-center">
          <div className="h-px w-8 bg-primary/40 hidden sm:block" />
          <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-muted-foreground font-grotesk">
            Proven Industrial Leadership &amp; Global Standards Alignment
          </p>
          <div className="h-px w-8 bg-primary/40 hidden sm:block" />
        </div>
      </div>

      {/* Marquee Container with Left & Right Gradient Fade Masks */}
      <div className="relative w-full overflow-hidden group">
        {/* Left Fade Mask */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-32 z-10 bg-gradient-to-r from-background dark:from-background to-transparent" />
        
        {/* Right Fade Mask */}
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-32 z-10 bg-gradient-to-l from-background dark:from-background to-transparent" />

        {/* Scrolling Track */}
        <div className="flex items-center gap-6 sm:gap-8 w-max animate-marquee hover:[animation-play-state:paused] py-2">
          {duplicatedItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={`${item.name}-${index}`}
                className="flex items-center space-x-3.5 px-4 sm:px-5 py-2.5 rounded-xl bg-background/80 dark:bg-background/60 border border-border/70 dark:border-white/10 shadow-sm hover:border-primary/50 hover:shadow-md transition-all duration-300 flex-shrink-0 cursor-default"
              >
                <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${
                  item.highlight 
                    ? 'bg-primary/10 text-primary border border-primary/20' 
                    : 'bg-secondary text-muted-foreground'
                }`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-grotesk font-bold text-sm text-foreground tracking-tight whitespace-nowrap">
                    {item.name}
                  </span>
                  <span className="text-[11px] text-muted-foreground font-medium whitespace-nowrap">
                    {item.subtitle}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
