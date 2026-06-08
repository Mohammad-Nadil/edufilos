"use client";

import React, { useState } from "react";
import IslamicPattern from "../ui/IslamicPattern";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";
import Button from "../ui/Button";
import { PLAN_LIST } from "@/temp"; 
import Calligraphy from "../ui/Caligraphy";
import imgCalligraphy from "../../../public/kufikBorder.png";

const Pricing = ({ language, plans: serverPlans }) => {
  const [plans] = useState(serverPlans || PLAN_LIST);
  const [loadingPlans] = useState(false);

  return (
    <section id="pricing" className="py-16 md:py-24 relative overflow-hidden bg-white">
      <IslamicPattern variant="floral" opacity={0.04} />
      
      <div className="container mx-auto px-4 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
          <h2 className="text-xs md:text-sm font-black text-primary uppercase tracking-[0.2em] mb-3 md:mb-4">
            Flexible Pricing
          </h2>
          <p className="text-2xl sm:text-3xl md:text-5xl font-black text-slate-900 mb-4 md:mb-6 leading-tight">
            Choose the perfect plan for your institution
          </p>
          <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
            Transparent pricing with no hidden fees. All plans include 24/7
            technical support.
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
                  className={`p-6 sm:p-8 rounded-3xl border flex flex-col justify-between relative transition-all bg-white ${
                    plan.code === "STANDARD" 
                      ? "border-primary ring-4 ring-primary/5 shadow-md lg:scale-105 z-10 my-2 lg:my-0" 
                      : "border-slate-200/60 shadow-sm"
                  }`}
                >
                  {plan.code === "STANDARD" && (
                    <div className="absolute top-0 right-6 sm:right-8 -translate-y-1/2 bg-primary text-white text-[9px] sm:text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full border-4 border-white shadow-sm">
                      Most Popular
                    </div>
                  )}
                  
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                      {plan.name}
                    </h3>
                    
                    <div className="flex items-baseline gap-1 mb-6">
                      <span className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                        ৳{plan.price.toLocaleString()}
                      </span>
                      <span className="text-slate-400 text-xs sm:text-sm font-medium">
                        /{plan.billingCycle}
                      </span>
                    </div>
                    
                    <div className="space-y-3 sm:space-y-4 mb-8 sm:mb-10">
                      <div className="flex items-center gap-2.5 py-2 border-b border-slate-100">
                        <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500 shrink-0" />
                        <span className="text-xs sm:text-sm font-medium text-slate-600">
                          Max {plan.limits?.maxStudents || "Unlimited"} Students
                        </span>
                      </div>
                      <div className="flex items-center gap-2.5 py-2 border-b border-slate-100">
                        <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500 shrink-0" />
                        <span className="text-xs sm:text-sm font-medium text-slate-600">
                          Max {plan.limits?.maxEmployees || "Unlimited"} Staff
                        </span>
                      </div>
                      <div className="flex items-center gap-2.5 py-2 border-b border-slate-100">
                        <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500 shrink-0" />
                        <span className="text-xs sm:text-sm font-medium text-slate-600">
                          {plan.limits?.storageLimit || "Unlimited"} MB Storage
                        </span>
                      </div>
                      <div className="flex items-center gap-2.5 py-2 border-b border-slate-100">
                        <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500 shrink-0" />
                        <span className="text-xs sm:text-sm font-medium text-slate-600">
                          {plan.features?.length || 0} Premium Modules
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <Link
                    href={`/checkout?plan=${plan.code}&cycle=${plan.billingCycle.toLowerCase()}`}
                    className="w-full mt-auto block"
                  >
                    <Button
                      className={`w-full h-11 sm:h-12 rounded-xl font-bold text-xs sm:text-sm tracking-wide transition-all ${
                        plan.code === "STANDARD" 
                          ? "bg-primary text-white hover:opacity-95 shadow-md shadow-primary/10" 
                          : "bg-slate-900 text-white hover:bg-slate-800"
                      }`}
                    >
                      Choose Plan
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