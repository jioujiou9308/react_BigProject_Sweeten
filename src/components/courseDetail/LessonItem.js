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
      <div className="flex flex-col items-start justify-start w-full px-4 py-4 bg-gray-50 md:py-6 md:p-6 lg:p-8">
        {/* <p className="text-lg font-semibold leading-6 text-gray-800 md:text-xl xl:leading-5">
          Customer’s Cart
        </p> */}
        <div className="flex flex-col items-start justify-start w-full px-5 pb-5 mt-4 border-b border-gray-200 md:pb-0 md:flex-row md:space-x-6 xl:space-x-8">
          <div className="w-40 h-56 pb-5 mx-auto sm:w-1/2 md:w-3/5 lg-w-full">
            <img
              className="object-cover w-full h-full"
              src={`${process.env.PUBLIC_URL}/images/home/toProduct.jpg`}
              alt=""
            />
          </div>
          <div className="flex flex-col items-start justify-between w-full h-56 space-y-4 md:flex-row md:space-y-0">
            <div className="flex flex-col items-start w-full space-y-10">
              <h3 className="text-xl font-semibold leading-6 text-gray-800 xl:text-2xl ">
                課程：{lessonOrder.course}
              </h3>
              <div>
                <p>課程說明</p>
                <p>
                  產品為新鮮製做的蛋糕，如有不能吃的成分請事先告知。三歲前的小朋友請避開巧克力等含咖啡因或含酒精的成分
                </p>
              </div>
              {/* <h3 className="text-xl font-semibold leading-6 text-gray-800 xl:text-2xl">
                {lessonOrder.course}
              </h3> */}
              {/* <div className="flex flex-col items-start justify-start">
                <p className="text-sm leading-none text-gray-800">
                  <span className="text-base font-semibold text-gray-300">
                    人數
                  </span>
                </p>
                <div className="flex flex-col gap-2 sm:flex-row sm:gap-0">
                  <div className="sm:-mr-8">
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
                <p className="mt-2 text-sm leading-none text-gray-800">
                  <span className="text-base font-semibold text-gray-300">
                    時段
                  </span>
                </p>
                <select className="border rounded">
                  <option>2022/07/03(日)</option>
                  <option>2022/07/04(一)</option>
                  <option>2022/07/05(二)</option>
                  <option>2022/07/06(三)</option>
                </select>
              </div> */}
              <div className="flex items-center justify-between w-full">
                <div className="flex">
                  <div className="flex items-center mr-5">
                    <AiOutlineHeart className="icon" />
                    收藏
                  </div>
                  {/* <div className="flex items-center">
                    <AiOutlineDelete className="icon" />
                    刪除
                  </div> */}
                </div>
                <p className="text-base font-black ">{lessonOrder.price}</p>
              </div>
            </div>
          </div>
        </div>
        {/* 人數時段 */}
        <div className="flex flex-col items-start justify-between w-full p-5 border-b border-gray-200 md:flex-row sm:pr-0">
          {/* 人數 */}
          <div>
            <p className="text-sm leading-none text-gray-800">
              <span className="font-semibold text-gray-300">人數</span>
            </p>
            <div className="flex flex-col gap-2 sm:flex-row sm:gap-0">
              <div className="sm:-mr-8">
                <label htmlFor="adult">大人：</label>
                <input
                  id="adult"
                  type="number"
                  class="border-0 py-2 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-1/2 ease-linear transition-all duration-150"
                  min="0"
                  placeholder="請輸入人數"
                />{" "}
                人,
              </div>
              <div>
                <label htmlFor="kid">小孩：</label>
                <input
                  id="kid"
                  type="number"
                  class="border-0 py-2 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-1/2 ease-linear transition-all duration-150"
                  min="0"
                  placeholder="請輸入人數"
                />{" "}
                人
              </div>
            </div>
          </div>
          {/* 時段 */}
          <div>
            <p className="mt-2 text-sm leading-none text-gray-800 md:mt-0">
              <span className="font-semibold text-gray-300">時段</span>
            </p>
            <select className="w-full py-2 text-sm text-center transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-primary text-blueGray-600 focus:outline-none focus:ring">
              <option>2022/07/03(日)</option>
              <option>2022/07/04(一)</option>
              <option>2022/07/05(二)</option>
              <option>2022/07/06(三)</option>
            </select>
          </div>
          {/* 按鈕 */}
          <div className="flex items-end justify-center w-full py-5 md:flex-row sm:pl-5 sm:justify-end md:w-auto">
            <button className="px-4 py-1 text-white border-2 sm:ml-5 border-warning bg-warning">
              前往付款
            </button>
          </div>
        </div>
        {/* 注意事項 */}
        <div className="flex flex-col items-start justify-start w-full p-5">
          <p className="text-warning">注意事項：</p>
          <p>• 因烘焙材料須提前準備，請先完成線上付款，以便確認材料數量</p>
          <p>• 預定日期 7 日前可免費取消</p>
          <p>• 預定日期前 3 ~ 6 日取消，扣除課程費用 30%</p>
          <p>• 預定日期前 2 日取消，扣除扣除課程費用 40%</p>
          <p>• 預定日期前 1 日取消，扣除扣除課程費用 50%</p>
          <p>• 預定當天未出席者視為放棄，不退費。</p>
        </div>
      </div>
    </>
  );
};

export default LessonItem;
