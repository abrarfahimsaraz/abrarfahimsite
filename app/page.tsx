import Hero from '@/components/Hero';
import About from '@/components/About';
import Education from '@/components/Education';
import ResearchInterests from '@/components/ResearchInterests';
import Publications from '@/components/Publications';
import Projects from '@/components/Projects';
import WorkExperience from '@/components/WorkExperience';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Hero />
      <About />
      <Education />
      <ResearchInterests />
      <Publications />
      <Projects />
      <WorkExperience />
      <Skills />
      <Contact />
    </div>
  );
}