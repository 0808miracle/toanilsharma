import { SpotlightCard } from '@/components/ui/SpotlightCard';
import { Lightbulb, ShieldCheck, HeartHandshake, Quote, Award } from 'lucide-react';
import { Section, SectionHeader, SectionLabel, SectionTitle, TextGradient } from '@/components/portfolio/Section';
import { sounds } from '@/utils/soundEffects';

const insightsData = [
  {
    icon: Lightbulb,
    badge: "Field Intuition",
    title: "Practical Reliability",
    note: "Reliability is not just about complex formulas. In my 28 years, I have seen that simple things like regular inspection and understanding your machine's 'voice' can prevent 80% of major failures.",
    signature: "On Preventative Maintenance",
    accentColor: "from-amber-400 via-yellow-500 to-amber-600",
    iconBg: "bg-amber-500/10 text-amber-500 border-amber-500/20"
  },
  {
    icon: ShieldCheck,
    badge: "Life-Critical Safety",
    title: "Safety is Personal",
    note: "Whether it is a multi-billion dollar petrochemical plant or your own home, safety shouldn't be a burden. Through ElectroSafe, I want to make fire prevention knowledge simple for everyone.",
    signature: "On Zero-Harm Culture",
    accentColor: "from-blue-500 via-indigo-600 to-cyan-500",
    iconBg: "bg-blue-500/10 text-blue-500 border-blue-500/20"
  },
  {
    icon: HeartHandshake,
    badge: "Open Engineering",
    title: "Why Free Tools?",
    note: "I have learned so much from the industry and the society. Building these 150+ calculators is just my small way of giving back to the young engineers and students who will lead tomorrow.",
    signature: "On Technical Philanthropy",
    accentColor: "from-emerald-400 via-teal-500 to-emerald-600",
    iconBg: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20"
  }
];

export const Insights = () => {
  return (
    <Section id="insights" className="relative py-24 overflow-hidden bg-slate-950/5">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <SectionHeader>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-mono font-semibold text-primary mb-3">
          <Quote className="w-3.5 h-3.5" />
          <span>FIELD PHILOSOPHY &amp; EXECUTIVE VISION</span>
        </div>
        <SectionLabel>Thoughts &amp; Vision</SectionLabel>
        <SectionTitle>
          Reliability <TextGradient>Insights</TextGradient>
        </SectionTitle>
        <p className="mt-3 max-w-2xl mx-auto text-muted-foreground text-sm sm:text-base">
          Core principles distilled from 28+ years of continuous-process industrial operations, 
          asset governance, and knowledge democratization.
        </p>
      </SectionHeader>

      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {insightsData.map((item, index) => {
          const Icon = item.icon;
          return (
            <SpotlightCard
              key={index}
              spotlightColor="rgba(59, 130, 246, 0.35)"
              onMouseEnter={() => sounds.playHover()}
              className="group relative bg-background/80 dark:bg-card/80 backdrop-blur-md border border-border/70 dark:border-white/10 hover:border-primary/40 transition-all duration-300 rounded-3xl overflow-hidden hover:shadow-2xl hover:-translate-y-1.5 flex flex-col justify-between"
            >
              {/* Luxury Accent Bar */}
              <div className={`h-1.5 bg-gradient-to-r ${item.accentColor}`} />

              <div className="p-7 flex flex-col justify-between h-full relative">
                {/* Background Watermark Quote */}
                <Quote className="absolute right-4 top-5 w-24 h-24 text-primary/[0.04] dark:text-primary/[0.07] pointer-events-none -rotate-12 transition-transform group-hover:scale-110" />

                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center ${item.iconBg} shadow-md group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border border-primary/20 bg-primary/10 text-primary">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-grotesk text-foreground mb-3">
                    {item.title}
                  </h3>

                  <p className="text-muted-foreground text-sm italic leading-relaxed relative z-10">
                    "{item.note}"
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-border/60 dark:border-white/10 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold font-grotesk text-foreground block">
                      Anil Sharma
                    </span>
                    <span className="text-[11px] text-muted-foreground font-mono block">
                      {item.signature}
                    </span>
                  </div>
                  <div className="w-7 h-7 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                    <Award className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </SpotlightCard>
          );
        })}
      </div>
    </Section>
  );
};
