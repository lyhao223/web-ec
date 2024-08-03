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
    <div className="xl:p-36 2xl:p-48 lg:p-16 md:p-18 p-10 text-black">
      {status === "loading" && <div>Loading...</div>}
      {status === "failed" && <div>Failed to load product</div>}
      {status === "succeeded" && product && (
        <div
          className="flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-col flex-col items-center justify-center 2xl:space-x-40 xl:space-x-32 lg:space-x-24 md:space-y-4 space-y-5"
          key={product.id}>
          <img
            src={product.image}
            className="xl:w-[30rem] xl:h-[30rem] 2xl:w-[35rem] 2xl:h-[35rem] lg:w-96 lg:h-96 w-56 h-56"
          />
          <div className="flex flex-col 2xl:items-start 2xl:justify-start 2xl:space-y-6 xl:items-start xl:justify-start xl:space-y-4 lg:items-start lg:justify-start lg:space-y-2 md:items-start md:justify-start md:space-y-2 items-center justify-center space-y-3 ">
            <h1 className="subpixel-antialiased tracking-tight 2xl:text-4xl xl:text-4xl lg:text-4xl md:text-2xl text-lg">
              {product.title}
            </h1>
            <p className="subpixel-antialiased text-2xl font-medium tracking-tight">{product.price}$</p>
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
            <div className="flex 2xl:flex-row 2xl:items-center 2xl:justify-center xl:flex-row xl:items-center xl:justify-center lg:flex-row lg:items-center lg:justify-center md:flex-row md:items-center md:justify-center flex-row items-start justify-start">
              <div className="2xl:border-l-2 2xl:border-t-2 2xl:border-b-2 2xl:p-4 xl:border-l-2 xl:border-t-2 xl:border-b-2 xl:p-4 lg:border-l-2 lg:border-t-2 lg:border-b-2 lg:p-4 md:border-l-2 md:border-t-2 md:border-b-2 md:p-4 border-t-2 border-b-2 border-l-2 p-2 border-gray-400">
                Quantity
              </div>
              <input
                type="number"
                className="2xl:border-2 2xl:p-4 xl:border-2 xl:p-4 lg:border-2 lg:p-4 md:border-2 md:p-4 border-2 p-2  border-gray-400 w-36 outline-none rounded-none"
                defaultValue="1"
                onChange={handleOnChange}
                max={5}
                min={1}
              />
              <button
                className="ml-12 border-2 border-gray-400 2xl:p-4 xl:p-4 lg:p-4 md:p-4 p-2 transition duration-200 hover:bg-black hover:text-white ease-linear"
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
