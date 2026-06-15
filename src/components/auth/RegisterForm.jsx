"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import FormInput from "./FormInput";
import Button from "@/components/ui/Button";
import { Lock } from "lucide-react";
import { inputs } from "@/helper/register";

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

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <form className="space-y-5">

      {/* NORMAL INPUTS (UNCHANGED) */}
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

      {/* PASSWORD INPUT (ONLY ADD) */}
      <FormInput
        name="password"
        icon={Lock}
        type={showPassword ? "text" : "password"}
        value={form.password}
        onChange={handleChange}
        label={lang === "BN" ? "পাসওয়ার্ড" : "Password"}
        placeholder={lang === "BN" ? "পাসওয়ার্ড দিন" : "Create password"}
        showPassword={showPassword}
        onTogglePassword={() => setShowPassword(!showPassword)}
      />

      {/* CONFIRM PASSWORD INPUT (ONLY ADD) */}
      <FormInput
        name="confirmPassword"
        icon={Lock}
        type={showConfirmPassword ? "text" : "password"}
        value={form.confirmPassword}
        onChange={handleChange}
        label={
          lang === "BN"
            ? "পাসওয়ার্ড নিশ্চিত করুন"
            : "Confirm Password"
        }
        placeholder={
          lang === "BN"
            ? "পাসওয়ার্ড আবার লিখুন"
            : "Confirm password"
        }
        showPassword={showConfirmPassword}
        onTogglePassword={() =>
          setShowConfirmPassword(!showConfirmPassword)
        }
      />

      {/* BUTTON (UNCHANGED) */}
      <Button className="w-full h-14 rounded-2xl">
        {lang === "BN" ? "রেজিস্টার করুন" : "Create Account"}
      </Button>
    </form>
  );
}