import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Anchor } from "lucide-react";

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 inset-x-0 z-50"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-4">
        <div className="glass-strong rounded-full px-5 sm:px-7 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="size-8 rounded-lg bg-gradient-to-br from-[oklch(0.72_0.18_245)] to-[oklch(0.45_0.18_265)] grid place-items-center glow-electric">
              <Anchor className="size-4 text-white" strokeWidth={2.4} />
            </div>
            <div className="leading-tight">
              <div className="font-display font-semibold text-sm tracking-tight">SIS Samudera</div>
              <div className="text-[10px] text-muted-foreground tracking-[0.2em] uppercase">Indonesia Shakti</div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
            <a href="/#about" className="hover:text-foreground transition-colors">About</a>
            <a href="/#services" className="hover:text-foreground transition-colors">Services</a>
            <a href="/#process" className="hover:text-foreground transition-colors">Process</a>
            <a href="/#why" className="hover:text-foreground transition-colors">Why Us</a>
            <a href="/#contact" className="hover:text-foreground transition-colors">Contact</a>
          </nav>

          <a
            href="/#contact"
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-electric/90 hover:bg-electric text-primary-foreground text-sm font-medium px-4 py-2 transition-all hover:shadow-[0_0_30px_-5px_oklch(0.72_0.18_245/0.6)]"
          >
            Free Consultation
          </a>
        </div>
      </div>
    </motion.header>
  );
}
