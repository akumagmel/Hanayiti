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
                Accessibility
              </h1>
              <div className="flex items-center gap-2">
                <Badge>Public</Badge>
                <Badge>2026</Badge>
              </div>
            </div>

            <p className="mt-4 text-slate-700 leading-7">
              HANA is committed to providing a website that is accessible, usable, and readable
              for the broadest audience possible, including users who rely on assistive technologies.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-soft">
          <CardContent>
            <h2 className="text-lg font-semibold tracking-tight text-slate-900">
              Accessibility Practices
            </h2>

            <ul className="mt-3 space-y-2 text-slate-700 leading-7 list-disc pl-6">
              <li>Clear typography and readable contrast where feasible</li>
              <li>Semantic structure (headings, lists) for screen reader clarity</li>
              <li>Keyboard-friendly navigation for core interactions where feasible</li>
              <li>Alt text on key images and logos</li>
              <li>Mobile-responsive layout for accessibility across devices</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="shadow-soft">
          <CardContent>
            <h2 className="text-lg font-semibold tracking-tight text-slate-900">
              Reporting an Issue
            </h2>
            <p className="mt-3 text-slate-700 leading-7">
              If you experience difficulty accessing content on this site, please contact HANA through
              the Contact page and include:
            </p>

            <ul className="mt-4 space-y-2 text-slate-700 leading-7 list-disc pl-6">
              <li>The page URL (or the page name)</li>
              <li>A description of the issue</li>
              <li>Your device and browser</li>
              <li>The assistive technology used (if applicable)</li>
            </ul>

            <p className="mt-4 text-slate-700 leading-7">
              We will make reasonable efforts to address issues and improve access over time.
            </p>
          </CardContent>
        </Card>
      </main>
    </SiteShell>
  );
}
