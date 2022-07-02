import React from "react";
import OneCardProduct from "./OneCardProduct";
import { useProductState } from "../../utils/redux/hooks-redux";

const CardProduct = (props) => {
  const { products, fav, getFav } = props;
  // const [product, setProduct] = useProductState();

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
            {products.map((product, i) => {
              const { id, name, price } = product;
              return (
                <OneCardProduct id={id} name={name} price={price} fav={fav} getFav={getFav} />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default CardProduct;
