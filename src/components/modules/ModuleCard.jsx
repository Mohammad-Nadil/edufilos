"use client";

import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

export default function ModuleCard({
  title,
  description,
  Icon,
  featured,
  iconColor = "bg-primary/10 text-primary",
  horizontal = false,
  className = "",
  showImage = false,
}) {
  return (
    <article
      className={`
      group
      relative
      overflow-hidden
      rounded-3xl
      border
      border-border-custom
      bg-card
      p-6
      transition-all
      duration-300
      hover:-translate-y-2
      hover:border-primary/20
      shadow-[0_2px_12px_rgba(15,23,42,0.06)]
      hover:shadow-[0_20px_40px_rgba(15,23,42,0.12)]
      dark:shadow-[0_2px_12px_rgba(0,0,0,0.3)]
      dark:hover:shadow-[0_20px_40px_rgba(0,0,0,0.45)]
      ${className}
    `}
    >
      {/* Premium top accent */}
      <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-primary via-gold to-primary opacity-0 transition-all duration-300 group-hover:opacity-100" />

      {/* ONLY HERE (Student Management) */}
      {showImage && (
        <Image
          src="/modina.png"
          alt="mokka"
          width={557}
          height={322}
          className="absolute right-0 bottom-0 opacity-40"
        />
      )}

      {horizontal ? (
        <div className="flex items-start gap-4">
          <div
            className={`flex h-14 w-14 items-center justify-center rounded-2xl ${iconColor}`}
          >
            <Icon size={24} />
          </div>

          <div className="flex-1">
            <h3 className="text-xl font-bold text-foreground">{title}</h3>
            <p className="mt-3 text-sm leading-6 text-muted">{description}</p>

            <button className="mt-4 flex items-center gap-2 text-sm font-semibold text-primary">
              Explore Module
              <FaArrowRight size={12} />
            </button>
          </div>
        </div>
      ) : (
        <>
          <div
            className={`flex h-14 w-14 items-center justify-center rounded-2xl ${iconColor}`}
          >
            <Icon size={24} />
          </div>

          <h3 className="mt-5 text-xl font-bold text-foreground">{title}</h3>

          <p className="mt-3 text-sm leading-6 text-muted">{description}</p>

          <button className="mt-6 flex items-center gap-2 text-sm font-semibold text-primary">
            Explore Module
            <FaArrowRight size={12} />
          </button>
        </>
      )}
    </article>
  );
}
