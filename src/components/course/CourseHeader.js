import React from "react";
import background from "./course_demo_lower.png";
// {"/images/product/green.jpg"}
const CourseHeader = () => {
  return (
    <div class="relative">
      <img
        class="z-0 absolute w-full h-full object-cover"
        src={"/images/courseDetial/course_demo_lower.png"}
        alt=""
      />
      {/* <div
        class=" z-0 bg-cover bg-no-repeat h-full w-full items-center justify-center flex flex-col  absolute top-0"
        style={{ backgroundImage: `url(${background})` }}
      ></div> */}
      <div class="relative items-center justify-center w-full p-8 flex flex-col z-1">
        <div class="bg-gray-400 items-center justify-center md:w-1/2 w-full shadow-md p-5 h-auto rounded-lg blur-3 bg-opacity-50 flex flex-col col-span-12">
          <h4 class="w-48 border-t-4 border-solid border-red-500 h-20"></h4>
          <h4 class="text-orange-300    text-2xl">Some CTA description</h4>
          <h2 class="text-gray-300   text-5xl text-center mt-2 mb-20">
            Just do it!
          </h2>
        </div>
      </div>
    </div>
  );
};

export default CourseHeader;
