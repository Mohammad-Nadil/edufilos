import {
  FaUsers,
  FaBookOpen,
  FaMoneyBillWave,
  FaClipboardCheck,
  FaCalendarAlt,
  FaChartBar,
  FaCommentDots,
  FaUserTie,
  FaBook,
  FaCog,
} from "react-icons/fa";

const iconColors = [
  "bg-teal-50 text-teal-700 dark:bg-teal-500/15 dark:text-teal-400",
  "bg-amber-50 text-amber-700 dark:bg-amber-500/15 dark:text-amber-400",
  "bg-yellow-50 text-yellow-700 dark:bg-yellow-500/15 dark:text-yellow-400",
  "bg-cyan-50 text-cyan-700 dark:bg-cyan-500/15 dark:text-cyan-400",
  "bg-orange-50 text-orange-700 dark:bg-orange-500/15 dark:text-orange-400",
  "bg-green-50 text-green-700 dark:bg-green-500/15 dark:text-green-400",
  "bg-blue-50 text-blue-700 dark:bg-blue-500/15 dark:text-blue-400",
  "bg-emerald-50 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-400",
  "bg-violet-50 text-violet-700 dark:bg-violet-500/15 dark:text-violet-400",
  "bg-slate-50 text-slate-700 dark:bg-slate-500/15 dark:text-slate-400",
];

