import React from "react";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "outline" | "ghost";
  href?: string;
  className?: string;
};

export function Button({ variant = "primary", className = "", href, ...props }: Props) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-gold-500/50";
  const styles: Record<string, string> = {
    primary: "bg-ink-800 text-white hover:bg-ink-700 shadow-soft",
    outline: "border border-slate-200 bg-white text-slate-900 hover:bg-slate-50",
    ghost: "bg-transparent text-slate-900 hover:bg-slate-100",
  };

  if (href) {
    return (
      <a className={`${base} ${styles[variant]} ${className} no-underline`} href={href}>
        {props.children}
      </a>
    );
  }

  return <button className={`${base} ${styles[variant]} ${className}`} {...props} />;
}
