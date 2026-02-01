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
              <h1 className="text-2xl font-semibold tracking-tight text-slate-900"> HANA</h1>
              <Badge>NGO</Badge>
            </div>
            <p className="mt-4 text-slate-700 leading-7"> 
             HANA is a non-partisan advocacy organization representing Haitian American interests through disciplined advocacy, policy engagement, civic education, and transnational coordination.
            </p>
          </CardContent>
        </Card>
      </main>
    </SiteShell>
  );
}
