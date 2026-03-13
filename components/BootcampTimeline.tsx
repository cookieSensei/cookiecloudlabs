export default function BootcampTimeline() {
  return (
    <section className="py-24 px-6 bg-black text-white text-center">

      <h2 className="text-4xl font-bold mb-12">
        Bootcamp Structure
      </h2>

      <div className="max-w-5xl mx-auto grid md:grid-cols-4 gap-8">

        <div className="bg-zinc-900 p-6 rounded-xl">
          <h3 className="font-bold text-lg mb-2">Week 1</h3>
          <p className="text-gray-400">
            Python basics + AI fundamentals
          </p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-xl">
          <h3 className="font-bold text-lg mb-2">Week 2</h3>
          <p className="text-gray-400">
            Machine learning concepts and simple models
          </p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-xl">
          <h3 className="font-bold text-lg mb-2">Week 3</h3>
          <p className="text-gray-400">
            Build real AI tools using APIs and datasets
          </p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-xl">
          <h3 className="font-bold text-lg mb-2">Week 4</h3>
          <p className="text-gray-400">
            Capstone project + deployment
          </p>
        </div>

      </div>

    </section>
  );
}