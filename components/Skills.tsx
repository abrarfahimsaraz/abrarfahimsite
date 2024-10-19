import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: ["Python", "MATLAB", "C++", "R", "JavaScript"]
    },
    {
      category: "Machine Learning / AI",
      skills: ["TensorFlow", "PyTorch", "Scikit-learn", "Keras", "Deep Learning"]
    },
    {
      category: "Biomedical Engineering",
      skills: ["Signal Processing", "Neural Engineering", "BCI Design", "EEG Analysis"]
    },
    {
      category: "Data Analysis",
      skills: ["Pandas", "NumPy", "SciPy", "Matplotlib", "Seaborn"]
    },
    {
      category: "Tools & Technologies",
      skills: ["Git", "Docker", "CUDA", "LabVIEW", "SPSS"]
    }
  ];

  return (
    <section id="skills" className="py-16">
      <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{category.category}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <Badge key={idx} variant="secondary">{skill}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Skills;