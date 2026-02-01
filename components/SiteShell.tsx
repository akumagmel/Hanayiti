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
              <a href="/" className="flex items-center gap-3 no-underline">
                <img
                  src="/logo-placeholder.svg"
                  alt="HANA logo"
                  className="h-9 w-9 rounded-xl"
                />
                <div>
                  <div className="text-sm font-semibold tracking-tight text-white">
                    HANA
                  </div>
                  <div className="text-[11px] text-white/70">
                    Haitian American Nationals Association
                  </div>
                </div>
              </a>

              <nav className="hidden items-center gap-6 md:flex">
                <NavLink href="/about/">About</NavLink>
                <NavLink href="/advocacy/">Advocacy</NavLink>
                <NavLink href="/statements/">Statements</NavLink>
                <NavLink href="/governance/">Governance</NavLink>
                <NavLink href="/press/">Press</NavLink>
                <NavLink href="/contact/">Contact</NavLink>
              </nav>

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
          <div className="flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="text-sm font-semibold text-white">HANA </div>
              <div className="mt-1 text-xs text-white/60">
                Non-partisan advocacy organization • Official statements are issued
                through authorized channels.
              </div>
            </div>
            <div className="flex flex-wrap gap-4 text-sm">
              <a
                href="/governance/"
                className="text-white/70 hover:text-white no-underline"
              >
                Governance
              </a>
              <a
                href="/statements/"
                className="text-white/70 hover:text-white no-underline"
              >
                Statements
              </a>
              <a
                href="/advocacy/"
                className="text-white/70 hover:text-white no-underline"
              >
                Advocacy
              </a>
              <a
                href="/contact/"
                className="text-white/70 hover:text-white no-underline"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
