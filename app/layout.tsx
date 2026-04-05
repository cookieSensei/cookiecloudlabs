import Script from "next/script";
import "./globals.css";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "CookieSensei",
  description: "Build AI Without Setup Headaches",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18048154398"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18048154398');
          `}
        </Script>
      </head>
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