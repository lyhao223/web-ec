"use client";
import Link from "next/link";
import { FaAngleDown } from "react-icons/fa6";

import LogoDunker from "../../../../assets/Logo/Dunker-logo-white.png";
import FlyOutLink from "../Component/Animate/FlyOutLink";
import ItemMenuShop from "../Component/ListDropDownMenu/ItemsMenuShop";
import ItemMenuServices from "../Component/ListDropDownMenu/ItemsMenuServices";

export default function Header() {
  return (
    <header className="w-full px-3 bg-black">
      <img src={LogoDunker.src} className="" />
      <div className="flex flex-row items-center justify-center">
        <Link href="/" className="text-white font-bold text-lg m-5">
          Home
        </Link>
        <FlyOutLink href="/shop" FlyoutContent={ItemMenuShop}>
          Shop
          <FaAngleDown className="inline-block text-white text-lg md:ml-2" />
        </FlyOutLink>
        <FlyOutLink href="/services" FlyoutContent={ItemMenuServices}>
          Services
          <FaAngleDown className="inline-block text-white text-lg md:ml-2" />
        </FlyOutLink>
        <Link href="/contact" className="text-white font-bold text-lg m-5">
          Contact
        </Link>
      </div>
    </header>
  );
}
