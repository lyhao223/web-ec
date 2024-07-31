"use client";
import React, { use, useEffect, useState } from "react";
import { GoPlusCircle } from "react-icons/go";
import { GrSubtractCircle } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/app/services/redux/store";
import {
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} from "@/app/services/redux/slices/cartSlice";
import { Button, FormControl, FormControlLabel, FormLabel, InputAdornment, Radio, RadioGroup, TextField } from "@mui/material";
import { FaCcVisa } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
import { SiAmericanexpress } from "react-icons/si";
import { set } from "mongoose";
import { useRouter } from "next/navigation";

const iconMethod = [
  {id:1, icon: <FaCcVisa />, name: "Visa"},
  {id:2, icon: <FaCcMastercard />, name: "Mastercard"},
  {id:3, icon: <SiAmericanexpress />, name: "American Express"},
]
const CartItem = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch<AppDispatch>();

  // State to hold total quantities and amounts to avoid discrepancies during SSR
  const [totals, setTotals] = useState({
    totalQuantity: 0,
    totalAmount: 0,

  });
  const [paymentMethod, setPaymentMethod] = useState('');
  const [open, setOpen] = useState(false);
  const [cardNumber, setCardNumber] = useState("");
  const [cardHolderName, setCardHolderName] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [lastNumberCard, setLastNumberCard] = useState("");
  const handlePaymentMethodChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentMethod(e.target.value);
    setOpen(true);
  };
  const [isClient, setIsClient] = useState(false);
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

  const router = useRouter();
  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const formattedValue = value.replace(/\D/g, "").replace(/(\d{4})(?=\d)/g, "$1 ");
    setCardNumber(formattedValue);
  }

  const handleExpirationDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const formattedValue = value
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d{0,2})/, "$1/$2")
      .slice(0, 5);
    setExpirationDate(formattedValue);
  }

  const handleCvvChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const formattedValue = value.replace(/\D/g, "").slice(0, 3);
    setCvv(formattedValue);
  }

  const handleCardHolderNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const formattedValue = value.replace(/[^a-zA-Z\s]/g, "");
    setCardHolderName(formattedValue);
  };

  const handleAddCard = (e: React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    if(cardNumber.length < 19 || cardHolderName.length < 3 || expirationDate.length < 5 || cvv.length < 3){
      alert("Please fill in all fields correctly");
      return;
    }
    const lastFour = cardNumber.replace(/\s/g, "").slice(-4);
    setLastNumberCard(lastFour);
    console.log(lastNumberCard);
    setOpen(false);
  }

  const orderData = {
    items: cartItems,
    paymentMethod,
    totalAmount: totals.totalAmount,
  };
  const handleSubmitOrder = async (e: any) => {
    console.log(orderData);
    if(paymentMethod === "credit" && lastNumberCard === ""){
      alert("Please add your card");
      return;
    }
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      })
      const result = await res.json();
      if (res.ok) {
        console.log(result.message);
        dispatch(clearCart());
        router.push('/')
      } else {
        console.error(result.message);
      }
    } catch (error) {
      console.error("Error creating order:", error);
    }
  }
  return (
    <>
      {!isClient ? (
        "failed"
      ) : (
        <div className="relative bottom-[2.8rem] flex flex-col items-start justify-start">
          <h1 className="subpixel-antialiased text-5xl">Your Order</h1>
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
          <div className="flex lg:flex-row flex-col lg:space-y-0 space-y-4 items-center justify-center space-x-32 ">
            <p className="lg:text-lg text-sm font-medium">
              Total Quantity: {totals.totalQuantity}
            </p>
            <p className="lg:text-lg text-sm font-medium">
              Total Amount: {totals.totalAmount.toFixed(2)}$
            </p>
          </div>
          <div className="relative mt-8 w-full">
            <div className="flex flex-row items-center justify-between">
            <FormControl className="flex flex-col items-start justify-start">
              <FormLabel>Payment Method</FormLabel>
              <RadioGroup value={paymentMethod} onChange={handlePaymentMethodChange}>
                <FormControlLabel
                  value="credit"
                  control={<Radio />}
                  label={
                    <span>
                      Credit card {lastNumberCard && <span className="text-gray-400 text-sm">ending in Card*** {lastNumberCard}</span>}
                    </span>
                  }               
                />
                  <FormControlLabel
                  value="cash"
                  control={<Radio />}
                  label={
                    <span>
                      With cash
                    </span>
                  }               
                />
              </RadioGroup>
            </FormControl>
            <Button variant="contained" color="primary" onClick={handleSubmitOrder}>
              Submit Order
            </Button>
            </div>
            {paymentMethod === "credit" && open && (
              <div className="absolute left-0 top-full mt-4 w-full bg-white p-4 border border-gray-200 shadow-lg">
                <p className="subpixel-antialiased tracking-wider text-lg">Add your card with</p>
                <div className="flex flex-row items-center justify-start space-x-4">
                  {iconMethod.map((item) => (
                    <div key={item.id} className="flex flex-col items-center justify-center">
                      {item.icon}                   
                    </div>
                  ))}
                  </div>
                  <form id="payment" onSubmit={handleAddCard} className="flex flex-col items-start justify-start">

                  <TextField 
                  label="Card Number" 
                  variant="outlined" 
                  fullWidth 
                  margin="normal" 
                  value={cardNumber} 
                  onChange={handleCardNumberChange} 
                  inputProps={{ maxLength: 19 }}/>

                  <TextField 
                  label="Card Holder Name" 
                  variant="outlined" 
                  fullWidth margin="normal" 
                  value={cardHolderName} 
                  onChange={handleCardHolderNameChange}/>

                  <TextField 
                  label="Expiration Date" 
                  variant="outlined" 
                  fullWidth 
                  margin="normal" 
                  value={expirationDate}
                  onChange={handleExpirationDateChange}
                  />

                  <TextField 
                  label="CVV" 
                  variant="outlined" 
                  fullWidth 
                  margin="normal" 
                  value={cvv}
                  onChange={handleCvvChange}
                  />
                  <Button id="payment" variant="contained" color="primary" className="mt-2" type="submit">
                    Submit
                  </Button>
                  </form>
              </div>
            )}
          </div>
          
        </div>
      )}
    </>
  );
};

export default CartItem;
