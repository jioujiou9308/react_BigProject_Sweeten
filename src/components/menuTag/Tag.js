import React from "react";
import { Button } from "@material-tailwind/react";
import { motion } from "framer-motion";
import { useState } from "react";
import { useProductState } from "../../utils/redux/hooks-redux";
import axios from "axios";
import { API_URL } from "../../utils/config";
import { useNavigate } from "react-router-dom";

const MotionButton = motion(Button);

const Tag = ({ title, i, id }) => {
  const [y, setY] = useState(10);
  const [product, setProduct] = useProductState();
  const navigate = useNavigate();

  return (
    <MotionButton
      size="sm"
      className={`p-1 mx-2 text-white rounded-b-none bg-secondary shadow-none`}
      initial={{ y: "100%" }}
      animate={{ y }}
      onMouseLeave={() => setY(10)}
      onMouseEnter={() => setY(0)}
      onClick={() => {
        // 199 是即期良品的 id => 導向即期良品頁面
        if (id == 199) {
          navigate("/main/expireProduct");
          window.scrollTo({ top: 0, left: 0 });
        }
        let getFlavor = async () => {
          let response = await axios.get(API_URL + `/product/category/10${i}`);
          const list = response.data.data;
          // console.log(list);
          // list.forEach((item) => (item.id = item.product_id));
          setProduct(response.data.data);
        };
        getFlavor();
      }}
    >
      {title}
    </MotionButton>
  );
};

export default Tag;
