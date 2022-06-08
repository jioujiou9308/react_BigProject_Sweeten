import React from "react";
import { AiFillHeart } from "react-icons/ai";

function ProductDetail() {
  return (
    <>
      <div className="hidden md:block ">
        {/* 桌機板DEMO */}
        <div className="flex ">
          {/* demo大圖(左側)桌機板 */}
          <div className="w-2/5 p-7 mr-16">
            <img
              className="max-w-full"
              src={require("../img/product_demo1_upper.png")}
              alt=""
            />
            {/* DEMO左側三張小圖 */}
            <div className="flex justify-center mt-12">
              <img
                className="mx-1"
                src={require("../img/product_demo1_upper_small.png")}
                alt=""
              />
              <img
                className="mx-1"
                src={require("../img/product_demo2_upper_small.png")}
                alt=""
              />
              <img
                className="mx-1"
                src={require("../img/product_demo3_upper_small.png")}
                alt=""
              />
            </div>
          </div>
          {/* DEMO右欄 桌機板*/}
          <div className="w-3/5">
            {/* 右欄標題桌機板 */}
            <div className="border-b-2 mr-16">
              {/* 桌機板標題和副標字體+愛心 */}
              <div className="flex justify-between ">
                <p className="text-4xl font-normal">倉石乳酪蛋糕</p>
                <AiFillHeart className="h-10 w-10 text-sub" />
              </div>

              <p className="text-2xl font-normal mt-2 mb-5">$ 1200 NTD</p>
            </div>
          </div>
        </div>
      </div>

      {/* 展示圖手機板 */}
      <div className=" mx-5 md:hidden">
        <img
          className="max-w-full pt-10 mb-10 px-12"
          src={require("../img/product_demo1_upper.png")}
          alt=""
        />

        {/* 愛心圖示手機板 */}
        <div className="flex justify-end">
          <AiFillHeart className="h-14 w-14 my-3 mr-5 text-sub" />
        </div>

        {/* 標題+價錢手機板 */}
        <div className="flex justify-between px-2">
          {/* 手機板標題字體ㄉclassname */}
          <p className="text-2xl font-normal">倉石乳酪蛋糕</p>
          <p className="text-2xl font-normal">$ 1200 NTD</p>
        </div>
      </div>
    </>
  );
}

export default ProductDetail;
