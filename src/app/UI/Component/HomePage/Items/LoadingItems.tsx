import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
const LoadingItems = () => {
  return (
    <div className="flex flex-row items-center justify-center space-x-2">
      <AiOutlineLoading3Quarters className="text-black animate-spin" />
      <span className="inline">Loading...</span>
    </div>
  );
};

export default LoadingItems;
