"use client";
import { useState } from "react";
import Image from "next/image";

export default function LiteYoutube({
  videoId,
  title = "YouTube video",
  className = "",
}) {
  const [active, setActive] = useState(false);

  if (active) {
    return (
      <iframe
        className={`w-full h-full ${className}`}
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    );
  }

  return (
    <button
      onClick={() => setActive(true)}
      className={`relative w-full h-full group cursor-pointer ${className}`}
      aria-label={`Play: ${title}`}
    >
      {/* YouTube thumbnail — hqdefault free, maxresdefault better quality */}
      <Image
        src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
        alt={title}
        fill
        className="object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />

      {/* Play button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
          <svg viewBox="0 0 24 24" fill="white" className="w-7 h-7 ml-1">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
    </button>
  );
}
