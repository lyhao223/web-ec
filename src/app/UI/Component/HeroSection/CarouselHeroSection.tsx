"use client";
import React, { Fragment } from "react";
import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";

import image2 from "../../../../../assets/HeroSection/slider-0.jpg";
import image1 from "../../../../../assets/HeroSection/slider-2.jpg";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import RightArrow from "../Animate/CustomArrow/RightArrow";
export default function CarouselHeroSection() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Carousel responsive={responsive} customRightArrow={<RightArrow />}>
      <div className="relative min-w-full h-1">
        <img src={image1.src} alt="img1" />
      </div>
      <div>
        <img src={image2.src} alt="img1" />
      </div>
      <div>Item 3</div>
      <div>Item 4</div>
    </Carousel>
  );
}