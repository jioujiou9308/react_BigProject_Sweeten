import React from "react";
import { useSelector } from "react-redux";
import MessageRow from "./MessageRow";

const sideStyle = {
  official: "rounded-tl-none",
  client: "rounded-br-none ml-auto bg-line bg-[#f6f6f6]",
};

const MessageBox = () => {
  const chatState = useSelector((state) => state.chat);
  return (
    <div className="w-full pb-3 rounded-sm min-h-[50vh]">
      {chatState &&
        chatState.map(({ side, msg }) => (
          <MessageRow key={msg[0]} comingFrom={sideStyle[side]} msg={msg} />
        ))}
    </div>
  );
};

export default MessageBox;
