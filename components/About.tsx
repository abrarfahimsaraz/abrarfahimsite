import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-16">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center mb-8">About Me</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-foreground/80 leading-relaxed">
            I am an aspiring PhD candidate with a passion for bridging the gap between Biomedical Engineering and Artificial Intelligence. My research focuses on developing innovative AI-driven solutions for complex biomedical challenges, with a particular interest in neural engineering and brain-computer interfaces. Through my work, I aim to contribute to advancements in healthcare technology and improve patient outcomes.
          </p>
        </CardContent>
      </Card>
    </section>
  );
};

export default About;