import Button from "@/app/UI/Reusable/Button";
import Link from "next/link";
import React from "react";

interface ProductsProps {
  id: number;
  title: string;
  price: number;
  image: string;
  children?: React.ReactNode;
  slug?: number;
}
const ShowAllProducts = ({
  id,
  title,
  price,
  image,
  children,
  slug,
}: ProductsProps) => {
  return (
    <div
      className="flex flex-col items-center justify-center space-y-4 border-2 w-fit border-gray-300"
      key={id}>
      <div className="border-b-2 border-gray-300 p-6 ">
        <img src={image} alt={title} className="h-56 w-80" />
      </div>
      <h2 className="text-black text-sm text-nowrap truncate w-64 text-center">
        {title}
      </h2>
      <p className="text-black text-lg">{price}$</p>
      <div className="py-4">{children}</div>
    </div>
  );
};

export default ShowAllProducts;
