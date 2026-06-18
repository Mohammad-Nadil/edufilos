import React from "react";

export const metadata = {
  title: "Resources | EduFilos",
  description:
    " Learn more about EduFilos, our journey, and how we are revolutionizing Madrasha management with cutting-edge SaaS technology. Discover our mission to empower educational institutions.",
};

export default function Layout({ children }) {
  return (
    <div className="about-page-wrapper min-h-screen bg-background">
      <main>{children}</main>
    </div>
  );
}
