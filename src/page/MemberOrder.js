import React from "react";
import Member_collection_bar from "../components/memberCollection/Member_collection_bar";
import Member_search_bar from "../components/memberCollection/Member_search_bar";

function MemberOrder() {
  return (
    <>
      <div className="bg-white">
        <div className="mb-4 ">
          <Member_collection_bar />
        </div>
        <div className="mb-6">
          <Member_search_bar />
        </div>
        <div className="pt-2 mx-3 text-right border-b ">
          <h2>訂單 # 123456</h2>
        </div>
        {/* 兩兩一組ㄉdiv */}
        <div className="md:flex">
          {/* DEMO1 */}
          <div className="flex items-center justify-start mx-3 border-b md:w-1/2">
            <div className="overflow-hidden scale-75">
              <img
                className="scale-105 "
                src={`${process.env.PUBLIC_URL}/images/memberCollectionAndOrder/member_order.png`}
                alt=""
              />
            </div>

            <div className="mr-3">
              <p>商品</p>
              <p className="my-2">數量</p>
              <p>價格</p>
            </div>

            <div>
              <p>標哥千層蛋糕</p>
              <p className="my-2">* 1</p>
              <p>800</p>
            </div>
          </div>

          {/* DEMO 2 */}
          <div className="flex items-center justify-start mx-3 border-b md:w-1/2">
            <div className="overflow-hidden scale-75">
              <img
                className="scale-105 "
                src={`${process.env.PUBLIC_URL}/images/memberCollectionAndOrder/member_order.png`}
                alt=""
              />
            </div>

            <div className="mr-3">
              <p>商品</p>
              <p className="my-2">數量</p>
              <p>價格</p>
            </div>

            <div>
              <p>標哥千層蛋糕</p>
              <p className="my-2">* 1</p>
              <p>800</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MemberOrder;
