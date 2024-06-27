import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import {GrPrevious } from "react-icons/gr";
interface ILeftArrowProps {
  onClick?: () => void;
}
const LeftArrow = ({ onClick }: ILeftArrowProps) => {
  const [animate, setAnimate] = useState(false);

  return (
    <button
      onClick={onClick}
      className={`absolute xl:top-56 xl:left-32 left-2 p-3 hidden xl:inline-block ${
        !animate ? "rounded-full bg-gray-700" : ""
      }`}
      onMouseEnter={() => setAnimate(true)}
      onMouseLeave={() => setAnimate(false)}>
      {!animate && <GrPrevious color="white" />}
      <AnimatePresence>
        {animate && (
          <motion.div
            initial={{ opacity: 0, x: 1 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{ translateX: "-250%" }}
            className="absolute xl:left-12 xl:top-[0.035rem] p-3 rounded-full bg-gray-700 hidden xl:inline-block">
            <GrPrevious color="red" />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
};

export default LeftArrow;
