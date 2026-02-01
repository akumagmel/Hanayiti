import { SiteShell } from "@/components/SiteShell";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Separator } from "@/components/ui/Separator";
import { ArrowDownToLine, Camera, FileText, Mail, Quote, Shield } from "lucide-react";

const assets = [
  { label: "Logo (SVG)", href: "/hana-logo.svg" },
  { label: "Brand background (JPG)", href: "/hero-bg.jpg" },
  { label: "Press one-pager (PDF placeholder)", href: "/pdfs/hana-press-onepager.pdf" },
];

export default function Page() {
  return (
    <SiteShell>
      <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <Card className="shadow-soft">
          <CardContent>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <Badge>Press / Media Kit</Badge>
                <span className="text-xs text-slate-500">English-first launch</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <Button variant="outline" href="/statements/latest/">Latest Statement</Button>
                <Button href="/contact/">Media Inquiry</Button>
              </div>
            </div>

            <h1 className="mt-4 text-2xl font-semibold tracking-tight text-slate-900">
              Official information, quotes, and downloadable assets
            </h1>
            <p className="mt-3 text-slate-700 leading-7">
              This page provides approved language and brand assets for press, coalitions, and institutional partners.
              Use this kit to ensure accuracy and reduce misquotation.
            </p>

            <Separator className="my-6" />

            <div className="grid gap-4 lg:grid-cols-3">
              <Card className="bg-slate-50">
                <CardContent className="p-5">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 rounded-xl border bg-white p-2"><FileText className="h-5 w-5" /></div>
                    <div>
                      <div className="text-sm font-semibold text-slate-900">Boilerplate</div>
                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        HANA is a non-partisan advocacy organization representing Haitian American interests through disciplined
                        advocacy, policy engagement, civic education, and transnational coordination.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-50">
                <CardContent className="p-5">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 rounded-xl border bg-white p-2"><Shield className="h-5 w-5" /></div>
                    <div>
                      <div className="text-sm font-semibold text-slate-900">Non-partisan posture</div>
                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        Issue-based advocacy only. No candidate endorsements. Official statements are issued through authorized channels.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-50">
                <CardContent className="p-5">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 rounded-xl border bg-white p-2"><ArrowDownToLine className="h-5 w-5" /></div>
                    <div>
                      <div className="text-sm font-semibold text-slate-900">Downloads</div>
                      <div className="mt-2 flex flex-col gap-2">
                        {assets.map((a) => (
                          <a
                            key={a.href}
                            href={a.href}
                            className="text-sm font-semibold text-ink-800 hover:text-ink-700 underline-offset-4 hover:underline"
                          >
                            {a.label}
                          </a>
                        ))}
                        <div className="text-xs text-slate-500">
                          Upload PDFs into <code>/site/public/pdfs</code>.
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 grid gap-4 lg:grid-cols-2">
              <Card className="shadow-soft">
                <CardContent className="p-5">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 rounded-xl border bg-white p-2"><Quote className="h-5 w-5" /></div>
                    <div>
                      <div className="text-sm font-semibold text-slate-900">Approved quote (editable)</div>
                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        “Our focus is disciplined advocacy that protects dignity and produces outcomes—without theatrics.”
                      </p>
                      <p className="mt-2 text-xs text-slate-500">
                        Secretary Naomie L. X.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-soft">
                <CardContent className="p-5">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 rounded-xl border bg-white p-2"><Camera className="h-5 w-5" /></div>
                    <div>
                      <div className="text-sm font-semibold text-slate-900">Media guidelines</div>
                      <ul className="mt-2 list-disc pl-5 text-sm leading-6 text-slate-600">
                        <li>Use the boilerplate language above for accuracy.</li>
                        <li>Reference formal statements for positions; avoid paraphrasing.</li>
                        <li>Direct sensitive questions to an authorized spokesperson.</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Separator className="my-6" />

            <Card className="shadow-soft">
              <CardContent className="p-5">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 rounded-xl border bg-white p-2"><Mail className="h-5 w-5" /></div>
                  <div className="w-full">
                    <div className="text-sm font-semibold text-slate-900">Media inquiries</div>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Route media and institutional inquiries through the official contact channel to ensure response consistency.
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <Button href="/contact/">Open Contact Page</Button>
                      <Button variant="outline" href="/governance/">Governance Summary</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </CardContent>
        </Card>
      </main>
    </SiteShell>
  );
}
