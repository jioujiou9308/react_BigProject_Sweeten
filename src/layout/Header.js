import React from "react";
import {
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineUnorderedList,
  AiOutlineUserAdd,
} from "react-icons/ai";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 z-50 w-full pt-3 pb-3 bg-white ">
      <div className="flex flex-wrap justify-between mx-auto max-w-7xl">
        <div className="flex justify-end w-full mb-2">
          <AiOutlineSearch className="mx-1 icon-sm" />
          <AiOutlineShoppingCart className="mx-1 icon-sm" />
          <Link to="/login">
            <AiOutlineUserAdd className="mx-1 icon-sm" />
          </Link>
          <AiOutlineUnorderedList className="mx-1 icon-sm" />
        </div>
        <div>logo</div>
        <nav>
          <ul className="flex p">
            <li className="mx-2">
              <Link to="/">首頁</Link>
            </li>
            <li className="mx-2">
              <Link to="/main/test">測驗</Link>
            </li>
            <li className="mx-2">
              <Link to="main/product">產品</Link>
            </li>
            <li className="mx-2">
              <Link to="main/course">課程</Link>
            </li>
            <li className="mx-2">
              <Link to="main/about">關於我們</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
