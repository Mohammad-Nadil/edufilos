"use client";

import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "next-themes";
import { ctaText } from "@/helper/module/cta";
import Link from "next/link";
import lanternImg from "@/../public/lantern.png";

export default function CtaBanner() {
  const { lang } = useLanguage();
  const { theme } = useTheme();

  const isDark = theme === "dark";

  const t = ctaText[lang];

  return (
    <section className="py-16 px-4 bg-background transition-colors duration-300">
      <div className="relative overflow-hidden rounded-[24px] bg-primary border border-gold/30 transition-all duration-300">
        {/* Pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle,var(--accent-gold) 1px,transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        {/* Right Frame */}
        <Image
          src="/frame.png"
          alt=""
          width={170}
          height={260}
          className="absolute right-4 bottom-0 w-28 md:w-36 lg:w-44 h-auto scale-x-[-1] pointer-events-none opacity-90"
        />

        <Image
          src={lanternImg}
          alt="lantern image"
          width={80}
          height={120}
          className="absolute right-16 -top-24 w-12 md:w-16 lg:w-20"
          style={{ height: "auto" }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-8 py-14">
          <div className="grid lg:grid-cols-2 items-center">
            {/* Left */}

            <div className="max-w-xl">
              <h2
                className={`text-primary-foreground font-bold text-3xl md:text-4xl leading-tight
                  ${lang === "BN" ? "font-bn" : "font-en"}
                `}
              >
                {t.title1}
                <br />
                {t.title2}
              </h2>

              <p
                className={`
                  text-primary-foreground/80
                  mt-5
                  text-lg
                  leading-8
                  ${lang === "BN" ? "font-bn" : "font-en"}
                `}
              >
                {t.description}
              </p>
            </div>

            {/* Right */}

            <div className="flex flex-col lg:flex-row items-center justify-center gap-6">
              <div className="hidden lg:block h-40 w-[1px] bg-gold/60" />

              <Link href="/demo">
                <button className="bg-gold hover:opacity-90 transition-all text-white font-semibold px-6 py-5 rounded-xl flex items-center gap-3 shadow-lg cursor-pointer">
                  {t.demo}
                  <FaArrowRight />
                </button>
              </Link>

              <Link
                href="/feature"
                className={`border border-white transition-all font-semibold px-6 py-5 rounded-xl flex items-center gap-3 cursor-pointer
                  ${
                    isDark
                      ? "text-white hover:bg-white hover:text-primary"
                      : "text-white hover:bg-white hover:text-primary"
                  }
                `}
              >
                {t.feature}
                <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
