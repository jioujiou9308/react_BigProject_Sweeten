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
  const [page, setPage]=useState(1)
  const [lastPage, setLastPage] = useState(1)

  useEffect(() => {

    //抓所有商品
    let getProducts = async () => {
      let response = await axios.get(API_URL + "/product");
      setProducts(response.data.data);
      console.log(response.data.data);
      
    };
    getProducts();
    
    //抓有加入最愛ㄉ商品
    let getFav = async () => {
      let response = await axios(API_URL + "/user/favorite_product/all_data/1");
      setFav(response.data);
      console.log(response.data);
    };
    getFav();

    //抓分頁
  }, []);

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
      <Pagination />
    </>
  );
};

export default Product;
