import React from "react";
import Card from "../components/course/Card";
import Pagination from "../components/course/Pagination";

const Course = () => {
  return (
    <>
      {/* card list  */}
      <div className="flex flex-wrap ">
        <Card />
        <Card />
        <Card />

        {/* <img className=' m-w-[280px] max-h-[280px]' src={require('./IMAGE/green.jpg')} alt="Background" />
        <img className='w-32 h-32' src={require('./IMAGE/green.jpg')} alt="Background" />
        <img className='w-32 h-32' src={require('./IMAGE/green.jpg')} alt="Background" />
        <img className='w-32 h-32' src={require('./IMAGE/green.jpg')} alt="Background" /> */}
      </div>
      {/*  */}

      <Pagination />
    </>
  );
};

export default Course;
