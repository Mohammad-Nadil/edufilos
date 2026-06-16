export const PLAN_DETAILS = {
  STANDARD: {
    name: "Standard",
    name_bn: "স্ট্যান্ডার্ড",
    code: "STANDARD",
    price: 4900,
    billingCycle: "monthly",
    limits: { maxStudents: 500, maxEmployees: 30, storageLimit: 2048 },
    features: [
      "Student records logs",
      "Faculties directory grids",
      "Basic accounting",
    ],
    features_bn: [
      "শিক্ষার্থী রেকর্ড ও লগ",
      "শিক্ষক ও স্টাফ ডিরেক্টরি গ্রিড",
      "বেসিক অ্যাকাউন্টস ও হিসাব",
    ],
  },
  PREMIUM: {
    name: "Premium",
    name_bn: "প্রিমিয়াম",
    code: "PREMIUM",
    price: 9999,
    billingCycle: "monthly",
    limits: { maxStudents: 2000, maxEmployees: 100, storageLimit: 10240 },
    features: [
      "Automated SMS pipelines",
      "Online admissions tracking",
      "Advanced reporting",
    ],
    features_bn: [
      "স্বয়ংক্রিয় এসএমএস পাইপলাইন",
      "অনলাইন ভর্তি ট্র্যাকিং সিস্টেম",
      "অ্যাডভান্সড রিপোর্টিং ড্যাশবোর্ড",
    ],
  },
  ENTERPRISE: {
    name: "Enterprise",
    name_bn: "এন্টারপ্রাইজ",
    code: "ENTERPRISE",
    price: 14999,
    billingCycle: "yearly",
    limits: {
      maxStudents: "Unlimited",
      maxEmployees: "Unlimited",
      storageLimit: "Unlimited",
    },
    features: [
      "Multi-branch sync operations",
      "Custom institutional subdomains",
      "Dedicated manager",
    ],
    features_bn: [
      "মাল্টি-ব্রাঞ্চ সিঙ্ক অপারেশন",
      "কাস্টম প্রাতিষ্ঠানিক সাবডোমেন",
      "ডেডিকেটেড অ্যাকাউন্ট ম্যানেজার",
    ],
  },
};

export const PLAN_LIST = Object.values(PLAN_DETAILS);