import React from "react";

const CourseContent = (props) => {
  const { lessons, swipe } = props;
  console.log(swipe);
  let a = swipe;
  //   console.log(lessons);
  return (
    <>
      <div className="flex flex-col justify-around h-full p-7">
        {/* <div className="p-2 h1">課程:{lessons.de}</div> */}
        <div className="p-3 h4">{lessons[a].name}</div>
        <div className="p-3 h4">{lessons[a].description}</div>
        <a
          className="self-start p-3 ml-1 text-center text-black bg-yellow-300 border rounded-2xl"
          href="/"
        >
          Read More
        </a>
      </div>
    </>
  );
};

export default CourseContent;
