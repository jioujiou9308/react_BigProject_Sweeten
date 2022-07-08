import React from "react";
import { Button } from "@material-tailwind/react";
import { motion } from "framer-motion";
import { useState } from "react";
import { useProductState } from "../../utils/redux/hooks-redux";
import axios from "axios"
import { API_URL } from "../../utils/config";

const MotionButton = motion(Button);

const Tag = ({ title, i ,id}) => {
  const [y, setY] = useState(10);
  const [product, setProduct]=useProductState()
  return (
    <MotionButton
      size="sm"
      className={`p-1 mx-2 text-white rounded-b-none bg-secondary shadow-none `}
      initial={{ y: "100%" }}
      animate={{ y }}
      onMouseLeave={() => setY(10)}
      onMouseEnter={() => setY(0)}
      onClick={
        ()=>{
          let getFlavor= async()=>{
          let response = await axios.get(API_URL+`/product/category/10${i}`)
          setProduct(response.data.data)
          console.log(response.data.data)
        }
        getFlavor()
        }
      }
    >
      {title}
    </MotionButton>
  );
};

export default Tag;
