import Link from "next/link";

export default function Footer() {
  return (
    <footer className="text-center py-10 border-t border-white/10 text-gray-500 space-x-4">

      <Link href="/privacy-policy">Privacy Policy</Link>
      <Link href="/terms">Terms</Link>
      <Link href="/refund-policy">Refund Policy</Link>
      <Link href="/contact">Contact</Link>

      <div className="mt-4">
        © 2026 CookieCloud Labs – Build. Learn. Contribute.
      </div>

    </footer>
  );
}