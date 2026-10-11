import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Download, ArrowRight, Settings, Users, LineChart, Briefcase, GraduationCap, Network, Award, Target, CheckCircle } from 'lucide-react';
import { Section, SectionHeader, SectionLabel, SectionTitle, TextGradient } from '@/components/portfolio/Section';
import { useInView } from '@/hooks/useInView';
import { useEffect, useState } from 'react';

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

export const About = () => {
  return (
    <Section id="about" className="bg-secondary">
      <SectionHeader>
        <SectionLabel>About Me</SectionLabel>
        <SectionTitle>
          Driving Excellence Through <TextGradient>Reliability Engineering</TextGradient>
        </SectionTitle>
      </SectionHeader>
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-xl mb-8">
            <h3 className="font-bold text-primary mb-2 flex items-center">
              <ArrowRight className="w-4 h-4 mr-2" />
              Professional Background &amp; Engineering Scope
            </h3>
            <p className="text-sm leading-relaxed text-foreground/80">
              Senior engineering professional with over <strong className="text-primary font-bold">28 years</strong> of hands-on industrial leadership across continuous process and petrochemical manufacturing complexes. Dedicated specialist in plant reliability (RCM/FMEA), electrical power distribution, automation architectures, and engineering capability development.
            </p>
          </div>
          <p className="text-lg text-muted-foreground mb-6">
            Industrial engineering leader and SHRM Certified Facilitator with extensive operational experience across continuous process plants. Passionate about applying first-principles physics to plant reliability, while authoring 100% free, open-access engineering simulation platforms for the worldwide engineering community.
          </p>
          <div className="space-y-4 mb-8">
            <Card>
              <CardContent className="flex items-center p-4">
                <Network className="w-8 h-8 mr-4 text-primary" />
                <div>
                  <h3 className="font-semibold">Large-Scale Capital Project Governance</h3>
                  <p className="text-sm text-muted-foreground">Steering multi-disciplinary engineering, electrical switchyards, and plant infrastructure modernizations.</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex items-center p-4">
                <Settings className="w-8 h-8 mr-4 text-primary" />
                <div>
                  <h3 className="font-semibold">Proven First-Principles Methodologies</h3>
                  <p className="text-sm text-muted-foreground">Expertise in RCM, FMEA, RCA, and global engineering standards (IEC, IEEE, ISO, NFPA).</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex items-center p-4">
                <Users className="w-8 h-8 mr-4 text-primary" />
                <div>
                  <h3 className="font-semibold">People Development &amp; Technical Mentorship</h3>
                  <p className="text-sm text-muted-foreground">Trained 200+ engineers in power systems, switchgear safety, and reliability-centered maintenance.</p>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#simulators">
              <Button size="lg" className="w-full sm:w-auto group">
                Explore Live Simulators <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </a>
            <a href="#projects">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                View 150+ Design Calculators
              </Button>
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="relative w-full max-w-md mx-auto">
            <div className="absolute -inset-2 bg-gradient-to-tr from-primary to-blue-500 rounded-lg blur-xl opacity-20"></div>
            <img
              src="/images/anil-sharma.webp"
              alt="Anil Sharma - Senior Reliability Expert"
              width={781}
              height={1159}
              loading="lazy"
              className="relative w-full h-auto rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-4 -right-4 bg-background p-3 rounded-full shadow-lg flex items-center space-x-2 text-sm font-semibold">
              <Award className="w-5 h-5 text-primary" />
              <span>SHRM Certified</span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {metrics.map((metric, index) => (
          <div key={index}>
            <metric.icon className="w-10 h-10 mx-auto mb-2 text-primary" />
            <div className="text-4xl font-bold font-grotesk"><AnimatedCounter to={metric.value} />+</div>
            <p className="text-muted-foreground">{metric.label}</p>
          </div>
        ))}
      </div>

      {/* Verified Academic & Professional Credentials */}
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
              title: "DVN Certified IMS Lead Auditor",
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
            <div key={cIndex} className="p-4 rounded-xl bg-background/60 border border-border/50 hover:border-primary/40 transition-colors">
              <div className="flex items-center gap-2 mb-1.5">
                <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                <h4 className="font-semibold text-sm">{cred.title}</h4>
              </div>
              <p className="text-xs text-primary/80 font-medium mb-1 pl-6">{cred.institution}</p>
              <p className="text-[11px] text-muted-foreground pl-6 leading-relaxed">{cred.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};