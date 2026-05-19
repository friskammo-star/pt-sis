import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import heroShip from "@/assets/hero-ship.jpg";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grain">
      {/* Background image */}
      <img
        src={heroShip}
        alt="Container cargo ship sailing at golden hour"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />

      {/* Aurora background */}
      <div className="absolute inset-0 aurora mix-blend-screen opacity-70" />

      {/* Floating orbs */}
      <motion.div
        animate={{ y: [0, -30, 0], x: [0, 15, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 -left-32 size-[420px] rounded-full bg-[oklch(0.55_0.22_265/0.3)] blur-[120px]"
      />
      <motion.div
        animate={{ y: [0, 40, 0], x: [0, -20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-0 -right-20 size-[500px] rounded-full bg-[oklch(0.72_0.18_245/0.25)] blur-[140px]"
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(oklch(1 0 0 / 0.5) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0 / 0.5) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 50%, black, transparent)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs tracking-wider uppercase text-muted-foreground mb-8"
        >
          <Sparkles className="size-3.5 text-electric" />
          Professional & Trusted Maritime Licensing Consultant
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-balance text-5xl sm:text-7xl md:text-[5.5rem] font-semibold leading-[1.02] tracking-tight"
        >
          Trusted Maritime
          <br />
          <span className="bg-gradient-to-r from-white via-[oklch(0.85_0.1_245)] to-[oklch(0.72_0.18_245)] bg-clip-text text-transparent">
            Licensing & Shipping
          </span>
          <br />
          Solutions
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.8 }}
          className="mx-auto mt-8 max-w-2xl text-balance text-base sm:text-lg text-muted-foreground leading-relaxed"
        >
          Professional maritime permits, compliance, and operational consultancy for
          Indonesia&apos;s shipping industry — delivered with precision, speed, and full
          regulatory legality.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#services"
            className="group inline-flex items-center gap-2 rounded-full bg-electric px-6 py-3.5 text-sm font-medium text-primary-foreground glow-electric transition-transform hover:scale-[1.02]"
          >
            Explore Services
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full glass-strong px-6 py-3.5 text-sm font-medium hover:bg-white/5 transition-colors"
          >
            Contact Us
          </a>
        </motion.div>

        {/* Stat strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 1 }}
          className="mt-24 grid grid-cols-2 sm:grid-cols-4 gap-px overflow-hidden rounded-2xl glass max-w-3xl mx-auto"
        >
          {[
            ["100%", "Regulatory Compliance"],
            ["4", "Core Licenses"],
            ["30d", "Avg. Processing"],
            ["24/7", "Client Support"],
          ].map(([k, v]) => (
            <div key={v} className="p-6 bg-background/40">
              <div className="font-display text-2xl sm:text-3xl font-semibold text-electric-soft">{k}</div>
              <div className="mt-1 text-[11px] tracking-wider uppercase text-muted-foreground">{v}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
