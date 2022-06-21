import React from "react";
import { Input, Button } from "@material-tailwind/react";
import { useRef } from "react";

const InputBar = ({ socket }) => {
  const inputRef = useRef();

  const handleSubmit = () => {
    const input = inputRef.current.children[0];
    console.log(input.value);
    socket.emit("support", {
      side: "client",
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
        <Button
          className="w-20 px-2 ml-1 rounded"
          color="grey"
          variant="outlined"
          size="sm"
          onClick={handleSubmit}
        >
          送出
        </Button>
      </div>
    </div>
  );
};

export default InputBar;
