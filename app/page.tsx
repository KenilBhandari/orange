import { Hero } from "@/components/hero";
import { ProofBand } from "@/components/proof-band";
import { Compare } from "@/components/compare";
import { Services } from "@/components/services";
import { Projects } from "@/components/projects";
import { Philosophy, Journey, Why } from "@/components/sections";
import { Closing } from "@/components/closing";

export default function HomePage() {
  return (
    <div id="top">
      <Hero />
      <ProofBand />
      <Compare />
      <Services />
      <Projects />
      <Philosophy />
      <Journey />
      <Why />
      <Closing />
    </div>
  );
}
