import KeyFeatures from "@/components/Landing/Features";
import Hero from "@/components/Landing/Hero";
import Services from "@/components/Landing/Services";
import Testimonials from "@/components/Landing/Testmonials";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Team from "@/components/Landing/Team";
import Pricing from "@/components/Landing/Pricing";
import CTA from "@/components/Landing/CTA";
import FAQ from "@/components/Landing/FAQ";

export default function Home()
{
  return (
    <>
      <Hero />
      <KeyFeatures />
      <Services />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
      {/* <Team /> */}
    </>
  );
}
