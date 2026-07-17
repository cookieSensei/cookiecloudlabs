import Link from "next/link";

export default function CTA() {
  return (
    <section
      id="register"
      className="py-32"
    >
      <div className="mx-auto max-w-4xl px-6 text-center">

        <p className="mb-6 text-sm font-semibold uppercase tracking-[0.35em] text-blue-400">
          Ready to Begin?
        </p>

        <h2 className="mb-10 text-4xl font-bold leading-tight text-white md:text-6xl">
          Build your first product.
          <br />
          Experience modern software development.
        </h2>

        <div className="space-y-6 text-xl leading-relaxed text-gray-300">

          <p>
            Whether you have an idea for a startup, a personal project,
            or you're simply curious about how modern software is built,
            this workshop is your opportunity to experience the complete
            development journey.
          </p>

          <p>
            No programming experience
          </p>

          <p>
            No software installation
          </p>

          <p className="font-medium text-white">
            Just your browser and curiosity
          </p>

        </div>

        <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">

         <Link
            href="/workshops/register"
            className="rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-500"
            >
            Register for a Workshop
            </Link>


        </div>

      </div>
    </section>
  );
}