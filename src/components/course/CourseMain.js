import React, { useState, useEffect } from "react";
import axios from "axios";
import CourseSwiper from "./CourseSwiper";
import { API_URL } from "../../utils/config";
import CourseContent from "./CourseContent";

import CourseHeader from "./CourseHeader";
import CourseIntro from "./CourseIntro";

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
  //
  return (
    <>
      <CourseHeader />
      <CourseIntro />
      <CourseContent swipe={swipe} lessons={lessons} />

      <div className="-translate-y-15 ">
        <CourseSwiper lessons={lessons} setSwipe={setSwipe} />
      </div>
    </>
  );
};

export default CourseMain;
