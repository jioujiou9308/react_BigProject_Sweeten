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
import { motion } from "framer-motion";

const linkText = ["首頁", "測驗", "產品", "課程", "關於我們"];
const linkPath = [
  "/",
  "/main/test",
  "/main/product",
  "/main/course",
  "/main/about",
];
const current = "產品";
const active = "border-b-2 ";

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <motion.header
      className={`fixed top-0 z-50 w-full min-w-[370px]  pt-4 pb-3 overflow-hidden  bg-white shadow`}
      animate={{ height: isOpen ? "15rem" : "5rem" }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-wrap justify-between mx-auto max-w-7xl">
        <img
          onClick={() => {
            navigate("/");
          }}
          className="w-[10rem] h-full object-cover"
          src="/images/logo.png"
          alt=""
        />
        <div className="w-full md:w-auto">
          {/* icons */}
          <div className="absolute flex justify-end w-full mb-2 right-2 top-3 md:static ">
            <AiOutlineSearch className="mx-1 icon-sm" />
            <Link to="/main/cart">
              <AiOutlineShoppingCart className="mx-1 icon-sm" />
            </Link>
            <Link to="/login">
              <AiOutlineUserAdd className="mx-1 icon-sm" />
            </Link>
            <AiOutlineUnorderedList
              className="mx-1 icon-sm"
              onClick={() => {
                setOpen(!isOpen);
              }}
            />
          </div>
          <nav>
            <div className="flex justify-center p">
              {linkText.map((title, i) => (
                <div key={title} className="mt-2 ">
                  <buntton
                    variant="text"
                    size="sm"
                    color="pink"
                    className={`px-3 py-0 rounded-none hover:border-b-2 border-primary ${
                      title === current && active
                    }`}
                  >
                    <Link to={linkPath[i]}>
                      <span className="px-2 font-bold md:p text-dark ">
                        {title}
                      </span>
                    </Link>
                  </buntton>
                  <div className="pt-3 text-center note">
                    <p>item</p>
                    <p>item</p>
                    <p>item</p>
                    <p>item</p>
                  </div>
                </div>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
