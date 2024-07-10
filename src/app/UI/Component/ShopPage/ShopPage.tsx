import {
  fetchAllProducts,
  setOption,
  loadMoreProducts,
  collapseProducts,
} from "@/app/services/redux/slices/productsShopSlice";
import { AppDispatch, RootState } from "@/app/services/redux/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SelectOption from "./AllProducts/SelectOption";
import ShowAllProducts from "./AllProducts/ShowAllProducts";
import Button from "../../Reusable/Button";
import { addItemToCart } from "@/app/services/redux/slices/cartSlice";
import CheckBoxCategory from "./Checkbox/CheckBoxCategory";
import { Input, Slider } from "@mui/material";
import SliderPrice from "./SliderPrice/SliderPrice";
const ShopPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const status = useSelector((state: RootState) => state.productShop.status);
  const products = useSelector(
    (state: RootState) => state.productShop.products
  );
  const visibleProducts = useSelector(
    (state: RootState) => state.productShop.visibleProducts
  );
  const option = useSelector((state: RootState) => state.productShop.option);

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  const handleOption = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setOption(e.target.value as "all" | "highToLow" | "lowToHigh"));
  };
  const handleClickLoadMore = () => {
    dispatch(loadMoreProducts());
  };

  const handleCollapse = () => {
    dispatch(collapseProducts());
  };

  const handleAddToCart = (product: any) => {
    dispatch(addItemToCart(product));
  };
  return (
    <section className="relative z-10 xl:p-32 2xl:p-32 p-2">
      <div className="grid xl:grid-cols-5 grid-rows-1 xl:gap-6 xl:gap-x-6 gap-2">
        <div className="xl:col-span-4 row-span-1">
          <div className="flex xl:flex-row 2xl:flex-row flex-col space-y-4 xl:space-y-0 2xl:space-y-0 items-center justify-between">
            <div className="subpixel-antialiased leading-3 tracking-tight">
              <h1 className="text-black text-4xl">Shopping</h1>
            </div>
            <SelectOption optionValue={option} onChange={handleOption}>
              <option value="all">All</option>
              <option value="highToLow">High to Low</option>
              <option value="lowToHigh">Low to High</option>
            </SelectOption>
          </div>
          <div className="grid xl:grid-cols-3 2xl:xl:grid-cols-3 grid-cols-1 items-center justify-center gap-x-12 gap-y-10  mx-10 mt-10">
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
          <div className="flex items-center justify-center mt-12">
            {visibleProducts < products.length && status === "succeeded" && (
              <Button onClick={handleClickLoadMore}>Load More</Button>
            )}
            {visibleProducts > products.length && status === "succeeded" && (
              <Button onClick={handleCollapse}>Collapse</Button>
            )}
          </div>
        </div>
        <div className="xl:col-span-1">
          <div className="subpixel-antialiased tracking-wide">
            <h1 className="text-4xl">Category</h1>
            <CheckBoxCategory />
          </div>
          <div className="mt-14">
            <h1 className="text-4xl">Price</h1>
            <SliderPrice />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopPage;
