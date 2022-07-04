import React from "react";
import { AiFillFilter } from "react-icons/ai";
import { useState } from "react";
import axios from "axios";
import { API_URL } from "../../utils/config";
import { clearConfigCache } from "prettier";
import { useProductState } from "../../utils/redux/hooks-redux";

function Filter() {
  const [product, setProduct] = useProductState();
  const [open, setOpen] = useState(false);
  //價格範圍選項
  const priceOption = ["600以下", "600~1200", "1200以上"];
  //口味選項
  const flavorOption = ["巧克力", "草莓", "芋頭"];
  //種類選項
  const categoryOption = ["蛋糕", "餅乾", "點心", "冰品"];
  // console.log(product);
  //手機板篩選ㄉ彈跳視窗
  const categoryHandler = () => {
    setOpen(!open);
  };
  //價格filter
  const PriceChangeHandler = async (e) => {
    const res = await axios.get(API_URL + "/product/all");
    const newList = res.data.data;

    switch (e.target.value) {
      case "0":
        const newProduct0 = newList.filter((v) => v.price <= 600);
        // console.log("case0=", newProduct0);
        setProduct(newProduct0);
        break;

      case "1":
        const newProduct1 = newList.filter(
          (v) => v.price >= 600 && v.price <= 1200
        );
        // console.log("case1=", newProduct1);
        setProduct(newProduct1);
        break;

      case "2":
        // console.log(product);
        const newProduct2 = newList.filter((v) => v.price >= 1200);
        // console.log("case2=", newProduct2);
        setProduct(newProduct2);
        break;
      default:
        return;
    }
  };
  //口味filter
  const flavorChangeHandler = () => {};
  //價格排序
  const priceOrderChangeHandler = async (e) => {
    const res = await axios.get(API_URL + "/product/all");
    const newList = res.data.data;

    switch (e.target.value) {
      case "0":
        const newProduct0 = [...newList].sort((a, b) => {
          return b.price - a.price;
        });
        setProduct(newProduct0);
        break;

      case "1":
        const newProduct1 = [...newList].sort((a, b) => {
          return a.price - b.price;
        });
        setProduct(newProduct1);
        break;
      default:
        return;
    }
  };
  //上架時間排序 TODO:印出來是undefined
  const timeOrderChangeHandler = async (e) => {
    const res = await axios.get(API_URL + "/product/all");
    const newList = res.data.data;

    switch (e.target.value) {
      case "0":
        const newProduct0 = [...newList].sort((a, b) => {
          const timeA = new Date(a.create_at).getTime().toString();
          const timeB = new Date(b.create_at).getTime().toString();
          return timeB - timeA;
        });
        setProduct(newProduct0);
        break;

      case "1":
        const newProduct1 = [...newList].sort((a, b) => {
          const timeA = new Date(a.create_at).getTime().toString();
          const timeB = new Date(b.create_at).getTime().toString();
          console.log(new Date(a.create_at));
          return timeA - timeB;
        });
        setProduct(newProduct1);
        break;
      default:
        return;
    }
  };

  return (
    <>
      {/* <div className="hidden md:pr-5 md:border-r md:block rounded-sm min-w-[15rem] lg:w-1/4 h-max border-line"> */}
      <div className="hidden md:block md:pr-5 md:border-r rounded-sm min-w-[15rem] lg:w-1/4 h-max border-line">
        {/* filter&clear filter */}
        <div className="flex items-center p-1 border-b-2 border-line">
          <p className="pr-2 p">篩選 </p>
          <AiFillFilter />
        </div>

        <div>
          {/* 各類選項 */}
          <div className="grid grid-cols-1 gap-4 mt-4 border-b-2 border-line">
            {/* 價格範圍 */}
            <select
              onChange={PriceChangeHandler}
              className="w-full px-4 py-3 text-sm bg-gray-100 border-transparent rounded-none focus:border-gray-500 focus:bg-white focus:ring-0"
            >
              <option>價格範圍</option>
              {priceOption.map((v, i) => {
                return <option value={i}>{v}</option>;
              })}
            </select>

            {/* 口味 */}
            <select
              onChange={flavorChangeHandler}
              className="hidden w-full px-4 py-3 text-sm bg-gray-100 border-transparent rounded-none md:block focus:border-gray-500 focus:bg-white focus:ring-0"
            >
              <option value="">口味</option>
              {flavorOption.map((v, i) => {
                return <option value={i}>{v}</option>;
              })}
            </select>

            {/* 上架時間 */}
            <select
              onChange={timeOrderChangeHandler}
              className="hidden w-full px-4 py-3 text-sm bg-gray-100 border-transparent rounded-none md:block focus:border-gray-500 focus:bg-white focus:ring-0"
            >
              <option value="">上架時間</option>
              <option value="0">最新到最舊</option>
              <option value="1">最舊到最新</option>
            </select>

            {/* 價格排序 */}
            <select
              onChange={priceOrderChangeHandler}
              className="hidden w-full px-4 py-3 text-sm bg-gray-100 border-transparent rounded-none md:block focus:border-gray-500 focus:bg-white focus:ring-0"
            >
              <option value="">價格排序</option>
              <option value="0">由高到低</option>
              <option value="1">由低到高</option>
            </select>
          </div>
        </div>
      </div>

      {/* 手機版 */}
      <div className="w-full px-5 md:hidden">
        <div
          className="flex items-center justify-center border-b border-line"
          onClick={categoryHandler}
        >
          <p className="mr-1 text-center text-dark h3">篩選 </p>
          <AiFillFilter className="icon-sm" />
        </div>
        <div className="overflow-hidden ">
          {open === true ? (
            <div
              className="grid grid-cols-1 gap-4 mt-4 "
              data-aos="fade-down"
              data-aos-easing="ease-in-out"
              data-aos-duration="500"
            >
              <select className="w-full px-4 py-3 text-sm bg-gray-100 border-transparent rounded-none focus:border-gray-500 focus:bg-white focus:ring-0">
                <option value="">價格範圍</option>
                {priceOption.map((v, i) => {
                  return <option value={i}>{v}</option>;
                })}
              </select>

              <select className="hidden w-full px-4 py-3 text-sm bg-gray-100 border-transparent rounded-none md:block focus:border-gray-500 focus:bg-white focus:ring-0">
                <option value="">口味</option>
                {flavorOption.map((v, i) => {
                  return <option value={i}>{v}</option>;
                })}
              </select>

              <select className="hidden w-full px-4 py-3 text-sm bg-gray-100 border-transparent rounded-none md:block focus:border-gray-500 focus:bg-white focus:ring-0">
                <option value="">上架時間</option>
                <option value="0">最新到最舊</option>
                <option value="1">最舊到最新</option>
              </select>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
}

export default Filter;
