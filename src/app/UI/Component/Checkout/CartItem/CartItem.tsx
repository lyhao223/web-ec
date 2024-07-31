"use client";
import React, { useEffect, useState } from "react";
import { GoPlusCircle } from "react-icons/go";
import { GrSubtractCircle } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/app/services/redux/store";
import {
  increaseItemQuantity,
  decreaseItemQuantity,
} from "@/app/services/redux/slices/cartSlice";

const CartItem = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch<AppDispatch>();

  // State to hold total quantities and amounts to avoid discrepancies during SSR
  const [totals, setTotals] = useState({
    totalQuantity: 0,
    totalAmount: 0,
  });
  const [isClient, setIsClient] = useState(false);

  //   useEffect(() => {
  //     setIsClient(true);
  //   }, []);
  useEffect(() => {
    setIsClient(true);
    const totalQuantity = cartItems.reduce(
      (acc, item) => acc + item.quantity,
      0
    );
    const totalAmount = cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    setTotals({
      totalQuantity,
      totalAmount,
    });
  }, [cartItems]);

  const noLoadingItem = (
    <p className="text-2xl font-medium text-red-700">No item in cart</p>
  );

  return (
    <>
      {!isClient ? (
        "failed"
      ) : (
        <div className="relative lg:w-[48rem] lg:h-[30rem] md:w-[35rem] w-[22rem] bg-white lg:top-48 lg:left-32 xl:top-28 2xl:left-[37rem] 2xl:top-48 xl:left-96 top-44 left-6  md:top-48 md:left-28  rounded-md p-10">
          <h1 className="text-2xl font-medium">Your Order</h1>
          <div className="flex flex-col items-center justify-start p-3 overflow-y-scroll h-56 my-6">
            {cartItems.length === 0
              ? noLoadingItem
              : cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex lg:flex-row flex-col lg:items-start lg:justify-start items-center justify-center lg:space-x-24 lg:space-y-2 my-4">
                    <img
                      src={item.image}
                      className="w-20 h-20"
                      alt={item.title}
                    />
                    <p className="truncate w-32 text-start">{item.title}</p>
                    <p className="font-medium text-center text-sm ">
                      {item.price}$
                    </p>
                    <div className="flex flex-row items-center justify-center lg:space-x-6 space-x-3 lg:space-y-0 my-3">
                      <button
                        onClick={() => dispatch(decreaseItemQuantity(item.id))}>
                        <GrSubtractCircle size={32} />
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() => dispatch(increaseItemQuantity(item.id))}>
                        <GoPlusCircle size={32} />
                      </button>
                    </div>
                  </div>
                ))}
          </div>
          <div className="flex lg:flex-row flex-col lg:space-y-0 space-y-4 items-center justify-between">
            <p className="lg:text-lg text-sm font-medium">
              Total Quantity: {totals.totalQuantity}
            </p>
            <p className="lg:text-lg text-sm font-medium">
              Total Amount: {totals.totalAmount.toFixed(2)}$
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default CartItem;
