import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-16">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center mb-8">About Me</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-foreground/80 leading-relaxed mb-6">
            As a graduate in Electrical and Electronic Engineering with a passion for Engineering and Machine Learning, I enjoy creating machine learning models to tackle real-world healthcare challenges. My work spans a range of cutting-edge projects, including mobile applications for real-time cataract detection, optimizing neural networks for brain tumor classification, and exploring AI-driven solutions for antibiotic resistance prediction. With expertise in Python, MATLAB, and various deep learning frameworks, I am constantly pushing myself to create impactful, real-world applications.
          </p>
          <p className="text-lg text-foreground/80 leading-relaxed">
            I have a pretty competitive nature. Outside of work, I enjoy mentoring students and staying active through a variety of sports, both indoor and outdoor, such as badminton, cricket, table tennis, and soccer. Moreover, I also have an interest in competitive online gaming, especially FPS games.
          </p>
        </CardContent>
      </Card>
    </section>
  );
};

export default About;
