"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  "/gallery/1.png",
  "/gallery/2.png",
  "/gallery/3.png",
  "/gallery/4.png",
  "/gallery/5.png",
  "/gallery/6.png",
  "/gallery/7.png",
  "/gallery/8.png",
  "/gallery/9.png",
];

export default function Gallery({ open, onClose }: any) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const prevImage = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
  };

  const nextImage = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex + 1) % images.length);
  };

  // keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;

      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "Escape") setSelectedIndex(null);
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedIndex]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/95 z-50 overflow-y-auto">

      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white text-3xl z-50"
      >
        ✕
      </button>

      <div className="max-w-6xl mx-auto px-6 py-20">

        <h2 className="text-3xl font-bold text-center mb-10 text-white">
          Cloud AI Workspace
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

          {images.map((src, i) => (
            <div
              key={i}
              onClick={() => setSelectedIndex(i)}
              className="cursor-pointer rounded-xl overflow-hidden border border-white/10 hover:scale-105 transition"
            >
              <Image
                src={src}
                alt="workspace"
                width={1200}
                height={800}
                className="w-full h-auto"
              />
            </div>
          ))}

        </div>

      </div>

      {/* Fullscreen Viewer */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 bg-black/95 flex items-center justify-center z-50">

          {/* Left Arrow */}
          <button
            onClick={prevImage}
            className="absolute left-6 text-white text-4xl hover:scale-110 transition"
          >
            ←
          </button>

          {/* Image */}
          <Image
            src={images[selectedIndex]}
            alt="preview"
            width={1600}
            height={1000}
            className="max-h-[90vh] w-auto"
          />

          {/* Right Arrow */}
          <button
            onClick={nextImage}
            className="absolute right-6 text-white text-4xl hover:scale-110 transition"
          >
            →
          </button>

          {/* Close Preview */}
          <button
            onClick={() => setSelectedIndex(null)}
            className="absolute top-6 right-6 text-white text-3xl"
          >
            ✕
          </button>

        </div>
      )}
    </div>
  );
}