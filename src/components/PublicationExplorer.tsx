"use client";

import { useMemo, useState } from "react";

export type Publication = {
  year: number;
  authors: string;
  title: string;
  journal: string;
};

type PublicationExplorerProps = {
  publications: Publication[];
};

export function PublicationExplorer({ publications }: PublicationExplorerProps) {
  const [query, setQuery] = useState("");
  const [year, setYear] = useState("all");
  const [sort, setSort] = useState<"desc" | "asc">("desc");

  const years = useMemo(
    () =>
      Array.from(new Set(publications.map((publication) => publication.year))).sort(
        (a, b) => b - a,
      ),
    [publications],
  );

  const groupedPublications = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    const filtered = publications
      .filter((publication) => {
        const matchesYear = year === "all" || publication.year.toString() === year;
        const searchable = `${publication.authors} ${publication.title} ${publication.journal}`.toLowerCase();
        const matchesQuery = !normalizedQuery || searchable.includes(normalizedQuery);
        return matchesYear && matchesQuery;
      })
      .sort((a, b) => (sort === "desc" ? b.year - a.year : a.year - b.year));

    return filtered.reduce<Record<number, Publication[]>>((accumulator, publication) => {
      if (!accumulator[publication.year]) {
        accumulator[publication.year] = [];
      }
      accumulator[publication.year].push(publication);
      return accumulator;
    }, {});
  }, [publications, query, sort, year]);

  const groupedYears = Object.keys(groupedPublications)
    .map(Number)
    .sort((a, b) => (sort === "desc" ? b - a : a - b));

  return (
    <div className="space-y-8">
      <div className="grid gap-4 rounded-lg border border-[#D8E4F0] bg-[#F7FAFD] p-4 md:grid-cols-[1.4fr_0.8fr_0.8fr]">
        <label className="grid gap-2 text-sm font-medium text-[#1F2937]">
          Search publications
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            className="h-11 rounded-lg border border-[#B8CAE0] bg-white px-3 text-sm font-normal text-[#1F2937] outline-none transition placeholder:text-[#7A8797] focus:border-[#4A6FA5] focus:ring-2 focus:ring-[#E8F1FA]"
            placeholder="Search by author, title, or journal"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-[#1F2937]">
          Filter by year
          <select
            value={year}
            onChange={(event) => setYear(event.target.value)}
            className="h-11 rounded-lg border border-[#B8CAE0] bg-white px-3 text-sm font-normal text-[#1F2937] outline-none transition focus:border-[#4A6FA5] focus:ring-2 focus:ring-[#E8F1FA]"
          >
            <option value="all">All years</option>
            {years.map((publicationYear) => (
              <option key={publicationYear} value={publicationYear}>
                {publicationYear}
              </option>
            ))}
          </select>
        </label>
        <label className="grid gap-2 text-sm font-medium text-[#1F2937]">
          Sort by year
          <select
            value={sort}
            onChange={(event) => setSort(event.target.value as "desc" | "asc")}
            className="h-11 rounded-lg border border-[#B8CAE0] bg-white px-3 text-sm font-normal text-[#1F2937] outline-none transition focus:border-[#4A6FA5] focus:ring-2 focus:ring-[#E8F1FA]"
          >
            <option value="desc">Newest first</option>
            <option value="asc">Oldest first</option>
          </select>
        </label>
      </div>

      {groupedYears.length > 0 ? (
        <div className="space-y-10">
          {groupedYears.map((publicationYear) => (
            <section key={publicationYear} aria-labelledby={`year-${publicationYear}`}>
              <h2
                id={`year-${publicationYear}`}
                className="border-b border-[#D8E4F0] pb-3 text-2xl font-semibold text-[#1F2937]"
              >
                {publicationYear}
              </h2>
              <div className="mt-5 grid gap-4">
                {groupedPublications[publicationYear].map((publication) => (
                  <article
                    key={`${publication.year}-${publication.title}`}
                    className="rounded-lg border border-[#D8E4F0] bg-white p-5 shadow-sm shadow-[#4A6FA5]/5"
                  >
                    <p className="text-sm leading-6 text-[#5F6F82]">
                      {publication.authors} ({publication.year}).
                    </p>
                    <h3 className="mt-1 text-lg font-semibold leading-7 text-[#1F2937]">
                      {publication.title}.
                    </h3>
                    <p className="mt-1 text-sm italic leading-6 text-[#4A6FA5]">
                      {publication.journal}.
                    </p>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      ) : (
        <div className="rounded-lg border border-[#D8E4F0] bg-white p-8 text-center">
          <h2 className="text-lg font-semibold text-[#1F2937]">No publications found</h2>
          <p className="mt-2 text-sm text-[#5F6F82]">
            Try a different search term or select all years.
          </p>
        </div>
      )}
    </div>
  );
}
