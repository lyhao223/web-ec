import React from "react";
import dress from "../../../../../../assets/content/dress.jpg";
import shirt from "../../../../../../assets/content/shirt.jpg";
import Link from "next/link";
const FirstContent = () => {
  const [showFlyoutFirstImage, setShowFlyoutFirstImage] = React.useState(false);
  const [showFlyoutSecondImage, setShowFlyoutSecondImage] =
    React.useState(false);

  const handleMouseEnterFirstImage = () => {
    setShowFlyoutFirstImage(true);
  };

  const handleMouseLeaveFirstImage = () => {
    setShowFlyoutFirstImage(false);
  };

  const handleMouseEnterSecondImage = () => {
    setShowFlyoutSecondImage(true);
  };

  const handleMouseLeaveSecondImage = () => {
    setShowFlyoutSecondImage(false);
  };
  return (
    <section id="first__content" className="p-4 w-full h-full">
      <div className="flex xl:flex-row flex-col items-start justify-start xl:items-center xl:justify-center xl:space-y-0 space-y-10">
        <div className="relative overflow-hidden">
          <img
            src={dress.src}
            alt="dress"
            className="object-cover transform transition-transform duration-300 hover:scale-105 h-full"
          />
          <Link href="/">
            <button className="absolute xl:bottom-28 bottom-5 left-10">
              <p
                className="text-4xl font-medium"
                onMouseEnter={handleMouseEnterFirstImage}
                onMouseLeave={handleMouseLeaveFirstImage}>
                Dress
              </p>
              <span
                style={{
                  transform: showFlyoutFirstImage ? "scaleX(1)" : "scaleX(0)",
                }}
                className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-indigo-300 transition-transform duration-300 ease-out"
              />
            </button>
          </Link>
        </div>
        <div className="relative overflow-hidden xl:ml-64 rounded-border-tl-5xl">
          <img
            src={shirt.src}
            alt="shirt"
            className="object-cover transform transition-transform duration-300 hover:scale-105"
          />
          <Link href="/">
            <button className="absolute bottom-28 left-10">
              <p
                className="text-4xl font-medium"
                onMouseEnter={handleMouseEnterSecondImage}
                onMouseLeave={handleMouseLeaveSecondImage}>
                T-Shirt
              </p>
              <span
                style={{
                  transform: showFlyoutSecondImage ? "scaleX(1)" : "scaleX(0)",
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

export default FirstContent;
