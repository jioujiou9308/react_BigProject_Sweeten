import { AiOutlineArrowRight } from "react-icons/ai";
import { useProductState } from "../../utils/redux/hooks-redux";
import { useCartState } from "../../utils/redux/hooks-redux";
import { useState, useEffect } from "react";
import { BASE_URL } from "../../utils/config";
import { API_URL } from "../../utils/config";
import axios from "axios";

const Card = (props) => {
  const { product } = props;
  const [cart, setCart] = useCartState([]);
  const [timer, setTimer] = useState([0, 0, 0, 0]);
  const [timeOut, setTimeOut] = useState(false);
  const [restCount, setRestCount] = useState(product.count);
  // const [productPhoto, setProductPhoto] = useState([]);

  //折扣的價格
  let priceOff = product.discount / 100;
  const secondPrice = Math.ceil(Math.ceil(product.price * priceOff) / 10) * 10;
  //現在的時間->轉換成時間戳記
  const dateNow = new Date();
  const timeNow = dateNow.getTime();
  //資料庫即期時間->轉換成時間戳記
  const expiredate = new Date(product.expiry_date);
  const expireTime = expiredate.getTime();
  console.log(expireTime);
  //相減剩餘的時間(時間戳記)
  let restTime = Math.floor((expireTime - timeNow) / 1000);
  // console.log(cart[1]);
  // console.log(productPhoto);
  //---------------------------------------------拿商品的ID-串照片用
  // useEffect(() => {
  //   // 撈出各頁產品資料
  //   let getProductId = async () => {
  //     let response = await axios.get(`${API_URL}/product`);
  //     setProductPhoto(response.data);

  //     console.log(response.data);
  //     // console.log(response.data[0]);
  //   };
  //   getProductId();
  // }, []);
  //----------------------------------------------抓即期時間
  useEffect(() => {
    let countDown = setInterval(() => {
      if (restTime < 1) {
        clearInterval(countDown);
        setTimeOut(true);
        return;
      }
      restTime = restTime - 1;
      let leaveTime = restTime;
      const day = parseInt(leaveTime / (60 * 60 * 24));
      leaveTime = leaveTime - day * (60 * 60 * 24);
      const hour = parseInt(leaveTime / (60 * 60));
      leaveTime = leaveTime - hour * (60 * 60);
      const min = parseInt(leaveTime / 60);
      const second = parseInt(leaveTime % 60);
      setTimer([day, hour, min, second]);
    }, 1000);
    return () => clearInterval(countDown);
  }, []);

  return (
    <>
      {restTime > 0 ? (
        <div className="w-[19rem] mb-6  xl:w-[18rem]">
          <div className="flex flex-col items-center justify-center mr-1 ">
            <img
              className="object-cover w-full rounded-sm h-[20rem]"
              // --------------------------------------------------------即期品照片
              src={`http://localhost:8001/public/product/${product.product_id}.jpg`}
              alt="T-Shirt"
            />
            <div className="flex items-center justify-end w-full mt-2">
              <h4 className="w-full text-lg font-medium dark:text-gray-200">
                {product.name}
              </h4>
            </div>
            <div className="flex justify-between w-full">
              <div className="flex mr-2 text-blue-500">
                <div className="line-through decoration-[red] p  opacity-50">
                  ${product.price}
                </div>
                <div className="self-center p">
                  <AiOutlineArrowRight />
                </div>
                <div className="p">${secondPrice}</div>
              </div>
              <div className="flex">
                <div className=" p">剩餘:{restCount}</div>
              </div>

              {/* 123<div className=" p">倒數:{product.expire_time}</div> */}
            </div>
            <div className="flex justify-between w-full mt-2 -mb-1">
              <div className="">{}</div>
              <div>
                {timeOut ? (
                  <>特賣結束囉</>
                ) : (
                  <>
                    {timer[0]}天 {timer[1]}小時 {timer[2]}分 {timer[3]}秒
                  </>
                )}
              </div>
            </div>
            {restCount > 0 ? (
              <button
                className="flex items-center justify-center w-full px-2 py-2 mt-4 text-white rounded-sm opacity-100 hover:opacity-80 bg-secondary focus:outline-none"
                onClick={() => {
                  const { product } = props;
                  let productIndex = cart[1].findIndex(function (data, index) {
                    return data.name === product.name;
                  });
                  console.log(productIndex);

                  if (productIndex > -1) {
                    let newProductCount = {
                      ...product,
                      count: cart[1][productIndex].count + 1,
                      price: secondPrice,
                    };
                    let cartList = [...cart[1]];
                    cartList[productIndex] = newProductCount;
                    let newData = [cart[0], cartList];
                    setCart(newData);
                  } else {
                    let newProductCount = {
                      ...product,
                      count: 1,
                      price: secondPrice,
                    };
                    let cartList = [...cart[1], newProductCount];
                    let newData = [cart[0], cartList];
                    setCart(newData);
                  }
                  setRestCount(restCount - 1);
                }}
              >
                <span className="mx-1 ">加入購物車</span>
              </button>
            ) : (
              <button className="flex items-center justify-center w-full px-2 py-2 mt-4 text-white rounded-sm opacity-100 hover:opacity-80 bg-dark focus:outline-none ">
                <span className="mx-1">沒有庫存</span>
              </button>
            )}
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Card;
