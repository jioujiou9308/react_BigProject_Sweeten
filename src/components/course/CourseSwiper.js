import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./SwiperStyles.css";

import { Pagination, Navigation } from "swiper";

const CourseSwiper = (props) => {
  const { lessons, setSwipe } = props;
  // console.log(lessons);

  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        slidesPerGroup={2}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {/* <SwiperSlide>
          <img src={"/images/course/hand.jpg"} alt="找不到照片" />
        </SwiperSlide> */}
        {lessons ? (
          <>
            {lessons.map((lesson, i) => {
              return (
                <SwiperSlide
                  key={i}
                  onClick={() => {
                    setSwipe(i);
                  }}
                >
                  {lesson.name}
                  <br />
                  {lesson.description}
                </SwiperSlide>
              );
            })}
          </>
        ) : (
          <></>
        )}
      </Swiper>
    </>
  );
};

export default CourseSwiper;
