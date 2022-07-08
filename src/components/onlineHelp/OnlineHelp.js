import React from "react";
import MessageBox from "./MessageBox";
import InputBar from "./InputBar";
import { io } from "socket.io-client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { sendMsg } from "../../utils/redux/chatSlice";


const socket = io("http://localhost:8001", {
  query: {
    "my-key": "my-value",
  },
});

const OnlineHelp = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  useEffect(() => {
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
        <h1 className="pb-2 h3 px-3">線上客服</h1>
      </div>
      <div className="flex justify-center pt-3">
        {/* <img
          className="w-10 h-10 p-1 mr-2 border rounded-full border-line"
          src={"/images/memberCollectionAndOrder/user_small.png"}
          alt=""
        /> */}
        <div className="w-full p-3">
          <div className="flex justify-between">
            <img
              className="w-10 h-10 p-1 mr-2 border rounded-full border-line"
              src={"/images/memberCollectionAndOrder/user_small.png"}
              alt=""
            />
            <div className="flex items-center">
              {/* 對話框 */}
              <MessageBox socket={socket} />
            </div>
          </div>

          {/* 輸入訊息欄 */}
          <InputBar socket={socket} />
        </div>
      </div>
    </>
  );
};

export default OnlineHelp;
