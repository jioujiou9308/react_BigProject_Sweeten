import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiTwotoneStar } from "react-icons/ai";
import { Button, Input, Select, Option } from "@material-tailwind/react";
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
    <div className="flex flex-wrap justify-between h-full mb-10">
      <div className="w-full ml-10 mr-16 lg:w-1/3">
        <div className="w-full bg-white">
          <div className="flex items-center justify-between mt-10">
            <p className="font-bold h2">{lessons[a]?.name}</p>
          </div>
          <p className="mt-2 mb-5 h3">$ {lessons[a]?.price}/人 NTD</p>

          {/* 課程的日期 */}
          {/* 課程的日期 */}
          <div>
            <Select
              id="date"
              variant="standard"
              label="請選擇日期"
              onChange={(e) => {
                setSelect(e.target.value);
              }}
            >
              <Option value="2022/07/03(日) 10:00">2022/07/03(日) 10:00</Option>
              <Option value="2022/07/04(一) 13:00">2022/07/04(一) 13:00</Option>
              <Option value="2022/07/19(二) 15:00">2022/07/19(二) 15:00</Option>
              <Option value="2022/07/23(六) 13:00">2022/07/23(六) 13:00</Option>
            </Select>
          </div>

          <p className="mt-5 p">參加人數</p>
          <div className="flex flex-col sm:flex-col sm:gap-0">
            <div>
              <Input
                required
                id="adult"
                type="number"
                min="0"
                variant="standard"
                placeholder="大人人數"
                onChange={(e) => {
                  setInputAdult(e.target.value);
                }}
              />
            </div>
            <div>
              <Input
                className=""
                required
                id="kid"
                type="number"
                variant="standard"
                min="0"
                placeholder="小孩人數"
                onChange={(e) => {
                  setInputChild(e.target.value);
                }}
              />
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
            <div className="flex flex-wrap mb-4">
              <h2 className="font-bold md:ml-0 h2">
                {courseDetail[a].difficulty}
              </h2>
              <h2 className="flex text-yellow-500 h2">
                {courseDetail[a].difficultyIntro}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
