import React from "react";
import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    name: "馬卡龍蛋糕",
    price: 400,
    img: "/images/course/hand.jpg",
  },
  {
    id: 2,
    name: "龍蛋糕",
    price: 450,
    img: "/images/course/hand.jpg",
  },
  {
    id: 3,
    name: "卡龍蛋糕",
    price: 780,
    img: "/images/course/hand.jpg",
  },
  {
    id: 4,
    name: "馬龍蛋糕",
    price: 300,
    img: "/images/course/hand.jpg",
  },
];

const ProductList = () => {
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
            {products.map((product, i) => {
              const { id, name, price, img } = product;
              return (
                <ProductCard id={id} name={name} price={price} img={img} />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductList;
