import React from "react";
// {"/images/product/green.jpg"}
const CourseHeader = () => {
  return (
    <div className="relative">
      <img
        className="absolute z-0 object-cover w-full h-full"
        src={"/images/courseDetial/course_demo_lower.png"}
        alt=""
      />
      {/* <div
        className="absolute top-0 z-0 flex flex-col items-center justify-center w-full h-full bg-no-repeat bg-cover "
        style={{ backgroundImage: `url(${background})` }}
      ></div> */}
      <div className="relative flex flex-col items-center justify-center w-full p-8 z-1">
        <div className="flex flex-col items-center justify-center w-full h-auto col-span-12 p-5 bg-gray-400 bg-opacity-50 rounded-lg shadow-md md:w-1/2 blur-3">
          <h4 className="w-48 h-20 border-t-4 border-red-500 border-solid"></h4>
          <h4 className="text-2xl text-orange-300">Some CTA description</h4>
          <h2 className="mt-2 mb-20 text-5xl text-center text-gray-300">
            Just do it!
          </h2>
        </div>
      </div>
    </div>
  );
};

export default CourseHeader;
