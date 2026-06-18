"use client";
import { useState } from "react";
import LiteYoutube from "./LiteYoutube";

export default function VideoGallery({ videos }) {
  const [activeId, setActiveId] = useState(videos[0]?.id);

  const activeVideo = videos.find((v) => v.id === activeId);

  return (
    <div className="flex flex-col gap-4">
      {/* Main player */}
      <div className="relative w-full aspect-video rounded-xl overflow-hidden">
        <LiteYoutube
          key={activeId} // key change হলে re-mount হবে
          videoId={activeId}
          title={activeVideo?.title}
        />
      </div>

      {/* Thumbnail list */}
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
        {videos.map((video) => (
          <button
            key={video.id}
            onClick={() => setActiveId(video.id)}
            className={`relative aspect-video rounded-lg overflow-hidden border-2 transition-all ${
              activeId === video.id
                ? "border-primary"
                : "border-transparent opacity-70 hover:opacity-100"
            }`}
          >
            <img
              src={`https://i.ytimg.com/vi/${video.id}/mqdefault.jpg`}
              alt={video.title}
              className="w-full h-full object-cover"
            />
            <span className="absolute bottom-1 left-1 right-1 text-[10px] text-white bg-black/60 rounded px-1 truncate">
              {video.title}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
