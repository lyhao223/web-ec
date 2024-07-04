import React, { useState } from "react";
import { MdOutlineLocalShipping } from "react-icons/md";
import { MdCurrencyExchange } from "react-icons/md";
import { FaExchangeAlt } from "react-icons/fa";
import { MdOutlinePayments } from "react-icons/md";
import Gesture from "../../Animate/Gesture";

const ElemtentorWidgetContainer = () => {
  return (
    <section id="element__widget__container">
      <div className="grid xl:grid-cols-4 sm:grid-rows-4 gap-y-8 xl:p-14 xl:h-56 sm:p-2 ">
        <div className="flex flex-row items-start justify-center">
          <Gesture scaleHover={1.1}>
            <MdOutlineLocalShipping className="text-5xl text-black" />
          </Gesture>
          <div className="flex flex-col items-start justify-center ml-4 space-y-2">
            <h3 className="font-bold text-lg">Free Shipping</h3>
            <p className="text-wrap w-72 text-gray-500">
              A free trackable two days delivery service on all orders over $90.
            </p>
          </div>
        </div>
        <div className="flex flex-row items-start justify-center">
          <Gesture scaleHover={1.1}>
            <MdOutlinePayments className="text-5xl text-black" />
          </Gesture>

          <div className="flex flex-col items-start justify-center ml-4 space-y-2">
            <h3 className="font-bold text-lg">Flexible Payment</h3>
            <p className="text-wrap w-72 text-gray-500">
              All orders placed before Sunday to Friday are dispatched same day.
            </p>
          </div>
        </div>
        <div className="flex flex-row items-start justify-center">
          <Gesture scaleHover={1.1}>
            <MdCurrencyExchange className="text-5xl text-black" />
          </Gesture>
          <div className="flex flex-col items-start justify-center ml-4 space-y-2">
            <h3 className="font-bold text-lg">Money Back Guarantee</h3>
            <p className="text-wrap w-72 text-gray-500">
              We offer customers 100% money back guarantee on everything.
            </p>
          </div>
        </div>
        <div className="flex flex-row items-start justify-center">
          <Gesture scaleHover={1.1}>
            <FaExchangeAlt className="text-5xl text-black" />
          </Gesture>
          <div className="flex flex-col items-start justify-center ml-4 space-y-2">
            <h3 className="font-bold text-lg">Exchanges & Returns</h3>
            <p className="text-wrap w-72 text-gray-500">
              You have 30 days from the shiping date to return your purchase.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ElemtentorWidgetContainer;
