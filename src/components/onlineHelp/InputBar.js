import React from "react";

const InputBar = () => {
  return (
    <div className="px-4 pt-4 mb-2 border-t-2 border-line sm:mb-0">
      <div className="flex justify-between p-2 bg-line p">
        <input
          type="text"
          className="w-full px-1 border bg-line focus:bg-white"
          placeholder="請提供您的問題"
        />
        <button className="w-20 px-2 ml-1 bg-white rounded">送出</button>
      </div>
    </div>
  );
};

export default InputBar;
