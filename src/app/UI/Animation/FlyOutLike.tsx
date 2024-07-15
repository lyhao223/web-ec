import { AnimatePresence, motion } from "framer-motion";
import React, { Fragment, useState } from "react";
import { FaHeart, FaEye } from "react-icons/fa6";
import ContentOfIcons from "../Reusable/ContentOfIcons";
import Link from "next/link";
interface FlyOutLikeProps {
  children?: React.ReactNode;
  id: any;
}
const FlyOutLike = ({ children, id }: FlyOutLikeProps) => {
  const [openContentHeart, setOpenContentHeart] = useState(false);
  const [addWish, setAddWish] = useState(false);
  const [openContentView, setOpenContenView] = useState(false);
  return (
    <Fragment>
      <div className="absolute top-0 right-0 z-20 bg-transparent">
        <div className="flex flex-col items-center justify-end">
          <button
            onClick={() => setAddWish(!addWish)}
            onMouseEnter={() => setOpenContentHeart(true)}
            onMouseLeave={() => setOpenContentHeart(false)}
            className="p-2">
            <FaHeart
              className={`${
                !addWish ? "text-gray-600" : "text-red-600"
              } text-xl`}
            />
          </button>
          <Link
            href={`/shop/productID/${id}`}
            className="text-black"
            onClick={() => setOpenContenView(!open)}
            onMouseEnter={() => setOpenContenView(true)}
            onMouseLeave={() => setOpenContenView(false)}>
            <div className="p-2">
              <FaEye className="text-black text-lg" />
            </div>
          </Link>
        </div>
      </div>
      <AnimatePresence>
        {openContentHeart && (
          <motion.div
            initial={{ opacity: 0, x: 1 }}
            animate={{ opacity: 1, x: -10 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{ translateX: "5%" }}
            className="absolute z-20 top-0 right-8 bg-slate-700 text-black bg-transparent">
            <div className="absolute -right-1 top-[0.6rem] h-3 w-3 rotate-45 bg-gray-600" />
            <ContentOfIcons>Add to wishlist</ContentOfIcons>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {openContentView && (
          <motion.div
            initial={{ opacity: 0, x: -1 }}
            animate={{ opacity: 1, x: -10 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{ translateY: "5%" }}
            className="absolute z-20 right-7 top-9 bg-slate-700 text-black bg-transparent">
            <div className="absolute -right-[0.4rem] top-[0.6rem] h-3 w-3 rotate-45 bg-gray-600" />
            <ContentOfIcons>Quick view</ContentOfIcons>
          </motion.div>
        )}
      </AnimatePresence>
    </Fragment>
  );
};

export default FlyOutLike;
