"use client";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { Fragment, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";

interface FlyDownSearchBarProps {
  SearchInput: React.ComponentType;
}
export default function FlyDownSearchBar({
  SearchInput,
}: FlyDownSearchBarProps) {
  const [open, setOpen] = useState(false);

  const showFlyout = SearchInput && open;

  return (
    <Fragment>
      <button
        className="flex flex-row text-white font-bold text-sm md:text-lg m-5"
        onClick={() => setOpen(!open)}>
        Search
        <FaSearch className="inline-block text-white text-sm md:text-lg md:ml-2 ml-2 md:mt-[0.2rem] mt-1" />
      </button>
      <AnimatePresence>
        {showFlyout && (
          <motion.div
            initial={{ opacity: 0, y: -1 }}
            animate={{ opacity: 1, y: -10 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{ translateY: "5%" }}
            className="absolute z-20 right-0 top-0 bg-slate-700 text-black bg-transparent">
            <SearchInput />
            <div className="absolute -top-4 md:top-0 md:right-4 -right-5 p-6">
              <button onClick={() => setOpen(false)}>
                <IoMdCloseCircle
                  className="text-white hover:text-red-500 hover:transform hover:ease-out hover:duration-500"
                  size={43}
                />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Fragment>
  );
}
