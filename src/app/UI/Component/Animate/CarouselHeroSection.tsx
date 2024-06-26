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
      className=" w-full h-1/2">
      
      <div className="relative">
        <img
          src={image2.src}
          alt="image 0"
          className="object-cover w-full h-full"
        />
      </div>
       <div className="relative">
        <img
          src={image2.src}
          alt="image 11"
          className="object-cover w-full h-full"
        />
      </div>

      
    </Carousel>
  );
}
