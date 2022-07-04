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

function OrderPage() {
  const [productsInOrder, setProductsInOrder] = useCartState();



  return (
    <div className="flex flex-col lg:flex-row" id="cart">
      <OrderList />
      <Summary />
    </div>
  );
}

export default OrderPage;
