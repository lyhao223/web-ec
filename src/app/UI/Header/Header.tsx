"use client";
import Link from "next/link";
import { FaAngleDown } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import { IoCart } from "react-icons/io5";

import LogoDunker from "../../../../assets/Logo/Dunker-logo-white.png";


import FlyOutLink from "../Component/Animate/FlyOutLink";
import ItemMenuShop from "../Component/ListDropDownMenu/ItemsMenuShop";
import ItemMenuServices from "../Component/ListDropDownMenu/ItemsMenuServices";


export default function Header() {
  
 
  return (
    <header className="fixed w-full flex flex-col md:flex-row items-center justify-center md:justify-start bg-black p-3">
      <Link href="/">
        <img src={LogoDunker.src} className="hidden md:block mx-3 my-4 md:mr-36"/>
      </Link>
      <div className="flex flex-row items-center justify-center md:mt-4 space-x-3 md:mr-[36rem]">
        <Link href="/" className="text-white font-bold text-sm md:text-lg m-5">
          Home
        </Link>
        <FlyOutLink href="/shop" FlyoutContent={ItemMenuShop} IconMenu={<FaAngleDown className="inline-block text-white text-sm md:text-lg md:mt-[0.2rem] mt-[0.3rem] md:ml-1 ml-2 mr-4" />}>
          Shop
        </FlyOutLink>
        <FlyOutLink href="/services" FlyoutContent={ItemMenuServices} IconMenu={<FaAngleDown className="inline-block text-white text-sm md:text-lg md:mt-[0.2rem]  mt-[0.3rem] md:ml-1 ml-2 mr-4" />}>
          Services
        </FlyOutLink>
        <Link href="/contact" className="text-white font-bold text-sm md:text-lg m-5">
          Contact
        </Link>
      </div>

      <div className="flex flex-row items-center justify-center md:mt-4 space-x-3">
        <button className="text-white font-bold text-sm md:text-lg m-5">
          Search
          <FaSearch className="inline-block text-white text-sm md:text-lg md:ml-2 ml-2" />
        </button>
        <button className="text-white font-bold text-sm md:text-lg m-5 border-r pr-2">
          Account
          <MdAccountCircle className="inline-block text-white text-sm md:text-lg md:ml-2 ml-2" />
        </button>      
        <button className="text-white font-bold text-sm md:text-lg m-5">
          Cart
          <IoCart className="inline-block text-white text-sm md:text-xl md:ml-2 ml-2" />
        </button>  
      </div>
    </header>
  );
}
