"use client";

import { FiInfo, FiMapPin } from "react-icons/fi";
import {
  HiOutlineBuildingLibrary,
  HiOutlineEnvelope,
  HiOutlineUser,
} from "react-icons/hi2";

// props: { lang, formData, setFormData, onSubmit, loading }
export default function CheckoutForm({
  lang,
  formData,
  setFormData,
  onSubmit,
  loading,
}) {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const inputBase =
    "w-full border border-muted/50 bg-transparent p-3 rounded text-body-md transition-all focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container";

  return (
    <form
      onSubmit={onSubmit}
      className="bg-card p-6 md:p-8 rounded-xl border border-muted/50 shadow-[0_4px_20px_rgba(6,78,59,0.03)] flex flex-col gap-y-6"
    >
      {/* Section header */}
      <div className="flex items-center gap-3 pb-2 border-b border-muted/50">
        <HiOutlineBuildingLibrary className="w-6 h-6 text-primary shrink-0" />
        <h2 className="font-headline-sm text-xl text-primary">
          {lang === "BN"
            ? "প্রাতিষ্ঠানিক ও বিলিং বিবরণ"
            : "Billing & Institution Details"}
        </h2>
      </div>

      {/* Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Madrasah name — full width */}
        <div className="md:col-span-2 flex flex-col gap-y-2">
          <label className="text-sm font-semibold flex items-center gap-1.5">
            {lang === "BN" ? "মাদরাসা / প্রতিষ্ঠানের নাম" : "Madrasah Name"}
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
            className={inputBase}
            required
          />
        </div>

        {/* Contact person */}
        <div className="flex flex-col gap-y-2">
          <label className="text-sm font-semibold flex items-center gap-1.5">
            <HiOutlineUser className="text-outline" />
            {lang === "BN" ? "যোগাযোগকারী ব্যক্তি (নাম)" : "Contact Person"}
            <span className="text-error">*</span>
          </label>
          <input
            type="text"
            name="contactPerson"
            value={formData.contactPerson}
            onChange={handleChange}
            placeholder={lang === "BN" ? "পূর্ণ নাম" : "Full Name"}
            className={inputBase}
            required
          />
        </div>

        {/* Email */}
        <div className="flex flex-col gap-y-2">
          <label className="text-sm font-semibold flex items-center gap-1.5">
            <HiOutlineEnvelope className="text-outline" />
            {lang === "BN" ? "ইমেইল ঠিকানা" : "Email Address"}
            <span className="text-error">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="principal@madrasah.edu"
            className={inputBase}
            required
          />
        </div>

        {/* Address — full width */}
        <div className="md:col-span-2 flex flex-col gap-y-2">
          <label className="text-sm font-semibold flex items-center gap-1.5">
            <FiMapPin className="text-outline" />
            {lang === "BN" ? "প্রতিষ্ঠানের সম্পূর্ণ ঠিকানা" : "Street Address"}
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
            rows={3}
            className={inputBase}
            required
          />
        </div>
      </div>

      {/* Info box */}
      <div className="p-4 bg-surface-container-high rounded-xl border border-muted/50 flex items-start gap-3 mt-2">
        <FiInfo className="w-5 h-5 text-primary shrink-0 mt-0.5" />
        <p className="text-sm leading-relaxed">
          {lang === "BN"
            ? "কনফার্ম বাটনে ক্লিক করার পর আপনাকে স্বয়ংক্রিয়ভাবে SSLCommerz-এর নিরাপদ পেমেন্ট গেটওয়েতে রিডাইরেক্ট করা হবে। সেখানে আপনি bKash, Nagad, Rocket, বা যেকোনো বাংলাদেশী কার্ডের মাধ্যমে নিরাপদ ট্রানজেকশন সম্পন্ন করতে পারবেন।"
            : "You will be automatically redirected to the secure SSLCommerz payment gateway. You can complete your checkout using bKash, Nagad, Rocket, Visa/Mastercard, or Internet Banking."}
        </p>
      </div>
    </form>
  );
}
