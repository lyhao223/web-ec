import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { GrNext } from "react-icons/gr";
interface IRightArrowProps {
  onClick?: () => void;
}
const RightArrow = ({ onClick }: IRightArrowProps) => {
  const [animate, setAnimate] = useState(false);

  return (
    <button
      onClick={onClick}
      className={`absolute xl:top-56 xl:right-24 right-4 p-3 hidden xl:inline-block ${
        !animate ? "rounded-full bg-gray-700" : ""
      }`}
      onMouseEnter={() => setAnimate(true)}
      onMouseLeave={() => setAnimate(false)}>
      {!animate && <GrNext color="white" size={36} />}
      <AnimatePresence>
        {animate && (
          <motion.div
            initial={{ opacity: 0, x: 1 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{ translateX: "5%" }}
            className="absolute xl:left-14 xl:top-[0.035rem] p-3 rounded-full bg-gray-700 hidden xl:inline-block">
            <GrNext color="red" size={36} />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
};

export default RightArrow;
