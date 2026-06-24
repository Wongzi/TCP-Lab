import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { ProfileCard } from "@/components/ProfileCard";
import { SectionHeader } from "@/components/SectionHeader";
import team from "@/data/team.json";

export const metadata: Metadata = {
  title: "Team",
  description:
    "Meet the principal investigator, graduate candidates, and alumni of Tsinghua Clinical Psychology Lab.",
};

export default function TeamPage() {
  const { principalInvestigator, graduateCandidates, alumni } = team;

  return (
    <>
      <section className="bg-[#F7FAFD] py-14 sm:py-16">
        <Container>
          <SectionHeader
            title="Team"
            description="Meet the researchers, students, and alumni contributing to TCP Lab's work in clinical psychology and mental health science."
          />
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeader title="Principal Investigator" />
          <article className="grid gap-8 rounded-lg border border-[#D8E4F0] bg-white p-6 shadow-sm shadow-[#4A6FA5]/5 lg:grid-cols-[320px_1fr] lg:p-8">
            <PlaceholderImage
              label={principalInvestigator.photoLabel}
              aspect="portrait"
              className="max-w-sm"
            />
            <div>
              <h2 className="text-2xl font-semibold text-[#1F2937]">
                {principalInvestigator.name}
              </h2>
              <p className="mt-2 text-base font-medium text-[#4A6FA5]">
                {principalInvestigator.title}
              </p>
              <p className="mt-5 max-w-3xl text-base leading-8 text-[#5F6F82]">
                {principalInvestigator.biography}
              </p>
              <div className="mt-6">
                <h3 className="text-sm font-semibold text-[#1F2937]">
                  Research interests
                </h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {principalInvestigator.researchInterests.map((interest) => (
                    <span
                      key={interest}
                      className="rounded-full bg-[#E8F1FA] px-3 py-1 text-sm font-medium text-[#2F4F78]"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-4 text-sm">
                <a
                  className="font-semibold text-[#4A6FA5] transition hover:text-[#2F4F78]"
                  href={`mailto:${principalInvestigator.email}`}
                >
                  {principalInvestigator.email}
                </a>
                <a
                  className="font-semibold text-[#4A6FA5] transition hover:text-[#2F4F78]"
                  href={principalInvestigator.cvUrl}
                >
                  Tsinghua Profile
                </a>
              </div>
            </div>
          </article>
        </Container>
      </section>

      <section className="bg-[#F7FAFD] py-16 sm:py-20">
        <Container>
          <SectionHeader title="Graduate Candidates" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {graduateCandidates.map((member) => (
              <ProfileCard
                key={member.name}
                name={member.name}
                position={member.position}
                bio={member.bio}
                photoLabel={member.photoLabel}
              />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeader title="Alumni" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {alumni.map((member) => (
              <ProfileCard
                key={member.name}
                name={member.name}
                position={member.currentAffiliation}
                meta={`Graduation year: ${member.graduationYear}`}
                bio={member.description}
                photoLabel={member.photoLabel}
              />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
