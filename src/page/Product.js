import React from "react";
import CardProduct from "../components/product/CardProduct";
import Filter from "../components/product/Filter";

import { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../utils/config";
import { AiOutlineShoppingCart } from "react-icons/ai";

import MenuTag from "../components/menuTag/MenuTag";
import {
  useFavoriteState,
  useProductState,
  useUserState,
} from "../utils/redux/hooks-redux";

const Product = () => {
  const [products, setProducts] = useProductState();
  const [currentUser] = useUserState();
  const [favProduct, setFavProduct] = useFavoriteState();

  console.log(products.length, "product count");
  useEffect(() => {
    //抓所有商品(沒有分頁)
    axios
      .get(API_URL + "/product/all")
      .then(({ data }) => {
        setProducts(data.data);
      })
      .catch((e) => console.log(e));
    //抓所有最愛ㄉ商品(沒有分頁)
    axios
      .get(API_URL + `/user/favorite_product/all_data/${currentUser.id}`)
      .then(({ data }) => {
        setFavProduct(data);
      })
      .catch((e) => console.log(e));
  }, []);

  // console.log("最愛商品", favProduct);
  return (
    <>
      <div className=" md:flex">
        <MenuTag />
        {/* filter section */}
        <Filter />
        {/* card list  */}
        <div className="flex flex-wrap ">
          <CardProduct />
        </div>
      </div>
</>)}
export default Product