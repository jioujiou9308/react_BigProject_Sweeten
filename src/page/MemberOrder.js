import React from "react";
import Member_collection_bar from "../components/memberCollection/Member_collection_bar";
import Member_search_bar from "../components/memberCollection/Member_search_bar";

function MemberOrder() {
  // 假資料
  const products = [
    {
      id: 1,
      name: "標哥千層蛋糕",
      count: 4,
      price: 500,
    },
    {
      id: 2,
      name: "蜂蜜蛋糕",
      count: 5,
      price: 400,
    },
    {
      id: 3,
      name: "大麻蛋糕",
      count: 2,
      price: 750,
    },
  ];
  return (
    <>
      <div className="bg-white">
        <div className="mb-4 ">
          <Member_collection_bar />
        </div>
        <div className="mb-6">
          <Member_search_bar />
        </div>
        <div className="pt-2 mx-5 text-right border-b ">
          <h2>訂單 # 123456</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          {products.map((product, i) => {
            const { id, name, count, price } = product;
            return (
              <>
                <div className="flex items-center justify-start p-5 border-b ">
                  <div className="mr-2 overflow-hidden">
                    <img
                      className="scale-105 "
                      src={`${process.env.PUBLIC_URL}/images/memberCollectionAndOrder/member_order.png`}
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
      </div>
    </>
  );
}

export default MemberOrder;
