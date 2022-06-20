import React from "react";
import {
  AiOutlineMessage,
  AiOutlineShoppingCart,
  AiOutlineHeart,
} from "react-icons/ai";

const OnceCarkProduct = () => {
  return (
    <>
      <div className="p-3 mb-2 md:w-1/2 lg:w-1/3 xl:w-1/4">
        <div className="flex flex-col items-center justify-center mr-1 ">
          <img
            className="object-cover w-full rounded-md h-72 xl:h-80"
            src="/images/course/hand.jpg"
            alt="T-Shirt"
          />
          <h4 className="mt-2 text-lg font-medium text-gray-700 dark:text-gray-200">
            馬卡龍蛋糕
          </h4>
          <div className="flex justify-around w-full">
            <div className="text-blue-500 ">$500</div>
            <div className="flex items-center">
              <AiOutlineMessage />
              <AiOutlineShoppingCart />
              <AiOutlineHeart />
            </div>
          </div>

          <button className="flex items-center justify-center w-full px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform rounded-md bg-dark hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
            <span className="mx-1">Add to cart</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default OnceCarkProduct;
