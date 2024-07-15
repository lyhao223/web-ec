import React, { Fragment } from "react";
import aboutus from "@/../../assets/content/aboutus.jpg";
import aboutus_1 from "@/../../assets/content/aboutus_1.jpg";
import menfashion from "@/../../assets/content/menfashion.jpg";
import womenfashion from "@/../../assets/content/womenfashion.jpg";
import electronic from "@/../../assets/content/electronic.jpg";
import jewelry from "@/../../assets/content/jewelry.jpg";
import Link from "next/link";
const page = () => {
  return (
    <Fragment>
      <div className="flex flex-col items-center justify-center">
      <div className="relative top-0 xl:w-full">
      <img src={aboutus.src} alt="aboutus" className="xl:w-full xl:h-[35rem]" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <h1 className="subpixel-antialiased tracking-widest font-semibold text-white xl:text-5xl text-2xl">
          About us
      </h1>
      <div className="flex flex-row items-center justify-center text-white space-x-2">
      <Link href="/" className="underline">Home</Link>
      <span> {">"}</span>
      <span>About us</span>
      </div>
      </div>
      </div>
      <div className="flex flex-col items-center justify-center mt-10 space-y-4 mb-12 xl:p-2 p-10 w-fit text-2xl">
        <div className="xl:w-[50rem] text-wrap flex flex-col items-center justify-center text-center space-y-6">
          <div className="tracking-tight font-extralight">
            Welcome to My Store, your one-stop destination for all things
            fashion and electronics. We are passionate about bringing you the
            latest trends and high-quality products in men’s fashion, women’s
            fashion, electronics, and jewelry.
          </div>
          <img
            src={aboutus_1.src}
            alt="aboutus_1"
            className="xl:w-96 xl:h-96 h-80 w-80 rounded-xl shadow-lg"
          />
          <div className="tracking-tight font-extralight">
            <span className="font-semibold">Men’s Fashion:</span> From casual
            wear to formal attire, our men’s fashion range offers a variety of
            options to keep you looking sharp and stylish for any occasion.
          </div>
          <img
            src={menfashion.src}
            alt="men fashion"
            className="xl:w-96 xl:h-96 h-80 w-80 rounded-xl shadow-lg"
          />
          <div className="tracking-tight font-extralight">
            <span className="font-semibold">Women’s Fashion:</span> Discover the
            latest trends in women’s fashion with our extensive collection of
            clothing, accessories, and footwear. Whether you’re dressing up for
            a special event or looking for everyday essentials, we’ve got you
            covered.
          </div>
          <img
            src={womenfashion.src}
            alt="women fashion"
            className="xl:w-96 xl:h-96 h-80 w-80 rounded-xl shadow-lg"
          />
          <div className="tracking-tight font-extralight">
            <span className="font-semibold">Electronics:</span> Stay ahead of
            the curve with our selection of cutting-edge electronics. From the
            latest smartphones and gadgets to home entertainment systems, we
            bring you the best in technology to enhance your lifestyle.
          </div>
          <img
            src={electronic.src}
            alt="electronic"
            className="xl:w-96 xl:h-96 h-80 w-80 rounded-xl shadow-lg"
          />
          <div className="tracking-tight font-extralight">
            <span className="font-semibold">Jewelry:</span> Add a touch of
            elegance to your look with our exquisite jewelry collection. From
            timeless classics to contemporary designs, our pieces are crafted to
            perfection, making them the perfect addition to any outfit.
          </div>
          <img
            src={jewelry.src}
            alt="jewelry"
            className="xl:w-96 xl:h-96 h-80 w-80 rounded-xl shadow-lg"
          />
        </div>
      </div>
      </div>
    </Fragment>
  );
};

export default page;
