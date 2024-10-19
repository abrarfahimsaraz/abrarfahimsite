import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const WorkExperience = () => {
  const experiences = [
    {
      position: "Research Assistant",
      company: "Stanford Bioengineering Lab",
      duration: "2021 - Present",
      responsibilities: [
        "Conducting research on AI applications in neural engineering",
        "Developing machine learning models for biomedical signal processing",
        "Collaborating with interdisciplinary teams on cutting-edge projects"
      ]
    },
    {
      position: "AI Engineer Intern",
      company: "Neuralink",
      duration: "Summer 2020",
      responsibilities: [
        "Assisted in the development of AI algorithms for brain-computer interfaces",
        "Contributed to the optimization of neural decoding techniques",
        "Participated in data analysis and visualization of brain activity patterns"
      ]
    },
    {
      position: "Undergraduate Research Assistant",
      company: "BUET AI Lab",
      duration: "2018 - 2019",
      responsibilities: [
        "Worked on machine learning projects related to healthcare applications",
        "Assisted in the development of a deep learning model for medical image analysis",
        "Contributed to academic papers and presentations"
      ]
    }
  ];

  return (
    <section id="experience" className="py-16">
      <h2 className="text-3xl font-bold text-center mb-8">Work Experience</h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{exp.position}</CardTitle>
              <p className="text-foreground/80">{exp.company}</p>
              <p className="text-foreground/60">{exp.duration}</p>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-foreground/80">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx}>{resp}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;