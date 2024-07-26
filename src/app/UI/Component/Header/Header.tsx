"use client";
import Link from "next/link";
import { FaAngleDown } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import { IoCart } from "react-icons/io5";

import LogoDunker from "../../../../../assets/Logo/Dunker-logo-white.png";

import FlyOutLink from "../../Animation/FlyOutLink";
import ItemMenuShop from "../ListDropDownMenu/ItemsMenuShop";
import ItemMenuServices from "../ListDropDownMenu/ItemsMenuServices";
import FlyDownSearchBar from "../../Animation/FlyDownSearchBar";
import SearchInput from "../Search/SearchInput";
import { useSelector } from "react-redux";
import { RootState } from "@/app/services/redux/store";
import { Fragment, useEffect, useRef, useState } from "react";
import { Box, Modal } from "@mui/material";
import FlyModal from "../../Animation/FlyModal";
import ItemsModal from "./ItemsModal";
import Login from "../Account/Login";
import Register from "../Account/Register";
import Image from "next/image";
export default function Header() {
  const quantity = useSelector((state: RootState) => state.cart.items);
  const TotalQuantity = quantity.reduce((acc, item) => acc + item.quantity, 0);
  const [open, setOpen] = useState(false);
  const [openAccount, setOpenAccount] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const [toggleAccount, setToggleAccount] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  const handleOpenModal = () => {
    setOpen(!open);
  };
  const handleCloseModal = () => {
    setOpen(false);
  };

  const handleOpenAccount = () => {
    setOpenAccount(!openAccount);
  };

  const handleCloseAccount = () => {
    setOpenAccount(false);
  };

  const handleToggleAccount = () => {
    setToggleAccount(!toggleAccount);
  };
  const quantityUI = (
    <div className=" bg-white w-8 h-8 rounded-full flex items-center justify-center">
      <span className="text-center font-bold text-black">{TotalQuantity}</span>
    </div>
  );
  return (
    <>
      <header className="xl:fixed top-0 z-20 min-w-full bg-black">
        <div className="flex flex-col xl:flex-row 2xl:flex-row lg:flex-col items-center lg:justify-center lg:items-center 2xl:justify-center 2xl:items-center space-x-0 xl:space-x-40">
          <div className="w-52 h-auto p-2">
            <Link href="/">
              <img src={LogoDunker.src} className="text-white" />
            </Link>
          </div>
          <div className="flex flex-col xl:flex-row 2xl:flex-row lg:flex-col items-center justify-center xl:space-x-72 2xl:space-x-[48rem] space-x-0">
            <div className="flex flex-row items-center justify-center">
              <Link
                href="/"
                className="text-white font-bold text-sm md:text-lg m-5">
                Home
              </Link>
              <div className="flex flex-row items-center justify-center">
                <FlyOutLink
                  href="/shop"
                  FlyoutContent={ItemMenuShop}
                  IconMenu={
                    <FaAngleDown className="inline-block text-white text-sm md:text-lg md:mt-[0.2rem] mt-[0.3rem] md:ml-1 ml-2 mr-4" />
                  }>
                  Shop
                </FlyOutLink>
              </div>
              <div className="flex flex-row items-center justify-center">
                <FlyOutLink
                  href="/service/aboutus"
                  FlyoutContent={ItemMenuServices}
                  IconMenu={
                    <FaAngleDown className="inline-block text-white text-sm md:text-lg md:mt-[0.2rem]  mt-[0.3rem] md:ml-1 ml-2 mr-4" />
                  }>
                  Services
                </FlyOutLink>
              </div>
              <Link href="/contact" className="text-white font-bold ">
                Contact
              </Link>
              <Link href="/blog" className="text-white font-bold xl:ml-8 ml-7">
                Blog
              </Link>
            </div>

            <div className="flex flex-row items-center justify-center">
              {/* <FlyDownSearchBar SearchInput={SearchInput} /> */}
              <button
                className="flex flex-row items-center justify-center text-white font-bold m-5 border-r pr-2 space-x-2"
                onClick={handleOpenAccount}>
                <span>Account</span>
                <MdAccountCircle
                  className="inline-block text-white"
                  size={28}
                />
              </button>
              <button
                className="flex flex-row items-center justify-center text-white font-bold m-5 space-x-2"
                onClick={handleOpenModal}>
                <span>Cart</span>
                <IoCart className="inline-block text-white" size={32} />
                {isClient && TotalQuantity ? quantityUI : ""}
              </button>
            </div>
          </div>
        </div>
      </header>
      <Modal open={open} onClose={handleCloseModal} disableScrollLock>
        <FlyModal open={open} ref={modalRef}>
          <ItemsModal close={handleCloseModal} />
        </FlyModal>
      </Modal>
      <Modal open={openAccount} onClose={handleCloseAccount} disableScrollLock>
        <FlyModal open={openAccount}>
          {!toggleAccount ? (
            <Login
              handleCloseAccount={handleCloseAccount}
              handleToggleAccount={handleToggleAccount}
            />
          ) : (
            <Register
              handleCloseAccount={handleCloseAccount}
              handleToggleAccount={handleToggleAccount}
            />
          )}
        </FlyModal>
      </Modal>
    </>
  );
}
