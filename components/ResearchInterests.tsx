import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ResearchInterests = () => {
  const interests = [
    "Neural Engineering",
    "Brain-Computer Interfaces",
    "Machine Learning in Healthcare",
    "Biomedical Signal Processing",
    "AI-driven Diagnostic Tools",
    "Neuroprosthetics"
  ];

  return (
    <section id="research" className="py-16">
      <h2 className="text-3xl font-bold text-center mb-8">Research Interests</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {interests.map((interest, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="text-lg">{interest}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80">
                Exploring innovative applications and advancements in this field.
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ResearchInterests;