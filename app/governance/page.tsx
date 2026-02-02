import { SiteShell } from "@/components/SiteShell";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

export default function Page() {
  return (
    <SiteShell>
      <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        {/* Header / Overview */}
        <Card className="shadow-soft">
          <CardContent>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h1 className="text-2xl font-semibold tracking-tight text-slate-900">
                Governance
              </h1>
              <div className="flex items-center gap-2">
                <Badge>Public Overview</Badge>
                <Badge>501(c)(4)</Badge>
                <Badge>Non-Partisan</Badge>
              </div>
            </div>

            <p className="mt-4 text-slate-700 leading-7">
              The Haitian American Nationals Association (HANA) operates pursuant to a formal
              Charter and Bylaws that establish clear separation between governance, operations,
              and advisory functions.
            </p>

            <p className="mt-4 text-slate-700 leading-7">
              In the interest of transparency and institutional clarity, public summaries of
              HANA’s governance structure are provided here. Detailed internal instruments,
              procedures, and controls are maintained as restricted organizational records and
              are not publicly distributed.
            </p>
          </CardContent>
        </Card>

        {/* What governance ensures */}
        <Card className="shadow-soft">
          <CardContent>
            <h2 className="text-lg font-semibold tracking-tight text-slate-900">
              Governance Objectives
            </h2>

            <p className="mt-3 text-slate-700 leading-7">
              HANA’s governance framework is designed to ensure institutional integrity,
              accountability, and long-term continuity. This structure supports:
            </p>

            <ul className="mt-4 space-y-2 text-slate-700 leading-7 list-disc pl-6">
              <li>Accountable decision-making</li>
              <li>Operational independence</li>
              <li>Continuity across leadership transitions</li>
              <li>Protection of internal processes and records</li>
            </ul>

            <p className="mt-4 text-slate-700 leading-7">
              HANA’s governance model is built to support long-term institutional stability,
              lawful compliance, and disciplined engagement both internally and with external
              partners.
            </p>
          </CardContent>
        </Card>

        {/* Organizational form */}
        <Card className="shadow-soft">
          <CardContent>
            <h2 className="text-lg font-semibold tracking-tight text-slate-900">
              Organizational Form
            </h2>

            <p className="mt-3 text-slate-700 leading-7">
              HANA is organized as a non-profit, non-partisan social welfare organization
              pursuant to Section 501(c)(4) of the Internal Revenue Code and applicable law.
              The organization maintains separate legal existence and capacity, including the
              ability to contract, hold property, and engage in lawful proceedings in its own
              name, subject to internal governance controls.
            </p>
          </CardContent>
        </Card>

        {/* Structure */}
        <Card className="shadow-soft">
          <CardContent>
            <h2 className="text-lg font-semibold tracking-tight text-slate-900">
              Structure
            </h2>

            <p className="mt-3 text-slate-700 leading-7">
              HANA’s governance model establishes a clear separation between governance,
              operations, and advisory functions, consistent with best practices for
              institutional accountability.
            </p>

            <div className="mt-5 space-y-5">
              <div>
                <h3 className="text-base font-semibold text-slate-900">
                  Board of Directors
                </h3>
                <p className="mt-2 text-slate-700 leading-7">
                  The Board of Directors serves as the organization’s governing authority,
                  responsible for policy direction, strategic oversight, fiduciary responsibility,
                  and organizational control. The Board acts collectively and retains ultimate
                  authority over HANA’s affairs.
                </p>
              </div>

              <div>
                <h3 className="text-base font-semibold text-slate-900">Officers</h3>
                <p className="mt-2 text-slate-700 leading-7">
                  Officers are appointed by and accountable to the Board. They act in a fiduciary
                  capacity and exercise only such authority as is expressly delegated, ensuring
                  disciplined execution without concentration of power.
                </p>
              </div>

              <div>
                <h3 className="text-base font-semibold text-slate-900">
                  Advisory Functions
                </h3>
                <p className="mt-2 text-slate-700 leading-7">
                  Advisory roles are consultative only. Advisors provide expertise and institutional
                  insight at the request of governance leadership but hold no voting authority,
                  operational control, or binding capacity.
                </p>
              </div>
            </div>

            <p className="mt-5 text-slate-700 leading-7">
              This structure ensures decision-making clarity, operational independence, and
              protection against unauthorized representation or action.
            </p>
          </CardContent>
        </Card>

        {/* Controls & Accountability */}
        <Card className="shadow-soft">
          <CardContent>
            <h2 className="text-lg font-semibold tracking-tight text-slate-900">
              Institutional Controls &amp; Accountability
            </h2>

            <p className="mt-3 text-slate-700 leading-7">
              HANA maintains formal controls governing:
            </p>

            <ul className="mt-4 space-y-2 text-slate-700 leading-7 list-disc pl-6">
              <li>Adoption of policies, resolutions, and position statements</li>
              <li>Financial oversight and expenditure authorization</li>
              <li>Legal engagement and litigation approval</li>
              <li>Recordkeeping and archival integrity</li>
            </ul>

            <p className="mt-4 text-slate-700 leading-7">
              Legal actions, public representations, and binding commitments may be undertaken
              only when authorized through established governance procedures, preserving
              organizational discipline and limiting exposure.
            </p>
          </CardContent>
        </Card>

        {/* Transparency */}
        <Card className="shadow-soft">
          <CardContent>
            <h2 className="text-lg font-semibold tracking-tight text-slate-900">
              Transparency &amp; Record Integrity
            </h2>

            <p className="mt-3 text-slate-700 leading-7">
              In support of transparency and institutional clarity, HANA provides public summaries
              of its governance structure and purpose. Detailed internal instruments—including
              charters, bylaws, resolutions, and operational controls—are maintained as restricted
              organizational records in accordance with law and internal policy.
            </p>
          </CardContent>
        </Card>
      </main>
    </SiteShell>
  );
}
