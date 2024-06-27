import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { GrNext } from "react-icons/gr";
interface IRightArrowProps {
  onClick?: () => void;
}
const RightArrow = ({ onClick, ...rest }: IRightArrowProps) => {
  const [animate, setAnimate] = useState(false);

  return (
    <button
      onClick={onClick}
      className={`absolute top-42 right-32 p-3 ${
        !animate ? "rounded-full bg-gray-700" : ""
      }`}
      onMouseEnter={() => setAnimate(true)}
      onMouseLeave={() => setAnimate(false)}>
      {!animate && <GrNext color="white" />}
      <AnimatePresence>
        {animate && (
          <motion.div
            initial={{ opacity: 0, x: 1 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 15 }}
            transition={{ duration: 0.3, ease: "easeIn" }}
            style={{ translateX: "5%" }}
            className="absolute -bottom-[5rem] left-12 p-3 rounded-full bg-gray-700">
            <GrNext color="red" />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
};

export default RightArrow;
