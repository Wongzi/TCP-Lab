import Link from "next/link";
import { Container } from "@/components/Container";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/team/", label: "Team" },
  { href: "/publications/", label: "Publications" },
  { href: "/outreach/", label: "Outreach" },
  { href: "/open-positions/", label: "Open Positions" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-[#D8E4F0] bg-[#F7FAFD]">
      <Container className="py-10">
        <div className="grid gap-8 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="text-base font-semibold text-[#1F2937]">
              Tsinghua Clinical Psychology Lab
            </p>
            <p className="mt-3 max-w-md text-sm leading-6 text-[#5F6F82]">
              Department of Psychological and Cognitive Sciences, Tsinghua University.
              Advancing clinical psychology research and mental health science.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-[#1F2937]">Navigation</p>
            <div className="mt-3 grid gap-2 text-sm">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[#5F6F82] transition hover:text-[#4A6FA5]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold text-[#1F2937]">Contact</p>
            <address className="mt-3 not-italic text-sm leading-6 text-[#5F6F82]">
              Department of Psychological and Cognitive Sciences
              <br />
              Tsinghua University
              <br />
              Email: wmu@mail.tsinghua.edu.cn
            </address>
          </div>
        </div>
        <div className="mt-8 border-t border-[#D8E4F0] pt-6 text-sm text-[#5F6F82]">
          © 2026 Tsinghua Clinical Psychology Lab. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
