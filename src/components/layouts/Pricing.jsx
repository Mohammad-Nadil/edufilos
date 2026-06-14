"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import Container from "../ui/Container";
import { Check } from "lucide-react";
import BackgroundImg from "@/../public/background2.jpg";
import Image from "next/image";

export default function Pricing({ plans: serverPlans }) {
  const { lang } = useLanguage();

  // আপডেট করা PLAN_LIST ব্যবহার করা হয়েছে
  const [plans] = useState(serverPlans || PLAN_LIST);

  const getBillingCycleText = (cycle) => {
    const cycleLower = cycle?.toLowerCase();
    if (lang === "BN") {
      return cycleLower === "yearly" || cycleLower === "year" ? "বছর" : "মাস";
    }
    return "month"; // image_464e8b.png অনুযায়ী ইংলিশে সবসময় /month ফর্ম্যাট
  };

  // নাম্বারকে বাংলায় কনভার্ট করার হেল্পার ফাংশন
  const toEnOrBnNum = (num) => {
    if (lang !== "BN") return num.toLocaleString("en-US");
    const bnNums = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
    return num
      .toString()
      .replace(/\d/g, (d) => bnNums[d])
      .replace(/,/g, ",");
  };

  // আনলিমিটেড টেক্সট ট্রান্সলেশন হেল্পার
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
              <div className="pointer-events-none absolute inset-0 -z-10 opacity-10   dark:brightness-20 dark:opacity-30  ">
                <Image
                  src={BackgroundImg}
                  alt="Background Texture"
                  fill
                  priority
                  className="object-cover"
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {plans.map((plan) => {
            const isPremium = plan.code === "PREMIUM";
            const currentFeatures =
              lang === "BN" ? plan.features_bn : plan.features;

            return (
              <div
                key={plan.code}
                className={`relative flex flex-col justify-between bg-card text-card-foreground rounded-3xl p-8 transition-all duration-300 shadow-sm hover:shadow-xl ${
                  isPremium
                    ? "border-2 border-gold ring-4 ring-gold/5 lg:scale-[1.03] z-10"
                    : "border border-border-custom"
                }`}
              >
                {isPremium && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gold text-[#0b241b] text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-md">
                    {lang === "BN" ? "সবচেয়ে জনপ্রিয়" : "Most Popular"}
                  </div>
                )}

                <div className="flex flex-col items-center text-center">
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    {lang === "BN" ? plan.name_bn : plan.name}
                  </h3>

                  <div className="flex items-baseline justify-center mb-8">
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

                  <div className="w-full h-[1px] bg-border-custom mb-8" />

                  <ul className="w-full flex flex-col space-y-4 text-left px-2">
                    <li className="flex items-start gap-3 text-xs sm:text-sm font-medium text-foreground/80">
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

                <div className="mt-8 pt-2">
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

export const PLAN_DETAILS = {
  STANDARD: {
    name: "Standard",
    name_bn: "স্ট্যান্ডার্ড",
    code: "STANDARD",
    price: 4900,
    billingCycle: "monthly",
    limits: { maxStudents: 500, maxEmployees: 30, storageLimit: 2048 },
    features: [
      "Student records logs",
      "Faculties directory grids",
      "Basic accounting",
    ],
    features_bn: [
      "শিক্ষার্থী রেকর্ড ও লগ",
      "শিক্ষক ও স্টাফ ডিরেক্টরি গ্রিড",
      "বেসিক অ্যাকাউন্টস ও হিসাব",
    ],
  },
  PREMIUM: {
    name: "Premium",
    name_bn: "প্রিমিয়াম",
    code: "PREMIUM",
    price: 9999,
    billingCycle: "monthly",
    limits: { maxStudents: 2000, maxEmployees: 100, storageLimit: 10240 },
    features: [
      "Automated SMS pipelines",
      "Online admissions tracking",
      "Advanced reporting",
    ],
    features_bn: [
      "স্বয়ংক্রিয় এসএমএস পাইপলাইন",
      "অনলাইন ভর্তি ট্র্যাকিং সিস্টেম",
      "অ্যাডভান্সড রিপোর্টিং ড্যাশবোর্ড",
    ],
  },
  ENTERPRISE: {
    name: "Enterprise",
    name_bn: "এন্টারপ্রাইজ",
    code: "ENTERPRISE",
    price: 14999,
    billingCycle: "yearly",
    limits: {
      maxStudents: "Unlimited",
      maxEmployees: "Unlimited",
      storageLimit: "Unlimited",
    },
    features: [
      "Multi-branch sync operations",
      "Custom institutional subdomains",
      "Dedicated manager",
    ],
    features_bn: [
      "মাল্টি-ব্রাঞ্চ সিঙ্ক অপারেশন",
      "কাস্টম প্রাতিষ্ঠানিক সাবডোমেন",
      "ডেডিকেটেড অ্যাকাউন্ট ম্যানেজার",
    ],
  },
};

export const PLAN_LIST = Object.values(PLAN_DETAILS);
