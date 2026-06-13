import React from "react";

const Container = ({ children, className = "" }) => {
  return (
    <div
      className={`container mx-auto px-2 sm:px-4 md:px-6 lg:px-8 max-w-9xl ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
