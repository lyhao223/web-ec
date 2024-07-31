import React from "react";

import InfoShipping from "../UI/Component/Checkout/InfoShipping/InfoShipping";
import CartItem from "../UI/Component/Checkout/CartItem/CartItem";

const Page = () => {
  return (
    <div className="relative  bottom-56 flex flex-row items-center justify-center space-x-32 h-[80rem]">
      <InfoShipping />
      <CartItem />
    </div>
  );
};

export default Page;
