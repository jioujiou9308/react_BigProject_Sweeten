import React, { useState, useEffect } from "react";
import axios from "axios";
import CourseSwiper from "./CourseSwiper";
import { API_URL } from "../../utils/config";
import CourseContent from "./CourseContent";
const CourseMain = () => {
  const [swipe, setSwipe] = useState(0);
  const [lessons, setLessons] = useState([true]);
  //勞出使用者資料;
  useEffect(() => {
    // 撈出各頁產品資料
    let getLesson = async () => {
      let response = await axios.get(`${API_URL}/lesson`);
      setLessons(response.data);
      // console.log(response.data);
      // console.log(response.data[0]);
    };
    getLesson();
  }, []);
  // console.log(lessons);
  return (
    <>
      <div className="h-[2000px]">
        <div className="relative z-20 w-4/5 m-auto">
          <img
            className="relative z-20 object-cover w-full max-h-80 rounded-2xl"
            src={"/images/course/hand.jpg"}
            alt=""
          />

          <div className="absolute z-30 w-5/6 text-center text-white -translate-x-1/2 bg-black top-1/2 left-1/2 rounded-2xl md:w-2/3 md:left-1/3">
            <div className="h4">Best Weight Loss Programs for 2022</div>
            <div className="p">
              Auctor eu augue ut lectus arcu. Sit amet tellus cras adipiscing.
            </div>
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 z-0 w-3/4   h-[1000px]  bg-light-blue-600 top-1/2"></div>
          <div className="absolute w-2/3 mt-16 text-white -translate-x-1/2 left-1/2 p">
            {/* right-0 w-4/5 mt-8 -translate-x-5 h4 */}
            <div>1. 安全的美食</div>
            <div>2. 專業的訓練</div>
            <div>3. 高級又平價的食材</div>
            <div>4. 豐富有趣的內容</div>
          </div>
        </div>
        <div className="w-4/5 m-auto h-96 "></div>
        <div className="relative z-50 w-2/3 m-auto mb-10 bg-orange-700 h-1/4 rounded-2xl">
          <img
            className="absolute object-cover w-full h-full -translate-x-1/4 z-70 rounded-2xl -translate-y-1/4"
            src={"/images/product/green.jpg"}
            alt=""
          />
          <div className="absolute right-0 w-3/4 translate-y-1/2 bg-white translate-x-1/4 bottom-1/2 h-3/4 rounded-2xl">
            <CourseContent swipe={swipe} lessons={lessons} />
          </div>
        </div>
        <CourseSwiper lessons={lessons} setSwipe={setSwipe} />
      </div>
    </>
  );
};
{
}
export default CourseMain;
{
}
