import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="text-center py-20 gradient-bg">
      <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
        Abrar Fahim
      </h1>
      <h2 className="text-2xl md:text-3xl text-white mb-8">
        Aspiring PhD Candidate in Biomedical Engineering and Machine Learning
      </h2>
      <Button className="bg-white text-primary hover:bg-primary hover:text-white transition-colors duration-300">
        About My Research <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </section>
  );
};

export default Hero;