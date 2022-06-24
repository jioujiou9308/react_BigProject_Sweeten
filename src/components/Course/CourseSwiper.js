import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./SwiperStyles.css";

const CourseSwiper = () => {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 20,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={"/images/product/green.jpg"} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={"/images/product/green.jpg"} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={"/images/product/green.jpg"} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={"/images/product/green.jpg"} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={"/images/product/green.jpg"} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={"/images/product/green.jpg"} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={"/images/product/green.jpg"} />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default CourseSwiper;
