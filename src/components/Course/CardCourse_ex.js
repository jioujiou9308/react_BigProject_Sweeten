import React from "react";
import CourseSwiper from "./CourseSwiper";

const CardCourse_ex = () => {
  return (
    <>
      <div className="h-[2000px]">
        <div className="relative z-20 w-4/5 m-auto">
          <img
            className="relative z-20 object-cover w-full max-h-80 rounded-2xl"
            src={"/images/course/hand.jpg"}
            alt=""
          />

          <div className="absolute z-30 text-center text-white -translate-x-1/2 -translate-y-1/2 bg-black md:p-3 md:w-1/2 w-3/7 left-1/2 b-0 rounded-2xl md:left-1/3">
            <div className="h1">Best Weight Loss Programs for 2022</div>
            <div className="p">
              {" "}
              Auctor eu augue ut lectus arcu. Sit amet tellus cras adipiscing.
              Malesuada proin libero nunc consequat interdum. Urna porttitor
              rhoncus dolor purus non enim praesent elementum.
            </div>
          </div>
          <div className="absolute right-0 z-0 w-2/4 h-[1000px] translate-x-1/4 bg-light-blue-600 top-1/2"></div>
          <div className="absolute right-0 w-4/5 mt-8 text-right text-white -translate-x-5 h4">
            <div>Vivamus arcu felis bibendum</div>
            <div>Habitant morbi tristique senectus</div>
            <div>Sapien eget mi proin sed libero</div>
            <div>Et ultrices neque ornare aenean</div>
          </div>
        </div>
        <div className="w-4/5 m-auto h-96 "></div>
        <div className="relative z-50 w-2/3 m-auto bg-orange-700 h-1/4 rounded-2xl ">
          <img
            className="absolute object-cover w-full h-full -translate-x-1/4 z-70 rounded-2xl -translate-y-1/4"
            src={"/images/product/green.jpg"}
            alt=""
          />
          <div className="absolute right-0 w-3/4 translate-y-1/2 bg-white translate-x-1/4 bottom-1/2 h-3/4 rounded-2xl">
            <div className="flex flex-col justify-around h-full p-7">
              <div className="p-2 h1">課程:檸檬塔蛋糕</div>
              <div className="p-3 h4">
                Ac odio tempor orci dapibus ultrices in iaculis. Diam vel quam
                elementum pulvinar etiam non quam. Est ante in nibh mauris. Nisi
                quis eleifend quam adipiscing vitae proin sagittis.
              </div>
              <a
                className="self-start p-3 ml-1 text-center text-black bg-yellow-300 border rounded-2xl"
                href="/"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
        <CourseSwiper className="w-2/3" />
      </div>
    </>
  );
};
{
}
export default CardCourse_ex;
