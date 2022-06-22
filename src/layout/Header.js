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
import { useDispatch } from "react-redux/es/exports";
import { openLogin } from "../utils/redux/modalSlice";

const pageTitle = ["首頁", "商城", "會員專區", "關於我們"];
const subPage = {
  title: [
    ["首頁"],
    ["體驗課程", "手作烘培", "即期良品"],
    ["會員檔案", "優惠碼", "訂單查詢", "蒐藏清單"],
    ["品牌故事", "會員制度", "宅配須知", "聯絡客服"],
  ],
  path: [
    ["/"],
    ["/main/course", "/main/product", "/main/expireProduct"],
    [
      "/main/member/information",
      "/main/collection",
      "/main/member/order",
      "/main/member/collection",
    ],
    ["/main/about", "/", "/", "/main/customerService"],
  ],
};

const current = "產品";
const active = "border-b-2 ";

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toggle = () => setOpen(!isOpen);
  const handleOpen = () => dispatch(openLogin());
  return (
    <motion.header
      className={`fixed top-0 z-50 w-full min-w-[370px] h-[6rem]  pt-4 pb-3 overflow-hidden  bg-white shadow`}
      animate={{ height: isOpen ? "16rem" : "6rem" }}
      transition={{ duration: 0.3 }}
    >
      <div className="mx-auto max-w-7xl">
        {/* logo & icons */}
        <div className="flex flex-wrap justify-between mx-auto ">
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
              <AiOutlineUserAdd className="mx-1 icon-sm" onClick={handleOpen} />
              <AiOutlineUnorderedList
                className="mx-1 icon-sm"
                onClick={toggle}
              />
            </div>
          </div>
        </div>
        {/* menu */}
        <div className="flex justify-end my-1" onClick={toggle}>
          {pageTitle.map((title, mainIdx) => (
            <div key={title} className="">
              <button
                variant="text"
                size="sm"
                color="pink"
                className={`note  cursor-pointer md:p relative md:-top-6 px-3 py-1 rounded-none border-b-2 border-white hover:border-primary ${
                  title === current && active
                }`}
              >
                <span className="px-2 font-bold md:p text-dark ">{title}</span>
              </button>
              <div className="flex flex-col text-center note">
                {subPage.title[mainIdx].map((title, subIdx) => (
                  <Button
                    size="sm"
                    variant="text"
                    className="px-0 py-1 rounded-none"
                    key={title}
                  >
                    <Link to={subPage.path[mainIdx][subIdx]}>
                      <p className="my-1 text-dark">{title}</p>
                    </Link>
                  </Button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
