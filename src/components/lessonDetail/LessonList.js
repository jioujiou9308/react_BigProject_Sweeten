import React, { Fragment } from "react";
import LessonItem from "./LessonItem";
import LessonSummary from "./LessonSummary";
import { useCourseState } from "../../utils/redux/hooks-redux";

const LessonList = () => {
  const [courseCart, setCourseCart] = useCourseState();

  return (
    <div className="flex flex-col items-stretch w-full mt-10 space-y-4 xl:flex-row jusitfy-center xl:space-x-8 md:space-y-6 xl:space-y-0">
      <div className="flex flex-col items-start justify-center w-full space-y-4 xl:flex-row md:space-y-6 xl:space-y-8">
        <div className="flex flex-col">
          <LessonItem courseCart={courseCart} />
        </div>
        <LessonSummary courseCart={courseCart} />
      </div>
    </div>
  );
};

export default LessonList;
