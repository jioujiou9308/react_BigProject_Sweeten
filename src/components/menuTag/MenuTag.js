import React from "react";
import { Button } from "@material-tailwind/react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../../utils/config";
import { useParams } from "react-router-dom";

// const titleList = ["蛋糕", "餅乾", "點心", "冰品"];
const MotionButton = motion(Button);
const {categoryId} = useParams


// TODO:種類篩選還沒寫完
const MenuTag = (props) => {
  
  useEffect(()=>{
    let getCategory = async()=>{
      let response = await axios.get(API_URL+`/category/${categoryId}`)
      setTitleList(response.data)
    }
    getCategory()
    
  },[])
  
  const {setProducts}=props
  const [titleList, setTitleList]=useState([])
  const initButtonY = titleList.map((title) => 5);
  const [buttonY, setButtonY] = useState();
  
  const flavorHandler =async()=>{
  let response=await axios.get(API_URL+``)
}
  return (
    <div className="absolute top-0 flex overflow-hidden -translate-y-full">
      {titleList.map((title, i) => (
        <MotionButton
          size="sm"
          className={`p-1 mx-2 text-white rounded-b-none bg-secondary shadow-none `}
          initial={{ y: 5 }}
          animate={{ y: 5 }}
          whileHover={{ y: 0 }}
          onclick={flavorHandler}
        >
          {title}
        </MotionButton>
      ))}
    </div>
  );
};

export default MenuTag;
