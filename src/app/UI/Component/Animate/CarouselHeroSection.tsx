"use client";
import React, { Fragment } from "react";
import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";

import image2 from "../../../../../assets/HeroSection/slider-1.webp";
import { Button, Carousel, Typography } from "@material-tailwind/react";
import AnimationArrow from "./AnimationArrow";

export default function CarouselHeroSection() {
  return (
    <Carousel className="relative w-full h-1/2" 
    prevArrow={({handlePrev})=>(
       <AnimationArrow
        initialX={15} 
        animateX={15} 
        exitX={15} 
        styleX="-150%" 
        classCssAnimate="absolute z-20 -top-0.5 left-4 text-gray-500 mx-14 cursor-pointer" 
        ease="easeInOut"
        classCssDiv="absolute z-20 mx-24 mt-24 text-gray-700 top-96 left-0 cursor-pointer">
          <GrFormPrevious onClick={handlePrev} size={80}/>
        </AnimationArrow>
    )}
    nextArrow={({handleNext})=>(
       <AnimationArrow
        initialX={-15} 
        animateX={-15} 
        exitX={-15} 
        styleX="150%" 
        classCssAnimate="absolute z-20 -top-0.5 -right-4 text-gray-500 mx-14 cursor-pointer" 
        ease="easeInOut"
        classCssDiv="absolute z-20 mx-24 mt-24 text-gray-700 top-96 right-24 cursor-pointer">
          <GrFormNext onClick={handleNext} size={80}/>
        </AnimationArrow>
    )}
    >
      <div id='content-1'>
        <img src={image2.src} className="absolute overflow-hidden w-full xl:h-screen md:min-h-screen"/>    
        {/* <AnimationArrow ArrowIcon={GrFormNext} 
        initialX={-15} animateX={-15} 
        exitX={15} 
        styleX="150%" 
        classCss="absolute z-20 -bottom-1 left-4 text-gray-500 mx-14" 
        classCssDiv="absolute z-20 mx-24 mt-24 text-gray-500 top-96 left-0"/> */}
      </div>


    </Carousel>
  );
}
