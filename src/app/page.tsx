import { HomeApproach } from "@/components/home-approach";
import { HomeCta } from "@/components/home-cta";
import { HomeFeaturedWork } from "@/components/home-featured-work";
import { HomeHero } from "@/components/home-hero";
import { HomeProcess } from "@/components/home-process";
import { HomeServices } from "@/components/home-services";
import { HomeTestimonials } from "@/components/home-testimonials";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeApproach />
      <HomeServices />
      <HomeFeaturedWork />
      <HomeProcess />
      <HomeTestimonials />
      <HomeCta />
    </>
  );
}
