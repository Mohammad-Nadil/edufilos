import React from "react";

export const metadata = {
  title: "Student Management | EduFilos",
  description:
    "Manage student profiles, rolls, IDs, and guardian details smoothly with EduFilos Madrasha Management System.",
  keywords: [
    "Student Profile",
    "Madrasha Management",
    "EduFilos",
    "Student Records",
  ],
};

export default function StudentManagementLayout({ children }) {
  return (
    <section className="w-full min-h-screen antialiased">{children}</section>
  );
}
