import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonLinkProps) {
  const styles =
    variant === "primary"
      ? "bg-[#4A6FA5] text-white shadow-sm shadow-[#4A6FA5]/20 hover:bg-[#3f5f8e]"
      : "border border-[#B8CAE0] bg-white text-[#2F4F78] hover:border-[#4A6FA5] hover:bg-[#F5F9FD]";

  return (
    <Link
      href={href}
      className={`inline-flex min-h-11 items-center justify-center rounded-lg px-5 py-2.5 text-sm font-semibold transition duration-200 hover:-translate-y-0.5 active:translate-y-0 ${styles} ${className}`}
    >
      {children}
    </Link>
  );
}
