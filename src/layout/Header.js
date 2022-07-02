import React from "react";
import {
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineUnorderedList,
  AiOutlineUserAdd,
} from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import { Button } from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { closeModal, openLogin } from "../utils/redux/modalSlice";
import { updateUser } from "../utils/redux/userSlice";
import { toast } from "react-toastify";
import axios from "axios";
import { API_URL } from "../utils/config";
import { useCartState } from "../utils/redux/hooks-redux";

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
    ["/main/course", "/main/product", "/"],
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
  const currentUser = useSelector((state) => state.user.user);
  const toggle = () => setOpen(!isOpen);
  const handleOpen = () => {
    dispatch(closeModal());
    dispatch(openLogin());
  };
  const handleLogout = () => {
    toast.info("已成功登出!");
    dispatch(updateUser(null));
  };
  const handleNavigate = (path) => () => {
    navigate(path);
  };
  const [cart, setCart] = useCartState();
  return (
    <motion.header
      className={`fixed top-0 z-50 w-full min-w-[370px] h-[6rem]  pt-4 pb-3 overflow-hidden  bg-white shadow`}
      animate={{ height: isOpen ? "16rem" : "6rem" }}
      transition={{ duration: 0.3 }}
    >
      <div className="mx-auto max-w-7xl">
        {/* logo & icons */}
        <div className="flex flex-wrap justify-between pl-2 mx-auto ">
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
            <div className="absolute flex items-center justify-end w-full mb-2 right-2 top-3 md:static ">
              <span className=" p">
                {currentUser && currentUser.email?.split("@")[0]}
              </span>
              <AiOutlineSearch
                className="mx-1 icon-sm"
                onClick={() => {
                  axios.get(API_URL + "/auth").then((e) => console.log(e));
                }}
              />
                
              {/* 購物車pin動畫 */}
              <div className="relative">
                <Link to="/main/cart">
                  <AiOutlineShoppingCart className="mx-1 icon-sm" />
                </Link>
              {cart[1].length > 0 ?(
                <span class="flex h-3 w-3 absolute -top-1 -right-1">
                  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span class="relative inline-flex rounded-full h-3 w-3 bg-secondary bg-opacity-50"></span>
                </span>
              
              ):(
                <></>
              )}
              </div>

              {currentUser ? (
                <span className="cursor-pointer">
                  <FiLogOut
                    className="mx-1 cursor-pointer icon-sm"
                    onClick={handleLogout}
                  />
                </span>
              ) : (
                <span className="cursor-pointer">
                  <AiOutlineUserAdd
                    className="mx-1 icon-sm"
                    onClick={handleOpen}
                  />
                </span>
              )}
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
                className={`note  cursor-pointer md:p relative md:-top-6 px-3 py-1 rounded-none hvr-underline-from-center ${
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
                    onClick={handleNavigate(subPage.path[mainIdx][subIdx])}
                  >
                    <p className="my-1 text-dark">{title}</p>
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
