import React, { useEffect } from "react";
import {
  AiFillHeart,
  AiFillPlusCircle,
  AiFillMinusCircle,
  AiOutlineStar,
  AiOutlineRight,
} from "react-icons/ai";
import { Button } from "@material-tailwind/react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const CourseDetail = (props) => {
  const { lessons, swipe } = props;
  const [selectedItem, setSelectedItem] = useState();
  const dates = ["6月", "8月"];
  const [count, setCount] = useState(1);
  const [favClick, setFavClick] = useState(true);
  const a = swipe;
  console.log(lessons[0]);
  //     const [courseDetail, setCourseDetail] = useState([]);
  //     const { id } = useParams();
  //     console.log(id);

  return (
    <div className="flex mt-5 mb-5 border border-red-500 h-96">
      <div className="w-1/2 ml-3">
        <div className="w-full bg-white">
          <div className="flex items-center justify-between mt-10">
            <p className="h2">{lessons[a].name}</p>
            {/* 愛心的按鈕功能 */}
            {/* 愛心的按鈕功能 */}
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
          <p className="mt-2 mb-5 h3">$ {lessons[a].price} NTD</p>

          {/* 課程的日期 */}
          {/* 課程的日期 */}
          <div className="flex items-center">
            <p className="m-4 ml-0 p">課程日期</p>
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
          <p className="mt-2 text-center w-28 bg-primary p">父親節特惠</p>

          {/* 數量和結帳按鈕桌機板 */}
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
      <div className="w-1/2">
        <div className="mx-8 md:mt-16 md:flex">
          <div className="w-full md:pr-10 md:w-1/2">
            <div className="mb-4">
              <h2 className="ml-2 md:ml-0 h3">商品特色：</h2>
              <p className="text-justify p">description</p>
            </div>

            <div className="mb-4">
              <h2 className="ml-2 md:ml-0 h3">原料：</h2>
              <p className="text-justify p">description</p>
            </div>

            <div>
              <h2 className="ml-2 md:ml-0 h3">過敏原：</h2>
              <p className="text-justify p">description</p>
              {/* {description} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
