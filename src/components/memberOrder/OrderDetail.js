import React from "react";

function OrderDetail({order}) {
  return (
    <>
      {order.map((v,i)=>{
      return (
         <>
      <div
        className="flex justify-between p-2 border border-line"
        data-aos="fade-down"
        data-aos-easing="ease-in-out"
        data-aos-duration="500"
      >
        {/* 商品價格數量 */}
        <div className="justify-between ">
          <div className="flex items-center justify-start">
            <div className="mr-2 overflow-hidden">
              <img
                className="scale-105 "
                src={`${process.env.PUBLIC_URL}/images/memberCollectionAndOrder/member_order1.png`}
                alt=""
              />
            </div>

            <div className="mx-3">
              <p>商品</p>
              <p className="my-2">價格</p>
              <p>數量</p>
            </div>

            <div>
              <p>{v.name}</p>
              <p className="my-2">{v.price}</p>
              <p>*{}</p>
            </div>
          </div>
        </div>
          {/* TODO:還要抓數量 */}
        <h3 className="self-end h3">小計: {v.price}</h3>
      </div>
     
     
    </>
      )
    })}
   
    </>
    
  );
}

export default OrderDetail;
