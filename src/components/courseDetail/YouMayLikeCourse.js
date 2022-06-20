import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../styles.css";

// import required modules
import { Pagination, Navigation } from "swiper";

//假資料們
const courses = [
  {
    id: 1,
    img: process.env.PUBLIC_URL + "/images/courseDetial/course_demo_lower.png",
  },
  {
    id: 2,
    img: process.env.PUBLIC_URL + "/images/courseDetial/course_demo_lower.png",
  },
  {
    id: 3,
    img: process.env.PUBLIC_URL + "/images/courseDetial/course_demo_lower.png",
  },
  {
    id: 4,
    img: process.env.PUBLIC_URL + "/images/courseDetial/course_demo_lower.png",
  },
];

//TODO 會被aside擋住，無法滿版
function YouMayLikeCourse() {
  return (
    <>
      <div className="flex justify-center pb-10 bg-sub">
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

        {courses.map((course, i)=>{
          const {id, img} = course;
          return (
            <>
              <SwiperSlide>
            <div className="scale-75 bg-sub">
              <img
                src={
                  img
                }
              ></img>
            </div>
          </SwiperSlide>
            </>
          )
        })}
          
         
        </Swiper>
      </div>
    </>
  );
}

export default YouMayLikeCourse;
