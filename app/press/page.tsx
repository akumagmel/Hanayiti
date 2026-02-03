import { SiteShell } from "@/components/SiteShell";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Separator } from "@/components/ui/Separator";
import {
  ArrowDownToLine,
  Camera,
  FileText,
  Mail,
  Quote,
  Shield,
} from "lucide-react";

const assets = [
  { label: "Logo (JPG)", href: "/hana-logo.jpg" },
  { label: "Brand background (JPG)", href: "/hero-bg.jpg" },
  { label: "Press one-pager (PDF)", href: "/pdfs/hana-press-onepager.pdf" },
  { label: "Press boilerplate (TXT)", href: "/pdfs/hana-boilerplate.txt" },
];

function IconTile({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#E7CF8A] via-[#D8B563] to-[#C7A24B] shadow-md">
      <div className="text-slate-950">{children}</div>
    </div>
  );
}

export default function Page() {
  return (
    <SiteShell>
      <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <Card className="shadow-soft">
          <CardContent>
            {/* Top row */}
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-2">
                <Badge>Press / Media Kit</Badge>
                <Badge>Public</Badge>
                <span className="text-xs text-slate-500">
                  English-Kreyol-french
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                <Button variant="outline" href="/statements/latest/">
                  Latest Statement
                </Button>
                <Button href="/contact/">Media Inquiry</Button>
              </div>
            </div>

            <h1 className="mt-4 text-2xl font-semibold tracking-tight text-slate-900">
              Official information, quotes, and downloadable assets
            </h1>

            <p className="mt-3 text-slate-700 leading-7">
              This page provides approved language and official brand assets for press, coalitions,
              and institutional counterparts. Use this kit to ensure accuracy and reduce
              misquotation.
            </p>

            <Separator className="my-6" />

            {/* Three top cards */}
            <div className="grid gap-4 lg:grid-cols-3">
              {/* Boilerplate */}
              <Card className="bg-slate-50 border border-slate-100">
                <CardContent className="p-5">
                  <div className="flex items-start gap-4">
                    <IconTile>
                      <FileText className="h-5 w-5" />
                    </IconTile>

                    <div>
                      <div className="text-sm font-semibold text-slate-900">
                        Boilerplate
                      </div>
                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        HANA is a non-partisan/Governmental organization representing Haitian
                        American interests through lawful advocacy, policy engagement, civic
                        education, and transnational coordination.
                      </p>
                      <p className="mt-2 text-xs text-slate-500">
                        Use this description verbatim for press and partner references.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Non-partisan posture */}
              <Card className="bg-slate-50 border border-slate-100">
                <CardContent className="p-5">
                  <div className="flex items-start gap-4">
                    <IconTile>
                      <Shield className="h-5 w-5" />
                    </IconTile>

                    <div>
                      <div className="text-sm font-semibold text-slate-900">
                        Posture
                      </div>
                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        Issue-based advocacy and policy awarness. No candidate endorsements.
                        Official positions are published herein and through authorized channels.
                      </p>
                      <p className="mt-2 text-xs text-slate-500">
                        For governance language, reference the Governance Summary.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Downloads */}
              <Card className="bg-slate-50 border border-slate-100">
                <CardContent className="p-5">
                  <div className="flex items-start gap-4">
                    <IconTile>
                      <ArrowDownToLine className="h-5 w-5" />
                    </IconTile>

                    <div className="w-full">
                      <div className="text-sm font-semibold text-slate-900">
                        Downloads
                      </div>

                      <div className="mt-2 flex flex-col gap-2">
                        {assets.map((a) => (
                          <a
                            key={a.href}
                            href={a.href}
                            className="text-sm font-semibold text-slate-900 hover:text-slate-800 underline-offset-4 hover:underline"
                          >
                            {a.label}
                          </a>
                        ))}

                        <div className="text-xs text-slate-500">
                          Upload press PDFs into <code>/public/pdfs</code>.
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Two mid cards */}
            <div className="mt-8 grid gap-4 lg:grid-cols-2">
              <Card className="shadow-soft">
                <CardContent className="p-5">
                  <div className="flex items-start gap-4">
                    <IconTile>
                      <Quote className="h-5 w-5" />
                    </IconTile>

                    <div>
                      <div className="text-sm font-semibold text-slate-900">
                        Approved quote (editable)
                      </div>
                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        “Our focus is advocacy that protects dignity and produces outcomes without
                        theatrics.”
                      </p>
                      <p className="mt-2 text-xs text-slate-500">
                        Attribution: Authorized spokesperson.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-soft">
                <CardContent className="p-5">
                  <div className="flex items-start gap-4">
                    <IconTile>
                      <Camera className="h-5 w-5" />
                    </IconTile>

                    <div>
                      <div className="text-sm font-semibold text-slate-900">
                        Media guidelines
                      </div>
                      <ul className="mt-2 list-disc pl-5 text-sm leading-6 text-slate-600">
                        <li>Use the boilerplate language above for accuracy.</li>
                        <li>
                          Reference formal statements for positions; avoid paraphrasing when possible.
                        </li>
                        <li>
                          Route sensitive questions to an authorized spokesperson or official channel.
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Separator className="my-6" />

            {/* Media inquiries */}
            <Card className="shadow-soft">
              <CardContent className="p-5">
                <div className="flex items-start gap-4">
                  <IconTile>
                    <Mail className="h-5 w-5" />
                  </IconTile>

                  <div className="w-full">
                    <div className="text-sm font-semibold text-slate-900">
                      Media inquiries
                    </div>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Route media and institutional inquiries through the official contact channel
                      to maintain response consistency and documented coordination.
                    </p>

                    <div className="mt-3 flex flex-wrap gap-2">
                      <Button href="/contact/">Open Contact Page</Button>
                      <Button variant="outline" href="/governance/">
                        Governance Summary
                      </Button>
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
