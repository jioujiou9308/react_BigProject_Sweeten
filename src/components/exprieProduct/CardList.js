import React from "react";
import Card from "./Card";

const expireProducts = [
  {
    id: 1,
    name: "馬卡龍蛋糕",
    price: 400,
    expirePrice: 300,
    restItem: 25,
    img: "/images/course/hand.jpg",
  },
  {
    id: 2,
    name: "檸檬塔",
    price: 500,
    expirePrice: 350,
    restItem: 50,
    img: "/images/course/hand.jpg",
  },
  {
    id: 3,
    name: "千層派",
    price: 780,
    expirePrice: 500,
    restItem: 7,
    img: "/images/course/hand.jpg",
  },
  {
    id: 4,
    name: "瑪麗蓮夢露",
    price: 200,
    expirePrice: 100,
    restItem: 19,
    img: "/images/course/hand.jpg",
  },
];

const CardList = () => {
  return (
    <section className="bg-white">
      <div className="flex items-center justify-between text-sm tracking-widest uppercase md:px-3">
        <h3 className="w-full p-1 border-b-2 border-line p">
          即期良品 | 限時特賣
        </h3>
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
          {expireProducts.map((product, i) => {
            const { id, name, price, expirePrice, restItem, img } = product;
            return <Card key={id} product={product} />;
          })}
        </div>
      </div>
      <button class="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ...">
        Save Changes
      </button>
    </section>
  );
};

export default CardList;
