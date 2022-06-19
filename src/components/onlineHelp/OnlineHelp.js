import React from "react";
import MessageBox from "./MessageBox";
import InputBar from "./InputBar";
import { io } from "socket.io-client";

const socket = io("http://localhost:8001", {
  query: {
    "my-key": "my-value",
  },
});

const OnlineHelp = () => {
  socket.on("connect", () => {
    console.log(socket.connected); // true
  });
  return (
    <>
      <div className="mt-5 border-b-2 border-line">
        <h1 className="pb-2 h1">客服中心</h1>
      </div>
      <div className="flex justify-center mt-3">
        <img
          className="w-20 h-20 p-1 border rounded-full border-line"
          src={"/images/memberCollectionAndOrder/user_small.png"}
          alt=""
        />
        <div className="px-6 md:px-16">
          <div className="flex items-center py-4">
            {/* 對話框 */}
            <MessageBox />
          </div>
          {/* 輸入訊息欄 */}
          <InputBar />
        </div>
      </div>
    </>
  );
};

export default OnlineHelp;
