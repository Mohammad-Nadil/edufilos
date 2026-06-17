"use client";

import React, { Suspense } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { XCircle, CornerUpLeft } from "lucide-react";

function CancelContent() {
  const { lang } = useLanguage();

  return (
    <div className="min-h-screen bg-[#faf8f5] dark:bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white dark:bg-card border border-neutral-200/60 dark:border-border-custom/60 rounded-2xl p-6 text-center shadow-2xs">
        
        <div className="w-16 h-16 bg-amber-50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400 rounded-full flex items-center justify-center mx-auto mb-4 border border-amber-500/10">
          <XCircle className="w-8 h-8" />
        </div>

        <h1 className="text-xl font-black text-neutral-900 dark:text-white">
          {lang === "BN" ? "পেমেন্ট বাতিল করা হয়েছে" : "Payment Cancelled"}
        </h1>
        
        <p className="text-xs sm:text-sm text-neutral-500 dark:text-muted-foreground font-medium mt-2 px-4">
          {lang === "BN" 
            ? "আপনি নিজেই পেমেন্ট প্রসেসটি বাতিল করেছেন। আপনার অ্যাকাউন্ট থেকে কোনো টাকা কাটা হয়নি।" 
            : "The payment process has been aborted by the user. No funds have been deducted from your account."}
        </p>

        <div className="mt-5 bg-amber-50/50 dark:bg-amber-500/5 border border-amber-500/10 rounded-xl p-3.5 text-xs text-amber-800 dark:text-amber-400 font-medium text-center">
          {lang === "BN" 
            ? "বকেয়া ফি বা জরিমানা এড়াতে নির্ধারিত সময়ের মধ্যে ফি পরিশোধ করার জন্য অনুরোধ করা হলো।" 
            : "Please settle pending invoices before the due date to ensure uninterrupted portal access."}
        </div>

        <div className="mt-6">
          <Link href="/#pricing" className="w-full h-11 px-4 rounded-xl bg-primary text-white font-bold text-xs flex items-center justify-center gap-2 shadow-xs hover:brightness-105 transition-all">
            <CornerUpLeft className="w-4 h-4" />
            <span>{lang === "BN" ? "পেমেন্ট পেজে ফিরে যান" : "Return to Payments"}</span>
          </Link>
        </div>

      </div>
    </div>
  );
}

export default function PaymentCancelPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-xs font-bold text-neutral-400">LOADING...</div>}>
      <CancelContent />
    </Suspense>
  );
}