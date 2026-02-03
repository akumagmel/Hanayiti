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
                Privacy Policy
              </h1>
              <div className="flex items-center gap-2">
                <Badge>Public</Badge>
                <Badge>Updated 2026</Badge>
              </div>
            </div>

            <p className="mt-4 text-slate-700 leading-7">
              This Privacy Policy explains how the Haitian American Nationals Association (HANA)
              collects, uses, and protects information when you visit or interact with this website.
              HANA is a non-partisan organization and maintains a disciplined
              approach to record integrity and information handling.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-soft">
          <CardContent>
            <h2 className="text-lg font-semibold tracking-tight text-slate-900">
              Information We Collect
            </h2>

            <div className="mt-3 space-y-4 text-slate-700 leading-7">
              <p>
                <span className="font-semibold text-slate-900">Information you provide:</span>{" "}
                If you contact HANA through forms, email links, or other channels, we may receive
                information such as your name, email address, organization, and the contents of your
                message.
              </p>
              <p>
                <span className="font-semibold text-slate-900">Basic usage data:</span>{" "}
                Like most websites, we may collect limited technical information (e.g., browser type,
                device type, pages visited in order to maintain site performance and security.
              </p>
              <p>
                <span className="font-semibold text-slate-900">Cookies:</span>{" "}
                This site may use cookies or similar technologies for basic functionality, analytics,
                and security. You can control cookies through your browser settings.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-soft">
          <CardContent>
            <h2 className="text-lg font-semibold tracking-tight text-slate-900">
              How We Use Information
            </h2>

            <ul className="mt-3 space-y-2 text-slate-700 leading-7 list-disc pl-6">
              <li>To respond to inquiries and coordinate communication</li>
              <li>To maintain site security, prevent abuse, and troubleshoot issues</li>
              <li>To improve site clarity and usability (non-identifying analytics)</li>
              <li>To maintain organizational record integrity where appropriate</li>
            </ul>

            <p className="mt-4 text-slate-700 leading-7">
              HANA does not sell personal information. We do not use site data to target or profile
              individuals for political campaign activity.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-soft">
          <CardContent>
            <h2 className="text-lg font-semibold tracking-tight text-slate-900">
              Sharing of Information
            </h2>

            <div className="mt-3 space-y-4 text-slate-700 leading-7">
              <p>
                HANA may share limited information only when necessary for:
              </p>
              <ul className="space-y-2 list-disc pl-6">
                <li>Service providers supporting website operation (e.g., hosting, security)</li>
                <li>Compliance with lawful requests, court orders, or applicable legal obligations</li>
                <li>Protecting the rights, safety, and integrity of HANA and the public</li>
              </ul>
              <p>
                Where feasible, HANA limits sharing to the minimum necessary and prioritizes
                institutional discretion.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-soft">
          <CardContent>
            <h2 className="text-lg font-semibold tracking-tight text-slate-900">
              Data Security & Retention
            </h2>

            <p className="mt-3 text-slate-700 leading-7">
              HANA applies reasonable administrative and technical safeguards to protect information.
              No system is 100% secure; however, we work to reduce risk and prevent unauthorized access.
            </p>

            <p className="mt-4 text-slate-700 leading-7">
              Information is retained only as long as necessary for operational, security, or
              record integrity purposes, or as required by law.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-soft">
          <CardContent>
            <h2 className="text-lg font-semibold tracking-tight text-slate-900">
              Your Choices
            </h2>

            <ul className="mt-3 space-y-2 text-slate-700 leading-7 list-disc pl-6">
              <li>You may disable cookies in your browser settings.</li>
              <li>
                You may request updates or corrections to information you submitted by contacting
                HANA through the Contact page.
              </li>
            </ul>

            <p className="mt-4 text-slate-700 leading-7">
              For privacy-related questions, use the official contact channel listed on the Contact page.
            </p>
          </CardContent>
        </Card>
      </main>
    </SiteShell>
  );
}
