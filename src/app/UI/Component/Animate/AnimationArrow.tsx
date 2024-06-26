import { AnimatePresence, motion } from "framer-motion";
import React, { Fragment, useState } from "react";
import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";
interface AnimationArrowProps {
  children: React.ReactNode;
  initialX?: number;
  animateX?: number;
  exitX?: number;
  styleX?: string;
  ease?: string;
  classCssAnimate?: string;
  classCssDiv?: string;
  onClickArrow?: () => void;
}
const AnimationArrow = ({
  children,
  initialX,
  animateX,
  exitX,
  styleX,
  classCssAnimate,
  classCssDiv,
  ease,
  onClickArrow,
}: AnimationArrowProps) => {
  const [animate, setAnimate] = useState(false);

  return (
    <button
      className={classCssDiv}
      onMouseEnter={() => setAnimate(true)}
      onMouseLeave={() => setAnimate(false)}
      onMouseOut={() => setAnimate(false)}
      onClick={onClickArrow}>
      {!animate && children}
      <AnimatePresence>
        {animate && (
          <motion.div
            initial={{ opacity: 0, x: initialX }}
            animate={{ opacity: 1, x: animateX }}
            exit={{ opacity: 0, x: exitX }}
            style={{ translateX: styleX }}
            transition={{ duration: 0.2, ease: ease }}
            className={classCssAnimate}>
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
};

export default AnimationArrow;
