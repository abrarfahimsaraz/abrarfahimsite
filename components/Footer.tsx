import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background shadow-md mt-12">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <p className="text-foreground">&copy; 2024 Abrar Fahim. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="https://github.com/abrarfahimsaraz" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary">
              <Github className="h-6 w-6" />
            </a>
            <a href="https://www.linkedin.com/in/abrarfahimsaraz/" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="mailto:abrarfahim619@gmail.com" className="text-foreground hover:text-primary">
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;