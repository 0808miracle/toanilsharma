import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Download, ArrowRight, Settings, Users, LineChart, Briefcase, GraduationCap, Network, Award, Target } from 'lucide-react';
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
          <p className="text-lg text-muted-foreground mb-6">
            Accomplished Reliability Expert and Trainer with over <strong>28 years</strong> of multi-sectoral experience. Adept in improving system reliability across complex, multi-site operations, currently overseeing <strong>15+ petrochemical plants and multiple townships</strong>. I specialize in designing high-impact training programs and building capable technical teams.
          </p>
          <div className="space-y-4 mb-8">
            <Card>
              <CardContent className="flex items-center p-4">
                <Network className="w-8 h-8 mr-4 text-primary" />
                <div>
                  <h4 className="font-semibold">Multi-Site & Multi-Discipline Leadership</h4>
                  <p className="text-sm text-muted-foreground">Proven ability to manage all engineering disciplines across numerous large-scale sites.</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex items-center p-4">
                <Settings className="w-8 h-8 mr-4 text-primary" />
                <div>
                  <h4 className="font-semibold">Proven Methodologies</h4>
                  <p className="text-sm text-muted-foreground">Expertise in RCM, FMEA, RCA, and electrical safety standards (IEC, IEEE, ISO).</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex items-center p-4">
                <Users className="w-8 h-8 mr-4 text-primary" />
                <div>
                  <h4 className="font-semibold">Leadership & Training</h4>
                  <p className="text-sm text-muted-foreground">Successfully trained 200+ engineers and delivered impactful leadership programs.</p>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact">
              <Button size="lg" className="w-full sm:w-auto group">
                Connect with Me <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </a>
            <a href="/Anil-Sharma-CV-2025.docx" download>
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                <Download className="mr-2 h-5 w-5" /> Download Resume
              </Button>
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="relative w-full max-w-md mx-auto">
            <div className="absolute -inset-2 bg-gradient-to-tr from-primary to-blue-500 rounded-lg blur-xl opacity-20"></div>
            <img src="/images/anil-sharma.png" alt="Anil Sharma" className="relative w-full h-auto rounded-lg shadow-2xl" />
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
    </Section>
  );
};