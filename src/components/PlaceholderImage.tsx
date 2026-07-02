import Image from "next/image";

type PlaceholderImageProps = {
  label: string;
  src?: string;
  aspect?: "square" | "wide" | "portrait" | "photo" | "qr";
  className?: string;
};

const aspectClasses = {
  square: "aspect-square",
  wide: "aspect-[16/9]",
  portrait: "aspect-[4/5]",
  photo: "aspect-[2/3]",
  qr: "aspect-square max-w-56",
};

export function PlaceholderImage({
  label,
  src,
  aspect = "square",
  className = "",
}: PlaceholderImageProps) {
  if (src) {
    return (
      <div
        className={`relative w-full overflow-hidden rounded-lg border border-[#D8E4F0] bg-[#E8F1FA] ${aspectClasses[aspect]} ${className}`}
      >
        <Image
          src={src}
          alt={label}
          fill
          sizes="(min-width: 1024px) 320px, (min-width: 640px) 384px, 100vw"
          className="object-cover"
          priority={src.includes("pi-wenting-mu")}
        />
      </div>
    );
  }

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
