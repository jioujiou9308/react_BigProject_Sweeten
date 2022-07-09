import axios from "axios";
import { React, useEffect, useState, editState } from "react";
import { AiOutlineMessage, AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../../utils/config";
import { toast } from "react-toastify";

import {
  useCartState,
  useFavoriteState,
  useProductState,
  useUserState,
} from "../../utils/redux/hooks-redux";

const OnceCarkProduct = ({ product }) => {
  const navigate = useNavigate();
  const [favProduct, setFavProduct] = useFavoriteState();
  const [currentUser] = useUserState();
  const [cart, setCart] = useCartState();
  // console.log("最愛商品", favProduct);
  // console.log("所有商品", product);

  // 加入最愛
  const favSwitchHander = async () => {
    if (favProduct.findIndex((item) => item.product_id === product.id) > -1) {
      //delete
      await axios.delete(
        `${API_URL}/user/favorite_product/${currentUser.id}?product_id=${product.id}`
      );
      toast.info("已從最愛移除");
      // 抓所有最愛ㄉ商品(沒有分頁)
      axios
        .get(API_URL + `/user/favorite_product/all_data/${currentUser.id}`)
        .then(({ data }) => {
          setFavProduct(data);
        })
        .catch((e) => console.log(e));
    } else {
      //   //post
      await axios.post(`${API_URL}/user/favorite_product`, {
        user_id: currentUser.id,
        product_id: product.id,
      });
      toast.success("已加入最愛");
      // 抓所有最愛ㄉ商品(沒有分頁)
      axios
        .get(API_URL + `/user/favorite_product/all_data/${currentUser.id}`)
        .then(({ data }) => {
          setFavProduct(data);
        })
        .catch((e) => console.log(e));
    }
  };

  //加入購物車
  const addCartHandler = () => {
    if (currentUser.id != 0) {
      let productIndex = cart[1].findIndex(function (data, index) {
        return data.name === product.name;
      });
      // console.log('productInx',productIndex);
      if (productIndex > -1) {
        let newCount = {
          ...product,
          count: cart[1][productIndex].count + 1,
        };
        let cartList = [...cart[1]];
        cartList[productIndex] = newCount;
        let newData = [cart[0], cartList];
        setCart(newData);
      } else {
        let newCount = { ...product, count: 1 };
        let cartList = [...cart[1], newCount];
        let newData = [cart[0], cartList];
        setCart(newData);
      }
      toast.success("已加入購物車");
    } else {
      toast.info("請登入會員");
    }
  };
  console.log(product);

  return (
    <>
      <div className=" mb-6 mx-1 xl:w-[13rem]">
        <div className="flex flex-col items-center justify-center mr-1 ">
          <img
            className="object-cover w-full cursor-pointer rounded-sm h-[15rem]"
            src={`http://localhost:8001/public/product/${
              product.id || product.product_id
            }.jpg`}
            alt="T-Shirt"
            onClick={() => {
              navigate(`/main/product/${product.id}`);
            }}
          />
          <div className="flex items-center justify-end w-full mt-2">
            <h4 className="w-full text-lg font-medium dark:text-gray-200">
              {product.name}
            </h4>
            <div className="mr-1 text-blue-500 p">${product.price}</div>
            <div className="flex items-center ">
              <AiOutlineMessage
                className="cursor-pointer icon-sm"
                onClick={() => {
                  navigate(`/main/product/${product.id}`);
                }}
              />

              {favProduct?.findIndex((item) => item.product_id === product.id) >
              -1 ? (
                <AiFillHeart
                  className="cursor-pointer icon-sm text-secondary"
                  onClick={() => {
                    currentUser.id != 0
                      ? favSwitchHander()
                      : toast.info("請登入會員");
                  }}
                />
              ) : (
                <AiOutlineHeart
                  className="cursor-pointer icon-sm"
                  onClick={() => {
                    currentUser.id != 0
                      ? favSwitchHander()
                      : toast.info("請登入會員");
                  }}
                />
              )}
            </div>
          </div>

          <button
            className="flex items-center justify-center w-full px-2 py-2 mt-4 text-white rounded-sm opacity-100 hover:opacity-80 bg-secondary focus:outline-none "
            onClick={addCartHandler}
          >
            <span className="mx-1 bg-secondary">加入購物車</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default OnceCarkProduct;
