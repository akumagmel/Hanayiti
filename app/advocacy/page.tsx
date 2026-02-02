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
                Advocacy Framework
              </h1>
              <div className="flex items-center gap-2">
                <Badge>Non-Partisan</Badge>
                <Badge>2018–2050</Badge>
              </div>
            </div>

            <p className="mt-4 text-slate-700 leading-7">
              The Haitian American Nationals Association (HANA) maintains a long-range advocacy
              framework designed to support consistent, non-partisan, and institutionally legible
              engagement over multiple decades.
            </p>

            <p className="mt-4 text-slate-700 leading-7">
              The 2018–2050 horizon reflects a deliberate departure from short-term or reactive
              advocacy models. HANA’s positions are developed with an emphasis on continuity,
              documentation, and policy relevance across changing administrations, jurisdictions,
              and political environments.
            </p>

            <p className="mt-4 text-slate-700 leading-7">
              All advocacy positions are formally issued, recorded, and archived, establishing an
              institutional record that supports accountability, reference, and cumulative impact.
            </p>
          </CardContent>
        </Card>

        {/* Pillar 1 */}
        <Card className="shadow-soft">
          <CardContent>
            <h2 className="text-lg font-semibold tracking-tight text-slate-900">
              Advocacy &amp; Representation
            </h2>

            <p className="mt-3 text-slate-700 leading-7">
              HANA functions as a non-partisan representative body, articulating Haitian American
              interests within formal policy and institutional contexts.
            </p>

            <ul className="mt-4 space-y-2 text-slate-700 leading-7 list-disc pl-6">
              <li>Structured issue articulation aligned with institutional standards</li>
              <li>Participation in consultations, briefings, and policy-adjacent forums</li>
              <li>Submission of written positions, memoranda, and records</li>
              <li>Maintenance of a documented advocacy history to ensure continuity</li>
            </ul>

            <p className="mt-4 text-slate-700 leading-7">
              Representation is conducted on the basis of process, documentation, and
              follow-through, rather than visibility or political alignment.
            </p>
          </CardContent>
        </Card>

        {/* Pillar 2 */}
        <Card className="shadow-soft">
          <CardContent>
            <h2 className="text-lg font-semibold tracking-tight text-slate-900">
              Civic &amp; Economic Empowerment
            </h2>

            <p className="mt-3 text-slate-700 leading-7">
              HANA advances civic and economic empowerment through education and capacity-building
              that supports informed, lawful participation in public and administrative systems.
            </p>

            <ul className="mt-4 space-y-2 text-slate-700 leading-7 list-disc pl-6">
              <li>Civic and administrative literacy</li>
              <li>Facilitation of access to institutional processes</li>
              <li>Support for economic participation through compliant pathways</li>
              <li>Mitigation of vulnerability during periods of disruption or instability</li>
            </ul>

            <p className="mt-4 text-slate-700 leading-7">
              Empowerment is approached as a systemic capacity objective, reinforcing long-term
              resilience rather than short-term assistance.
            </p>
          </CardContent>
        </Card>

        {/* Pillar 3 */}
        <Card className="shadow-soft">
          <CardContent>
            <h2 className="text-lg font-semibold tracking-tight text-slate-900">
              Identity &amp; National Dignity
            </h2>

            <p className="mt-3 text-slate-700 leading-7">
              HANA recognizes that effective engagement requires accurate representation of
              identity, history, and national context.
            </p>

            <ul className="mt-4 space-y-2 text-slate-700 leading-7 list-disc pl-6">
              <li>Protection against misrepresentation or erasure in policy discourse</li>
              <li>Contextual grounding of advocacy in historical and cultural continuity</li>
              <li>Affirmation of national dignity in domestic and international engagement</li>
            </ul>

            <p className="mt-4 text-slate-700 leading-7">
              Identity is treated as a governance-relevant factor, informing policy outcomes rather
              than serving as an ideological position.
            </p>
          </CardContent>
        </Card>

        {/* Continuity */}
        <Card className="shadow-soft">
          <CardContent>
            <h2 className="text-lg font-semibold tracking-tight text-slate-900">
              Continuity, Record, and Accountability
            </h2>

            <p className="mt-3 text-slate-700 leading-7">
              HANA’s advocacy framework is designed to produce cumulative institutional value.
              Positions are not isolated interventions, but components of a growing body of record
              intended to inform future engagement and decision-making.
            </p>

            <ul className="mt-4 space-y-2 text-slate-700 leading-7 list-disc pl-6">
              <li>Consistent across time</li>
              <li>Accessible to institutional counterparts</li>
              <li>Accountable to both community stakeholders and external partners</li>
            </ul>
          </CardContent>
        </Card>
      </main>
    </SiteShell>
  );
}
