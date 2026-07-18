"use client";

import { useEffect, useState } from "react";

export default function BackToTop() {

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  if (!visible) return null;

  return (
<button
  onClick={scrollToTop}
  className="fixed bottom-6 right-6 bg-blue-500 hover:bg-blue-600 text-white px-4 py-3 rounded-full shadow-lg transition-colors duration-200 z-50">
  ↑
</button>
  );
}