import { Header } from '@/components/portfolio/Header';
import { Hero } from '@/components/portfolio/Hero';
import { About } from '@/components/portfolio/About';
import { Expertise } from '@/components/portfolio/Expertise';
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
        <About />
        <Expertise />
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