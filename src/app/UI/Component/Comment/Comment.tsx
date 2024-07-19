import React from "react";
import avatar from "@/../../assets/blogpost/avatar.webp";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook, FaTiktok } from "react-icons/fa6";
import { TfiTwitter } from "react-icons/tfi";
const icons = [
  <FaFacebook />,
  <FaInstagramSquare />,
  <FaTiktok />,
  <TfiTwitter />,
];

const Comment = () => {
  return (
    <div className="grid grid-cols-4 gap-x-1">
      <div className="col-span-1">
        <img src={avatar.src} className="w-40 h-40" />
      </div>
      <div className="col-span-3">
        <div className="flex flex-col items-start justify-center space-y-4">
          <h1 className="text-3xl subpixel-antialiased tracking-tight font-medium">
            Jone Done
          </h1>
          <article className="text-sm">
            Founded by Begha over many cups of tea at her kitchen table in 2009,
            our brand promise is simple: to provide powerful digital marketing
            solutions to small and medium
          </article>
          <div className="flex flex-row items-center justify-center space-x-4">
            <span>Share</span>
            {icons.map((icon, index) => (
              <div key={index}>{icon}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
