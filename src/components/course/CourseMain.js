import React, { useState, useEffect } from "react";
import axios from "axios";
import CourseSwiper from "./CourseSwiper";
import { API_URL } from "../../utils/config";
import CourseContent from "./CourseContent";
import CourseHeader from "./CourseHeader";
// import CourseIntro from "./CourseIntro"; // 還有用到嗎
import useLoading from "../../utils/hooks/useLoading";

import CourseDetail from "./CourseDetail";
// import LessonList from "../courseDetail/LessonList";

const image = [
  {
    image1: "/images/courseDetail/lesson1/lesson1.jpg",
    image2: "/images/courseDetail/lesson1/chef.jpg",
    image3: "/images/courseDetail/lesson1/lesson3.jpg",
    name: "手工馬卡龍",
    teacher: "授課教師:Ms.陳",
    teacherFullName: "Julianna Chen",
  },
  {
    image1: "/images/courseDetail/lesson2/cookie1.jpg",
    image2: "/images/courseDetail/lesson2/chef.jpg",
    image3: "/images/courseDetail/lesson2/cookie3.jpg",
    name: "手工餅乾",
    teacher: "授課教師:Ms.黃",
    teacherFullName: "Makayla Huang",
  },
  {
    image1: "/images/courseDetail/lesson3/tar1.jpg",
    image2: "/images/courseDetail/lesson3/chef.jpg",
    image3: "/images/courseDetail/lesson3/tar3.jpg",
    name: "新鮮水果塔",
    teacher: "授課教師:Ms.廖",
    teacherFullName: "Rebecca Liao",
  },
  {
    image1: "/images/courseDetail/lesson4/cake1.jpg",
    image2: "/images/courseDetail/lesson4/chef.jpg",
    image3: "/images/courseDetail/lesson4/cake3.jpg",
    name: "新鮮生乳捲",
    teacher: "授課教師:Ms.趙",
    teacherFullName: "Journey Chao",
  },
];
const CourseMain = () => {
  const [WhileLoading, runLoad] = useLoading(); // loading
  const [swipe, setSwipe] = useState(0);
  const [lessonImage, setLessonImage] = useState(image);
  const [lessons, setLessons] = useState([true]);
  // console.log(lessons);
  const [detailContent, setDetailContent] = useState([false]);
  const toggle = () => setDetailContent(!detailContent);
  //勞出使用者資料;
  //照片

  useEffect(() => {
    // 撈出各頁產品資料
    let getLesson = async () => {
      let response = await axios.get(`${API_URL}/lesson`);
      setLessons(response.data);

      // console.log(response.data);
      // console.log(response.data[0]);
    };
    // runLoad(async () => {
    // await getLesson();
    // }, 1000);
    getLesson();
  }, []);
  // console.log(lessons);
  return (
    <>
      {/* <WhileLoading done={<h1>done</h1>} onLoad={<h1>loading</h1>} /> */}
      {/* <button onClick={() => {}}>按我</button> */}
      <div className="mb-10">
        <CourseHeader />
      </div>

      <CourseContent
        swipe={swipe}
        lessons={lessons}
        setDetailContent={setDetailContent}
        toggle={toggle}
        lessonImage={lessonImage}
        WhileLoading={WhileLoading}
      />
      {detailContent === true ? (
        <div data-aos="fade-up" data-aos-duration="1800">
          <CourseDetail
            lessons={lessons}
            swipe={swipe}
            detailContent={detailContent}
            lessonImage={lessonImage}
          />
        </div>
      ) : (
        <></>
      )}
      <div className="mb-20 ">
        <CourseSwiper
          lessons={lessons}
          setSwipe={setSwipe}
          lessonImage={lessonImage}
          swipe={swipe}
          runLoad={runLoad}
        />
      </div>
    </>
  );
};

export default CourseMain;
