import { SiteShell } from "@/components/SiteShell";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Separator } from "@/components/ui/Separator";
import { Button } from "@/components/ui/Button";

export default function Page() {
  return (
    <SiteShell>
      <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        {/* Header */}
        <Card className="shadow-soft">
          <CardContent>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h1 className="text-2xl font-semibold tracking-tight text-slate-900">
                Membership
              </h1>
              <div className="flex items-center gap-2">
                <Badge>Public</Badge>
                <Badge>Personal</Badge>
                <Badge>Private</Badge>
              </div>
            </div>

            <p className="mt-4 text-slate-700 leading-7">
              HANA membership is a structured affiliation for individuals and organizations aligned
              with disciplined advocacy, civic education, and institutionally legible engagement.
              Membership strengthens continuity and coordination—without partisan alignment or
              performative activism.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              <Button href="/contact/">Request Membership</Button>
              <Button variant="outline" href="/governance/">
                Governance Summary
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Why Membership */}
        <Card className="shadow-soft">
          <CardContent>
            <h2 className="text-lg font-semibold tracking-tight text-slate-900">
              Why Membership Exists
            </h2>
            <p className="mt-3 text-slate-700 leading-7">
              Membership exists to build organized civic sessions. When communities are structured,
              documented, and consistent, they are more likely to be included in serious engagement.
              HANA membership supports:
            </p>

            <ul className="mt-4 list-disc pl-6 text-slate-700 leading-7 space-y-2">
              <li>consistent communication across Haiti and the diaspora</li>
              <li>civic literacy and lawful participation in institutional processes</li>
              <li>record-based advocacy that accumulates over time</li>
              <li>credible representation built on discipline,and not spectacle</li>
            </ul>
          </CardContent>
        </Card>

        {/* Membership Types */}
        <Card className="shadow-soft">
          <CardContent>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h2 className="text-lg font-semibold tracking-tight text-slate-900">
                Membership Types
              </h2>
              <Badge>Structured Affiliation</Badge>
            </div>

            <Separator className="my-5" />

            <div className="grid gap-4 lg:grid-cols-3">
              {/* Supporter */}
              <Card className="bg-slate-50 border border-slate-100">
                <CardContent className="p-5">
                  <div className="text-sm font-semibold text-slate-900">Supporter</div>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    For individuals who want to stay informed and reinforce continuity through
                    disciplined participation.
                  </p>
                  <ul className="mt-4 text-sm leading-6 text-slate-700 list-disc pl-5 space-y-1">
                    <li>receive official updates and statements</li>
                    <li>access civic education materials</li>
                    <li>participate in non-partisan issue surveys</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Member */}
              <Card className="bg-slate-50 border border-slate-100">
                <CardContent className="p-5">
                  <div className="text-sm font-semibold text-slate-900">Member</div>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    For individuals committed to structured involvement, reporting, and
                    coordination that supports institutional engagement.
                  </p>
                  <ul className="mt-4 text-sm leading-6 text-slate-700 list-disc pl-5 space-y-1">
                    <li>all Supporter benefits</li>
                    <li>join working groups (civic / economic / coordination)</li>
                    <li>assist with documentation and community reporting</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Institutional Affiliate */}
              <Card className="bg-slate-50 border border-slate-100">
                <CardContent className="p-5">
                  <div className="text-sm font-semibold text-slate-900">
                    Institutional / Partner Affiliate
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    For organizations, coalitions, and civic bodies seeking structured coordination
                    and credible engagement channels.
                  </p>
                  <ul className="mt-4 text-sm leading-6 text-slate-700 list-disc pl-5 space-y-1">
                    <li>coordination channel for formal engagement</li>
                    <li>briefings and issue alignment (as appropriate)</li>
                    <li>participation in civic education initiatives</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>

        {/* Standards */}
        <Card className="shadow-soft">
          <CardContent>
            <h2 className="text-lg font-semibold tracking-tight text-slate-900">
              Membership Standards
            </h2>

            <p className="mt-3 text-slate-700 leading-7">
              HANA maintains standards to protect institutional integrity and avoid misrepresentation.
              Membership is conditioned on adherence to these principles:
            </p>

            <ul className="mt-4 list-disc pl-6 text-slate-700 leading-7 space-y-2">
              <li>
                <span className="font-semibold text-slate-900">Non-partisan conduct:</span> No
                candidate campaigning or partisan activity under HANA identity.
              </li>
              <li>
                <span className="font-semibold text-slate-900">Documentation discipline:</span>{" "}
                Accuracy matters. No reckless claims, misquotes, or manufactured narratives.
              </li>
              <li>
                <span className="font-semibold text-slate-900">Institutional engagement:</span>{" "}
                Respectful, lawful communication. No harassment, threats, or impersonation.
              </li>
              <li>
                <span className="font-semibold text-slate-900">Authorized representation only:</span>{" "}
                Membership does not authorize anyone to speak for HANA unless explicitly designated.
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Not a political arm */}
        <Card className="shadow-soft">
          <CardContent>
            <h2 className="text-lg font-semibold tracking-tight text-slate-900">
              What Membership Does Not Do
            </h2>

            <p className="mt-3 text-slate-700 leading-7">
              Membership does not authorize any person or organization to bind HANA, negotiate on
              behalf of HANA, issue demands representing HANA, or use HANA branding for partisan
              activity. Unauthorized representations are not official.
            </p>
          </CardContent>
        </Card>

        {/* How to Join */}
        <Card className="shadow-soft">
          <CardContent>
            <h2 className="text-lg font-semibold tracking-tight text-slate-900">
              How to Join
            </h2>

            <p className="mt-3 text-slate-700 leading-7">
              To request membership, submit a short membership inquiry through the official Contact
              channel. Include your location (Haiti / Florida / New York / other), intended membership
              type, and how you wish to contribute.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              <Button href="/contact/">Request Membership</Button>
              <Button variant="outline" href="/about/">
                Learn About HANA
              </Button>
            </div>

            <p className="mt-4 text-xs text-slate-600">
              Note: HANA may maintain internal membership controls and verification procedures to
              protect integrity and prevent unauthorized representation.
            </p>
          </CardContent>
        </Card>
      </main>
    </SiteShell>
  );
}
