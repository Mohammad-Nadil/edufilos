import React from "react";

export default function LogoIcon() {
  return (
    <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 dark:bg-primary/20 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
      <svg
        className="w-6 h-6 text-primary"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 22V12c0-4.4 3.6-8 8-8s8 3.6 8 8v10" />
        <path d="M12 18c-1.5-1-3.5-1-5-1H4v4h3c1.5 0 3 .5 5 2 2-1.5 3.5-2 5-2h3v-4h-3c-1.5 0-3.5 0-5 1z" />
        <path d="M12 4V2" />
      </svg>
    </div>
  );
}
