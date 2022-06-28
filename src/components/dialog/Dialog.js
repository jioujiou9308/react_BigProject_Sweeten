import React from "react";
import { motion } from "framer-motion";
import { useSelect } from "@material-tailwind/react";

const Dialog = () => {
  const { isOpen, Node } = useSelect((state) => state);

  return (
    <>
      {isOpen && (
        <>
          <div
            className="fixed inset-0 transition-opacity bg-[#000] z-50 bg-opacity-60"
            onClick={() => {}}
          ></div>
          <motion.div
            initial={{ top: "30%", opacity: 0 }}
            animate={{ top: "40%", opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="fixed z-50 flex flex-col items-center justify-between w-full -translate-x-1/2 -translate-y-1/2 bg-white md:rounded md:w-3/4 xl:w-1/2 inset-x-1/2 "
          >
            {Node}
          </motion.div>
        </>
      )}
    </>
  );
};

export default Dialog;
