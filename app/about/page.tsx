import { SiteShell } from "@/components/SiteShell";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

export default function Page() {
  return (
    <SiteShell>
      <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        {/* Header / Intro */}
        <Card className="shadow-soft">
          <CardContent>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h1 className="text-2xl font-semibold tracking-tight text-slate-900">
                About HANA
              </h1>
              <div className="flex items-center gap-2">
                <Badge>Non-Partisan</Badge>
                <Badge>501(c)(4)</Badge>
              </div>
            </div>

            <p className="mt-4 text-slate-700 leading-7">
              The Haitian American Nationals Association (HANA) is an organization representing
              Haitian American interests through disciplined advocacy, policy engagement, civic
              education, and transnational coordination.
            </p>

            <p className="mt-4 text-slate-700 leading-7">
              Founded in 2018, HANA exists to address a long-standing gap: the absence of a
              credible, structured, and enduring institutional voice capable of engaging power
              without partisanship, dependency, or performative activism. Our work is grounded
              in the belief that sustainable progress is achieved through institutional literacy,
              continuity, and lawful engagement—not reaction or spectacle.
            </p>
          </CardContent>
        </Card>

        {/* Institutional Engagement */}
        <Card className="shadow-soft">
          <CardContent>
            <h2 className="text-lg font-semibold tracking-tight text-slate-900">
              Institutional Engagement
            </h2>

            <p className="mt-3 text-slate-700 leading-7">
              HANA operates at the intersection of community experience and formal governance.
              We engage policymakers, government agencies, international institutions, civil
              society actors, and private stakeholders with the aim of translating lived realities
              into actionable policy considerations.
            </p>

            <p className="mt-4 text-slate-700 leading-7">
              Our role is not to agitate for attention, but to inform, coordinate, and influence
              outcomes through documentation, dialogue, and sustained presence—in accordance with
              our Charter and Bylaws.
            </p>
          </CardContent>
        </Card>

        {/* Transnational Coordination */}
        <Card className="shadow-soft">
          <CardContent>
            <h2 className="text-lg font-semibold tracking-tight text-slate-900">
              Transnational Coordination
            </h2>

            <p className="mt-3 text-slate-700 leading-7">
              Decisions made in Washington, Port-au-Prince, New York, or international forums
              often intersect, compound, or conflict. HANA works to bridge these spaces by
              facilitating communication and coordination between:
            </p>

            <ul className="mt-4 space-y-2 text-slate-700 leading-7 list-disc pl-6">
              <li>Haitian communities in the United States</li>
              <li>Local and national stakeholders in Haiti</li>
              <li>Diaspora organizations and institutions</li>
              <li>International partners engaged in Haiti-related policy</li>
            </ul>

            <p className="mt-4 text-slate-700 leading-7">
              Our work recognizes that durable solutions emerge when communities are not merely
              consulted, but structurally included in the policy process.
            </p>
          </CardContent>
        </Card>

        {/* Vision & Approach */}
        <Card className="shadow-soft">
          <CardContent>
            <h2 className="text-lg font-semibold tracking-tight text-slate-900">
              Vision &amp; Approach
            </h2>

            <p className="mt-3 text-slate-700 leading-7">
              HANA advances a future in which Haitian Americans and Haitian communities are
              institutionally represented, civically informed, and structurally included in
              decisions that affect their political standing, economic stability, human rights,
              and national identity and dignity—both domestically and transnationally.
            </p>

            <p className="mt-4 text-slate-700 leading-7">
              HANA envisions durable systems of engagement where Haitian voices are not peripheral,
              reactive, or informal, but recognized, prepared, and consequential. We do not align
              with political parties, candidates, or transient movements. Instead, we prioritize:
            </p>

            <ul className="mt-4 space-y-2 text-slate-700 leading-7 list-disc pl-6">
              <li>Disciplined research and record-based advocacy</li>
              <li>Civic education that strengthens informed participation</li>
              <li>Lawful, rights-based engagement with institutions</li>
              <li>Cross-border coordination that respects local sovereignty and capacity</li>
            </ul>

            <p className="mt-4 text-slate-700 leading-7">
              With an active base spanning Florida, New York, and Haiti, this posture allows HANA
              to operate with credibility across administrations, jurisdictions, and international
              frameworks, while remaining accountable to the communities we represent.
            </p>

            <p className="mt-4 text-slate-700 leading-7">
              HANA has assisted hundreds of individuals and families navigating displacement,
              economic hardship, immigration-related challenges, and administrative breakdown—while
              contributing to broader policy conversations affecting Haiti and its global community.
            </p>
          </CardContent>
        </Card>

        {/* Role */}
        <Card className="shadow-soft">
          <CardContent>
            <h2 className="text-lg font-semibold tracking-tight text-slate-900">
              Role
            </h2>

            <p className="mt-3 text-slate-700 leading-7">
              HANA exists to serve as an institutional intermediary—a body capable of translating
              community realities into formal engagement. We are committed to:
            </p>

            <ul className="mt-4 space-y-2 text-slate-700 leading-7 list-disc pl-6">
              <li>Protecting human and civil rights and liberties</li>
              <li>Advancing economic development rooted in local agency</li>
              <li>Upholding cultural and indigenous identity and dignity</li>
              <li>Strengthening accountability through lawful engagement</li>
            </ul>

            <div className="mt-6 space-y-1 text-slate-700 leading-7">
              <p>We are not an activist collective.</p>
              <p>We are not a political arm.</p>
              <p>We are not a temporary response to crisis.</p>
            </div>

            <p className="mt-4 text-slate-700 leading-7">
              HANA is a disciplined social welfare organization and civic institution—built for
              continuity, credibility, and long-term impact.
            </p>
          </CardContent>
        </Card>
      </main>
    </SiteShell>
  );
}
