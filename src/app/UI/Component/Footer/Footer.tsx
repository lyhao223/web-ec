"use client";
import React, { Fragment } from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { TfiTwitter } from "react-icons/tfi";

import visa from "../../../../../assets/payment/visacard.png";
import master from "../../../../../assets/payment/mastercard.png";
import amex from "../../../../../assets/payment/amex.png";
import card from "../../../../../assets/payment/card.png";
import discver from "../../../../../assets/payment/discver.png";
import Gesture from "../../Animation/Gesture";
const menuShopInFooter = [
  {
    id: "1",
    title: "Dresses",
  },
  {
    id: "2",
    title: "T-shirst",
  },
  {
    id: "3",
    title: "Jeans",
  },
  {
    id: "4",
    title: "Shoes",
  },
  {
    id: "5",
    title: "Accessories",
  },
  {
    id: "6",
    title: "Pants",
  },
  {
    id: "7",
    title: "Sale",
  },
];
const menuLinksInFooter = [
  { id: "1", title: "About Us" },
  { id: "2", title: "Contact Us" },
  { id: "3", title: "Privacy Policy" },
  { id: "4", title: "Terms & Conditions" },
  { id: "5", title: "FAQs" },
  { id: "6", title: "Shipping & Returns" },
  { id: "7", title: "Size Guide" },
  { id: "8", title: "Store Locator" },
  { id: "9", title: "Affiliate Program" },
];
const paymentMethods = [visa, master, amex, card, discver];
const icons = [
  <FaFacebook />,
  <FaInstagramSquare />,
  <FaTiktok />,
  <TfiTwitter />,
];
const terms = [
  { id: "contact", title: "Contact Us" },
  { id: "privacy", title: "Privacy Policy" },
  { id: "term", title: "Terms & Conditions" },
  { id: "sitemap", title: "Site Map" },
];
const Footer = () => {
  const [showFlyoutShop, setShowFlyoutShop] = React.useState(null);
  const [showFlyoutLink, setShowFlyoutLink] = React.useState(null);
  const [showFlyoutTerm, setShowFlyoutTerm] = React.useState(null);
  const handleMouseEnter = (id: any) => {
    setShowFlyoutShop(id);
  };
  const handleMouseLeave = () => {
    setShowFlyoutShop(null);
  };
  const handleMouseEnterLink = (id: any) => {
    setShowFlyoutLink(id);
  };
  const handleMouseLeaveLink = () => {
    setShowFlyoutLink(null);
  };
  const handleMouseEnterTerm = (id: any) => {
    setShowFlyoutTerm(id);
  };
  const handleMouseLeaveTerm = () => {
    setShowFlyoutTerm(null);
  };
  return (
    <footer id="footer" className="w-full h-full bg-black xl:p-20 p-10">
      <div className="flex xl:flex-row flex-col items-start justify-start xl:space-x-32 space-y-16 xl:space-y-0">
        <div className="flex flex-col items-start justify-start text-white space-y-9">
          <h1 className="subpixel-antialiased text-4xl font-semibold tracking-wider">
            Dunker
          </h1>
          <p className="w-96 tracking-wide text-lg">
            Our collections are fashionable at an affordable price without
            compromising quality, always in style and with global latest outlook
            trends.
          </p>
          <div className="flex flex-row items-start justify-start space-x-8 cursor-pointer text-3xl">
            {icons.map((icon, index) => (
              <Gesture scaleHover={1.1} key={index}>
                {icon}
              </Gesture>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-start justify-start text-white space-y-4">
          <h1 className="subpixel-antialiased text-2xl font-semibold tracking-wider">
            SHOP
          </h1>
          {menuShopInFooter.map((menuItem) => (
            <button
              key={menuItem.id}
              className="text-sm relative"
              id={menuItem.id}
              onMouseEnter={() => handleMouseEnter(menuItem.id)}
              onMouseLeave={handleMouseLeave}>
              {menuItem.title}
              <span
                style={{
                  transform:
                    showFlyoutShop === menuItem.id ? "scaleX(1)" : "scaleX(0)",
                }}
                className="absolute -bottom-2 left-0 -right-2 h-[0.15rem] origin-left scale-x-0 rounded-full bg-indigo-300 transition-transform duration-300 ease-out"
              />
            </button>
          ))}
        </div>
        <div className="flex flex-col items-start justify-start text-white space-y-4">
          <h1 className="subpixel-antialiased text-2xl font-semibold tracking-wider">
            LINK
          </h1>
          {menuLinksInFooter.map((menuLink) => (
            <button
              key={menuLink.id}
              className="text-sm relative"
              id={menuLink.id}
              onMouseEnter={() => handleMouseEnterLink(menuLink.id)}
              onMouseLeave={handleMouseLeaveLink}>
              {menuLink.title}
              <span
                style={{
                  transform:
                    showFlyoutLink === menuLink.id ? "scaleX(1)" : "scaleX(0)",
                }}
                className="absolute -bottom-2 left-0 -right-2 h-[0.15rem] origin-left scale-x-0 rounded-full bg-indigo-300 transition-transform duration-300 ease-out"
              />
            </button>
          ))}
        </div>
        <div className="flex flex-col items-start justify-start text-white">
          <h1 className="subpixel-antialiased text-2xl font-semibold tracking-wider">
            NEWLETTERS
          </h1>
          <div className="flex flex-row items-start justify-start xl:mt-20 mt-6">
            <input
              type="email"
              placeholder="example@email.com"
              className="outline-none p-4"
            />
            <button className="bg-white text-black p-4 border-l-2 transition-all duration-200 hover:bg-gray-600 hover:text-white ease-linear cursor-pointer">
              Subscribe
            </button>
          </div>
          <p className="mt-4 subpixel-antialiased font-serif tracking-wide">
            By subscribing, you accept the Privacy Policy
          </p>
          <div className="flex flex-row items-start justify-start space-x-3 xl:mt-16 mt-4">
            {paymentMethods.map((paymentMethod, index) => (
              <img key={index} src={paymentMethod.src} alt="payment" />
            ))}
          </div>
        </div>
      </div>

      <div className="flex xl:flex-row flex-col items-start justify-between mt-16 border-t-[1px] border-t-gray-500 p-4">
        <div className="xl:p-4 xl:my-8 text-white">
          <p className="xl:text-lg text-sm subpixel-antialiased">
            ©2024 Dunker, All Rights Reserved. With Love by Ly Hao.
          </p>
        </div>
        <div className="flex flex-row items-center justify-center text-white xl:p-4 my-8 xl:space-x-10 space-x-3">
          {terms.map((term) => (
            <button
              key={term.id}
              className="xl:text-lg text-sm relative"
              onMouseEnter={() => handleMouseEnterTerm(term.id)}
              onMouseLeave={handleMouseLeaveTerm}>
              {term.title}
              <span
                style={{
                  transform:
                    showFlyoutTerm === term.id ? "scaleX(1)" : "scaleX(0)",
                }}
                className="absolute -bottom-2 left-0 -right-2 h-[0.15rem] origin-left scale-x-0 rounded-full bg-indigo-300 transition-transform duration-300 ease-out"
              />
            </button>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
