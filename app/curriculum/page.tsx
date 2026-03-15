export default function CurriculumPage() {
  const curriculum = [
    {
      title: "Module 1 — Developer Foundations",
      topics: [
        "Python fundamentals",
        "Running scripts and environments",
        "Data types and operators",
        "Functions and control flow",
        "Git fundamentals",
        "Version control with GitHub",
        "Writing clean Python code",
      ],
    },
    {
      title: "Module 2 — Data Science Foundations",
      topics: [
        "NumPy for numerical computing",
        "Pandas for data manipulation",
        "Data cleaning workflows",
        "Exploratory Data Analysis",
        "Data visualization with Matplotlib",
        "Visualization with Seaborn",
      ],
    },
    {
      title: "Module 3 — Machine Learning",
      topics: [
        "Supervised learning",
        "Regression models",
        "Classification models",
        "Clustering techniques",
        "Feature engineering",
        "Model evaluation",
        "Using Scikit-Learn",
      ],
    },
    {
      title: "Module 4 — Deep Learning",
      topics: [
        "Neural networks fundamentals",
        "Training models with TensorFlow",
        "Building models in PyTorch",
        "CNNs for image recognition",
        "Training MNIST models",
        "Training CIFAR10 CNNs",
      ],
    },
    {
      title: "Module 5 — Computer Vision",
      topics: [
        "Image processing with OpenCV",
        "Image thresholding",
        "Object detection with YOLOv8",
        "OCR pipelines with Tesseract",
      ],
    },
    {
      title: "Module 6 — Natural Language Processing",
      topics: [
        "Text preprocessing",
        "Tokenization with NLTK",
        "Word embeddings",
        "spaCy NLP pipelines",
        "Sentiment analysis",
        "IMDB dataset models",
      ],
    },
    {
      title: "Module 7 — Capstone Projects",
      topics: [
        "Train a CNN from scratch",
        "Build a complete ML pipeline",
        "Real-world dataset analysis",
        "Deployable machine learning workflow",
      ],
    },
  ];

  const tools = [
    "Python",
    "Git",
    "NumPy",
    "Pandas",
    "Matplotlib",
    "Seaborn",
    "Scikit-Learn",
    "TensorFlow",
    "PyTorch",
    "OpenCV",
    "YOLOv8",
    "NLTK",
    "spaCy",
    "Tesseract OCR",
  ];

  return (
    <main className="max-w-6xl mx-auto px-6 py-20 text-white">
      <h1 className="text-4xl font-bold text-center mb-6">
        Bootcamp Curriculum
      </h1>

      <p className="text-gray-300 text-center mb-14">
        A practical AI & Machine Learning bootcamp covering Python, Git,
        Data Science, Machine Learning and Deep Learning using industry tools.
      </p>

      {/* Tools */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Tools & Frameworks You Will Learn
        </h2>

        <div className="flex flex-wrap justify-center gap-3">
          {tools.map((tool, i) => (
            <span
              key={i}
              className="bg-gray-800 border border-gray-700 px-4 py-2 rounded-lg text-sm"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>

      {/* Curriculum */}
      <div className="space-y-8">
        {curriculum.map((module, i) => (
          <div
            key={i}
            className="bg-[#111827] border border-gray-700 rounded-xl p-6"
          >
            <h2 className="text-xl font-semibold mb-4">
              {module.title}
            </h2>

            <ul className="list-disc ml-6 text-gray-300 space-y-1">
              {module.topics.map((topic, j) => (
                <li key={j}>{topic}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </main>
  );
}