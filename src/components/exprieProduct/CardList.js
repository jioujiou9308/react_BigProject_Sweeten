import React from "react";
import Card from "./Card";
import { useState, useEffect } from "react";
import { API_URL } from "../../utils/config";
import axios from "axios";
import Pagination from "./Pangination";
// import { useCartState } from "../../utils/redux/hooks-redux";

const CardList = () => {
  //目前在第幾頁
  const [page, setPage] = useState(1);
  //總比數 1,2,3,4,5,6,......,12
  const [lastPage, setLastPage] = useState(1);
  //設定資料庫抓取的資料
  const [expireProuct, setExpireProduct] = useState([]);
  //新增進購物車的功能
  // const [carData, setCartData] = useCartState([]);
  console.log(expireProuct);
  //從後端抓資料到前端
  console.log();
  useEffect(() => {
    let getExpireProduct = async () => {
      let response = await axios.get(`${API_URL}/expiry/expire_product`, {
        params: {
          page: page,
        },
      });
      setExpireProduct(response.data.data);
      setLastPage(response.data.pagination.totalPage);

      // console.log(response.data.pagination.totalPage);
      // console.log(response.data);

      console.log("如果在第一個useEffect就顯示 lastPage", lastPage);
    };
    getExpireProduct();
  }, [page]);
  //最後page的資料做連結 只要page改變就會重新render頁面的資料

  //-------------------

  //還需要一個useEffect
  //這個是我改變了lastPage後的副作用
  //有任何的運算是需要在設定完之後做
  //就要在後面寫一個useEffect

  // useEffect(() => {
  //   console.log("後面寫useEffect 呈現的lastPage頁碼", lastPage);
  // }, [lastPage]);

  return (
    <section className="bg-white">
      <div className="flex items-center justify-between text-sm tracking-widest uppercase md:px-3">
        <h3 className="w-full p-1 border-b-2 border-line p">
          即期良品 | 限時特賣
        </h3>
      </div>
      <div className="container flex flex-wrap justify-around py-8">
        {/* ---------------------------- */}

        {expireProuct?.map((product) => {
          return (
            <div className="flex flex-wrap justify-around">
              <Card
                key={product.id}
                product={product}

                // setCartData={setCartData}
              />
            </div>
          );
        })}
      </div>
      <Pagination lastPage={lastPage} page={page} setPage={setPage} />
      <div></div>
    </section>
  );
};

export default CardList;
