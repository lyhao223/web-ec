"use client";
import { AnimatePresence, motion } from "framer-motion";
import React, { forwardRef } from "react";
interface FlyModalProps {
  children: React.ReactNode;
  open?: boolean;
}
const FlyModal = forwardRef<HTMLDivElement, FlyModalProps>(
  ({ children, open }, ref) => {
    return (
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: -1 }}
            exit={{ opacity: 0, x: -15 }}
            style={{ translateY: "5%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            ref={ref}
            tabIndex={-1}>
            <div className="absolute top-5 left-0">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  }
);
FlyModal.displayName = "FlyModal";
export default FlyModal;
