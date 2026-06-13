"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Globe } from "lucide-react";
import React from "react";

const LanguageToggle = () => {
  const { lang, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="py-2 px-2 sm:px-3 rounded-xl bg-card border border-border-custom flex items-center gap-2 text-foreground shadow-sm hover:scale-105 active:scale-95 transition-all  cursor-pointer focus:outline-none select-none"
      aria-label="Toggle Language"
    >
      <Globe className="w-4 h-4 text-muted group-hover:text-primary transition-colors " />

      <span className=" hidden sm:block text-xs font-bold tracking-wide uppercase font-en">
        {lang === "BN" ? "বাংলা" : "English"}
      </span>
      <span className="sm:hidden text-xs font-bold tracking-wide uppercase font-en">
        {lang === "BN" ? "Bn" : "En"}
      </span>
    </button>
  );
};

export default LanguageToggle;
