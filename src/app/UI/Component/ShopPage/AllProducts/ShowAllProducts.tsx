import FlyOutLike from "@/app/UI/Animation/FlyOutLike";
import Gesture from "@/app/UI/Animation/Gesture";
import Button from "@/app/UI/Reusable/Button";
import Link from "next/link";
import React from "react";
import { FaHeart } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
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
      className="relative flex flex-col items-center justify-center space-y-4 border-2 w-fit border-gray-300"
      key={id}>
      <Link
        href={`/shop/productID/${id}`}
        className="flex flex-col items-center justify-center space-y-3">
        <div className="border-b-2 border-gray-300 p-6 ">
          <Gesture scaleHover={1.1}>
            <img src={image} alt={title} className="h-56 w-80 p-2" />
          </Gesture>
        </div>
        <h2 className="text-black text-sm text-nowrap truncate w-64 text-center">
          {title}
        </h2>
        <p className="text-black text-lg">{price}$</p>
      </Link>
      <div className="py-4">{children}</div>
      <FlyOutLike id={id} />
    </div>
  );
};

export default ShowAllProducts;
