export default function WhatYouBuild() {
  const builds = [
    "Train neural networks with PyTorch or Tensorflow",
    "Build ML pipelines with scikit-learn",
    "Detect objects using YOLO",
    "Process text with NLP models",
    "Create computer vision systems with OpenCV",
    "Analyze datasets with Pandas and NumPy",
    // "Train CNN models for image classification",
  ];

  return (
    <section className="py-20 px-6">
      <h2 className="text-3xl font-bold text-center mb-12">
        What You Will Be Able To Build
      </h2>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
        {builds.map((item, i) => (
          <div
            key={i}
            className="bg-gray-900 border border-gray-800 rounded-xl p-6"
          >
            <p className="text-gray-200">
              {item}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}