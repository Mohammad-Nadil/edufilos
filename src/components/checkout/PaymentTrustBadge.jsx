"use client";

import Image from "next/image";
import sslLogo from "@/../public/sslLogo.png";

export default function PaymentTrustBadge() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2 opacity-80">
      <Image
        src={sslLogo}
        alt="SSLCommerz Secured Payment"
        width={80}
        height={30}
        className="object-contain contrast-125 brightness-95"
      />
      <div className="hidden sm:block h-4 w-px bg-outline-variant" />
      <span className="text-[11px] font-bold uppercase tracking-widest">
        PCI-DSS Secured
      </span>
    </div>
  );
}
