import { cn } from "@/lib/utils";

const logos = [
  { name: "Reliance Industries", logo: "RELIANCE" },
  { name: "Ambuja Cements", logo: "AMBUJA" },
];

export const LogoWall = () => {
  return (
    <div className="bg-background py-12 border-y border-border/50">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-8">
          Trusted by Industrial Leaders
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="group flex items-center justify-center"
            >
              <span className="text-xl md:text-2xl font-black font-grotesk tracking-tighter text-foreground group-hover:text-primary transition-colors">
                {logo.logo}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
