import { Card, CardContent } from '@/components/ui/card';
import { Award, ShieldCheck, Trophy, Sparkles, CheckCircle, Star } from 'lucide-react';
import { Section, SectionHeader, SectionLabel, SectionTitle, TextGradient } from '@/components/portfolio/Section';

const awardsData = [
  {
    icon: ShieldCheck,
    title: "5x Safety Champion Awards",
    years: "2012, 2014, 2016, 2018, 2022",
    org: "Reliance Industries Limited",
    description: "Awarded by corporate executive leadership for continuous process safety excellence, hazardous area compliance, and achieving zero reportable incidents across multiple high-risk turnaround turnarounds.",
    theme: {
      accent: "text-amber-500",
      border: "hover:border-amber-500/50",
      badge: "bg-amber-500/15 text-amber-500 border-amber-500/30",
      topGradient: "from-amber-400 via-yellow-500 to-amber-600",
      glow: "group-hover:shadow-amber-500/10",
      type: "Executive Safety Laureate",
    }
  },
  {
    icon: Trophy,
    title: "4x Top Trainer – RIL Academy",
    years: "2019, 2021, 2022, 2024",
    org: "Corporate Learning & Development",
    description: "Conferred for exceptional technical facilitation, designing 80+ specialized E&I reliability masterclasses, and upskilling 200+ engineers with premier evaluation scores (Net Promoter Score > 95%).",
    theme: {
      accent: "text-blue-500",
      border: "hover:border-blue-500/50",
      badge: "bg-blue-500/15 text-blue-500 border-blue-500/30",
      topGradient: "from-blue-500 via-indigo-600 to-cyan-500",
      glow: "group-hover:shadow-blue-500/10",
      type: "Master Facilitator",
    }
  },
  {
    icon: Award,
    title: "2x Leadership in Reliability",
    years: "2020, 2023",
    org: "Central Engineering Services",
    description: "Honored for conceptualizing plant-wide automated load shedding architectures across high-voltage distribution networks and driving substantial spares inventory optimization through FMEA categorization.",
    theme: {
      accent: "text-emerald-500",
      border: "hover:border-emerald-500/50",
      badge: "bg-emerald-500/15 text-emerald-500 border-emerald-500/30",
      topGradient: "from-emerald-400 via-teal-500 to-emerald-600",
      glow: "group-hover:shadow-emerald-500/10",
      type: "Engineering Innovation",
    }
  },
  {
    icon: Sparkles,
    title: "2x L&D Innovation Honors",
    years: "Executive Leadership Recognition",
    org: "Talent Development Board",
    description: "Recognized for pioneering web-based interactive digital simulators, open-access engineering clouds, and democratizing complex technical knowledge for younger engineers.",
    theme: {
      accent: "text-purple-500",
      border: "hover:border-purple-500/50",
      badge: "bg-purple-500/15 text-purple-500 border-purple-500/30",
      topGradient: "from-purple-500 via-pink-500 to-indigo-600",
      glow: "group-hover:shadow-purple-500/10",
      type: "Digital Philanthropy",
    }
  }
];

export const Awards = () => {
  return (
    <Section id="awards" className="relative py-24 overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <SectionHeader>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-mono font-semibold text-primary mb-3">
          <Trophy className="w-3.5 h-3.5" />
          <span>PROVEN EXECUTIVE MERIT • CORPORATE RECOGNITION</span>
        </div>
        <SectionLabel>Executive Recognition</SectionLabel>
        <SectionTitle>
          Honors &amp; <TextGradient>Industry Accolades</TextGradient>
        </SectionTitle>
        <p className="mt-3 max-w-2xl mx-auto text-muted-foreground text-sm sm:text-base">
          Formal commendations awarded by corporate executive leadership at Reliance Industries 
          for outstanding process safety, workforce enablement, and technical innovation.
        </p>
      </SectionHeader>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {awardsData.map((award, index) => {
          const Icon = award.icon;
          return (
            <Card 
              key={index} 
              className={`group relative bg-background/80 dark:bg-card/80 backdrop-blur-md border border-border/70 dark:border-white/10 ${award.theme.border} transition-all duration-300 rounded-3xl overflow-hidden hover:shadow-2xl ${award.theme.glow} hover:-translate-y-1.5 flex flex-col justify-between`}
            >
              {/* Top Luxury Metallic Gradient Line */}
              <div className={`h-1.5 bg-gradient-to-r ${award.theme.topGradient}`} />

              <CardContent className="p-6 sm:p-7 flex flex-col justify-between h-full">
                <div>
                  {/* Badge & Emblem */}
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-2xl bg-secondary dark:bg-card border border-border/80 flex items-center justify-center ${award.theme.accent} shadow-md group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${award.theme.badge}`}>
                      {award.theme.type}
                    </span>
                  </div>

                  <h3 className="font-bold text-base sm:text-lg mb-1.5 font-grotesk text-foreground">
                    {award.title}
                  </h3>
                  
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-xs font-mono font-semibold text-primary">
                      {award.years}
                    </span>
                  </div>

                  <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                    {award.org}
                  </p>
                </div>

                <p className="text-xs text-muted-foreground leading-relaxed pt-3 border-t border-border/60 dark:border-white/10">
                  {award.description}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </Section>
  );
};