import React, { Fragment } from "react";
import { GoPlusCircle } from "react-icons/go";
import { GrSubtractCircle } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/app/services/redux/store";
import { increaseItemQuantity, decreaseItemQuantity } from "@/app/services/redux/slices/cartSlice";
import Gesture from "../../Animate/Gesture";
interface ItemClickProps{
  open: ()=>void;
}
const ItemsModal = ({open}: ItemClickProps) => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const quantity = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch<AppDispatch>();
  const TotalQuantity = quantity.reduce((acc, item) => acc + item.quantity, 0);
  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const noItems = cartItems.length === 0;
  const index = 'totalItems';
  const noLoadingItem =(<p className="text-2xl font-medium text-red-700">No item in cart</p>)
  return (
    <div className="relative lg:w-[48rem] lg:h-[30rem] w-96 bg-white lg:top-5 xl:top-16 lg:left-96 xl:left-[38rem] top-20 left-6 rounded-md p-10">
      <h1 className="text-2xl font-medium">Shopping Cart</h1>
      <div className="flex flex-col items-center justify-start p-3 overflow-y-scroll h-56 my-6">
        {
        noItems ? noLoadingItem :
        cartItems.map((item) => (
          <Fragment key={item.id}>
            <div
              className="flex lg:flex-row flex-col lg:items-start lg:justify-start items-center justify-center lg:space-x-24 lg:space-y-2 my-4"
              key={item.id}>
              <img src={item.image} className="w-20 h-20" />
              <p className="truncate w-32 text-start">{item.title}</p>
              <p className="font-medium text-center text-sm ">{item.price}$</p>
              <div className="flex flex-row items-center justify-center lg:space-x-6 space-x-3 lg:space-y-0 my-3">
                <button>
                  <GrSubtractCircle size={32} onClick={()=>dispatch(decreaseItemQuantity(item.id))}/>
                </button>
                <span>{item.quantity}</span>
                <button>
                  <GoPlusCircle size={32} onClick={()=>dispatch(increaseItemQuantity(item.id))}/>
                </button>
              </div>
            </div>
          </Fragment>
        ))}
      </div>
      <div className="flex lg:flex-row flex-col lg:space-y-0 space-y-4 items-center justify-between">
        <p className="lg:text-lg text-sm font-medium">Total Quantity: {TotalQuantity}</p>
        <p className="lg:text-lg text-sm font-medium">Total Amount: {totalAmount.toFixed(2)}$</p>
        <Gesture scaleHover={1.1} scaleTap={0.9}>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Checkout</button>
        </Gesture>
        <Gesture scaleHover={1.1} scaleTap={0.9}>
          <button className="bg-red-500 text-white px-4 py-2 rounded-md" onClick={open}>Close</button>
        </Gesture>
      </div>
    </div>
  );
};

export default ItemsModal;
