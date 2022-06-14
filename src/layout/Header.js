import React from "react";
import {
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineUnorderedList,
  AiOutlineUserAdd,
} from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="flex justify-around pt-6 pb-3 bg-white">
      <div>logo</div>
      <nav>
        <ul className="flex">
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
      <div className="flex">
        <AiOutlineSearch className="mx-1" />
        <AiOutlineShoppingCart className="mx-1" onClick={()=>navigate("/main/cart")}/>
        <AiOutlineUserAdd className="mx-1" />
        <AiOutlineUnorderedList className="mx-1" />
      </div>
    </header>
  );
};

export default Header;
