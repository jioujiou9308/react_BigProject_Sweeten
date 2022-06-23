import React from "react";

import MemberSearchBar from "../components/memberCollection/MemberSearchBar";
import MemberOrderBar from "../components/memberOrder/MemberOrderBar";
import OrderDetail from "../components/memberOrder/OrderDetail";
import OrderItems from "../components/memberOrder/OrderItems";
import { Button } from "@material-tailwind/react";

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
  const date =Date.now();
  return (
    <>
      <div className="bg-white">
        <div className="mb-6">
          <MemberOrderBar />
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
                {/* <div className="flex ">
                <OrderItems
                  id={id}
                  name={name}
                  img={img}
                  count={count}
                  price={price}
                />
                <OrderDetail />
              </div> */}
                <div className="mt-10 shadow-md md:flex">
                  {/* 左欄 */}
                  <div className="px-2 py-5 g-white m md:px-10 md:w-2/3 ">
                    <div>
                      <div>
                        <h4 className="pb-5 h4">
                          訂單編號 # {Math.ceil(Math.random() * 1000000)}
                        </h4>
                      </div>
                      {/* 左欄最外框 */}
                      <div className="flex justify-between p-2 md:border border-line">
                        <div className="">
                          {/* 商品價格數量 */}
                          <div className="flex items-center justify-start">
                            <div className="mr-2 overflow-hidden">
                              <img className="scale-105 " src={img} alt="" />
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
                        </div>
                        {/* 下單時間 */}
                        <div className="self-end hidden pb-2 md:block"><p>下單時間 {date}</p></div>
                      </div>
                      <div className="pt-4 text-center md:text-right">
                      <Button size = "sm"  className="mr-3 text-white rounded-sm bg-warning">訂單詳情</Button>
                      <Button size = "sm" className="text-white rounded-sm bg-warning">聯絡客服</Button>
                      </div>
                    </div>
                  </div>
                  {/* 桿桿 */}
                  <div className="md:my-3 md:border-l-2 border-line"></div>
                  {/* 右欄 */}
                  <div className="relative p-5 bg-white md:w-1/3">
                    <h4 className="pb-5 h4 ">訂單金額</h4>
                    {/* 金額 */}
                    
                      <div className="flex justify-between mt-2 p">
                      <p>金額:</p>
                      <p>{count*price}</p>
                    </div>
                    <div className="flex justify-between p">
                      <p>運費:</p>
                      <p>60</p>
                    </div>
                    <div className="flex justify-between pb-2 border-b border-line p">
                      <p>折扣:</p>
                      <p>-30</p>
                    </div>
                 
                     <h2 className="self-end text-right md:absolute right-5 bottom-5 h2">總計: 2030</h2>
                   
                   
                      
                    
                    
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
