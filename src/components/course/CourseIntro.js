import React from "react";
import { GiFlour, GiTeacher, GiHand } from "react-icons/gi";

const CourseIntro = () => {
  return (
    <section className="text-gray-700 blog body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -mx-4 -mt-4 -mb-10 sm:-m-4">
          <div className="flex flex-col items-center justify-center max-w-sm p-4 mx-auto mb-6 md:w-1/3 md:mb-0">
            <div data-aos="fade-down">
              <img
                className="w-full h-56 bg-gray-300 bg-center bg-cover rounded-lg shadow-md"
                src={"/images/courseDetail/teacher.jpg"}
              />
            </div>
            <div data-aos="fade-right">
              <div className="p-5 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg h-44 w-70">
                <div className="inline-flex header-content ">
                  <GiTeacher className="p-1 text-4xl border rounded-full border-line" />
                  <div className="flex-1 ml-6 h2 category-title">
                    {" "}
                    專業的老師
                  </div>
                </div>

                <div className="mt-2 text-base text-justify summary-post">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perspiciatis veritatis vel suscipit ex dolore possimus iure.
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center max-w-sm p-4 mx-auto mb-6 md:w-1/3 md:mb-0">
            <div data-aos="fade-down">
              <img
                className="w-full h-56 bg-gray-300 bg-center bg-cover rounded-lg shadow-md"
                src={"/images/courseDetail/white.jpg"}
              />
            </div>
            <div data-aos="fade-up">
              <div className="p-5 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg h-44 w-70">
                <div className="inline-flex header-content ">
                  <GiFlour className="p-1 text-4xl border rounded-full border-line" />
                  <div className="flex-1 ml-6 h2 category-title">
                    高級的食材
                  </div>
                </div>

                <div className="mt-2 text-base text-justify summary-post">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perspiciatis veritatis vel suscipit ex dolore possimus iure.
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center max-w-sm p-4 mx-auto mb-6 md:w-1/3 md:mb-0">
            <div data-aos="fade-left">
              <img
                className="w-full h-56 bg-gray-300 bg-center bg-cover rounded-lg shadow-md"
                src={"/images/courseDetail/learn.jpg"}
              />
            </div>
            <div data-aos="fade-up">
              <div className="p-5 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg h-44 w-70">
                <div className="inline-flex header-content ">
                  <GiHand className="p-1 text-4xl border rounded-full border-line" />
                  <div className="flex-1 ml-6 h2 category-title">
                    手做的樂趣
                  </div>
                </div>

                <div className="mt-2 text-base text-justify summary-post">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perspiciatis veritatis vel suscipit ex dolore possimus iure.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseIntro;
