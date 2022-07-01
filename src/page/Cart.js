import OrderList from "../components/cart/OrderList";
import Summary from "../components/cart/Summary";
import { useEffect, useState } from "react";
import { useCartState } from "../utils/redux/hooks-redux";

const products = [
  {
    id: 1,
    name: "咖啡蛋糕",
    size: "8吋",
    flavor: "草莓",
    image: `${process.env.PUBLIC_URL}/images/home/section01_cake1.png`,
    price: 3000,
  },
  {
    id: 2,
    name: "夯蕉蛋糕",
    size: "10吋",
    flavor: "芒果",
    image: `${process.env.PUBLIC_URL}/images/home/section01_cake1.png`,
    price: 2500,
  },
];

// 擴充原本的product屬性，多一個記錄數量屬性(count)
// map語法
const initState = (productArray) => {
  return productArray.map((v) => {
    return { ...v, count: 1 };
  });
};
// for迴圈
// const initState = (productArray) => {
//   const state = []

//   for (let i = 0; i < productArray.length; i++) {
//     state.push({ ...productArray[i], count: 1 })
//   }

//   return state
// }

function OrderPage() {
  const [productsInOrder, setProductsInOrder] = useState(initState(products));
  const [cartState, setCart] = useCartState();
  const totalNumber = () => {
    let result = 0;

    for (let i = 0; i < productsInOrder.length; i++) {
      result += productsInOrder[i].count;
    }

    return result;
  };

  const totalPrice = () => {
    let result = 0;

    for (let i = 0; i < productsInOrder.length; i++) {
      result += productsInOrder[i].count * productsInOrder[i].price;
    }

    return result;
  };

  return (
    <div className="flex flex-col lg:flex-row" id="cart">
      <OrderList
        productsInOrder={productsInOrder}
        setProductsInOrder={setProductsInOrder}
      />
      <Summary totalNumber={totalNumber()} totalPrice={totalPrice()} />
    </div>
  );
}

export default OrderPage;
