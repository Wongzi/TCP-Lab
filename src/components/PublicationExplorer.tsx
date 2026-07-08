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
  const sortedPublications = [...publications].sort((a, b) => b.year - a.year);

  return (
    <div className="grid gap-4">
      {sortedPublications.map((publication) => (
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
  );
}
