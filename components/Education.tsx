import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Education = () => {
  const educationData = [
    {
      degree: "PhD in Biomedical Engineering (In Progress)",
      institution: "Stanford University",
      year: "2021 - Present"
    },
    {
      degree: "MSc in Artificial Intelligence",
      institution: "Massachusetts Institute of Technology",
      year: "2019 - 2021"
    },
    {
      degree: "BSc in Electrical and Electronic Engineering",
      institution: "Bangladesh University of Engineering and Technology",
      year: "2014 - 2019"
    }
  ];

  return (
    <section id="education" className="py-16">
      <h2 className="text-3xl font-bold text-center mb-8">Education</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {educationData.map((edu, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{edu.degree}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80">{edu.institution}</p>
              <p className="text-foreground/60">{edu.year}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Education;