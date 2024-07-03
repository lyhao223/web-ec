"use client";
import Link from "next/link";
import { FaAngleDown } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import { IoCart } from "react-icons/io5";

import LogoDunker from "../../../../../../assets/Logo/Dunker-logo-white.png";

import FlyOutLink from "../../Animate/FlyOutLink";
import ItemMenuShop from "../../ListDropDownMenu/ItemsMenuShop";
import ItemMenuServices from "../../ListDropDownMenu/ItemsMenuServices";
import FlyDownSearchBar from "../../Animate/FlyDownSearchBar";
import SearchInput from "../../Search/SearchInput";
import { useSelector } from "react-redux";
import { RootState } from "@/app/services/redux/store";
import { useEffect, useState } from "react";
import { Box, Modal } from "@mui/material";
import FlyModal from "../../Animate/FlyModal";
import ItemsModal from "./ItemsModal";
export default function Header() {
  const quantity = useSelector((state: RootState) => state.cart.items);
  const TotalQuantity = quantity.reduce((acc, item) => acc + item.quantity, 0);
  const [open, setOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  const handleOpenModal = () => {
    setOpen(!open);
  };
  const handleCloseModal = () => {
    setOpen(false);
  };
  return (
    <header className="xl:fixed z-20 min-w-full bg-black">
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-start">
        <Link href="/">
          <img
            src={LogoDunker.src}
            className="ml-2 w-96 sm:w-80 md:inline hidden"
          />
        </Link>
        <div className="flex flex-row items-center justify-center md:mt-4 space-x-3 xl:mr-[45rem] xl:ml-18 sm:mr-52">
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
          <button
            className="flex flex-row text-white font-bold text-sm md:text-lg m-5 space-x-2"
            onClick={handleOpenModal}>
            Cart
            <IoCart className="inline-block text-white text-sm md:text-xl md:ml-2 ml-2 md:mt-[0.2rem] mt-1" />
            <div className="rounded-full bg-white">
              <span className="p-2 font-bold text-black">
                {isClient && TotalQuantity}
              </span>
            </div>
          </button>

          <Modal open={open} onClose={handleCloseModal}>
            <FlyModal open={open}>
              <ItemsModal />
            </FlyModal>
          </Modal>
        </div>
      </div>
    </header>
  );
}
