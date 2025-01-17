"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
interface GestureProps {
  children: React.ReactNode;
  scaleHover: number;
  scaleTap?: number;
  classes?: string;
}
const Gesture = ({ children, scaleHover, scaleTap, classes }: GestureProps) => {
  return (
    <motion.div
      whileHover={{ scale: scaleHover }}
      whileTap={{ scale: scaleTap }}
      className={classes}>
      {children}
    </motion.div>
  );
};

export default Gesture;
