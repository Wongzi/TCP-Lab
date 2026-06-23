import type { ReactNode } from "react";

type InfoCardProps = {
  title: string;
  children: ReactNode;
  className?: string;
};

export function InfoCard({ title, children, className = "" }: InfoCardProps) {
  return (
    <article
      className={`rounded-lg border border-[#D8E4F0] bg-white p-6 shadow-sm shadow-[#4A6FA5]/5 transition duration-200 hover:-translate-y-1 hover:shadow-md hover:shadow-[#4A6FA5]/10 ${className}`}
    >
      <h3 className="text-lg font-semibold text-[#1F2937]">{title}</h3>
      <div className="mt-3 text-sm leading-6 text-[#5F6F82]">{children}</div>
    </article>
  );
}
