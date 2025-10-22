import { Button } from '@/components/ui/button';
import { ArrowRight, PlayCircle, Shield } from 'lucide-react';
import { TextGradient } from '@/components/portfolio/Section';

export const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-grid-slate-900/[0.04] bg-[10px_10px] [mask-image:linear-gradient(to_bottom,white,transparent)] dark:bg-grid-slate-400/[0.05]"></div>
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center bg-secondary text-secondary-foreground rounded-full px-4 py-1 text-sm font-medium mb-4">
              <Shield className="w-4 h-4 mr-2 text-primary" />
              Reliability Expert & Trainer
            </div>
            <h1 className="font-grotesk text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
              Mastering Reliability for
              <span className="block">Complex Industrial Assets</span>
              <TextGradient>Boosting Uptime by 20%+</TextGradient>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0">
              Accomplished Reliability Expert with 28+ years of experience improving system reliability across <span className="font-semibold text-foreground">multiple sites</span>. I design high-impact training and lead <span className="font-semibold text-foreground">diverse engineering teams</span> to achieve operational excellence.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#contact">
                <Button size="lg" className="w-full sm:w-auto group">
                  Start Your Transformation
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>
              <a href="#projects">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  <PlayCircle className="mr-2 h-5 w-5" />
                  View My Projects
                </Button>
              </a>
            </div>
            <div className="mt-10 flex justify-center lg:justify-start space-x-8 text-sm">
              <div className="text-center">
                <p className="font-bold text-2xl font-grotesk">200+</p>
                <p className="text-muted-foreground">Engineers Trained</p>
              </div>
              <div className="text-center">
                <p className="font-bold text-2xl font-grotesk">15+</p>
                <p className="text-muted-foreground">Petrochemical Plants</p>
              </div>
              <div className="text-center">
                <p className="font-bold text-2xl font-grotesk">28+</p>
                <p className="text-muted-foreground">Years of Experience</p>
              </div>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary to-blue-500 rounded-full blur-2xl opacity-20"></div>
              <img
                src="/placeholder.svg"
                alt="Anil Sharma - Reliability Expert"
                className="relative w-full h-auto rounded-full border-8 border-background shadow-2xl"
              />
              {/* You can replace the src above with "/images/anil-sharma.jpg" after adding your image to the public/images folder. */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};