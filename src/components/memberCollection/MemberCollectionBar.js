import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";


function MemberCollectionBar() {
  const [x, setX] = useState(0);

  return (
    <>
      <div className="grid grid-cols-2 px-6 p">
        <div
          className="pb-2 text-center"
          onClick={() => {
            setX(0);
          }}
        >
          <p>收藏</p>
        </div>
        <div
          onClick={() => {
            setX("100%");
          }}
        >
          <p className="pb-2 text-center">評論</p>
        </div>
        <motion.div
          className="border border-dark w-50"
          initial={{ x: 0 }}
          animate={{ x }}
        ></motion.div>
      </div>
    </>
  );
}

export default MemberCollectionBar;
