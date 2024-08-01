"use client";
import React, { useEffect, useState } from "react";

import InfoShipping from "../UI/Component/Checkout/InfoShipping/InfoShipping";
import CartItem from "../UI/Component/Checkout/CartItem/CartItem";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Page = () => {
  const [client, setClient] = useState(false);
  const loadingIcon = (
    <div className="relative top-0 p-32 h-96">
      <button
        type="button"
        className="bg-gray-300 flex flex-row items-center justify-center space-x-2 p-2 rounded-lg"
        disabled>
        <AiOutlineLoading3Quarters className="animate-spin" />
        <span>Processing...</span>
      </button>
    </div>
  );

  useEffect(() => {
    setClient(true);
  }, []);
  return (
    <>
      {!client ? (
        loadingIcon
      ) : (
        <div className="relative xl:bottom-56 flex xl:flex-row lg:flex-col lg:items-center lg:justify-center lg:space-y-36 md:flex-col md:space-y-20 md:h-[120rem] md:bottom-64 items-center justify-center xl:space-x-48 lg:space-x-0  space-x-0 xl:h-[80rem] lg:h-[120rem] lg:bottom-64 flex-col space-y-20 bottom-96 h-[140rem]">
          <InfoShipping />
          <CartItem />
        </div>
      )}
    </>
  );
};

export default Page;
