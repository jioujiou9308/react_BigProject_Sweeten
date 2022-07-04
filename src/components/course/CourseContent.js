import React from "react";

const CourseContent = (props) => {
  const { lessons, swipe, toggle } = props;
  let a = swipe;
  const image = [
    {
      image1: "/images/courseDetail/lesson1/lesson1.jpg",
      image2: "/images/courseDetail/lesson1/lesson2.jpg",
      image3: "/images/courseDetail/lesson1/lesson3.jpg",
    },
    {
      image1: "/images/courseDetail/lesson2/cookie1.jpg",
      image2: "/images/courseDetail/lesson2/cookie2.jpg",
      image3: "/images/courseDetail/lesson2/cookie3.jpg",
    },
    {
      image1: "/images/courseDetail/lesson3/tar1.jpg",
      image2: "/images/courseDetail/lesson3/tar2.jpg",
      image3: "/images/courseDetail/lesson3/tar3.jpg",
    },
    {
      image1: "/images/courseDetail/lesson4/cake1.jpg",
      image2: "/images/courseDetail/lesson4/cake2.jpg",
      image3: "/images/courseDetail/lesson4/cake3.jpg",
    },
  ];
  // console.log(image[0].image1);
  return (
    <>
      <div className="h-full mb-5 lg:flex">
        <div className="relative w-full lg:-translate-x-5 ">
          <div className="h-0 lg:w-4/6 lg:h-full lg:ml-auto lg:mr-4">
            <img src={image[a].image1} className="object-cover h-full" />
          </div>
          <div className="absolute h-0 lg:z-20 lg:w-1/2 lg:h-2/3 lg:top-1/2 lg:-translate-y-1/2 lg:left-12">
            <div className="absolute top-0 w-full h-full translate-x-3 translate-y-3 bg-white border border-line"></div>

            <img
              src={image[a].image2}
              className="relative object-cover w-full h-full"
            />
          </div>
          {/* <div className=" absolute lg:z-10 bg-grey-50 sm:h-80 lg:w-1/2 lg:h-[410px] lg:top-1/2 lg:-translate-y-1/2 lg:left-12 lg:translate-x-4"></div> */}
        </div>
        <div className="w-full max-w-md min-w-0 mx-auto mt-16 break-words bg-white border border-black xl:max-w-xl">
          <div className="mx-4 -mt-6 -translate-y-16 ">
            <img className="w-auto rounded-lg" src={image[a].image3} />
          </div>
          <div className="px-10 pb-10 -mt-5">
            <div className="h1">{lessons[a].name}</div>

            <p className="mt-4 mb-4 opcacity-60 p">{lessons[a].description}</p>
            <div className="inline-block mt-2 mr-2">
              <button
                type="button"
                className="focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-gradient-to-r from-green-400 to-green-600 transform hover:scale-110"
                onClick={toggle}
              >
                詳細資訊
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseContent;
