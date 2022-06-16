import React from "react";
import {
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineUnorderedList,
  AiOutlineUserAdd,
} from "react-icons/ai";
import { Button } from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const linkText = ["首頁", "測驗", "產品", "課程", "關於我們"];
const linkPath = [
  "/",
  "/main/test",
  "/main/product",
  "/main/course",
  "/main/about",
];

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full pt-3 pb-3 bg-white border-b border-light">
      <div className="flex flex-wrap justify-between mx-auto max-w-7xl">
        <img
          className="w-[10rem] h-full object-cover"
          src="/images/logo.png"
          alt=""
        />
        <div>
          <div className="flex justify-end w-full mb-2">
            <AiOutlineSearch className="mx-1 icon-sm" />
            <AiOutlineShoppingCart className="mx-1 icon-sm" />
            <Link to="/login">
              <AiOutlineUserAdd className="mx-1 icon-sm" />
            </Link>
            <AiOutlineUnorderedList className="mx-1 icon-sm" />
          </div>
          <nav>
            <ul className="flex p">
              {linkText.map((text, i) => (
                <li key={text}>
                  <Button
                    variant="text"
                    size="sm"
                    color="pink"
                    className="rounded-none"
                  >
                    <Link to={linkPath[i]}>
                      <span className="p text-dark">{text}</span>
                    </Link>
                  </Button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
