export default function Projects() {
  const projects = [
    {
      title: "Handwritten Digit Classifier",
      tech: "Tensorflow • CNN • MNIST",
      desc: "Train a convolutional neural network to recognize handwritten digits.",
    },
    {
      title: "Sentiment Analysis Model",
      tech: "NLP • NLTK • TensorFlow",
      desc: "Build a sentiment classifier using real movie reviews.",
    },
    {
      title: "Object Detection System",
      tech: "YOLOv8 • OpenCV",
      desc: "Detect objects in images using modern computer vision models.",
    },
    {
      title: "OCR Pipeline",
      tech: "Tesseract • OpenCV",
      desc: "Extract text from images using optical character recognition.",
    },
    {
      title: "Image Classification",
      tech: "Tensorflow • CIFAR10",
      desc: "Train a CNN to classify objects in the CIFAR10 dataset.",
    },
    {
      title: "End-to-End ML Pipeline",
      tech: "Scikit-Learn • Pandas",
      desc: "Build a full machine learning pipeline from data cleaning to evaluation.",
    },
  ];

  return (
    <section className="py-20 px-6">
      <h2 className="text-3xl font-bold text-center mb-12">
        Projects You Will Build
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {projects.map((project, i) => (
          <div
            key={i}
            className="bg-gray-900 border border-gray-800 rounded-xl p-6"
          >
            <h3 className="text-xl font-semibold mb-2">
              {project.title}
            </h3>

            <p className="text-sm text-blue-400 mb-3">
              {project.tech}
            </p>

            <p className="text-gray-400">
              {project.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}