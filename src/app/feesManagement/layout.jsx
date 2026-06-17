import React from "react";

export const metadata = {
  title: "Fees Management & Finance Tracking | EduFilos",
  description:
    "Monitor monthly collections, track pending dues, issue student receipts, and manage digital finance invoices seamlessly.",
  keywords: [
    "Tuition Fees",
    "Invoice Management",
    "Madrasha Finance",
    "Fee Collection System",
  ],
};

export default function FeesManagementLayout({ children }) {
  return (
    <section className="w-full min-h-screen antialiased">{children}</section>
  );
}
