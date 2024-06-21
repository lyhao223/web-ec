"use client";
import React from "react";
import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";

import image2 from "../../../../../assets/HeroSection/slider-1.webp";
import { Button, Carousel, Typography } from "@material-tailwind/react";

export default function CarouselHeroSection() {
  return (
    <Carousel className="min-w-min h-1/2">
      <img src={image2.src} />
    </Carousel>
  );
}
