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
              <h1 className="text-2xl font-semibold tracking-tight text-slate-900">Advocacy Framework</h1>
              <Badge>2026–2030</Badge>
            </div>
            <p className="mt-4 text-slate-700 leading-7">
              HANA’s advocacy posture is built on three pillars: (1) Advocacy & Representation, (2) Civic & Economic Empowerment, and (3) Identity & National Dignity. Positions are published formally and archived.
            </p>
          </CardContent>
        </Card>
      </main>
    </SiteShell>
  );
}
