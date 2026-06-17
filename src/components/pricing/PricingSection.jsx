"use client";

import { useState } from "react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import BackgroundImg from "@/../public/background2.jpg";
import BillingToggle from "./BillingToggle";
import PricingCard from "./PricingCard";
import { useLanguage } from "@/context/LanguageContext";
import { pricingContent } from "@/helper/pricing/pricingContent";
import { PLAN_LIST } from "@/helper/pricing/plans";
import SectionHeader from "../common/SectionHeader";

export default function PricingSection() {
  const { lang } = useLanguage();
  const content = lang === "BN" ? pricingContent.BN : pricingContent.EN;
  const t = content;
  const [billing, setBilling] = useState("monthly");
  const getPrice = (plan) => {
    if (billing === "yearly") {
      return Math.round(plan.price * 12 * 0.8);
    }

    return plan.price;
  };

  return (
    <section id="pricing" className="relative overflow-hidden py-5 lg:py-10">
      {/* Background */}
      <div className="absolute inset-0 -z-10 opacity-[0.06] dark:opacity-[0.04]">
        <Image
          src={BackgroundImg}
          alt="Background Texture"
          fill
          priority
          className="object-cover object-left"
        />
      </div>

      <Container>
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-14">
          <SectionHeader
            label={t.label}
            text={t.text}
            colorWord={t.colorWord}
          />
          <p className="mt-5 text-sm md:text-base text-muted-foreground font-medium max-w-3xl mx-auto">
            {content.subtitle}
          </p>
        </div>

        {/* Toggle */}
        <BillingToggle
          billing={billing}
          setBilling={setBilling}
          monthly={content.monthly}
          yearly={content.yearly}
        />

        {/* Pricing Cards */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 items-stretch">
          {PLAN_LIST.map((plan) => (
            <PricingCard
              key={plan.code}
              plan={{
                ...plan,
                displayPrice: getPrice(plan),
              }}
              isPremium={plan.code === "PREMIUM"}
              buttonText={content.button}
              popularText={content.popular}
              billing={billing}
              lang={lang}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
