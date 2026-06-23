import { PlaceholderImage } from "@/components/PlaceholderImage";

type ProfileCardProps = {
  name: string;
  position: string;
  bio: string;
  photoLabel: string;
  meta?: string;
};

export function ProfileCard({
  name,
  position,
  bio,
  photoLabel,
  meta,
}: ProfileCardProps) {
  return (
    <article className="overflow-hidden rounded-lg border border-[#D8E4F0] bg-white shadow-sm shadow-[#4A6FA5]/5 transition duration-200 hover:-translate-y-1 hover:shadow-md hover:shadow-[#4A6FA5]/10">
      <PlaceholderImage label={photoLabel} aspect="portrait" className="rounded-none border-0" />
      <div className="p-5">
        <h3 className="text-lg font-semibold text-[#1F2937]">{name}</h3>
        <p className="mt-1 text-sm font-medium text-[#4A6FA5]">{position}</p>
        {meta ? <p className="mt-1 text-sm text-[#5F6F82]">{meta}</p> : null}
        <p className="mt-4 text-sm leading-6 text-[#5F6F82]">{bio}</p>
      </div>
    </article>
  );
}
