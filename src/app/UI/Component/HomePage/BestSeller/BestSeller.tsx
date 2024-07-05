import { AppDispatch, RootState } from "@/app/services/redux/store";
import React, { use, useEffect } from "react";
import Carousel from "react-multi-carousel";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts } from "@/app/services/redux/slices/productSlice";
import Gesture from "@/app/UI/Animation/Gesture";
import Button from "@/app/UI/Reusable/Button";
import {addItemToCart} from "@/app/services/redux/slices/cartSlice";
const BestSeller = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const dispatch = useDispatch<AppDispatch>();
  const products = useSelector((state: RootState) => state.products.products);
  const status = useSelector((state: RootState) => state.products.status);
  const error = useSelector((state: RootState) => state.products.error);
  const visableProducts = useSelector(
    (state: RootState) => state.menuSection.visable
  );
  useEffect(() => {
    if (typeof window !== "undefined") {
      dispatch(fetchAllProducts());
    }
  }, [dispatch]);

  const handleAddToCart = (product: any) => {
    dispatch(addItemToCart(product));
  };
  return (
    <section id="best__seller" className="mt-20 p-4">
      <h1 className="text-5xl font-bold antialiased tracking-tight mb-10">
        Best Seller
      </h1>
      {status === "loading" && <p>Loading...</p>}
      {status === "failed" && <p>{error}</p>}
      <Carousel responsive={responsive} showDots itemClass="mb-12 text-center" autoPlay={true} autoPlaySpeed={2500} infinite={true} arrows={false}>
        {status === "succeeded" &&
          products.slice(0, visableProducts).map((product, index) => (
            <div className="flex flex-col justify-center items-center space-x-4 space-y-5 border p-5" key={index}>
              <Gesture scaleHover={1.1}>
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-48 h-48"
                />
              </Gesture>
              <p className="truncate w-56">{product.title}</p>
              <p>{product.price}$</p>
              <Button onClick={()=>handleAddToCart(product)}>
                Add to cart
              </Button>
            </div>
          ))}
      </Carousel>
    </section>
  );
};

export default BestSeller;
