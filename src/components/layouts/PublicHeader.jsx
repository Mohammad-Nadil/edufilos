"use client";

import React from "react";
import Link from "next/link";
import { LayoutDashboard, Sparkles, Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function PublicHeader({ user }) {
  const { lang, toggleLanguage } = useLanguage();

  const dashboardUrl = user?.role ? `/dashboard/${user.role}` : "/login";

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/70 backdrop-blur-md border-b border-slate-200/50 py-3 transition-all">
      <div className="container mx-auto px-3 sm:px-4 md:px-6">
        <div className="flex items-center justify-between gap-1.5 sm:gap-4">
          <Link
            href="/"
            className="flex items-center group focus:outline-none shrink-0"
          >
            <span className="font-black text-lg sm:text-xl tracking-tight text-slate-900 transition-colors group-hover:text-emerald-950">
              EduFilos<span className="text-emerald-700 italic">.</span>
            </span>
          </Link>

          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
            <button
              onClick={toggleLanguage}
              className="flex items-center justify-center gap-0.5 text-[11px] sm:text-xs font-bold text-slate-600 hover:text-emerald-800 bg-slate-100/90 border border-slate-200/40 px-2 py-1.5 rounded-xl transition-colors active:scale-95 select-none"
            >
              <Globe className="w-3 h-3 text-slate-400 shrink-0" />
              <span className="w-6 sm:w-8 text-center block sm:hidden">
                {lang}
              </span>
              <span className="hidden sm:block min-w-8 text-center">
                {lang === "BN" ? "বাংলা" : "EN"}
              </span>
            </button>

            {user && user.role ? (
              <Link href={dashboardUrl} className="shrink-0">
                <button className="h-8.5 px-3 text-xs font-bold text-white bg-emerald-800 hover:bg-emerald-900 shadow-sm active:scale-95 transition-all rounded-xl flex items-center gap-1">
                  <LayoutDashboard className="w-3.5 h-3.5" />
                  <span>{lang === "BN" ? "ড্যাশবোর্ড" : "Dashboard"}</span>
                </button>
              </Link>
            ) : (
              <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
                <Link
                  href="/login"
                  className="hidden xs:inline-block text-xs font-bold text-slate-600 hover:text-emerald-800 transition-colors px-1 py-1"
                >
                  {lang === "BN" ? "লগইন" : "Sign In"}
                </Link>

                <Link href="/register-madrasha" className="shrink-0">
                  <button className="h-8.5 px-2.5 sm:px-4 text-xs font-extrabold text-white bg-slate-900 hover:bg-slate-800 active:scale-95 transition-all rounded-xl flex items-center gap-1 shadow-md">
                    <Sparkles className="w-3 h-3 text-amber-400 fill-amber-400 shrink-0 hidden sm:block" />
                    <span>{lang === "BN" ? "শুরু করুন" : "Get Started"}</span>
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
