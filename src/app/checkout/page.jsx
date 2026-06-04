"use client";

import React, { useState, useEffect, Suspense } from "react"; 
import { useSearchParams } from "next/navigation";
import { CheckCircle2, ShieldCheck, ArrowLeft, Building2, Mail, Phone, CreditCard } from "lucide-react";
import Link from "next/link";
import IslamicPattern from "@/components/ui/IslamicPattern";
import { PLAN_DETAILS } from "@/temp";

function CheckoutContent() {
  const searchParams = useSearchParams();
  
  const planCode = (searchParams.get("plan") || "STANDARD").toUpperCase();
  const cycle = searchParams.get("cycle") || "monthly";
  const activePlan = PLAN_DETAILS[planCode] || PLAN_DETAILS.STANDARD;

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    madrashaName: "",
    email: "",
    phone: "",
  });

  const [price, setPrice] = useState(activePlan.price);

  useEffect(() => {
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
        alert(data?.error || "পেমেন্ট গেটওয়ে লোড করতে সমস্যা হয়েছে। আবার চেষ্টা করুন।");
        setLoading(false);
      }
    } catch (err) {
      console.error("Checkout page error:", err);
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-5xl bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-12 border border-slate-200/50 relative z-10">
      <div className={`md:col-span-5 bg-gradient-to-b ${activePlan.bgClass} p-8 text-white flex flex-col justify-between relative overflow-hidden`}>
        <div className="relative z-10">
          <Link href="/#pricing" className="inline-flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-colors mb-8 group">
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to Pricing
          </Link>
          <span className="text-[10px] uppercase font-bold tracking-widest bg-white/10 px-3 py-1 rounded-full text-amber-400 border border-white/10">Selected Subscription</span>
          <h2 className="text-3xl font-extrabold mt-3 tracking-tight">{activePlan.name}</h2>
          <p className="text-sm text-slate-300 mt-1 capitalize">Billing Cycle: {cycle}</p>
          <div className="mt-8 space-y-4">
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-slate-200"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /><span>Max {activePlan.students}</span></div>
              <div className="flex items-center gap-3 text-sm text-slate-200"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /><span>Max {activePlan.staff}</span></div>
              <div className="flex items-center gap-3 text-sm text-slate-200"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /><span>{activePlan.storage}</span></div>
              {activePlan.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3 text-sm text-slate-300 border-t border-white/5 pt-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" /><span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 md:mt-0 pt-6 border-t border-white/10 relative z-10">
          <div className="text-xs text-slate-400 uppercase font-semibold tracking-wider">Total Payable Amount</div>
          <div className="flex items-baseline gap-2 mt-1"><span className="text-5xl font-black text-amber-400 tracking-tight">৳{price.toLocaleString()}</span><span className="text-sm text-slate-400">/{cycle}</span></div>
          <div className="flex items-center gap-2 mt-4 text-[11px] text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-xl border border-emerald-500/20 w-fit"><ShieldCheck className="w-4 h-4" /><span>Secure SSL Encrypted Checkout</span></div>
        </div>
      </div>

      <form onSubmit={handlePaymentSubmit} className="md:col-span-7 p-8 md:p-12 space-y-6 flex flex-col justify-center">
        <div><h3 className="text-2xl font-bold text-slate-900 tracking-tight">Billing Information</h3></div>
        <div className="space-y-5">
          <div className="space-y-2">
            <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider block">Madrasha Name</label>
            <div className="relative">
              <input type="text" name="madrashaName" value={formData.madrashaName} onChange={handleChange} placeholder="e.g. Jamia Darul Uloom" className="w-full pl-4 pr-4 py-3 bg-slate-50 border rounded-xl" required />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider block">Admin Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-3 bg-slate-50 border rounded-xl" required />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider block">Contact Number</label>
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full p-3 bg-slate-50 border rounded-xl" required />
          </div>
        </div>
        <div className="pt-4">
          <button type="submit" disabled={loading} className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-extrabold py-4 rounded-xl">
            {loading ? "Initializing Safe Gateway..." : "Proceed to Secure Payment"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4 md:p-8 relative overflow-hidden">
      <IslamicPattern variant="floral" opacity={0.02} />
      
      <Suspense fallback={
        <div className="text-center p-8 bg-white rounded-2xl shadow-xl">
          <div className="w-12 h-12 border-4 border-emerald-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-slate-600 font-medium">Please wait, loading checkout details...</p>
        </div>
      }>
        <CheckoutContent />
      </Suspense>
    </div>
  );
}