import React from "react";
import MessageBox from "./MessageBox";
import InputBar from "./InputBar";
import { io } from "socket.io-client";
import { useEffect } from "react";
import { useDispatch } from "react-redux/es/exports";
import { sendMsg } from "../../utils/redux/chatSlice";

const socket = io("http://localhost:8001", {
  query: {
    "my-key": "my-value",
  },
});

// log = [ {side:str, msg:str[]}, {side:str, msg:str[]} ]

const OnlineHelp = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    socket.on("connect", () => {
      console.log("socket", socket.connected); // true
    });
    socket.on("support", (res) => {
      dispatch(sendMsg(res));
    });
    return () => {
      socket.off("support");
    };
  }, [dispatch]);

  return (
    <>
      <div className="mt-5 border-b-2 border-line">
        <h1 className="pb-2 h1">線上客服</h1>
      </div>
      <div className="flex justify-center pt-3 mt-3">
        <img
          className="w-10 h-10 p-1 border rounded-full border-line"
          src={"/images/memberCollectionAndOrder/user_small.png"}
          alt=""
        />
        <div className="w-3/4 px-6">
          <div className="flex items-center">
            {/* 對話框 */}
            <MessageBox socket={socket} />
          </div>
          {/* 輸入訊息欄 */}
          <InputBar socket={socket} />
        </div>
      </div>
    </>
  );
};

export default OnlineHelp;