export const moduleData = {
  EN: {
    title: "Our Powerful Modules",
    subtitle:
      "Everything you need to manage your madrasha efficiently in one place.",

    modules: [
      {
        id: 1,
        title: "Student Management",
        description:
          "Manage student admissions, profiles, academic records, and overall academic progress in one secure and centralized system. This module helps you efficiently handle student information from enrollment to ongoing performance tracking, ensuring all records are properly organized, easily accessible, and always up to date.",
        icon: FaUsers,
        iconColor: iconColors[0],
        featured: true,
      },
      {
        id: 2,
        title: "Attendance Tracking",
        description:
          "Track daily attendance for students and teachers with real-time monitoring. ",
        icon: FaCalendarAlt,
        iconColor: iconColors[1],
      },
      {
        id: 3,
        title: "Academic Management",
        description:
          "Create classes, assign teachers, manage subjects, and monitor academic activities.",
        icon: FaBookOpen,
        iconColor: iconColors[2],
      },
      {
        id: 4,
        title: "Fees Management",
        description:
          "Track fee structures, collections, due payments, and generate financial reports.",
        icon: FaMoneyBillWave,
        iconColor: iconColors[3],
      },
      {
        id: 5,
        title: "Examination System",
        description:
          "Organize exams, manage schedules, enter marks, and generate result sheets.",
        icon: FaClipboardCheck,
        iconColor: iconColors[4],
      },
      {
        id: 6,
        title: "Reports & Analytics",
        description:
          "Gain detailed insights through reports and performance analytics.",
        icon: FaChartBar,
        iconColor: iconColors[5],
      },
      {
        id: 7,
        title: "Communication",
        description:
          "Send SMS, notifications, and important announcements instantly.",
        icon: FaCommentDots,
        iconColor: iconColors[6],
      },
      {
        id: 8,
        title: "Human Resource",
        description:
          "Manage staff profiles, payroll, leave records, and HR operations.",
        icon: FaUserTie,
        iconColor: iconColors[7],
      },
      {
        id: 9,
        title: "Library Management",
        description:
          "Manage your entire library system with ease and efficiency. This module allows you to organize and maintain a complete record of all books, including their availability, categories, and detailed inventory status. You can effortlessly track borrowing and return activities, ensuring that every transaction is properly recorded and fully transparent.",
        icon: FaBook,
        iconColor: iconColors[8],
      },
      {
        id: 10,
        title: "System Management",
        description:
          "Control users, permissions, settings, and overall system administration.",
        icon: FaCog,
        iconColor: iconColors[9],
      },
    ],
  },

  BN: {
    title: "আমাদের শক্তিশালী মডিউলসমূহ",
    subtitle: "মাদ্রাসা পরিচালনার জন্য প্রয়োজনীয় সকল ফিচার এক জায়গায়।",

    modules: [
      {
        id: 1,
        title: "শিক্ষার্থী ব্যবস্থাপনা",
        description:
          "শিক্ষার্থীদের ভর্তি কার্যক্রম, প্রোফাইল, একাডেমিক রেকর্ড এবং সামগ্রিক অগ্রগতি একটি নিরাপদ ও কেন্দ্রীয় সিস্টেমে পরিচালনা করুন। এই মডিউলের মাধ্যমে আপনি শিক্ষার্থীদের সমস্ত তথ্য সহজে নিয়ন্ত্রণ ও আপডেট করতে পারবেন, ভর্তি থেকে শুরু করে তাদের পারফরম্যান্স ট্র্যাক করা পর্যন্ত প্রতিটি ধাপ সুশৃঙ্খলভাবে সংরক্ষিত থাকবে এবং সবসময় হালনাগাদ অবস্থায় থাকবে।",
        icon: FaUsers,
        iconColor: iconColors[0],
        featured: true,
      },
      {
        id: 2,
        title: "উপস্থিতি ট্র্যাকিং",
        description:
          "শিক্ষার্থী ও শিক্ষকদের দৈনিক উপস্থিতি সহজে পর্যবেক্ষণ করুন।",
        icon: FaCalendarAlt,
        iconColor: iconColors[1],
      },
      {
        id: 3,
        title: "একাডেমিক ব্যবস্থাপনা",
        description:
          "ক্লাস তৈরি, শিক্ষক নিয়োগ, বিষয় পরিচালনা এবং একাডেমিক কার্যক্রম নিয়ন্ত্রণ করুন।",
        icon: FaBookOpen,
        iconColor: iconColors[2],
      },
      {
        id: 4,
        title: "ফি ব্যবস্থাপনা",
        description:
          "ফি সংগ্রহ, বকেয়া পরিশোধ এবং আর্থিক রিপোর্ট পরিচালনা করুন।",
        icon: FaMoneyBillWave,
        iconColor: iconColors[3],
      },
      {
        id: 5,
        title: "পরীক্ষা ব্যবস্থাপনা",
        description: "পরীক্ষার সময়সূচি, নম্বর সংরক্ষণ এবং ফলাফল তৈরি করুন।",
        icon: FaClipboardCheck,
        iconColor: iconColors[4],
      },
      {
        id: 6,
        title: "রিপোর্ট ও বিশ্লেষণ",
        description:
          "বিস্তারিত রিপোর্ট এবং পারফরম্যান্স বিশ্লেষণের মাধ্যমে সিদ্ধান্ত নিন।",
        icon: FaChartBar,
        iconColor: iconColors[5],
      },
      {
        id: 7,
        title: "যোগাযোগ ব্যবস্থা",
        description: "এসএমএস, নোটিফিকেশন এবং গুরুত্বপূর্ণ ঘোষণা দ্রুত পাঠান।",
        icon: FaCommentDots,
        iconColor: iconColors[6],
      },
      {
        id: 8,
        title: "মানব সম্পদ ব্যবস্থাপনা",
        description:
          "স্টাফ প্রোফাইল, বেতন, ছুটি এবং HR কার্যক্রম পরিচালনা করুন।",
        icon: FaUserTie,
        iconColor: iconColors[7],
      },
      {
        id: 9,
        title: "লাইব্রেরি ব্যবস্থাপনা",
        description:
          "আপনার সম্পূর্ণ লাইব্রেরি সিস্টেমকে সহজ ও কার্যকরভাবে পরিচালনা করুন। এই মডিউলের মাধ্যমে আপনি বইগুলোর একটি পূর্ণাঙ্গ রেকর্ড সংগঠিত ও সংরক্ষণ করতে পারবেন, যেখানে প্রতিটি বইয়ের প্রাপ্যতা, ক্যাটাগরি এবং ইনভেন্টরির বিস্তারিত তথ্য অন্তর্ভুক্ত থাকবে। এছাড়াও আপনি সহজেই বই ধার নেওয়া ও ফেরত দেওয়ার কার্যক্রম ট্র্যাক করতে পারবেন, যাতে প্রতিটি লেনদেন সঠিকভাবে রেকর্ড হয় এবং সম্পূর্ণ স্বচ্ছতা বজায় থাকে।",
        icon: FaBook,
        iconColor: iconColors[8],
      },
      {
        id: 10,
        title: "সিস্টেম ব্যবস্থাপনা",
        description:
          "ব্যবহারকারী, অনুমতি, সেটিংস এবং পুরো সিস্টেম নিয়ন্ত্রণ করুন।",
        icon: FaCog,
        iconColor: iconColors[9],
      },
    ],
  },
};
