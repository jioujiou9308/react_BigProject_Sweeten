import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function About() {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);

  const navigate = useNavigate();

  return (
    <div>
      {/* 照片牆 */}
      <div className="flex flex-col items-center justify-center py-10 bg-gray-50">
        <div className="xl:w-1/2 w-11/12 relative w-full h-40  tracking-[.9em]">
          <h1
            role="heading"
            tabIndex={0}
            className="text-6xl font-bold text-center 2xl:leading-10 leading-0 text-line"
          >
            認識SWEETEN
          </h1>
        </div>
        <div className="absolute bg-white top-20 bg-opacity-70">
          <p className="mt-10 leading-8 text-center text-gray-200 p">
            甜點，是生活裡的享受，
            <br className="hidden md:block" />
            是給自己溫柔地犒賞。
            <br />
            每一個微笑的時刻，
            <br className="hidden md:block" />
            每一個值得慶祝的時刻，
            <br />
            無論什麼時候，
            <br className="hidden md:block" />
            都是適合吃甜點的好時光。
          </p>
        </div>
        <div className="relative flex flex-wrap items-start justify-center px-4 mt-20 2xl:px-1 lg:px-12">
          <div className="mt-24">
            <div className="flex items-end ">
              <img
                tabIndex={0}
                src={`${process.env.PUBLIC_URL}/images/about/aboutwall1.jpeg`}
                alt=""
                className="object-cover w-20 h-20 mr-6 rounded-lg"
              />
              <img
                tabIndex={0}
                src={`${process.env.PUBLIC_URL}/images/about/aboutwall7.jpeg`}
                alt=""
                className="w-48 rounded-lg h-36"
              />
            </div>
            <div className="flex items-center justify-end my-6">
              <img
                tabIndex={0}
                src={`${process.env.PUBLIC_URL}/images/about/aboutwall2.jpeg`}
                alt=""
                className="w-64 rounded-lg"
              />
            </div>
            <div className="flex items-start">
              <img
                tabIndex={0}
                src={`${process.env.PUBLIC_URL}/images/about/aboutwall3.jpeg`}
                alt=""
                className="w-48 h-48 rounded-lg"
              />
              <img
                tabIndex={0}
                src={`${process.env.PUBLIC_URL}/images/about/aboutwall6.jpeg`}
                alt=""
                className="flex-shrink-0 object-cover w-20 h-20 ml-6 rounded-lg object-fit"
              />
            </div>
          </div>
          <div className="ml-6 mt-7 md:mt-32">
            <img
              tabIndex={0}
              src={`${process.env.PUBLIC_URL}/images/about/aboutwall5.jpeg`}
              className="rounded-lg w-72 h-80"
              alt="guy with sunglasses"
            />
            <div className="flex items-start mt-6">
              <img
                tabIndex={0}
                src={`${process.env.PUBLIC_URL}/images/about/aboutwall8.jpeg`}
                alt="girl  laughing"
                className="w-48 h-48 rounded-lg"
              />
              <img
                tabIndex={0}
                src={`${process.env.PUBLIC_URL}/images/about/aboutwall9.jpeg`}
                alt="guy with glasses"
                className="object-cover w-20 h-20 ml-6 rounded-lg object-fit"
              />
            </div>
          </div>
          <div className="hidden lg:block lg:ml-6 lg:mt-14">
            <div className="lg:flex ">
              <div>
                <img
                  tabIndex={0}
                  src={`${process.env.PUBLIC_URL}/images/about/aboutwall10.jpeg`}
                  alt="group of friends"
                  className="object-center rounded-lg w-96 h-72 object-fit"
                />
              </div>
              <div>
                <div className="flex ml-6">
                  <img
                    tabIndex={0}
                    src={`${process.env.PUBLIC_URL}/images/about/aboutwall12.jpeg`}
                    className="w-20 h-20 rounded-lg mt-14"
                    alt="man"
                  />
                  <img
                    tabIndex={0}
                    src={`${process.env.PUBLIC_URL}/images/about/aboutwall4.jpeg`}
                    className="w-20 h-24 ml-6 rounded-lg"
                    alt="woman"
                  />
                </div>
                <img
                  tabIndex={0}
                  src={`${process.env.PUBLIC_URL}/images/about/aboutwall11.jpeg`}
                  alt="boy with blonde hair"
                  className="w-48 h-32 mt-6 ml-6 rounded-lg"
                />
              </div>
            </div>
            <div className="flex mt-6">
              <img
                tabIndex={0}
                className="w-48 h-48 rounded-lg"
                src={`${process.env.PUBLIC_URL}/images/about/aboutwall15.jpeg`}
                alt="young girl with red hair"
              />
              <img
                tabIndex={0}
                className="h-56 ml-6 rounded-lg w-72"
                src={`${process.env.PUBLIC_URL}/images/about/aboutwall14.jpeg`}
                alt="young girl with red hair"
              />
            </div>
          </div>
        </div>
        {/* <div className="xl:w-1/2 w-11/12 w-full h-40 tracking-[.9em] absolute top-20 first-line bg-white opacity-70">
                <h1 role="heading" tabIndex={0} className="text-6xl font-bold text-center text-gray-800 2xl:leading-10 leading-0">
                    認識SWEETEN
                </h1>
                <p className="mt-10 leading-8 text-center p">
                  甜點，是生活裡的享受，
                  <br className="hidden md:block" />
                  是給自己溫柔地犒賞。
                  <br />
                  每一個微笑的時刻，
                  <br className="hidden md:block" />
                  每一個值得慶祝的時刻，
                  <br />
                  無論什麼時候，
                  <br className="hidden md:block" />
                  都是適合吃甜點的好時光。
                </p>
            </div> */}
      </div>
      {/* 關於sweeten */}
      <div className="px-4 text-left 2xl:container 2xl:mx-auto md:py-12 lg:px-20 md:px-6 py-9">
        <h2 className="text-3xl font-semibold leading-9 text-gray-800 lg:text-4xl lg:leading-9 md:leading-7">
          關於sweeten
        </h2>
        <div className="flex flex-col justify-center mt-8 md:flex-row md:space-x-8 md:mt-16">
          <div className="w-full mt-10 md:w-7/12 lg:w-8/12 md:mt-0 sm:mt-14">
            {/* <!-- Shipping Section --> */}
            <div>
              <div className="flex items-center justify-between cursor-pointer ">
                <h3 className="text-xl font-semibold leading-5 text-gray-800 ">
                  會員制度
                </h3>
                <button
                  aria-label="too"
                  className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                  onClick={() => setShow(!show)}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className={show ? "hidden" : "block"}
                      d="M10 4.1665V15.8332"
                      stroke="#1F2937"
                      strokeWidth="1.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4.16602 10H15.8327"
                      stroke="#1F2937"
                      strokeWidth="1.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <div
                className={
                  "font-normal text-base leading-6 text-gray-600 mt-4 w-11/12 " +
                  (show ? "block" : "hidden")
                }
              >
                <p className="mb-3 text-left">
                  1.本會員制度僅適用於台灣地區門市及官方購物網站（不含第三方網站）。
                  <br />
                  2.申請入會須提供個人資料，於官方網站完成系統註冊手續。
                  <br />
                  3.為維護會員權益，每個email限身辦一個會員帳號，僅供本人使用，不得轉讓或重複申請。
                  <br />
                  4.會員權益僅供個人消費使用，不得轉售營利使用，若經查證屬實sweeten有權益消失會員資格並保留法律追訴。
                </p>
              </div>
            </div>
            <hr className="bg-gray-200 my-7" />

            <div>
              <div className="flex items-center justify-between cursor-pointer ">
                <h3 className="text-xl font-semibold leading-5 text-gray-800 ">
                  購物說明
                </h3>
                <button
                  aria-label="too"
                  className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                  onClick={() => setShow2(!show2)}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className={show2 ? "hidden" : "block"}
                      d="M10 4.1665V15.8332"
                      stroke="#1F2937"
                      strokeWidth="1.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4.16602 10H15.8327"
                      stroke="#1F2937"
                      strokeWidth="1.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <div
                className={
                  "font-normal text-base leading-6 text-gray-600 mt-4 w-11/12 " +
                  (show2 ? "block" : "hidden")
                }
              >
                <p className="mb-3 text-left">
                  Q: 付款方式？
                  <br />
                  A: 信用卡即時線上一次刷卡付款及現金付款。
                </p>
                <hr />
                <p className="my-3 text-left">
                  Q: 可以指定宅配到貨時間？
                  <br />
                  A: 宅配僅可選擇到貨日期，宅配時間依貨運時進配送為主。
                </p>
                <hr />
                <p className="my-3 text-left">
                  Q: 更改訂單或取消訂單
                  <br />
                  A: 所有訂單相關疑問，皆請撥打03-1234567詢問喔。
                </p>
                <hr />
                <p className="my-3 text-left">
                  Q: 運費怎麼算？
                  <br />
                  A:
                  運費會隨商品數量有所不同，建議可以直接透過官網選擇口味及數量，加入購物車後系統會直接幫您計算出所需的運費。
                </p>
              </div>
            </div>

            <hr className="bg-gray-200 my-7" />

            <div>
              <div className="flex items-center justify-between cursor-pointer ">
                <h3 className="text-xl font-semibold leading-5 text-gray-800 ">
                  商店客服
                </h3>
                <button
                  aria-label="too"
                  className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                  onClick={() => setShow3(!show3)}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className={show3 ? "hidden" : "block"}
                      d="M10 4.1665V15.8332"
                      stroke="#1F2937"
                      strokeWidth="1.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4.16602 10H15.8327"
                      stroke="#1F2937"
                      strokeWidth="1.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <div
                className={
                  "font-normal text-base leading-6 text-gray-600 mt-4 w-11/12 " +
                  (show3 ? "block" : "hidden")
                }
              >
                <p className="mb-3 text-left">
                  Q: 電話客服
                  <br />
                  A: 03-1234567
                  <br />
                  電話客服時間：星期一～星期五，11:00~18:00
                </p>
                <hr />
                <p className="my-3 text-left">
                  Q: 留言
                  <br />
                  A:
                  <button
                    onClick={() => {
                      navigate("/main/customerService");
                    }}
                    size="sm"
                    className="text-warning"
                  >
                    線上客服
                  </button>
                </p>
              </div>
            </div>

            <hr className="bg-gray-200 my-7" />
          </div>
        </div>
      </div>
      {/* 訂閱 */}
      <div className="pt-10 lg:py-10">
        <div className="relative flex items-center justify-center w-full">
          <img
            src={`${process.env.PUBLIC_URL}/images/about/slide2.png`}
            alt=""
            className="absolute z-0 object-cover w-full h-full xl:block"
          />
          <div className="relative z-40 flex flex-col items-center justify-center w-full px-4 py-10 bg-black bg-opacity-20 md:my-16 lg:py-16 md:mx-24 md:px-12">
            <h1 className="text-4xl font-semibold leading-9 text-center text-white">
              訂閱我們
            </h1>
            <p className="mt-6 text-base leading-normal text-center text-white">
              訂閱電子報獲取最新產品及優惠資訊
            </p>
            <div className="flex flex-col items-center w-full mt-12 space-y-4 border-white sm:border sm:flex-row lg:w-5/12 sm:space-y-0">
              <input
                className="w-full p-3 text-base font-medium leading-none text-white placeholder-white bg-transparent border border-white sm:border-transparent focus:outline-none"
                placeholder="Email"
              />
              <button className="w-full py-3 bg-white border border-white px-9 focus:outline-none focus:ring-offset-2 focus:ring sm:border-transparent sm:w-auto hover:bg-opacity-75 whitespace-nowrap">
                訂閱
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
