import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
const ResearchInterests = () => {
  const interests = [
    {
      title: "Computer Vision",
      description: "Developing applications that use image processing and machine learning to interpret and analyze medical images, aiding in diagnostic accuracy and treatment planning."
    },
    {
      title: "Machine Learning",
      description: "Leveraging advanced algorithms to create predictive models and enhance decision-making processes in medical diagnostics and treatment."
    },
    {
      title: "Biomedical Devices",
      description: "Exploring innovative advancements in combining engineering principles with medical sciences to develop cutting-edge equipments for healthcare improvement."
    },
    
    
    {
      title: "Image Processing",
      description: "Exploring the use of machine learning algorithms for enhancing image processing techniques, enabling more accurate analysis, pattern recognition, and automation in various fields such as healthcare and security."
    },
    {
      title: "Medical Imaging",
      description: "Advancing the use of imaging technologies such as MRI, CT scans, and ultrasound for enhanced visualization of internal body structures to improve diagnostics and patient outcomes."
    },
    {
      title: "Signal Processing",
      description: "Processing physiological signals, such as ECG, EEG, and EMG, to extract valuable clinical insights, enabling early diagnosis and monitoring of various medical conditions."
    }
  ];

  return (
    <section id="research" className="py-16">
      <h2 className="text-3xl font-bold text-center mb-8">Research Interests</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {interests.map((interest, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="text-lg">{interest.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80">
                {interest.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ResearchInterests;
