"use client";

import React from "react";
import Link from "next/link";
import { AlertTriangle, RefreshCw, MessageSquare } from "lucide-react";
import IslamicPattern from "@/components/ui/IslamicPattern";

export default function PaymentFailedPage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4 relative overflow-hidden">
      <IslamicPattern variant="floral" opacity={0.03} />

      <div className="w-full max-w-md bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl p-8 text-center border border-rose-100 relative z-10">
        <div className="mx-auto w-16 h-16 bg-rose-50 rounded-full flex items-center justify-center mb-6">
          <AlertTriangle className="w-10 h-10 text-rose-600" />
        </div>

        <span className="text-[10px] uppercase font-bold tracking-widest bg-rose-500/10 px-3 py-1 rounded-full text-rose-700 border border-rose-500/20">
          Transaction Failed
        </span>

        <h2 className="text-2xl font-bold text-slate-900 mt-4 tracking-tight">দুঃখিত, পেমেন্টটি ব্যর্থ হয়েছে</h2>
        <p className="text-sm text-slate-600 mt-2 px-2">
          আপনার ব্যাংক বা পেমেন্ট গেটওয়ে থেকে ট্রানজেকশনটি রিজেক্ট করা হয়েছে। অনুগ্রহ করে কার্ডের ব্যালেন্স বা তথ্য চেক করে আবার চেষ্টা করুন।
        </p>

        <div className="mt-6 p-4 rounded-2xl bg-rose-50/50 border border-rose-100/50 text-xs text-rose-800 text-left">
          💡 যদি আপনার অ্যাকাউন্ট থেকে টাকা কেটে নেওয়া হয়ে থাকে এবং সাবস্ক্রিপশন চালু না হয়, তবে আমাদের সাপোর্ট লাইনে যোগাযোগ করুন।
        </div>

        <div className="mt-8 space-y-3">
          <Link href="/#pricing" className="w-full block">
            <button className="w-full bg-linear-to-r from-rose-600 to-rose-700 hover:from-rose-700 hover:to-rose-800 text-white font-bold py-3.5 px-6 rounded-xl shadow-lg shadow-rose-600/10 active:scale-[0.99] transition-all flex items-center justify-center gap-2">
              <RefreshCw className="w-4 h-4" />
              Re-attempt Payment
            </button>
          </Link>

          <a href="https://wa.me/YOUR_NUMBER" target="_blank" rel="noreferrer" className="w-full block">
            <button className="w-full bg-white hover:bg-slate-50 text-slate-700 font-semibold py-3 px-6 rounded-xl border border-slate-200 transition-colors flex items-center justify-center gap-2 text-sm">
              <MessageSquare className="w-4 h-4 text-slate-400" />
              Contact Support
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}