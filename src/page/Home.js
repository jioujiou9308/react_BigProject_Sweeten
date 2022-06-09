import React from "react";
import slider from "../images/slide1.png";
import cake1 from "../images/section01_cake1.png";

const Home = () => {
  return (
    <>
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
          <div class="flex g-4 ms-5 me-5">
            <div class="p-5">
              <div class="flex justify-center">
               <img src={cake1} alt="..."/>
              </div>
              <div class="my-2">
                <h1 class="text-center text-lg font-normal my-5">
                  活動限定/季節限定
                </h1>
                <p class="my-6">
                  我們不得不面對一個非常尷尬的事實我們不得不面對一個非常尷尬的事實
                </p>
                <div class="flex justify-center">
                  <button class="btn-home">前往課程列表 ></button>
                </div>
              </div>
            </div>
            <div class="p-5">
              <div class="flex justify-center">
               <img src={cake1} alt="..."/>
              </div>
              <div class="my-2 justify-center">
                <h1 class="text-center text-lg font-normal my-5">經典熱銷</h1>
                <p class="my-6">
                  我們不得不面對一個非常尷尬的事實我們不得不面對一個非常尷尬的事實
                </p>
                <div class="flex justify-center">
                  <button class="btn-home">前往課程列表 ></button>
                </div>
              </div>
            </div>
            <div class="p-5">
              <div class="flex justify-center">
               <img src={cake1} alt="..."/>
              </div>
              <div class="my-2">
                <h1 class="text-center text-lg font-normal my-5">課程介紹</h1>
                <p class="my-6">
                  我們不得不面對一個非常尷尬的事實我們不得不面對一個非常尷尬的事實
                </p>
                <div class="flex justify-center">
                  <button class="btn-home">前往課程列表 ></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* section 02 */}
      <section className="overflow-hidden h-60vh relative">
        {/* desktop */}
        <div className="hidden md:block">
          <div className="max-w-full">
            <img
              className="max-w-full h-auto absolute -bottom-30vh"
              src={require("../images/bg.png")}
              alt=""
            />
          </div>
          <h1 className="absolute text-5xl bottom-8 left-6">
            <b>
              為了您，
              <br />
              &nbsp;&nbsp;&nbsp;打造精彩的甜食饗宴
            </b>
          </h1>
          {/* 施工 */}
          <div class="mask h-full bg-light absolute text-center right-30vh">
            <p class="align-self-end mb-4">
              我們不得不面對一個非常尷尬的事實，
              <br />
              那就是，對於甜點，
              <br />
              我們不能不去想，卻也不能走火入魔。
              <br />
              我們要學會站在別人的角度思考。
            </p>
            <div class="btn-wrap">
              <a
                type="button"
                class="h5 to-peoduct-list-btn text-decoration-none text-white px-4 py-2"
                href="#/"
              >
                前往商品列表
              </a>
            </div>
          </div>
        </div>

        {/* mobile */}
        <div class="mobile d-md-none">
          <div class="homepage-section-2-imgclip mw-100">
            <img
              class="img-fluid position-absolute"
              src="./images/image 3.png"
              alt=""
            />
          </div>
          <div class="mask position-absolute text-center row align-content-center">
            <h1 class="display-5">
              <b>
                為了您，
                <br />
                打造精彩的甜食饗宴
              </b>
            </h1>
            <p class="mt-4">
              我們不得不面對一個非常尷尬的事實，
              <br />
              那就是，對於甜點，
              <br />
              我們不能不去想，卻也不能走火入魔。
              <br />
              我們要學會站在別人的角度思考。
            </p>
            <div class="btn-wrap">
              <a
                type="button"
                class="h5 to-peoduct-list-btn text-decoration-none text-white px-4 py-2"
                href="#/"
              >
                前往商品列表
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* section 03 */}
      <section class="homepage-section-3 container px-0">
        <div class="homepage-card-wrap row justify-content-around gy-5">
          <div class="card p-0 col-md-3 mx-3">
            <img
              src="./images/Rectangle 5.png"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body text-center">
              <h5 class="card-title">我們不得不面對一個</h5>
              <p class="card-text">
                我們不得不面對一個非常尷尬的事實我們不得不面對一個非常尷尬的事實我們不得不面對一個非常尷尬的事實
              </p>
              <a href="#/" class="btn">
                我們不得不
              </a>
            </div>
          </div>

          <div class="card p-0 col-md-3 mx-3">
            <img
              src="./images/Rectangle 6.png"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body text-center">
              <h5 class="card-title">我們不得不面對一個</h5>
              <p class="card-text">
                我們不得不面對一個非常尷尬的事實我們不得不面對一個非常尷尬的事實我們不得不面對一個非常尷尬的事實
              </p>
              <a href="#/" class="btn">
                我們不得不
              </a>
            </div>
          </div>

          <div class="card p-0 col-md-3 mx-3">
            <img
              src="./images/Rectangle 7.png"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body text-center">
              <h5 class="card-title">我們不得不面對一個</h5>
              <p class="card-text">
                我們不得不面對一個非常尷尬的事實我們不得不面對一個非常尷尬的事實我們不得不面對一個非常尷尬的事實
              </p>
              <a href="#/" class="btn">
                我們不得不
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;
