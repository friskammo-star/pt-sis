import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Reveal } from "./Reveal";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const dur = 1600;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);
  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}

export function Trust() {
  return (
    <section className="relative py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="text-xs tracking-[0.25em] uppercase text-electric-soft mb-4">
                — Trust & Compliance
              </div>
              <h2 className="font-display text-4xl sm:text-5xl font-semibold leading-[1.05] tracking-tight text-balance">
                Anchored in Indonesian maritime law.
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Every procedure we run is directly aligned with DIRJEN HUBLA workflows
                and the regulatory framework that governs Indonesia&apos;s waters.
              </p>

              <div className="mt-8 space-y-3">
                {[
                  "Law No. 17 of 2008 — Shipping",
                  "Government Regulation No. 20 of 2010 — Water Transportation",
                  "Minister of Transportation Decree KM.33 of 2001",
                ].map((x) => (
                  <div key={x} className="flex items-start gap-3 text-sm">
                    <div className="mt-1.5 size-1.5 rounded-full bg-electric" />
                    <span className="text-foreground/85">{x}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 gap-4">
            {[
              { k: 100, s: "%", l: "Procedural Alignment with HUBLA" },
              { k: 30, s: "d", l: "Average SIUPAL Processing" },
              { k: 4, s: "", l: "Core Maritime Licenses" },
              { k: 24, s: "/7", l: "Client Operational Support" },
            ].map((x, i) => (
              <Reveal key={x.l} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -3 }}
                  className="rounded-2xl glass-strong metallic-border p-7"
                >
                  <div className="font-display text-5xl font-semibold bg-gradient-to-br from-white to-[oklch(0.72_0.18_245)] bg-clip-text text-transparent">
                    <Counter to={x.k} suffix={x.s} />
                  </div>
                  <div className="mt-3 text-xs tracking-wider uppercase text-muted-foreground">
                    {x.l}
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
