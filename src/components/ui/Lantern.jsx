import Image from "next/image";
import React from "react";
import LanternImg from "@/../public/lantern.png";

const Lantern = () => {
  return (
    <div className="absolute top-0 -translate-y-1/12 sm:translate-y-0 right-[-12%] sm:right-[-3.5%] xl:right-[-2%] 2xl:left-[1%] z-40 2xl:z-50 scale-50 sm:scale-75 md:scale-100 pointer-events-none">
      <Image  src={LanternImg} alt="lantern"  className="w-40 h-100" />
    </div>
  );
};

export default Lantern;
