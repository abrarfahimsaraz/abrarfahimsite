import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

interface SkillCategory {
  category: string;
  skills: string[];
}

const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      category: "Languages",
      skills: ["Matlab", "C", "LaTex", "Assembly", "HTML"]
    },
    {
      category: "Data Analysis",
      skills: ["Python", "Numpy", "Pandas", "Matplotlib", "Seaborn"]
    },
    {
      category: "Software",
      skills: [
        "Google Colab", "Google Docs", "Microsoft Office Suite", "MATLAB",
        "Proteus", "Tinkercad", "PSIM", "Adobe Illustrator", "Adobe Photoshop", "AI Tools"
      ]
    },
    {
      category: "Interpersonal Skills",
      skills: ["Documentation", "Event Management", "Problem-solving", "Troubleshooting", "Presentation", "Teamwork"]
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
                  <Badge key={`${index}-${idx}`}>{skill}</Badge>
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
