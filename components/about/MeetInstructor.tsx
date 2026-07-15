import Image from "next/image";

export default function MeetInstructor() {
  return (
    <section className="py-24">

      <div className="mx-auto max-w-6xl px-6">

        {/* Story */}

        <div className="max-w-3xl mx-auto mb-16">

          <p className="uppercase tracking-[0.35em] text-blue-400 text-sm font-semibold mb-6">
            The Person Behind CookieSensei
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-10">
            Every idea on this page began
            
            in the classroom.
          </h2>

          <div className="space-y-8 text-xl leading-relaxed text-gray-300">

            <p>
              Years of teaching programming, data science, and artificial
              intelligence gave me the opportunity to work with learners from
              diverse backgrounds, each bringing different experiences,
              strengths, and challenges to the classroom.
            </p>

            <p>
              Over time, one observation became impossible to ignore. Many
              students struggled long before they encountered advanced
              programming concepts. They often lost confidence before they had
              a fair opportunity to discover what they were capable of
              building.
            </p>

            <p>
              Watching learners succeed, and watching others become discouraged
              by unnecessary barriers, shaped the philosophy behind
              CookieSensei.
            </p>

            <p>
              The goal was never simply to create another programming course.
              It was to create a learning environment where curiosity comes
              before complexity, practical experience comes before
              memorization, and learners develop the confidence to continue
              learning long after the course ends.
            </p>

            <p className="text-white font-medium">
              CookieSensei is the result of that journey.
            </p>

          </div>

        </div>

        {/* Instructor Card */}

        <div className="max-w-6xl mx-auto rounded-3xl border border-slate-800 bg-slate-900/40 overflow-hidden">

          <div className="grid lg:grid-cols-[320px_1fr]">

            {/* Left */}

            <div className="border-b lg:border-b-0 lg:border-r border-slate-800 p-10 flex flex-col items-center justify-center text-center">

              <Image
                src="/founder.jpg"
                alt="Ashish Chaudhary"
                width={220}
                height={280}
                className="rounded-2xl object-cover border border-slate-700"
              />

              <h3 className="mt-8 text-3xl font-bold text-white">
                Ashish Chaudhary
              </h3>

              <p className="mt-3 text-blue-300 text-lg">
                Founder & Instructor
              </p>

            </div>

            {/* Right */}

            <div className="p-10 lg:p-12">

              <div className="space-y-7 text-lg leading-relaxed text-gray-300">

                <p>
                  I studied Automotive Engineering at Delhi Technological
                  University, not Computer Science. Like many beginners, I was
                  fascinated by technology but believed programming wasn't meant
                  for someone like me.
                </p>

                <p>
                  Over time, I learned through YouTube, Coursera, Udemy,
                  technical documentation, open-source projects, and countless
                  hours of practice.
                </p>

                <p className="text-white font-medium text-xl">
                  Programming didn't just teach me how to write software.
                  <br />
                  It completely changed the way I think.
                </p>

                <div className="rounded-2xl border border-blue-500/30 bg-blue-500/10 p-8 my-10">

                  <p className="text-center italic text-2xl leading-relaxed text-white">

                    "Programming doesn't give you ideas.

                    <br />
                    <br />

                    It gives you the ability to recognize ideas you couldn't
                    see before."

                  </p>

                </div>

                <p>
                  Today, CookieSensei is my way of helping others begin that
                  same journey with fewer obstacles than I faced.
                </p>

                <p>
                  If someone leaves here with greater confidence, stronger
                  problem-solving skills, and the curiosity to continue learning
                  independently, then CookieSensei has achieved exactly what it
                  was created to do.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}