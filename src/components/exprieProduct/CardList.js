import React from "react";
import Card from "./Card";
import { useState, useEffect } from "react";
import { API_URL } from "../../utils/config";
import axios from "axios";

const CardList = () => {
  //目前在第幾頁
  const [page, setPage] = useState(2);
  //總比數 1,2,3,4,5,6,......,12
  const [lastPage, setLastPage] = useState(1);

  const [expireProuct, setExpireProduct] = useState([]);
  useEffect(() => {
    let getExpireProduct = async () => {
      let response = await axios.get(`${API_URL}/product`, {
        params: {
          page: page,
        },
      });
      setExpireProduct(response.data.data);
      setLastPage(response.data.pagination.totalPage);
      // console.log(response.data.pagination.totalPage);
      // console.log(response.data);
    };
    getExpireProduct();
  }, []);
  return (
    <section className="bg-white">
      <div className="flex items-center justify-between text-sm tracking-widest uppercase md:px-3">
        <h3 className="w-full p-1 border-b-2 border-line p">
          即期良品 | 限時特賣
        </h3>
        {/* <p className="text-gray-500 dark:text-gray-300">Items</p>
        <div className="flex items-center">
          <p className="text-gray-500 dark:text-gray-300">Sort</p>
          <select className="font-medium text-gray-700 bg-transparent dark:text-gray-500 focus:outline-none">
            <option value="#">Recommended</option>
            <option value="#">Size</option>
            <option value="#">Price</option>
          </select>
        </div> */}
      </div>
      <div className="container px-6 py-8 mx-auto">
        {/* ---------------------------- */}
        <div className="flex flex-wrap justify-around">123</div>
      </div>
      <button class="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ...">
        Save Changes
      </button>
    </section>
  );
};

export default CardList;
