import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "../page/About";
import Course from "../page/Course";
import CourseDetail from "../page/CourseDetail";
import Member from "../page/Member";
import Product from "../page/Product";
import Test from "../page/Test";
import Aside from "./Aside";

const Main = () => {
  return (
    <main className="container flex flex-wrap justify-around py-12 mx-auto">
      <Aside />
      <div className="w-full md:w-3/4 ">
        <Routes>
          <Route path="/product" element={<Product />} />
          <Route path="/test" element={<Test />} />
          <Route path="/member" element={<Member />} />
          <Route path="/course" element={<Course />} />
          <Route path="/courseDetail" element={<CourseDetail />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </main>
  );
};

export default Main;
