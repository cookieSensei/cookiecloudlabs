export default function WhyCurriculum() {
  return (
    <section className="py-32 px-6 border-t border-slate-800">

      <div className="w-[min(92vw,1200px)] mx-auto">

        {/* Section Label */}

        <p className="uppercase tracking-[0.3em] text-blue-400 font-semibold mb-6 text-center">
          Why This Curriculum Exists
        </p>

        {/* Title */}

        <h2
          className="
            w-[min(90vw,900px)]
            mx-auto
            text-center
            font-bold
            leading-tight
            text-[clamp(2rem,5vw,3.75rem)]
          "
        >
          Capabilities last longer than technologies.
        </h2>

        {/* Body */}

        <div
          className="
            w-[min(90vw,760px)]
            mx-auto
            mt-14
            space-y-8
            text-lg
            md:text-xl
            text-gray-400
            leading-relaxed
          "
        >

          <p>
            Programming languages evolve.
            Artificial Intelligence evolves.
            Frameworks come and go.
            The tools used by engineers today will not be the same tools used tomorrow.
          </p>

          <p>
            Teaching only today's technologies prepares students for today's
            problems.
            Teaching people how to learn prepares them for the future.
          </p>

          <p>
            That is why CookieSensei is built around <strong className="text-white">capabilities</strong>,
            not trends.
          </p>

          <p>
            Instead of asking
            <span className="text-white"> "What framework should we teach next?" </span>
            we ask
            <span className="text-white">
              {" "}
              "What capability should our learners develop next?"
            </span>
          </p>

          <p>
            Our objective is not simply to teach Python or Artificial
            Intelligence.
            Our objective is to help learners become confident builders who
            can continue learning throughout their careers.
          </p>

        </div>

      </div>

    </section>
  );
}