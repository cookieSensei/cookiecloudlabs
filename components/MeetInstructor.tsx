import Image from "next/image";

export default function MeetInstructor() {
  return (
    <section className="py-28 px-6 text-white">

      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
        Meet Your Instructor
      </h2>

      <div className="max-w-6xl mx-auto bg-gray-900 border border-gray-800 rounded-xl p-8 md:p-12">

        <div className="flex flex-col md:flex-row items-center gap-10">

          <div className="flex-shrink-0">
            <img
              src="/founder.jpg"
              alt="Ashish Chaudhary"
              className="w-44 h-56 object-cover rounded-xl border border-gray-700"
            />
          </div>

          <div className="text-left max-w-3xl">

            <p className="text-lg text-gray-300 mb-6">
              Hi, I'm <span className="text-white font-semibold">Ashish Chaudhary</span>,
              founder of <span className="text-blue-400 font-semibold">CookieSensei</span>.
            </p>

            <p className="text-gray-400 leading-relaxed mb-5">
              I studied Automotive Engineering at Delhi Technological University,
              not Computer Science.
              Like many beginners, I was fascinated by technology but believed
              programming wasn't meant for someone like me.
            </p>

            <p className="text-gray-400 leading-relaxed mb-5">
              Over time, I taught myself through YouTube, Coursera, Udemy,
              documentation, and countless hours of practice.
              Learning programming didn't just teach me how to write code.
              It completely changed the way I think.
            </p>

            <div className="bg-blue-600/10 border border-blue-500/30 rounded-xl p-6 my-8">

              <p className="text-xl md:text-2xl font-semibold text-center italic">
                "Programming doesn't give you ideas.
                <br />
                It gives you the ability to recognize ideas you couldn't see before."
              </p>

            </div>

            <p className="text-gray-400 leading-relaxed mb-6">
              That realization inspired me to create CookieSensei.
              My goal isn't simply to teach Python or Artificial Intelligence.
              My goal is to help people gain the confidence and practical skills
              to use technology to solve real-world problems.
            </p>

            <p className="text-white font-medium">
              If I could overcome my fear of programming, I believe many others can too.
              CookieSensei is my way of making that journey a little easier for the next person.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}