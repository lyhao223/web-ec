import React from "react";
interface ICustomDotsProps {
  onClick?: () => void;
  active?: boolean;
}
const CustomDot = ({ onClick, active }: ICustomDotsProps) => (
  <li className={` ${active ? "active" : ""}`} onClick={onClick}>
    <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
  </li>
);
export default CustomDot;
