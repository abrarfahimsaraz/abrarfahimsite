import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Projects = () => {
  const projects = [
    {
      title: "Plasmonic Coupling and Thermal Effects on Photothermal Response of Randomly Distributed Nanoparticles",
      description: "Investigated the influence of plasmonic coupling on the photothermal behavior of silver nanoparticles and applied the Discrete Dipole Approximation (DDA) along with thermal Green’s function to compute temperature profiles under illumination. Simulated the code in MATLAB and Python to illustrate nanoscale temperature profiles, histograms, scatterplots, and absorption spectra.",
      status: "Undergraduate Thesis"
    },
    {
      title: "SecureQRGen: Double Layer Encrypted QR Code Generator",
      description: "Developed a Python-based QR code generator and GUI using PyQt5 for encrypted data transmission and scanning."
    },
    {
      title: "AI Sudoku Solver Using Constraint Satisfaction",
      description: "Developed a Sudoku solver incorporating a PyQt5-based interface for real-time interaction and puzzle-solving."
    },
    {
      title: "Credit Card Fraud Detection",
      description: "Conducted an analysis on a dataset comprising credit card transactions, handled the imbalance ratio, and compared different classifiers to enhance fraud detection using machine learning in Google Colab."
    },
    {
      title: "Precision Servo Motor Control Using PID Controller",
      description: "Designed and implemented an algorithm in MATLAB for motor control, improving positioning accuracy and response time."
    },
    {
      title: "Electricity Generation Using Thermoelectric Plates",
      description: "Developed a portable thermoelectric generator (TEG) using the Seebeck effect to generate electricity, leveraging dry ice and a magnifying glass."
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
              {project.status && (
                <>
                  <br />
                  <p className="text-foreground/60">{project.status}</p>
                </>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Projects;
