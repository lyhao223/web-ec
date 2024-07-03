"use client";
import React from "react";
import "react-multi-carousel/lib/styles.css";
import image1 from "../../../../../../assets/HeroSection/slider-1.png";
import image2 from "../../../../../../assets/HeroSection/slider-2.png";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import RightArrow from "../../Animate/CustomArrow/RightArrow";
import LeftArrow from "../../Animate/CustomArrow/LeftArrow";

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
    <Carousel
      responsive={responsive}
      customRightArrow={<RightArrow />}
      customLeftArrow={<LeftArrow />}
      swipeable={true}
      draggable={true}
      showDots
      itemClass="w-full xl:h-[40rem] h-56">
      <div className="relative">
        <div className="brightness-50">
          <img
            src={image1.src}
            alt="img1"
            className="object-cover 2xl:w-full"
          />
        </div>
        <div className="absolute z-10 xl:top-32 xl:left-32 top-4 left-4">
          <h1 className="text-white xl:text-5xl text-lg font-bold">
            Stunning, Joyful
          </h1>
          <h1 className="text-white xl:text-5xl text-lg font-bold h-">
            & Captivating!
          </h1>
          <p className="antialiased font-light tracking-tight	line-clamp-3 text-white xl:text-lg text-sm xl:mt-8 mt-2 xl:w-[38rem] w-40">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            dictum mattis dolor, ut tincidunt metus. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Quisque dictum mattis dolor, ut
            tincidunt metus.
          </p>
          <div className="flex flex-row items-center justify-start xl:space-x-16 space-x-10 xl:mt-12 mt-2">
            <div className="group">
              <div className="border border-white hover:border-black bg-white xl:p-5 p-3 group-hover:bg-black  duration-500 transition-all ease-in-out">
                <button className="text-black group-hover:text-white xl:text-xl text-sm  antialiased font-light tracking-tight line-clamp-3 duration-500 transition-all ease-in-out">
                  EXPLORE COLLECTION
                </button>
              </div>
            </div>
            <div className="group">
              <div className="border border-white hover:border-white xl:p-5 p-3 group-hover:bg-white duration-500 transition-all ease-in-out">
                <button className="text-white xl:text-xl text-sm group-hover:text-black antialiased font-light tracking-tight line-clamp-3 duration-500 transition-all ease-in-out">
                  SHOP NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="brightness-50">
          <img
            src={image2.src}
            alt="img1"
            className="object-cover 2xl:w-full h-auto "
          />
        </div>
        <div className="absolute z-10 xl:top-32 xl:left-32 top-4 left-4">
          <h1 className="text-white xl:text-5xl text-lg font-bold">
            Stunning, Joyful
          </h1>
          <h1 className="text-white xl:text-5xl text-lg font-bold h-">
            & Captivating!
          </h1>
          <p className="antialiased font-light tracking-tight	line-clamp-3 text-white xl:text-lg text-sm xl:mt-8 mt-2 xl:w-[38rem] w-40">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            dictum mattis dolor, ut tincidunt metus. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Quisque dictum mattis dolor, ut
            tincidunt metus.
          </p>
          <div className="flex flex-row items-center justify-start xl:space-x-16 space-x-10 xl:mt-12 mt-2">
            <div className="border border-white hover:border-black bg-white xl:p-5 p-3 hover:bg-black duration-500 transition-all ease-in-out">
              <button className="text-black xl:text-xl text-sm hover:text-white antialiased font-light tracking-tight line-clamp-3 duration-500 transition-all ease-in-out">
                EXPLORE COLLECTION
              </button>
            </div>
            <div className="border border-white hover:border-white xl:p-5 p-3 hover:bg-white duration-500 transition-all ease-in-out">
              <button className="text-white xl:text-xl text-sm hover:text-black antialiased font-light tracking-tight line-clamp-3 duration-500 transition-all ease-in-out">
                SHOP NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
}
