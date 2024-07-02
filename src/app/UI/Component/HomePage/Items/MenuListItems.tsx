import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../../../services/redux/store";
import { setMenuSection } from "@/app/services/redux/slices/menuSlice";
import { fetchProducts } from "@/app/services/redux/slices/menuSlice";
const MenuListItems = () => {
  const dispatch = useDispatch<AppDispatch>();
  const currentSection = useSelector(
    (state: RootState) => state.menuSection.currentSection
  );
  const handleSectionChange = (section: "HOT" | "NEW" | "SALE") => {
    dispatch(setMenuSection(section));
    dispatch(fetchProducts(section));
  };
  return (
    <div className="flex flex-row items-center md:justify-start sm:justify-start justify-center md:space-x-12 space-x-6 md:ml-12">
      <div
        className="border border-black px-8 py-1 cursor-pointer transition-all duration-200 hover:bg-black group"
        onClick={() => handleSectionChange("HOT")}>
        <span
          className={`antialiased font-light tracking-tight line-clamp-3 md:text-lg text-sm group-hover:text-white ${
            currentSection === "HOT" ? "underline" : ""
          }`}>
          HOT
        </span>
      </div>
      <div
        className="border border-black px-8 py-1 cursor-pointer transition-all duration-200 hover:bg-black group"
        onClick={() => handleSectionChange("NEW")}>
        <span
          className={`antialiased font-light tracking-tight line-clamp-3 md:text-lg text-sm group-hover:text-white ${
            currentSection === "NEW" ? "underline" : ""
          }`}>
          NEW
        </span>
      </div>
      <div
        className="border border-black px-8 py-1 cursor-pointer transition-all duration-200 hover:bg-black group"
        onClick={() => handleSectionChange("SALE")}>
        <span
          className={`antialiased font-light tracking-tight line-clamp-3 md:text-lg text-sm group-hover:text-white ${
            currentSection === "SALE" ? "underline" : ""
          }`}>
          SALES
        </span>
      </div>
    </div>
  );
};

export default MenuListItems;
