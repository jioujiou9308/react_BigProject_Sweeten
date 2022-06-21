import React from "react";
import {
  AiOutlineMessage,
  AiOutlineShoppingCart,
  AiOutlineHeart,
} from "react-icons/ai";
//1
const ProductCard = (props) => {
  const { id, name, price, img } = props;
  return (
    <>
      <div className="p-3 mb-2 md:w-1/3">
        <div className="flex flex-col items-center justify-center mr-1 ">
          <img
            className="object-cover w-full rounded-none h-54"
            src={img}
            alt="T-Shirt"
          />
          <h4 className="mt-2 text-lg font-medium text-gray-700 dark:text-gray-200">
            {name}
          </h4>
          <div className="flex justify-around w-full">
            <div className="text-blue-500 ">${price}</div>
            <div className="flex items-center">
              <AiOutlineMessage />
              <AiOutlineShoppingCart />
              <AiOutlineHeart />
            </div>
          </div>

          <button className="flex items-center justify-center w-full px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform rounded-none bg-dark hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
            <span className="mx-1">Add to cart</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
