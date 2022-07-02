import React from "react";
import CardProduct from "../components/product/CardProduct";
import Filter from "../components/product/Filter";
import Pagination from "../components/product/Pagination";
import { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../utils/config";
import { motion } from "framer-motion";
import {
  AiOutlineShoppingCart,
} from "react-icons/ai";
// import { useState } from "react";

import MenuTag from "../components/menuTag/MenuTag";
import { useUserState } from "../utils/redux/hooks-redux";
// import TabBar from "../components/product/Tabs";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [fav, setFav] = useState([]);
  //分頁
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const [currentUser] = useUserState();

  //抓有加入最愛ㄉ商品
  let getFav = async () => {
    //1=user_id
    let response = await axios.get(
      API_URL + `/user/favorite_product/all_data/${currentUser.id}`
    );
    setFav(response.data||[]);
    // console.log(response.data);
  };

  //抓所有商品(沒有分頁)
  useEffect(() => {
    let getProducts = async () => {
      //API_URL+"/product?page=1"
      let response = await axios.get(API_URL + "/product/all", {
        params: {
          page: page,
        },
      });
      setProducts(response.data.data);
      // console.log(response.data.data)
      //set頁數
     
    };
    getProducts();

    getFav();
  }, [page]);

  const perPage = 12;
  const totalPage = (products/perPage);

  //抓分頁
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
        <MenuTag setProducts={setProducts} products={products}/>
        {/* filter section */}
        <Filter />
        {/* card list  */}
        <div className="flex flex-wrap ">
          <CardProduct products={products} fav={fav} getFav={getFav} />
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
        <li
          className="ml-4"
          onClick={() => {
            page < lastPage && setPage(page + 1);
          }}
        >
          下一頁
        </li> */}
      </ul>
      <div class="fixed top-1/3 right-0 bg-secondary px-4 py-10 rounded-l-lg">
       <button className="text-2xl text-white"><AiOutlineShoppingCart /></button>
      </div>
    </>
  );
};

export default Product;
