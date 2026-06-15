"use client";

import Image from "next/image";
import {
  Lightbulb,
  Settings,
  Users,
  TrendingUp,
  Target,
  Eye,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const journeySteps = [
  {
    icon: Lightbulb,
    year: "2024",
    title: { BN: "ধারণার সূত্রপাত", EN: "Idea Born" },
    description: {
      BN: "মাদ্রাসাগুলো দৈনন্দিন কার্যক্রম পরিচালনায় যেসব চ্যালেঞ্জের মুখোমুখি হয়, আমরা তা চিহ্নিত করি।",
      EN: "We identified the challenges madrashas face in managing daily operations.",
    },
  },
  {
    icon: Settings,
    year: "2025",
    title: { BN: "প্ল্যাটফর্ম ডেভেলপমেন্ট", EN: "Platform Development" },
    description: {
      BN: "প্রশাসনিক কাজ সহজ করতে এবং শিক্ষকদের ক্ষমতায়িত করতে আমরা EduFilos তৈরি করি।",
      EN: "We built EduFilos with a vision to simplify administration and empower educators.",
    },
  },
  {
    icon: Users,
    year: "2025",
    title: {
      BN: "প্রথম মাদ্রাসাগুলোর যুক্ত হওয়া",
      EN: "First Madrashas Joined",
    },
    description: {
      BN: "আমাদের প্রথম পার্টনাররা যুক্ত হন এবং তাদের মাদ্রাসা পরিচালনায় EduFilos-কে আস্থায় নেন।",
      EN: "Our first partners joined us and trusted EduFilos to manage their madrashas.",
    },
  },
  {
    icon: TrendingUp,
    year: "2026",
    title: { BN: "হাজার হাজার ব্যবহারকারীর সেবা", EN: "Serving Thousands" },
    description: {
      BN: "আজ আমরা গর্বের সাথে শত শত মাদ্রাসা এবং হাজার হাজার ব্যবহারকারীকে সেবা দিচ্ছি।",
      EN: "Today, we proudly serve hundreds of madrashas and thousands of users.",
    },
  },
];

const content = {
  heading: { BN: "আমাদের যাত্রা", EN: "Our Journey" },
  mission: {
    title: { BN: "আমাদের লক্ষ্য", EN: "Our Mission" },
    description: {
      BN: "ইসলামিক শিক্ষায় উৎকর্ষতা বজায় রেখে প্রযুক্তির মাধ্যমে মাদ্রাসা পরিচালনাকে সহজ করা।",
      EN: "To simplify madrasha management through technology while maintaining excellence in Islamic education.",
    },
  },
  vision: {
    title: { BN: "আমাদের ভবিষ্যৎ পরিকল্পনা", EN: "Our Vision" },
    description: {
      BN: "বিশ্বব্যাপী সবচেয়ে বিশ্বাসযোগ্য এবং শীর্ষস্থানীয় মাদ্রাসা ম্যানেজমেন্ট প্ল্যাটফর্ম হয়ে ওঠা।",
      EN: "To become the most trusted and leading madrasha management platform worldwide.",
    },
  },
};

export default function OurJourney() {
  const { lang } = useLanguage();

  return (
    <section className="bg-background py-16 px-4 sm:px-6">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <h2 className="text-center font-serif text-3xl sm:text-4xl font-bold text-foreground mb-12">
          {content.heading[lang]}
        </h2>

        {/* Timeline */}
        <div className="relative mb-16">
          {/* Connector line */}
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
                  {/* Icon circle */}
                  <div className="relative z-10 mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-card border border-border-custom shadow-[0_2px_10px_rgba(0,0,0,0.04)]">
                    <Icon className="h-6 w-6 text-gold" strokeWidth={1.75} />
                  </div>

                  {/* Card */}
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

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Mission */}
          <div className="relative overflow-hidden rounded-2xl bg-card border border-border-custom p-8 sm:p-10">
            {/* Mosque background image (placeholder) */}
            <div className="pointer-events-none absolute -bottom-5 right-0 h-44 w-72 opacity-45">
              <Image
                src="/missions.png"
                alt={content.mission.title[lang]}
                fill
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

          {/* Vision */}
          <div className="relative overflow-hidden rounded-2xl bg-card border border-border-custom p-8 sm:p-10">
            {/* Globe background image (placeholder) */}
            <div className="pointer-events-none absolute -bottom-5 -right-5 h-48 w-48 translate-x-6 translate-y-6 opacity-15">
              <Image
                src="/vision.png"
                alt={content.vision.title[lang]}
                fill
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
      </div>
    </section>
  );
}
