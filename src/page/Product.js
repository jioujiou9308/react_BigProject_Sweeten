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
useEffect(() => {
  let getProducts = async () => {
    let response = await axios.get(
      API_URL+"/product"
    );
    setProducts(response.data.data);
    console.log(response.data.data)
  };
  getProducts();
  
}, []);


  return (
    <>
      <div className=" md:flex">
        <MenuTag />
        {/* filter section */}
        <Filter />
        {/* card list  */}
        <div className="flex flex-wrap ">
          <CardProduct products={products}/>
        </div>
      </div>
      <Pagination />
    </>
  );
};

export default Product;
