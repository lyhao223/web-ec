import React from "react";
import { GoPlusCircle } from "react-icons/go";
import { GrSubtractCircle } from "react-icons/gr";
import { useSelector } from "react-redux";
import { RootState } from "@/app/services/redux/store";
const ItemsModal = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  return (
    <div className="relative lg:w-[48rem] lg:h-[30rem] w-96 bg-white xl:top-5 xl:left-96 top-20 left-6 rounded-md p-10">
      <h1 className="text-2xl font-medium">Shopping Cart</h1>
      <div className="flex flex-col items-center justify-start p-3 overflow-y-scroll h-56 my-6">
        {cartItems.map((item) => (
          <div
            className="flex flex-row items-start justify-start space-x-24 space-y-2 my-4"
            key={item.id}>
            <img src={item.image} className="w-20 h-20" />
            <p className="truncate w-32 text-start">{item.title}</p>
            <p className="font-medium text-center text-sm ">{item.price}$</p>
            <div className="flex flex-row items-center justify-center space-x-6">
              <button>
                <GrSubtractCircle size={32} />
              </button>
              <span>{item.quantity}</span>
              <button>
                <GoPlusCircle size={32} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemsModal;
