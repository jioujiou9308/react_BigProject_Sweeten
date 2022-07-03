import { React, useEffect, useState } from "react";
import OneCardProduct from "./OneCardProduct";
import { useProductState } from "../../utils/redux/hooks-redux";
import Pagination from "./Pagination";

const CardProduct = (props) => {
  const { products, fav, getFav } = props;
  // const [product, setProduct] = useProductState();
  // console.log(products);

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

  //進入頁面時set頁碼
  useEffect(() => {
    setfirstIndex((currentPage - 1) * perPage);
    setLastIndex(currentPage * perPage - 1);
    setTotalPage(Math.ceil(products.length / perPage));
  }, [currentPage]);

  const getPage = () => {
    let page = [];
    for (let i = 1; i <= totalPage; i++) {
      page.push(
        <Pagination
          i={i}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      );
    }
    return page;
  };

  return (
    <>
      <section className="bg-white">
        <div className="flex items-center justify-between text-sm tracking-widest uppercase md:px-3">
          <h3 className="w-full p-1 border-b-2 border-line p">精選商品</h3>
          {/* <p className="text-gray-500 dark:text-gray-300">
            {products.length} Items
          </p>
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
          <div className="flex flex-wrap justify-around">
            {/* ---------------- FIXME Cannot read properties of undefined (第一次渲染) --------------- */}
            {products
              .filter((v, i) => {
                return i >= firstIndex && i <= lastIndex;
              })
              ?.map((product, i) => {
                const { id, name, price } = product;
                return (
                  <OneCardProduct
                    id={id}
                    name={name}
                    price={price}
                    fav={fav}
                    getFav={getFav}
                  />
                );
              })}
          </div>

          <ul className="flex items-center justify-center">
            <li
              className="mr-4"
              onClick={() => {
                currentPage > 1 && setCurrentPage(currentPage - 1);
              }}
            >
              上一頁
            </li>
            {getPage()}
            <li
              className="ml-4"
              onClick={() => {
                currentPage < totalPage && setCurrentPage(currentPage + 1);
              }}
            >
              下一頁
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default CardProduct;