"use client";

import React, { Suspense } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { CheckCircle, ArrowRight, Download } from "lucide-react";

function SuccessContent() {
  const { lang } = useLanguage();

  return (
    <div className="min-h-screen bg-[#faf8f5] dark:bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white dark:bg-card border border-neutral-200/60 dark:border-border-custom/60 rounded-2xl p-6 text-center shadow-2xs">
        
        <div className="w-16 h-16 bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-500/10">
          <CheckCircle className="w-8 h-8" />
        </div>

        <h1 className="text-xl font-black text-neutral-900 dark:text-white">
          {lang === "BN" ? "পেমেন্ট সফল হয়েছে!" : "Payment Successful!"}
        </h1>
        
        <p className="text-xs sm:text-sm text-neutral-500 dark:text-muted-foreground font-medium mt-2 px-2">
          {lang === "BN" 
            ? "আপনার অর্থপ্রদানটি সফলভাবে সম্পন্ন হয়েছে। ইনভয়েস কপিটি নিচে ডাউনলোড করে রাখতে পারেন।" 
            : "Your transaction has been processed successfully. You can download the receipt below."}
        </p>

        <div className="mt-5 bg-neutral-50 dark:bg-neutral-900/40 border border-neutral-100 dark:border-border-custom/20 rounded-xl p-4 text-left space-y-2 text-xs">
          <div className="flex justify-between">
            <span className="text-neutral-400 font-medium">{lang === "BN" ? "ইনভয়েস নং:" : "Invoice ID:"}</span>
            <span className="font-mono font-bold text-neutral-800 dark:text-neutral-200">INV-2026-8941</span>
          </div>
          <div className="flex justify-between">
            <span className="text-neutral-400 font-medium">{lang === "BN" ? "পরিমাণ:" : "Amount Paid:"}</span>
            <span className="font-black text-emerald-600 dark:text-emerald-400">৳১,৫০০</span>
          </div>
          <div className="flex justify-between">
            <span className="text-neutral-400 font-medium">{lang === "BN" ? "পেমেন্ট মেথড:" : "Method:"}</span>
            <span className="font-bold text-neutral-700 dark:text-neutral-300">bKash</span>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-2">
          <button className="w-full h-11 px-4 rounded-xl bg-primary text-white font-bold text-xs flex items-center justify-center gap-2 shadow-xs hover:brightness-105 active:scale-[0.99] transition-all cursor-pointer">
            <Download className="w-4 h-4" />
            <span>{lang === "BN" ? "রসিদ ডাউনলোড করুন" : "Download Receipt"}</span>
          </button>
          
          <Link href="/" className="w-full h-11 px-4 rounded-xl border border-neutral-200 dark:border-border-custom text-neutral-600 dark:text-neutral-300 font-bold text-xs flex items-center justify-center gap-2 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-all">
            <span>{lang === "BN" ? "ড্যাশবোর্ডে ফিরুন" : "Go to Dashboard"}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}

export default function PaymentSuccessPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-xs font-bold text-neutral-400">LOADING...</div>}>
      <SuccessContent />
    </Suspense>
  );
}