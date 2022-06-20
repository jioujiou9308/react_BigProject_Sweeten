import React from "react";
import OneCardProduct from "./OneCardProduct";

const CardProduct = () => {
  return (
    <>
    
      <section className="bg-white dark:bg-gray-900">
      
      <div className="justify-between hidden pt-5 md:flex px-9">
        <p className="px-5 py-1 text-white p bg-dark">蛋糕</p>
        <p className="px-5 py-1 text-white p bg-dark">餅乾</p>
        <p className="px-5 py-1 text-white p bg-dark">蛋塔</p>
        <p className="px-5 py-1 text-white p bg-dark">禮盒</p>
        <p className="px-5 py-1 text-white p bg-dark">冰品</p>
      </div>
        <div className="container px-6 py-8 mx-auto">
          <div className="flex items-center justify-between px-3 text-sm tracking-widest uppercase">
            <p className="text-gray-500 dark:text-gray-300">6 Items</p>
            <div className="flex items-center">
              <p className="text-gray-500 dark:text-gray-300">Sort</p>
              <select className="font-medium text-gray-700 bg-transparent dark:text-gray-500 focus:outline-none">
                <option value="#">Recommended</option>
                <option value="#">Size</option>
                <option value="#">Price</option>
              </select>
            </div>
          </div>
          {/* ---------------------------- */}
          <div className="flex flex-wrap">
            <OneCardProduct />
            <OneCardProduct />
            <OneCardProduct />
            <OneCardProduct />
            <OneCardProduct />
            <OneCardProduct />
            <OneCardProduct />
          </div>
        </div>
      </section>
    </>
  );
};

export default CardProduct;
