"use client";
import React, { use, useEffect, useState } from "react";

import InfoShipping from "../UI/Component/Checkout/InfoShipping/InfoShipping";
import CartItem from "../UI/Component/Checkout/CartItem/CartItem";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Page = () => {
  const { data: session, status } = useSession();
  const [checkLogin, setCheckLogin] = useState(false);
  const router = useRouter();
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
    if(!session && status === "unauthenticated") {
      setCheckLogin(false);
      router.push("/login");
    }else{
      setCheckLogin(true);
    }
  }, [session, status,  checkLogin]);
  return (
    <>
      {!checkLogin ? (
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
