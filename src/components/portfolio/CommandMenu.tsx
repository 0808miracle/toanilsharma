import { useEffect, useState } from 'react';
import { 
  CommandDialog, 
  CommandInput, 
  CommandList, 
  CommandEmpty, 
  CommandGroup, 
  CommandItem,
  CommandSeparator 
} from '@/components/ui/command';
import { 
  Zap, 
  Activity, 
  ShieldCheck, 
  Calculator, 
  Award, 
  BookOpen, 
  Mail, 
  Cpu, 
  Sparkles, 
  Search,
  ExternalLink,
  Flame,
  FileCheck2,
  Quote
} from 'lucide-react';

interface CommandMenuProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const CommandMenu = ({ open, setOpen }: CommandMenuProps) => {
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen(!open);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, [open, setOpen]);

  const handleSelect = (callback: () => void) => {
    setOpen(false);
    callback();
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Search virtual labs, design tools, standards, credentials..." />
      <CommandList className="max-h-[380px] p-2">
        <CommandEmpty className="py-6 text-center text-xs text-muted-foreground">
          No engineering lab or document found.
        </CommandEmpty>

        <CommandGroup heading="Virtual Labs & Physics Solvers (Float64)">
          <CommandItem onSelect={() => handleSelect(() => scrollTo('simulators'))} className="cursor-pointer">
            <Zap className="mr-2.5 h-4 w-4 text-cyan-400" />
            <div className="flex flex-col">
              <span className="font-semibold text-xs text-foreground">Power Electronics Lab (Buck/Boost/SPWM)</span>
              <span className="text-[10px] text-muted-foreground">IEC 61800 • Float64 continuous conduction & FFT</span>
            </div>
          </CommandItem>

          <CommandItem onSelect={() => handleSelect(() => scrollTo('simulators'))} className="cursor-pointer">
            <Flame className="mr-2.5 h-4 w-4 text-rose-500" />
            <div className="flex flex-col">
              <span className="font-semibold text-xs text-foreground">Arc Flash & Incident Energy (IEEE 1584-2018)</span>
              <span className="text-[10px] text-muted-foreground">NFPA 70E PPE categories & arc boundary solver</span>
            </div>
          </CommandItem>

          <CommandItem onSelect={() => handleSelect(() => scrollTo('simulators'))} className="cursor-pointer">
            <Activity className="mr-2.5 h-4 w-4 text-amber-500" />
            <div className="flex flex-col">
              <span className="font-semibold text-xs text-foreground">Turbomachinery Rotor Dynamics (API 617 / 684)</span>
              <span className="text-[10px] text-muted-foreground">ISO 10816 vibration orbits & critical speed resonance</span>
            </div>
          </CommandItem>

          <CommandItem onSelect={() => handleSelect(() => scrollTo('simulators'))} className="cursor-pointer">
            <Cpu className="mr-2.5 h-4 w-4 text-emerald-500" />
            <div className="flex flex-col">
              <span className="font-semibold text-xs text-foreground">2N Industrial UPS Sub-Cycle Transfer</span>
              <span className="text-[10px] text-muted-foreground">IEC 62040-3 static bypass switch (&lt;1.8ms transfer)</span>
            </div>
          </CommandItem>
        </CommandGroup>

        <CommandSeparator className="my-1.5" />

        <CommandGroup heading="Engineering Calculators & Models">
          <CommandItem onSelect={() => handleSelect(() => scrollTo('calculator'))} className="cursor-pointer">
            <Calculator className="mr-2.5 h-4 w-4 text-primary" />
            <div className="flex flex-col">
              <span className="font-semibold text-xs text-foreground">Plant Downtime & Spares ROI Calculator</span>
              <span className="text-[10px] text-muted-foreground">Model annual savings & Bathtub MTBF curves</span>
            </div>
          </CommandItem>

          <CommandItem onSelect={() => handleSelect(() => scrollTo('philosophy'))} className="cursor-pointer">
            <ShieldCheck className="mr-2.5 h-4 w-4 text-indigo-500" />
            <div className="flex flex-col">
              <span className="font-semibold text-xs text-foreground">Interactive FMEA RPN Modeler</span>
              <span className="text-[10px] text-muted-foreground">Severity &times; Occurrence &times; Detection risk matrix</span>
            </div>
          </CommandItem>
        </CommandGroup>

        <CommandSeparator className="my-1.5" />

        <CommandGroup heading="External Open-Access Platforms (100% Free)">
          <CommandItem onSelect={() => handleSelect(() => window.open('https://livesimulators.com', '_blank'))} className="cursor-pointer">
            <ExternalLink className="mr-2.5 h-4 w-4 text-cyan-400" />
            <div className="flex flex-col">
              <span className="font-semibold text-xs text-foreground">LiveSimulators.com</span>
              <span className="text-[10px] text-muted-foreground">65+ Virtual labs & browser physics engines</span>
            </div>
          </CommandItem>

          <CommandItem onSelect={() => handleSelect(() => window.open('https://designcalculators.co.in', '_blank'))} className="cursor-pointer">
            <ExternalLink className="mr-2.5 h-4 w-4 text-blue-500" />
            <div className="flex flex-col">
              <span className="font-semibold text-xs text-foreground">DesignCalculators.co.in</span>
              <span className="text-[10px] text-muted-foreground">150+ IEEE, IEC, ASME & API calculators</span>
            </div>
          </CommandItem>

          <CommandItem onSelect={() => handleSelect(() => window.open('https://electrosafe.homes', '_blank'))} className="cursor-pointer">
            <ExternalLink className="mr-2.5 h-4 w-4 text-emerald-500" />
            <div className="flex flex-col">
              <span className="font-semibold text-xs text-foreground">ElectroSafe.homes</span>
              <span className="text-[10px] text-muted-foreground">Public electrical fire prevention guide</span>
            </div>
          </CommandItem>
        </CommandGroup>

        <CommandSeparator className="my-1.5" />

        <CommandGroup heading="Executive Profile & Recognition">
          <CommandItem onSelect={() => handleSelect(() => scrollTo('about'))} className="cursor-pointer">
            <FileCheck2 className="mr-2.5 h-4 w-4 text-primary" />
            <div className="flex flex-col">
              <span className="font-semibold text-xs text-foreground">Verified Credentials & Accreditations</span>
              <span className="text-[10px] text-muted-foreground">SMU MBA • CCET • DNV IMS Lead Auditor • SHRM</span>
            </div>
          </CommandItem>

          <CommandItem onSelect={() => handleSelect(() => scrollTo('awards'))} className="cursor-pointer">
            <Award className="mr-2.5 h-4 w-4 text-amber-500" />
            <div className="flex flex-col">
              <span className="font-semibold text-xs text-foreground">Awards & Industry Accolades</span>
              <span className="text-[10px] text-muted-foreground">5x Safety Champion • 4x Top Trainer at RIL</span>
            </div>
          </CommandItem>

          <CommandItem onSelect={() => handleSelect(() => scrollTo('contact'))} className="cursor-pointer">
            <Mail className="mr-2.5 h-4 w-4 text-cyan-400" />
            <div className="flex flex-col">
              <span className="font-semibold text-xs text-foreground">Contact & Feedback</span>
              <span className="text-[10px] text-muted-foreground">Academic inquiries & simulator suggestions</span>
            </div>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
};
