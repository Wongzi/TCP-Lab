import type { Metadata } from "next";
import { existsSync } from "node:fs";
import { join } from "node:path";
import { Container } from "@/components/Container";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { SectionHeader } from "@/components/SectionHeader";
import outreach from "@/data/outreach.json";
import { publicPath } from "@/utils/publicPath";

type OutreachArticle = {
  title: string;
  summary?: string;
  date?: string;
  url?: string;
  coverLabel: string;
  coverSrc?: string;
};

function getExistingPublicImage(src?: string) {
  if (!src) {
    return undefined;
  }

  const imagePath = join(process.cwd(), "public", src.replace(/^\//, ""));
  return existsSync(imagePath) ? publicPath(src, 1) : undefined;
}

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
              src={publicPath("/images/qr-code.jpg", 1)}
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
            description="Public-facing articles from 夏木心理实验室 on mental health science, evidence-based intervention, and psychology education."
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {(outreach.articles as OutreachArticle[]).map((article) => (
              <article
                key={article.title}
                className="overflow-hidden rounded-lg border border-[#D8E4F0] bg-white shadow-sm shadow-[#4A6FA5]/5 transition duration-200 hover:-translate-y-1 hover:shadow-md hover:shadow-[#4A6FA5]/10"
              >
                <PlaceholderImage
                  label={article.coverLabel}
                  src={getExistingPublicImage(article.coverSrc)}
                  aspect="wide"
                  className="rounded-none border-0"
                />
                <div className="p-5">
                  {article.date ? (
                    <time
                      className="text-sm font-medium text-[#4A6FA5]"
                      dateTime={article.date}
                    >
                      {article.date}
                    </time>
                  ) : null}
                  <h2 className={`${article.date ? "mt-3" : ""} text-lg font-semibold text-[#1F2937]`}>
                    {article.url ? (
                      <a
                        href={article.url}
                        target="_blank"
                        rel="noreferrer"
                        className="transition hover:text-[#4A6FA5]"
                      >
                        {article.title}
                      </a>
                    ) : (
                      article.title
                    )}
                  </h2>
                  {article.summary ? (
                    <p className="mt-3 text-sm leading-6 text-[#5F6F82]">
                      {article.summary}
                    </p>
                  ) : null}
                  {article.url ? (
                    <a
                      href={article.url}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 inline-flex text-sm font-semibold text-[#4A6FA5] transition hover:text-[#2F4F78]"
                    >
                      Read on WeChat
                    </a>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

    </>
  );
}
