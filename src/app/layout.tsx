import type { Metadata } from "next";
import "./globals.css";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: {
    default: "Tsinghua Clinical Psychology Lab",
    template: "%s | TCP Lab",
  },
  description:
    "Tsinghua Clinical Psychology Lab is affiliated with the Department of Psychology at Tsinghua University and advances research in clinical psychology and mental health science.",
  keywords: [
    "Tsinghua Clinical Psychology Lab",
    "TCP Lab",
    "clinical psychology",
    "mental health",
    "Tsinghua University",
    "Department of Psychology",
  ],
  metadataBase: new URL("https://example.github.io"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
