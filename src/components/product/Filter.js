import React from "react";
import { AiFillFilter } from "react-icons/ai";
import { Fragment, useState } from "react";

function Filter() {
  const [open, setOpen] = useState(false);

  const categoryHandler = () => {
    setOpen(!open);
  };
  return (
    <>
<<<<<<< HEAD
      <div className="hidden md:block md:pr-5 md:border-r rounded-sm min-w-[15rem] lg:w-1/4 h-max border-line">
=======
      <div className="hidden md:pr-5 md:border-r md:block rounded-sm min-w-[15rem] lg:w-1/4 h-max border-line">
>>>>>>> 11
        {/* filter&clear filter */}
        <div className="flex items-center p-1 border-b-2 border-line">
          <p className="pr-2 p">篩選 </p>
          <AiFillFilter />
        </div>

        <div>
          {/* 各類選項 */}
          <div className="grid grid-cols-1 gap-4 mt-4 border-b-2 border-line">
            <select className="w-full px-4 py-3 text-sm bg-gray-100 border-transparent rounded-none focus:border-gray-500 focus:bg-white focus:ring-0">
              <option value="">價格範圍</option>
              <option value="for-rent ">100以下</option>
              <option value="for-sale">100~300</option>
              <option value="for-sale">300~500</option>
              <option value="for-sale">500以上</option>
            </select>

            <select className="w-full px-4 py-3 text-sm bg-gray-100 border-transparent rounded-none focus:border-gray-500 focus:bg-white focus:ring-0">
              <option value="">熱門程度</option>
              <option value="fully-furnished">本月最熱門</option>
              <option value="partially-furnished">本季最熱門</option>
            </select>

            <select className="w-full px-4 py-3 text-sm bg-gray-100 border-transparent rounded-none md:hidden focus:border-gray-500 focus:bg-white focus:ring-0">
              <option value="">分類</option>
              <option value="fully-furnished">蛋糕</option>
              <option value="partially-furnished">餅乾</option>
              <option value="not-furnished">蛋塔</option>
              <option value="not-furnished">禮盒</option>
              <option value="not-furnished">冰品</option>
            </select>

            <select className="hidden w-full px-4 py-3 text-sm bg-gray-100 border-transparent rounded-none md:block focus:border-gray-500 focus:bg-white focus:ring-0">
              <option value="">口味</option>
              <option value="1000">巧克力</option>
              <option value="2000">草莓</option>
              <option value="3000">芋頭</option>
            </select>

            <select className="hidden w-full px-4 py-3 text-sm bg-gray-100 border-transparent rounded-none md:block focus:border-gray-500 focus:bg-white focus:ring-0">
              <option value="">上架時間</option>
              <option value="200">最新到最舊</option>
              <option value="400">最舊到最新</option>
            </select>
          </div>
        </div>

        <div className="flex-wrap justify-between hidden pt-5 md:flex">
          <p className="px-3 py-1 mb-2 text-white p bg-dark">蛋糕</p>
          <p className="px-3 py-1 mb-2 text-white p bg-dark">餅乾</p>
          <p className="px-3 py-1 mb-2 text-white p bg-dark">蛋塔</p>
          <p className="px-3 py-1 mb-2 text-white p bg-dark">禮盒</p>
          <p className="px-3 py-1 mb-2 text-white p bg-dark">冰品</p>
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
          {open == true ? (
            <div
              className="grid grid-cols-1 gap-4 mt-4 "
              data-aos="fade-down"
              data-aos-easing="ease-in-out"
              data-aos-duration="500"
            >
              <select className="w-full px-4 py-3 text-sm bg-gray-100 border-transparent rounded-none focus:border-gray-500 focus:bg-white focus:ring-0">
                <option value="">價格範圍</option>
                <option value="for-rent ">100以下</option>
                <option value="for-sale">100~300</option>
                <option value="for-sale">300~500</option>
                <option value="for-sale">500以上</option>
              </select>

              <select className="w-full px-4 py-3 text-sm bg-gray-100 border-transparent rounded-none focus:border-gray-500 focus:bg-white focus:ring-0">
                <option value="">熱門程度</option>
                <option value="fully-furnished">本月最熱門</option>
                <option value="partially-furnished">本季最熱門</option>
              </select>

              <select className="w-full px-4 py-3 text-sm bg-gray-100 border-transparent rounded-none md:hidden focus:border-gray-500 focus:bg-white focus:ring-0">
                <option value="">分類</option>
                <option value="fully-furnished">蛋糕</option>
                <option value="partially-furnished">餅乾</option>
                <option value="not-furnished">蛋塔</option>
                <option value="not-furnished">禮盒</option>
                <option value="not-furnished">冰品</option>
              </select>

              <select className="hidden w-full px-4 py-3 text-sm bg-gray-100 border-transparent rounded-none md:block focus:border-gray-500 focus:bg-white focus:ring-0">
                <option value="">口味</option>
                <option value="1000">巧克力</option>
                <option value="2000">草莓</option>
                <option value="3000">芋頭</option>
              </select>

              <select className="hidden w-full px-4 py-3 text-sm bg-gray-100 border-transparent rounded-none md:block focus:border-gray-500 focus:bg-white focus:ring-0">
                <option value="">上架時間</option>
                <option value="200">最新到最舊</option>
                <option value="400">最舊到最新</option>
              </select>
            </div>
          ) : (
            <></>
          )}
        </div>

        <div className="flex-wrap justify-around hidden pt-5 md:flex">
          {/* <Button variant="outlined" color="brown" size="sm">
            蛋糕
          </Button>{" "}
          <Button variant="outlined" color="brown" size="sm">
            蛋糕
          </Button>{" "}
          <Button variant="outlined" color="brown" size="sm">
            蛋糕
          </Button>{" "}
          <Button variant="outlined" color="brown" size="sm">
            蛋糕
          </Button>{" "}
          <Button variant="outlined" color="brown" size="sm">
            蛋糕
          </Button>{" "}
          <Button variant="outlined" color="brown" size="sm">
            蛋糕
          </Button> */}
          {/* <p className="px-3 py-1 mb-2 text-white p bg-dark">餅乾</p>
          <p className="px-3 py-1 mb-2 text-white p bg-dark">蛋塔</p>
          <p className="px-3 py-1 mb-2 text-white p bg-dark">禮盒</p>
          <p className="px-3 py-1 mb-2 text-white p bg-dark">冰品</p> */}
        </div>
      </div>
    </>
  );
}

export default Filter;
