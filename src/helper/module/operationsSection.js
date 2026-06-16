import {
  FaUserGraduate,
  FaBookOpen,
  FaCalendarCheck,
  FaMoneyBillWave,
  FaClipboardCheck,
  FaChartBar,
} from "react-icons/fa";

export const data = {
  EN: {
    heading: "Streamline Your Madrasha Operations",
    items: [
      {
        title: "Admission",
        desc: "Add new students with ease",
        icon: <FaUserGraduate />,
        color: "text-primary border-primary/30",
      },
      {
        title: "Academic",
        desc: "Manage classes and subjects",
        icon: <FaBookOpen />,
        color: "text-gold border-gold/30",
      },
      {
        title: "Attendance",
        desc: "Track daily attendance",
        icon: <FaCalendarCheck />,
        color: "text-primary border-primary/30",
      },
      {
        title: "Fees",
        desc: "Collect fees and manage dues",
        icon: <FaMoneyBillWave />,
        color: "text-gold border-gold/30",
      },
      {
        title: "Examination",
        desc: "Conduct exams and publish results",
        icon: <FaClipboardCheck />,
        color: "text-primary border-primary/30",
      },
      {
        title: "Reports",
        desc: "Get reports and analytics",
        icon: <FaChartBar />,
        color: "text-gold border-gold/30",
      },
    ],
  },

  BN: {
    heading: "মাদরাসার সকল কার্যক্রম সহজ করুন",
    items: [
      {
        title: "ভর্তি",
        desc: "সহজেই নতুন শিক্ষার্থী যুক্ত করুন",
        icon: <FaUserGraduate />,
        color: "text-primary border-primary/30",
      },
      {
        title: "একাডেমিক",
        desc: "ক্লাস ও বিষয় পরিচালনা করুন",
        icon: <FaBookOpen />,
        color: "text-gold border-gold/30",
      },
      {
        title: "উপস্থিতি",
        desc: "দৈনিক উপস্থিতি ট্র্যাক করুন",
        icon: <FaCalendarCheck />,
        color: "text-primary border-primary/30",
      },
      {
        title: "ফি",
        desc: "ফি সংগ্রহ ও বকেয়া পরিচালনা করুন",
        icon: <FaMoneyBillWave />,
        color: "text-gold border-gold/30",
      },
      {
        title: "পরীক্ষা",
        desc: "পরীক্ষা গ্রহণ ও ফলাফল প্রকাশ করুন",
        icon: <FaClipboardCheck />,
        color: "text-primary border-primary/30",
      },
      {
        title: "রিপোর্ট",
        desc: "রিপোর্ট ও বিশ্লেষণ দেখুন",
        icon: <FaChartBar />,
        color: "text-gold border-gold/30",
      },
    ],
  },
};