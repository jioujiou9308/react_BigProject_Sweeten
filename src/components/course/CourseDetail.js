import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import {
  AiFillPlusCircle,
  AiFillMinusCircle,
  AiTwotoneStar,
} from "react-icons/ai";
import { Button } from "@material-tailwind/react";
import { useState } from "react";

const CourseDetail = (props) => {
  const navigate = useNavigate();
  const { lessons, swipe } = props;
  const dates = ["6月", "8月"];
  const [count, setCount] = useState(1);
  const a = swipe;
  console.log(a);

  const courseDetail = [
    {
      id: 1,
      material: "製作原料:",
      materialIntro: "111111",
      difficulty: "製作難度:",
      difficultyIntro: [
        <AiTwotoneStar />,
        <AiTwotoneStar />,
        <AiTwotoneStar />,
      ],
      teacher: "授課老師:",
      teacherIntro: "陳泓霖老師",
      time: "上課時數:",
      timeIntro: "6小時",
    },
    {
      id: 2,
      material: "製作原料:",
      materialIntro: "222222",
      difficulty: "製作難度",
      difficultyIntro: [<AiTwotoneStar />, <AiTwotoneStar />],
      teacher: "授課老師:",
      teacherIntro: "陳應乳老師",
      time: "上課時數:",
      timeIntro: "10小時",
    },
    {
      id: 3,
      material: "製作原料:",
      materialIntro: "333333",
      difficulty: "製作難度",
      difficultyIntro: [
        <AiTwotoneStar />,
        <AiTwotoneStar />,
        <AiTwotoneStar />,
        <AiTwotoneStar />,
        <AiTwotoneStar />,
      ],
      teacher: "授課老師:",
      teacherIntro: "黃雲韓老師",
      time: "上課時數:",
      timeIntro: "5小時",
    },
  ];

  return (
    <div className="flex mt-5 mb-5 border border-red-500 h-96">
      <div className="w-2/5 ml-10">
        <div className="w-full bg-white">
          <div className="flex items-center justify-between mt-10">
            <p className="h2">{lessons[a].name}</p>
          </div>
          <p className="mt-2 mb-5 h3">$ {lessons[a].price} NTD</p>

          {/* 課程的日期 */}
          {/* 課程的日期 */}
          <div>
            <p className="mt-2 text-sm leading-none text-gray-800 md:mt-0">
              <span className="font-semibold text-gray-300">時段</span>
            </p>
            <select className="w-full py-2 text-sm text-center transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-primary text-blueGray-600 focus:outline-none focus:ring">
              <option>2022/07/03(日)</option>
              <option>2022/07/04(一)</option>
              <option>2022/07/05(二)</option>
              <option>2022/07/06(三)</option>
            </select>
          </div>

          <p className="mt-5 p">參加人數</p>
          <div className="flex flex-col gap-2 sm:flex-row sm:gap-0">
            <div className="sm:-mr-8">
              <label htmlFor="adult">大人：</label>
              <input
                id="adult"
                type="number"
                class="border-0 py-2 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-1/2 ease-linear transition-all duration-150"
                min="0"
                placeholder="請輸入人數"
              />{" "}
              人,
            </div>
            <div>
              <label htmlFor="kid">小孩：</label>
              <input
                id="kid"
                type="number"
                class="border-0 py-2 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-1/2 ease-linear transition-all duration-150"
                min="0"
                placeholder="請輸入人數"
              />{" "}
              人
            </div>

            <div className="flex justify-between mt-3 lg:m-0">
              <Button
                className="ml-3 text-white border-2 rounded-none border-warning bg-warning"
                variant="filled"
                onClick={() => navigate("/main/courseDetail")}
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
              <h2 className="ml-2 md:ml-0 h3">{courseDetail[a].material}</h2>
              <p className="text-justify p">{courseDetail[a].materialIntro}</p>
            </div>
            <div className="flex mb-4">
              <h2 className="ml-2 md:ml-0 h3">{courseDetail[a].difficulty}</h2>
              <h2 className="flex text-yellow-500 h2">
                {courseDetail[a].difficultyIntro}
              </h2>
            </div>
            <div className="mb-4">
              <h2 className="ml-2 md:ml-0 h3">
                {courseDetail[a].teacher}
                {courseDetail[a].teacherIntro}
              </h2>
            </div>
            <div className="mb-4">
              <h2 className="ml-2 md:ml-0 h3">
                {courseDetail[a].time}
                {courseDetail[a].timeIntro}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
