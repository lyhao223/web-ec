import React from "react";
import avatar from "@/../../assets/blogpost/avatar.webp";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook, FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa6";
import { TfiTwitter } from "react-icons/tfi";
const icons = [
  { id: 1, icon: <FaFacebook size={20} /> },
  { id: 2, icon: <FaInstagram size={20} /> },
  { id: 3, icon: <FaTwitter size={20} /> },
  { id: 4, icon: <FaTiktok size={20} /> },
];

const Comment = () => {
  return (
    <div className="grid xl:grid-cols-4 grid-row-2 grid-rows-2 lg:grid-cols-4 md:items-center md:justify-center">
      <div className="xl:col-span-1 row-span-1 mx-20 lg:mx-0 lg:col-span-1">
        <img src={avatar.src} className="xl:w-40 xl:h-40" />
      </div>
      <div className="xl:col-span-3 row-span-1 xl:-ml-10 lg:col-span-3">
        <div className="flex flex-col xl:items-start lg:items-start items-center justify-center space-y-6">
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
            {icons.map((icon) => (
              <div key={icon.id}>{icon.icon}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
