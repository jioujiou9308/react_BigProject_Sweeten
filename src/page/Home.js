import React from "react";
import slider from "../images/slide1.png";
import cake1 from "../images/section01_cake1.png";

const Home = () => {
  return (
    <>
    <div class="w-full">
      <img src={slider} alt="..." class="w-full"/>
    </div>
    <div class="flex justify-center bg-white">
     <div class="p-5 ms-5 me-5 mt-5" style={{width: '75%'}}>
      <div class="sec01_title">
        <h1 class="text-center text-4xl font-bold">為了您，打造精彩的甜食饗宴</h1>
        <p class="text-center p-5">
          我們不得不面對一個非常尷尬的事實我們不得不面對一個非常尷尬的事實我們不得不面對一個非常尷尬的事實我們不得不面對一個非常尷尬的事實我們不得不面對一個非常尷尬的事實我們不得
        </p>
      </div>
      <div class="flex g-4 ms-5 me-5">
        <div class="p-5">
            <img
              src={cake1}
              alt="..."
            />
            <div class="card-body">
              <h5 class="text-center">我們不得不面</h5>
              <p class="">
                我們不得不面對一個非常尷尬的事實我們不得不面對一個非常尷尬的事實
              </p>
            </div>
        </div>
        <div class="p-5">
            <img
              src={cake1}
              alt="..."
            />
            <div class="card-body">
              <h5 class="text-center">我們不得不面</h5>
              <p class="">
                我們不得不面對一個非常尷尬的事實我們不得不面對一個非常尷尬的事實
              </p>
            </div>
        </div>
        <div class="p-5">
            <img
              src={cake1}
              alt="..."
            />
            <div class="">
              <h5 class="text-center">我們不得不面</h5>
              <p class="">
                我們不得不面對一個非常尷尬的事實我們不得不面對一個非常尷尬的事實
              </p>
            </div>
        </div>
        <div class="p-5">
            <img
              src={cake1} alt="..."
            />
            <div class="">
              <h5 class="text-center">我們不得不面</h5>
              <p class="">
                我們不得不面對一個非常尷尬的事實我們不得不面對一個非常尷尬的事實
              </p>
            </div>
        </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default Home;
