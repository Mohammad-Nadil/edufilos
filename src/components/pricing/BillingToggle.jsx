"use client";

export default function BillingToggle({
  billing,
  setBilling,
  monthly,
  yearly,
}) {
  return (
    <div className="flex justify-center mb-16">
      <div className="rounded-full border bg-card p-1">
        <button
          onClick={() => setBilling("monthly")}
          className={`px-7 py-2 rounded-full text-sm font-semibold ${
            billing === "monthly" ? "bg-primary text-white" : ""
          }`}
        >
          {monthly}
        </button>

        <button
          onClick={() => setBilling("yearly")}
          className={`px-7 py-2 rounded-full text-sm font-semibold ${
            billing === "yearly" ? "bg-primary text-white" : ""
          }`}
        >
          {yearly}
        </button>
      </div>
    </div>
  );
}
