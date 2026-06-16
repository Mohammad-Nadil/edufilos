import React from "react";

export const metadata = {
  title: "Academic System & Class Routine | EduFilos",
  description:
    "Track schedules, view class routines, manage subject progress, and monitor teacher assignments in one workspace.",
  keywords: [
    "Class Routine",
    "Syllabus Tracker",
    "Academic Management",
    "Madrasha Routine",
  ],
};

export default function AcademicSystemLayout({ children }) {
  return (
    <section className="w-full min-h-screen antialiased">{children}</section>
  );
}
