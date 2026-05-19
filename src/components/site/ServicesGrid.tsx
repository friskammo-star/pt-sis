import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight, Ship, Compass, FileBadge, Anchor } from "lucide-react";
import { services } from "../../lib/services";
import { Reveal } from "./Reveal";

const icons = {
  siuppak: Compass,
  siupal: Ship,
  siupkk: Anchor,
  siopsus: FileBadge,
} as const;

export function ServicesGrid() {
  return (
    <section id="services" className="relative py-32 px-6">
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-electric/40 to-transparent"
      />
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
            <div>
              <div className="text-xs tracking-[0.25em] uppercase text-electric-soft mb-4">
                — Core Services
              </div>
              <h2 className="font-display text-4xl sm:text-6xl font-semibold leading-[1.02] tracking-tight max-w-2xl text-balance">
                Four licenses. One trusted partner.
              </h2>
            </div>
            <p className="max-w-sm text-muted-foreground">
              We handle the full spectrum of Indonesian maritime licensing — from
              crew placement to special operations — under one professional roof.
            </p>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-5">
          {services.map((s, i) => {
            const Icon = icons[s.slug];
            return (
              <Reveal key={s.slug} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 200, damping: 18 }}
                  className="group relative rounded-3xl glass-strong metallic-border p-8 sm:p-10 overflow-hidden h-full"
                >
                  {/* hover glow sweep */}
                  <div className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    style={{
                      background:
                        "radial-gradient(400px circle at var(--x,50%) var(--y,50%), oklch(0.72 0.18 245 / 0.18), transparent 60%)",
                    }}
                  />
                  <div className="absolute -top-24 -right-24 size-64 rounded-full bg-electric/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                  <div className="relative flex items-start justify-between mb-10">
                    <div className="size-12 rounded-xl glass grid place-items-center">
                      <Icon className="size-5 text-electric-soft" strokeWidth={1.8} />
                    </div>
                    <Link
                      to="/services/$slug"
                      params={{ slug: s.slug }}
                      className="inline-flex items-center gap-1.5 text-xs tracking-wider uppercase text-muted-foreground group-hover:text-electric-soft transition-colors"
                    >
                      Learn more
                      <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </div>

                  <div className="relative">
                    <div className="font-display text-5xl sm:text-6xl font-semibold tracking-tight bg-gradient-to-br from-white to-[oklch(0.72_0.18_245)] bg-clip-text text-transparent">
                      {s.acronym}
                    </div>
                    <div className="mt-3 text-sm font-medium text-foreground/90">
                      {s.name}
                    </div>
                    <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-md">
                      {s.short}
                    </p>
                  </div>

                  <Link
                    to="/services/$slug"
                    params={{ slug: s.slug }}
                    className="absolute inset-0"
                    aria-label={s.name}
                  />
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
