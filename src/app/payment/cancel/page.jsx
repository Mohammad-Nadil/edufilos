"use client";

import React from "react";
import Link from "next/link";
import { XCircle, RefreshCw, HelpCircle } from "lucide-react";
import IslamicPattern from "@/components/ui/IslamicPattern";

export default function PaymentCancelPage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4 relative overflow-hidden">
      <IslamicPattern variant="floral" opacity={0.03} />

      <div className="w-full max-w-md bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl p-8 text-center border border-slate-200 relative z-10">
        <div className="mx-auto w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-6">
          <XCircle className="w-10 h-10 text-slate-500" />
        </div>

        <span className="text-[10px] uppercase font-bold tracking-widest bg-slate-500/10 px-3 py-1 rounded-full text-slate-700 border border-slate-500/20">
          Payment Cancelled
        </span>

        <h2 className="text-2xl font-bold text-slate-900 mt-4 tracking-tight">পেমেন্ট বাতিল করা হয়েছে</h2>
        <p className="text-sm text-slate-500 mt-2 px-4">
          আপনি নিজেই পেমেন্ট প্রসেসটি বাতিল করেছেন। কোনো টাকা কাটা হয়নি। আপনি চাইলে আবার চেষ্টা করতে পারেন।
        </p>

        <div className="mt-8 space-y-3">
          <Link href="/#pricing" className="w-full block">
            <button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3.5 px-6 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2">
              <RefreshCw className="w-4 h-4" />
              Try Again
            </button>
          </Link>

          <Link href="/#pricing" className="w-full block">
            <button className="w-full bg-white hover:bg-slate-50 text-slate-700 font-semibold py-3 px-6 rounded-xl border border-slate-200 transition-colors flex items-center justify-center gap-2 text-sm">
              <HelpCircle className="w-4 h-4 text-slate-400" />
              Change Plan
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}