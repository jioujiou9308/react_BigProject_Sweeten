import React, { useEffect } from "react";
import { Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import OrderDetail from "./OrderDetail";
import axios from "axios";
import { API_URL } from "../../utils/config";

function OrderItems({ order, allOrder }) {
  const navigate = useNavigate();
  const [selectedId, setSelectedId] = useState(false);

  return (
    <>
      {/* 左欄 */}
      <div className="px-2 py-5 g-white m md:px-10 md:w-2/3 ">
        <div>
          <div>
            <h4 className="pb-5 h4">訂單編號 # {}</h4>
          </div>

          {/* 左欄最外框 */}
          {/* 如果按下訂單詳情第一項商品就消失 */}
          {selectedId == false && (
            <div className="flex justify-between p-2 md:border border-line">
              <div className="">
                {/* 商品價格數量 */}
                <div className="flex items-center justify-start">
                  <div className="mr-2 overflow-hidden">
                    <img
                      className="scale-105 "
                      src="/images/memberCollectionAndOrder/member_order1.png"
                      alt=""
                    />
                  </div>

                  <div className="mx-3">
                    <p>商品</p>
                    <p className="my-2">數量</p>
                    <p>價格</p>
                  </div>

                  <div>
                    <p>{order[0].name}</p>
                    <p className="my-2">* </p>
                    <p>{order[0].price}</p>
                  </div>
                </div>
              </div>
              {/* 商品數量 */}
              <div className="self-end hidden pb-2 text-right md:block">
                <p>共 件商品</p>
              </div>
            </div>
          )}

          {/* 訂單詳細 */}

          <AnimatePresence>
            {selectedId == true && (
              <motion.div className="overflow-hidden">
                <motion.h2>
                  <OrderDetail order={order} />
                </motion.h2>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="pt-4 text-center md:text-right">
            {selectedId == false && (
              <motion.button onClick={() => setSelectedId(true)}>
                <Button
                  size="sm"
                  className="mr-3 text-white rounded-sm bg-warning"
                >
                  訂單詳情
                </Button>
              </motion.button>
            )}

            {/* 消除detailㄉ按鈕 */}
            {selectedId == true && (
              <motion.button onClick={() => setSelectedId(false)}>
                <Button
                  size="sm"
                  className="mr-3 text-white rounded-sm bg-warning"
                >
                  收起訂單詳細
                </Button>
              </motion.button>
            )}

            <Button
              onClick={() => {
                navigate("/main/customerService");
              }}
              size="sm"
              className="text-white rounded-sm bg-warning"
            >
              聯絡客服
            </Button>
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
          <p>{}</p>
        </div>
        <div className="flex justify-between p">
          <p>運費:</p>
          <p>60</p>
        </div>
        <div className="flex justify-between pb-2 border-b border-line p">
          <p>折扣:</p>
          <p>-30</p>
        </div>

        <h2 className="self-end text-right md:absolute right-5 bottom-5 p">
          總計: {order.price + 60 - 30}
        </h2>
      </div>
    </>
  );
}

export default OrderItems;
