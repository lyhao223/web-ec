"use client";
import { Fragment } from "react";
import CarouselHeroSection from "./UI/Component/HomePage/HeroSection/CarouselHeroSection";
import SubArtical from "./UI/Component/HomePage/SubArtical/SubArtical";
import ListItems from "./UI/Component/HomePage/Items/ListItems";
import ElemtentorWidgetContainer from "./UI/Component/HomePage/ElementorWidgetContainer/ElemtentorWidgetContainer";
import FirstContent from "./UI/Component/HomePage/ElementorContent/FirstContent";
import SeconContent from "./UI/Component/HomePage/ElementorContent/SecondContent";
import BestSeller from "./UI/Component/HomePage/BestSeller/BestSeller";
import ThirdContent from "./UI/Component/HomePage/ElementorContent/ThirdContent";
import FourthContent from "./UI/Component/HomePage/ElementorContent/FourthContent";

export default function Home() {
  return (
    <section id="home_page">
      <CarouselHeroSection />
      <SubArtical />
      <ListItems />
      <ElemtentorWidgetContainer />
      <FirstContent />
      <SeconContent />
      <BestSeller />
      <ThirdContent />
      <FourthContent />
    </section>
  );
}
