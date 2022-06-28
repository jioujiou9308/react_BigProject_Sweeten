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
              className="pb-2 text-center"
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
          className="w-full border border-dark"
          initial={{ x: 0 }}
          animate={{ x }}
        ></motion.div>
      </div>
    </>
  );
}

export default MemberOrderBar;
