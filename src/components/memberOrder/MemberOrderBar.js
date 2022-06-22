import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";

function MemberOrderBar() {
  const [x, setX] = useState(0);
  return (
    <>
      <div className="grid grid-cols-5 px-6 h4">
        <div
          className="pb-2 text-center"
          onClick={() => {
            setX(0);
          }}
        >
          <p>全部</p>
        </div>
        <div
          onClick={() => {
            setX("100%");
          }}
        >
          <p className="pb-2 text-center">待付款</p>
        </div>
        <div
          onClick={() => {
            setX("200%");
          }}
        >
          <p className="pb-2 text-center">待出貨</p>
        </div>
        <div
          onClick={() => {
            setX("300%");
          }}
        >
          <p className="pb-2 text-center">待收貨</p>
        </div>
        <div
          onClick={() => {
            setX("400%");
          }}
        >
          <p className="pb-2 text-center">完成</p>
        </div>
        <motion.div
          className="w-full border border-dark"
          initial={{ x: 0 }}
          animate={{ x }}
        ></motion.div>
      </div>
    </>
  );
}

export default MemberOrderBar;
