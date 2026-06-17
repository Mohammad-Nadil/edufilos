"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import Container from "../ui/Container";
import { Check } from "lucide-react";
import BackgroundImg from "@/../public/background2.jpg";
import Image from "next/image";
import { PLAN_LIST } from "@/helper/pricing/homePricing";

export default function Pricing({ plans: serverPlans }) {
  const { lang } = useLanguage();

  const [plans] = useState(serverPlans || PLAN_LIST);

  const getBillingCycleText = (cycle) => {
    const cycleLower = cycle?.toLowerCase();
    if (lang === "BN") {
      return cycleLower === "yearly" || cycleLower === "year" ? "বছর" : "মাস";
    }
    return "month"; 
  };

  const toEnOrBnNum = (num) => {
    if (lang !== "BN") return num.toLocaleString("en-US");
    const bnNums = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
    return num
      .toString()
      .replace(/\d/g, (d) => bnNums[d])
      .replace(/,/g, ",");
  };

  const renderLimitText = (key, value) => {
    if (value === "Unlimited") {
      return lang === "BN" ? "আনলিমিটেড" : "Unlimited";
    }

    const formattedNum = toEnOrBnNum(value);

    if (key === "students") {
      return lang === "BN"
        ? `${formattedNum} জন ছাত্র`
        : `${formattedNum} Students`;
    }
    if (key === "employees") {
      return lang === "BN"
        ? `${formattedNum} জন স্টাফ`
        : `${formattedNum} Staff/Employees`;
    }
    if (key === "storage") {
      return lang === "BN"
        ? `${formattedNum} MB স্টোরেজ`
        : `${formattedNum} MB Storage`;
    }
    return value;
  };

  return (
    <section
      id="pricing"
      className="py-20  relative overflow-hidden select-none"
    >
      {BackgroundImg && (
              <div className="pointer-events-none absolute inset-0 -z-10 opacity-10 hidden md:block dark:brightness-20 dark:opacity-30  ">
                <Image
                  src={BackgroundImg}
                  alt="Background Texture"
                  fill
                  priority
                  className="object-cover object-left"
                />
              </div>
            )}

      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col space-y-3">
          <h2 className="text-3xl sm:text-4xl font-black text-foreground tracking-tight">
            {lang === "BN"
              ? "আপনার মাদরাসার জন্য সঠিক প্ল্যানটি বেছে নিন"
              : "Choose the Perfect Plan for Your Madrashas"}
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground font-medium">
            {lang === "BN"
              ? "সাশ্রয়ী মূল্য এবং শক্তিশালী সব ফিচার নিয়ে প্রতিটি মাদরাসার জন্য উপযোগী প্যাকেজ।"
              : "Affordable pricing with powerful features for every madrasha."}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {plans.map((plan) => {
            const isPremium = plan.code === "PREMIUM";
            const currentFeatures =
              lang === "BN" ? plan.features_bn : plan.features;

            return (
              <div
                key={plan.code}
                className={`relative flex flex-col justify-between bg-card text-card-foreground rounded-3xl p-5 sm:p-8 transition-all duration-300 shadow-sm hover:shadow-xl ${
                  isPremium
                    ? "border-2 border-gold ring-4 ring-gold/5 lg:scale-[1.03] z-10"
                    : "border border-gold/30"
                }`}
              >
                {isPremium && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gold text-[#0b241b] text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-md">
                    {lang === "BN" ? "সবচেয়ে জনপ্রিয়" : "Most Popular"}
                  </div>
                )}

                <div className="flex flex-col items-center text-center">
                  <h3 className="text-xl font-bold text-foreground sm:mb-4">
                    {lang === "BN" ? plan.name_bn : plan.name}
                  </h3>

                  <div className="flex items-baseline justify-center  sm:mb-8">
                    <span className="text-2xl font-bold text-foreground mr-1">
                      ৳
                    </span>
                    <span className="text-4xl sm:text-5xl font-black tracking-tight text-foreground font-mono">
                      {toEnOrBnNum(plan.price)}
                    </span>
                    <span className="text-xs font-semibold text-muted ml-2">
                      /{getBillingCycleText(plan.billingCycle)}
                    </span>
                  </div>
                  <div className="w-full h-px bg-border-custom mb-4 sm:mb-8" />
                  <ul className="w-full flex flex-col space-y-3 sm:space-y-4 text-left px-2">
                    <li className="flex items-start gap-3 text-sm font-medium text-foreground/80">
                      <Check
                        className="w-4 h-4 text-emerald-600 dark:text-emerald-500 shrink-0 mt-0.5"
                        strokeWidth={3}
                      />
                      <span>
                        {lang === "BN" ? "সর্বোচ্চ " : "Max "}
                        <span className="font-bold text-foreground">
                          {renderLimitText("students", plan.limits.maxStudents)}
                        </span>
                      </span>
                    </li>

                    <li className="flex items-start gap-3 text-xs sm:text-sm font-medium text-foreground/80">
                      <Check
                        className="w-4 h-4 text-emerald-600 dark:text-emerald-500 shrink-0 mt-0.5"
                        strokeWidth={3}
                      />
                      <span>
                        {lang === "BN" ? "সর্বোচ্চ " : "Max "}
                        <span className="font-bold text-foreground">
                          {renderLimitText(
                            "employees",
                            plan.limits.maxEmployees,
                          )}
                        </span>
                      </span>
                    </li>

                    <li className="flex items-start gap-3 text-xs sm:text-sm font-medium text-foreground/80">
                      <Check
                        className="w-4 h-4 text-emerald-600 dark:text-emerald-500 shrink-0 mt-0.5"
                        strokeWidth={3}
                      />
                      <span>
                        <span className="font-bold text-foreground">
                          {renderLimitText("storage", plan.limits.storageLimit)}
                        </span>
                      </span>
                    </li>

                    {currentFeatures.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-xs sm:text-sm font-medium text-foreground/80"
                      >
                        <Check
                          className="w-4 h-4 text-emerald-600 dark:text-emerald-500 shrink-0 mt-0.5"
                          strokeWidth={3}
                        />
                        <span className="line-clamp-1">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4 sm:mt-8 pt-2">
                  <Link
                    href={`/checkout?plan=${plan.code}&cycle=${plan.billingCycle.toLowerCase()}`}
                    className={`w-full h-12 rounded-2xl font-bold text-sm flex items-center justify-center transition-all shadow-sm active:scale-[0.98] ${
                      isPremium
                        ? "bg-gold text-[#0b241b] hover:opacity-90"
                        : "bg-primary text-primary-foreground hover:opacity-95"
                    }`}
                  >
                    {lang === "BN" ? "প্ল্যানটি বেছে নিন" : "Choose Plan"}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}


