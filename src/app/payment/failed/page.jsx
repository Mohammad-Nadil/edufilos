"use client";

import React, { Suspense } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { AlertCircle, RefreshCw, HelpCircle } from "lucide-react";

function FailedContent() {
  const { lang } = useLanguage();

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white dark:bg-card border border-neutral-200/60 dark:border-border-custom/60 rounded-2xl p-6 text-center shadow-2xs">
        
        <div className="w-16 h-16 bg-rose-50 dark:bg-rose-500/10 text-rose-600 dark:text-rose-400 rounded-full flex items-center justify-center mx-auto mb-4 border border-rose-500/10">
          <AlertCircle className="w-8 h-8" />
        </div>

        <h1 className="text-xl font-black text-neutral-900 dark:text-white">
          {lang === "BN" ? "পেমেন্ট ব্যর্থ হয়েছে" : "Payment Failed"}
        </h1>
        
        <p className="text-xs sm:text-sm text-neutral-500 dark:text-muted-foreground font-medium mt-2 px-2">
          {lang === "BN" 
            ? "দুঃখিত! আপনার অ্যাকাউন্টে পর্যাপ্ত ব্যালেন্স না থাকা বা সার্ভার ত্রুটির কারণে ট্রানজেকশনটি সম্পন্ন করা যায়নি।" 
            : "Your transaction could not be processed due to insufficient balance or a temporary gateway issue."}
        </p>

        <div className="mt-5 text-left bg-neutral-50 dark:bg-neutral-900/40 border border-neutral-100 dark:border-border-custom/20 rounded-xl p-3.5 text-xs text-neutral-500 dark:text-muted-foreground space-y-1.5 font-medium">
          <span className="text-neutral-700 dark:text-neutral-300 font-bold block mb-1">
            {lang === "BN" ? "করণীয় পদক্ষেপ:" : "Suggested Actions:"}
          </span>
          <p>• {lang === "BN" ? "আপনার ওয়ালেট বা কার্ডের ব্যালেন্স চেক করুন।" : "Verify your card or mobile wallet balance."}</p>
          <p>• {lang === "BN" ? "পিন বা ওটিপি (OTP) সঠিক দিয়েছেন কিনা নিশ্চিত হোন।" : "Double-check your account credentials & try again."}</p>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row gap-2">
          <Link href="/checkout" className="flex-1 h-11 px-4 rounded-xl bg-rose-600 text-white font-bold text-xs flex items-center justify-center gap-2 hover:bg-rose-700 transition-all cursor-pointer">
            <RefreshCw className="w-3.5 h-3.5" />
            <span>{lang === "BN" ? "আবার চেষ্টা করুন" : "Try Again"}</span>
          </Link>
          
          <Link href="/support" className="flex-1 h-11 px-4 rounded-xl border border-neutral-200 dark:border-border-custom cursor-not-allowed text-neutral-600 dark:text-neutral-300 font-bold text-xs flex items-center justify-center gap-2 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-all">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{lang === "BN" ? "সাপোর্ট সেন্টারে যান" : "Get Support"}</span>
          </Link>
        </div>

      </div>
    </div>
  );
}

export default function PaymentFailedPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-xs font-bold text-neutral-400">LOADING...</div>}>
      <FailedContent />
    </Suspense>
  );
}