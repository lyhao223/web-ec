import React, { Children } from "react";
import { FaChevronRight } from "react-icons/fa6";
interface CustomArrowProps {
  onClick?: () => void;
}
const CustomArrow = ({ onClick }: CustomArrowProps) => {
  return (
    <button onClick={onClick} className="absolute z-20 top-0 right-0">
      <FaChevronRight />
    </button>
  );
};

export default CustomArrow;
