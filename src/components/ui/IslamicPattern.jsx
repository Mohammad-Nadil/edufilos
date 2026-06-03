const IslamicPattern = ({ variant, opacity = 0.05 }) => (
  <div
    className="absolute inset-0 pointer-events-none mix-blend-multiply select-none"
    style={{
      opacity,
      backgroundImage: `radial-linear(circle at 1px 1px, currentColor 1px, transparent 0)`,
      backgroundSize:
        variant === "geometric"
          ? "24px 24px"
          : variant === "star"
            ? "32px 32px"
            : "40px 40px",
      color: "inherit",
    }}
  />
);

export default IslamicPattern;