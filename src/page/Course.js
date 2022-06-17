import React from "react";
import CardCourse from "../components/course/CardCourse";

const Course = () => {
  return (
    <>
      <CardCourse />
      <div className="border-b-2 border-b-primary"></div>
      <CardCourse />
      <div className="border-b-2 border-b-primary"></div>
      <CardCourse />
    </>
  );
};

export default Course;
