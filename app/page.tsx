"use client";
import { SiteShell } from "@/components/SiteShell";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { Separator } from "@/components/ui/Separator";
import { pillars, mission, governanceSummary, statementSample } from "@/lib/content";
import { ArrowRight, FileText, Shield, Scale, Landmark, Users, Sparkles } from "lucide-react";

function PillarCard({
  title,
  desc,
  icon,
}: {
  title: string;
  desc: string;
  icon: React.ReactNode;
}) {
  return (
 <Card className="rounded-2xl shadow-soft border-white/10 bg-white/5">
    <CardContent className="p-5">
      <div className="flex items-start gap-3">
        <div className="mt-0.5 rounded-xl border border-white/10 bg-white/5 p-2 text-white">
          {icon}
        </div>
        <div>
          <div className="text-base font-semibold text-white">{title}</div>
          <div className="mt-1 text-sm leading-6 text-white/70">{desc}</div>
        </div>
      </div>
    </CardContent>
  </Card>
);

export default function Page() {
  return (
    <SiteShell>
      <main className="pt-8 sm:pt-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="grid gap-8 lg:grid-cols-12"
          >
            <section className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white/90 shadow-soft">
                <Sparkles className="h-3.5 w-3.5" />
                Non-partisan advocacy • Institutional voice • 2018–2050
              </div>

              <h1 className="mt-5 text-2xl font-semibold tracking-tight text-white sm:text-4xl">
                Disciplined advocacy for Haitian American civic and economic interests.
              </h1>

              <p className="mt-4 text-base leading-7 text-white/80 sm:text-lg">
                HANA is a non-partisan social welfare organization focused on lawful advocacy,
                policy engagement, civic education, and transnational coordination—built for
                credibility, continuity, and measured influence.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Button
                  className="bg-gold-500 text-ink-900 hover:bg-gold-400"
                  href="/advocacy/"
                >
                  Read the Position Charter <ArrowRight className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  className="border-white/25 bg-white/10 text-white hover:bg-white/15"
                  href="/statements/"
                >
                  View Latest Statement
                </Button>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                <Card className="border-white/15 bg-white/10">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 text-white">
                      <Users className="h-4 w-4" />
                      <div className="text-sm font-medium">Community focus</div>
                    </div>
                    <div className="mt-1 text-xs leading-5 text-white/80">
                      Advocacy that protects dignity and strengthens outcomes.
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-white/15 bg-white/10">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 text-white">
                      <Landmark className="h-4 w-4" />
                      <div className="text-sm font-medium">Institution-ready</div>
                    </div>
                    <div className="mt-1 text-xs leading-5 text-white/80">
                      Positions suitable for coalitions and policy tables.
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-white/15 bg-white/10">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 text-white">
                      <Scale className="h-4 w-4" />
                      <div className="text-sm font-medium">Non-partisan</div>
                    </div>
                    <div className="mt-1 text-xs leading-5 text-white/80">
                      Issue-based advocacy—no candidate endorsements.
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            <aside className="lg:col-span-5">
              <Card className="rounded-3xl shadow-soft">
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-semibold text-slate-900">
                      HANA at a glance
                    </div>
                    <Badge>501(c)(4)</Badge>
                  </div>
                  <Separator className="my-4" />

                  <div className="space-y-4">
                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                      <div className="text-xs font-semibold text-slate-700">
                        Official mission
                      </div>
                      <div className="mt-1 text-sm leading-6 text-slate-700">
                        {mission}
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 rounded-xl border border-slate-200 bg-white p-2">
                        <FileText className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-slate-900">
                          Formal recordkeeping
                        </div>
                        <div className="text-sm leading-6 text-slate-600">
                          Statements are dated, archived, and issued through authorized channels.
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 rounded-xl border border-slate-200 bg-white p-2">
                        <Shield className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-slate-900">
                          Governance discipline
                        </div>
                        <div className="text-sm leading-6 text-slate-600">
                          {governanceSummary}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    <Button variant="outline" href="/about/">
                      About
                    </Button>
                    <Button variant="outline" href="/governance/">
                      Governance
                    </Button>
                    <Button href="/contact/">Contact</Button>
                  </div>
                </CardContent>
              </Card>
            </aside>
          </motion.div>

          <section className="mt-10 pb-12">
            <div className="flex items-end justify-between gap-6">
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Advocacy pillars
                </div>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900">
                  What we focus on
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
                  Three lanes—tight, defensible, and aligned to social welfare advocacy.
                </p>
              </div>
              <Button variant="outline" className="hidden md:inline-flex" href="/advocacy/">
                View Advocacy Framework
              </Button>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <PillarCard
                icon={<Scale className="h-5 w-5" />}
                title={pillars[0].title}
                desc={pillars[0].desc}
              />
              <PillarCard
                icon={<Landmark className="h-5 w-5" />}
                title={pillars[1].title}
                desc={pillars[1].desc}
              />
              <PillarCard
                icon={<Users className="h-5 w-5" />}
                title={pillars[2].title}
                desc={pillars[2].desc}
              />
            </div>
          </section>

          <section className="pb-14">
            <div className="grid gap-4 lg:grid-cols-2">
              <Card className="rounded-2xl shadow-soft">
                <CardContent>
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <Badge>Formal Statement</Badge>
                      <span className="text-xs text-slate-500">
                        Issued: {statementSample.date}
                      </span>
                    </div>
                    <Button variant="outline" href="/statements/">
                      View Statement <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="mt-4 text-lg font-semibold text-slate-900">
                    {statementSample.title}
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {statementSample.excerpt}
                  </p>
                </CardContent>
              </Card>

              <Card className="rounded-2xl border-dashed shadow-soft">
                <CardContent>
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 rounded-xl border border-slate-200 bg-white p-2">
                      <Shield className="h-5 w-5" />
                    </div>
                    <div className="w-full">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="text-base font-semibold text-slate-900">
                          Governance & non-partisan discipline
                        </div>
                        <Button variant="outline" href="/governance/">
                          Read Governance Summary
                        </Button>
                      </div>
                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        HANA operates under a formal Charter and Bylaws with clear separation
                        between governance, operations, and advisory roles. Official statements
                        are issued only through authorized channels.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </main>
    </SiteShell>
  );
}
