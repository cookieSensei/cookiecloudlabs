interface SuccessMessageProps {
  onClose: () => void;
}

export default function SuccessMessage({
  onClose,
}: SuccessMessageProps) {
  return (
    <div className="mt-10 text-center">

      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-blue-500/30 bg-blue-500/10">
        <span className="text-4xl text-blue-400">
          ✓
        </span>
      </div>

      <h3 className="mt-8 text-3xl font-bold">
        Message Received
      </h3>

      <p className="mt-6 text-lg text-slate-300 leading-relaxed">
        Thank you for reaching out.
      </p>

      <p className="mt-4 text-lg text-slate-300 leading-relaxed">
        I'll get back to you as soon as I can.
      </p>

      <button
        onClick={onClose}
        className="mt-10 rounded-xl bg-blue-500 px-8 py-4 text-lg font-semibold text-white transition hover:bg-blue-600"
      >
        Done
      </button>

    </div>
  );
}