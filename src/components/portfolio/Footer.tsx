import { Linkedin, Mail, Phone } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-secondary">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <span className="text-2xl font-bold bg-primary text-primary-foreground w-10 h-10 flex items-center justify-center rounded-md flex-shrink-0">AS</span>
              <div>
                <span className="font-grotesk font-bold text-lg leading-tight block">Anil Sharma</span>
                <span className="text-xs text-muted-foreground leading-tight block">Reliability Expert & Trainer</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">Transforming industrial reliability through expertise, innovation, and dedication to excellence.</p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/toanilsharma" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary"><Linkedin /></a>
              <a href="mailto:toanilsharma@gmail.com" className="text-muted-foreground hover:text-primary"><Mail /></a>
              <a href="tel:+917600025028" className="text-muted-foreground hover:text-primary"><Phone /></a>
            </div>
          </div>
          <div className="grid grid-cols-2 md:col-span-2 gap-8">
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#about" className="text-muted-foreground hover:text-primary">About Me</a></li>
                <li><a href="#expertise" className="text-muted-foreground hover:text-primary">Expertise</a></li>
                <li><a href="#experience" className="text-muted-foreground hover:text-primary">Experience</a></li>
                <li><a href="#contact" className="text-muted-foreground hover:text-primary">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Digital Platforms</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="http://toolboxtalk.co.in" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">ToolboxTalk</a></li>
                <li><a href="http://designcalculators.co.in" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">Design Calculators</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Anil Sharma. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};