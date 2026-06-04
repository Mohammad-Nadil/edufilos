"use client";
import React, { useState } from "react";
import IslamicPattern from "../ui/IslamicPattern";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";
import Button from "../ui/Button";
import { PLAN_LIST } from "@/temp"; 

const Pricing = ({ language, plans: serverPlans }) => {
  const [plans] = useState(serverPlans || PLAN_LIST);
  const [loadingPlans] = useState(false);

  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      <IslamicPattern variant="floral" opacity={0.04} />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-primary uppercase tracking-[0.2em] mb-4">
            Flexible Pricing
          </h2>
          <p className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
            Choose the perfect plan for your institution
          </p>
          <p className="text-lg text-slate-600">
            Transparent pricing with no hidden fees. All plans include 24/7
            technical support.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {loadingPlans
            ? [1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="h-125 rounded-3xl bg-slate-50 animate-pulse border border-slate-100"
                />
              ))
            : plans.map((plan) => (
                <div
                  key={plan.code} 
                  className={`p-8 rounded-3xl border flex flex-col justify-between relative transition-all ${plan.code === "STANDARD" ? "border-primary ring-4 ring-primary/5 bg-primary/2 md:scale-105 z-10" : "border-slate-100"}`}
                >
                  {plan.code === "STANDARD" && (
                    <div className="absolute top-0 right-8 -translate-y-1/2 bg-primary text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border-4 border-white">
                      Most Popular
                    </div>
                  )}
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">
                      {plan.name}
                    </h3>
                    <div className="flex items-baseline gap-1 mb-6">
                      <span className="text-4xl font-extrabold text-slate-900">
                        ৳{plan.price.toLocaleString()}
                      </span>
                      <span className="text-slate-500 text-sm">
                        /{plan.billingCycle}
                      </span>
                    </div>
                    <div className="space-y-4 mb-10">
                      <div className="flex items-center gap-2 py-2 border-b border-slate-100">
                        <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                        <span className="text-sm font-medium text-slate-700">
                          Max {plan.limits?.maxStudents || "Unlimited"} Students
                        </span>
                      </div>
                      <div className="flex items-center gap-2 py-2 border-b border-slate-100">
                        <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                        <span className="text-sm font-medium text-slate-700">
                          Max {plan.limits?.maxEmployees || "Unlimited"} Staff
                        </span>
                      </div>
                      <div className="flex items-center gap-2 py-2 border-b border-slate-100">
                        <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                        <span className="text-sm font-medium text-slate-700">
                          {plan.limits?.storageLimit || "Unlimited"} MB Storage
                        </span>
                      </div>
                      <div className="flex items-center gap-2 py-2 border-b border-slate-100">
                        <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                        <span className="text-sm font-medium text-slate-700">
                          {plan.features?.length || 0} Premium Modules
                        </span>
                      </div>
                    </div>
                  </div>
                  <Link
                    href={`/checkout?plan=${plan.code}&cycle=${plan.billingCycle.toLowerCase()}`}
                    className="w-full mt-auto"
                  >
                    <Button
                      className={`w-full h-12 rounded-xl font-bold ${plan.code === "STANDARD" ? "bg-primary text-white hover:opacity-90" : "bg-slate-900 text-white hover:bg-slate-800"}`}
                    >
                      Choose Plan
                    </Button>
                  </Link>
                </div>
              ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
