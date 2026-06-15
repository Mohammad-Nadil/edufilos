"use client";

import { useLanguage } from "@/context/LanguageContext";
import Container from "../ui/Container";
import { content, features } from "@/helper/about/WhyEduFilosExists";

export default function WhyEduFilosExists() {
  const { lang } = useLanguage();

  return (
    <section className="bg-white dark:bg-background py-16">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_2fr] gap-10 items-center">
          {/* Left content */}
          <div>
            <span className="inline-block rounded-full bg-card border border-border-custom px-4 py-1.5 text-xs font-semibold tracking-wide text-gold mb-5">
              {content.badge[lang]}
            </span>

            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-4">
              {content.headingPart1[lang]}
              <br />
              {content.headingPart2[lang]}{" "}
              <span className="text-gold">
                {content.headingHighlight[lang]}
              </span>
            </h2>

            <p className="text-sm sm:text-base text-muted leading-relaxed">
              {content.description[lang]}
            </p>
          </div>

          {/* Right cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col items-center text-center rounded-xl bg-card border border-border-custom shadow-[0_2px_12px_rgba(0,0,0,0.03)] px-5 py-7"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-background border border-border-custom">
                    <Icon className="h-5 w-5 text-gold" strokeWidth={1.75} />
                  </div>
                  <h3 className="font-serif text-sm sm:text-base font-bold text-primary mb-2">
                    {feature.title[lang]}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted leading-relaxed">
                    {feature.description[lang]}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
