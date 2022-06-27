import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./SwiperStyles.css";

import { Pagination, Navigation } from "swiper";

const CourseSwiper = (props) => {
  const { lessons, setSwipe } = props;
  console.log(lessons);

  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={"/images/course/hand.jpg"} alt="" />
        </SwiperSlide>
        {lessons.map((lesson) => {
          return (
            <SwiperSlide
              onClick={() => {
                setSwipe(lesson.id);
              }}
            >
              {lesson.name}
              <br />
              {lesson.description}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default CourseSwiper;
