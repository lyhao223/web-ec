import React from "react";
import accessory from "../../../../../../assets/content/accessory.jpg";
import blouses from "../../../../../../assets/content/blouses.jpg";
import Link from "next/link";
const SecondContent = () => {
  const [showFlyoutFirstImage, setShowFlyoutFirstImage] = React.useState(false);
  const [showFlyoutSecondImage, setShowFlyoutSecondImage] = React.useState(false);

  const handleMouseEnterFirstImage = () => {
    setShowFlyoutFirstImage(true);
  }

  const handleMouseLeaveFirstImage = () => {
    setShowFlyoutFirstImage(false);
  }

  const handleMouseEnterSecondImage = () => {
    setShowFlyoutSecondImage(true);
  }

  const handleMouseLeaveSecondImage = () => {
    setShowFlyoutSecondImage(false);
  }
  return (
     <section id="first__content" className="p-4 w-full h-full mt-16 border-b-2 border-gray-300">
      <div className="flex xl:flex-row flex-col items-start justify-start xl:items-center xl:justify-center xl:space-y-0 space-y-10 mb-10">
         <div className="relative overflow-hidden rounded-border-tl-5xl">
          <img src={accessory.src} alt="accessory" className="object-cover transform transition-transform duration-300 hover:scale-105"/>
          <Link href='/'>
          <button className="absolute bottom-28 left-10" >
            <p className="text-4xl font-medium" onMouseEnter={handleMouseEnterSecondImage} onMouseLeave={handleMouseLeaveSecondImage}>T-Shirt</p>
            <span
          style={{
            transform: showFlyoutSecondImage ? "scaleX(1)" : "scaleX(0)",
          }}
          className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-indigo-300 transition-transform duration-300 ease-out"
        />
          </button>
          </Link>
        </div>
        <div className="relative overflow-hidden xl:ml-64">
          <img
            src={blouses.src}
            alt="blouses"
            className="object-cover transform transition-transform duration-300 hover:scale-105 h-full"
          />
          <Link href='/'>
          <button className="absolute xl:bottom-28 bottom-5 left-10" >
            <p className="text-4xl font-medium" onMouseEnter={handleMouseEnterFirstImage} onMouseLeave={handleMouseLeaveFirstImage}>Blouses</p>
            <span
          style={{
            transform: showFlyoutFirstImage ? "scaleX(1)" : "scaleX(0)",
          }}
          className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-indigo-300 transition-transform duration-300 ease-out"
        />
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SecondContent;
