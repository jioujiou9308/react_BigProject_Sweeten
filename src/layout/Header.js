import React from "react";
import {
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineUnorderedList,
  AiOutlineUserAdd,
} from "react-icons/ai";

const Header = () => {
  return (
    <header className="flex justify-around pt-6 pb-3 bg-white">
      <div>logo</div>
      <nav>
        <ul className="flex">
          <li className="mx-2">首頁</li>
          <li className="mx-2">測驗</li>
          <li className="mx-2">產品</li>
          <li className="mx-2">課程</li>
          <li className="mx-2">關於我們</li>
        </ul>
      </nav>
      <div className="flex">
        <AiOutlineSearch className="mx-1" />
        <AiOutlineShoppingCart className="mx-1" />
        <AiOutlineUserAdd className="mx-1" />
        <AiOutlineUnorderedList className="mx-1" />
      </div>
    </header>
  );
};

export default Header;
