import { toggleCategory } from "@/app/services/redux/slices/productsShopSlice";
import { AppDispatch, RootState } from "@/app/services/redux/store";
import { Checkbox } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const CheckBoxCategory = () => {
  const CheckBoxContent = [
    {
      id: 1,
      name: "electronics",
      title: "Electronics",
    },
    {
      id: 2,
      name: "jewelery",
      title: "Jewelery",
    },
    {
      id: 3,
      name: "men's clothing",
      title: "Men's Clothing",
    },
    {
      id: 4,
      name: "women's clothing",
      title: "Women's Clothing",
    },
  ];
  const dispatch = useDispatch<AppDispatch>();
  const selectedCategories = useSelector(
    (state: RootState) => state.productShop.selectedCategories
  );

  const { categoryCounts } = useSelector(
    (state: RootState) => state.productShop
  );
  const handleCheckBoxChange = (category: string) => {
    dispatch(toggleCategory(category));
  };
  return (
    <div className="flex flex-col items-start justify-center xl:space-y-8 xl:mt-12 space-y-6">
      {CheckBoxContent.map((category) => (
        <div
          className="flex flex-row items-center justify-center space-x-2"
          key={category.id}>
          <Checkbox
            id={category.id.toString()}
            name={category.name}
            value={category.name}
            checked={selectedCategories.includes(category.name)}
            onChange={() => handleCheckBoxChange(category.name)}
          />
          <label
            className="text-lg font-medium tracking-tighter"
            id={category.id.toString()}
            htmlFor={category.name}>
            {category.title}
          </label>
          <p className="text-sm font-medium">
            ({categoryCounts[category.name] || 0})
          </p>
        </div>
      ))}
    </div>
  );
};

export default CheckBoxCategory;
