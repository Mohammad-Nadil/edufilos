import * as React from "react";

export default function Calligraphy({
  size,
  imageSrc,
  textColor = "#047857",
  bgColor = "transparent",
  className = "",
  ...props
}) {
  if (!imageSrc) return null;

  return (
    <div
      className={`absolute inset-0 transition-all duration-300 ${!size ? "w-full h-full" : ""} ${className}`}
      style={{
        width: size,
        height: size,
        backgroundColor: bgColor,
      }}
      {...props}
    >
      <div
        className="w-full h-full p-0 m-0 transition-colors duration-300"
        style={{
          backgroundColor: textColor,
          maskImage: `url(${imageSrc})`,
          WebkitMaskImage: `url(${imageSrc})`,
          maskSize: "cover",
          WebkitMaskSize: "cover",
          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat",
          maskPosition: "center",
          WebkitMaskPosition: "center",
        }}
      />
    </div>
  );
}
