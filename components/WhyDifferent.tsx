export default function WhyDifferent() {
  const features = [
    {
      title: "Real AI Engineering",
      desc: "Learn PyTorch, TensorFlow, Computer Vision and NLP — not just toy ML models.",
    },
    {
      title: "Git + Professional Workflow",
      desc: "Master Git and GitHub so you learn real development practices used in AI teams.",
    },
    {
      title: "Build Real Projects",
      desc: "Train CNNs, build ML pipelines, and work with real datasets.",
    },
  ];

  return (
    <section className="py-20 px-6">
      <h2 className="text-3xl font-bold text-center mb-12">
        What Makes CookieSensei Different
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((f, i) => (
          <div
            key={i}
            className="bg-gray-900 border border-gray-800 p-6 rounded-xl"
          >
            <h3 className="text-xl font-semibold mb-2">{f.title}</h3>

            <p className="text-gray-400">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}