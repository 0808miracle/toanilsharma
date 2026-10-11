import { lazy, Suspense } from 'react';
import { Header } from '@/components/portfolio/Header';
import { Hero } from '@/components/portfolio/Hero';
import { LogoWall } from '@/components/portfolio/LogoWall';
import { About } from '@/components/portfolio/About';
import { Philosophy } from '@/components/portfolio/Philosophy';
import { Expertise } from '@/components/portfolio/Expertise';
import { Insights } from '@/components/portfolio/Insights';
import { Experience } from '@/components/portfolio/Experience';
import { Footer } from '@/components/portfolio/Footer';
import { BackToTopButton } from '@/components/portfolio/BackToTopButton';

// Code-split below-the-fold heavy modules
const LiveSimulatorsSection = lazy(() => import('@/components/portfolio/LiveSimulatorsSection').then(m => ({ default: m.LiveSimulatorsSection })));
const ReliabilityCalculator = lazy(() => import('@/components/portfolio/ReliabilityCalculator').then(m => ({ default: m.ReliabilityCalculator })));
const Projects = lazy(() => import('@/components/portfolio/Projects').then(m => ({ default: m.Projects })));
const ToolArchitecture = lazy(() => import('@/components/portfolio/ToolArchitecture').then(m => ({ default: m.ToolArchitecture })));
const Awards = lazy(() => import('@/components/portfolio/Awards').then(m => ({ default: m.Awards })));
const FAQ = lazy(() => import('@/components/portfolio/FAQ').then(m => ({ default: m.FAQ })));
const Contact = lazy(() => import('@/components/portfolio/Contact').then(m => ({ default: m.Contact })));

const SectionLoader = () => (
  <div className="w-full py-16 flex items-center justify-center text-muted-foreground">
    <div className="w-8 h-8 rounded-full border-2 border-primary/20 border-t-primary animate-spin" />
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-primary transition-colors duration-300">
      <Header />
      <main>
        <Hero />
        <LogoWall />
        <About />
        <Philosophy />
        <Expertise />
        <Insights />
        <Experience />
        <Suspense fallback={<SectionLoader />}>
          <LiveSimulatorsSection />
          <ReliabilityCalculator />
          <Projects />
          <ToolArchitecture />
          <Awards />
          <FAQ />
          <Contact />
        </Suspense>
      </main>
      <Footer />
      <BackToTopButton />
    </div>
  );
};

export default Index;