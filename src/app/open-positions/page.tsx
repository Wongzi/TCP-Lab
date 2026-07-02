import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";
import { InfoCard } from "@/components/InfoCard";
import { SectionHeader } from "@/components/SectionHeader";
import positions from "@/data/positions.json";

export const metadata: Metadata = {
  title: "Open Positions",
  description:
    "Recruitment information for PhD students, master's students, research assistants, and visiting students at TCP Lab.",
};

export default function OpenPositionsPage() {
  return (
    <>
      <section className="border-b border-[#D8E4F0] bg-[#F7FAFD]">
        <Container className="grid gap-8 py-16 sm:py-20 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div>
            <h1 className="text-4xl font-semibold tracking-tight text-[#1F2937] sm:text-5xl">
              Join TCP Lab
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[#5F6F82]">
              We welcome motivated students and researchers interested in clinical
              psychology, mental health, and related fields.
            </p>
            <div className="mt-8">
              <ButtonLink href="mailto:wmu@mail.tsinghua.edu.cn">Apply Now</ButtonLink>
            </div>
          </div>
          <div className="rounded-lg border border-[#D8E4F0] bg-white p-6 shadow-sm shadow-[#4A6FA5]/5">
            <p className="text-sm font-semibold text-[#4A6FA5]">Application email</p>
            <p className="mt-2 text-lg font-semibold text-[#1F2937]">
              wmu@mail.tsinghua.edu.cn
            </p>
            <p className="mt-4 text-sm leading-6 text-[#5F6F82]">
              Please include your intended role in the subject line and attach the
              required materials listed below.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeader title="Available Opportunities" />
          <div className="grid gap-5 md:grid-cols-2">
            {positions.map((position) => (
              <InfoCard key={position.title} title={position.title}>
                <p>{position.description}</p>
              </InfoCard>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#F7FAFD] py-16 sm:py-20">
        <Container>
          <div className="grid gap-8 rounded-lg border border-[#D8E4F0] bg-white p-6 shadow-sm shadow-[#4A6FA5]/5 lg:grid-cols-[0.9fr_1.1fr] lg:p-8">
            <SectionHeader
              title="How to Apply"
              description="Applications are reviewed based on research fit, preparation, and available supervision or project needs."
              className="mb-0"
            />
            <div>
              <h2 className="text-lg font-semibold text-[#1F2937]">
                Required materials
              </h2>
              <ul className="mt-4 grid gap-3 text-sm text-[#5F6F82]">
                <li className="rounded-lg bg-[#F7FAFD] p-4">CV</li>
                <li className="rounded-lg bg-[#F7FAFD] p-4">Transcript</li>
                <li className="rounded-lg bg-[#F7FAFD] p-4">Research statement</li>
              </ul>
              <p className="mt-5 text-sm leading-6 text-[#5F6F82]">
                In your message, briefly describe your research interests, relevant
                experience, expected start date, and the position type you are
                applying for. Shortlisted applicants may be invited for an interview
                or further discussion with the lab.
              </p>
              <div className="mt-6">
                <ButtonLink href="mailto:wmu@mail.tsinghua.edu.cn">
                  Apply Now
                </ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
