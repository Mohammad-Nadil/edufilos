"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import {
  CheckCircle2,
  ShieldCheck,
  ArrowLeft,
  Building2,
  Mail,
  Phone,
  CreditCard,
} from "lucide-react";
import Link from "next/link";
import IslamicPattern from "@/components/ui/IslamicPattern"; // তোমার তৈরি ইসলামিক প্যাটার্ন
import { PLAN_DETAILS } from "@/temp";

// ডাইনামিকালি চেকআউট পেজে ডিটেইলস দেখানোর জন্য স্ট্যাটিক ডেটা ডিকশনারি

export default function CheckoutPage() {
  const searchParams = useSearchParams();

  const PLAN = PLAN_DETAILS;

  const planCode = (searchParams.get("plan") || "STANDARD").toUpperCase();
  const cycle = searchParams.get("cycle") || "monthly";

  // যদি ভুল কোড আসে তাহলে ফলব্যাক হিসেবে STANDARD সিলেক্ট হবে
  const activePlan = PLAN[planCode] || PLAN.STANDARD;

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    madrashaName: "",
    email: "",
    phone: "",
  });

  const [price, setPrice] = useState(activePlan.price);

  useEffect(() => {
    // এন্টারপ্রাইজ প্ল্যানটি ইয়ারলি, বাকিগুলো মান্থলি। সেই অনুযায়ী প্রাইস সেট হবে।
    setPrice(activePlan.price);
  }, [activePlan]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePaymentSubmit = async (e) => {
    e.preventDefault();
    if (!formData.madrashaName || !formData.email || !formData.phone) {
      alert("অনুগ্রহ করে সবকটি ইনপুট ফিল্ড সঠিকভাবে পূরণ করুন।");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/payment/ssl-init", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          planCode: planCode,
          billingCycle: cycle,
          ...formData,
        }),
      });

      const data = await response.json();

      if (data?.url) {
        window.location.href = data.url;
      } else {
        alert(
          data?.error ||
            "পেমেন্ট গেটওয়ে লোড করতে সমস্যা হয়েছে। আবার চেষ্টা করুন।",
        );
        setLoading(false);
      }
    } catch (err) {
      console.error("Checkout page error:", err);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4 md:p-8 relative overflow-hidden">
      {/* গ্লোবাল ব্যাকগ্রাউন্ড ইসলামিক ওয়াটারমার্ক প্যাটার্ন */}
      <IslamicPattern variant="floral" opacity={0.02} />

      <div className="w-full max-w-5xl bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-12 border border-slate-200/50 relative z-10">
        {/* ================= LEFT SIDE: DYNAMIC PLAN SUMMARY ================= */}
        <div
          className={`md:col-span-5 bg-gradient-to-b ${activePlan.bgClass} p-8 text-white flex flex-col justify-between relative overflow-hidden`}
        >
          {/* এই পাশের ভেতরের ব্যাকগ্রাউন্ডেও হালকা করে প্যাটার্ন ফুটিয়ে তোলা */}
          <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay">
            <IslamicPattern variant="geometry" opacity={0.5} />
          </div>

          <div className="relative z-10">
            <Link
              href="/#pricing"
              className="inline-flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-colors mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              Back to Pricing
            </Link>

            <span className="text-[10px] uppercase font-bold tracking-widest bg-white/10 px-3 py-1 rounded-full text-amber-400 border border-white/10">
              Selected Subscription
            </span>

            <h2 className="text-3xl font-extrabold mt-3 tracking-tight">
              {activePlan.name}
            </h2>
            <p className="text-sm text-slate-300 mt-1 capitalize">
              Billing Cycle: {cycle}
            </p>

            {/* প্ল্যানের স্পেসিফিক ফিচার ও লিমিট ডিটেইলস */}
            <div className="mt-8 space-y-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Plan Inclusions
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Max {activePlan.students}</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Max {activePlan.staff}</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{activePlan.storage}</span>
                </div>

                {activePlan.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 text-sm text-slate-300 border-t border-white/5 pt-2"
                  >
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ফাইনাল প্রাইজ মেটরিক্স */}
          <div className="mt-12 md:mt-0 pt-6 border-t border-white/10 relative z-10">
            <div className="text-xs text-slate-400 uppercase font-semibold tracking-wider">
              Total Payable Amount
            </div>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-5xl font-black text-amber-400 tracking-tight">
                ৳{price.toLocaleString()}
              </span>
              <span className="text-sm text-slate-400">/{cycle}</span>
            </div>
            <div className="flex items-center gap-2 mt-4 text-[11px] text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-xl border border-emerald-500/20 w-fit">
              <ShieldCheck className="w-4 h-4" />
              <span>Secure SSL Encrypted Checkout</span>
            </div>
          </div>
        </div>

        {/* ================= RIGHT SIDE: LUXURY BILLING FORM ================= */}
        <form
          onSubmit={handlePaymentSubmit}
          className="md:col-span-7 p-8 md:p-12 space-y-6 flex flex-col justify-center"
        >
          <div>
            <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
              Billing Information
            </h3>
            <p className="text-sm text-slate-500 mt-1">
              Please fulfill the official institutional details below to
              initialize deployment.
            </p>
          </div>

          <div className="space-y-5">
            {/* মাদরাসার নাম ইনপুট */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider block">
                Madrasha Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                  <Building2 className="w-5 h-5" />
                </div>
                <input
                  type="text"
                  name="madrashaName"
                  value={formData.madrashaName}
                  onChange={handleChange}
                  placeholder="e.g. Jamia Darul Uloom Madrasah"
                  className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-slate-900 font-medium placeholder:text-slate-400"
                  required
                />
              </div>
            </div>

            {/* এডমিন ইমেইল ইনপুট */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider block">
                Admin Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                  <Mail className="w-5 h-5" />
                </div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="principal@madrasha.com"
                  className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-slate-900 font-medium placeholder:text-slate-400"
                  required
                />
              </div>
            </div>

            {/* কন্টাক্ট নাম্বার ইনপুট */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider block">
                Contact Number
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                  <Phone className="w-5 h-5" />
                </div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="017XXXXXXXX"
                  className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-slate-900 font-medium placeholder:text-slate-400"
                  required
                />
              </div>
            </div>
          </div>

          {/* গেটওয়ে বাটন */}
          <div className="pt-4">
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-extrabold py-4 px-6 rounded-xl shadow-xl shadow-amber-500/10 hover:shadow-amber-500/20 active:scale-[0.99] transition-all duration-150 disabled:opacity-60 disabled:pointer-events-none flex items-center justify-center gap-3 text-base"
            >
              <CreditCard className="w-5 h-5" />
              {loading
                ? "Initializing Safe Gateway..."
                : "Proceed to Secure Payment"}
            </button>
            <p className="text-[11px] text-center text-slate-400 mt-3">
              By proceeding, you agree to EduFilos ERP Terms of Service and
              Billing Authorization.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
