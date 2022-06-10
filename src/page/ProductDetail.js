import React from "react";
import {
  AiFillHeart,
  AiFillPlusCircle,
  AiFillMinusCircle,
} from "react-icons/ai";

function ProductDetail() {
  return (
    <>
      <div className="hidden bg-white md:block">
        {/* 桌機板DEMO */}
        <div className="flex ">
          {/* demo大圖(左側)桌機板 */}
          <div className="w-2/5 mt-8 mr-16 ml-7">
            <img
              className="max-w-full"
              src={require("../img/product_demo1_upper.png")}
              alt=""
            />
            {/* DEMO左側三張小圖 */}
            <div className="flex justify-center mt-14">
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
          <div className="w-3/5 mr-20">
            {/* 桌機板標題和副標字體+愛心 */}
            <div className="border-b-2 ">
              <div className="flex justify-between mt-10">
                <p className="text-4xl font-normal">倉石乳酪蛋糕</p>
                <AiFillHeart className="w-10 h-10 text-sub" />
              </div>
              <p className="mt-2 mb-5 text-2xl font-light">$ 1200 NTD</p>
            </div>

            {/* 右欄尺寸桌機板 */}
            <p className="mt-4 mb-2 text-2xl font-light">尺寸</p>
            {/* 尺寸按鈕桌機板  小字尺寸*/}
            <button className="px-6 py-2 mr-5 font-light border text-l border-sub">
              6吋
            </button>
            <button className="px-6 py-2 font-light border text-l border-sub bg-light">
              8吋
            </button>

            <p className="mt-5 text-2xl font-light">商品參與的優惠活動</p>
            <p className="w-32 mt-2 text-center bg-primary">父親節特惠</p>

            {/* 數量和結帳按鈕桌機板 */}
            <div className="flex justify-between mt-8">
              <div className="flex">
                <AiFillMinusCircle className="w-7 h-7 text-sub" />
                <p className="mx-5">1</p>
                <AiFillPlusCircle className="w-7 h-7 text-sub" />
              </div>

              <div className="flex justify-center">
                <button className="px-8 py-1 mr-5 border-2 border-sub">
                  加入購物車
                </button>
                <button className="px-8 text-white border-2 border-warning bg-warning">
                  立即購買
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 展示圖手機板 */}
      <div className="mx-5 md:hidden">
        <img
          className="max-w-full px-12 pt-10 mb-10"
          src={require("../img/product_demo1_upper.png")}
          alt=""
        />

        {/* 愛心圖示手機板 */}
        <div className="flex justify-end">
          <AiFillHeart className="my-3 mr-5 h-14 w-14 text-sub" />
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
