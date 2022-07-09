import React from "react";
import { calcLength, motion } from "framer-motion";
import { useState } from "react";

function MemberOrderBar(props) {
  const [x, setX] = useState(0);
  const { setBarStep, step } = props;
  return (
    <>
      <div className="grid grid-cols-5 bg-white md:px-6 md:h4">
        {step.map((v, i) => {
          return (
            <div
              className="pb-2 text-center cursor-pointer"
              onClick={() => {
                setX(`${i * 100}%`);
                setBarStep(i);
              }}
            >
              <p>{v}</p>
            </div>
          );
        })}

        <motion.div
          className="w-full border border-sub"
          initial={{ x: 0 }}
          animate={{ x }}
        ></motion.div>
        {/* <motion.div
          initial={{ x: 0}}
          animate={{ x}}
          transition={{ ease: "easeOut", duration: 2, delay: 1 }}
          className="bg-gradient-to-r pb-[5px] from-sub to-transparent"
        ></motion.div> */}
      </div>
    </>
  );
}

export default MemberOrderBar;
