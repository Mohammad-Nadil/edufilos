"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";
import Link from "next/link";
import toast from "react-hot-toast";
import { FiArrowLeft } from "react-icons/fi";

import { PLAN_DETAILS } from "@/helper/pricing/homePricing";
import Container from "@/components/ui/Container";
import CheckoutForm from "@/components/checkout/CheckoutForm";
import OrderSummary from "@/components/checkout/OrderSummary";
import textureImg from "@/../public/texture.jpg";

// ─── Toast helper to keep handlePaymentSubmit clean ───────────────────────────
const toastStyle = {
  fontSize: "14px",
  fontWeight: "500",
  borderRadius: "10px",
};

function CheckoutContent() {
  const { lang } = useLanguage();
  const searchParams = useSearchParams();

  const planCode = (searchParams.get("plan") || "PREMIUM").toUpperCase();
  const cycle = searchParams.get("cycle") || "monthly";
  const activePlan = PLAN_DETAILS[planCode] || PLAN_DETAILS.PREMIUM;

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    madrashaName: "",
    contactPerson: "",
    email: "",
    address: "",
  });

  // ─── Payment handler lives here — needs formData, planCode, cycle, loading ──
  const handlePaymentSubmit = async (e) => {
    e?.preventDefault();

    const allFilled = Object.values(formData).every((v) => v.trim() !== "");
    if (!allFilled) {
      toast.error(
        lang === "BN"
          ? "অনুগ্রহ করে সকল প্রাতিষ্ঠানিক ও বিলিং তথ্য সঠিকভাবে পূরণ করুন।"
          : "Please complete all institutional and billing fields correctly.",
        { style: toastStyle },
      );
      return;
    }

    setLoading(true);
    const loadingToast = toast.loading(
      lang === "BN"
        ? "SSLCommerz গেটওয়েতে সংযোগ করা হচ্ছে..."
        : "Connecting to SSLCommerz gateway...",
    );

    try {
      const res = await fetch("/api/payment/ssl-init", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ planCode, billingCycle: cycle, ...formData }),
      });

      const data = await res.json();
      toast.dismiss(loadingToast);

      if (data?.url) {
        window.location.href = data.url;
      } else {
        setLoading(false);
        toast.error(
          data?.error ||
            (lang === "BN"
              ? "SSLCommerz গেটওয়ে লোড করতে সমস্যা হয়েছে। আবার চেষ্টা করুন।"
              : "Failed to load SSLCommerz gateway. Please try again."),
          { style: toastStyle },
        );
      }
    } catch (err) {
      console.error("SSLCommerz Integration Error:", err);
      toast.dismiss(loadingToast);
      setLoading(false);
      toast.error(
        lang === "BN"
          ? "সার্ভারের সাথে সংযোগ বিচ্ছিন্ন হয়েছে। ইন্টারনেট কানেকশন চেক করুন।"
          : "Server connection failed. Please check your internet connection.",
        { style: toastStyle },
      );
    }
  };

  return (
    <main className="relative min-h-screen bg-background font-body-md text-on-background py-16 selection:bg-primary/10">
      {/* Texture background */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-50 dark:brightness-50 dark:opacity-10">
        <Image
          src={textureImg}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-right"
        />
      </div>

      <Container className="relative z-10">
        {/* Back link */}
        <div className="mb-8">
          <Link
            href="/#pricing"
            className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide hover:text-primary transition-all group"
          >
            <FiArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            {lang === "BN"
              ? "প্রাইসিং প্ল্যানে ফিরে যান"
              : "Back to Pricing Plans"}
          </Link>
        </div>

        {/* Page heading */}
        <div className="mb-12 text-center md:text-left">
          <h1 className="font-display-lg text-4xl md:text-display-lg text-primary mb-4 tracking-tight">
            {lang === "BN"
              ? "আপনার সাবস্ক্রিপশন সম্পন্ন করুন"
              : "Complete Your Subscription"}
          </h1>
          <p className="text-body-lg max-w-2xl">
            {lang === "BN"
              ? "EduFilos-এর সাথে আপনার মাদরাসা ব্যবস্থাপনায় আধুনিকায়ন আনুন। সম্পূর্ণ নিরাপদ ও প্রাতিষ্ঠানিক অনবোর্ডিং।"
              : "Step into the future of Madrasah management with EduFilos. Secure and professional institutional onboarding."}
          </p>
        </div>

        {/* 2-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <div className="lg:col-span-7">
            <CheckoutForm
              lang={lang}
              formData={formData}
              setFormData={setFormData}
              onSubmit={handlePaymentSubmit}
              loading={loading}
            />
          </div>
          <div className="lg:col-span-5">
            <OrderSummary
              lang={lang}
              activePlan={activePlan}
              cycle={cycle}
              loading={loading}
              onPay={handlePaymentSubmit}
            />
          </div>
        </div>
      </Container>
    </main>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-background flex items-center justify-center text-sm font-bold">
          Loading subscription module...
        </div>
      }
    >
      <CheckoutContent />
    </Suspense>
  );
}
