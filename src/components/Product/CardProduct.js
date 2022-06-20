import React from "react";
import OneCardProduct from "./OneCardProduct";

const CardProduct = () => {
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-8 mx-auto">
          {/* <div className="flex items-center justify-between text-sm tracking-widest uppercase ">
                <p className="text-gray-500 dark:text-gray-300">6 Items</p>
                <div className="flex items-center">
                  <p className="text-gray-500 dark:text-gray-300">Sort</p>
                  <select className="font-medium text-gray-700 bg-transparent dark:text-gray-500 focus:outline-none">
                    <option value="#">Recommended</option>
                    <option value="#">Size</option>
                    <option value="#">Price</option>
                  </select>
                </div>
              </div> */}
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
