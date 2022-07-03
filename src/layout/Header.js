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

const titleOnLogin = ["首頁", "商城", "會員專區", "關於我們"];
const titleOnLogout = ["首頁", "商城", "關於我們"];
const pageOnLogin = {
  title: [
    ["首頁"],
    ["體驗課程", "手作烘培", "即期良品"],
    ["會員檔案", "訂單查詢", "蒐藏清單"],
    ["品牌故事", "會員制度", "宅配須知", "聯絡客服"],
  ],
  path: [
    ["/"],
    ["/main/course", "/main/product", "/main/expireProduct"],
    [
      "/main/member/information",
      "/main/member/order",
      "/main/member/collection",
    ],
    ["/main/about", "/", "/", "/main/customerService"],
  ],
};
const pageOnLogout = {
  title: [
    ["首頁"],
    ["體驗課程", "手作烘培", "即期良品"],
    ["品牌故事", "會員制度", "宅配須知", "聯絡客服"],
  ],
  path: [
    ["/"],
    ["/main/course", "/main/product", "/main/expireProduct"],
    ["/main/about", "/", "/", "/main/customerService"],
  ],
};
const current = "產品";
const active = "border-b-2 ";

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const subPage = !!user?.id ? pageOnLogin : pageOnLogout;
  const pageTitle = !!user?.id ? titleOnLogin : titleOnLogout;

  /* ----------------------------- event function ----------------------------- */
  const toggle = () => setOpen(!isOpen);
  const handleOpen = () => {
    dispatch(closeModal());
    dispatch(openLogin());
  };
  const handleLogout = async () => {
    axios
      .get(API_URL + "/auth/logout", { withCredentials: true })
      .then(({ data }) => {
        dispatch(updateUser({ id: 0, name: "遊客" }));
        toast.info(data);
      })
      .catch((e) => {
        toast.error("發生錯誤");
      });
  };
  const handleNavigate = (path) => () => {
    navigate(path);
  };
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
              <span className="px-2 p">
                {user && user.email?.split("@")[0]}
              </span>
              <AiOutlineSearch
                className="mx-1 icon-sm"
                onClick={() => {
                  axios
                    .get(API_URL + "/auth/check?test=123", {
                      // 如果想要跨源讀寫 cookie
                      withCredentials: true,
                    })
                    .then((e) => console.log(e));
                }}
              />
              {/* 購物車pin動畫 */}
              <div className="relative ">
                <Link to="/main/cart">
                  <AiOutlineShoppingCart className="mx-1 icon-sm" />
                </Link>
                <span class="flex h-3 w-3 absolute -top-1 -right-1">
                  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span class="relative inline-flex rounded-full h-3 w-3 bg-secondary bg-opacity-50"></span>
                </span>
              </div>

              {!!user.id ? (
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
