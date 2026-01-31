import { SiteShell } from "@/components/SiteShell";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

export default function Page() {
  return (
    <SiteShell>
      <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <Card className="shadow-soft">
          <CardContent>
            <div className="flex items-center justify-between gap-3">
              <h1 className="text-2xl font-semibold tracking-tight text-slate-900">Governance</h1>
              <Badge>Public</Badge>
            </div>
            <p className="mt-4 text-slate-700 leading-7">
              HANA operates under a formal Charter and Bylaws with clear separation between governance, operations, and advisory roles. Public summaries are provided here; internal instruments remain controlled.
            </p>
          </CardContent>
        </Card>
      </main>
    </SiteShell>
  );
}
