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
import StarRating from "@/app/services/utils/arrayStars";


const ProductDetail = ({ params }: { params: { id: any } }) => {
  const { status, product } = useSelector(
    (state: RootState) => state.productDetailSlice
  );
  const dispatch = useDispatch<AppDispatch>();
  const [quantity, setQuantity] = useState(1);
  useEffect(() => {
    dispatch(fetchDetailProduct(params.id));
  }, [dispatch, params.id]);
    useEffect(() => {
    if (product) {
      document.title = `${product.title} - Shopping with every products`;
    }
  }, [product]);
  const handleAddToCart = () => {
    if (product) {
      dispatch(addItemToCart({ item: product, quantity: quantity }));
    }
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(parseInt(e.target.value));
  };

  return (
    <div className="xl:p-36 2xl:p-48 lg:p-16 p-14 text-black">
      {status === "loading" && <div>Loading...</div>}
      {status === "failed" && <div>Failed to load product</div>}
      {status === "succeeded" && product && (
        <div
          className="flex xl:flex-row flex-col xl:items-start xl:justify-start items-center justify-center lg:space-x-36 sm:space-x-36 xl:space-x-52 space-y-16"
          key={product.id}>
          <img
            src={product.image}
            className="xl:w-[30rem] xl:h-[30rem] 2xl:w-[35rem] 2xl:h-[35rem] lg:w-96 lg:h-96 w-80 h-80"
          />
          <div className="flex flex-col items-start justify-start xl:space-y-8 2xl:space-y-8 lg:space-y-4 space-y-3">
            <h1 className="subpixel-antialiased tracking-widest text-4xl">
              {product.title}
            </h1>
            <p className="subpixel-antialiased text-2xl">{product.price}$</p>
            <div className="flex flex-row items-center justify-center space-x-2">
              <StarRating rate={product.rating.rate} />
              <p className="subpixel-antialiased font-medium">
                {product.rating.rate}
              </p>
            </div>
            <div className="text-wrap">
              <p className="subpixel-antialiased text-lg">
                {product.description}
              </p>
            </div>
            <div className="flex flex-row items-center justify-center space-x-2">
              <FaRegEye className="text-lg" />
              <p className="subpixel-antialiased xl:text-lg text-sm">
                {product.rating.count} people are viewing this product right
                now.
              </p>
            </div>
            <p className="text-sm">Stock: In stock, ready to be shipped</p>
            <div className="border-1 p-[0.125rem] border-green-600 w-80 bg-green-600" />
            <div className="flex flex-row items-center justify-center">
              <div className="border-l-2 border-t-2 border-b-2 p-4 border-gray-400">
                Quantity
              </div>
              <input
                type="number"
                className="border-2 p-4 border-gray-400 w-36 outline-none"
                defaultValue="1"
                onChange={handleOnChange}
                max={5}
                min={1}
              />
              <button
                className="ml-12 border-2 border-gray-400 p-4 transition duration-200 hover:bg-black hover:text-white ease-linear"
                onClick={handleAddToCart}>
                <span className="text-nowrap">Add to cart</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
