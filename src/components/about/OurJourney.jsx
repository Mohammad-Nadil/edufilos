"use client";

import Image from "next/image";
import { Target, Eye } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import Container from "../ui/Container";
import { content, journeySteps } from "@/helper/about/OurJourney";

export default function OurJourney() {
  const { lang } = useLanguage();

  return (
    <section className="bg-background py-16">
      <Container>
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground">
            {content.heading[lang]}
          </h2>
          <div className="w-40 h-1 bg-linear-to-r from-transparent via-gold to-transparent rounded-full mt-2 mx-auto" />
        </div>

        <div className="relative mb-16">
          <div className="hidden md:block absolute top-7 left-0 right-0 h-px bg-border-custom">
            <div
              className="absolute inset-0 bg-[repeating-linear-gradient(to_right,var(--accent-gold)_0,var(--accent-gold)_4px,transparent_4px,transparent_10px)]"
              style={{ height: "1px" }}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 relative">
            {journeySteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col items-center text-center"
                >
                  <div className="relative z-10 mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-card border border-border-custom shadow-[0_2px_10px_rgba(0,0,0,0.04)]">
                    <Icon className="h-6 w-6 text-gold" strokeWidth={1.75} />
                  </div>

                  <div className="w-full rounded-xl bg-card border border-border-custom shadow-[0_2px_12px_rgba(0,0,0,0.03)] px-5 py-6">
                    <p className="text-sm font-semibold text-gold mb-2">
                      {step.year}
                    </p>
                    <h3 className="font-serif text-lg font-bold text-foreground mb-2">
                      {step.title[lang]}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed">
                      {step.description[lang]}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative overflow-hidden rounded-2xl bg-card border border-border-custom p-8 sm:p-10">
            <div className="pointer-events-none absolute -bottom-5 right-0 h-44 w-72 opacity-45">
              <Image
                src="/missions.png"
                alt={content.mission.title[lang]}
                fill
                sizes="288px"
                className="object-contain object-bottom-right"
              />
            </div>

            <div className="relative z-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-8">
              <div className="flex h-24 w-24 sm:h-28 sm:w-28 flex-shrink-0 items-center justify-center rounded-full bg-background shadow-sm">
                <Target
                  className="h-12 w-12 sm:h-14 sm:w-14 text-primary"
                  strokeWidth={1.5}
                />
              </div>
              <div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-primary mb-2">
                  {content.mission.title[lang]}
                </h3>
                <p className="text-sm sm:text-base text-muted leading-relaxed">
                  {content.mission.description[lang]}
                </p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl bg-card border border-border-custom p-8 sm:p-10">
            <div className="pointer-events-none absolute -bottom-5 -right-5 h-48 w-48 translate-x-6 translate-y-6 opacity-15">
              <Image
                src="/vision.png"
                alt={content.vision.title[lang]}
                fill
                sizes="192px"
                className="object-contain object-bottom-right"
              />
            </div>

            <div className="relative z-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-8">
              <div className="flex h-24 w-24 sm:h-28 sm:w-28 flex-shrink-0 items-center justify-center rounded-full bg-background shadow-sm">
                <Eye
                  className="h-12 w-12 sm:h-14 sm:w-14 text-gold"
                  strokeWidth={1.5}
                />
              </div>
              <div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-gold mb-2">
                  {content.vision.title[lang]}
                </h3>
                <p className="text-sm sm:text-base text-muted leading-relaxed">
                  {content.vision.description[lang]}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
