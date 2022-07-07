import React from "react";

function OrderDetail({ order }) {
  // console.log(order)
  return (
    <>
      {order.map((v, i) => {
        return (
          <>
            <div
              className="flex justify-between w-full p-2 mb-2 border border-line"
              // data-aos="fade-down"
              // data-aos-easing="ease-in-out"
              // data-aos-duration="500"
            >
              {/* 商品價格數量 */}
              <div className="justify-between ">
                <div className="flex items-center justify-start">
                  <div className="mr-2 overflow-hidden w-[70px] md:w-[120px]">
                    <img
                      className="object-contain "
                      src={`http://localhost:8001/public/product/${v.product_id}.jpg`}
                      alt="product"
                    />
                  </div>

                  <div className="mx-3 md:p">
                    <p>商品</p>
                    <p className="my-2 ">價格</p>
                    <p>數量</p>
                  </div>

                  <div className="mx-3 md:p">
                    <p>{v.name}</p>
                    <p className="my-2 ">{v.price}</p>
                    <p>* {v.memo}</p>
                  </div>
                </div>
              </div>
              {/* 抓數量 */}
              <h3 className="self-end hidden h3 md:block">
                小計: {parseInt(v.price) * parseInt(v.memo)}
              </h3>
            </div>
          </>
        );
      })}
    </>
  );
}

export default OrderDetail;
