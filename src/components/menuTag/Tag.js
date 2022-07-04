import React from "react";
import { Button } from "@material-tailwind/react";
import { motion } from "framer-motion";
import { useState } from "react";

const MotionButton = motion(Button);

const Tag = ({ title, i }) => {
  const [y, setY] = useState(10);
  return (
    <MotionButton
      size="sm"
      className={`p-1 mx-2 text-white rounded-b-none bg-secondary shadow-none `}
      initial={{ y: "100%" }}
      animate={{ y }}
      onMouseLeave={() => setY(10)}
      onMouseEnter={() => setY(0)}
    >
      {title}
    </MotionButton>
  );
};

export default Tag;
