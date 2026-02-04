"use client";

import React from "react";
import { SiteShell } from "@/components/SiteShell";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Separator } from "@/components/ui/Separator";

/* -----------------------------
   Helper: build structured email
------------------------------ */
function buildMailto(values: {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  tier: string;
  org: string;
  areas: string;
  message: string;
}) {
  const to = "membership@hanayiti.org";
  const subject = `HANA Membership Intake — ${values.tier || "Unspecified"} — ${
    values.fullName || "Applicant"
  }`;

  const body = `HANA MEMBERSHIP INTAKE (Structured)

1) Applicant
- Full Name: ${values.fullName}
- Email: ${values.email}
- Phone / WhatsApp: ${values.phone || "N/A"}
- Location: ${values.location}

2) Membership Tier Requested
- Tier: ${values.tier}
- Organization (if any): ${values.org || "N/A"}

3) Interest Areas
${values.areas || "N/A"}

4) Contribution Statement
${values.message}

5) Acknowledgement
- Applicant understands HANA is non-partisan and issue-based.
- Membership does not authorize representing HANA unless expressly designated.

— End —
`;

  return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
    body
  )}`;
}

/* -----------------------------
   Page
------------------------------ */
export default function Page() {
  const [form, setForm] = React.useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    tier: "",
    org: "",
    areas: "",
    message: "",
    agree: false,
  });

  const canSubmit =
    !!form.fullName &&
    !!form.email &&
    !!form.location &&
    !!form.tier &&
    !!form.message &&
    form.agree;

  const mailtoLink = buildMailto({
    fullName: form.fullName,
    email: form.email,
    phone: form.phone,
    location: form.location,
    tier: form.tier,
    org: form.org,
    areas: form.areas,
    message: form.message,
  });

  return (
    <SiteShell>
      <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <Card className="shadow-soft">
          <CardContent>
            <div className="flex items-center justify-between gap-3">
              <h1 className="text-2xl font-semibold tracking-tight text-slate-900">
                Membership
              </h1>
              <Badge>Join HANA</Badge>
            </div>
            <p className="mt-4 text-slate-700 leading-7">
              Membership in the Haitian American Nationals Association (HANA)
              supports disciplined, non-partisan advocacy, civic education, and
              long-term institutional engagement on behalf of Haitian Americans
              in Haiti and across the diaspora.
            </p>
          </CardContent>
        </Card>

        {/* Membership Tiers */}
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <Card className="shadow-soft">
            <CardContent className="p-5">
              <div className="flex items-center justify-between">
                <div className="text-sm font-semibold text-slate-900">
                  Supporter
                </div>
                <Badge>$29 / month</Badge>
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                For individuals who wish to support HANA’s mission and receive
                updates, publications, and invitations to public briefings.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-soft">
            <CardContent className="p-5">
              <div className="flex items-center justify-between">
                <div className="text-sm font-semibold text-slate-900">
                  Member
                </div>
                <Badge>$39 / month</Badge>
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                For engaged participants seeking structured involvement in
                advocacy initiatives, civic education, and working groups.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-soft">
            <CardContent className="p-5">
              <div className="flex items-center justify-between">
                <div className="text-sm font-semibold text-slate-900">
                  Partner Affiliate
                </div>
                <Badge>$89 / month</Badge>
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                For organizations, professionals, and institutions seeking
                formal alignment and coordination with HANA.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Intake Form */}
        <Card className="shadow-soft mt-8">
          <CardContent className="p-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <div className="text-lg font-semibold tracking-tight text-slate-900">
                    Membership Intake
                  </div>
                  <Badge>membership@hanayiti.org</Badge>
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Complete the intake below. A structured email will be generated
                  and sent from your own email client for proper records.
                </p>
              </div>

              <Button
                href={canSubmit ? mailtoLink : "#"}
                variant="primary"
                aria-disabled={!canSubmit}
                className={!canSubmit ? "pointer-events-none opacity-60" : ""}
              >
                Generate Email
              </Button>
            </div>

            <Separator className="my-5" />

            <div className="grid gap-4 md:grid-cols-2">
              <input
                className="h-10 rounded-md border px-3 text-sm"
                placeholder="Full Name"
                value={form.fullName}
                onChange={(e) =>
                  setForm({ ...form, fullName: e.target.value })
                }
              />
              <input
                className="h-10 rounded-md border px-3 text-sm"
                placeholder="Email"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
              <input
                className="h-10 rounded-md border px-3 text-sm"
                placeholder="Phone / WhatsApp (optional)"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />
              <input
                className="h-10 rounded-md border px-3 text-sm"
                placeholder="Location"
                value={form.location}
                onChange={(e) =>
                  setForm({ ...form, location: e.target.value })
                }
              />

              <select
                className="h-10 rounded-md border px-3 text-sm md:col-span-2"
                value={form.tier}
                onChange={(e) => setForm({ ...form, tier: e.target.value })}
              >
                <option value="">Select Membership Tier</option>
                <option value="Supporter ($29/mo)">Supporter ($29/mo)</option>
                <option value="Member ($39/mo)">Member ($39/mo)</option>
                <option value="Partner Affiliate ($89/mo)">
                  Partner Affiliate ($89/mo)
                </option>
              </select>

              <input
                className="h-10 rounded-md border px-3 text-sm md:col-span-2"
                placeholder="Organization (optional)"
                value={form.org}
                onChange={(e) => setForm({ ...form, org: e.target.value })}
              />

              <textarea
                className="min-h-[120px] rounded-md border p-3 text-sm md:col-span-2"
                placeholder="Contribution statement"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
            </div>

            <label className="mt-4 flex gap-2 text-xs text-slate-600">
              <input
                type="checkbox"
                checked={form.agree}
                onChange={(e) =>
                  setForm({ ...form, agree: e.target.checked })
                }
              />
              I understand HANA is non-partisan and membership does not authorize
              representation unless designated.
            </label>
          </CardContent>
        </Card>
      </main>
    </SiteShell>
  );
}
