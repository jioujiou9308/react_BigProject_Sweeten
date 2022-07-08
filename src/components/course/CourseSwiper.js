import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./SwiperStyles.css";

import { Pagination, Navigation } from "swiper";

const CourseSwiper = (props) => {
  const { lessons, setSwipe, lessonImage, runLoad } = props;
  // console.log(lessons);

  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {lessons ? (
          <>
            {lessonImage.map((image, i) => {
              return (
                <SwiperSlide
                  key={i}
                  onClick={() => {
                    runLoad(async () => {
                      await setSwipe(i);
                    }, 1000);
                  }}
                >
                  <div className="w-full ">
                    <div className="w-full ">
                      <img
                        src={image.image3}
                        alt=""
                        className="cursor-pointer"
                      />
                    </div>
                    <div className="w-1/2 h-10 pt-1 m-auto font-semibold text-center rounded-md shadow-md md:w-1/6 -translate-y-7 bg-light h2">
                      {image.name}
                    </div>
                  </div>
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
