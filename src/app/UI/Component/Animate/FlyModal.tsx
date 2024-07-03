import { AnimatePresence, motion } from "framer-motion";
import React from "react";
interface FlyModalProps {
  children: React.ReactNode;
  open: boolean;
}
const FlyModal = ({ children, open }: FlyModalProps) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: -1 }}
          exit={{ opacity: 0, y: 20 }}
          style={{ translateY: "100%" }}
          transition={{ duration: 0.4, ease: "easeInOut" }}>
          <div className="absolute top-5 left-0">{children}</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FlyModal;
