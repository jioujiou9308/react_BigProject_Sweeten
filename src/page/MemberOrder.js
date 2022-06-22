import React from "react";

import MemberSearchBar from "../components/memberCollection/MemberSearchBar";
import MemberOrderBar from "../components/memberOrder/MemberOrderBar";
import OrderDetail from "../components/memberOrder/OrderDetail";


function MemberOrder() {
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
        <div className="mb-4 ">
          <MemberOrderBar />
        </div>
        <div className="mb-6">
          <MemberSearchBar />
        </div>
        <div className="pt-2 mx-5 text-right border-b h2">
          <h2>訂單 # 123456</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          {products.map((product, i) => {
            const { id, name, img, count, price } = product;
            return (
              <>
                <div className="flex items-center justify-start p-5 border-b ">
                  <div className="mr-2 overflow-hidden">
                    <img
                      className="scale-105 "
                      src={img}
                      alt=""
                    />
                  </div>

                  <div className="mx-3">
                    <p>商品</p>
                    <p className="my-2">數量</p>
                    <p>價格</p>
                  </div>

                  <div>
                    <p>{name}</p>
                    <p className="my-2">* {count}</p>
                    <p>{price}</p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <OrderDetail/>
      </div>
    </>
  );
}

export default MemberOrder;
