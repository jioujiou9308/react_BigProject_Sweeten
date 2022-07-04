import axios from "axios";
import { React, useEffect, useState } from "react";
import { AiOutlineMessage, AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../../utils/config";
import {
  useCartState,
  useFavoriteState,
  useUserState,
} from "../../utils/redux/hooks-redux";

const OnceCarkProduct = ({ product }) => {
  const navigate = useNavigate();
  const [favProduct, setFavProduct] = useFavoriteState();
  const [currentUser] = useUserState();
  const [cart, setCart] = useCartState();
  console.log("最愛商品", favProduct);
  console.log("所有商品", product);

  const favSwitchHander = async () => {
    if (favProduct.findIndex((item) => item.product_id === product.id) > -1) {
      //delete
      await axios.delete(
        `${API_URL}/user/favorite_product/${currentUser.id}?product_id=${product.id}`
      );
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
      // 抓所有最愛ㄉ商品(沒有分頁)
      axios
        .get(API_URL + `/user/favorite_product/all_data/${currentUser.id}`)
        .then(({ data }) => {
          setFavProduct(data);
        })
        .catch((e) => console.log(e));
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
              navigate(`/main/product/${product.id}`);
            }}
          />
          <div className="flex items-center justify-end w-full mt-2">
            <h4 className="w-full text-lg font-medium dark:text-gray-200">
              {product.name}
            </h4>
            <div className="mr-2 text-blue-500 p">${product.price}</div>
            <div className="flex items-center ">
              <AiOutlineMessage className="icon-sm" />

              {favProduct.findIndex((item) => item.product_id === product.id) >
              -1 ? (
                <AiFillHeart
                  className="icon-sm text-secondary"
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
