

const Button = ({
  children,
  className = "",
  variant = "default",
  size = "default",
  ...props
}) => {
  const baseStyle =
    "inline-flex items-center justify-center font-medium transition-all focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50";
  const variants = {
    default: "bg-emerald-800 text-white hover:bg-emerald-900 shadow-sm",
    outline:
      "border border-slate-200 bg-white hover:bg-slate-50 text-slate-700",
  };
  return (
    <button
      className={`${baseStyle} ${variants[variant] || variants.default} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;