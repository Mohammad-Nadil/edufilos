"use client";

import React, { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";
import Button from "../ui/Button";
import { useLanguage } from "@/context/LanguageContext";
import Calligraphy from "../ui/Caligraphy";
import imgCalligraphy from "../../../public/kufikBorder.png";
import { PLAN_LIST } from "@/temp";

const Pricing = ({ plans: serverPlans }) => {
  const { lang } = useLanguage();

  const [plans] = useState(serverPlans || PLAN_LIST);
  const [loadingPlans] = useState(false);
  
  const getBillingCycleText = (cycle) => {
    const cycleLower = cycle?.toLowerCase();
    if (lang === "BN") {
      return cycleLower === "yearly" || cycleLower === "year" ? "বছর" : "মাস";
    }
    return cycleLower === "yearly" || cycleLower === "year" ? "year" : "month";
  };

  return (
    <section
      id="pricing"
      className="py-16 md:py-24 relative overflow-hidden bg-white"
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
          <h2 className="text-xs md:text-sm font-black text-primary uppercasee mb-3 md:mb-4">
            {lang === "BN" ? "সাশ্রয়ী প্রাইসিং প্ল্যান" : "Flexible Pricing"}
          </h2>
          <p className="text-2xl sm:text-3xl md:text-5xl font-black text-slate-900 mb-4 md:mb-6 leading-tight">
            {lang === "BN"
              ? "আপনার প্রতিষ্ঠানের জন্য সঠিক প্ল্যানটি বেছে নিন"
              : "Choose the perfect plan for your institution"}
          </p>
          <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
            {lang === "BN"
              ? "কোনো গোপন চার্জ নেই। প্রতিটি প্ল্যানেই পাচ্ছেন ২৪/৭ টেকনিক্যাল সাপোর্ট সুবিধা।"
              : "Transparent pricing with no hidden fees. All plans include 24/7 technical support."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-6 xl:gap-8 max-w-6xl mx-auto items-stretch lg:pt-4">
          {loadingPlans
            ? [1, 2, 3].map((i) => (
                <div 
                  key={i}
                  className="h-113 md:h-125 rounded-3xl bg-slate-50 animate-pulse border border-slate-100"
                />
              ))
            : plans.map((plan) => (
                <div
                  key={plan.code}
                  className={`p-6 sm:p-8 rounded-3xl border flex flex-col justify-between relative transition-all bg-white hover:shadow-lg duration-300 ${
                    plan.code === "STANDARD"
                      ? "border-primary ring-4 ring-primary/5 shadow-md lg:scale-105 z-10 my-2 lg:my-0"
                      : "border-slate-200/60 shadow-sm"
                  }`}
                >
                  {plan.code === "STANDARD" && (
                    <div className="absolute top-0 right-6 sm:right-8 -translate-y-1/2 bg-primary text-white text-[9px] sm:text-[10px] font-black uppercase  px-3 py-1 rounded-full border-4 border-white shadow-sm select-none">
                      {lang === "BN" ? "জনপ্রিয়" : "Most Popular"}
                    </div>
                  )}

                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                      {lang === "BN" && plan.name_bn ? plan.name_bn : plan.name}
                    </h3>

                    <div className="flex items-baseline gap-1 mb-6">
                      <span className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                        ৳{plan.price.toLocaleString()}
                      </span>
                      <span className="text-slate-400 text-xs sm:text-sm font-medium">
                        /{getBillingCycleText(plan.billingCycle)}
                      </span>
                    </div>

                    <div className="space-y-3 sm:space-y-4 mb-8 sm:mb-10">
                      <div className="flex items-center gap-2.5 py-2 border-b border-slate-100">
                        <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500 shrink-0" />
                        <span className="text-xs sm:text-sm font-medium text-slate-600">
                          {lang === "BN" ? (
                            <>
                              সর্বোচ্চ{" "}
                              {plan.limits?.maxStudents === "Unlimited"
                                ? "আনলিমিটেড"
                                : plan.limits?.maxStudents}{" "}
                              ছাত্র
                            </>
                          ) : (
                            <>
                              Max {plan.limits?.maxStudents || "Unlimited"}{" "}
                              Students
                            </>
                          )}
                        </span>
                      </div>

                      <div className="flex items-center gap-2.5 py-2 border-b border-slate-100">
                        <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500 shrink-0" />
                        <span className="text-xs sm:text-sm font-medium text-slate-600">
                          {lang === "BN" ? (
                            <>
                              সর্বোচ্চ{" "}
                              {plan.limits?.maxEmployees === "Unlimited"
                                ? "আনলিমিটেড"
                                : plan.limits?.maxEmployees}{" "}
                              স্টাফ
                            </>
                          ) : (
                            <>
                              Max {plan.limits?.maxEmployees || "Unlimited"}{" "}
                              Staff
                            </>
                          )}
                        </span>
                      </div>

                      <div className="flex items-center gap-2.5 py-2 border-b border-slate-100">
                        <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500 shrink-0" />
                        <span className="text-xs sm:text-sm font-medium text-slate-600">
                          {lang === "BN" ? (
                            <>
                              {plan.limits?.storageLimit === "Unlimited"
                                ? "আনলিমিটেড স্টোরেজ"
                                : `${plan.limits?.storageLimit} মেগাবাইট স্টোরেজ`}
                            </>
                          ) : (
                            <>
                              {plan.limits?.storageLimit || "Unlimited"}{" "}
                              {plan.limits?.storageLimit === "Unlimited"
                                ? ""
                                : "MB"}{" "}
                              Storage
                            </>
                          )}
                        </span>
                      </div>

                      <div className="flex items-center gap-2.5 py-2 border-b border-slate-100">
                        <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500 shrink-0" />
                        <span className="text-xs sm:text-sm font-medium text-slate-600">
                          {lang === "BN" ? (
                            <>
                              {plan.features?.length || 0}টি প্রিমিয়াম মডিউল
                              পাবেন
                            </>
                          ) : (
                            <>{plan.features?.length || 0} Premium Modules</>
                          )}
                        </span>
                      </div>
                    </div>
                  </div>

                  <Link
                    href={`/checkout?plan=${plan.code}&cycle=${plan.billingCycle.toLowerCase()}`}
                    className="w-full mt-auto block"
                  >
                    <Button
                      className={`w-full h-11 sm:h-12 rounded-xl font-bold text-xs sm:text-sm tracking-wide transition-all hover:bg-primary/80! duration-300 hover:text-white ${
                        plan.code === "STANDARD"
                          ? "bg-primary text-white hover:opacity-95 shadow-md shadow-primary/10"
                          : "bg-slate-900 text-white hover:bg-slate-800"
                      }`}
                    >
                      {lang === "BN" ? "প্ল্যানটি বেছে নিন" : "Choose Plan"}
                    </Button>
                  </Link>
                </div>
              ))}
        </div>
      </div>

      <div className="absolute bottom-[-5%] left-[-8%] md:bottom-auto md:top-6 md:left-[-3%] -translate-x-1/4 w-38 sm:w-60 md:w-95 aspect-square pointer-events-none opacity-[0.05] md:opacity-10 z-0 select-none overflow-hidden rotate-45">
        <Calligraphy
          imageSrc={imgCalligraphy.src}
          textColor="#047857"
          bgColor="transparent"
        />
      </div>
    </section>
  );
};

export default Pricing;
