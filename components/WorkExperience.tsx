import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const WorkExperience = () => {
  const experiences = [
    {
      position: "Part Time Teacher",
      company: "Shejuti School & College",
      duration: "June 2024 - Present",
      responsibilities: [
        "Part time English, ICT, and Biology instructor for students of class IX and X."
      ]
    },
    {
      position: "Technical Writing Intern",
      company: "The Financial Express Bangladesh",
      duration: "Jan 2022 - July 2022",
      responsibilities: [
        {
          text: "Content writing trainee for the Sci-tech section and published two articles:",
          subpoints: [
            "Elon Musk’s long-standing vision to integrate A.I. into the human brain.",
            "Your smartphone screen can be black and white."
          ]
        }
      ]
    },
    {
      position: "Tutor & Mentor",
      company: "Shikkhangon (Learning Academy)",
      duration: "March 2020 - June 2024",
      responsibilities: [
        "Provided personalized instruction in English and Biology to students, helping in their academics."
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
                  typeof resp === "string" ? (
                    <li key={idx}>{resp}</li>
                  ) : (
                    <li key={idx}>
                      {resp.text}
                      <ul className="list-disc list-inside ml-4">
                        {resp.subpoints.map((subpoint, subIdx) => (
                          <li key={subIdx}>{subpoint}</li>
                        ))}
                      </ul>
                    </li>
                  )
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



