import React from "react";
// {"/images/product/green.jpg"}
const CourseHeader = () => {
  return (
    <div className="relative flex h-52 md:h-64">
      <img
        className="z-0 object-cover w-full opacity-60"
        src={"/images/courseDetail/white.jpg"}
        alt="找不到照片"
      />
      <div className="absolute bottom-0 text-pink-500 -translate-x-1/2 -translate-y-20 h2 md:h1 left-1/2 whitespace-nowrap">
        經典美味 X 純手工製作
      </div>
    </div>
  );
};

export default CourseHeader;
