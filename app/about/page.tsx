export default function About() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20">

      <h1 className="text-3xl font-bold mb-6">
        About CookieSensei
      </h1>

      <p className="text-gray-300 mb-6">
        CookieSensei was created to remove one of the biggest barriers students
        face when learning Artificial Intelligence — setting up the development
        environment.
      </p>

      <p className="text-gray-300 mb-6">
        Many students struggle with installing libraries, fixing dependency
        issues, and running heavy AI workloads on limited laptops. Instead of
        focusing on building real AI systems, they spend hours debugging
        environment problems.
      </p>

      <p className="text-gray-300 mb-6">
        CookieSensei solves this by providing a cloud-based AI development
        environment where students can start coding immediately in their
        browser.
      </p>

      <h2 className="text-xl font-semibold mt-10 mb-4">
        What We Offer
      </h2>

      <ul className="list-disc ml-6 text-gray-300 space-y-2">
        <li>Cloud AI development environment</li>
        <li>AI / ML Engineering Bootcamp</li>
        <li>Real-world project collaboration using GitHub</li>
        <li>Hands-on capstone project development</li>
      </ul>

      <h2 className="text-xl font-semibold mt-10 mb-4">
        Founder
      </h2>

      <p className="text-gray-300">
        CookieSensei was founded by Ashish Chaudhary, who built the platform
        after observing how many students struggle with infrastructure instead
        of focusing on learning AI.
      </p>

    </main>
  );
}