import React from "react";
import slider from "../images/slide1.png";
import cake1 from "../images/section01_cake1.png";
import Card from "../components/home/Card";
import Login from "../components/Login";

const s3Cards = [
  {
    img: "../../images/home/session3/hp-express.png",
    title: "宅配專區",
    context: "可全台宅配商品",
    btnText: "前往宅配商品 ＞",
  },
  {
    img: "../../images/hp-className.png",
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

const Home = (props) => {
  console.log(props);
  return (
    <>
      <div>
        <img src={slider} alt="..." className="w-full" />
      </div>
      {/* section1 */}
      <div className="flex justify-center bg-white">
        <div className="p-5 mt-5 ms-5 me-5" style={{ width: "75%" }}>
          <div className="sec01_title">
            <h1 className="text-4xl font-bold text-center h1">
              為了您，打造精彩的甜食饗宴
            </h1>
            <p className="p-5 text-center">
              我們不得不面對一個非常尷尬的事實我們不得不面對一個非常尷尬的事實我們不得不面對一個非常尷尬的事實我們不得不面對一個非常尷尬的事實我們不得不面對一個非常尷尬的事實我們不得
            </p>
          </div>
          <div className="justify-center m-5 md:flex ">
            <div className="p-5">
              <h1 className="flex justify-center pb-1 mb-4 text-xl font-normal underline md:hidden decoration-secondary underline-offset-8">
                季節限定
              </h1>
              <div className="flex justify-center">
                <img src={cake1} alt="..." />
              </div>
              <div className="my-2">
                <h1 className="hidden my-5 text-lg font-normal text-center md:block">
                  季節限定
                </h1>
                <p className="my-6">
                  我們不得不面對一個非常尷尬的事實我們不得不面對一個非常尷尬的事實
                </p>
                <div className="flex justify-center">
                  <button className="btn-home">前往課程列表 ＞</button>
                </div>
              </div>
            </div>
            <div className="p-5">
              <h1 className="flex justify-center pb-1 mb-4 text-xl font-normal underline md:hidden decoration-secondary underline-offset-8">
                經典熱銷
              </h1>
              <div className="flex justify-center">
                <img src={cake1} alt="..." />
              </div>
              <div className="justify-center my-2">
                <h1 className="hidden my-5 text-lg font-normal text-center md:block">
                  經典熱銷
                </h1>
                <p className="my-6">
                  我們不得不面對一個非常尷尬的事實我們不得不面對一個非常尷尬的事實
                </p>
                <div className="flex justify-center">
                  <button className="btn-home">前往課程列表 ＞</button>
                </div>
              </div>
            </div>
            <div className="p-5">
              <h1 className="flex justify-center pb-1 mb-4 text-xl font-normal underline md:hidden decoration-secondary underline-offset-8">
                課程介紹
              </h1>
              <div className="flex justify-center">
                <img src={cake1} alt="..." />
              </div>
              <div className="my-2">
                <h1 className="hidden my-5 text-lg font-normal text-center md:block">
                  課程介紹
                </h1>
                <p className="my-6">
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
        <div className="hidden max-w-full md:block">
          <img
            className="absolute h-auto max-w-full -bottom-30vh"
            src= {process.env.PUBLIC_URL + '/images/home/bg.png'}
            alt=""
          />
        </div>
        {/* mobile bg */}
        <div className="max-w-full md:hidden">
          <img
            className="absolute bottom-0 h-auto max-w-full"
            src={`${process.env.PUBLIC_URL}/images/home/section3/bg.png`}
            alt=""
          />
        </div>
        {/*  -------------------- */}
        <h1 className="absolute text-3xl leading-normal top-10 left-10 md:top-3/4 md:left-14 lg:text-4xl">
          <b>
            為了您，
            <br />
            &nbsp;&nbsp;&nbsp;打造精彩的甜食饗宴...
          </b>
        </h1>
        <div className="absolute bottom-0 w-full p-5 text-center mask h-1/2 md:h-full bg-gradient-to-t from-light md:bg-light md:bg-opacity-50 md:right-20 lg:right-20vh md:w-1/3 lg:w-1/4">
          <div className="absolute my-auto -translate-x-1/2 bottom-5 left-1/2 md:top-1/2 md:-translate-y-1/2">
            <p className="mb-6 leading-7 whitespace-nowrap">
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
            <button className="btn-home">前往課程列表 ＞</button>
          </div>
        </div>
        {/* </div> */}
      </section>
      {/* section 03 */}
      <section className="flex justify-center py-20 bg-white md:py-44">
        <div className="flex justify-center" style={{ width: "75%" }}>
          <div className="mx-5 md:flex">
            {s3Cards.map((card, i) => {
              return <Card key={i} card={card} />;
            })}
          </div>
        </div>
      </section>
      <Login />
    </>
  );
};
export default Home;
