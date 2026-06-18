"use client";

import Link from "next/link";
import { FiLock } from "react-icons/fi";
import PlanFeatureList from "./PlanFeatureList";
import PaymentTrustBadge from "./PaymentTrustBadge";

// props: { lang, activePlan, cycle, loading, onPay }
export default function OrderSummary({
  lang,
  activePlan,
  cycle,
  loading,
  onPay,
}) {
  const price =
    cycle === "yearly"
      ? (activePlan.yearlyPrice ?? activePlan.price)
      : activePlan.price;

  const features = lang === "BN" ? activePlan.features_bn : activePlan.features;

  const cycleLabel =
    cycle === "monthly"
      ? lang === "BN"
        ? "মাসিক বিলিং"
        : "Monthly Billing"
      : lang === "BN"
        ? "বার্ষিক বিলিং"
        : "Annual Billing";

  const perLabel =
    cycle === "monthly"
      ? lang === "BN"
        ? "মাস"
        : "month"
      : lang === "BN"
        ? "বছর"
        : "year";

  return (
    <div className="sticky top-24 bg-card rounded-xl border-t-4 border-t-primary border border-muted/50 shadow-[0_4px_20px_rgba(6,78,59,0.03)] overflow-hidden">
      {/* Card header */}
      <div className="p-6 md:p-8 border-b border-muted/50">
        <h2 className="font-headline-sm text-xl md:text-headline-sm text-primary mb-1">
          {lang === "BN" ? "আপনার সাবস্ক্রিপশন" : "Your Subscription"}
        </h2>
        <p className="text-sm font-semibold">
          {lang === "BN"
            ? "নির্বাচিত প্ল্যান মডিউলসমূহ যাচাই করুন"
            : "Review your selected plan features"}
        </p>
      </div>

      <div className="p-6 md:p-8 space-y-6">
        {/* Plan name + price */}
        <div className="flex justify-between items-start gap-4">
          <div>
            <h3 className="text-lg font-bold text-primary">
              {lang === "BN" ? activePlan.name_bn : activePlan.name}
            </h3>
            <p className="text-xs font-semibold uppercase tracking-wider mt-0.5">
              {cycleLabel}
            </p>
          </div>
          <div className="text-right shrink-0">
            <span className="text-xl md:text-2xl font-bold text-secondary">
              ৳{price.toLocaleString()}
            </span>
            <span className="text-xs">/{perLabel}</span>
          </div>
        </div>

        {/* Feature list */}
        <PlanFeatureList features={features} />

        {/* Price breakdown */}
        <div className="border-t border-muted/50 pt-5 space-y-3">
          <div className="flex justify-between text-sm font-medium">
            <span>{lang === "BN" ? "সাবটোটাল" : "Subtotal"}</span>
            <span className="text-on-background font-bold">
              ৳{price.toLocaleString()}.00
            </span>
          </div>
          <div className="flex justify-between text-sm font-medium">
            <span>
              {lang === "BN" ? "প্লাটফর্ম ফি (ট্যাক্স)" : "Platform Fee (Tax)"}
            </span>
            <span className="text-on-background font-bold">৳0.00</span>
          </div>
          <div className="flex justify-between text-lg font-bold text-primary pt-3 border-t border-dashed border-muted/50">
            <span>
              {lang === "BN" ? "সর্বমোট প্রদেয় প্রাইজ" : "Total Amount"}
            </span>
            <span>৳{price.toLocaleString()}.00</span>
          </div>
        </div>

        {/* Pay button */}
        <button
          onClick={onPay}
          disabled={loading}
          className="w-full bg-primary text-white py-3.5 rounded-xl font-semibold text-base hover:opacity-90 active:scale-[0.98] transition-all duration-200 shadow-md flex justify-center items-center gap-2 disabled:opacity-50 cursor-pointer"
        >
          {loading ? (
            <span className="animate-pulse">
              {lang === "BN"
                ? "SSLCommerz-এ রিডাইরেক্ট হচ্ছে..."
                : "Redirecting to SSLCommerz..."}
            </span>
          ) : (
            <>
              <span>
                {lang === "BN" ? "কনফার্ম ও পেমেন্ট করুন" : "Confirm & Pay"}
              </span>
              <FiLock className="w-4 h-4" />
            </>
          )}
        </button>

        {/* Trust badge */}
        <PaymentTrustBadge />
      </div>

      {/* Support link */}
      <div className="px-6 pb-6 text-center">
        <p className="text-sm font-medium">
          {lang === "BN" ? "কোনো সহযোগিতার প্রয়োজন? " : "Need assistance? "}
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
  );
}
