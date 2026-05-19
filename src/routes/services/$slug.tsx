import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, CheckCircle2, FileText, ScrollText, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";
import { getService, services, type Service } from "../../lib/services";
import { Reveal } from "../../components/site/Reveal";
import { Pillars } from "../../components/site/Pillars";
import { CTA } from "../../components/site/CTA";

export const Route = createFileRoute("/services/$slug")({
  component: ServiceDetail,
  loader: ({ params }): { service: Service } => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => ({
    meta: [
      {
        title: `${loaderData?.service.acronym ?? "Service"} — PT SIS Samudera Indonesia Shakti`,
      },
      {
        name: "description",
        content: loaderData?.service.short ?? "",
      },
    ],
  }),
});

function ServiceDetail() {
  const { service: s } = Route.useLoaderData() as { service: Service };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-24 px-6 overflow-hidden grain">
        <div className="absolute inset-0 aurora" />
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-20 right-0 size-[500px] rounded-full bg-electric/15 blur-3xl"
        />
        <div className="relative mx-auto max-w-7xl">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-12"
          >
            <ArrowLeft className="size-4" /> Back to overview
          </Link>

          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-xs tracking-[0.3em] uppercase text-electric-soft mb-5"
              >
                — Maritime License
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="font-display text-6xl sm:text-8xl font-semibold leading-[0.95] tracking-tight bg-gradient-to-br from-white via-white to-[oklch(0.72_0.18_245)] bg-clip-text text-transparent"
              >
                {s.acronym}
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.25 }}
                className="mt-6 font-display text-xl sm:text-2xl text-foreground/90 max-w-2xl text-balance"
              >
                {s.name}
              </motion.div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-5 text-muted-foreground max-w-2xl leading-relaxed"
              >
                {s.description}
              </motion.p>
              {s.issuer && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.55 }}
                  className="mt-6 inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs text-muted-foreground"
                >
                  <span className="size-1.5 rounded-full bg-electric" />
                  Issued by: {s.issuer}
                </motion.div>
              )}
            </div>

            {s.highlights && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.5 }}
                className="lg:col-span-4 space-y-3"
              >
                {s.highlights.map((h) => (
                  <div
                    key={h.label}
                    className="rounded-2xl glass-strong metallic-border p-5"
                  >
                    <div className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground">
                      {h.label}
                    </div>
                    <div className="mt-1.5 font-display text-lg font-semibold text-electric-soft">
                      {h.value}
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      {s.process && (
        <section className="relative py-24 px-6">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <div className="flex items-center gap-3 mb-12">
                <ScrollText className="size-5 text-electric-soft" />
                <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight">
                  Application Process
                </h2>
              </div>
            </Reveal>

            <div className="relative">
              <div className="absolute left-[15px] top-2 bottom-2 w-px bg-gradient-to-b from-electric via-electric/30 to-transparent" />
              <ol className="space-y-4">
                {s.process.map((step, i) => (
                  <Reveal key={i} delay={i * 0.04}>
                    <li className="relative pl-12 group">
                      <div className="absolute left-0 top-1 size-8 rounded-full glass-strong grid place-items-center text-[11px] font-display font-semibold text-electric-soft">
                        {String(i + 1).padStart(2, "0")}
                      </div>
                      <div className="rounded-xl glass p-5 group-hover:bg-white/[0.04] transition-colors">
                        <div className="text-sm text-foreground/90 leading-relaxed">{step}</div>
                      </div>
                    </li>
                  </Reveal>
                ))}
              </ol>
            </div>
          </div>
        </section>
      )}

      {/* Requirements */}
      {s.requirements && (
        <section className="relative py-24 px-6">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <div className="flex items-center gap-3 mb-12">
                <FileText className="size-5 text-electric-soft" />
                <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight">
                  Key Requirements
                </h2>
              </div>
            </Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {s.requirements.map((r, i) => (
                <Reveal key={r} delay={i * 0.03}>
                  <div className="flex items-start gap-3 rounded-xl glass p-4">
                    <CheckCircle2 className="size-4 text-electric-soft mt-0.5 shrink-0" />
                    <div className="text-sm text-foreground/85 leading-relaxed">{r}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Legal */}
      {s.legal && (
        <section className="relative py-16 px-6">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <div className="rounded-2xl glass-strong metallic-border p-8">
                <div className="text-xs tracking-[0.25em] uppercase text-electric-soft mb-4">
                  Legal References
                </div>
                <ul className="space-y-2 text-sm text-foreground/85">
                  {s.legal.map((l) => (
                    <li key={l} className="flex items-start gap-3">
                      <span className="mt-1.5 size-1.5 rounded-full bg-electric" />
                      {l}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* Notes */}
      {s.notes && (
        <section className="relative py-16 px-6">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <div className="flex items-center gap-3 mb-8">
                <AlertCircle className="size-5 text-electric-soft" />
                <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight">
                  Important Notes
                </h2>
              </div>
            </Reveal>
            <div className="grid md:grid-cols-2 gap-3">
              {s.notes.map((n, i) => (
                <Reveal key={n} delay={i * 0.05}>
                  <div className="rounded-xl glass p-5 text-sm text-muted-foreground leading-relaxed">
                    {n}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <Pillars compact />

      {/* Other services */}
      <section className="relative py-20 px-6">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="text-xs tracking-[0.25em] uppercase text-electric-soft mb-6">
              — Other Services
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-3 gap-4">
            {services
              .filter((x) => x.slug !== s.slug)
              .map((x, i) => (
                <Reveal key={x.slug} delay={i * 0.06}>
                  <Link
                    to="/services/$slug"
                    params={{ slug: x.slug }}
                    className="block rounded-2xl glass p-6 hover:bg-white/[0.04] transition-colors group"
                  >
                    <div className="font-display text-2xl font-semibold tracking-tight text-electric-soft">
                      {x.acronym}
                    </div>
                    <div className="mt-2 text-sm text-foreground/80">{x.name}</div>
                  </Link>
                </Reveal>
              ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
