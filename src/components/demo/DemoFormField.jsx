export default function DemoFormField({
  label,
  icon,
  children,
}) {
  return (
    <div>
      <label className="flex items-center gap-2 mb-2 text-sm font-medium text-foreground">
        <span className="text-gold">{icon}</span>
        {label}
      </label>

      {children}
    </div>
  );
}