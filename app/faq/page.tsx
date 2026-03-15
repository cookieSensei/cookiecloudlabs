
import FAQ from "@/components/FAQ";

export const metadata = {
  title: "FAQ | CookieSensei",
  description:
    "Frequently asked questions about the CookieSensei AI bootcamp and CookieCloud Labs.",
};

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-[#0b1220] text-white">
      <FAQ />
    </main>
  );
}