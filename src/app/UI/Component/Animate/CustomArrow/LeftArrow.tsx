import React from "react";
import { GrPrevious } from "react-icons/gr";
interface ILeftArrowProps {
  onClick?: () => void;
}
const LeftArrow = ({ onClick }: ILeftArrowProps) => {
  return (
    <button onClick={onClick}>
      <GrPrevious />
    </button>
  );
};

export default LeftArrow;
