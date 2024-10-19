import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Education = () => {
  const educationData = [
    {
      degree: "BSc. in Electrical and Electronic Engineering",
      institution: "Islamic University of Technology",
      year: "2020-2024"
    },
    {
      degree: "HSC (Science)",
      institution: "Chittagong College",
      year: "2017 - 2019"
    },
    {
      degree: "SSC (Science)",
      institution: "Govt. Muslim High School",
      year: "2011 - 2017"
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