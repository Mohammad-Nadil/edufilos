 import { User, Mail, Phone, Building2 } from "lucide-react";
 export const inputs = [
    {
      name: "fullName",
      icon: User,
      label: { BN: "পূর্ণ নাম", EN: "Full Name" },
      placeholder: { BN: "আপনার নাম লিখুন", EN: "Enter your full name" },
    },
    {
      name: "email",
      icon: Mail,
      label: { BN: "ইমেইল", EN: "Email" },
      placeholder: { BN: "ইমেইল লিখুন", EN: "Enter email" },
    },
    {
      name: "phone",
      icon: Phone,
      label: { BN: "ফোন নাম্বার", EN: "Phone Number" },
      placeholder: { BN: "ফোন নাম্বার লিখুন", EN: "Enter phone number" },
    },
    {
      name: "madrasha",
      icon: Building2,
      label: { BN: "মাদ্রাসার নাম", EN: "Madrasha Name" },
      placeholder: { BN: "মাদ্রাসার নাম লিখুন", EN: "Enter madrasha name" },
    },
  ];