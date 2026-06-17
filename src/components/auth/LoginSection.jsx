"use client";

import Link from "next/link";
import Container from "@/components/ui/Container";
import LoginForm from "./LoginForm";
import FeatureList from "./FeatureList";
import { useLanguage } from "@/context/LanguageContext";
import PublicHeader from "../layouts/PublicHeader";

export default function LoginSection() {
  const { lang } = useLanguage();

  return (
    <>
      <main className="min-h-screen bg-background pt-32 pb-20">
        <Container>
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* LEFT SIDE */}
            <div className="max-w-xl">
              <h1 className="text-4xl font-black">
                {lang === "BN" ? "স্বাগতম" : "Welcome Back"}{" "}
                <span className="text-primary">EduFilos</span>
              </h1>

              <p className="mt-6 text-muted">
                {lang === "BN"
                  ? "আপনার একাউন্টে লগইন করুন"
                  : "Login to continue your dashboard"}
              </p>

              <FeatureList />
            </div>

            {/* RIGHT SIDE */}
            <div className="bg-card border border-border-custom rounded-[32px] shadow-sm p-6 md:p-10">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-foreground">
                  {lang === "BN" ? "লগইন করুন" : "Login Account"}
                </h2>

                <p className="text-muted mt-3">
                  {lang === "BN"
                    ? "আপনার অ্যাকাউন্টে প্রবেশ করুন"
                    : "Access your account"}
                </p>
              </div>

              <LoginForm />

              <p className="text-center text-sm text-muted pt-6">
                {lang === "BN" ? "অ্যাকাউন্ট নেই?" : "Don't have an account?"}{" "}
                <Link href="/register" className="text-primary font-semibold">
                  {lang === "BN" ? "রেজিস্টার করুন" : "Register"}
                </Link>
              </p>
            </div>
          </div>
        </Container>
      </main>
    </>
  );
}
