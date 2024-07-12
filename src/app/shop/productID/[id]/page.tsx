// src/app/shop/detail/[slug].tsx
"use client";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/services/redux/store";
import { fetchDetailProduct } from "@/app/services/redux/slices/productDetailSlice";
import { FaStar } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { addItemToCart } from "@/app/services/redux/slices/cartSlice";


const ProductDetail = ({ params }: { params: { id: any } }) => {
  const { status, product } = useSelector((state: RootState) => state.productDetailSlice);
  const dispatch = useDispatch<AppDispatch>();
  const [quantity, setQuantity] = useState(1);
  useEffect(() => {
    dispatch(fetchDetailProduct(params.id));
  }, [dispatch, params.id]);

 const handleAddToCart = () => {
  if (product) {
    dispatch(addItemToCart({ item:product, quantity: quantity}));
  }
  }

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(parseInt(e.target.value));
  }

  return (
    <div className="xl:p-48 2xl:p-48 p-12 text-black">
      {status === "loading" && <div>Loading...</div>}
      {status === "failed" && <div>Failed to load product</div>}
      {status === "succeeded" && product && (
        <div className="flex flex-row items-start justify-start space-x-56" key={product.id}>
          <img src={product.image} className="w-[35rem] h-[35rem]"/>
          <div className="flex flex-col items-start justify-start space-y-8">
            <h1 className="subpixel-antialiased tracking-widest text-4xl">{product.title}</h1>
            <p className="subpixel-antialiased text-2xl">{product.price}$</p>
            <div className="flex flex-row items-center justify-center space-x-2">
              <FaStar className="text-yellow-500"/>
              <FaStar className="text-yellow-500"/>
              <FaStar className="text-yellow-500"/>
              <FaStar className="text-yellow-500"/>
              <FaStar className="text-yellow-500"/>
            </div>
            <div className="text-wrap">
            <p className="subpixel-antialiased text-lg">{product.description}</p>
            </div>
            <div className="flex flex-row items-center justify-center space-x-2">
              <FaRegEye className="text-lg"/>
              <p className="subpixel-antialiased text-lg">{product.rating.count} people are viewing this product right now.</p>
            </div>
            <p className="text-sm">Stock: In stock, ready to be shipped</p>
            <div className="border-1 p-[0.125rem] border-green-600 w-80 bg-green-600"/>
            <div className="flex flex-row items-center justify-center">
              <div className="border-l-2 border-t-2 border-b-2 p-4 border-gray-400">Quantity</div>
              <input type="number" className="border-2 p-4 border-gray-400 w-40 outline-none" defaultValue="1" onChange={handleOnChange}/>
              <button className="ml-12 border-2 border-gray-400 p-4 transition duration-200 hover:bg-black hover:text-white ease-linear" onClick={handleAddToCart}> Add to cart</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
