"use client";
import {
  fetchAllProducts,
  setOption,
  loadMoreProducts,
  collapseProducts,
} from "@/app/services/redux/slices/productsShopSlice";
import { AppDispatch, RootState } from "@/app/services/redux/store";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "@/app/services/redux/slices/cartSlice";
import { setPriceRange } from "@/app/services/redux/slices/productsShopSlice";
import { resetFilter } from "@/app/services/redux/slices/productsShopSlice";
import Link from "next/link";
import SelectOption from "@/app/UI/Component/ShopPage/AllProducts/SelectOption";
import ShowAllProducts from "@/app/UI/Component/ShopPage/AllProducts/ShowAllProducts";
import CheckBoxCategory from "@/app/UI/Component/ShopPage/Checkbox/CheckBoxCategory";
import SliderPrice from "@/app/UI/Component/ShopPage/SliderPrice/SliderPrice";
import Button from "@/app/UI/Reusable/Button";
import { fetchCategoryProducts } from "@/app/services/redux/slices/productsShopSlice";

const Page = () => {
  const [value, setValue] = useState([0, 2000]);
  const [error, setError] = useState({ min: false, max: false });
  const dispatch = useDispatch<AppDispatch>();
  const status = useSelector((state: RootState) => state.productShop.status);
  const products = useSelector(
    (state: RootState) => state.productShop.products
  );
  const visibleProducts = useSelector(
    (state: RootState) => state.productShop.visibleProducts
  );
  const option = useSelector((state: RootState) => state.productShop.option);

  //fetch all products
  useEffect(() => {
    dispatch(fetchCategoryProducts(`women's%20clothing`));
    console.log("done");
  }, [dispatch]);
  useEffect(() => {
    if (products) {
      document.title = "Sale For Women - Shopping with every products";
    }
  }, [products]);
  //filter and sort products
  const handleOption = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setOption(e.target.value as "all" | "highToLow" | "lowToHigh"));
  };

  //load more products
  const handleClickLoadMore = () => {
    dispatch(loadMoreProducts());
  };

  //collapse products
  const handleCollapse = () => {
    dispatch(collapseProducts());
  };

  //add to cart
  const handleAddToCart = (product: any) => {
    dispatch(addItemToCart({ item: product, quantity: 1 }));
  };

  //filter price range
  const handleSetPriceRange = () => {
    dispatch(setPriceRange([value[0], value[1]]));
  };

  const minDistance = 10;
  const handleChangeSlider = (
    event: Event,
    newValue: number | number[],
    activeThumb: number
  ) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue([Math.min(newValue[0], value[1] - minDistance), value[1]]);
    } else {
      setValue([value[0], Math.max(newValue[1], value[0] + minDistance)]);
    }
  };

  const handleInputChange =
    (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = Number(event.target.value);
      if (newValue < 0 || newValue > 2000) {
        setError((prevError) => ({
          ...prevError,
          [index === 0 ? "min" : "max"]: true,
        }));
        return;
      } else {
        setError((prevError) => ({
          ...prevError,
          [index === 0 ? "min" : "max"]: false,
        }));
      }
      if (index === 0) {
        setValue([newValue, value[1]]);
      } else {
        setValue([value[0], newValue]);
      }
    };

  const handleBlur = () => {
    if (value[1] - value[0] < minDistance) {
      if (value[0] > value[1] - minDistance) {
        setValue([value[1] - minDistance, value[1]]);
      } else {
        setValue([value[0], value[0] + minDistance]);
      }
    }
  };

  const handleResetFilter = () => {
    dispatch(resetFilter());
    setValue([0, 2000]);
  };

  return (
    <section className="relative z-10 xl:p-32 2xl:p-32 p-2 lg:p-4 md:p-10">
      <div className="grid xl:grid-cols-5 lg:grid-cols-4 grid-rows-1 xl:gap-6 xl:gap-x-6 lg:gap-x-4 gap-2">
        <div className="xl:col-span-4 2xl:col-span-4 lg:col-span-3 col-span-2 row-span-1">
          <div className="flex xl:flex-row 2xl:flex-row lg:flex-row flex-col space-y-4 xl:space-y-0 2xl:space-y-0 items-center justify-between">
            <div className="subpixel-antialiased leading-3 tracking-tight">
              <h1 className="text-black text-4xl">Shopping</h1>
            </div>
            <SelectOption optionValue={option} onChange={handleOption}>
              <option value="all">All</option>
              <option value="highToLow">High to Low</option>
              <option value="lowToHigh">Low to High</option>
            </SelectOption>
          </div>
          <div className="grid xl:grid-cols-3 2xl:xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-2 grid-cols-1 items-center justify-center gap-x-12 gap-y-10  mx-10 mt-10">
            {status === "loading" && (
              <p className="flex items-center justify-center">Loading...</p>
            )}
            {status === "failed" && <p>Failed to load data</p>}
            {status === "succeeded" &&
              products.slice(0, visibleProducts).map((product) => (
                <ShowAllProducts
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  price={product.price}
                  image={product.image}>
                  <Button onClick={() => handleAddToCart(product)}>
                    Add to Cart
                  </Button>
                </ShowAllProducts>
              ))}
          </div>
          <div className="flex items-center justify-center xl:mt-12 2xl:mt-14 lg:my-14 my-14">
            {visibleProducts < products.length && status === "succeeded" && (
              <Button onClick={handleClickLoadMore}>Load More</Button>
            )}
            {visibleProducts > products.length && status === "succeeded" && (
              <Button onClick={handleCollapse}>Collapse</Button>
            )}
          </div>
        </div>

        <div className="xl:col-span-1 lg:col-span-1 2xl:col-span-1 col-span-1 lg:mt-3 xl:mt-0 2xl:mt-0">
          <h1 className="text-4xl xl:mb-0 mb-12">Category</h1>

          <div className="mt-14">
            <h1 className="text-4xl">Price</h1>
            <SliderPrice
              onClick={handleSetPriceRange}
              value={value}
              handleChangeSlider={handleChangeSlider}
              handleInputChange={handleInputChange}
              handleBlur={handleBlur}
              error={error}
              resetFilter={handleResetFilter}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
