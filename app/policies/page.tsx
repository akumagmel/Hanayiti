import { SiteShell } from "@/components/SiteShell";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

export default function Page() {
  return (
    <SiteShell>
      <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        <Card className="shadow-soft">
          <CardContent>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h1 className="text-2xl font-semibold tracking-tight text-slate-900">
                Policies
              </h1>
              <div className="flex items-center gap-2">
                <Badge>Public</Badge>
                <Badge>Institutional</Badge>
                <Badge>2026</Badge>
              </div>
            </div>

            <p className="mt-4 text-slate-700 leading-7">
              This page outlines key public-facing policies that govern how HANA communicates,
              maintains accuracy, and preserves institutional integrity. Public summaries are
              provided for transparency. Internal instruments and controls remain restricted.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-soft">
          <CardContent>
            <h2 className="text-lg font-semibold tracking-tight text-slate-900">
              Non-Partisan Policy
            </h2>
            <p className="mt-3 text-slate-700 leading-7">
              HANA operates on a strictly non-partisan basis. HANA does not endorse or oppose
              candidates for public office and does not engage in political campaign activity.
              Engagement is issue-based and focused on policy dialogue, civic education, and
              institutional coordination consistent with social justice purpose.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-soft">
          <CardContent>
            <h2 className="text-lg font-semibold tracking-tight text-slate-900">
              Official Communications & Spokesperson Policy
            </h2>
            <p className="mt-3 text-slate-700 leading-7">
              Official statements, positions, and press language are issued through authorized
              channels only. Individuals may not represent HANA publicly unless explicitly authorized.
              Unauthorized representations do not bind HANA.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-soft">
          <CardContent>
            <h2 className="text-lg font-semibold tracking-tight text-slate-900">
              Accuracy & Corrections Policy
            </h2>
            <p className="mt-3 text-slate-700 leading-7">
              HANA prioritizes accuracy and institutional record integrity. If a public statement or
              published summary is found to be materially inaccurate, HANA may issue a correction or
              clarification through official channels.
            </p>
            <p className="mt-4 text-slate-700 leading-7">
              Requests for correction should be routed through the official Contact page and must
              include the specific reference, the proposed correction, and supporting context.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-soft">
          <CardContent>
            <h2 className="text-lg font-semibold tracking-tight text-slate-900">
              Records & Archiving Policy
            </h2>
            <p className="mt-3 text-slate-700 leading-7">
              HANA maintains records of formal positions and key governance actions to support continuity,
              accountability, and reference. Public summaries may be provided; internal records are maintained
              as restricted organizational documents consistent with law and internal procedure.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-soft">
          <CardContent>
            <h2 className="text-lg font-semibold tracking-tight text-slate-900">
              Media / Press Use Policy
            </h2>
            <p className="mt-3 text-slate-700 leading-7">
              Press and partners should use approved boilerplate and quotations from the Press page to reduce
              misquotation. Where possible, link to the original statement or public summary.
            </p>
          </CardContent>
        </Card>
      </main>
    </SiteShell>
  );
}
