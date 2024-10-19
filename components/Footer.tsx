import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background shadow-md mt-12">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <p className="text-foreground">&copy; 2023 Abrar Fahim. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="https://github.com/abrarfahim" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary">
              <Github className="h-6 w-6" />
            </a>
            <a href="https://linkedin.com/in/abrarfahim" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="mailto:abrar.fahim@example.com" className="text-foreground hover:text-primary">
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;