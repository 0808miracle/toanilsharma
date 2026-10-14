import { Header } from '@/components/portfolio/Header';
import { Contact } from '@/components/portfolio/Contact';
import { FAQ } from '@/components/portfolio/FAQ';
import { Footer } from '@/components/portfolio/Footer';
import { BackToTopButton } from '@/components/portfolio/BackToTopButton';
import { Mail, MessageSquare, ShieldCheck, Heart, HelpCircle, Phone, MapPin } from 'lucide-react';
import { BreadcrumbNav } from '@/components/portfolio/BreadcrumbNav';

export const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-primary transition-colors duration-300">
      <Header />
      
      <main className="pt-24 sm:pt-28">
        <BreadcrumbNav items={[{ label: 'Connect & FAQ' }]} />
        
        {/* Page Hero Header */}
        <section className="relative py-12 sm:py-16 bg-secondary/30 dark:bg-card/30 border-b border-border/60 dark:border-white/10 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(rgba(59,130,246,0.08)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
          
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-700 dark:text-cyan-400 mb-4">
                <Mail className="w-3.5 h-3.5" />
                <span>TECHNICAL DIALOGUE &bull; MENTORSHIP &bull; COMMUNITY INQUIRIES</span>
              </div>
              
              <h1 className="font-grotesk text-3xl sm:text-5xl font-black tracking-tight text-foreground leading-tight">
                Connect with Anil Sharma
              </h1>
              
              <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
                Open for engineering peer discussions, feedback on browser simulators, university student mentorship, and academic technical dialogue.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-mono text-muted-foreground">
                <span className="text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1.5">
                  <Heart className="w-3.5 h-3.5" />
                  <span>100% Free &bull; Non-Commercial Community Focus</span>
                </span>
                <span>•</span>
                <span>No Paid Consultations &bull; Academic &amp; Engineering Exchange Only</span>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form & Direct Coordinates */}
        <Contact />

        {/* Technical & Executive FAQ */}
        <section className="py-12 bg-secondary/20 dark:bg-card/20 border-t border-border/60 dark:border-white/10">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FAQ />
          </div>
        </section>
      </main>

      <Footer />
      <BackToTopButton />
    </div>
  );
};

export default ContactPage;
