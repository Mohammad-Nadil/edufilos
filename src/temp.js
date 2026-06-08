export const PLAN_DETAILS = {
  STANDARD: {
    name: "Standard ",
    code: "STANDARD",
    price: 4900,
    billingCycle: "monthly",
    limits: { maxStudents: 500, maxEmployees: 30, storageLimit: 2048 },
    features: ["Student records logs", "Faculties directory grids", "Basic accounting"],
    bgClass: "from-emerald-900 to-emerald-950",
    accentText: "text-emerald-400"
  },
  PREMIUM: {
    name: "Premium ",
    code: "PREMIUM",
    price: 9999,
    billingCycle: "monthly",
    limits: { maxStudents: 2000, maxEmployees: 100, storageLimit: 10240 },
    features: ["Automated SMS pipelines", "Online admissions tracking", "Advanced reporting"],
    bgClass: "from-blue-950 to-slate-900",
    accentText: "text-blue-400"
  },
  ENTERPRISE: {
    name: "Enterprise ",
    code: "ENTERPRISE",
    price: 14999,
    billingCycle: "yearly",
    limits: { maxStudents: "Unlimited", maxEmployees: "Unlimited", storageLimit: "Unlimited" },
    features: ["Multi-branch sync operations", "Custom institutional subdomains", "Dedicated manager"],
    bgClass: "from-amber-950 to-stone-900",
    accentText: "text-amber-400"
  }
};

export const PLAN_LIST = Object.values(PLAN_DETAILS);