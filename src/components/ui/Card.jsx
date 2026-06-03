const Card = ({ children, className = "" }) => (
  <div
    className={`rounded-3xl border border-slate-100 bg-white text-slate-900 shadow-sm ${className}`}
  >
    {children}
  </div>
);

export default Card;