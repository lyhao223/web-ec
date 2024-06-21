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
import FlyDownSearchBar from "../Component/Animate/FlyDownSearchBar";
import SearchInput from "../Component/Search/SearchInput";

export default function Header() {
  return (
    <header className="fixed z-20 min-w-full bg-black">
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-start">
        <Link href="/">
          <img
            src={LogoDunker.src}
            className="w-min mx-2 md:inline-block hidden"
          />
        </Link>
        <div className="flex flex-row items-center justify-center md:mt-4 space-x-3 xl:mr-[45rem] xl:ml-20">
          <Link
            href="/"
            className="text-white font-bold text-sm md:text-lg m-5">
            Home
          </Link>
          <FlyOutLink
            href="/shop"
            FlyoutContent={ItemMenuShop}
            IconMenu={
              <FaAngleDown className="inline-block text-white text-sm md:text-lg md:mt-[0.2rem] mt-[0.3rem] md:ml-1 ml-2 mr-4" />
            }>
            Shop
          </FlyOutLink>
          <FlyOutLink
            href="/services"
            FlyoutContent={ItemMenuServices}
            IconMenu={
              <FaAngleDown className="inline-block text-white text-sm md:text-lg md:mt-[0.2rem]  mt-[0.3rem] md:ml-1 ml-2 mr-4" />
            }>
            Services
          </FlyOutLink>
          <Link
            href="/contact"
            className="text-white font-bold text-sm md:text-lg m-5">
            Contact
          </Link>
        </div>

        <div className="flex flex-row items-center justify-center md:mt-4 space-x-3 xl:mr-10 md:-ml-32">
          <FlyDownSearchBar SearchInput={SearchInput} />
          <button className="flex flex-row text-white font-bold text-sm md:text-lg m-5 border-r pr-2">
            Account
            <MdAccountCircle className="inline-block text-white text-sm md:text-lg md:ml-2 ml-2 md:mt-[0.2rem] mt-1" />
          </button>
          <button className="flex flex-row text-white font-bold text-sm md:text-lg m-5">
            Cart
            <IoCart className="inline-block text-white text-sm md:text-xl md:ml-2 ml-2 md:mt-[0.2rem] mt-1" />
          </button>
        </div>
      </div>
    </header>
  );
}
