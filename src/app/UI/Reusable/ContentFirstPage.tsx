import Link from "next/link";
import React from "react";
interface Props {
  children?: React.ReactNode;
  img: string;
  contentTitle: string;
  linkText: string;
}
const ContentFirstPage = ({ children, img, contentTitle, linkText }: Props) => {
  return (
    <div className="relative top-0 xl:w-full  2xl:max-w-full">
      <img src={img} alt="aboutus" className="xl:w-full xl:h-[35rem]" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <h1 className="subpixel-antialiased tracking-widest font-semibold text-white xl:text-5xl text-2xl">
          {contentTitle}
        </h1>
        <div className="flex flex-row items-center justify-center text-white space-x-2">
          <Link href="/" className="underline">
            Home
          </Link>
          <span> {">"}</span>
          <span>{linkText}</span>
        </div>
      </div>
    </div>
  );
};

export default ContentFirstPage;
