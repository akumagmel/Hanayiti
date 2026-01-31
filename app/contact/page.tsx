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
              <h1 className="text-2xl font-semibold tracking-tight text-slate-900">Contact</h1>
              <Badge>Inquiries</Badge>
            </div>
            <p className="mt-4 text-slate-700 leading-7">
              For coalition, media, press, or institutional inquiries, contact HANA through an official channel. Replace this placeholder with an official email + optional web forms when ready.
            </p>
          </CardContent>
        </Card>
      </main>
    </SiteShell>
  );
}
