import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full py-10 text-center text-white md:text-left note bg-secondary">
      <div className="flex flex-wrap justify-around max-w-5xl mx-auto">
        <div className="w-full py-5 sm:w-1/2 md:w-auto">
          <div className="max-w-[15rem] py-2 mx-auto mb-2 bg-white rounded opacity-90">
            <img
              src={`${process.env.PUBLIC_URL}/images/logo.png`}
              alt="LOGO"
              className="w-[10rem] mx-auto"
            />
          </div>
          <div className="flex justify-center">
            <p className="mx-1 my-1 font-medium">
              <span>其他相關平台</span>
            </p>
            <FaFacebook className="mx-1 icon-lg" />
            <FaInstagram className="mx-1 icon-lg" />
            <FaTwitter className="mx-1 icon-lg" />
          </div>
          <div className="my-1 ">
            <p>
              Copyright © Sweeten 食甜甜點工作室
              <br />
              2022. All Rights Reserved
            </p>
          </div>
        </div>
        <div className="w-full py-5 sm:w-1/2 md:w-auto">
          <ul>
            <li className="font-semibold p">客戶服務</li>
            <li className="py-1">宅配須知</li>
            <li className="pb-1">退款政策</li>
            <li className="pb-1">隱私政策</li>
            <li className="pb-1">服務條款</li>
          </ul>
        </div>
        <div className="w-full py-5 sm:w-1/2 md:w-auto">
          <ul>
            <li className="font-semibold p">關於我們</li>
            <li className="py-1">電話: 03-1234567</li>
            <li className="py-1">地址: 中華路二段55號</li>
          </ul>
        </div>
        <div className="w-full py-5 sm:w-1/2 md:w-auto">
          <ul>
            <li className="font-semibold p">會員專區</li>
            <li className="my-1">我的帳戶</li>
            <li className="mb-1">訂單查詢</li>
            <li className="mb-1">蒐藏清單</li>
            <li className="mb-1">會員制度</li>
            <li className="mb-1">專屬優惠</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
