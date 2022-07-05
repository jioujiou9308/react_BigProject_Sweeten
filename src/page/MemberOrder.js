import React, { useState, useEffect } from "react";
import OrderItems from "../components/memberOrder/OrderItems";
import MemberSearchBar from "../components/memberCollection/MemberSearchBar";
import MemberOrderBar from "../components/memberOrder/MemberOrderBar";
import axios from "axios";
import { API_URL } from "../utils/config";
import { useProductState, useUserState } from "../utils/redux/hooks-redux";
import { useParams } from "react-router-dom";

function MemberOrder() {
  const step = ["全部", "待付款", "待出貨", "待收貨", "完成"];
  const [barStep, setBarStep] = useState(0);
  const [order, setOrder] = useState([]);
  const [orderProduct, setOrderProduct] = useState([]);
  const [currentUser] = useUserState();

  useEffect(() => {
    //拿個人所有訂單_product
    let getOrder = async () => {
      let response = await axios.get(API_URL + `/order/user/${currentUser.id}`);
      setOrder(response.data.data);
      console.log("orderInfo", response.data.data);
    };
    getOrder();

    //抓所有訂單商品
    // let getOrderProduct = async ()=>{
    //   let response = await axios.get(API_URL+`/order/${id}`)
    //   setOrderProduct(response.data)
    //   console.log('訂單商品',response.data)
    // }
    // getOrderProduct()
  }, []);

  // //待付款ARR
  // const notPaidArr = order.filter((v) => {
  //   return v.order_status_id == 1;
  // });

  // //待出貨ARR
  // const notDeliveredArr = order.filter((v) => {
  //   return v.order_status_id == 2;
  // });

  // //待收貨ARR
  // const notReceivedArr = order.filter((v) => {
  //   return v.order_status_id == 3;
  // });

  // //完成ARR
  // const completedArr = order.filter((v) => {
  //   return v.order_status_id == 4;
  // });

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
              {order.map((order, i) => {
                return (
                  <>
                    <div className="mt-10 shadow-md md:flex">
                      <OrderItems order={order} i={i} />
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
              {order
                .filter((v, i) => v[i].order_status_id == 1)
                .map((order, i) => {
                  return (
                    <>
                      <div className="mt-10 shadow-md md:flex">
                        <OrderItems order={order} />
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
              {order
                .filter((v, i) => v[i].order_status_id == 2)
                .map((order, i) => {
                  return (
                    <>
                      <div className="mt-10 shadow-md md:flex">
                        <OrderItems order={order} />
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
              {order
                .filter((v, i) => v[i].order_status_id == 3)
                .map((order, i) => {
                  return (
                    <>
                      <div className="mt-10 shadow-md md:flex">
                        <OrderItems order={order} />
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
              {order
                .filter((v, i) => v[i].order_status_id == 4)
                .map((order, i) => {
                  return (
                    <>
                      <div className="mt-10 shadow-md md:flex">
                        <OrderItems order={order} />
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
