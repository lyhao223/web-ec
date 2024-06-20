"use client";
import React from "react";
import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";
import imgSectionHero__1 from "../../assets/HeroSection/slider-1.webp";
import imgSectionHero__2 from "../../../../../assets/HeroSection/slider-2.webp";
import LogoDunker from "../../../../../assets/Logo/Dunker-logo-white.png";

import { Carousel } from "@material-tailwind/react";

export default function CarouselHeroSection() {
  return (
    <Carousel
      placeholder={undefined}
      onPointerEnterCapture={null}
      onPointerLeaveCapture={null}>
      <div className="relative h-full min-w-full">
        <img
          src={imgSectionHero__2.src}
          alt="image 1"
          className="h-[50rem] w-full object-cover"
        />
         
      </div>
    </Carousel>
  );
}
