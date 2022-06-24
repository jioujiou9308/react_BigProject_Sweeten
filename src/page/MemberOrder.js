import React, { useState } from "react";

import MemberSearchBar from "../components/memberCollection/MemberSearchBar";
import MemberOrderBar from "../components/memberOrder/MemberOrderBar";
import NotPaid from "../components/memberOrder/NotPaid";
import NotDelivered from "../components/memberOrder/NotDelivered";
import OrderItems from "../components/memberOrder/OrderItems";
import NotReceived from "../components/memberOrder/NotReceived";
import Completed from "../components/memberOrder/Completed";

function MemberOrder() {
  const step = ["全部", "待付款", "待出貨", "待收貨", "完成"]
  const [barStep, setBarStep] = useState(1)
  // 假資料
  const products = [
    {
      id: 1,
      name: "標哥千層蛋糕",
      img: `${process.env.PUBLIC_URL}/images/memberCollectionAndOrder/member_order1.png`,
      count: 4,
      price: 500,
    },
    {
      id: 2,
      name: "蜂蜜蛋糕",
      img: `${process.env.PUBLIC_URL}/images/memberCollectionAndOrder/member_order2.png`,
      count: 5,
      price: 400,
    },
    {
      id: 3,
      name: "大麻蛋糕",
      img: `${process.env.PUBLIC_URL}/images/memberCollectionAndOrder/member_order3.png`,
      count: 2,
      price: 750,
    },
  ];



  return (
    <>
      <div className="bg-white">
        <div className="mb-6">
          <MemberOrderBar setBarStep={setBarStep} step={step}/>
        </div>
        <div className="mb-6">
          <MemberSearchBar />
        </div>
        <div className="pt-2 mx-5 text-left border-b h2">
          <h2>我的訂單</h2>
        </div>

        <div className="mb-10">
          {products.map((product, i) => {
            const { id, name, img, count, price } = product;
            return (
              <>
                <div className="mt-10 shadow-md md:flex">
                  <OrderItems
                    id={id}
                    name={name}
                    img={img}
                    count={count}
                    price={price}
                  />
                  <NotPaid />
                  <NotDelivered />
                  <NotReceived />
                  <Completed />
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default MemberOrder;
