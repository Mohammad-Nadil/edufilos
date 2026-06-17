"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";
import toast from "react-hot-toast"; // react-hot-toast ইমপোর্ট করা হলো
import {
  FiArrowLeft,
  FiCheckCircle,
  FiLock,
  FiInfo,
  FiMapPin,
} from "react-icons/fi";
import {
  HiOutlineBuildingLibrary,
  HiOutlineEnvelope,
  HiOutlineUser,
} from "react-icons/hi2";
import { PLAN_DETAILS } from "@/temp";
import textureImg from "@/../public/texture.jpg";
import Container from "@/components/ui/Container";
import Image from "next/image";

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

  const [price, setPrice] = useState(activePlan.price);

  useEffect(() => {
    setPrice(activePlan.price);
  }, [activePlan]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePaymentSubmit = async (e) => {
    e.preventDefault();

    // ভ্যালিডেশন চেক এবং কাস্টম টোস্ট মেসেজ
    if (
      !formData.madrashaName ||
      !formData.contactPerson ||
      !formData.email ||
      !formData.address
    ) {
      toast.error(
        lang === "BN"
          ? "অনুগ্রহ করে সকল প্রাতিষ্ঠানিক ও বিলিং তথ্য সঠিকভাবে পূরণ করুন।"
          : "Please complete all institutional and billing fields correctly.",
        {
          style: {
            fontSize: "14px",
            fontWeight: "500",
            borderRadius: "10px",
          },
        }
      );
      return;
    }

    setLoading(true);
    
    // গেটওয়ে লোড হওয়ার সময় একটি ডাইনামিক লোডিং টোস্ট
    const loadingToast = toast.loading(
      lang === "BN" 
        ? "SSLCommerz গেটওয়েতে সংযোগ করা হচ্ছে..." 
        : "Connecting to SSLCommerz gateway..."
    );

    try {
      const response = await fetch("/api/payment/ssl-init", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          planCode,
          billingCycle: cycle,
          ...formData,
        }),
      });

      const data = await response.json();

      if (data?.url) {
        toast.dismiss(loadingToast);
        window.location.href = data.url;
      } else {
        toast.dismiss(loadingToast);
        setLoading(false);
        
        toast.error(
          data?.error ||
            (lang === "BN"
              ? "SSLCommerz গেটওয়ে লোড করতে সমস্যা হয়েছে। আবার চেষ্টা করুন।"
              : "Failed to load SSLCommerz gateway. Please try again."),
          {
            style: {
              fontSize: "14px",
              fontWeight: "500",
              borderRadius: "10px",
            },
          }
        );
      }
    } catch (err) {
      console.error("SSLCommerz Integration Error:", err);
      toast.dismiss(loadingToast);
      setLoading(false);
      
      toast.error(
        lang === "BN"
          ? "সার্ভারের সাথে সংযোগ বিচ্ছিন্ন হয়েছে। ইন্টারনেট কানেকশন চেক করুন।"
          : "Server connection failed. Please check your internet connection.",
        {
          style: {
            fontSize: "14px",
            fontWeight: "500",
            borderRadius: "10px",
          },
        }
      );
    }
  };

  return (
    <main className="relative min-h-screen bg-background font-body-md text-on-background py-16 selection:bg-primary/10">
     {textureImg && (
  <div className="pointer-events-none absolute inset-0 -z-10 opacity-50 dark:brightness-50 dark:opacity-10  ">
    <Image
      src={textureImg}
      alt="Background Texture"
      fill
      priority
      sizes="100vw" // এই যে, এখানে গুজে দিলাম!
      className="object-cover object-right"
    />
  </div>
)}
      <Container className=" relative z-10">
        <div className="mb-8">
          <Link
            href="/#pricing"
            className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide  hover:text-primary transition-all group"
          >
            <FiArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            {lang === "BN"
              ? "প্রাইসিং প্ল্যানে ফিরে যান"
              : "Back to Pricing Plans"}
          </Link>
        </div>

        <div className="mb-12 text-center md:text-left b">
          <h1 className="font-display-lg text-4xl md:text-display-lg text-primary mb-4 tracking-tight">
            {lang === "BN"
              ? "আপনার সাবস্ক্রিপশন সম্পন্ন করুন"
              : "Complete Your Subscription"}
          </h1>
          <p className=" text-body-lg max-w-2xl">
            {lang === "BN"
              ? "EduFilos-এর সাথে আপনার মাদরাসা ব্যবস্থাপনায় আধুনিকায়ন আনুন। সম্পূর্ণ নিরাপদ ও প্রাতিষ্ঠানিক অনবোর্ডিং।"
              : "Step into the future of Madrasah management with EduFilos. Secure and professional institutional onboarding."}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <div className="lg:col-span-7 bg-card">
            <form
              onSubmit={handlePaymentSubmit}
              className=" p-6 md:p-8 rounded-xl border border-muted/50 shadow-[0_4px_20px_rgba(6,78,59,0.03)] flex flex-col gap-y-6"
            >
              <div className="flex items-center gap-3 pb-2 border-b border-muted/50">
                <HiOutlineBuildingLibrary className="w-6 h-6 text-primary shrink-0" />
                <h2 className="font-headline-sm text-xl  text-primary">
                  {lang === "BN"
                    ? "প্রাতিষ্ঠানিক ও বিলিং বিবরণ"
                    : "Billing & Institution Details"}
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="md:col-span-2 flex flex-col gap-y-2">
                  <label className="text-sm font-semibold  flex items-center gap-1.5">
                    {lang === "BN"
                      ? "মাদরাসা / প্রতিষ্ঠানের নাম"
                      : "Madrasah Name"}
                    <span className="text-error">*</span>
                  </label>
                  <input
                    type="text"
                    name="madrashaName"
                    value={formData.madrashaName}
                    onChange={handleChange}
                    placeholder={
                      lang === "BN"
                        ? "উদা: জামিয়া দারুল উলুম আল-ইসলামিয়া"
                        : "e.g. Darul Uloom Al-Islamiya"
                    }
                    className="w-full  border border-muted/50  p-3 rounded text-body-md transition-all focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container"
                    required
                  />
                </div>

                <div className="flex flex-col gap-y-2">
                  <label className="text-sm font-semibold  flex items-center gap-1.5">
                    <HiOutlineUser className="text-outline" />
                    {lang === "BN"
                      ? "যোগাযোগকারী ব্যক্তি (নাম)"
                      : "Contact Person"}
                    <span className="text-error">*</span>
                  </label>
                  <input
                    type="text"
                    name="contactPerson"
                    value={formData.contactPerson}
                    onChange={handleChange}
                    placeholder={lang === "BN" ? "পূর্ণ নাম" : "Full Name"}
                    className="w-full  border  p-3 rounded  transition-all focus:outline-none border-muted/50"
                    required
                  />
                </div>

                <div className="flex flex-col gap-y-2">
                  <label className="text-sm font-semibold  flex items-center gap-1.5">
                    <HiOutlineEnvelope className="text-outline" />
                    {lang === "BN" ? "ইমেইল ঠিকানা" : "Email Address"}
                    <span className="text-error">*</span>
                  </label>
                  <input
                    type="type"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="principal@madrasah.edu"
                    className="w-full  border  p-3 rounded text-body-md transition-all border-muted/50"
                    required
                  />
                </div>

                <div className="md:col-span-2 flex flex-col gap-y-2">
                  <label className="text-sm font-semibold  flex items-center gap-1.5">
                    <FiMapPin className="text-outline" />
                    {lang === "BN"
                      ? "প্রতিষ্ঠানের সম্পূর্ণ ঠিকানা"
                      : "Street Address"}
                    <span className="text-error">*</span>
                  </label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder={
                      lang === "BN"
                        ? "জেলা ও পোস্টাল কোডসহ সম্পূর্ণ ঠিকানা"
                        : "Full address including City and Postal Code"
                    }
                    rows="3"
                    className="w-full  border  p-3 rounded text-body-md transition-all border-muted/50"
                    required
                  ></textarea>
                </div>
              </div>

              <div className="p-4 bg-surface-container-high rounded-xl border border-muted/50 flex items-start gap-3 mt-2">
                <FiInfo className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="text-sm  leading-relaxed">
                  {lang === "BN"
                    ? "কনফার্ম বাটনে ক্লিক করার পর আপনাকে স্বয়ংক্রিয়ভাবে SSLCommerz-এর নিরাপদ পেমেন্ট গেটওয়েতে রিডাইরেক্ট করা হবে। সেখানে আপনি bKash, Nagad, Rocket, বা যেকোনো বাংলাদেশী কার্ডের মাধ্যমে নিরাপদ ট্রানজেকশন সম্পন্ন করতে পারবেন।"
                    : "You will be automatically redirected to the secure SSLCommerz payment gateway. You can easily complete your checkout using bKash, Nagad, Rocket, Visa/Mastercard, or Internet Banking."}
                </p>
              </div>
            </form>
          </div>

          <div className="lg:col-span-5    ">
            <div className="sticky top-24 bg-card rounded-xl border-t-4 border-t-primary border border-muted/50 shadow-[0_4px_20px_rgba(6,78,59,0.03)] overflow-hidden">
              <div className="p-6 md:p-8 border-b border-muted/50">
                <h2 className="font-headline-sm text-xl md:text-headline-sm text-primary mb-1">
                  {lang === "BN" ? "আপনার সাবস্ক্রিপশন" : "Your Subscription"}
                </h2>
                <p className=" text-sm font-semibold">
                  {lang === "BN"
                    ? "নির্বাচিত প্ল্যান মডিউলসমূহ যাচাই করুন"
                    : "Review your selected plan features"}
                </p>
              </div>

              <div className="p-6 md:p-8 space-y-6">
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <h3 className="text-lg font-bold text-primary">
                      {lang === "BN" ? activePlan.name_bn : activePlan.name}
                    </h3>
                    <p className=" text-xs font-semibold uppercase tracking-wider mt-0.5">
                      {cycle === "monthly"
                        ? lang === "BN"
                          ? "মাসিক বিলিং"
                          : "Monthly Billing"
                        : lang === "BN"
                          ? "বার্ষিক বিলিং"
                          : "Annual Billing"}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-xl md:text-2xl font-bold text-secondary">
                      ৳{price.toLocaleString()}
                    </span>
                    <span className=" text-xs">
                      /
                      {cycle === "monthly"
                        ? lang === "BN"
                          ? "মাস"
                          : "month"
                        : lang === "BN"
                          ? "বছর"
                          : "year"}
                    </span>
                  </div>
                </div>

                <ul className="space-y-3 pt-2 border-t border-muted/50">
                  {(lang === "BN"
                    ? activePlan.features_bn
                    : activePlan.features
                  ).map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-sm font-medium "
                    >
                      <FiCheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="border-t border-muted/50 pt-5 space-y-3">
                  <div className="flex justify-between text-sm font-medium">
                    <span className="">
                      {lang === "BN" ? "সাবটোটাল" : "Subtotal"}
                    </span>
                    <span className="text-on-background font-bold">
                      ৳{price.toLocaleString()}.00
                    </span>
                  </div>
                  <div className="flex justify-between text-sm font-medium">
                    <span className="">
                      {lang === "BN"
                        ? "প্লাটফর্ম ফি (ট্যাক্স)"
                        : "Platform Fee (Tax)"}
                    </span>
                    <span className="text-on-background font-bold">৳0.00</span>
                  </div>

                  <div className="flex justify-between text-lg font-bold text-primary pt-3 border-t border-dashed border-muted/50">
                    <span>
                      {lang === "BN"
                        ? "সর্বমোট প্রদেয় প্রাইজ"
                        : "Total Amount"}
                    </span>
                    <span>৳{price.toLocaleString()}.00</span>
                  </div>
                </div>

                <button
                  onClick={handlePaymentSubmit}
                  disabled={loading}
                  className="w-full bg-primary text-white py-3.5 rounded-xl font-semibold text-base hover:opacity-90 transition-all shadow-md active:scale-[0.98] duration-200 mt-4 flex justify-center items-center gap-2 disabled:opacity-50 cursor-pointer"
                >
                  {loading ? (
                    <span className="animate-pulse flex items-center gap-2">
                      {lang === "BN"
                        ? "SSLCommerz-এ রিডাইরেক্ট হচ্ছে..."
                        : "Redirecting to SSLCommerz..."}
                    </span>
                  ) : (
                    <>
                      <span>
                        {lang === "BN"
                          ? "কনফার্ম ও পেমেন্ট করুন"
                          : "Confirm & Pay"}
                      </span>
                      <FiLock className="w-4 h-4" />
                    </>
                  )}
                </button>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2 opacity-80">
                  <img
                    alt="SSLCommerz Secured Payment"
                    className="h-6 object-contain filter contrast-125 brightness-95"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA63i_2tP-PrKbrt5v9FhEDLccoKTTfHuEuUYsvuklrsbxfthbMZXXFCui4MZ9ixZ9F3J5jqcevDSRRby-q-RRwp3bDSRQEPrVosI0oUSjL2Vm7ivF1Vb_DRJDtSCXLTTql90GgE9slp5ewHT5PMXEiVD9WbRhzAsSqCSSDPm5Moouw3THHSZx0rjeLdhHW1S_nL3AOEdiaJUbGuq_GOLm-VWmpNEjOp6oZyN8A29B65GhZ1DdVN-Pjo3qX_tKZKvrbd_9waJ0Yc3Vr"
                  />
                  <div className="hidden sm:block h-4 w-px bg-outline-variant"></div>
                  <div className="flex items-center gap-1 text-[11px] font-bold  uppercase tracking-widest">
                    <span>PCI-DSS Secured</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 text-center">
              <p className=" text-sm font-medium">
                {lang === "BN"
                  ? "কোনো সহযোগিতার প্রয়োজন? "
                  : "Need assistance? "}{" "}
                <Link
                  href="/contact"
                  className="text-primary font-bold hover:underline transition-all"
                >
                  {lang === "BN"
                    ? "সাপোর্ট টিমের সাথে যোগাযোগ করুন"
                    : "Contact Support"}
                </Link>
              </p>
            </div>
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
        <div className="min-h-screen bg-background flex items-center justify-center text-sm font-bold ">
          Loading subscription module...
        </div>
      }
    >
      <CheckoutContent />
    </Suspense>
  );
}