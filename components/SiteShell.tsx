import React from "react";
import { Button } from "@/components/ui/Button";

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className="text-sm font-medium text-white/85 hover:text-white transition no-underline">
      {children}
    </a>
  );
}

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url(/hero-bg.jpg)" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-900/95 via-ink-900/75 to-slate-50" />
        <div className="absolute inset-0 opacity-40" style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(216,181,99,0.35) 0%, rgba(216,181,99,0) 35%), radial-gradient(circle at 70% 35%, rgba(120,190,255,0.35) 0%, rgba(120,190,255,0) 40%)"
        }} />
        <div className="relative">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <a href="/" className="flex items-center gap-3 no-underline">
                <img src="/logo-placeholder.svg" alt="HANA Yiti logo" className="h-9 w-9 rounded-xl" />
                <div>
                  <div className="text-sm font-semibold tracking-tight text-white">HANA Yiti</div>
                  <div className="text-[11px] text-white/70">Haitian American Nationals Association</div>
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
                <Button className="bg-gold-500 text-ink-900 hover:bg-gold-400" href="/contact/">
                  Support HANA
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {children}

      <footer className="border-t bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="text-sm font-semibold text-slate-900">HANA Yiti</div>
              <div className="mt-1 text-xs text-slate-500">
                Non-partisan advocacy organization • Official statements are issued through authorized channels.
              </div>
            </div>
            <div className="flex flex-wrap gap-4 text-sm">
              <a href="/governance/" className="text-slate-600 hover:text-slate-900 no-underline">Governance</a>
              <a href="/statements/" className="text-slate-600 hover:text-slate-900 no-underline">Statements</a>
              <a href="/advocacy/" className="text-slate-600 hover:text-slate-900 no-underline">Advocacy</a>
              <a href="/contact/" className="text-slate-600 hover:text-slate-900 no-underline">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
