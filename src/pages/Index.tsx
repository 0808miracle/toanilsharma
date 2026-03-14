import { Header } from '@/components/portfolio/Header';
import { Hero } from '@/components/portfolio/Hero';
import { LogoWall } from '@/components/portfolio/LogoWall';
import { About } from '@/components/portfolio/About';
import { Philosophy } from '@/components/portfolio/Philosophy';
import { Expertise } from '@/components/portfolio/Expertise';
import { Insights } from '@/components/portfolio/Insights';
import { Experience } from '@/components/portfolio/Experience';
import { Projects } from '@/components/portfolio/Projects';
import { Awards } from '@/components/portfolio/Awards';
import { Testimonials } from '@/components/portfolio/Testimonials';
import { Contact } from '@/components/portfolio/Contact';
import { Footer } from '@/components/portfolio/Footer';
import { BackToTopButton } from '@/components/portfolio/BackToTopButton';

const Index = () => {
  return (
    <div className="bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <LogoWall />
        <About />
        <Philosophy />
        <Expertise />
        <Insights />
        <Experience />
        <Projects />
        <Awards />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <BackToTopButton />
    </div>
  );
};

export default Index;