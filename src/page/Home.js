import React from "react";
import slider from "../images/slide1.png";
import cake1 from "../images/section01_cake1.png";
import Card from "../components/home/Card";
import Login from "../components/Login";

const s3Cards = [
  {
    img: "../../images/hp-express.png",
    title: "宅配專區",
    context: "可全台宅配商品",
    btnText: "前往宅配商品 ＞",
  },
  {
    img: "../../images/hp-class.png",
    title: "課程預約",
    context: "不容錯過的優質師資與精彩課程",
    btnText: "前往查看課程 ＞",
  },
  {
    img: "../../images/hp-order.png",
    title: "訂購流程",
    context: "我們不得不面對一",
    btnText: "前往訂購須知 ＞",
  },
];

const Home = () => {
  return (
    <>
      <div>
        <img src={slider} alt="..." class="w-full" />
      </div>
      {/* section1 */}
      <div class="flex justify-center bg-white">
        <div class="p-5 ms-5 me-5 mt-5" style={{ width: "75%" }}>
          <div class="sec01_title">
            <h1 class="text-center text-4xl font-bold">
              為了您，打造精彩的甜食饗宴
            </h1>
            <p class="text-center p-5">
              我們不得不面對一個非常尷尬的事實我們不得不面對一個非常尷尬的事實我們不得不面對一個非常尷尬的事實我們不得不面對一個非常尷尬的事實我們不得不面對一個非常尷尬的事實我們不得
            </p>
          </div>
          <div class="md:flex m-5 ">
            <div class="p-5">
              <h1 className="flex justify-center text-xl font-normal mb-4 md:hidden pb-1 underline decoration-secondary underline-offset-8">
                季節限定
              </h1>
              <div class="flex justify-center">
                <img src={cake1} alt="..." />
              </div>
              <div class="my-2">
                <h1 class="md:block hidden text-center text-lg font-normal my-5">
                  季節限定
                </h1>
                <p class="my-6">
                  我們不得不面對一個非常尷尬的事實我們不得不面對一個非常尷尬的事實
                </p>
                <div class="flex justify-center">
                  <button class="btn-home">前往課程列表 ＞</button>
                </div>
              </div>
            </div>
            <div class="p-5">
              <h1 className="flex justify-center text-xl font-normal mb-4 md:hidden pb-1 underline decoration-secondary underline-offset-8">
                經典熱銷
              </h1>
              <div class="flex justify-center">
                <img src={cake1} alt="..." />
              </div>
              <div class="my-2 justify-center">
                <h1 class="md:block hidden text-center text-lg font-normal my-5">
                  經典熱銷
                </h1>
                <p class="my-6">
                  我們不得不面對一個非常尷尬的事實我們不得不面對一個非常尷尬的事實
                </p>
                <div class="flex justify-center">
                  <button class="btn-home">前往課程列表 ＞</button>
                </div>
              </div>
            </div>
            <div class="p-5">
              <h1 className="flex justify-center text-xl font-normal mb-4 md:hidden pb-1 underline decoration-secondary underline-offset-8">
                課程介紹
              </h1>
              <div class="flex justify-center">
                <img src={cake1} alt="..." />
              </div>
              <div class="my-2">
                <h1 class="md:block hidden text-center text-lg font-normal my-5">
                  課程介紹
                </h1>
                <p class="my-6">
                  我們不得不面對一個非常尷尬的事實我們不得不面對一個非常尷尬的事實
                </p>
                <div className="flex justify-center">
                  <button className="btn-home">前往課程列表 ＞</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* section 02 */}
      <section className="relative overflow-hidden h-60vh">
        {/* <div className=""> */}
        {/* desktop bg */}
        <div className="max-w-full hidden md:block">
          <img
            className="absolute h-auto max-w-full -bottom-30vh"
            src={require("../images/bg.png")}
            alt=""
          />
        </div>
        {/* mobile bg */}
        <div class="max-w-full md:hidden">
          <img
            class="h-auto max-w-full absolute bottom-0"
            src={require("../images/bg.png")}
            alt=""
          />
        </div>
        {/*  -------------------- */}
        <h1 className="absolute top-10 left-10 md:top-3/4 md:left-14 leading-normal text-3xl lg:text-4xl">
          <b>
            為了您，
            <br />
            &nbsp;&nbsp;&nbsp;打造精彩的甜食饗宴...
          </b>
        </h1>
        <div class="mask h-1/2 md:h-full bg-gradient-to-t from-light md:bg-light md:bg-opacity-50 absolute text-center bottom-0 w-full md:right-20 lg:right-20vh md:w-1/3 lg:w-1/4 p-5">
          <div className="my-auto absolute bottom-5 left-1/2 -translate-x-1/2 md:top-1/2 md:-translate-y-1/2">
            <p class="mb-6 whitespace-nowrap leading-7">
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
            <button class="btn-home">前往課程列表 ＞</button>
          </div>
        </div>
        {/* </div> */}
      </section>
      {/* section 03 */}
      <section className="flex justify-center bg-white py-20 md:py-44">
        <div className="flex justify-center" style={{ width: "75%" }}>
          <div className="md:flex mx-5">
            {s3Cards.map((card, i) => {
              return <Card key={i} card={card} />;
            })}
          </div>
        </div>
      </section>
      <Login/>
    </>
  );
};
export default Home;
