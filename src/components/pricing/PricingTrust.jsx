"use client";

import { useLanguage } from "@/context/LanguageContext";
import { pricingTrustContent } from "@/helper/pricing/pricingTrustContent";

import {
  RiShieldCheckLine,
  RiCustomerService2Line,
  RiRefreshLine,
} from "react-icons/ri";

export default function PricingTrust() {
  const { lang } = useLanguage();

  const items = lang === "BN" ? pricingTrustContent.BN : pricingTrustContent.EN;

  const getIcon = (icon) => {
    switch (icon) {
      case "shield":
        return <RiShieldCheckLine size={24} />;

      case "support":
        return <RiCustomerService2Line size={24} />;

      case "refresh":
        return <RiRefreshLine size={24} />;

      default:
        return <RiShieldCheckLine size={24} />;
    }
  };

  return (
    <div className="mt-16 lg:mt-20">
      <div className="max-w-5xl mx-auto rounded-4xl border border-black/15 bg-card/80 backdrop-blur-sm overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {items.map((item, index) => (
            <div
              key={index}
              className={`
                flex items-center gap-4
                px-6 lg:px-8 py-6
                ${index !== items.length - 1 ? "md:border-r border-black/15" : ""}
              `}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 bg-primary/10 text-primary dark:bg-primary/15">
                {getIcon(item.icon)}
              </div>

              {/* Content */}
              <div>
                <h4 className="font-bold text-lg text-foreground">
                  {item.title}
                </h4>

                <p className="text-sm text-muted-foreground mt-1">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
