type PlaceholderImageProps = {
  label: string;
  aspect?: "square" | "wide" | "portrait" | "qr";
  className?: string;
};

const aspectClasses = {
  square: "aspect-square",
  wide: "aspect-[16/9]",
  portrait: "aspect-[4/5]",
  qr: "aspect-square max-w-56",
};

export function PlaceholderImage({
  label,
  aspect = "square",
  className = "",
}: PlaceholderImageProps) {
  return (
    <div
      className={`flex w-full items-center justify-center rounded-lg border border-dashed border-[#9CB5D2] bg-[#E8F1FA] p-5 text-center text-sm font-medium text-[#4A6FA5] ${aspectClasses[aspect]} ${className}`}
      role="img"
      aria-label={label}
    >
      <span>{label}</span>
    </div>
  );
}
