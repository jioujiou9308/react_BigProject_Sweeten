import React from "react";

const CourseContent = (props) => {
  const { lessons, swipe } = props;
  let a = swipe;
  return (
    <>
      <div class=" h-full lg:flex">
        <div class="relative w-full lg:-translate-x-5 ">
          <div class="  h-0 lg:w-4/6 lg:h-full lg:ml-auto lg:mr-4">
            <img
              src={"/images/courseDetial/course_demo_upper.png"}
              className="object-cover h-full"
            />
          </div>
          <div class=" absolute lg:z-20  h-0  lg:w-1/2 lg:h-2/3  lg:top-1/2 lg:-translate-y-1/2 lg:left-12">
            <img
              src={"/images/productDetail/product_demo2_lower.png"}
              className="object-cover w-full h-full"
            />
          </div>
          <div class=" absolute lg:z-10 bg-grey-50 sm:h-80 lg:w-1/2 lg:h-[410px] lg:top-1/2 lg:-translate-y-1/2 lg:left-12 lg:translate-x-4"></div>
        </div>
        <div class=" max-w-md mx-auto xl:max-w-xl min-w-0 break-words bg-white w-full    mt-16 border-black border">
          <div class=" mx-4 -mt-6 -translate-y-16">
            <img class="w-auto rounded-lg" src={"/images/course/hand.jpg"} />
          </div>
          <div class="pb-10 px-10  -mt-5">
            <div class="h1">{lessons[a].name}</div>

            <p class="opcacity-60 mb-4 p mt-4">{lessons[0].description}</p>
            <div class="inline-block mr-2 mt-2">
              <button
                type="button"
                class="focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-gradient-to-r from-green-400 to-green-600 transform hover:scale-110"
              >
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseContent;
