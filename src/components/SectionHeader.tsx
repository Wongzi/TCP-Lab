type SectionHeaderProps = {
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeader({
  title,
  description,
  align = "left",
  className = "",
}: SectionHeaderProps) {
  return (
    <div
      className={`mb-8 ${align === "center" ? "mx-auto text-center" : ""} ${className}`}
    >
      <h2 className="text-2xl font-semibold tracking-tight text-[#1F2937] sm:text-3xl">
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-3 text-base leading-7 text-[#5F6F82] ${
            align === "center" ? "mx-auto max-w-2xl" : "max-w-3xl"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
