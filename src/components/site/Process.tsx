import { motion } from "framer-motion";
import { Reveal } from "./Reveal";

const steps = [
  { n: "01", t: "Free Consultation", d: "We review your business, scope, and the licenses you actually need." },
  { n: "02", t: "Document Assembly", d: "Our specialists assemble, verify, and structure every required document." },
  { n: "03", t: "Authority Submission", d: "Direct submission to DIRJEN HUBLA via the proper Sub-Directorate channel." },
  { n: "04", t: "Audit & Verification", d: "We coordinate audit scheduling, on-site verification, and corrective actions." },
  { n: "05", t: "Approval & Signing", d: "Documents reach Director and DIRJEN HUBLA for approval and signing." },
  { n: "06", t: "License Delivery", d: "Your official license is registered, numbered, and delivered to you." },
];

export function Process() {
  return (
    <section id="process" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 aurora opacity-40" />
      <div className="relative mx-auto max-w-7xl">
        <Reveal>
          <div className="max-w-3xl mb-20">
            <div className="text-xs tracking-[0.25em] uppercase text-electric-soft mb-4">
              — How It Works
            </div>
            <h2 className="font-display text-4xl sm:text-6xl font-semibold leading-[1.02] tracking-tight text-balance">
              Complex licensing,
              <br />
              <span className="text-muted-foreground">choreographed elegantly.</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.06}>
              <motion.div
                whileHover={{ y: -3 }}
                className="relative rounded-2xl glass p-7 h-full"
              >
                <div className="flex items-center justify-between mb-8">
                  <div className="font-display text-xs tracking-[0.3em] text-electric-soft">
                    STEP {s.n}
                  </div>
                  <div className="h-px w-12 bg-gradient-to-r from-electric/60 to-transparent" />
                </div>
                <div className="font-display text-2xl font-semibold tracking-tight">{s.t}</div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
