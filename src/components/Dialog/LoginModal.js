import { useState } from "react";
import { Button } from "@material-tailwind/react";
import { motion } from "framer-motion";
import Login from "./Login";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { openModal } from "../../utils/redux/modalSlice";

export default function LoginModal() {
  const modal = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  const handleOpen = () => dispatch(openModal());

  return (
    <>
      {modal.isOpen && (
        <>
          <div
            className="fixed inset-0 transition-opacity bg-[#000] z-50 bg-opacity-60"
            onClick={handleOpen}
          ></div>
          <motion.div
            initial={{ top: "30%", opacity: 0 }}
            animate={{ top: "40%", opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="fixed z-50 flex flex-col items-center justify-between w-3/4 -translate-x-1/2 -translate-y-1/2 bg-white rounded md:w-1/2 inset-x-1/2 "
          >
            <Login />
          </motion.div>
        </>
      )}
    </>
  );
}
