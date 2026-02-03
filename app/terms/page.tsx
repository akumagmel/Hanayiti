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
                Terms of Use
              </h1>
              <div className="flex items-center gap-2">
                <Badge>Public</Badge>
                <Badge>Effective 2026</Badge>
              </div>
            </div>

            <p className="mt-4 text-slate-700 leading-7">
              By accessing or using this website, you agree to these Terms of Use. If you do not
              agree, do not use the site. These terms help protect institutional clarity,
              accuracy, and record integrity.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-soft">
          <CardContent>
            <h2 className="text-lg font-semibold tracking-tight text-slate-900">
              Purpose of the Site
            </h2>
            <p className="mt-3 text-slate-700 leading-7">
              This site provides public information about HANA, including organizational summaries,
              governance overviews, advocacy framework materials, and official statements where published.
              Content is provided for informational purposes only.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-soft">
          <CardContent>
            <h2 className="text-lg font-semibold tracking-tight text-slate-900">
              No Legal, Financial, or Immigration Advice provided
            </h2>
            <p className="mt-3 text-slate-700 leading-7">
              Nothing on this website constitutes legal, financial, tax, or immigration advice.
              You are responsible for seeking qualified professional advice for your situation.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-soft">
          <CardContent>
            <h2 className="text-lg font-semibold tracking-tight text-slate-900">
              Acceptable Use
            </h2>

            <p className="mt-3 text-slate-700 leading-7">
              You agree not to misuse this site or its content. Prohibited activity includes:
            </p>

            <ul className="mt-4 space-y-2 text-slate-700 leading-7 list-disc pl-6">
              <li>Attempting unauthorized access to systems, accounts, or data</li>
              <li>Harassment, threats, or abusive communications through site channels</li>
              <li>Uploading malicious code, spam, or automated scraping that disrupts service</li>
              <li>Misrepresenting affiliation with HANA or impersonating personnel</li>
              <li>Using site content to create misleading or false representations of HANA</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="shadow-soft">
          <CardContent>
            <h2 className="text-lg font-semibold tracking-tight text-slate-900">
              Intellectual Property & Attribution
            </h2>

            <p className="mt-3 text-slate-700 leading-7">
              Unless otherwise stated, site content, text, and branding are the property of HANA.
              You may reference public summaries with proper attribution. You may not present HANA
              materials as your own or edit content in a way that misrepresents HANA’s position.
            </p>

            <p className="mt-4 text-slate-700 leading-7">
              Official statements and public summaries should be quoted accurately and linked to the
              official source where available.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-soft">
          <CardContent>
            <h2 className="text-lg font-semibold tracking-tight text-slate-900">
              External Links
            </h2>

            <p className="mt-3 text-slate-700 leading-7">
              This site may link to external sites for reference. HANA is not responsible for the
              content, policies, or practices of third-party websites.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-soft">
          <CardContent>
            <h2 className="text-lg font-semibold tracking-tight text-slate-900">
              Changes to These Terms
            </h2>
            <p className="mt-3 text-slate-700 leading-7">
              HANA may update these Terms of Use as needed to maintain clarity and compliance without notifications.
              Updated terms will be posted on this page with an effective date.
            </p>
          </CardContent>
        </Card>
      </main>
    </SiteShell>
  );
}
