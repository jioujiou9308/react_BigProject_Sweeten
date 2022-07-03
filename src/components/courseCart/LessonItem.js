import React from "react";
import {
  AiOutlinePlus,
  AiOutlineMinus,
  AiOutlineHeart,
  AiOutlineDelete,
} from "react-icons/ai";

const LessonItem = (props) => {
  const { lessonOrder } = props;
  return (
    <>
      {/* items */}
      <div className="flex flex-col justify-start items-start bg-gray-50 px-4 py-4 md:py-6 md:p-6 lg:p-8 w-full basis-2/3">
        <h3 className="text-xl xl:text-2xl font-semibold leading-6 text-gray-800 md:mt-6 ">
          {lessonOrder.course}
        </h3>
        {/* <p className="text-lg md:text-xl font-semibold leading-6 xl:leading-5 text-gray-800">
          Customer’s Cart
        </p> */}
        <div className="border-b border-gray-200 pb-5 md:pb-0 mt-4 flex flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full ">
          <div className="w-40 h-full pb-5 sm:w-1/2 md:w-2/5 lg-w-full mx-auto">
            <img
              className="h-full sm:mx-auto m-auto object-cover"
              src={`${process.env.PUBLIC_URL}/images/home/toProduct.jpg`}
              alt=""
            />
          </div>
          <div className="md:flex-row flex-col flex justify-between items-start w-full  space-y-4 md:space-y-0">
            <div className="w-full flex flex-col justify-between items-start space-y-8">
              {/* <h3 className="text-xl xl:text-2xl font-semibold leading-6 text-gray-800">
                {lessonOrder.course}
              </h3> */}
              <div className="flex justify-start items-start flex-col">
                <p className="text-sm leading-none text-gray-800">
                  <span className="text-gray-300 text-base font-semibold">
                    人數
                  </span>
                </p>
                <div className="flex flex-col sm:flex-row gap-2">
                  <div>
                    <label htmlFor="adult">大人：</label>
                    <input
                      id="adult"
                      type="number"
                      class="border w-1/2 rounded"
                      min="0"
                    />{" "}
                    人,
                  </div>
                  <div>
                    <label htmlFor="kid">小孩：</label>
                    <input
                      id="kid"
                      type="number"
                      class="border w-1/2 rounded"
                      min="0"
                    />{" "}
                    人
                  </div>
                </div>
                <p className="text-sm leading-none text-gray-800 mt-2">
                  <span className="text-gray-300 text-base font-semibold">
                    時段
                  </span>
                </p>
                <select className="border rounded">
                  <option>2022/07/03(日)</option>
                  <option>2022/07/04(一)</option>
                  <option>2022/07/05(二)</option>
                  <option>2022/07/06(三)</option>
                </select>
              </div>
              <div className="flex items-center justify-between w-full">
                <div className="flex">
                  <div className="flex items-center mr-5">
                    <AiOutlineHeart className="icon" />
                    收藏
                  </div>
                  <div className="flex items-center">
                    <AiOutlineDelete className="icon" />
                    刪除
                  </div>
                </div>
                <p className="text-base font-black ">{lessonOrder.price}</p>
              </div>
            </div>
            {/* 原來 */}
            {/* <div className="flex justify-end space-x-8 items-start w-full">
              <p className="text-base xl:text-lg leading-6">
                $36.00{" "}
                <span className="text-red-300 line-through"> $45.00</span>
              </p>
              <p className="text-base xl:text-lg font-semibold leading-6 text-gray-800">
                $36.00
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default LessonItem;
