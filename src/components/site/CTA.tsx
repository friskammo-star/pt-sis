import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

export function CTA() {
  return (
    <section className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl glass-strong metallic-border p-10 sm:p-16">
            <div className="absolute -top-40 -right-40 size-[420px] rounded-full bg-electric/20 blur-3xl" />
            <div className="relative max-w-2xl">
              <h3 className="font-display text-3xl sm:text-5xl font-semibold tracking-tight leading-[1.05] text-balance">
                Join PT SIS Samudera Indonesia Shakti today.
              </h3>
              <p className="mt-5 text-muted-foreground leading-relaxed max-w-xl">
                Innovative, reliable, and high-quality maritime solutions that help
                companies achieve their goals in Indonesia&apos;s competitive sea
                transportation industry.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full bg-electric px-6 py-3.5 text-sm font-medium text-primary-foreground glow-electric"
                >
                  Start Your Licensing Process
                  <ArrowRight className="size-4" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full glass px-6 py-3.5 text-sm font-medium hover:bg-white/5 transition"
                >
                  Request Free Consultation
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
