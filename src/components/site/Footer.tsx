import { Link } from "@tanstack/react-router";
import { Anchor } from "lucide-react";
import { services } from "../../lib/services";

export function Footer() {
  return (
    <footer className="relative border-t border-border px-6 py-16">
      <div className="mx-auto max-w-7xl grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2.5">
            <div className="size-8 rounded-lg bg-gradient-to-br from-[oklch(0.72_0.18_245)] to-[oklch(0.45_0.18_265)] grid place-items-center">
              <Anchor className="size-4 text-white" strokeWidth={2.4} />
            </div>
            <div className="font-display font-semibold tracking-tight">SIS Samudera</div>
          </div>
          <p className="mt-4 text-sm text-muted-foreground max-w-xs leading-relaxed">
            Professional &amp; trusted maritime licensing consultant for Indonesia&apos;s
            shipping industry.
          </p>
        </div>

        <div>
          <div className="text-xs tracking-[0.25em] uppercase text-muted-foreground mb-4">Services</div>
          <ul className="space-y-2 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link to="/services/$slug" params={{ slug: s.slug }} className="hover:text-electric-soft transition-colors">
                  {s.acronym}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-xs tracking-[0.25em] uppercase text-muted-foreground mb-4">Company</div>
          <ul className="space-y-2 text-sm">
            <li><a href="/#about" className="hover:text-electric-soft transition-colors">About</a></li>
            <li><a href="/#process" className="hover:text-electric-soft transition-colors">Process</a></li>
            <li><a href="/#why" className="hover:text-electric-soft transition-colors">Why Us</a></li>
            <li><a href="/#contact" className="hover:text-electric-soft transition-colors">Contact</a></li>
          </ul>
        </div>

        <div>
          <div className="text-xs tracking-[0.25em] uppercase text-muted-foreground mb-4">Contact</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>contact@sis-samudera.id</li>
            <li>+62 812 0000 0000</li>
            <li>Jakarta, Indonesia</li>
          </ul>
        </div>
      </div>
      <div className="mx-auto max-w-7xl mt-12 pt-6 border-t border-border flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground">
        <div>© {new Date().getFullYear()} PT SIS Samudera Indonesia Shakti. All rights reserved.</div>
        <div>Aligned with UU 17/2008 · PP 20/2010 · KM.33/2001</div>
      </div>
    </footer>
  );
}
