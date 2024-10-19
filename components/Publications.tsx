import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Publications = () => {
  const publications = [
    {
      title: "Predicting Antibiotic Resistance in Gonococcal Gonorrhea: A Comparative Study of Machine Learning and Deep Learning Approaches with Explainable AI",
      description: "Utilized Explainable AI (XAI) tools to explore machine learning and deep learning techniques, such as GRU and LSTM, for predicting antibiotic resistance in Neisseria gonorrhoeae, demonstrating high prediction accuracy and potential solutions for antibiotic resistance in public health.",
      status: "Under Review, ICCIT 2024, IEEE Conferences"
    },
    {
      title: "Analysis of Pre-trained CNN Models in MRI-Based Brain Tumor Detection",
      description: "Performed a comparative analysis of five pre-trained CNN models (InceptionV3, ResNet-50, VGG-16, MobileNetV2, DenseNet121) for classifying brain tumors in MRI images, with DenseNet121 and MobileNetV2 achieving the highest test accuracy in both binary and multi-class classification tasks, showing promise for clinical use.",
      status: "Under Review, ICCIT 2024, IEEE Conferences"
    },
    {
      title: "VisionEdge: Cataract Detection via Smartphone",
      description: "Developed VisionEdge, a mobile app using MobileNetV2 for real-time cataract detection with 99.11% accuracy, optimized for Edge Intelligence, providing a cost-effective and accessible solution for cataract screening.",
      status: "Under Review, ICCIT 2024, IEEE Conferences"
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
              <p className="text-foreground/80">{pub.description}</p>
              <br /> {/* Line break for space between description and status */}
              <p className="text-foreground/60">{pub.status}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Publications;
