"use client";

import React from "react";
import Link from "next/link";
import { CheckCircle2, ArrowRight, ShieldCheck, Download } from "lucide-react";
import IslamicPattern from "@/components/ui/IslamicPattern";

export default function PaymentSuccessPage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4 relative overflow-hidden">
      <IslamicPattern variant="floral" opacity={0.03} />

      <div className="w-full max-w-md bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl p-8 text-center border border-emerald-100 relative z-10">
        <div className="mx-auto w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mb-6 relative">
          <div className="absolute inset-0 bg-emerald-500/10 rounded-full animate-ping opacity-75" />
          <CheckCircle2 className="w-12 h-12 text-emerald-600 relative z-10" />
        </div>

        <span className="text-[10px] uppercase font-bold tracking-widest bg-emerald-500/10 px-3 py-1 rounded-full text-emerald-700 border border-emerald-500/20">
          Payment Successful
        </span>

        <h2 className="text-3xl font-extrabold text-slate-900 mt-4 tracking-tight">আলহামদুলিল্লাহ্‌!</h2>
        <p className="text-sm text-slate-600 mt-2 px-2">
          আপনার মাদরাসার প্রিমিয়াম সাবস্ক্রিপশন পেমেন্টটি সফলভাবে সম্পন্ন হয়েছে। আপনার অ্যাকাউন্টটি আপগ্রেড করা হয়েছে।
        </p>

        <div className="mt-6 bg-slate-50 border border-slate-100 rounded-2xl p-4 text-left space-y-2">
          <div className="flex justify-between text-xs">
            <span className="text-slate-400">Payment Method:</span>
            <span className="font-semibold text-slate-700">SSLCommerz Digital</span>
          </div>
          <div className="flex justify-between text-xs">
            <span className="text-slate-400">Status:</span>
            <span className="font-bold text-emerald-600 flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" /> Paid Securely
            </span>
          </div>
        </div>

        <div className="mt-8 space-y-3">
          <Link href="/" className="w-full block">
            <button className="w-full bg-linear-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-bold py-3.5 px-6 rounded-xl shadow-lg shadow-emerald-600/10 active:scale-[0.99] transition-all flex items-center justify-center gap-2">
              Go to Dashboard
              <ArrowRight className="w-4 h-4" />
            </button>
          </Link>

          <button className="w-full cursor-not-allowed bg-white hover:bg-slate-50 text-slate-700 font-semibold py-3 px-6 rounded-xl border border-slate-200 transition-colors flex items-center justify-center gap-2 text-sm">
            <Download className="w-4 h-4 text-slate-400" />
            Download Invoice
          </button>
        </div>
      </div>
    </div>
  );
}