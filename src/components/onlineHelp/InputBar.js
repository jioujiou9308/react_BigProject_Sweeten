import React from "react";
import { Input, IconButton } from "@material-tailwind/react";
import { useRef } from "react";
import { useSelector } from "react-redux/es/exports";
import {RiSendPlaneFill } from "react-icons/ri";

const InputBar = ({ socket }) => {
  const inputRef = useRef();
  const user = useSelector((state) => state.user.user);

  const handleSubmit = () => {
    const input = inputRef.current.children[0];

    console.log(input.value);
    socket.emit("support", {
      side: "client",
      id: user.id,
      content: input.value,
    });
    input.value = "";
  };

  return (
    <div className="px-4 pt-4 mb-2 border-t-2 border-line sm:mb-0">
      <div className="flex justify-between p-2 p">
        <Input
          type="text"
          className="w-full px-1 border focus:bg-white"
          color="brown"
          label="請提供您的問題"
          ref={inputRef}
        />
        <IconButton
          className="w-20 px-2 ml-2 flex top-1 border-none hover:focus:border-none"
          color="grey"
          variant="outlined"
          size="sm"
          onClick={handleSubmit}
        >
          <RiSendPlaneFill className="icon-lg" color="gray" />
        </IconButton>
      </div>
    </div>
  );
};

export default InputBar;
