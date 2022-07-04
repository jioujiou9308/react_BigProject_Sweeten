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
  const [fav, setFav] = useFavoriteState();
  const [currentUser] = useUserState();
  console.log(products.length, "product count");
  //抓所有商品(沒有分頁)
  useEffect(() => {}, []);

  // init products
  useEffect(() => {
    axios
      .get(API_URL + "/product/all")
      .then(({ data }) => {
        setProducts(data.data);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <>
      <div className=" md:flex">
        <MenuTag setProducts={setProducts} products={products} />
        {/* filter section */}
        <Filter />
        {/* card list  */}
        <div className="flex flex-wrap ">
          <CardProduct />
        </div>
      </div>
      <div class="fixed top-1/3 right-0 bg-secondary px-4 py-10 rounded-l-lg">
        <button className="text-2xl text-white">
          <AiOutlineShoppingCart />
        </button>
      </div>
    </>
  );
};

export default Product;
