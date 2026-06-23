import type { NextConfig } from "next";

const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const isUserOrOrgPagesRepository = repositoryName.endsWith(".github.io");
const githubPagesBasePath =
  process.env.GITHUB_ACTIONS === "true" && repositoryName && !isUserOrOrgPagesRepository
    ? `/${repositoryName}`
    : "";

const nextConfig: NextConfig = {
  output: "export",
  outputFileTracingRoot: __dirname,
  basePath: githubPagesBasePath || undefined,
  assetPrefix: githubPagesBasePath ? `${githubPagesBasePath}/` : undefined,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
