import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PublicationExplorer } from "@/components/PublicationExplorer";
import publications from "@/data/publications.json";

export const metadata: Metadata = {
  title: "Publications",
  description:
    "Browse sample publications from Tsinghua Clinical Psychology Lab by year, title, author, and journal.",
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
              Search, filter, and sort publications from TCP Lab. The list is
              managed from a JSON data file for straightforward updates.
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
