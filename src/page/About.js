import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function About() {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);

  const navigate = useNavigate();

  return (
    <div>
      <div className="flex flex-col py-10">
        <div className="justify-around md:flex">
          <div>
            <div className="lg:h-14 h-24  mt-10 bg-gradient-to-r pb-[6px] from-secondary to-transparent">
              <div className="h-20 p-0 bg-white lg:h-12">
                <h1
                  className=" flex h-12 lg:text-4xl text-2xl font-bold leading-9  tracking-[.3em]"
                  data-aos="fade-in-left"
                  data-aos-duration="3000"
                >
                  認識SWEETEN
                </h1>
              </div>
            </div>
            <p className="my-5 leading-9 p">
              甜點對法國人而言，就像是日常所需，與法國人聚餐，無論是享用哪
              <br />
              國料理，餐後結尾甜點是絕對必要的，哪怕只是簡單的烤布雷、熔岩
              <br />
              巧克力蛋糕，就像台灣人吃餐後水果一樣，吃完甜點才算是正式結束
              <br />
              一餐。
              <br />
              近年來，將引以為傲的傳統經典款式更加精緻化，拆解重組，融入了
              <br />
              更多創意和口味上的層次轉變。分子甜點、完美視覺與味覺饗宴的盤
              <br />
              式甜點，反應了與生活密不可分的飲食文化。
            </p>
          </div>

          <div
            className="relative mt-5 md:w-1/2"
            data-aos="fade-in"
            data-aos-duration="2000"
          >
            <div className="absolute invisible w-full h-full border-2 md:visible -top-2 -right-2 border-line">
              <img
                src={`${process.env.PUBLIC_URL}/images/about/aboutwall13.jpeg`}
                className="object-cover w-full h-full "
                alt="about jpg"
              />
            </div>
            <div className="absolute invisible w-full h-full border-2 md:visible -bottom-2 -left-2 border-line"></div>
            <div className="mx-10 my-10 font-bold bg-opacity-50">
              <p
                className="px-2 leading-8 bg-white bg-opacity-80 max-w-max p"
                data-aos="flip-left"
                data-aos-duration="1000"
              >
                甜點，是生活裡的享受
                <br />
                是給自己溫柔地犒賞
              </p>
              <br />
              <p
                className="px-2 mx-auto leading-8 text-center bg-white bg-opacity-80 max-w-max p"
                data-aos="flip-left"
                data-aos-duration="2000"
              >
                每一個微笑的時刻
                <br />
                每一個值得慶祝的時刻
              </p>
              <br />
              <p
                className="px-2 ml-auto leading-8 bg-white bg-opacity-80 text-end max-w-max p"
                data-aos="flip-left"
                data-aos-duration="3000"
              >
                無論什麼時候
                <br />
                都是適合吃甜點的好時光
              </p>
            </div>
          </div>
        </div>

        {/* 照片牆 */}
        <div className="lg:h-14 h-24  ml-10 mt-40 bg-gradient-to-r pb-[6px] from-secondary to-transparent">
          <div className="h-20 p-0 bg-white lg:h-12">
            <h1
              className=" flex h-12 lg:text-4xl text-2xl font-bold leading-9  tracking-[.3em]"
              data-aos="fade-in-left"
              data-aos-duration="2000"
            >
              SWEETEN烘焙
            </h1>
          </div>
        </div>
        <span className="my-5 leading-9 md:mx-10 p">
          近年來，風格獨立甜點店一間間開起，各色甜點創作不僅滿足甜點迷的味蕾，也形塑出多元甜點文化。事實上台灣常民生活與甜點的美味關係其來有自。早從日治時期開始，台灣人便可以在喫茶店裡享用兼具和洋風味的「洋菓子」；到了美援時期，在美國推廣小麥的背景下，街邊開起一間間「西點麵包店」，西點師傅們在「台灣區麵麥食品推廣執行委員會」教導下，以當時看來科學化的先進技術，製作出充滿美式風格的西點麵包，成為許多人的童年回憶。
        </span>
        <div className="relative flex flex-wrap items-start justify-center px-4 mt-20 2xl:px-1 lg:px-12">
          <div className="mt-5">
            <div className="flex items-end ">
              <img
                tabIndex={0}
                src={`${process.env.PUBLIC_URL}/images/about/aboutwall1.jpeg`}
                alt=""
                className="object-cover w-20 h-20 mr-6 rounded-lg"
                data-aos="zoom-in-right"
                data-aos-easing="ease-in"
                data-aos-duration="800"
              />
              <img
                tabIndex={0}
                src={`${process.env.PUBLIC_URL}/images/about/aboutwall7.jpeg`}
                alt=""
                className="w-48 rounded-lg h-36"
                data-aos="zoom-in-right"
                data-aos-easing="ease-in"
                data-aos-duration="1500"
              />
            </div>
            <div className="flex items-center justify-end my-6">
              <img
                tabIndex={0}
                src={`${process.env.PUBLIC_URL}/images/about/aboutwall2.jpeg`}
                alt=""
                className="w-64 rounded-lg"
                data-aos="zoom-in-up"
                data-aos-easing="ease-in"
                data-aos-duration="1500"
              />
            </div>
            <div className="flex items-start">
              <img
                tabIndex={0}
                src={`${process.env.PUBLIC_URL}/images/about/aboutwall3.jpeg`}
                alt=""
                className="w-48 h-48 rounded-lg"
                data-aos="zoom-in-up"
                data-aos-easing="ease-in"
                data-aos-duration="800"
              />
              <img
                tabIndex={0}
                src={`${process.env.PUBLIC_URL}/images/about/aboutwall6.jpeg`}
                alt=""
                className="flex-shrink-0 object-cover w-20 h-20 ml-6 rounded-lg object-fit"
                data-aos="zoom-in-up"
                data-aos-easing="ease-in"
                data-aos-duration="1000"
              />
            </div>
          </div>
          <div className="ml-6 mt-7 md:mt-32">
            <img
              tabIndex={0}
              src={`${process.env.PUBLIC_URL}/images/about/aboutwall5.jpeg`}
              className="rounded-lg w-72 h-80"
              alt="guy with sunglasses"
              data-aos="zoom-in-down"
              data-aos-easing="ease-in"
              data-aos-duration="1000"
            />
            <div className="flex items-start mt-6">
              <img
                tabIndex={0}
                src={`${process.env.PUBLIC_URL}/images/about/aboutwall8.jpeg`}
                alt="girl  laughing"
                className="w-48 h-48 rounded-lg"
                data-aos="zoom-in-up"
                data-aos-easing="ease-in"
                data-aos-duration="800"
              />
              <img
                tabIndex={0}
                src={`${process.env.PUBLIC_URL}/images/about/aboutwall9.jpeg`}
                alt="guy with glasses"
                className="object-cover w-20 h-20 ml-6 rounded-lg object-fit"
                data-aos="zoom-in-up"
                data-aos-easing="ease-in"
                data-aos-duration="800"
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
                  data-aos="zoom-in-down"
                  data-aos-easing="ease-in"
                  data-aos-duration="800"
                />
              </div>
              <div>
                <div className="flex ml-6">
                  <img
                    tabIndex={0}
                    src={`${process.env.PUBLIC_URL}/images/about/aboutwall12.jpeg`}
                    className="w-20 h-20 rounded-lg mt-14"
                    alt="man"
                    data-aos="zoom-in-down"
                    data-aos-easing="ease-in"
                    data-aos-duration="1500"
                  />
                  <img
                    tabIndex={0}
                    src={`${process.env.PUBLIC_URL}/images/about/aboutwall4.jpeg`}
                    className="w-20 h-24 ml-6 rounded-lg"
                    alt="woman"
                    data-aos="zoom-in-left"
                    data-aos-easing="ease-in"
                    data-aos-duration="800"
                  />
                </div>
                <img
                  tabIndex={0}
                  src={`${process.env.PUBLIC_URL}/images/about/aboutwall11.jpeg`}
                  alt="boy with blonde hair"
                  className="w-48 h-32 mt-6 ml-6 rounded-lg"
                  data-aos="zoom-in-left"
                  data-aos-easing="ease-in"
                  data-aos-duration="1000"
                />
              </div>
            </div>
            <div className="flex mt-6">
              <img
                tabIndex={0}
                className="w-48 h-48 rounded-lg"
                src={`${process.env.PUBLIC_URL}/images/about/aboutwall15.jpeg`}
                alt="young girl with red hair"
                data-aos="zoom-in-up"
                data-aos-easing="ease-in"
                data-aos-duration="1000"
              />
              <img
                tabIndex={0}
                className="h-56 ml-6 rounded-lg w-72"
                src={`${process.env.PUBLIC_URL}/images/about/aboutwall14.jpeg`}
                alt="young girl with red hair"
                data-aos="zoom-in-up"
                data-aos-easing="ease-in"
                data-aos-duration="800"
              />
            </div>
          </div>
        </div>
      </div>
      {/*師資*/}
      <div className="lg:h-14 h-24  ml-10 mt-40 bg-gradient-to-r pb-[6px] from-secondary to-transparent">
        <div className="h-20 p-0 bg-white lg:h-12">
          <h1
            className=" flex h-12 lg:text-4xl text-2xl font-bold leading-9  tracking-[.3em]"
            data-aos="fade-in-left"
            data-aos-duration="2000"
          >
            SWEETEN師資
          </h1>
        </div>
      </div>
      <div className="flex flex-wrap justify-around mt-8 mb-20">
        {/* Each Teacher */}
        <div
          className="flex items-center p-2 mb-2 hover:bg-gradient-to-r bg-gradient-to-l from-primary to-transparent w-60"
          data-aos="flip-left"
          data-aos-duration="2000"
        >
          <img
            className="w-20 h-20 rounded-full shrink-0"
            src={`${process.env.PUBLIC_URL}/images/about/aboutwall1.jpeg`}
            alt=""
          />
          <div className="ml-3 mr-3">
            <p className="text-sm font-medium">澳洲藍帶甜點師傅</p>
            <p className="font-medium p">陳映汝</p>
          </div>
        </div>
        <div
          className="flex items-center p-2 mb-2 hover:bg-gradient-to-r bg-gradient-to-l from-primary to-transparent w-60"
          data-aos="flip-left"
          data-aos-duration="2000"
        >
          <img
            className="w-20 h-20 rounded-full shrink-0"
            src={`${process.env.PUBLIC_URL}/images/about/aboutwall1.jpeg`}
            alt=""
          />
          <div className="ml-3 mr-3">
            <p className="text-sm font-medium">法國餐廚資深研究員</p>
            <p className="font-medium p">陳映汝</p>
          </div>
        </div>
        <div
          className="flex items-center p-2 mb-2 hover:bg-gradient-to-r bg-gradient-to-l from-primary to-transparent w-60"
          data-aos="flip-left"
          data-aos-duration="2000"
        >
          <img
            className="w-20 h-20 rounded-full shrink-0"
            src={`${process.env.PUBLIC_URL}/images/about/aboutwall1.jpeg`}
            alt=""
          />
          <div className="ml-3 mr-3">
            <p className="text-sm font-medium">台式甜點師</p>
            <p className="font-medium p">陳映汝</p>
          </div>
        </div>
        <div
          className="flex items-center p-2 mb-2 hover:bg-gradient-to-r bg-gradient-to-l from-primary to-transparent w-60"
          data-aos="flip-left"
          data-aos-duration="2000"
        >
          <img
            className="w-20 h-20 rounded-full shrink-0"
            src={`${process.env.PUBLIC_URL}/images/about/aboutwall1.jpeg`}
            alt=""
          />
          <div className="ml-3 mr-3">
            <p className="text-sm font-medium">法國優秀烘焙專家</p>
            <p className="font-medium p">陳映汝</p>
          </div>
        </div>
      </div>
      {/* 關於sweeten */}
      <div
        className="px-4 text-left 2xl:container 2xl:mx-auto md:py-12 lg:px-10 md:px-6 py-9"
        data-aos-offset="500"
        data-aos-easing="ease-in"
        data-aos-duration="2000"
      >
        <div className="lg:h-14 h-24  text-center mt-10 bg-gradient-to-r pb-[6px] from-secondary to-transparent">
          <div className="h-20 p-0 bg-white lg:h-12">
            <h1
              className=" flex h-12 lg:text-4xl text-2xl font-bold leading-9  tracking-[.3em]"
              data-aos="fade-in-left"
              data-aos-duration="2000"
            >
              關於SWEETEN
            </h1>
          </div>
        </div>
        <div className="flex flex-col justify-center mt-8 md:flex-row md:space-x-8 md:mt-16">
          <div
            className="w-full mt-10 md:w-7/12 lg:w-8/12 md:mt-0 sm:mt-14"
            data-aos="flip-up"
            data-aos-duration="2000"
          >
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
      <div className="mt-20 ">
        <div
          className="relative flex items-center justify-center w-full"
          data-aos="zoom-out"
          data-aos-easing="ease-in"
          data-aos-duration="1000"
        >
          <img
            src={`${process.env.PUBLIC_URL}/images/about/slide2.png`}
            alt=""
            className="absolute z-0 object-cover w-full h-full xl:block"
          />
          <div
            className="relative z-40 flex flex-col items-center justify-center w-full px-4 py-10 bg-dark bg-opacity-70 md:my-16 lg:py-16 md:mx-24 md:px-12"
            data-aos="flip-up"
            data-aos-easing="ease-in"
            data-aos-duration="2000"
          >
            <h1 className=" flex h-12 text-white lg:text-4xl text-2xl font-bold leading-9  tracking-[.3em]">
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
      <blockquote className="mt-20 mb-10 text-2xl italic font-semibold text-center">
        Let us&nbsp;
        <span className="relative inline-block before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-secondary">
          <span className="relative text-white">sweeten</span>
        </span>
        &nbsp;up your life.
      </blockquote>
    </div>
  );
}

export default About;
