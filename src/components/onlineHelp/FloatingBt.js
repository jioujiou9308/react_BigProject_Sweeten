import React from "react";
import { RiCustomerService2Fill } from "react-icons/ri";
import { IconButton } from "@material-tailwind/react";
import OnlineHelp from "./OnlineHelp";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FloatingBt = () => {
  const [openOnlineHelp, setOpenOnlineHelp] = useState(false);
  return (
    <>
      <AnimatePresence>
        {openOnlineHelp ? (
          <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 15
          }}
            
            className=" fixed top-100 md:right-10 right-0 border-2 border-line rounded-sm bg-white z-50"
          >
            <motion.h5>
              <OnlineHelp />
            </motion.h5>
          </motion.div>
        ) : (
          <></>
        )}
      </AnimatePresence>

      <div className=" fixed bottom-3 bg-primary rounded-full right-3 z-50 overflow-hidden">
        <motion.IconButton
          onClick={() => {
            setOpenOnlineHelp(!openOnlineHelp);
          }}
        >
          <IconButton variant="text" className="">
            <RiCustomerService2Fill className="icon-lg" color="gray" />
          </IconButton>
        </motion.IconButton>
      </div>

      {/* {openOnlineHelp ? <CustomerService /> : <></>}
      <div className=" fixed bottom-3 bg-primary rounded-full right-3">
        <IconButton
          variant="text"
          onClick={() => {
            setOpenOnlineHelp(!openOnlineHelp);
          }}
        >
          <RiCustomerService2Fill className="icon-lg" color="gray" />
        </IconButton>
      </div> */}
    </>
  );
};

export default FloatingBt;
