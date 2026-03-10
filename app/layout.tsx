import Script from "next/script";
import "./globals.css";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "CookieCloud Labs",
  description: "Build AI Without Setup Headaches",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-white overflow-x-hidden">

        <Script
          src="https://checkout.razorpay.com/v1/checkout.js"
          strategy="beforeInteractive"
        />
        <Navbar />
        {children}

        <BackToTop />
        <Footer />
      </body>
    </html>
  );
}