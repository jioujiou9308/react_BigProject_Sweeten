import React from "react";
import { IoReturnUpBack, IoCaretUp } from "react-icons/io5";

const Aside = () => {
  return (
    <aside className="hidden max-w-xs md:block bg-aside">
      <h3 className="flex items-center w-full px-8 py-2 font-bold text-white bg-sub">
        <IoReturnUpBack className="mr-1" />
        回到上一頁
      </h3>
      <ul className="py-2 text-justify">
        <li className="px-4 py-2 ">
          <h4 className="flex items-center font-bold">
            商品類型 <IoCaretUp className="ml-1" />
          </h4>
        </li>
        <li className="px-4 pt-1">
          <a href="#1">ITEM</a>
        </li>
        <li className="px-4 pt-1">
          <a href="#1">ITEM</a>
        </li>
        <li className="px-4 pt-1">
          <a href="#1">ITEM</a>
        </li>
        <li className="px-4 pt-1">
          <a href="#1">ITEM</a>
        </li>
        <li className="px-4 pt-1">
          <a href="#1">ITEM</a>
        </li>
        <li className="px-4 pt-1">
          <a href="#1">ITEM</a>
        </li>
      </ul>
    </aside>
  );
};

export default Aside;
