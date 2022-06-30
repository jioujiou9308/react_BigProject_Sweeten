import React from "react";
import CardProduct from "../components/product/CardProduct";
import Filter from "../components/product/Filter";
import Pagination from "../components/product/Pagination";
import { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../utils/config";
import { motion } from "framer-motion";
// import { useState } from "react";

import MenuTag from "../components/menuTag/MenuTag";
// import TabBar from "../components/product/Tabs";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [fav, setFav] = useState([]);
  //分頁
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);

  useEffect(() => {
    //抓所有商品
    let getProducts = async () => {
      //API_URL+"/product?page=1"
      let response = await axios.get(API_URL + "/product", {
        params: {
          page: page,
        },
      });
      setProducts(response.data.data);
      //set頁數
      setLastPage(response.data.pagination.totalPage);
      // console.log(response.data.data);
    };
    getProducts();

    //抓有加入最愛ㄉ商品
    let getFav = async () => {
      let response = await axios(API_URL + "/user/favorite_product/all_data/1");
      setFav(response.data);
      // console.log(response.data);
    };
    getFav();
  }, [page]);

  //抓分頁
  const getPage = () => {
    let pages = [];
    for (let i = 1; i <= lastPage; i++) {
      pages.push(<Pagination i={i} page={page} setPage={setPage} />);
    }
    return pages;
  };

  return (
    <>
      <div className=" md:flex">
        <MenuTag />
        {/* filter section */}
        <Filter />
        {/* card list  */}
        <div className="flex flex-wrap ">
          <CardProduct products={products} fav={fav} />
        </div>
      </div>
      <ul className="flex items-center justify-center">
        <li
          className="mr-4"
          onClick={() => {
            page > 1 && setPage(page - 1);
          }}
        >
          上一頁
        </li>
        {getPage()}{" "}
        <li
          className="ml-4"
          onClick={() => {
            page < lastPage && setPage(page + 1);
          }}
        >
          下一頁
        </li>
      </ul>
    </>
  );
};

export default Product;
