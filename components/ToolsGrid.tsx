export default function ToolsGrid() {
  const tools = [
    "Python",
    "Git",
    "NumPy",
    "Pandas",
    "Scikit-Learn",
    "TensorFlow",
    "PyTorch",
    "OpenCV",
    "YOLO",
    "NLTK",
    "spaCy",
  ];

  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold text-center mb-12">
        Tools Used by Real AI Engineers
      </h2>

      <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
        {tools.map((tool) => (
          <span
            key={tool}
            className="bg-gray-900 border border-gray-700 px-4 py-2 rounded-lg"
          >
            {tool}
          </span>
        ))}
      </div>
    </section>
  );
}