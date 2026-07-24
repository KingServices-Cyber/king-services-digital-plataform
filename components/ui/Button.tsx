import Link from "next/link";
import { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

type Variant = "primary" | "outline" | "ghost";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-gradient-to-br from-purple-600 to-lilac-500 text-white hover:shadow-[0_10px_24px_-8px_rgba(91,42,140,0.55)]",
  outline: "bg-transparent text-purple-700 border-[1.5px] border-purple-600 hover:bg-mist",
  ghost: "bg-transparent text-purple-600 hover:bg-mist",
};

const base =
  "inline-block font-bold text-[13px] px-[18px] py-[9px] rounded-pill transition-all duration-200 ease-out hover:-translate-y-0.5 active:translate-y-0 cursor-pointer text-center";

export function ButtonLink({
  href,
  variant = "primary",
  className = "",
  children,
  ...props
}: {
  href: string;
  variant?: Variant;
} & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <Link href={href} className={`${base} ${variantClasses[variant]} ${className}`} {...props}>
      {children}
    </Link>
  );
}

export function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: {
  variant?: Variant;
} & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={`${base} ${variantClasses[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
