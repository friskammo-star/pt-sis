import { ShieldCheck, Zap, MessageCircle, HeartHandshake } from "lucide-react";
import { Reveal } from "./Reveal";

const pillars = [
  {
    icon: ShieldCheck,
    t: "Official Legality",
    d: "Processes follow official procedures and comply with all applicable government regulations.",
  },
  {
    icon: Zap,
    t: "Fast Process",
    d: "Licensing handled efficiently and professionally to save your valuable time.",
  },
  {
    icon: MessageCircle,
    t: "Free Consultation",
    d: "Free consultation services on requirements, procedures, and feasibility.",
  },
  {
    icon: HeartHandshake,
    t: "Friendly Service",
    d: "Wholehearted service — your satisfaction and long-term success is the priority.",
  },
];

export function Pillars({ compact = false }: { compact?: boolean }) {
  return (
    <section className={`relative px-6 ${compact ? "py-20" : "py-32"}`}>
      <div className="mx-auto max-w-7xl">
        {!compact && (
          <Reveal>
            <div className="mb-16 text-center">
              <div className="text-xs tracking-[0.25em] uppercase text-electric-soft mb-4">
                — Service Pillars
              </div>
              <h2 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight max-w-2xl mx-auto text-balance">
                Four commitments behind every license we deliver.
              </h2>
            </div>
          </Reveal>
        )}

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {pillars.map((p, i) => (
            <Reveal key={p.t} delay={i * 0.06}>
              <div className="group relative rounded-2xl glass metallic-border p-6 h-full transition-all hover:bg-white/[0.04]">
                <div className="size-11 rounded-xl bg-gradient-to-br from-electric/30 to-transparent grid place-items-center mb-6">
                  <p.icon className="size-5 text-electric-soft" strokeWidth={1.8} />
                </div>
                <div className="font-display text-lg font-semibold tracking-tight">{p.t}</div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
