"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import FormInput from "./FormInput";
import Button from "@/components/ui/Button";
import { User, Mail, Phone, Building2, Lock } from "lucide-react";

export default function RegisterForm() {
  const { lang } = useLanguage();

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    madrasha: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      name: "fullName",
      icon: User,
      label: {
        BN: "পূর্ণ নাম",
        EN: "Full Name",
      },
      placeholder: {
        BN: "আপনার নাম লিখুন",
        EN: "Enter your full name",
      },
    },
    {
      name: "email",
      icon: Mail,
      label: {
        BN: "ইমেইল",
        EN: "Email",
      },
      placeholder: {
        BN: "ইমেইল লিখুন",
        EN: "Enter email",
      },
    },
    {
      name: "phone",
      icon: Phone,
      label: {
        BN: "ফোন নাম্বার",
        EN: "Phone Number",
      },
      placeholder: {
        BN: "ফোন নাম্বার লিখুন",
        EN: "Enter phone number",
      },
    },
    {
      name: "madrasha",
      icon: Building2,
      label: {
        BN: "মাদ্রাসার নাম",
        EN: "Madrasha Name",
      },
      placeholder: {
        BN: "মাদ্রাসার নাম লিখুন",
        EN: "Enter madrasha name",
      },
    },
    {
      name: "password",
      icon: Lock,
      label: {
        BN: "পাসওয়ার্ড",
        EN: "Password",
      },
      placeholder: {
        BN: "পাসওয়ার্ড দিন",
        EN: "Create password",
      },
    },
    {
      name: "confirmPassword",
      icon: Lock,
      label: {
        BN: "পাসওয়ার্ড নিশ্চিত করুন",
        EN: "Confirm Password",
      },
      placeholder: {
        BN: "পাসওয়ার্ড আবার লিখুন",
        EN: "Confirm password",
      },
    },
  ];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <form className="space-y-5">
      {inputs.map((item, index) => {
        const Icon = item.icon;

        return (
          <FormInput
            key={index}
            name={item.name}
            icon={Icon}
            value={form[item.name]}
            onChange={handleChange}
            label={lang === "BN" ? item.label.BN : item.label.EN}
            placeholder={
              lang === "BN" ? item.placeholder.BN : item.placeholder.EN
            }
          />
        );
      })}

      <Button className="w-full h-14 rounded-2xl">
        {lang === "BN" ? "রেজিস্টার করুন" : "Create Account"}
      </Button>
    </form>
  );
}
