"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import ThemeToggle from "../ui/ThemeToggle";
import LanguageToggle from "../ui/LanguageToggle";
import { Menu, X, ChevronDown } from "lucide-react";
import LogoIcon from "../ui/LogoIcon";

export default function PublicHeader() {
  const { lang } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  const headerRef = useRef(null);

  const navLinks = [
    { href: "#home", en: "Home", bn: "হোম" },
    {
      href: "#features",
      en: "Features",
      bn: "ফিচারসমূহ",
      hasDropdown: true,
      dropdownItems: [
        {
          href: "/studentManagement",
          en: "Student Management",
          bn: "ছাত্র ব্যবস্থাপনা",
        },
        {
          href: "/academicSystem",
          en: "Academic System",
          bn: "একাডেমিক সিস্টেম",
        },
        { href: "/feesManagement", en: "Fees Management", bn: "ফি কালেকশন" },
      ],
    },
    { href: "/pricing", en: "Pricing", bn: "প্রাইসিং" },
    { href: "/module", en: "Modules", bn: "মডিউলস" },
    { href: "/resources", en: "Resources", bn: "রিসোর্স" },
    { href: "/about", en: "About Us", bn: "আমাদের সম্পর্কে" },
  ];

  useEffect(() => {
    function handleClickOutside(event) {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setIsOpen(false);
        setMobileDropdownOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <header
      ref={headerRef}
      className="sticky top-0 w-full bg-white dark:bg-background py-3 z-50"
    >
      <div className="container mx-auto px-2 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group select-none">
          <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 dark:bg-primary/20 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
            <LogoIcon />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-black text-foreground leading-none font-roboto">
              EduFilos
            </span>
            <span className="text-[8px] text-muted font-medium tracking-wide mt-0.5">
              {lang === "BN"
                ? "মাদরাসা ম্যানেজমেন্ট সিস্টেম"
                : "Madrasha Management System"}
            </span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link, idx) => (
            <div key={idx} className="relative group/nav">
              <Link
                href={link.href === "#home" ? "/" : link.href}
                className="px-3 py-2 rounded-lg text-sm font-medium text-foreground/80 hover:text-primary hover:bg-card flex items-center gap-1 transition-all"
              >
                {lang === "BN" ? link.bn : link.en}
                {link.hasDropdown && (
                  <ChevronDown className="w-3 h-3 opacity-70 group-hover/nav:rotate-180 transition-transform" />
                )}
              </Link>

              {link.hasDropdown && (
                <div className="absolute top-full left-0 mt-1 w-52 rounded-xl bg-card border border-border-custom shadow-lg opacity-0 invisible group-hover/nav:opacity-100 group-hover/nav:visible transition-all duration-200 p-1.5 flex flex-col gap-0.5">
                  {link.dropdownItems.map((sub, sIdx) => (
                    <Link
                      key={sIdx}
                      href={sub.href}
                      className="px-3 py-2 text-xs font-medium text-muted hover:text-primary hover:bg-background rounded-lg transition-colors"
                    >
                      {lang === "BN" ? sub.bn : sub.en}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <ThemeToggle />
          <LanguageToggle />

          <Link
            href="/demo"
            className="hidden sm:inline-flex h-9 px-4 rounded-xl bg-primary text-primary-foreground text-xs font-bold items-center justify-center shadow-sm hover:opacity-90 active:scale-95 transition-all select-none"
          >
            {lang === "BN" ? "ডেমো বুক করুন →" : "Book a Demo →"}
          </Link>

          <button
            onClick={() => {
              setIsOpen(!isOpen);
              if (isOpen) setMobileDropdownOpen(false);
            }}
            className="lg:hidden w-9 h-9 rounded-xl border border-border-custom flex items-center justify-center text-foreground hover:bg-card transition-colors focus:outline-none"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-card border-b border-border-custom shadow-xl animate-in fade-in slide-in-from-top-5 duration-200">
          <div className="p-4 flex flex-col gap-1.5">
            {navLinks.map((link, idx) => (
              <div key={idx} className="w-full">
                {link.hasDropdown ? (
                  <div className="w-full flex flex-col">
                    <button
                      onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                      className="w-full px-4 py-2.5 rounded-xl text-sm font-medium text-foreground/90 hover:bg-background hover:text-primary flex items-center justify-between transition-all"
                    >
                      <span>{lang === "BN" ? link.bn : link.en}</span>
                      <ChevronDown
                        className={`w-4 h-4 opacity-70 transition-transform duration-200 ${mobileDropdownOpen ? "rotate-180" : ""}`}
                      />
                    </button>

                    {mobileDropdownOpen && (
                      <div className="pl-6 pr-2 py-1 flex flex-col gap-1 bg-neutral-50/50 dark:bg-neutral-900/30 rounded-xl mt-1 border border-neutral-100 dark:border-border-custom/30">
                        {link.dropdownItems.map((sub, sIdx) => (
                          <Link
                            key={sIdx}
                            href={sub.href}
                            onClick={() => {
                              setIsOpen(false);
                              setMobileDropdownOpen(false);
                            }}
                            className="px-4 py-2 rounded-lg text-sm font-medium text-muted hover:text-primary hover:bg-background transition-colors"
                          >
                            {lang === "BN" ? sub.bn : sub.en}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-2.5 rounded-xl text-sm font-medium text-foreground/90 hover:bg-background hover:text-primary transition-all"
                  >
                    {lang === "BN" ? link.bn : link.en}
                  </Link>
                )}
              </div>
            ))}

            <Link
              href="/demo"
              onClick={() => setIsOpen(false)}
              className="mt-3 w-full h-11 rounded-xl bg-primary text-primary-foreground font-bold flex items-center justify-center text-sm shadow-sm active:scale-95 transition-transform"
            >
              {lang === "BN" ? "ডেমো বুক করুন" : "Book a Demo"}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
