import React from "react";
import { GiFlour } from "react-icons/gi";

const CourseIntro2 = () => {
  return (
    <>
      <div className="flex flex-wrap mb-10 border-2 h-96">
        <div className="w-full p-5 md:w-1/3">
          <div className="flex w-full h-1/2">
            <GiFlour className="w-20 h-20 " />
            <div className=" h2">高級的食材</div>
          </div>
          <div className="flex justify-end h-1/2">
            <GiFlour className="w-20 h-20 " />
            <div className="h2">手做的樂趣</div>
          </div>
        </div>
        {/* 中間的圖片--------------------- -------*/}
        <div className="w-0 md:w-1/3 md:m-auto">
          <div className="w-0 h-0 overflow-hidden border-2 md:rounded-full none md:w-80 md:h-80">
            <img
              className="object-cover h-full"
              src={"/images/courseDetail/white.jpg"}
              alt=""
            />
          </div>
        </div>
        {/* -------------------------------------- */}
        <div className="w-full p-5 md:w-1/3">
          <div className="flex h-1/2">
            <GiFlour className="w-20 h-20 " />
            <div className="h2">高級的食材</div>
          </div>
          <div className="flex justify-end h-1/2">
            <GiFlour className="w-20 h-20 " />
            <div className="h2">手做的樂趣</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseIntro2;
