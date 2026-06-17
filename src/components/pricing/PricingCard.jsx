"use client";

import Link from "next/link";
import { CheckCircle2, Crown, BookOpen, Building2 } from "lucide-react";
import { IoStar } from "react-icons/io5";
export default function PricingCard({
  plan,
  isPremium,
  buttonText,
  popularText,
  billing,
  lang,
}) {
  const getIcon = () => {
    switch (plan.code) {
      case "STANDARD":
        return <BookOpen size={28} />;
      case "PREMIUM":
        return <Crown size={28} />;
      case "ENTERPRISE":
        return <Building2 size={28} />;
      default:
        return <BookOpen size={28} />;
    }
  };

  const formatNumber = (num) => {
    if (typeof num !== "number") return num;
    return num.toLocaleString("en-US");
  };

  return (
    <div
      className={`relative flex flex-col rounded-[32px] bg-card border transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${
        isPremium
          ? "border-gold shadow-lg lg:scale-[1.03]"
          : "border-border shadow-sm"
      }`}
    >
      {/* Popular Badge */}
      {isPremium && (
        <div className="absolute left-1/2 -translate-x-1/2 -top-5 z-20">
          <div className="flex gap-1 bg-gold text-white px-6 py-2 rounded-full text-xs font-bold tracking-wide shadow-lg">
            <IoStar className="text-amber-300" />
            {popularText}
          </div>
        </div>
      )}

      <div className="p-8 flex flex-col h-full">
        {/* Icon */}
        <div className="flex justify-center mb-5">
          <div
            className={`w-16 h-16 rounded-full flex items-center justify-center ${
              isPremium ? "bg-gold/10 text-gold" : "bg-primary/10 text-primary"
            }`}
          >
            {getIcon()}
          </div>
        </div>

        {/* Title */}
        <div className="text-center">
          <h3
            className={`text-3xl font-bold ${
              isPremium ? "text-gold" : "text-primary"
            }`}
          >
            {lang === "BN" ? plan.name_bn : plan.name}
          </h3>

          <p className="mt-3 text-sm text-muted-foreground">
            {plan.description}
          </p>
        </div>

        {/* Price */}
        <div className="text-center py-8">
          <span className="text-xl font-bold mr-1">৳</span>

          <span className="text-5xl lg:text-6xl font-black tracking-tight">
            {formatNumber(plan.displayPrice)}
          </span>

          <span className="text-muted-foreground ml-2 text-sm">
            /{billing === "yearly" ? "year" : "month"}
          </span>
        </div>

        {/* Divider */}
        <div className="h-px bg-border mb-8" />

        {/* Features */}
        <ul className="space-y-4 flex-1">
          <li className="flex items-start gap-3 text-sm">
            <CheckCircle2 size={18} className="text-primary shrink-0 mt-0.5" />
            <span>
              Max <strong>{formatNumber(plan.limits.maxStudents)}</strong>{" "}
              Students
            </span>
          </li>

          <li className="flex items-start gap-3 text-sm">
            <CheckCircle2 size={18} className="text-primary shrink-0 mt-0.5" />
            <span>
              Max <strong>{formatNumber(plan.limits.maxEmployees)}</strong>{" "}
              Staff/Employees
            </span>
          </li>

          <li className="flex items-start gap-3 text-sm">
            <CheckCircle2 size={18} className="text-primary shrink-0 mt-0.5" />
            <span>{formatNumber(plan.limits.storageLimit)} Storage</span>
          </li>

          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3 text-sm">
              <CheckCircle2
                size={18}
                className="text-primary shrink-0 mt-0.5"
              />

              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link
          href={`/checkout?plan=${plan.code}&billing=${billing}`}
          className={`mt-8 h-14 rounded-2xl flex items-center justify-center font-bold transition-all ${
            isPremium
              ? "bg-gold text-white hover:opacity-90"
              : "border border-primary text-primary hover:bg-primary hover:text-white"
          }`}
        >
          {buttonText}
        </Link>
      </div>
    </div>
  );
}
