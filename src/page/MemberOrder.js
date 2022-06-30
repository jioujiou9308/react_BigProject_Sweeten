import React, { useState, useEffect } from "react";
import OrderItems from "../components/memberOrder/OrderItems";
import MemberSearchBar from "../components/memberCollection/MemberSearchBar";
import MemberOrderBar from "../components/memberOrder/MemberOrderBar";
import axios from "axios";
import { API_URL } from "../utils/config";

function MemberOrder() {
  const step = ["全部", "待付款", "待出貨", "待收貨", "完成"];
  const [barStep, setBarStep] = useState(0);
  const [order, setOrder] = useState([]);

  useEffect(() => {
    let getOrder = async () => {
      let response = await axios.get(API_URL + "/order/user/1");
      setOrder(response.data.data);
      console.log(response.data.data);
    };
    getOrder();
  }, []);

  //待付款ARR
  const notPaidArr = order.filter((v) => {
    return v.order_status_id == 1;
  });

  //待出貨ARR
  const notDeliveredArr = order.filter((v) => {
    return v.order_status_id == 2;
  });

  //待收貨ARR
  const notReceivedArr = order.filter((v) => {
    return v.order_status_id == 3;
  });

  //完成ARR
  const completedArr = order.filter((v) => {
    return v.order_status_id == 4;
  });

  return (
    <>
      <div className="bg-white">
        <div className="mb-6">
          <MemberOrderBar setBarStep={setBarStep} step={step} />
        </div>
        <div className="mb-6">
          <MemberSearchBar />
        </div>

        {barStep == 0 && (
          <>
            <div className="pt-2 mx-5 text-left border-b h2">
              <h2>我的訂單</h2>
            </div>
            <div className="mb-10">
              {order.map((v, i) => {
                const {
                  id,
                  coupon_id,
                  address,
                  payment_id,
                  name,
                  count,
                  price,
                } = v;
                return (
                  <>
                    <div className="mt-10 shadow-md md:flex">
                      <OrderItems
                        id={id}
                        name={name}
                        count={count}
                        price={price}
                      />
                    </div>
                  </>
                );
              })}
            </div>
          </>
        )}
        {barStep == 1 && (
          <>
            <div className="pt-2 mx-5 text-left border-b h2">
              <h2>待付款項目</h2>
            </div>
            <div className="mb-10">
              {notPaidArr.map((v, i) => {
                const { id, name, count, price } = v;
                return (
                  <>
                    <div className="mt-10 shadow-md md:flex">
                      <OrderItems
                        id={id}
                        name={name}
                        count={count}
                        price={price}
                      />
                    </div>
                  </>
                );
              })}
            </div>
          </>
        )}
        {barStep == 2 && (
          <>
            <div className="pt-2 mx-5 text-left border-b h2">
              <h2>待出貨項目</h2>
            </div>
            <div className="mb-10">
              {notDeliveredArr.map((v, i) => {
                const { id, name, count, price } = v;
                return (
                  <>
                    <div className="mt-10 shadow-md md:flex">
                      <OrderItems
                        id={id}
                        name={name}
                        count={count}
                        price={price}
                      />
                    </div>
                  </>
                );
              })}
            </div>
          </>
        )}
        {barStep == 3 && (
          <>
            <div className="pt-2 mx-5 text-left border-b h2">
              <h2>待收貨項目</h2>
            </div>
            <div className="mb-10">
              {notReceivedArr.map((v, i) => {
                const { id, name, count, price } = v;
                return (
                  <>
                    <div className="mt-10 shadow-md md:flex">
                      <OrderItems
                        id={id}
                        name={name}
                        count={count}
                        price={price}
                      />
                    </div>
                  </>
                );
              })}
            </div>
          </>
        )}
        {barStep == 4 && (
          <>
            <div className="pt-2 mx-5 text-left border-b h2">
              <h2>完成項目</h2>
            </div>
            <div className="mb-10">
              {completedArr.map((v, i) => {
                const { id, name, count, price } = v;
                return (
                  <>
                    <div className="mt-10 shadow-md md:flex">
                      <OrderItems
                        id={id}
                        name={name}
                        count={count}
                        price={price}
                      />
                    </div>
                  </>
                );
              })}
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default MemberOrder;
