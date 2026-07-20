export default function Closing() {
  return (
    <section className="py-40 px-6 border-t border-slate-800">

      <div className="max-w-5xl mx-auto text-center">

        <h2 className="font-bold leading-tight text-[clamp(2rem,4.5vw,3.5rem)]">
          Every builder
          
          starts somewhere.
        </h2>

        <div className="mt-12 max-w-3xl mx-auto space-y-8 text-lg md:text-xl text-slate-300 leading-relaxed">

          <p>
            The CookieSensei Product Internship begins long before the
            internship itself.
          </p>

          <p>
            It begins by learning how to think clearly, build confidently,
            and solve meaningful real-world problems.
          </p>

          <p>
            View the curriculum to see where the journey begins.
          </p>

        </div>

        <div className="mt-16">

          <a
            href="/curriculum"
            className="inline-flex rounded-xl bg-blue-500 px-8 py-4 text-lg font-semibold text-white transition hover:bg-blue-600"
          >
            View the Curriculum
          </a>

        </div>

      </div>

    </section>
  );
}