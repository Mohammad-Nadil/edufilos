export const PLAN_LIST = [
  {
    code: "STANDARD",
    name: "Standard",
    name_bn: "স্ট্যান্ডার্ড",

    description:
      "Perfect for small & medium madrashas",

    price: 4900,

    limits: {
      maxStudents: 500,
      maxEmployees: 30,
      storageLimit: 2048,
    },

    features: [
      "Student records logs",
      "Faculties directory grids",
      "Basic accounting",
    ],
  },

  {
    code: "PREMIUM",

    name: "Premium",
    name_bn: "প্রিমিয়াম",

    description:
      "For growing madrashas with more needs",

    price: 9999,

    limits: {
      maxStudents: 2000,
      maxEmployees: 100,
      storageLimit: 10240,
    },

    features: [
      "Automated SMS pipelines",
      "Online admissions tracking",
      "Advanced reporting",
    ],
  },

  {
    code: "ENTERPRISE",

    name: "Enterprise",
    name_bn: "এন্টারপ্রাইজ",

    description:
      "For large organizations & multi-branch",

    price: 14999,

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
  },
];