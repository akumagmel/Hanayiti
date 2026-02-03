import React from "react";
import { Button } from "@/components/ui/Button";

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="text-sm font-medium text-white/85 hover:text-white transition no-underline"
    >
      {children}
    </a>
  );
}

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-dvh bg-slate-950 text-slate-100">
      {/* HEADER */}
      <header className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/hero-bg.jpg)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/95 via-slate-950/80 to-slate-950" />
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, rgba(216,181,99,0.35) 0%, rgba(216,181,99,0) 35%), radial-gradient(circle at 70% 35%, rgba(120,190,255,0.35) 0%, rgba(120,190,255,0) 40%)",
          }}
        />

        <div className="relative">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              {/* Brand */}
              <a href="/" className="flex items-center gap-3 no-underline">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#E7CF8A] via-[#D8B563] to-[#C7A24B] shadow-md">
                  <img
                    src="/hana-logo.jpg"
                    alt="Haitian American Nationals Association logo"
                    className="h-6 w-6 object-contain"
                  />
                </div>

                <div>
                  <div className="text-sm font-semibold tracking-tight text-white">
                    HANA
                  </div>
                  <div className="text-[11px] text-white/70">
                    Haitian American Nationals Association
                  </div>
                </div>
              </a>

              {/* Navigation */}
              <nav className="hidden items-center gap-6 md:flex">
                <NavLink href="/about/">About</NavLink>
                <NavLink href="/advocacy/">Advocacy</NavLink>
                <NavLink href="/statements/">Statements</NavLink>
                <NavLink href="/governance/">Governance</NavLink>
                <NavLink href="/press/">Press</NavLink>
                <NavLink href="/contact/">Contact</NavLink>
              </nav>

              {/* CTA */}
              <div className="hidden items-center gap-2 sm:flex">
                <Button
                  variant="outline"
                  className="border-white/25 bg-white/10 text-white hover:bg-white/15"
                  href="/contact/"
                >
                  Coalition Inquiry
                </Button>
                <Button
                  className="bg-gold-500 text-ink-900 hover:bg-gold-400"
                  href="/contact/"
                >
                  Support HANA
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* PAGE CONTENT */}
      <main className="flex-1">{children}</main>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="py-10">
            <div className="grid gap-10 md:grid-cols-3">
              {/* Column 1 — Identity */}
              <div>
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#E7CF8A] via-[#D8B563] to-[#C7A24B] shadow-md">
                    <img
                      src="/hana-logo.jpg"
                      alt="Haitian American Nationals Association logo"
                      className="h-6 w-6 object-contain"
                    />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">HANA</div>
                    <div className="text-[11px] text-white/70">
                      Haitian American Nationals Association
                    </div>
                  </div>
                </div>

                <div className="mt-4 text-xs leading-6 text-white/60">
                  Non-partisan social organization focused on lawful advocacy,
                  policy engagement, civic education, and transnational coordination.
                </div>

                <div className="mt-4 text-xs text-white/60">
                  Official positions and statements are issued through authorized channels.
                </div>
              </div>

              {/* Column 2 — Locations */}
              <div>
                <div className="text-xs font-semibold tracking-wide text-white/80">
                  Locations
                </div>

                <div className="mt-3 space-y-4 text-sm">
                  <div>
                    <div className="text-white/80 font-medium text-sm">
                      Headquarters (Haiti)
                    </div>
                    <div className="mt-1 text-white/60 text-xs leading-5">
                      Turgeau, Rue Baussan #35
                      <br />
                      Port-au-Prince, Haiti
                    </div>
                  </div>

                  <div>
                    <div className="text-white/80 font-medium text-sm">
                      Florida Chapter
                    </div>
                    <div className="mt-1 text-white/60 text-xs leading-5">
                      General Delivery
                      <br />
                      432 Deerfield Beach, Florida 33443
                    </div>
                  </div>

                  <div>
                    <div className="text-white/80 font-medium text-sm">
                      New York (Temporary Location)
                    </div>
                    <div className="mt-1 text-white/60 text-xs leading-5">
                      1445 Saint Paul St
                      <br />
                      Rochester, NY 14621
                    </div>
                  </div>
                </div>
              </div>

              {/* Column 3 — Navigation / Legal */}
              <div>
                <div className="text-xs font-semibold tracking-wide text-white/80">
                  Links
                </div>

                <div className="mt-3 grid grid-cols-2 gap-3 text-sm">
                  <a href="/about/" className="text-white/70 hover:text-white no-underline">About</a>
                  <a href="/advocacy/" className="text-white/70 hover:text-white no-underline">Advocacy</a>
                  <a href="/governance/" className="text-white/70 hover:text-white no-underline">Governance</a>
                  <a href="/statements/" className="text-white/70 hover:text-white no-underline">Statements</a>
                  <a href="/press/" className="text-white/70 hover:text-white no-underline">Press</a>
                  <a href="/contact/" className="text-white/70 hover:text-white no-underline">Contact</a>
                </div>

                <div className="mt-6 text-xs font-semibold tracking-wide text-white/80">
                  Policies
                </div>

                <div className="mt-3 grid grid-cols-2 gap-3 text-sm">
                  <a href="/privacy/" className="text-white/70 hover:text-white no-underline">Privacy Policy</a>
                  <a href="/terms/" className="text-white/70 hover:text-white no-underline">Terms of Use</a>
                  <a href="/policies/" className="text-white/70 hover:text-white no-underline">Policies</a>
                  <a href="/accessibility/" className="text-white/70 hover:text-white no-underline">Accessibility</a>
                </div>

                <div className="mt-6 text-[11px] leading-5 text-white/55">
                  Public summaries are provided for transparency. Internal governance instruments,
                  procedures, and controls remain restricted organizational records.
                </div>
              </div>
            </div>

            {/* Bottom bar */}
            <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="text-xs text-white/60">
                © 2026 Haitian American Nationals Association (HANA). All rights reserved.
              </div>
              <div className="text-xs text-white/60">
                • Non-Partisan • Institutional Engagement
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
