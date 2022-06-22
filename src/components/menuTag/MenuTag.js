import React from "react";
import { Button } from "@material-tailwind/react";
import { motion } from "framer-motion";
import { useState } from "react";

const titleList = ["蛋糕", "餅乾", "點心", "冰品"];
const MotionButton = motion(Button);
const initButtonY = titleList.map((title) => 5);

const MenuTag = () => {
  const [buttonY, setButtonY] = useState();
  return (
    <div className="absolute top-0 flex overflow-hidden -translate-y-full">
      {titleList.map((title, i) => (
        <MotionButton
          size="sm"
          className={`p-1 mx-2 text-white rounded-b-none bg-secondary shadow-none `}
          initial={{ y: 5 }}
          animate={{ y: initButtonY[i] }}
          whileHover={{ y: 0 }}
        >
          {title}
        </MotionButton>
      ))}
    </div>
  );
};

export default MenuTag;
