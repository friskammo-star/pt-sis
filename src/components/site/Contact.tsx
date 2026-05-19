import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Phone, MapPin } from "lucide-react";
import { Reveal } from "./Reveal";

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 aurora opacity-60" />
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 size-72 rounded-full bg-electric/10 blur-3xl"
      />
      <div className="relative mx-auto max-w-7xl grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <Reveal>
            <div className="text-xs tracking-[0.25em] uppercase text-electric-soft mb-4">
              — Get In Touch
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-semibold leading-[1.05] tracking-tight text-balance">
              Start your licensing process.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed max-w-md">
              Tell us about your business and the license you need. Our maritime team
              will respond within one business day with a tailored plan.
            </p>

            <div className="mt-10 space-y-4">
              {[
                { Icon: Mail, l: "Email", v: "contact@sis-samudera.id" },
                { Icon: Phone, l: "WhatsApp", v: "+62 812 0000 0000" },
                { Icon: MapPin, l: "Office", v: "Jakarta, Indonesia" },
              ].map(({ Icon, l, v }) => (
                <div key={l} className="flex items-center gap-4">
                  <div className="size-10 rounded-xl glass grid place-items-center">
                    <Icon className="size-4 text-electric-soft" strokeWidth={1.8} />
                  </div>
                  <div>
                    <div className="text-[11px] tracking-wider uppercase text-muted-foreground">{l}</div>
                    <div className="text-sm">{v}</div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Reveal delay={0.15}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="rounded-3xl glass-strong metallic-border p-8 sm:p-10 space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Full Name" name="name" placeholder="Your full name" />
                <Field label="Company Name" name="company" placeholder="Your company" />
                <Field label="Email" type="email" name="email" placeholder="you@company.com" />
                <Field label="Phone / WhatsApp" name="phone" placeholder="+62…" />
              </div>

              <div>
                <Label>Service of Interest</Label>
                <select
                  className="w-full mt-2 rounded-xl bg-background/40 border border-border px-4 py-3 text-sm outline-none focus:border-electric focus:ring-2 focus:ring-electric/30 transition"
                  defaultValue=""
                  required
                >
                  <option value="" disabled>Select a service</option>
                  <option>SIUPPAK</option>
                  <option>SIUPAL</option>
                  <option>SIUPKK</option>
                  <option>SIOPSUS</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <Label>Message</Label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your business and what you need…"
                  className="w-full mt-2 rounded-xl bg-background/40 border border-border px-4 py-3 text-sm outline-none focus:border-electric focus:ring-2 focus:ring-electric/30 transition resize-none"
                  required
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-electric text-primary-foreground font-medium py-3.5 glow-electric transition"
              >
                {sent ? "Thanks — we'll be in touch." : "Request Free Consultation"}
                {!sent && <Send className="size-4" />}
              </motion.button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <label className="text-[11px] tracking-wider uppercase text-muted-foreground">
      {children}
    </label>
  );
}

function Field({
  label,
  name,
  placeholder,
  type = "text",
}: {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <div>
      <Label>{label}</Label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required
        className="w-full mt-2 rounded-xl bg-background/40 border border-border px-4 py-3 text-sm outline-none focus:border-electric focus:ring-2 focus:ring-electric/30 transition"
      />
    </div>
  );
}
