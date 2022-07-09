import { Button } from "@material-tailwind/react";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProductState } from "../../utils/redux/hooks-redux";
import axios from "axios";
import { API_URL } from "../../utils/config";

const MotionButton = motion(Button);

const MemberTag = ({ title, i, id }) => {
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
        // 會員檔案
        if (id == 1000) {
          navigate("/main/member/information");
          window.scrollTo({ top: 0, left: 0 });
        }
        // 訂單查詢
        if (id == 1001) {
          navigate("/main/member/order");
          window.scrollTo({ top: 0, left: 0 });
        }
        // 蒐藏清單
        if (id == 1002) {
          navigate("/main/member/collection");
          window.scrollTo({ top: 0, left: 0 });
        }
        let getFlavor = async () => {
          let response = await axios.get(API_URL + `/product/category/10${i}`);
          setProduct(response.data.data);
          console.log(response.data.data);
        };
        getFlavor();
      }}
    >
      {title}
    </MotionButton>
  );
};

export default MemberTag;
