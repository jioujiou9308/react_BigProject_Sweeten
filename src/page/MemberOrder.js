import React, { useState, useEffect } from "react";
import OrderItems from "../components/memberOrder/OrderItems";
import MemberOrderSearch from "../components/memberOrder/MemberOrderSearch";
import MemberOrderBar from "../components/memberOrder/MemberOrderBar";
import axios from "axios";
import { API_URL } from "../utils/config";
import { useProductState, useUserState } from "../utils/redux/hooks-redux";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import MemberMenuTag from "../components/menuTag/MemberMenuTag";
// import MenuTag from "../components/menuTag/MenuTag";

function MemberOrder() {
  const step = ["全部", "待付款", "待出貨", "待收貨", "完成"];
  const [barStep, setBarStep] = useState(0);
  const [order, setOrder] = useState([]);
  const [orderProduct, setOrderProduct] = useState([]);
  const [currentUser] = useUserState();
  const [searchWord, setSearchWord] = useState("");
  console.log(currentUser);
  useEffect(() => {
    //拿個人所有訂單_product
    let getOrder = async () => {
      let response = await axios.get(API_URL + `/order/user/${currentUser.id}`);

      const orders = [];
      response.data.data.forEach((item) => {
        // 當前商品對應的訂單id
        const info_id = item.order_info_id;

        // 如果在 orders 內沒有這個 key，就建立一個陣列
        if (!orders[info_id]) {
          orders[info_id] = [item];
        } else {
          // 如果orders內有這個 key 表示陣列存在，新增 item 在陣列尾端
          orders[info_id].push(item);
        }
      });
      console.log("orders", orders);
      setOrder(orders);
    };
    getOrder();
  }, [currentUser]);
  console.log(order);

  return (
    <>
      <div className="mx-auto">
        <MemberMenuTag />
        <div className="bg-white">
          <div className="mb-6">
            <MemberOrderBar setBarStep={setBarStep} step={step} />
          </div>
          <div className="mb-6">
            <MemberOrderSearch
              searchWord={searchWord}
              setSearchWord={setSearchWord}
            />
          </div>

          {barStep == 0 && (
            <>
              <div className="py-2 mx-5 text-left h2">
                <h2>我的訂單</h2>
              </div>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "auto" }}
                transition={{ ease: "easeOut", duration: 1.5 }}
                className="bg-gradient-to-r pb-[5px] from-sub to-transparent mx-5"
              ></motion.div>
              {order.length == 0 && (
                <h1 className="mt-4 text-center h2">尚無項目</h1>
              )}
              <div className="mb-10" data-aos="fade-right">
                {order
                  ?.filter((item) => {
                    console.log(item);
                    return `${item[0]?.order_info_id}`.includes(searchWord);
                  })
                  ?.map((order, i) => {
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
          {barStep != 0 && (
            <>
              <div className="py-2 mx-5 text-left h2">
                <h2>待付款項目</h2>
              </div>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "auto" }}
                transition={{ ease: "easeOut", duration: 2 }}
                className="bg-gradient-to-r pb-[5px] from-sub to-transparent mx-5"
              ></motion.div>
              {order?.filter((v) => v[0]?.order_status_id == barStep).length ==
                0 && <h1 className="mt-4 text-center h2">尚無項目</h1>}
              <div className="mb-10" data-aos="fade-right">
                {order
                  .filter(
                    (v, i) =>
                      v[0]?.order_status_id == barStep &&
                      `${v[0].order_info_id}`?.includes(searchWord)
                  )
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
          {/* {barStep == 2 && (
            <>
              <div className="py-2 mx-5 text-left h2">
                <h2>待出貨項目</h2>
              </div>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "auto" }}
                transition={{ ease: "easeOut", duration: 2 }}
                className="bg-gradient-to-r pb-[5px] from-sub to-transparent mx-5"
              ></motion.div>
              {order.filter((v, i) => v[i]?.order_status_id == 2).length ==
                0 && <h1 className="mt-4 text-center h2">尚無項目</h1>}
              <div className="mb-10" data-aos="fade-right">
                {order
                  .filter(
                    (v, i) =>
                      v[i]?.order_status_id == 2 &&
                      v[0].order_info_id?.includes(searchWord)
                  )
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
              <div className="py-2 mx-5 text-left h2">
                <h2>待收貨項目</h2>
              </div>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "auto" }}
                transition={{ ease: "easeOut", duration: 2 }}
                className="bg-gradient-to-r pb-[5px] from-sub to-transparent mx-5"
              ></motion.div>
              {order.filter((v, i) => v[i]?.order_status_id == 3).length ==
                0 && <h1 className="mt-4 text-center h2">尚無項目</h1>}
              <div className="mb-10" data-aos="fade-right">
                {order
                  .filter(
                    (v, i) =>
                      v[i]?.order_status_id == 3 &&
                      v[0].order_info_id?.includes(searchWord)
                  )
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
              <div className="py-2 mx-5 text-left h2">
                <h2>完成項目</h2>
              </div>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "auto" }}
                transition={{ ease: "easeOut", duration: 2 }}
                className="bg-gradient-to-r pb-[5px] from-sub to-transparent mx-5"
              ></motion.div>
              {order.filter((v, i) => v[i]?.order_status_id == 4).length ==
                0 && <h1 className="mt-4 text-center h2">尚無項目</h1>}
              <div className="mb-10" data-aos="fade-right">
                {order
                  ?.filter(
                    (v, i) =>
                      v[i]?.order_status_id == 4 &&
                      `${v[0].order_info_id}`?.includes(searchWord)
                  )
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
          )} */}
        </div>
      </div>
    </>
  );
}

export default MemberOrder;
