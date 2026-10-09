import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Projects } from "@/components/projects";
import { Philosophy, Journey, Why } from "@/components/sections";
import { Closing } from "@/components/closing";

export default function HomePage() {
  return (
    <div id="top">
      <Hero />
      <Services />
      <Projects />
      <Philosophy />
      <Journey />
      <Why />
      <Closing />
    </div>
  );
}
