import React from "react";
import {
  AiFillHeart,
  AiFillPlusCircle,
  AiFillMinusCircle,
  AiOutlineStar,
  AiOutlineRight,
} from "react-icons/ai";
import UserComment from "../components/UserComment";
import You_may_like from "../components/You_may_like_product";

function ProductDetail() {
  return (
    <>
      <div className="bg-white ">
        {/* 桌機板DEMO */}
        <div className="hidden md:flex">
          {/* demo大圖(左側)桌機板 */}
          <div className="w-2/5 mt-8 mr-16 ml-7">
            <img
              className="max-w-full"
              src={`${process.env.PUBLIC_URL}/images/productDetail/product_demo1_upper.png`}
              alt=""
            />
            {/* DEMO左側三張小圖 */}
            <div className="flex justify-center w-1/2 mx-auto mt-14">
              <img
                className="w-1/3 mx-1"
                src={`${process.env.PUBLIC_URL}/images/productDetail/product_demo1_upper_small.png`}
                alt=""
              />
              <img
                className="w-1/3 mx-1"
                src={
                  process.env.PUBLIC_URL +
                  "/images/productDetail/product_demo2_upper_small.png"
                }
                alt=""
              />
              <img
                className="w-1/3 mx-1"
                src={
                  process.env.PUBLIC_URL +
                  "/images/productDetail/product_demo3_upper_small.png"
                }
                alt=""
              />
            </div>
          </div>
          {/* DEMO右欄 桌機板*/}
          <div className="w-3/5 mr-10">
            {/* 桌機板標題和副標字體+愛心 */}
            <div className="border-b-2 ">
              <div className="flex justify-between mt-10">
                <p className="h1">倉石乳酪蛋糕</p>
                <AiFillHeart className="icon-xl text-sub" />
              </div>
              <p className="mt-2 mb-5 h2">$ 1200 NTD</p>
            </div>

            {/* 右欄尺寸桌機板 */}
            <p className="mt-4 mb-2 p">尺寸</p>
            {/* 尺寸按鈕桌機板  小字尺寸*/}
            <button className="mr-5 size-btn-desk">6吋</button>
            <button className="size-btn-desk bg-light">8吋</button>

            <p className="mt-5 p">商品參與的優惠活動</p>
            <p className="w-24 mt-2 text-center p bg-primary">父親節特惠</p>

            {/* 數量和結帳按鈕桌機板 */}
            <div className="flex justify-between mt-8 ">
              <div className="flex">
                <AiFillMinusCircle className="icon-lg text-sub" />
                <p className="mx-5">1</p>
                <AiFillPlusCircle className="icon-lg text-sub" />
              </div>

              <div className="flex justify-center ">
                <button className="px-4 py-1 ml-5 border-2 p border-sub">
                  加入購物車
                </button>
                <button className="px-4 ml-5 text-white border-2 p border-warning bg-warning">
                  立即購買
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* 展示圖手機板 */}
        <div className="mx-8 md:hidden">
          <img
            className="max-w-full px-8 pt-10 mb-8"
            src={process.env.PUBLIC_URL + "/images/productDetail/product_demo1_upper.png"}
            alt=""
          />

          {/* 愛心圖示手機板 */}
          <div className="flex justify-end">
            <AiFillHeart className="my-3 mr-5 icon-xl text-sub" />
          </div>

          {/* 標題+價錢手機板 */}
          <div className="flex justify-between px-2">
            {/* 手機板標題字體ㄉclassname */}
            <p className="h1">倉石乳酪蛋糕</p>
            <p className="h2">$ 1200 NTD</p>
          </div>

          {/* 數量加減手機板 */}
          <div className="flex items-center my-5 ml-5">
            <AiFillMinusCircle className="icon-xl text-sub" />
            <p className="mx-5">1</p>
            <AiFillPlusCircle className="icon-xl text-sub" />
          </div>
          {/* 尺寸手機板 */}
          <div className="flex items-center justify-start ml-6">
            <p className="p">尺寸</p>
            <button className="ml-5 size-btn-desk">6吋</button>
            <button className="ml-5 size-btn-desk bg-light">8吋</button>
          </div>

          <h2 className="my-5 p">商品參與的優惠活動</h2>
          <p className="mt-2 text-center p w-28 bg-primary">父親節特惠</p>

          {/* 加入購物車按鈕手機板 */}
          <div className="flex justify-between my-6">
            <button className="px-8 py-2 border-2 p md:px-4 md:py-1 border-sub">
              加入購物車
            </button>
            <button className="px-8 text-white border-2 p md:px-6 border-warning bg-warning">
              立即購買
            </button>
          </div>
        </div>
        {/* 商品說明&評論區桌機板+手機板 */}

        <div className="mx-8 md:mt-16 md:flex">
          <div className="w-full md:w-2/5">
            <div className="mb-4">
              <h2 className="ml-2 h2 md:ml-0">商品說明：</h2>
              <p className="text-justify p">
                我們不得不面對一個非常尷尬的事實，那就是，對於甜點，我們不能不去想，卻也不能走火入魔。我們要學會站在別人的角度思考。
              </p>
            </div>

            <div className="mb-4">
              <h2 className="m-2 h2 md:ml-0">成分：</h2>
              <p className="text-justify p">
                我們不得不面對一個非常尷尬的事實，那就是，對於甜點，我們不能不去想，卻也不能走火入魔。我們要學會站在別人的角度思考。
              </p>
            </div>

            <div>
              <h2 className="ml-2 md:ml-0 h2">過敏原：</h2>
              <p className="text-justify p">我們不得不面對一個非常尷尬的事實。</p>
            </div>
          </div>

          <div className="overflow-auto md:px-10 md:w-3/5">
            {/* 評論區 上半部*/}
            <div className="flex justify-between w-full h-1/5">
              <div className="flex items-center justify-around w-full my-7 md:inline">
                <div>
                  <h2 className="h2">商品評論</h2>
                  <p className="md:hidden p">(6則評論)</p>
                </div>

                <div className="flex items-center">
                  <AiOutlineStar className="comment-star" />
                  <AiOutlineStar className="comment-star" />
                  <AiOutlineStar className="comment-star" />
                  <AiOutlineStar className="comment-star" />
                  <p className="mx-3 p">4/5</p>
                  <p className="hidden md:block p">(6則評論)</p>
                </div>
              </div>

              <div className="items-center hidden md:w-2/5 md:justify-end md:flex text-secondary">
                <p className="p">查看全部</p>
                <AiOutlineRight className="pt-2" />
              </div>
            </div>

            {/* 評論區 下半部使用者 */}
            <div className="">
              <UserComment />
              <UserComment />
              <UserComment />
              <UserComment />
              <UserComment />
            </div>

            <div className="flex items-center justify-start mt-4 mb-12 ml-8 text-secondary md:hidden">
              <p className="p">查看全部</p>
              <AiOutlineRight />
            </div>
          </div>
        </div>
      </div>
      {/* 你可能也會喜歡 */}
      <div className="hidden md:my-8 md:bg-theme md:block">
        <p className="pt-3 pb-6 text-center h2">你可能也會喜歡</p>
        <You_may_like />
      </div>
    </>
  );
}

export default ProductDetail;
