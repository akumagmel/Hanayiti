import { SiteShell } from "@/components/SiteShell";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Separator } from "@/components/ui/Separator";

export default function Page() {
  return (
    <SiteShell>
      <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        {/* Header */}
        <Card className="shadow-soft">
          <CardContent>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h1 className="text-2xl font-semibold tracking-tight text-slate-900">
                Contact
              </h1>
              <div className="flex items-center gap-2">
                <Badge>Public</Badge>
                <Badge>Institutional Inquiries</Badge>
              </div>
            </div>

            <p className="mt-4 text-slate-700 leading-7">
              HANA welcomes institutional, media, coalition, and donor inquiries.
              To maintain clarity, continuity, and record integrity, we prioritize
              written communication and designated contact channels.
            </p>
          </CardContent>
        </Card>

        {/* Contact Channels */}
        <Card className="shadow-soft">
          <CardContent>
            <h2 className="text-lg font-semibold tracking-tight text-slate-900">
              Official Contact Channels
            </h2>

            <Separator className="my-4" />

            <div className="grid gap-6 sm:grid-cols-2">
              {/* General */}
              <div className="rounded-2xl border border-slate-200 p-5">
                <div className="text-sm font-semibold text-slate-900">
                  General & Community Inquiries
                </div>
                <p className="mt-2 text-sm text-slate-700">
                  Public questions, community coordination, and general correspondence.
                </p>

                <div className="mt-3 text-sm text-slate-700 space-y-1">
                  <div>
                    Email:{" "}
                    <a
                      href="mailto:info@hana.org"
                      className="underline text-slate-900"
                    >
                      info@hana.org
                    </a>
                  </div>
                  <div>Phone / WhatsApp: +1 (XXX) XXX-XXXX</div>
                  <div>Telegram: @HANA_Info</div>
                </div>
              </div>

              {/* Policy / Governance */}
              <div className="rounded-2xl border border-slate-200 p-5">
                <div className="text-sm font-semibold text-slate-900">
                  Policy, Governance & Institutional Affairs
                </div>
                <p className="mt-2 text-sm text-slate-700">
                  Government agencies, institutional partners, and formal coordination.
                </p>

                <div className="mt-3 text-sm text-slate-700 space-y-1">
                  <div>
                    Email:{" "}
                    <a
                      href="mailto:governance@hana.org"
                      className="underline text-slate-900"
                    >
                      governance@hana.org
                    </a>
                  </div>
                  <div>Phone / WhatsApp: +1 (XXX) XXX-XXXX</div>
                  <div>Telegram: @HANA_Governance</div>
                </div>
              </div>

              {/* Media */}
              <div className="rounded-2xl border border-slate-200 p-5">
                <div className="text-sm font-semibold text-slate-900">
                  Press & Media
                </div>
                <p className="mt-2 text-sm text-slate-700">
                  Media requests, interviews, and statement verification.
                </p>

                <div className="mt-3 text-sm text-slate-700 space-y-1">
                  <div>
                    Email:{" "}
                    <a
                      href="mailto:press@hana.org"
                      className="underline text-slate-900"
                    >
                      press@hana.org
                    </a>
                  </div>
                  <div>Telegram: @HANA_Press</div>
                </div>
              </div>

              {/* Donations */}
              <div className="rounded-2xl border border-slate-200 p-5">
                <div className="text-sm font-semibold text-slate-900">
                  Donations & Financial Support
                </div>
                <p className="mt-2 text-sm text-slate-700">
                  Contributions support lawful advocacy, civic education, and
                  organizational operations. HANA does not engage in campaign activity.
                </p>

                <div className="mt-3 text-sm text-slate-700 space-y-2">
                  <div>
                    Email:{" "}
                    <a
                      href="mailto:donations@hana.org"
                      className="underline text-slate-900"
                    >
                      donations@hana.org
                    </a>
                  </div>

                  <div className="pt-2 text-xs text-slate-600">
                    Cryptocurrency (direct transfer):
                  </div>

                  <div className="text-xs text-slate-700">
                    <strong>BTC:</strong> bc1qxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                  </div>
                  <div className="text-xs text-slate-700">
                    <strong>ETH:</strong> 0xXXXXXXXXXXXXXXXXXXXXXXXXXXXX
                  </div>

                  <div className="pt-2 text-xs text-slate-600">
                    Online platforms:
                  </div>
                  <ul className="list-disc pl-5 text-xs text-slate-700">
                    <li>PayPal (link to be provided)</li>
                    <li>Donorbox (link to be provided)</li>
                  </ul>
                </div>
              </div>
            </div>

            <p className="mt-6 text-xs text-slate-600">
              For all inquiries, please include your name, organization (if applicable),
              purpose of contact, and any relevant timelines. Unauthorized representations
              do not bind HANA.
            </p>
          </CardContent>
        </Card>
      </main>
    </SiteShell>
  );
}
