import * as React from "react";

export default function Calligraphy({
  size = "100%",
  className = "",
  imageSrc,
  ...props
}) {
  return (
    <div 
      className={`relative overflow-hidden ${className}`} 
      style={{ width: size, height: size }}
      {...props}
    >
      {imageSrc && (
        <img 
          src={imageSrc} 
          alt="Islamic Calligraphy Background" 
          className="w-full h-full object-cover pointer-events-none select-none transition-all duration-300"
        />
      )}
      <div 
        className="absolute inset-0 bg-current pointer-events-none transition-colors duration-300"
        style={{ mixBlendMode: "screen" }} 
      />
    </div>
  );
}