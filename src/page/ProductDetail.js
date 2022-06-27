import React, { useEffect, useState } from "react";
import {
  AiFillHeart,
  AiFillPlusCircle,
  AiFillMinusCircle,
  AiOutlineStar,
  AiOutlineRight,
} from "react-icons/ai";
import UserComment from "../components/productDetail/UserComment";
import YouMayLikeProduct from "../components/productDetail/YouMayLikeProduct";
import { Button } from "@material-tailwind/react";
//import material tailwind ㄉ button
import { API_URL } from "../utils/config";
import axios from "axios";

function ProductDetail() {
  const [selectedItem, setSelectedItem] = useState();
  const sizes = ["6吋", "8吋"];
  const [count, setCount] = useState(2);
  const [favClick, setFavClick] = useState(false);
  const [productDetail, setProductDetail] = useState([]);

  //TODO: comment和照片ㄉAPI還沒串
  useEffect(() => {
    let getProductDetail = async () => {
      let response = await axios.get(API_URL + "/product/1");
      setProductDetail(response.data);
      console.log(response.data);
    };
    getProductDetail();
  }, []);

  return (
    <>
      {productDetail.map((v, i) => {
        const { id, name, price, description, express_id, created_at } = v;
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
                    <div className="flex items-center justify-between mt-10">
                      <p className="h1">{name}</p>
                      {/* FIXME rounded-full 也無法變完全圓*/}
                      <Button
                        variant="outlined"
                        className="border rounded-full select-none border-line text-line"
                        onClick={() => {
                          setFavClick(!favClick);
                        }}
                      >
                        <AiFillHeart
                          className={`icon-xl select-none rounded-full ${
                            favClick && "text-secondary"
                          }`}
                        />
                      </Button>
                    </div>
                    <p className="mt-2 mb-5 h2">$ {price} NTD</p>
                  </div>

                  {/* 右欄尺寸桌機板 */}
                  <p className="mt-4 mb-2 p">尺寸</p>
                  {/* 尺寸按鈕桌機板  小字尺寸*/}
                  {sizes.map((v, i) => {
                    return (
                      <button
                        className={`mr-5 size-btn-desk ${
                          selectedItem === v ? "bg-sub" : ""
                        }`}
                        onClick={() => {
                          setSelectedItem(v);
                        }}
                      >
                        {v}
                      </button>
                    );
                  })}
                  {/* <button className="mr-5 size-btn-desk">6吋</button>
            <button className="size-btn-desk bg-light">8吋</button> */}

                  <p className="mt-5 p">商品參與的優惠活動</p>
                  <p className="w-24 mt-2 text-center p bg-primary">
                    父親節特惠
                  </p>

                  {/* 數量和結帳按鈕桌機板 */}
                  <div className="flex justify-between mt-8 ">
                    <div className="flex">
                      <AiFillMinusCircle
                        className="icon-lg text-secondary"
                        onClick={() => {
                          if (count > 1) {
                            setCount(count - 1);
                          }
                        }}
                      />
                      <p className="mx-3">{count}</p>
                      <AiFillPlusCircle
                        className="icon-lg text-secondary"
                        onClick={() => {
                          setCount(count + 1);
                        }}
                      />
                    </div>

                    <div className="flex justify-center ">
                      <Button
                        className="border-2 rounded-none border-sub"
                        variant="outlined"
                      >
                        <span className="text-black p">加入購物車</span>
                      </Button>

                      <Button
                        className="ml-3 text-white border-2 rounded-none border-warning bg-warning"
                        variant="filled"
                      >
                        <span className="p">立即購買</span>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              {/* 展示圖手機板 */}
              <div className="mx-4 md:hidden">
                <img
                  className="max-w-full px-8 pt-10 mb-8"
                  src={
                    process.env.PUBLIC_URL +
                    "/images/productDetail/product_demo1_upper.png"
                  }
                  alt=""
                />

                {/* 愛心圖示手機板 */}
                <div className="flex justify-end my-4">
                  {/* FIXME rounded-full 也無法變完全圓*/}
                  <Button
                    variant="outlined"
                    className="rounded-full select-none text-line border-line"
                    onClick={() => {
                      setFavClick(!favClick);
                    }}
                  >
                    <AiFillHeart
                      className={`icon-xl select-none rounded-full ${
                        favClick && "text-secondary"
                      }`}
                    />
                  </Button>
                </div>

                {/* 標題+價錢手機板 */}
                <div className="flex justify-between px-2">
                  {/* 手機板標題字體ㄉclassname */}
                  <p className="h2">{name}</p>
                  <p className="h3">$ {price} NTD</p>
                </div>

                {/* 數量加減手機板 */}
                <div className="flex items-center my-5 ml-5">
                  <AiFillMinusCircle
                    className="icon-xl text-secondary"
                    onClick={() => {
                      if (count > 1) {
                        setCount(count - 1);
                      }
                    }}
                  />
                  <p className="mx-5">{count}</p>
                  <AiFillPlusCircle
                    className="icon-xl text-secondary"
                    onClick={() => {
                      setCount(count + 1);
                    }}
                  />
                </div>
                {/* 尺寸手機板 */}
                <div className="flex items-center justify-start ml-6">
                  <p className="p">尺寸</p>

                  {sizes.map((v, i) => {
                    return (
                      <button
                        className={`ml-5 size-btn-desk ${
                          selectedItem === v ? "bg-sub" : ""
                        }`}
                        onClick={() => {
                          setSelectedItem(v);
                        }}
                      >
                        {v}
                      </button>
                    );
                  })}
                </div>

                <h2 className="my-5 p">商品參與的優惠活動</h2>
                <p className="mt-2 text-center p w-28 bg-primary">父親節特惠</p>

                {/* 加入購物車按鈕手機板 */}
                <div className="flex justify-between my-6">
                  <Button
                    className="px-4 py-1 border-2 rounded-none border-sub"
                    variant="outlined"
                  >
                    {" "}
                    <span className="text-black p">加入購物車</span>
                  </Button>

                  <Button
                    className="px-4 text-white border-2 rounded-none shadow-primary border-warning bg-warning"
                    variant="filled"
                  >
                    <span className="p">立即購買</span>
                  </Button>
                  {/* <button className="px-8 py-2 border-2 p md:px-4 md:py-1 border-sub">
              加入購物車
            </button>
            <button className="px-8 text-white border-2 p md:px-6 border-warning bg-warning">
              立即購買
            </button> */}
                </div>
              </div>
              {/* 商品說明&評論區桌機板+手機板 */}

              <div className="mx-8 md:mt-16 md:flex">
                <div className="w-full md:w-2/5">
                  <div className="mb-4">
                    <h2 className="ml-2 h2 md:ml-0">商品說明：</h2>
                    <p className="text-justify p">{description}</p>
                  </div>

                  <div className="mb-4">
                    <h2 className="m-2 h2 md:ml-0">成分：</h2>
                    <p className="text-justify p">{description}</p>
                  </div>

                  <div>
                    <h2 className="ml-2 md:ml-0 h2">過敏原：</h2>
                    <p className="text-justify p">{description}</p>
                  </div>
                </div>

                <div className="overflow-auto md:px-10 md:w-3/5">
                  {/* 評論區 上半部*/}
                  <div className="flex justify-between w-full h-1/5">
                    <div className="flex items-center justify-around w-full my-7">
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
                  </div>

                  <div className="flex items-center justify-start mt-4 mb-12 ml-8 text-secondary md:hidden ">
                    <p className="p">查看全部</p>
                    <AiOutlineRight />
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}

      {/* 你可能也會喜歡 */}
      <div className="hidden my-8 bg-sub md:block">
        <p className="pt-3 pb-6 text-center h2">你可能也會喜歡</p>

        <YouMayLikeProduct />
      </div>
    </>
  );
}

export default ProductDetail;
