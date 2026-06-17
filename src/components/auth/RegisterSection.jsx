"use client";

import Link from "next/link";
import Container from "@/components/ui/Container";
import RegisterForm from "./RegisterForm";
import FeatureList from "./FeatureList";
import { useLanguage } from "@/context/LanguageContext";
import PublicHeader from "../layouts/PublicHeader";

export default function RegisterSection() {
  const { lang } = useLanguage();

  return (
    <>
      <main className="min-h-screen bg-background pt-32 pb-20">
        <Container>
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="max-w-xl">
              <span className="inline-flex items-center rounded-full border border-gold/20 bg-gold/5 px-4 py-1.5 text-xs font-medium text-gold mb-6">
                {lang === "BN"
                  ? "মাদ্রাসা ম্যানেজমেন্ট সিস্টেম"
                  : "All-in-One Madrasha Management System"}
              </span>

              <h1 className="text-4xl font-black leading-tight">
                {lang === "BN"
                  ? "আপনার অ্যাকাউন্ট তৈরি করুন"
                  : "Create Your Account"}{" "}
                <span className="text-primary">
                  {lang === "BN" ? "ভবিষ্যৎ গড়ুন" : "Shape a Better Tomorrow"}
                </span>
              </h1>

              <p className="mt-6 text-muted">
                {lang === "BN"
                  ? "EduFilos ব্যবহার করে আপনার মাদ্রাসা সহজভাবে পরিচালনা করুন"
                  : "Join EduFilos to simplify madrasha management"}
              </p>

              <FeatureList />
            </div>
            <div className="bg-card border border-border-custom rounded-[32px] shadow-sm p-6 md:p-10">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-foreground">
                  {lang === "BN" ? "অ্যাকাউন্ট তৈরি করুন" : "Create Account"}
                </h2>

                <p className="text-muted mt-3">
                  {lang === "BN"
                    ? "ফর্ম পূরণ করে শুরু করুন"
                    : "Fill in your information to get started"}
                </p>
              </div>

              <RegisterForm />

              <p className="text-center text-sm text-muted pt-6">
                {lang === "BN"
                  ? "ইতিমধ্যে অ্যাকাউন্ট আছে?"
                  : "Already have an account?"}{" "}
                <Link href="/login" className="text-primary font-semibold">
                  {lang === "BN" ? "লগইন করুন" : "Sign In"}
                </Link>
              </p>
            </div>
          </div>
        </Container>
      </main>
    </>
  );
}
