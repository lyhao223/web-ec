"use client";
import React, { Fragment } from "react";
import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";

import image2 from "../../../../../assets/HeroSection/slider-1.png";
import image1 from "../../../../../assets/HeroSection/slider-2.png";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import RightArrow from "../Animate/CustomArrow/RightArrow";
import LeftArrow from "../Animate/CustomArrow/LeftArrow";
import CustomDots from "../Animate/CustomDots/CustomDots";
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
    <Carousel responsive={responsive} customRightArrow={<RightArrow />} customLeftArrow={<LeftArrow />} swipeable={false} draggable={false}>
      <div className="relative z-20 h-[1080px]">
        <img src={image1.src} alt="img1" className="min-w-full object-top"/>
        <div className="absolute z-10">
          <p>Hao</p>
        </div>
      </div>
      <div className="relative">
        <img src={image2.src} alt="img1" className="min-w-full object-center h-[37.444rem]" />
      </div>
    </Carousel>
  );
}
