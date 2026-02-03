"use client";

import React from "react";
import { SiteShell } from "@/components/SiteShell";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Separator } from "@/components/ui/Separator";

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

  const subject = `Membership Intake — ${values.tier || "Unspecified"} — ${
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

3) Interest Areas (choose / describe)
${values.areas || "N/A"}

4) Contribution Statement
${values.message}

5) Compliance Acknowledgement
- Applicant affirms non-partisan posture and understands membership does not authorize representation of HANA unless expressly designated.

— End —`;

  return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
    body
  )}`;
}

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
    form.fullName &&
    form.email &&
    form.location &&
    form.tier &&
    form.message &&
    form.agree;

  return (
    <SiteShell>
      <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <Card className="shadow-soft">
          <CardContent>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-2xl font-semibold tracking-tight text-slate-900">
                    Membership
                  </h1>
                  <Badge>Social Welfare</Badge>
                </div>
                <p className="mt-3 text-slate-700 leading-7">
                  Membership supports lawful, non-partisan advocacy, civic education, and
                  long-range institutional engagement across Haiti and the diaspora.
                </p>
              </div>

              {/* Buttons side-by-side (as requested) */}
              <div className="flex flex-wrap gap-2">
                <Button href="#tiers">Request Membership</Button>
                <Button variant="outline" href="#intake">
                  Membership Intake
                </Button>
              </div>
            </div>

            <Separator className="my-6" />

            {/* TIERS */}
            <section id="tiers" className="grid gap-4 lg:grid-cols-3">
              <Card className="bg-slate-50">
                <CardContent className="p-5">
                  <div className="flex items-center justify-between gap-2">
                    <div className="text-sm font-semibold text-slate-900">
                      Supporter
                    </div>
                    <Badge>$29/mo</Badge>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Sustains civic education and issue-based advocacy work with consistent monthly support.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-slate-50">
                <CardContent className="p-5">
                  <div className="flex items-center justify-between gap-2">
                    <div className="text-sm font-semibold text-slate-900">
                      Member
                    </div>
                    <Badge>$39/mo</Badge>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    For active participants supporting coordination, documentation, and community-facing work.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-slate-50">
                <CardContent className="p-5">
                  <div className="flex items-center justify-between gap-2">
                    <div className="text-sm font-semibold text-slate-900">
                      Partner Affiliate
                    </div>
                    <Badge>$89/mo</Badge>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    For organizations and institutional allies supporting sustained engagement and program continuity.
                  </p>
                </CardContent>
              </Card>
            </section>

            <Separator className="my-6" />

            {/* INTAKE */}
            <section id="intake">
              <Card className="shadow-soft">
                <CardContent className="p-5">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <div className="text-lg font-semibold tracking-tight text-slate-900">
                          Membership Intake
                        </div>
                        <Badge>Structured Email</Badge>
                      </div>
                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        This form prepares a structured intake email to{" "}
                        <span className="font-semibold">membership@hanayiti.org</span>.
                        Review the details, then submit through your email client for record integrity.
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      <Button
                        href={canSubmit ? buildMailto({
                          fullName: form.fullName,
                          email: form.email,
                          phone: form.phone,
                          location: form.location,
                          tier: form.tier,
                          org: form.org,
                          areas: form.areas,
                          message: form.message,
                        }) : "#"}
                        variant={canSubmit ? "default" : "outline"}
                      >
                        Generate Email
                      </Button>
                      <Button variant="outline" href="/contact/">
                        Contact Instead
                      </Button>
                    </div>
                  </div>

                  <Separator className="my-5" />

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="grid gap-2">
                      <label className="text-xs font-semibold text-slate-700">
                        Full Name
                      </label>
                      <input
                        className="h-10 rounded-md border border-slate-200 bg-white px-3 text-sm text-slate-900"
                        value={form.fullName}
                        onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                        required
                      />
                    </div>

                    <div className="grid gap-2">
                      <label className="text-xs font-semibold text-slate-700">
                        Email
                      </label>
                      <input
                        className="h-10 rounded-md border border-slate-200 bg-white px-3 text-sm text-slate-900"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        type="email"
                        required
                      />
                    </div>

                    <div className="grid gap-2">
                      <label className="text-xs font-semibold text-slate-700">
                        Phone / WhatsApp (optional)
                      </label>
                      <input
                        className="h-10 rounded-md border border-slate-200 bg-white px-3 text-sm text-slate-900"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      />
                    </div>

                    <div className="grid gap-2">
                      <label className="text-xs font-semibold text-slate-700">
                        Location
                      </label>
                      <input
                        className="h-10 rounded-md border border-slate-200 bg-white px-3 text-sm text-slate-900"
                        value={form.location}
                        onChange={(e) => setForm({ ...form, location: e.target.value })}
                        placeholder="Haiti / Florida / New York / Other"
                        required
                      />
                    </div>

                    <div className="grid gap-2 md:col-span-2">
                      <label className="text-xs font-semibold text-slate-700">
                        Membership Tier Requested
                      </label>
                      <select
                        className="h-10 rounded-md border border-slate-200 bg-white px-3 text-sm text-slate-900"
                        value={form.tier}
                        onChange={(e) => setForm({ ...form, tier: e.target.value })}
                        required
                      >
                        <option value="">Select one</option>
                        <option value="Supporter ($29/mo)">Supporter ($29/mo)</option>
                        <option value="Member ($39/mo)">Member ($39/mo)</option>
                        <option value="Partner Affiliate ($89/mo)">Partner Affiliate ($89/mo)</option>
                      </select>
                      <p className="text-[11px] text-slate-500 leading-5">
                        Partner Affiliate is intended for organizations, coalitions, and civic bodies.
                      </p>
                    </div>

                    <div className="grid gap-2 md:col-span-2">
                      <label className="text-xs font-semibold text-slate-700">
                        Organization (optional)
                      </label>
                      <input
                        className="h-10 rounded-md border border-slate-200 bg-white px-3 text-sm text-slate-900"
                        value={form.org}
                        onChange={(e) => setForm({ ...form, org: e.target.value })}
                        placeholder="If applying as an organization or partner"
                      />
                    </div>

                    <div className="grid gap-2 md:col-span-2">
                      <label className="text-xs font-semibold text-slate-700">
                        Interest Areas (optional)
                      </label>
                      <input
                        className="h-10 rounded-md border border-slate-200 bg-white px-3 text-sm text-slate-900"
                        value={form.areas}
                        onChange={(e) => setForm({ ...form, areas: e.target.value })}
                        placeholder="Civic education, policy documentation, diaspora coordination, economic empowerment, human rights, etc."
                      />
                    </div>

                    <div className="grid gap-2 md:col-span-2">
                      <label className="text-xs font-semibold text-slate-700">
                        Contribution Statement
                      </label>
                      <textarea
                        className="min-h-[120px] rounded-md border border-slate-200 bg-white p-3 text-sm text-slate-900"
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        placeholder="Tell us your background and how you want to contribute."
                        required
                      />
                    </div>
                  </div>

                  <label className="mt-4 flex items-start gap-2 text-xs text-slate-600">
                    <input
                      type="checkbox"
                      checked={form.agree}
                      onChange={(e) => setForm({ ...form, agree: e.target.checked })}
                      className="mt-1"
                      required
                    />
                    <span>
                      I understand HANA is non-partisan and issue-based. Membership does not authorize
                      representation of HANA unless explicitly designated.
                    </span>
                  </label>

                  <p className="mt-3 text-[11px] text-slate-500 leading-5">
                    Clicking “Generate Email” prepares a structured intake email to membership@hanayiti.org.
                    You will send it from your own email client for record integrity.
                  </p>
                </CardContent>
              </Card>
            </section>
          </CardContent>
        </Card>
      </main>
    </SiteShell>
  );
}
