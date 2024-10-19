"use client"

import { useState } from 'react';
import Link from 'next/link';
import { ModeToggle } from './mode-toggle';
import { Menu } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-background shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-primary">
              Abrar Fahim
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="#about" className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium">About</Link>
              <Link href="#education" className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium">Education</Link>
              <Link href="#research" className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium">Research</Link>
              <Link href="#publications" className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium">Publications</Link>
              <Link href="#projects" className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium">Projects</Link>
              <Link href="#experience" className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium">Experience</Link>
              <Link href="#skills" className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium">Skills</Link>
              <Link href="#contact" className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
            </div>
          </div>
          <div className="flex items-center">
            <ModeToggle />
            <div className="ml-4 md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="#about" className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium">About</Link>
            <Link href="#education" className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium">Education</Link>
            <Link href="#research" className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium">Research</Link>
            <Link href="#publications" className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium">Publications</Link>
            <Link href="#projects" className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium">Projects</Link>
            <Link href="#experience" className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium">Experience</Link>
            <Link href="#skills" className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium">Skills</Link>
            <Link href="#contact" className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;