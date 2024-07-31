import React from "react";

import InfoShipping from "../UI/Component/Checkout/InfoShipping/InfoShipping";
import CartItem from "../UI/Component/Checkout/CartItem/CartItem";

const Page = () => {
  return (
    <div className="relative p-32 flex flex-row items-start justify-start">
      <InfoShipping />
      {/* <CartItem /> */}
    </div>
  );
};

export default Page;
