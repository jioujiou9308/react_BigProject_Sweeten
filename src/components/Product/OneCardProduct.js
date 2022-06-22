import React from "react";
import { AiOutlineMessage, AiOutlineHeart } from "react-icons/ai";
import { useProductState } from "../../utils/redux/hooks-redux";

const OnceCarkProduct = (props) => {
  const { id, name, price, img } = props;
  const [product, serProduct] = useProductState();
  return (
    <>
      <div className="p-3 mb-2 md:w-1/3">
        <div className="flex flex-col items-center justify-center mr-1 ">
          <img
            className="object-cover w-full rounded-sm h-[15rem]"
            src={img}
            alt="T-Shirt"
          />
          <div className="flex items-center justify-end w-full mt-2">
            <h4 className="w-full text-lg font-medium dark:text-gray-200">
              {name}
            </h4>
            <div className="mr-2 text-blue-500 p">${price}</div>
            <div className="flex items-center ">
              <AiOutlineMessage className="icon-sm" />
              {/* <AiOutlineShoppingCart className="icon" /> */}
              <AiOutlineHeart className="icon-sm" />
            </div>
          </div>

          <button
            className="flex items-center justify-center w-full px-2 py-2 mt-4 text-white rounded-sm opacity-100 hover:opacity-80 bg-dark focus:outline-none "
            onClick={() => {
              serProduct([...product, "click"]);
            }}
          >
            <span className="mx-1">加入購物車</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default OnceCarkProduct;
