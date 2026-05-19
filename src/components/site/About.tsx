import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" className="relative py-32 px-6">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <Reveal>
            <div className="text-xs tracking-[0.25em] uppercase text-electric-soft mb-5">
              — About SIS
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-semibold leading-[1.05] tracking-tight text-balance">
              Experienced maritime licensing &amp; shipping documentation services.
            </h2>
          </Reveal>
        </div>

        <div className="lg:col-span-7 space-y-6 text-muted-foreground leading-relaxed">
          <Reveal delay={0.1}>
            <p>
              With PT SIS Samudera Indonesia Shakti, managing maritime permits and
              shipping documentation is now easier and more efficient. Clients no
              longer need to deal with complicated administrative processes — they
              leave everything to a professional team.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p>
              In today&apos;s dynamic and highly competitive maritime industry,
              managing shipping operations and regulatory compliance requires
              expertise, precision, and reliability. Every operational detail can
              significantly affect the smooth movement of vessels, cargo, and marine
              activities.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="text-foreground/90">
              That is why we are committed to becoming a trusted maritime partner —
              ensuring client operations continue running safely, efficiently, and
              in compliance with Indonesian maritime regulations.
            </p>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="mt-10 grid sm:grid-cols-3 gap-4">
              {[
                ["DIRJEN HUBLA", "Direct Procedural Alignment"],
                ["UU 17 / 2008", "Indonesian Shipping Law"],
                ["PP 20 / 2010", "Water Transportation"],
              ].map(([k, v]) => (
                <div
                  key={k}
                  className="glass rounded-xl p-4 metallic-border"
                >
                  <div className="font-display text-sm font-semibold text-foreground">{k}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{v}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
