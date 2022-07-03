import React, { Fragment } from "react";
import LessonItem from "./LessonItem";
import LessonSummary from "./LessonSummary";

const lessonOrders = [
  {
    id: "12345",
    course: "巧克力蛋糕",
    price: "800",
    date: "2022/9/9",
    photo: "",
  },
  {
    id: "12345",
    course: "巧克力蛋糕",
    price: "800",
    date: "2022/9/9",
    photo: "",
  },
];

const LessonList = () => {
  return (
    <div className="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
      <div className="flex justify-start item-start space-y-2 flex-col ">
        <h1 className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9  text-gray-800">
          課程購物車
        </h1>
        {/* <p className="text-base font-medium leading-6 text-gray-600">
          21st Mart 2021 at 10:34 PM
        </p> */}
      </div>
      <div className="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch  w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
        <div className="flex flex-col xl:flex-row justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
          <div className="flex flex-col">
            {lessonOrders.map((lessonOrder) => {
              return (
                <Fragment key={lessonOrder.id}>
                  <LessonItem lessonOrder={lessonOrder} />
                </Fragment>
              );
            })}
          </div>
          <LessonSummary />
        </div>
      </div>
    </div>
  );
};

export default LessonList;
