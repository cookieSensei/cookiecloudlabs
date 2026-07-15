export default function BuildCard() {
  return (
    <section>
      <div
        className="
          rounded-2xl
          border
          border-blue-500/30
          bg-gradient-to-br
          from-blue-950/30
          to-slate-950/40
          p-10
          text-center
        "
      >
        <p className="uppercase tracking-[0.35em] text-blue-400 text-sm font-semibold mb-4">
          BUILD.
        </p>

        <h3 className="text-3xl font-bold text-white mb-6">
          You've learned enough to begin.
        </h3>

        <div className="space-y-3 text-lg text-gray-300 leading-relaxed">
          <p>The next chapter isn't another lesson.</p>

          <p>It's the software you'll build.</p>

          <p>The problems you'll solve.</p>

          <p>The people you'll help.</p>
        </div>

        <div className="mt-10 pt-6 border-t border-slate-700">
          <p className="text-xl font-semibold text-blue-300">
            Build. Learn. Contribute.
          </p>
        </div>
      </div>
    </section>
  );
}