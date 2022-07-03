import React from "react";
import CardProduct from "../components/product/CardProduct";
import Filter from "../components/product/Filter";

import { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../utils/config";
import { motion } from "framer-motion";
import { AiOutlineShoppingCart } from "react-icons/ai";
// import { useState } from "react";

import MenuTag from "../components/menuTag/MenuTag";
import { useFavoriteState, useUserState } from "../utils/redux/hooks-redux";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [fav, setFav] = useFavoriteState();
  console.log(products.length);
  const [currentUser] = useUserState();

  //前端分頁
  //一頁顯示多少筆
  const perPage = 12;
  //總共多少頁
  const [totalPage, setTotalPage] = useState(1);
  //目前頁面
  const [currentPage, setCurrentPage] = useState(1);
  //第一個商品索引值
  const [firstIndex, setfirstIndex] = useState(0);
  //最後一個商品索引值
  const [lastIndex, setLastIndex] = useState(0);

  //抓有加入最愛ㄉ商品
  let getFav = async () => {
    //1=user_id
    let response = await axios.get(
      API_URL + `/user/favorite_product/all_data/${currentUser.id}`
    );
    setFav(response.data);
    console.log("有加入最愛ㄉ商品", response.data);
    console.log(currentUser);
  };
  //抓所有商品(沒有分頁)
  useEffect(() => {
    let getProducts = async () => {
      //API_URL+"/product?page=1"
      let res = await axios.get(API_URL + "/product/all");
      const data = res.data.data;
      setProducts(data);
      //set頁數
      setfirstIndex((currentPage - 1) * perPage);
      setLastIndex(currentPage * perPage - 1);
      setTotalPage(Math.ceil(data.length / perPage));
      console.log("currentpage=", currentPage, "totalpage=", totalPage);
    };
    getProducts();
    getFav();
  }, [currentPage]);
  //後端抓分頁
  // const getPage = () => {
  //   let pages = [];
  //   for (let i = 1; i <= lastPage; i++) {
  //     pages.push(<Pagination i={i} page={page} setPage={setPage} />);
  //   }
  //   return pages;
  // };

  return (
    <>
      <div className=" md:flex">
        <MenuTag setProducts={setProducts} products={products} />
        {/* filter section */}
        <Filter />
        {/* card list  */}
        <div className="flex flex-wrap ">
          <CardProduct
            products={products}
            fav={fav}
            getFav={getFav}
            totalPage={totalPage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            firstIndex={firstIndex}
            lastIndex={lastIndex}
          />
        </div>
      </div>
      <ul className="flex items-center justify-center">
        {/* <li
          className="mr-4"
          onClick={() => {
            page > 1 && setPage(page - 1);
          }}
        >
          上一頁
        </li>
        {/* {getPage()}{" "} */}
        {/* <li
          className="ml-4"
          onClick={() => {
            page < lastPage && setPage(page + 1);
          }}
        >
          下一頁
        </li>{" "}
        */}
      </ul>
      <div class="fixed top-1/3 right-0 bg-secondary px-4 py-10 rounded-l-lg">
        <button className="text-2xl text-white">
          <AiOutlineShoppingCart />
        </button>
      </div>
    </>
  );
};

export default Product;
