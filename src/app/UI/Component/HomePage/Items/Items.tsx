import React, { use, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "@/app/services/redux/store";
import { fetchProducts } from "../../../../services/redux/slices/menuSlice";
import { addItemToCart } from "@/app/services/redux/slices/cartSlice";
import Gesture from "../../../Animation/Gesture";
import LoadingItems from "./LoadingItems";
import ErrorLoadingItems from "./ErrorLoadingItems";
const Items = () => {
  const dispatch = useDispatch<AppDispatch>();
  const currentSection = useSelector(
    (state: RootState) => state.menuSection.currentSection
  );
  const products = useSelector(
    (state: RootState) => state.menuSection.products[currentSection]
  );
  const status = useSelector((state: RootState) => state.menuSection.status);
  const visableProducts = useSelector(
    (state: RootState) => state.menuSection.visable
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      dispatch(fetchProducts(currentSection));
    }
  }, [dispatch, currentSection]);

  const handleAddToCart = (product: any) => {
    dispatch(addItemToCart(product));
  };
  return (
    <div className="flex xl:flex-row flex-col items-center justify-center xl:px-6 p-4 xl:space-x-8 space-y-2 xl:space-y-0 my-12">
      {status === "loading" && <LoadingItems />}
      {status === "failed" && <ErrorLoadingItems />}
      {status === "succeeded" &&
        products.slice(0, visableProducts).map((product, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center space-y-7 border border-black w-full p-6">
            <Gesture scaleHover={1.1}>
              <img src={product.image} className="w-80 h-64" />
            </Gesture>
            <p className="truncate w-64 text-center text-lg">{product.title}</p>
            <p>{product.price}$</p>
            <Gesture
              scaleHover={1.1}
              scaleTap={0.9}
              classes="flex flex-row items-center justify-center">
              <button
                className="border p-3 border-black w-56 transition-all duration-200 hover:text-white hover:bg-black ease-linear"
                onClick={() => handleAddToCart(product)}>
                Add to Cart
              </button>
            </Gesture>
          </div>
        ))}
    </div>
  );
};

export default Items;
