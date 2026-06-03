"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-black border-t border-slate-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="space-y-4">
            <Link
              href="/"
              className="flex items-center gap-2 font-black text-2xl text-[#064e3b] tracking-tight"
            >
              <span className=" text-[#064e3b] italic">EduFilos</span>
              <span className="text-xs font-bold uppercase tracking-widest bg-slate-800  px-2 py-0.5 rounded-md">
                ERP
              </span>
            </Link>
            <p className="text-sm leading-relaxed ">
              Complete Intelligent Cloud ERP Ecosystem built custom tailored for
              Modern Islamic Institutions & Madrashas.
            </p>
          </div>

          <div>
            <h4 className="text-[#064e3b] text-sm font-bold uppercase tracking-wider mb-4">
              Product
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#features"
                  className="hover:text-[#064e3b] transition-colors"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="#pricing"
                  className="hover:text-[#064e3b] transition-colors"
                >
                  Pricing Plans
                </Link>
              </li>
              <li>
                <Link
                  href="/security"
                  className="hover:text-[#064e3b] transition-colors"
                >
                  Data Security
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#064e3b] text-sm font-bold uppercase tracking-wider mb-4">
              Support
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/docs"
                  className="hover:text-[#064e3b] transition-colors"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-[#064e3b] transition-colors"
                >
                  Contact Support
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-[#064e3b] transition-colors"
                >
                  Privacy & Terms
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#064e3b] text-sm font-bold uppercase tracking-wider mb-4">
              Contact Info
            </h4>
            <address className="not-italic text-sm space-y-2 ">
              <p>Dhaka, Bangladesh</p>
              <p>Email: info@edufilos.com</p>
              <p>Support: +880 24/7 Hotline</p>
            </address>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>&copy; {currentYear} EduFilos ERP. All rights reserved.</p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="hover:text-[#064e3b] transition-colors"
            >
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[#064e3b] transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
