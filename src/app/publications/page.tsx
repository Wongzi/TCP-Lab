import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PublicationExplorer } from "@/components/PublicationExplorer";
import publications from "@/data/publications.json";

export const metadata: Metadata = {
  title: "Publications",
  description:
    "Selected publications from Tsinghua Clinical Psychology Lab in clinical psychology, mental health, and digital intervention research.",
};

export default function PublicationsPage() {
  return (
    <>
      <section className="bg-[#F7FAFD] py-14 sm:py-16">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-3xl font-semibold tracking-tight text-[#1F2937] sm:text-4xl">
              Publications
            </h1>
            <p className="mt-4 text-base leading-7 text-[#5F6F82]">
              Selected publications from TCP Lab spanning clinical psychology,
              mental health, risk prediction, and evidence-based intervention
              research.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <PublicationExplorer publications={publications} />
        </Container>
      </section>
    </>
  );
}
