import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Publications = () => {
  const publications = [
    {
      title: "AI-Driven Brain-Computer Interfaces: A Comprehensive Review",
      authors: "Fahim, A., Smith, J., & Johnson, L.",
      journal: "Nature Neuroscience",
      year: 2022
    },
    {
      title: "Machine Learning Approaches in Biomedical Signal Processing: Current Trends and Future Directions",
      authors: "Fahim, A., & Brown, R.",
      journal: "IEEE Transactions on Biomedical Engineering",
      year: 2021
    },
    {
      title: "Neuroprosthetic Advancements: Integrating AI for Enhanced Functionality",
      authors: "Johnson, L., Fahim, A., & Davis, M.",
      journal: "Frontiers in Neuroscience",
      year: 2020
    }
  ];

  return (
    <section id="publications" className="py-16">
      <h2 className="text-3xl font-bold text-center mb-8">Publications</h2>
      <div className="space-y-6">
        {publications.map((pub, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{pub.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80">{pub.authors}</p>
              <p className="text-foreground/60">{pub.journal}, {pub.year}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Publications;