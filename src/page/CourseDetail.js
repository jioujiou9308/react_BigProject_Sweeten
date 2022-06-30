import React, { useEffect } from "react";
import {
  AiFillHeart,
  AiFillPlusCircle,
  AiFillMinusCircle,
  AiOutlineStar,
  AiOutlineRight,
} from "react-icons/ai";
import UserComment from "../components/courseDetail/UserComment";
import YouMayLikeCourse from "../components/courseDetail/YouMayLikeCourse";
import { Button } from "@material-tailwind/react";
import { useState } from "react";
import axios from "axios";
import { API_URL } from "../utils/config";

const CourseDetail = () => {
  const [selectedItem, setSelectedItem] = useState();
  const dates = ["6月", "8月"];
  const [count, setCount] = useState(2);
  const [favClick, setFavClick] = useState(false);
  const [courseDetail, setCourseDetail] = useState([]);

  useEffect(() => {
    let getCourseDetail = async () => {
      let response = await axios.get(API_URL + "/lesson/1");
      setCourseDetail(response.data);
      console.log(response.data);
    };
    getCourseDetail();
  }, []);

  return (
    <>
      {courseDetail.map((v, i) => {
        const { id, name, price, description, start_date, duration } = v;
        return (
          <>
            <div className="bg-white pb-60">
              {/* 桌機板DEMO */}
              <div className="hidden md:flex">
                {/* demo大圖(左側)桌機板 */}
                <div className="w-1/2 mr-10 mt-14 ml-7">
                  <img
                    className="max-w-full"
                    src={
                      process.env.PUBLIC_URL +
                      "/images/courseDetial/course_demo_upper.png"
                    }
                    alt=""
                  />
                </div>
                {/* DEMO右欄 桌機板*/}
                <div className="w-1/2 mr-7">
                  {/* 桌機板標題和副標字體+愛心 */}
                  <div className="border-b-2 ">
                    <div className="flex items-center justify-between mt-10">
                      <p className="h2">{name}</p>
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
                    <p className="mt-2 mb-5 h3">$ {price} NTD</p>
                  </div>

                  <div className="flex items-center">
                    {/* 右欄尺寸桌機板 */}
                    <p className="m-4 ml-0 p">課程日期</p>
                    {/* 尺寸按鈕桌機板  小字尺寸*/}
                    {dates.map((v, i) => {
                      return (
                        <button
                          className={`mr-5 px-2 py-1 size-btn-desk ${
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

                  <p className="mt-5 p">商品參與的優惠活動</p>
                  <p className="mt-2 text-center w-28 bg-primary p">
                    父親節特惠
                  </p>

                  {/* 數量和結帳按鈕桌機板 */}
                  <div className="justify-between mt-5 lg:flex ">
                    <div className="flex">
                      <AiFillMinusCircle
                        className="icon-lg text-secondary"
                        onClick={() => {
                          count > 1 && setCount(count - 1);
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

                    <div className="flex justify-between mt-3 lg:m-0">
                      <Button
                        className="border-2 rounded-none border-sub"
                        variant="outlined"
                      >
                        <span className="text-black">加入購物車</span>
                      </Button>

                      <Button
                        className="ml-3 text-white border-2 rounded-none border-warning bg-warning"
                        variant="filled"
                      >
                        <span className="">立即購買</span>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              {/* 展示圖手機板 */}
              <div className="mx-8 md:hidden">
                <img
                  className="max-w-full px-8 pt-10 mb-8"
                  src={
                    process.env.PUBLIC_URL +
                    "/images/courseDetial/course_demo_upper.png"
                  }
                  alt=""
                />

                {/* 愛心圖示手機板 */}
                <div className="flex justify-end mb-3">
                  <Button
                    variant="outlined"
                    className="rounded-full select-none border-line text-line"
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
                <div className="flex justify-between ">
                  {/* 手機板標題字體ㄉclassname */}
                  <p className="h2">{name}</p>
                  <p className="h2">$ {price} NTD</p>
                </div>

                {/* 數量加減手機板 */}
                <div className="flex items-center my-5 ">
                  <AiFillMinusCircle
                    className="icon-xl text-secondary"
                    onClick={() => {
                      count > 1 && setCount(count - 1);
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
                <div className="flex items-center justify-start">
                  <p className="p">課程日期</p>
                  {dates.map((v, i) => {
                    return (
                      <button
                        className={`ml-5 px-2 py-1 size-btn-desk ${
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
              {/* 商品說明&評論區桌機板+手機板 */}

              <div className="mx-8 md:mt-16 md:flex">
                <div className="w-full md:pr-10 md:w-1/2">
                  <div className="mb-4">
                    <h2 className="ml-2 md:ml-0 h3">商品特色：</h2>
                    <p className="text-justify p">{description}</p>
                  </div>

                  <div className="mb-4">
                    <h2 className="ml-2 md:ml-0 h3">原料：</h2>
                    <p className="text-justify p">{description}</p>
                  </div>

                  <div>
                    <h2 className="ml-2 md:ml-0 h3">過敏原：</h2>
                    <p className="text-justify p">{description}</p>
                  </div>
                </div>

                <div className="overflow-auto md:pl-5 md:w-1/2">
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
                      <AiOutlineRight className="pt-2 icon-l" />
                    </div>
                  </div>

                  {/* 評論區 下半部使用者 */}
                  <div className="">
                    <UserComment />
                  </div>
                  <Button variant="text">
                    <div className="flex items-center justify-start mt-4 mb-12 ml-8 text-secondary md:hidden">
                      <p className="p">查看全部</p>
                      <AiOutlineRight className="icon-l" />
                    </div>
                  </Button>
                </div>
              </div>
            </div>
          </>
        );
      })}

      {/* 你可能也會喜歡 */}
      <div className="px-10 absolute bottom-[240px] hidden w-screen right-0 my-8 bg-theme md:block bg-sub">
        <p className="pt-3 pb-6 text-center h2">你可能也會喜歡</p>
        <YouMayLikeCourse />
      </div>
    </>
  );
};

export default CourseDetail;
