"use client";
import { Fragment } from "react";
import CarouselHeroSection from "./UI/Component/HomePage/HeroSection/CarouselHeroSection";
import SubArtical from "./UI/Component/HomePage/SubArtical/SubArtical";
import ListItems from "./UI/Component/HomePage/Items/ListItems";

export default function Home() {
  return (
    <section id="home_page">
      <CarouselHeroSection />
      <SubArtical />
      <ListItems />
    </section>
  );
}
