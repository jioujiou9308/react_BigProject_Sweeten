import React, { useEffect } from "react";
import { Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
// import OrderDetail from "./OrderDetail";
import axios from "axios";
import { API_URL } from "../../utils/config";
import { useDispatch } from "react-redux";
import { openOrderDetail, openAddComment } from "../../utils/redux/modalSlice";

function OrderItems({ order }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [selectedId, setSelectedId] = useState(false);
  //計算所有商品數量
  const countTotalNum = () => {
    let result = 0;
    for (let i = 0; i < order.length; i++) {
      result += Number(order[i].memo);
    }
    return result;
  };
  //計算總計金額
  const countTotalPrice = () => {
    let result = 0;
    for (let i = 0; i < order.length; i++) {
      result += parseInt(order[i].memo) * parseInt(order[i].price);
    }
    return result;
  };
  // console.log('order',order)

  return (
    <>
      {/* 左欄 */}
      <div className="px-2 py-5 g-white m md:px-10 md:w-2/3 ">
        <div>
          <div>
            <h4 className="pb-5 h4">訂單編號 # {order[0].order_info_id}</h4>
          </div>

          {/* 左欄最外框 */}
          {/* 如果按下訂單詳情第一項商品就消失 */}
          {selectedId == false && (
            <div className="flex justify-between p-2 md:border border-line">
              <div className="">
                {/* 商品價格數量 */}
                <div className="flex items-center justify-start ">
                  <div className="mr-2 overflow-hidden w-[70px]">
                    <img
                      className="object-contain "
                      src={`http://localhost:8001/public/product/${order[0].product_id}.jpg`}
                      alt="product"
                    />
                  </div>

                  <div className="mx-3">
                    <p>商品</p>
                    <p className="my-2">數量</p>
                    <p>價格</p>
                  </div>

                  <div>
                    <p>{order[0].name}</p>
                    <p className="my-2">*{order[0].memo} </p>
                    <p>{order[0].price}</p>
                  </div>
                </div>
              </div>
              {/* 商品數量 */}
              <div className="self-end hidden pb-2 text-right md:block">
                <p>共{countTotalNum()}件商品</p>
              </div>
            </div>
          )}

          {/* 訂單詳細 */}

          <AnimatePresence>
            {selectedId == true && (
              <motion.div className="overflow-hidden">
                <motion.h2>{/* <OrderDetail order={order} /> */}</motion.h2>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="pt-4 text-center md:text-right">
            {selectedId == false && (
              <motion.button>
                <Button
                  size="sm"
                  color="orange"
                  className="mr-3 text-white rounded-sm bg-warning"
                  onClick={() => {
                    dispatch(openOrderDetail(order));
                  }}
                >
                  訂單詳情
                </Button>
              </motion.button>
            )}

            {/* 消除detailㄉ按鈕 */}
            {/* {selectedId == true && (
              <motion.button onClick={() => setSelectedId(false)}>
                <Button
                  size="sm"
                  className="mr-3 text-white rounded-sm bg-warning"
                >
                  收起訂單詳細
                </Button>
              </motion.button>
            )} */}

            <Button
              onClick={() => {
                navigate("/main/customerService");
              }}
              color="orange"
              size="sm"
              className="mr-3 text-white rounded-sm bg-warning"
            >
              聯絡客服
            </Button>

            {order[0].order_status_id === 4 ? (
              <Button
                onClick={() => {
                  dispatch(openAddComment(order));
                  // console.log("open");
                }}
                color="orange"
                size="sm"
                className="text-white rounded-sm bg-warning"
              >
                新增評論
              </Button>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
      {/* 桿桿 */}
      <div className="md:my-3 md:border-l-2 border-line"></div>
      {/* 右欄 */}
      <div className="relative p-5 bg-white md:w-1/3">
        <h4 className="pb-5 h4 md:pb-16">訂單金額</h4>
        {/* 金額 */}

        <div className="flex justify-between mt-2 p">
          <p>金額:</p>
          <p>{countTotalPrice()}</p>
        </div>
        <div className="flex justify-between pb-1 border-b border-line p">
          <p>運費:</p>
          <p>60</p>
        </div>

        <h2 className="self-end mt-1 text-right md:absolute right-5 bottom-5 p">
          總計: {parseInt(countTotalPrice()) + 60}
        </h2>
      </div>
    </>
  );
}

export default OrderItems;
