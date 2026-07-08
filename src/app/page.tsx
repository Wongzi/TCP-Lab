import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";
import { InfoCard } from "@/components/InfoCard";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { SectionHeader } from "@/components/SectionHeader";
import researchAreas from "@/data/research-areas.json";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Tsinghua Clinical Psychology Lab advances clinical psychology research and mental health science at Tsinghua University.",
};

export default function Home() {
  return (
    <>
      <section className="border-b border-[#D8E4F0] bg-gradient-to-b from-[#F7FAFD] to-white">
        <Container className="grid min-h-[calc(100dvh-4rem)] items-center gap-10 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:py-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#4A6FA5]">
              Department of Psychological and Cognitive Sciences, Tsinghua University
            </p>
            <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-tight text-[#1F2937] sm:text-5xl lg:text-6xl">
              Tsinghua Clinical Psychology Lab
            </h1>
            <p className="mt-5 max-w-2xl text-xl font-medium text-[#4A6FA5]">
              Advancing Clinical Psychology Research and Mental Health Science
            </p>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[#5F6F82]">
              TCP Lab is affiliated with the Department of Psychological and Cognitive
              Sciences at Tsinghua University and is dedicated to advancing clinical
              psychology research.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/team/">Meet the Team</ButtonLink>
              <ButtonLink href="/publications/" variant="secondary">
                Publications
              </ButtonLink>
            </div>
          </div>
          <div className="rounded-lg border border-[#D8E4F0] bg-white p-4 shadow-sm shadow-[#4A6FA5]/10">
            <PlaceholderImage label="Lab or Campus Image Placeholder" aspect="wide" />
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              <div className="rounded-lg bg-[#F7FAFD] p-4">
                <p className="text-sm font-semibold text-[#1F2937]">Research</p>
                <p className="mt-1 text-sm text-[#5F6F82]">Clinical psychology</p>
              </div>
              <div className="rounded-lg bg-[#F7FAFD] p-4">
                <p className="text-sm font-semibold text-[#1F2937]">Training</p>
                <p className="mt-1 text-sm text-[#5F6F82]">Graduate education</p>
              </div>
              <div className="rounded-lg bg-[#F7FAFD] p-4">
                <p className="text-sm font-semibold text-[#1F2937]">Outreach</p>
                <p className="mt-1 text-sm text-[#5F6F82]">Mental health science</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <SectionHeader
              title="About Us"
              description="TCP Lab is affiliated with the Department of Psychological and Cognitive Sciences at Tsinghua University."
              className="mb-0"
            />
            <div className="rounded-lg border border-[#D8E4F0] bg-white p-6 text-base leading-8 text-[#5F6F82] shadow-sm shadow-[#4A6FA5]/5">
              <p>
                Tsinghua Clinical Psychology Lab is dedicated to advancing research
                in clinical psychology, mental health, psychological assessment, and
                evidence-based interventions. The lab integrates scientific inquiry,
                graduate training, and public engagement to support mental health
                science.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#F7FAFD] py-16 sm:py-20">
        <Container>
          <SectionHeader
            title="Research Areas"
            description="Digital health and LLM-based interventions for anxiety, alongside dynamic risk modeling for depression, suicide, and NSSI."
          />
          <div className="grid gap-5">
            {researchAreas.map((area) => (
              <InfoCard
                key={area.title}
                title={area.title}
                titleClassName="text-center text-xl font-bold"
              >
                <div className="space-y-4">
                  <p>{area.introduction}</p>
                  <p>{area.whatWeDo}</p>
                </div>
              </InfoCard>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-[#D8E4F0] bg-[#F7FAFD] py-16 sm:py-20">
        <Container>
          <div className="grid gap-8 rounded-lg border border-[#D8E4F0] bg-white p-6 shadow-sm shadow-[#4A6FA5]/5 lg:grid-cols-[0.8fr_1.2fr] lg:p-8">
            <SectionHeader
              title="Contact"
              description="For academic inquiries and collaboration, please contact the laboratory."
              className="mb-0"
            />
            <div className="grid gap-4 sm:grid-cols-2">
              <InfoCard title="Affiliation">
                <p>Department of Psychological and Cognitive Sciences</p>
                <p>Tsinghua University</p>
              </InfoCard>
              <InfoCard title="Contact Details">
                <p>Email: wmu@mail.tsinghua.edu.cn</p>
                <p>Tsinghua University</p>
              </InfoCard>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
