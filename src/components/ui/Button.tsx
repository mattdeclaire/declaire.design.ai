import Link from "next/link";

interface ButtonProps {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  type?: "button" | "submit" | "reset";
  className?: string;
}

export function Button({
  href,
  children,
  variant = "primary",
  type = "button",
  className = "",
}: ButtonProps) {
  const base =
    "inline-block px-8 py-3.5 text-xs tracking-[0.2em] uppercase font-sans transition-colors duration-200 cursor-pointer";

  const variants = {
    primary:
      "bg-accent text-canvas hover:bg-heading",
    ghost:
      "border border-heading text-heading hover:bg-heading hover:text-canvas",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes}>
      {children}
    </button>
  );
}
