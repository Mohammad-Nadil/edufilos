"use client";

import Image from "next/image";

import { useLanguage } from "@/context/LanguageContext";

import { coreValuesData } from "@/helper/about/coreValuesData";
import Container from "../ui/Container";

export default function CoreValues() {
  const { lang } = useLanguage();

  const data = coreValuesData[lang];

  return (
    <section className="relative overflow-hidden py-20 bg-background">
      {/* Left Alpona */}

      <Image
        src="/coure.png"
        alt="alpona"
        width={500}
        height={500}
        className="absolute -left-10 -top-10 opacity-15 w-28 md:w-44 lg:w-56 pointer-events-none"
      />

      {/* Right Alpona */}

      <Image
        src="/coure.png"
        alt="alpona"
        width={500}
        height={500}
        className="absolute -right-10 -top-10 opacity-15 w-28 md:w-44 lg:w-56 pointer-events-none"
      />

      <Container>
        {/* Heading */}

        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            {data.title}
          </h2>
          <div className="w-40 h-1 bg-linear-to-r from-transparent via-gold to-transparent rounded-full mt-2 mx-auto" />
        </div>

        {/* Values */}

        <div className="relative mt-20 hidden lg:flex justify-between">
          {/* Main dotted line */}

          <div className="absolute top-[54px] left-[110px] right-[110px] border-t border-dashed border-[#E4D6BB]" />

          {/* center dots */}

          <div className="absolute top-[49px] left-[25%] w-3 h-3 rounded-full bg-gold -translate-x-1/2" />
          <div className="absolute top-[49px] left-[50%] w-3 h-3 rounded-full bg-gold -translate-x-1/2" />
          <div className="absolute top-[49px] left-[75%] w-3 h-3 rounded-full bg-gold -translate-x-1/2" />
          {data.values.map((item, index) => {
            const Icon = item.icon;

            return (
              <div key={index} className="w-[240px] text-center relative z-10">
                {/* Circle */}

                <div className="relative w-[110px] h-[110px] mx-auto">
                  <div className="absolute inset-0 rounded-full border border-gold/25" />
                  <div className="absolute inset-[6px] rounded-full border border-gold/20" />
                  <div className="absolute inset-[12px] rounded-full border border-gold/15" />

                  {/* Dots */}
                  <span className="absolute top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-gold" />
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-gold" />
                  <span className="absolute left-1 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-gold" />
                  <span className="absolute right-1 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-gold" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Icon className="text-[40px] text-gold" />
                  </div>
                </div>

                <h3 className="mt-6 text-2xl font-semibold text-foreground">
                  {item.title}
                </h3>

                <p className="mt-3 text-muted leading-7 max-w-[220px] mx-auto">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Mobile */}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-14 lg:hidden">
          {data.values.map((item, index) => {
            const Icon = item.icon;

            return (
              <div key={index} className="text-center">
                <div className="w-24 h-24 rounded-full border border-gold/20 mx-auto flex items-center justify-center">
                  <Icon className="text-4xl text-gold" />
                </div>

                <h3 className="mt-5 text-2xl font-semibold">{item.title}</h3>

                <p className="mt-3 text-muted">{item.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Stats */}

        <div className="mt-20 bg-card border border-border-custom rounded-3xl overflow-hidden">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {data.stats.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className={`
                  flex items-center gap-4 p-8
                  ${
                    index !== data.stats.length - 1
                      ? "lg:border-r border-border-custom"
                      : ""
                  }
                `}
                >
                  <div className="w-16 h-16 rounded-full bg-background flex items-center justify-center">
                    <Icon className="text-3xl text-primary" />
                  </div>

                  <div>
                    <h3 className="text-3xl font-bold text-primary">
                      {item.number}
                    </h3>

                    <p className="text-muted text-sm leading-6 mt-1">
                      {item.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
