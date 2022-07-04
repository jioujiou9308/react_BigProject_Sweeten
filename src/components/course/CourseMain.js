import React, { useState, useEffect } from "react";
import axios from "axios";
import CourseSwiper from "./CourseSwiper";
import { API_URL } from "../../utils/config";
import CourseContent from "./CourseContent";
import CourseHeader from "./CourseHeader";
import CourseIntro from "./CourseIntro";
import CourseDetail from "./CourseDetail";
// import LessonList from "../courseDetail/LessonList";

const image = [
  {
    image1: "/images/courseDetail/lesson1/lesson1.jpg",
    image2: "/images/courseDetail/lesson1/lesson2.jpg",
    image3: "/images/courseDetail/lesson1/lesson3.jpg",
  },
  {
    image1: "/images/courseDetail/lesson2/cookie1.jpg",
    image2: "/images/courseDetail/lesson2/cookie2.jpg",
    image3: "/images/courseDetail/lesson2/cookie3.jpg",
  },
  {
    image1: "/images/courseDetail/lesson3/tar1.jpg",
    image2: "/images/courseDetail/lesson3/tar2.jpg",
    image3: "/images/courseDetail/lesson3/tar3.jpg",
  },
  {
    image1: "/images/courseDetail/lesson4/cake1.jpg",
    image2: "/images/courseDetail/lesson4/cake2.jpg",
    image3: "/images/courseDetail/lesson4/cake3.jpg",
  },
];
const CourseMain = () => {
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
    getLesson();
  }, []);
  // console.log(lessons);
  return (
    <>
      <CourseHeader />
      <CourseIntro />
      <div className="mb-10 ">
        <CourseSwiper
          lessons={lessons}
          setSwipe={setSwipe}
          lessonImage={lessonImage}
        />
      </div>
      <CourseContent
        swipe={swipe}
        lessons={lessons}
        setDetailContent={setDetailContent}
        toggle={toggle}
        lessonImage={lessonImage}
      />
      {detailContent === true ? (
        <div data-aos="flip-up">
          <CourseDetail
            lessons={lessons}
            swipe={swipe}
            detailContent={detailContent}
          />
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default CourseMain;
