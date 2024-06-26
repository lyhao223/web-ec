"use client";
import React, { Fragment } from "react";
import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";

import image2 from "../../../../../assets/HeroSection/slider-1.webp";
import image1 from "../../../../../assets/HeroSection/slider-2.webp";
import {
  Button,
  Carousel,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import AnimationArrow from "./AnimationArrow";

export default function CarouselHeroSection() {
  return (
    <Carousel
      className=" w-full h-1/2"
      prevArrow={({ handlePrev }) => (
        <AnimationArrow
          initialX={15}
          animateX={-10}
          exitX={15}
          styleX="-150%"
          classCssAnimate="absolute z-20 -top-0.5 left-6 text-gray-500 mx-14 cursor-pointer"
          ease="easeIn"
          classCssDiv="!absolute top-2/4 -translate-y-2/4 right-4"
          onClickArrow={handlePrev}>
          <GrFormPrevious size={80} />
        </AnimationArrow>
      )}
      nextArrow={({ handleNext }) => (
        <AnimationArrow
          initialX={-15}
          animateX={15}
          exitX={-15}
          styleX="150%"
          classCssAnimate="absolute z-20 -top-0.5 right-8 text-gray-500 mx-14 cursor-pointer"
          ease="easeInOut"
          classCssDiv="absolute z-20 mx-24 mt-24 text-gray-700 top-96 right-24 cursor-pointer"
          onClickArrow={handleNext}>
          <GrFormNext size={80} />
        </AnimationArrow>
      )}>
      <img
        src={image2.src}
        alt="image 1"
        className="object-cover w-full h-full"
      />

      <img
        src={image1.src}
        alt="image 2"
        className="object-cover w-full h-full"
      />
    </Carousel>
  );
}
