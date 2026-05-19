import { Reveal } from "./Reveal";

const items = [
  {
    t: "Proven Maritime Expertise",
    d: "Experienced maritime professionals with deep knowledge of shipping regulations, licensing procedures, and operational standards.",
  },
  {
    t: "Customized Business Solutions",
    d: "Tailored licensing and consultancy aligned with each client's business objectives and industry requirements.",
  },
  {
    t: "Operational Efficiency",
    d: "Streamlined processes and industry best practices that accelerate permit processing and improve effectiveness.",
  },
  {
    t: "Safety & Regulatory Compliance",
    d: "Every process follows applicable Indonesian maritime regulations — helping clients operate securely and professionally.",
  },
];

export function WhyUs() {
  return (
    <section id="why" className="relative py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="mb-16 max-w-3xl">
            <div className="text-xs tracking-[0.25em] uppercase text-electric-soft mb-4">
              — Why Choose Us
            </div>
            <h2 className="font-display text-4xl sm:text-6xl font-semibold leading-[1.02] tracking-tight text-balance">
              Why teams choose PT SIS Samudera Indonesia Shakti.
            </h2>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-px rounded-3xl overflow-hidden glass-strong">
          {items.map((x, i) => (
            <Reveal key={x.t} delay={i * 0.07}>
              <div className="bg-background/40 p-10 h-full group hover:bg-background/20 transition-colors">
                <div className="flex items-baseline gap-3 mb-5">
                  <div className="font-display text-xs text-electric-soft tracking-[0.3em]">
                    0{i + 1}
                  </div>
                  <div className="h-px flex-1 bg-border" />
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight">
                  {x.t}
                </h3>
                <p className="mt-4 text-muted-foreground leading-relaxed max-w-md">
                  {x.d}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
