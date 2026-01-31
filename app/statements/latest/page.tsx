import { SiteShell } from "@/components/SiteShell";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Separator } from "@/components/ui/Separator";
import { ArrowDownToLine, FileText, Shield } from "lucide-react";

const downloads = [
  {
    label: "Statement PDF (placeholder)",
    href: "/pdfs/hana-latest-statement.pdf",
  },
  {
    label: "Press one-pager (placeholder)",
    href: "/pdfs/hana-press-onepager.pdf",
  },
];

export default function Page() {
  return (
    <SiteShell>
      <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col gap-8">
          <Card className="shadow-soft">
            <CardContent>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <Badge>Latest Statement</Badge>
                  <span className="text-xs text-slate-500">Issued: January 2026</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Button variant="outline" href="/statements/">
                    Back to Archive
                  </Button>
                  <Button href="/contact/">
                    Media / Coalition Inquiry
                  </Button>
                </div>
              </div>

              <h1 className="mt-4 text-2xl font-semibold tracking-tight text-slate-900">
                Position on civic protections, dignity, and lawful advocacy for Haitian American communities
              </h1>

              <p className="mt-3 text-slate-700 leading-7">
                This statement is published as a formal record. HANA issues measured positions intended for institutions,
                coalitions, and the public record. This archive exists to preserve clarity, prevent misquotation, and maintain continuity.
              </p>

              <Separator className="my-6" />

              <div className="grid gap-4 lg:grid-cols-3">
                <Card className="bg-slate-50">
                  <CardContent className="p-5">
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 rounded-xl border bg-white p-2">
                        <FileText className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-slate-900">Scope</div>
                        <div className="mt-1 text-sm leading-6 text-slate-600">
                          Issue-based advocacy and institutional engagement consistent with a 501(c)(4) posture.
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-slate-50">
                  <CardContent className="p-5">
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 rounded-xl border bg-white p-2">
                        <Shield className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-slate-900">Discipline</div>
                        <div className="mt-1 text-sm leading-6 text-slate-600">
                          Non-partisan. No candidate endorsements. Official statements only through authorized channels.
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-slate-50">
                  <CardContent className="p-5">
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 rounded-xl border bg-white p-2">
                        <ArrowDownToLine className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-slate-900">Downloads</div>
                        <div className="mt-2 flex flex-col gap-2">
                          {downloads.map((d) => (
                            <a
                              key={d.href}
                              href={d.href}
                              className="text-sm font-semibold text-ink-800 hover:text-ink-700 underline-offset-4 hover:underline"
                            >
                              {d.label}
                            </a>
                          ))}
                          <div className="text-xs text-slate-500">
                            Upload your PDFs into <code>/site/public/pdfs</code> with matching filenames.
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-8">
                <h2 className="text-lg font-semibold text-slate-900">Summary (public-facing)</h2>
                <p className="mt-2 text-slate-700 leading-7">
                  HANA advocates for civic protections, lawful process, and dignified treatment of Haitian American communities.
                  We engage institutions through measured, documented advocacy designed to produce outcomes—not spectacle.
                </p>

                <h2 className="mt-6 text-lg font-semibold text-slate-900">Key points (editable)</h2>
                <ul className="mt-2 list-disc pl-5 text-slate-700 leading-7">
                  <li>Affirm non-partisan, issue-based advocacy and civic protections.</li>
                  <li>Call for transparency and accountability in decisions affecting Haitian communities.</li>
                  <li>Promote civic literacy, economic empowerment, and long-term stability.</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-soft">
            <CardContent>
              <div className="flex items-center justify-between gap-3">
                <div>
                  <div className="text-sm font-semibold text-slate-900">Notes for editors</div>
                  <div className="mt-1 text-sm text-slate-600">
                    Keep language measured. Avoid accusations unless documented and reviewed by counsel.
                  </div>
                </div>
                <Button variant="outline" href="/press/">
                  View Press / Media Kit
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </SiteShell>
  );
}
