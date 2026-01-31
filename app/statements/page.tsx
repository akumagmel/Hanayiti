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
              <h1 className="text-2xl font-semibold tracking-tight text-slate-900">Statements</h1>
              <Badge>Archive</Badge>
            </div>
            <p className="mt-4 text-slate-700 leading-7">
              This page hosts HANA’s formal statements. Start with the Latest Statement for the most current record. Each statement is dated, measured, and issued through authorized channels to preserve clarity and continuity.
            </p>
<div className="mt-4 flex flex-wrap gap-2">
  <a href="/statements/latest/" className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold bg-ink-800 text-white hover:bg-ink-700 no-underline">
    Latest Statement
  </a>
  <a href="/press/" className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold border border-slate-200 bg-white text-slate-900 hover:bg-slate-50 no-underline">
    Press / Media Kit
  </a>
</div>

          </CardContent>
        </Card>
      </main>
    </SiteShell>
  );
}
