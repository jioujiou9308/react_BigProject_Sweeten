import React, { Fragment } from "react";
import LessonItem from "./LessonItem";
import LessonSummary from "./LessonSummary";
import { useCourseState } from "../../utils/redux/hooks-redux";

const lessonOrders = [
  {
    id: "12345",
    course: "巧克力蛋糕",
    price: "800",
    date: "2022/9/9",
    photo: "",
  },
  // {
  //   id: "12345",
  //   course: "巧克力蛋糕",
  //   price: "800",
  //   date: "2022/9/9",
  //   photo: "",
  // },
];

const LessonList = () => {
  const [courseDetail, setCourseDetail] = useCourseState();

  return (
    <div className="px-4 py-14 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
      <div className="flex flex-col justify-start space-y-2 item-start ">
        <h1 className="text-3xl font-semibold leading-7 text-gray-800 lg:text-3xl lg:leading-9">
          課程預約資訊
        </h1>
        {/* <p className="text-base font-medium leading-6 text-gray-600">
          21st Mart 2021 at 10:34 PM
        </p> */}
      </div>
      <div className="flex flex-col items-stretch w-full mt-10 space-y-4 xl:flex-row jusitfy-center xl:space-x-8 md:space-y-6 xl:space-y-0">
        <div className="flex flex-col items-start justify-center w-full space-y-4 xl:flex-row md:space-y-6 xl:space-y-8">
          <div className="flex flex-col">
            {lessonOrders.map((lessonOrder) => {
              return (
                <Fragment key={lessonOrder.id}>
                  <LessonItem
                    lessonOrder={lessonOrder}
                    courseDetail={courseDetail}
                  />
                </Fragment>
              );
            })}
          </div>
          <LessonSummary courseDetail={courseDetail} />
        </div>
      </div>
    </div>
  );
};

export default LessonList;
