import axios from "axios";
import React from "react";
import { AiOutlineMessage, AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../../utils/config";
import { useProductState, useUserState } from "../../utils/redux/hooks-redux";

const OnceCarkProduct = (props) => {
  const { id, name, price, fav } = props;
  const [product, serProduct] = useProductState();
  const navigate = useNavigate();
  const [currentUser] = useUserState();

  const favSwitchHander = async () => {
    if (fav.findIndex((item) => item.product_id === id) > -1) {
      //delete
      await axios.delete(
        `${API_URL}/user/favorite_product/${currentUser.id}?product_id=${id}`
      );
    } else {
      //post
      await axios.post(`${API_URL}/user/favorite_product`, {
        user_id: currentUser.id,
        product_id: id,
      });
    }
  };
  return (
    <>
      <div className=" mb-6 mx-1 xl:w-[13rem]">
        <div className="flex flex-col items-center justify-center mr-1 ">
          <img
            className="object-cover w-full rounded-sm h-[15rem]"
            src="/images/course/hand.jpg"
            alt="T-Shirt"
            onClick={() => {
              navigate(`/main/product/${id}`);
            }}
          />
          <div className="flex items-center justify-end w-full mt-2">
            <h4 className="w-full text-lg font-medium dark:text-gray-200">
              {name}
            </h4>
            <div className="mr-2 text-blue-500 p">${price}</div>
            <div className="flex items-center ">
              <AiOutlineMessage className="icon-sm" />
              {/* <AiOutlineShoppingCart className="icon" /> */}
              {fav.findIndex((item) => item.product_id === id) > -1 ? (
                <AiFillHeart
                  className="text-secondary icon-sm"
                  onClick={favSwitchHander}
                />
              ) : (
                <AiOutlineHeart className="icon-sm" onClick={favSwitchHander} />
              )}
            </div>
          </div>

          <button
            className="flex items-center justify-center w-full px-2 py-2 mt-4 text-white rounded-sm opacity-100 hover:opacity-80 bg-secondary focus:outline-none "
            onClick={() => {
              serProduct([...product, "click"]);
            }}
          >
            <span className="mx-1 bg-secondary">加入購物車</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default OnceCarkProduct;
