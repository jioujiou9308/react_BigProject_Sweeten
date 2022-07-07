import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiTwotoneStar } from "react-icons/ai";
import { Button } from "@material-tailwind/react";
import { useCourseState } from "../../utils/redux/hooks-redux";

const CourseDetail = (props) => {
  const navigate = useNavigate();
  const { lessons, swipe, lessonImage } = props;
  const a = swipe;
  const [coursCart, setCoursCart] = useCourseState(null);
  const [select, setSelect] = useState(null);
  const [inputAdult, setInputAdult] = useState(null);
  const [inputChild, setInputChild] = useState(null);
  console.log(coursCart);
  console.log("這個是coursRedux", coursCart);
  // 課程介紹
  const courseDetail = [
    {
      id: 1,
      material: "原料:",
      materialIntro: "老蛋白、杏仁粉、細砂糖、糖粉、鮮奶油、苦甜巧克力",
      difficulty: "製作難度:",
      difficultyIntro: [
        <AiTwotoneStar />,
        <AiTwotoneStar />,
        <AiTwotoneStar />,
      ],
      teacher: "授課老師:",
      teacherIntro: "陳泓霖老師",
      time: "上課時數:",
      timeIntro: " 3小時",
    },
    {
      id: 2,
      material: "製作原料:",
      materialIntro: "低筋麵粉、砂糖、無鹽奶油、雞蛋、玉米粉、可可粉、牛奶",
      difficulty: "製作難度",
      difficultyIntro: [<AiTwotoneStar />, <AiTwotoneStar />],
      teacher: "授課老師:",
      teacherIntro: "陳應乳老師",
      time: "上課時數:",
      timeIntro: " 4小時",
    },
    {
      id: 3,
      material: "製作原料:",
      materialIntro:
        "消化餅乾、無鹽奶油、奶油乳酪、鮮奶油、白砂糖、檸檬汁、檸檬皮、季節水果、玉米粉/低筋麵粉",
      difficulty: "製作難度",
      difficultyIntro: [
        <AiTwotoneStar />,
        <AiTwotoneStar />,
        <AiTwotoneStar />,
        <AiTwotoneStar />,
        <AiTwotoneStar />,
        <AiTwotoneStar />,
        <AiTwotoneStar />,
      ],
      teacher: "授課老師:",
      teacherIntro: "黃雲韓老師",
      time: "上課時數:",
      timeIntro: " 6小時",
    },
    {
      id: 4,
      material: "製作原料:",
      materialIntro:
        "蛋黃、蜂蜜、蛋白、細砂糖、全脂奶粉、無鹽奶油、動物性鮮奶油、低筋麵粉",
      difficulty: "製作難度",
      difficultyIntro: [
        <AiTwotoneStar />,
        <AiTwotoneStar />,
        <AiTwotoneStar />,
        <AiTwotoneStar />,
      ],
      teacher: "授課老師:",
      teacherIntro: "黃諾文老師",
      time: "上課時數:",
      timeIntro: "4小時",
    },
  ];

  return (
    <div className="flex flex-wrap h-full">
      <div className="w-full ml-10 mr-16 lg:w-1/3">
        <div className="w-full bg-white">
          <div className="flex items-center justify-between mt-10">
            <p className="h2">{lessons[a].name}</p>
          </div>
          <p className="mt-2 mb-5 h3">$ {lessons[a].price}/人 NTD</p>

          {/* 課程的日期 */}
          {/* 課程的日期 */}
          <div>
            <p className="mt-2 text-sm leading-none text-gray-800 md:mt-0">
              <span className="font-semibold text-gray-300">時段</span>
            </p>
            <select
              id="date"
              defaultValue="Select date"
              className="w-full py-2 text-sm text-center transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-primary text-blueGray-600 focus:outline-none focus:ring"
              onChange={(e) => {
                setSelect(e.target.value);
              }}
            >
              <option value="請選擇日期" selected>
                請選擇日期
              </option>
              <option value="2022/07/03(日) 10:00">2022/07/03(日) 10:00</option>
              <option value="2022/07/04(一) 13:00">2022/07/04(一) 13:00</option>
              <option value="2022/07/19(二) 15:00">2022/07/19(二) 15:00</option>
              <option value="2022/07/23(六) 13:00">2022/07/23(六) 13:00</option>
            </select>
          </div>

          <p className="mt-5 p">參加人數</p>
          <div className="flex flex-col gap-2 sm:flex-row sm:gap-0">
            <div className="sm:-mr-8">
              <label htmlFor="adult">大人：</label>
              <input
                required
                id="adult"
                type="number"
                className="w-1/2 py-2 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                min="0"
                placeholder="請輸入人數"
                onChange={(e) => {
                  setInputAdult(e.target.value);
                }}
              />
              人,
            </div>
            <div>
              <label htmlFor="kid">小孩：</label>
              <input
                required
                id="kid"
                type="number"
                className="w-1/2 py-2 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                min="0"
                placeholder="請輸入人數"
                onChange={(e) => {
                  setInputChild(e.target.value);
                }}
              />{" "}
              人
            </div>
          </div>
          <div className="mt-8 ">
            <Button
              className="ml-3 text-white border-2 rounded-none border-warning bg-warning"
              variant="filled"
              onClick={() => {
                setCoursCart([
                  select,
                  inputAdult,
                  inputChild,
                  lessons[a].name,
                  lessons[a].price,
                  lessonImage[a],
                ]);
                navigate("/main/courseDetail");
              }}
            >
              <span className="">立即購買</span>
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full mt-10 lg:w-1/2">
        <div className="mx-8 md:flex">
          <div className="w-full md:pr-10 ">
            <div className="mb-4">
              <h2 className="font-bold md:ml-0 h2 ">
                {courseDetail[a].material}
              </h2>
              <p className="text-justify p">{courseDetail[a].materialIntro}</p>
            </div>
            <div className="flex mb-4">
              <h2 className="font-bold md:ml-0 h2">
                {courseDetail[a].difficulty}
              </h2>
              <h2 className="flex text-yellow-500 h2">
                {courseDetail[a].difficultyIntro}
              </h2>
            </div>
            <div className="mb-4 ">
              <h2 className="font-bold md:ml-0 h2">
                {courseDetail[a].teacher}
              </h2>
              <h2 className=" md:ml-0 h3">{lessonImage[a].teacherFullName}</h2>
            </div>
            <div className="mb-4 ">
              <h2 className="font-bold md:ml-0 h2">{courseDetail[a].time}</h2>
              <h2 className=" md:ml-0 h3">{courseDetail[a].timeIntro}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
