import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { InfoCard } from "@/components/InfoCard";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { SectionHeader } from "@/components/SectionHeader";
import outreach from "@/data/outreach.json";

export const metadata: Metadata = {
  title: "Outreach",
  description:
    "Science communication, WeChat updates, public education, and engagement activities from TCP Lab.",
};

export default function OutreachPage() {
  return (
    <>
      <section className="bg-[#F7FAFD] py-14 sm:py-16">
        <Container>
          <SectionHeader
            title="Outreach"
            description="TCP Lab supports science communication and public engagement in mental health science and psychology education."
          />
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-8 rounded-lg border border-[#D8E4F0] bg-white p-6 shadow-sm shadow-[#4A6FA5]/5 lg:grid-cols-[300px_1fr] lg:p-8">
            <PlaceholderImage
              label={outreach.wechat.qrLabel}
              aspect="qr"
              className="mx-auto"
            />
            <div>
              <h2 className="text-2xl font-semibold text-[#1F2937]">
                WeChat Official Account
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-[#5F6F82]">
                {outreach.wechat.description}
              </p>
              <div className="mt-6 rounded-lg bg-[#F7FAFD] p-4">
                <p className="text-sm font-semibold text-[#1F2937]">Account name</p>
                <p className="mt-1 text-sm text-[#5F6F82]">
                  {outreach.wechat.accountName}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#F7FAFD] py-16 sm:py-20">
        <Container>
          <SectionHeader
            title="Popular Science Articles"
            description="Sample article previews for mental health science, psychology education, and laboratory news."
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {outreach.articles.map((article) => (
              <article
                key={article.title}
                className="overflow-hidden rounded-lg border border-[#D8E4F0] bg-white shadow-sm shadow-[#4A6FA5]/5 transition duration-200 hover:-translate-y-1 hover:shadow-md hover:shadow-[#4A6FA5]/10"
              >
                <PlaceholderImage
                  label={article.coverLabel}
                  aspect="wide"
                  className="rounded-none border-0"
                />
                <div className="p-5">
                  <time
                    className="text-sm font-medium text-[#4A6FA5]"
                    dateTime={article.date}
                  >
                    {article.date}
                  </time>
                  <h2 className="mt-3 text-lg font-semibold text-[#1F2937]">
                    {article.title}
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-[#5F6F82]">
                    {article.summary}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeader
            title="Public Engagement"
            description="TCP Lab develops public-facing educational activities that connect psychological science with mental health needs."
          />
          <div className="grid gap-5 md:grid-cols-3">
            <InfoCard title="Science Communication">
              <p>
                We share accessible explanations of clinical psychology,
                assessment, intervention, and mental health science.
              </p>
            </InfoCard>
            <InfoCard title="Educational Events">
              <p>
                The lab supports lectures, workshops, and campus activities that
                promote mental health literacy.
              </p>
            </InfoCard>
            <InfoCard title="Community Collaboration">
              <p>
                Outreach activities aim to strengthen dialogue between researchers,
                students, clinicians, and the public.
              </p>
            </InfoCard>
          </div>
        </Container>
      </section>
    </>
  );
}
