"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import FormInput from "./FormInput";
import Button from "@/components/ui/Button";
import { Mail, Lock } from "lucide-react";

export default function LoginForm() {
  const { lang } = useLanguage();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const inputs = [
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
      name: "password",
      icon: Lock,
      label: {
        BN: "পাসওয়ার্ড",
        EN: "Password",
      },
      placeholder: {
        BN: "পাসওয়ার্ড লিখুন",
        EN: "Enter password",
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
        {lang === "BN" ? "লগইন করুন" : "Login"}
      </Button>
    </form>
  );
}
