import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

function Member_search_bar() {
  return (
    <>
      <div className="flex p-3 bg-white border-light">
        <AiOutlineSearch className="mr-4 icon" />
        <p className=" text-theme p">你可以透過訂單編號、商品名稱搜索</p>
      </div>
    </>
  );
}

export default Member_search_bar;
