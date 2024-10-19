import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Projects = () => {
  const projects = [
    {
      title: "AI-Enhanced EEG Analysis Tool",
      description: "Developed a machine learning model to improve the accuracy of EEG signal interpretation for early detection of neurological disorders."
    },
    {
      title: "Neuroprosthetic Control System",
      description: "Designed and implemented an AI-driven control system for neuroprosthetic devices, improving responsiveness and natural movement."
    },
    {
      title: "Brain-Computer Interface for Communication",
      description: "Created a BCI system that allows individuals with severe motor disabilities to communicate through thought-controlled text generation."
    }
  ];

  return (
    <section id="projects" className="py-16">
      <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80">{project.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Projects;