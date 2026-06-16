import React from "react";

export const metadata = {
  title: "Modules | EduFilos",
  description:
    "Explore EduFilos's powerful modules designed to simplify your daily madrasha operations. Discover everything your madrasha needs, all under one platform.",
};

export default function Layout({ children }) {
  return (
    <div className="module-page-wrapper min-h-screen bg-background">
      <main>{children}</main>
    </div>
  );
}
