import { AppDispatch, RootState } from "@/app/services/redux/store";
import React, { use, useEffect } from "react";
import Carousel from "react-multi-carousel";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts } from "@/app/services/redux/slices/productSlice";

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
  return (
    <section id="best__seller" className="mt-20 p-4">
      <h1 className="text-5xl font-bold antialiased tracking-tight">
        Best Seller
      </h1>
      {status === "loading" && <p>Loading...</p>}
      {status === "failed" && <p>{error}</p>}
      <Carousel responsive={responsive} showDots itemClass="text-center">
        {status === "succeeded" &&
          products.slice(0, visableProducts).map((product, index) => (
            <div className="flex flex-col" key={index}>
              <img
                src={product.image}
                alt={product.title}
                className="w-32 h-32"
              />
              <p className="text-wrap w-32">{product.title}</p>
            </div>
          ))}
      </Carousel>
    </section>
  );
};

export default BestSeller;
