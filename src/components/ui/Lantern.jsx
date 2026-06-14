import Image from "next/image";
import React from "react";
import LanternImg from "@/../public/lantern.png";

const Lantern = () => {
  return (
    <div className="absolute top-0 -translate-y-1/12 md:translate-y-0  right-[-1%] sm:right-[2%] xl:right-[1.5%] 3xl:left-[5%] z-40 2xl:z-50 scale-50 sm:scale-75 md:scale-100 pointer-events-none">
      <Image  src={LanternImg} alt="lantern"  className="w-20 h-100" />
    </div>
  );
};

export default Lantern;
