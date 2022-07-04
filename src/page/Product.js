import React from "react";
import CardProduct from "../components/product/CardProduct";
import Filter from "../components/product/Filter";

import { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../utils/config";
<<<<<<< HEAD
import { AiOutlineShoppingCart } from "react-icons/ai";
=======
import { motion } from "framer-motion";
import { AiOutlineShoppingCart } from "react-icons/ai";
// import { useState } from "react";
>>>>>>> 6148f9e98f26b4ed20a7e222f00ac78972290028

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
<<<<<<< HEAD
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
=======
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
  const totalPage = products / perPage;

  //抓分頁
  // const getPage = () => {
  //   let pages = [];
  //   for (let i = 1; i <= lastPage; i++) {
  //     pages.push(<Pagination i={i} page={page} setPage={setPage} />);
  //   }
  //   return pages;
  // };
>>>>>>> 6148f9e98f26b4ed20a7e222f00ac78972290028

  // console.log("最愛商品", favProduct);
  return (
    <>
      <div className=" md:flex">
<<<<<<< HEAD
        <MenuTag />
=======
        <MenuTag setProducts={setProducts} products={products} />
>>>>>>> 6148f9e98f26b4ed20a7e222f00ac78972290028
        {/* filter section */}
        <Filter />
        {/* card list  */}
        <div className="flex flex-wrap ">
          <CardProduct />
        </div>
      </div>
<<<<<<< HEAD

      <div class="fixed top-1/3 right-0 bg-secondary px-4 py-10 rounded-l-lg">
=======
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
        </li>
      </ul>
      <div className="fixed right-0 px-4 py-10 rounded-l-lg top-1/3 bg-secondary">
>>>>>>> 6148f9e98f26b4ed20a7e222f00ac78972290028
        <button className="text-2xl text-white">
          <AiOutlineShoppingCart />
        </button>
      </div>
    </>
  );
};

export default Product;
