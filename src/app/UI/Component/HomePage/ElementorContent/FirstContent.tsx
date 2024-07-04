import React from "react";
import dress from "../../../../../../assets/content/dress.jpg";
import Link from "next/link";
const FirstContent = () => {
  const [showFlyout, setShowFlyout] = React.useState(false);

  const handleMouseEnter = () => {
    setShowFlyout(!showFlyout);
  }
  return (
     <section id="first__content " >
      <div className="flex flex-row items-start justify-start p-4">
        <div className="relative w-94 h-94 overflow-hidden">
          <img
            src={dress.src}
            className="object-cover transform transition-transform duration-300 hover:scale-105"
          />
          <Link href='/'>
          <button className="absolute bottom-28 left-10" >
            <p className="text-4xl font-medium" onMouseEnter={handleMouseEnter}>Dress</p>
            <span
          style={{
            transform: showFlyout ? "scaleX(1)" : "scaleX(0)",
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
