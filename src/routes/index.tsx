import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "../components/site/Hero";
import { About } from "../components/site/About";
import { ServicesGrid } from "../components/site/ServicesGrid";
import { Process } from "../components/site/Process";
import { Pillars } from "../components/site/Pillars";
import { Trust } from "../components/site/Trust";
import { WhyUs } from "../components/site/WhyUs";
import { CTA } from "../components/site/CTA";
import { Contact } from "../components/site/Contact";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "PT SIS Samudera Indonesia Shakti — Maritime Licensing Consultant" },
      {
        name: "description",
        content:
          "Professional & trusted maritime licensing consultant in Indonesia. SIUPPAK, SIUPAL, SIUPKK, and SIOPSUS handled with precision and full regulatory compliance.",
      },
    ],
  }),
});

function Index() {
  return (
    <>
      <Hero />
      <About />
      <ServicesGrid />
      <Process />
      <Pillars />
      <Trust />
      <WhyUs />
      <CTA />
      <Contact />
    </>
  );
}
