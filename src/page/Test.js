import React from "react";
import { useMultiInput } from "../utils/hooks/";
import { AiFillPlusCircle } from "react-icons/ai";
import axios from "axios";
import { API_URL } from "../utils/config";
import { useState } from "react";
import { motion } from "framer-motion";
import { useCartState } from "../utils/redux/hooks-redux";

// const testUser = {
//   name: "test",
//   email: "testtest@gmail.com",
//   password: "testtest",
// };

const Test = () => {
  const [Inputs, allRef] = useMultiInput(["name", "acount", "password"]);
  const [x, setX] = useState(0);
  const [rotate, setRotate] = useState("0deg");

  return (
    <>
      <motion.div
        className="w-10 bg-black"
        initial={{ x: 0, rotate: 0 }}
        animate={{ x, rotate }}
        onClick={() => {
          setX(x + 100);
          setRotate("180deg");
        }}
      >
        div
      </motion.div>
      {/* useMultiInput */}
      <Inputs.Acount className=" bg-primary" />
      <br />
      <Inputs.Password type="password" className=" bg-primary" />
      <br />
      <Inputs.Name className=" bg-primary" />
      <br />
      <button
        onClick={() => {
          // console.log("allRef.current");
          // console.log(allRef.current);
          console.log("allRef.get()");
          console.log(allRef.get());
          allRef.clear();
        }}
      >
        get
      </button>
      <br />

      {/* ecpay */}
      <button>綠界</button>
      <form action={`${API_URL}/ecpay`} method="POST" className="border ">
        <div>
          <input type="text" name="TotalAmount" placeholder="總價錢" />
          <input type="text" name="TradeDesc" placeholder="描述" />
          <input type="text" name="ItemName" placeholder="商品名#分隔" />
          <p>{"-form action-> server -redirect-> ecpay -redirect-> local"}</p>
          <p>
            信用卡號：4311-9522-2222-2222 <br />
            有效日期：大於今日
            <br /> 安全碼：222
          </p>
        </div>
        <button>
          <span className="border rounded h3">結帳</span>
        </button>
      </form>
      <br />

      <h1 className="h1">className name: h1 // slogan</h1>
      <h2 className="h2">className name: h2 // 頁面標題</h2>
      <h3 className="h3">className name: h3 // 文章標題</h3>
      <h4 className="h4">className name: h4 // 副標</h4>
      <p className="p">className name: p // 內文</p>
      <p className="note">className name: note //提醒</p>
      <div className="flex">
        icon-sm
        <AiFillPlusCircle className="icon-sm" />
      </div>
      <div className="flex">
        icon
        <AiFillPlusCircle className="icon" />
      </div>
      <div className="flex">
        icon-lg
        <AiFillPlusCircle className="icon-lg" />
      </div>
      <div className="flex">
        icon-xl
        <AiFillPlusCircle className="icon-xl" />
      </div>
    </>
  );
};

export default Test;
