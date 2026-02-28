import "./globals.css";

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
        {children}
      </body>
    </html>
  );
}