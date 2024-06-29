"use client";
import { Fragment } from "react";
import CarouselHeroSection from "./UI/Component/HomePage/HeroSection/CarouselHeroSection";
import SubArtical from "./UI/Component/SubArtical/SubArtical";

export default function Home() {
  return (
    <section id="home_page">
      <CarouselHeroSection />
      <SubArtical />
    </section>
  );
}
