import React from "react";
import { AiFillWindows } from "react-icons/ai";
import Card from "../components/home/Card";

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
  return (
    <>
      <div className="relative">
        <img
          src={`${process.env.PUBLIC_URL}images/home/slide1.png`}
          alt="..."
          className="w-full "
        />
        <div className="absolute w-1/2 p-5 md:w-1/3 bg-primary/50 left-5 top-5 md:top-20">
          <h1 className="h4 md:h1">Sweeten Up Your Life</h1>
          <p className="text-xs md:p">
            Sweeten Up Your LifeSweeten Up Your LifeSweeten Up Your Life
          </p>
          <button className="p-1 mt-2 text-xs md:p-3 bg-secondary">
            Explore
          </button>
        </div>
      </div>
      {/* section0.5 */}
      <div className="flex p-5">
        {/* 左 */}
        <div className="w-1/2">
          {/* 上 */}
          <div className="w-2/3 p-3">
            <h1 className="text-4xl font-bold h1">精彩的甜食饗宴</h1>
            <p>
              我們不得不面對一個非常尷尬的事實我們不得不面對一個非常尷尬的事實我們不得不面對一個非常尷尬的事實我們不得不面對一個非常尷尬
            </p>
          </div>
          {/* 下1 */}
          <div className="flex">
            <div className="flex">
              <span className="">
                <AiFillWindows className="text-5xl" />
              </span>
              <div>
                <h1 className="h4">有機食材</h1>
                <p className="">面對一個非常尷尬的事實我們不得不</p>
              </div>
            </div>
            <div className="flex">
              <span className="">
                <AiFillWindows className="text-5xl" />
              </span>
              <div>
                <h1 className="h4">有機食材</h1>
                <p className="">面對一個非常尷尬的事實我們不得不</p>
              </div>
            </div>
          </div>
          {/* 下2 */}
          <div className="flex">
            <div className="flex">
              <span className="">
                <AiFillWindows className="text-5xl" />
              </span>
              <div>
                <h1 className="h4">有機食材</h1>
                <p className="">面對一個非常尷尬的事實我們不得不</p>
              </div>
            </div>
            <div className="flex">
              <span className="">
                <AiFillWindows className="text-5xl" />
              </span>
              <div>
                <h1 className="h4">有機食材</h1>
                <p className="">面對一個非常尷尬的事實我們不得不</p>
              </div>
            </div>
          </div>
        </div>
        {/* 右圖 */}
        <div className="w-1/2">
          <img src={`${process.env.PUBLIC_URL}images/home/slide1.png`} alt="" />
        </div>
      </div>
      {/* section1 */}
      <div className="flex justify-center bg-white">
        <div className="p-5 mx-5 mt-36" style={{ width: "75%" }}>
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
                <img
                  src={`${process.env.PUBLIC_URL}/images/home/section01_cake1.png`}
                  alt="..."
                />
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
                <img
                  src={`${process.env.PUBLIC_URL}/images/home/section01_cake1.png`}
                  alt="..."
                />
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
                <img
                  src={`${process.env.PUBLIC_URL}/images/home/section01_cake1.png`}
                  alt="..."
                />
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
            src={process.env.PUBLIC_URL + "/images/home/bg.png"}
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

      {/* vertion 2 */}
      {/* 輪播 */}
      <div className="dark:bg-gray-900">
        <div className="container mx-auto py-9 md:py-12 lg:py-24">
          <div className="relative mx-4">
            <img
              src="https://i.ibb.co/q5k5j57/bench-accounting-nvzv-OPQW0gc-unsplash-1-1.png"
              alt="A work table with house plants"
              className="hidden w-full h-full lg:block"
            />
            <img
              src="https://i.ibb.co/94jQFsV/bench-accounting-nvzv-OPQW0gc-unsplash-1-1.png"
              alt="A work table with house plants"
              className="hidden w-full h-full sm:block lg:hidden"
            />
            <img
              src="https://i.ibb.co/cJz8LZ2/bench-accounting-nvzv-OPQW0gc-unsplash-1-1.png"
              alt="A work table with house plants"
              className="w-full h-full sm:hidden"
            />

            <div className="absolute top-0 left-0 z-10 flex flex-col items-start mx-4 sm:mx-0 mt-36 sm:mt-0 sm:py-20 md:py-28 lg:py-20 xl:py-28 sm:pl-14 sm:justify-start">
              <h1 className="text-4xl font-semibold text-gray-800 sm:text-5xl lg:text-6xl sm:w-8/12">
                Minimalist Furniture Design
              </h1>
              <p className="mt-4 text-base leading-normal text-gray-800 sm:mt-5 sm:w-5/12">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <button className="hidden px-8 py-4 mt-8 text-base font-medium text-white bg-gray-800 sm:flex focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 hover:bg-gray-700">
                Explore
              </button>
            </div>
            <button className="absolute bottom-0 flex items-center justify-center w-full py-4 mt-8 text-base font-medium text-white bg-gray-800 sm:hidden dark:bg-white dark:text-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 hover:bg-gray-700">
              Explore
            </button>
          </div>
        </div>
      </div>

      {/* 特色 */}
      <div className="overflow-y-hidden">
        <div className="px-4 py-12 xl:mx-auto xl:container xl:px-20 md:px-6">
          <div className="items-center justify-center lg:flex lg:space-x-12 2xl:space-x-6">
            <div className>
              <p className="text-3xl font-extrabold leading-9 text-gray-800 lg:text-4xl">
                Why choose us
              </p>
              <p className="w-full mt-4 text-lg leading-7 text-gray-600 xl:w-7/12">
                Whether article spirits new her covered hastily sitting her.
                Money witty books nor son add
              </p>
              <div className="w-full mt-6 lg:hidden lg:w-3/5 xl:w-3/5 lg:mt-0">
                <img
                  src="https://i.ibb.co/SKLJ7WX/austin-distel-jp-Hw8ndw-J-Q-unsplash-1.png"
                  alt="ongoing meeting"
                  className="object-fill object-center w-full h-full obejct-fit"
                />
              </div>
              <div className="grid gap-6 mt-6 md:mt-10 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 lg:mt-6 2xl:mt-12">
                <div className="flex items-center">
                  <div className="relative w-16 h-16">
                    <div className="z-20 flex items-center justify-center flex-shrink-0 w-16 h-16 mt-2 mr-3 ">
                      <img
                        src="https://tuk-cdn.s3.amazonaws.com/can-uploader/feature_6_Svg1.svg"
                        alt="clock"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-start pt-8 ml-6">
                    <h2 className="text-lg font-semibold leading-4 text-gray-800">
                      Time Prompt
                    </h2>
                    <p className="mt-2 text-base leading-6 text-gray-600 lg:w-40 2xl:w-52">
                      Whether article spirits new her covered.
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="relative w-16 h-16">
                    <div className="z-20 flex items-center justify-center flex-shrink-0 w-16 h-16 mt-2 mr-3 ">
                      <img
                        src="https://tuk-cdn.s3.amazonaws.com/can-uploader/feature_6_Svg2.svg"
                        alt="Friendly"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-start pt-8 ml-6">
                    <h2 className="text-lg font-semibold leading-4 text-gray-800">
                      User Friendly
                    </h2>
                    <p className="mt-2 text-base leading-6 text-gray-600 lg:w-40 2xl:w-52">
                      Whether article spirits new her covered.
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="relative w-16 h-16">
                    <div className="z-20 flex items-center justify-center flex-shrink-0 w-16 h-16 mt-2 mr-3 ">
                      <img
                        src="https://tuk-cdn.s3.amazonaws.com/can-uploader/feature_6_Svg3.svg"
                        alt="Creative"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-start pt-8 ml-6">
                    <h2 className="text-lg font-semibold leading-4 text-gray-800">
                      Creative Ideas
                    </h2>
                    <p className="mt-2 text-base leading-6 text-gray-600 lg:w-40 2xl:w-52">
                      Whether article spirits new her covered.
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="relative w-16 h-16">
                    <div className="z-20 flex items-center justify-center flex-shrink-0 w-16 h-16 mt-2 mr-3 ">
                      <img
                        src="https://tuk-cdn.s3.amazonaws.com/can-uploader/feature_6_Svg4.svg"
                        alt="Achievments"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-start pt-8 ml-6">
                    <h2 className="text-lg font-semibold leading-4 text-gray-800">
                      Achievments
                    </h2>
                    <p className="mt-2 text-base leading-6 text-gray-600 lg:w-40 2xl:w-52">
                      Whether article spirits new her covered.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden w-full mt-6 lg:block lg:w-3/5 xl:w-3/5 lg:mt-0">
              <img
                src="https://i.ibb.co/SKLJ7WX/austin-distel-jp-Hw8ndw-J-Q-unsplash-1.png"
                alt="ongoing meeting"
                className="object-fill object-center w-full h-full obejct-fit"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 產品 */}
      <div className="px-4 2xl:mx-auto 2xl:container lg:py-16 lg:px-40 xl:px-20 md:py-12 md:px-6 py-9">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-semibold leading-9 text-gray-800">
            Latest Blog
          </h1>
          <p className="mt-4 text-base leading-6 text-center text-gray-600 sm:w-96 md:w-9/12 lg:w-5/12">
            If you're looking for random paragraphs, you've come to the right
            place. When a random word or a random sentence isn't quite enough
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 mt-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 lg:gap-x-8 md:gap-6 lg:mt-12 md:mt-9">
          <div className="relative flex items-center justify-center">
            <img src="https://i.ibb.co/kqt7S1z/img-1.png" alt="chair" />
            <div className="absolute top-0 flex flex-col items-center justify-between h-full py-10 w-80 md:w-80 lg:w-80 xl:w-96">
              <div className="flex flex-col items-center justify-center h-full">
                <h2 className="text-2xl font-semibold leading-normal text-center text-white xl:px-10 md:px-2 px-7">
                  The history of wood
                </h2>
                <p className="mt-4 text-base leading-normal text-center text-white xl:px-10 md:px-2 px-7">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry
                </p>
              </div>
              <div className="w-full px-4 md:w-auto">
                <button className="w-full px-12 py-4 text-base font-medium leading-none text-center text-gray-800 transition duration-150 bg-white hover:bg-gray-300 focus:outline-none">
                  Read more
                </button>
              </div>
            </div>
          </div>
          <div className="relative flex items-center justify-center">
            <img src="https://i.ibb.co/w04zsMJ/img-2.png" alt="chair" />
            <div className="absolute top-0 flex flex-col items-center justify-between h-full py-10 w-80 md:w-80 lg:w-80 xl:w-96">
              <div className="flex flex-col items-center justify-center h-full">
                <h2 className="text-2xl font-semibold leading-7 text-center text-white xl:px-10 md:px-2 px-7 lg:leading-7">
                  Minimimalism and modern day architecture
                </h2>
                <p className="mt-4 text-base leading-normal text-center text-white xl:px-10 md:px-2 px-7">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry
                </p>
              </div>
              <div className="w-full px-4 md:w-auto">
                <button className="w-full px-12 py-4 text-base font-medium leading-none text-center text-gray-800 transition duration-150 bg-white hover:bg-gray-300 focus:outline-none">
                  Read more
                </button>
              </div>
            </div>
          </div>
          <div className="relative flex items-center justify-center">
            <img src="https://i.ibb.co/3ctkDMB/img-3.png" alt="chair" />
            <div className="absolute top-0 flex flex-col items-center justify-between h-full py-10 w-80 md:w-80 lg:w-80 xl:w-96">
              <div className="flex flex-col items-center justify-center h-full">
                <h2 className="text-2xl font-semibold leading-normal text-center text-white xl:px-10 md:px-2 px-7 sm:w-auto">
                  Layout setting and mood
                </h2>
                <p className="mt-4 text-base leading-normal text-center text-white xl:px-10 md:px-2 px-7">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry
                </p>
              </div>
              <div className="w-full px-4 md:w-auto">
                <button className="w-full px-12 py-4 text-base font-medium leading-none text-center text-gray-800 transition duration-150 bg-white hover:bg-gray-300 focus:outline-none">
                  Read more
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 訂閱 */}
      <div className="pt-20 lg:py-32">
        <div className="relative flex items-center justify-center w-full">
          <img
            src={`${process.env.PUBLIC_URL}/images/home/subscribe.jpg`}
            alt=""
            className="absolute z-0 object-cover w-full h-full xl:block"
          />
          <div className="relative z-40 flex flex-col items-center justify-center w-full px-4 py-10 bg-dark bg-opacity-70 md:my-16 lg:py-16 md:mx-24 md:px-12">
            <h1 className="text-4xl font-semibold leading-9 text-center text-white">
              Don’t miss out!
            </h1>
            <p className="mt-6 text-base leading-normal text-center text-white">
              Subscribe to your newsletter to stay in the loop. Our newsletter
              is sent once in <br />a week on every friday so subscribe to get
              latest news and updates.
            </p>
            <div className="flex flex-col items-center w-full mt-12 space-y-4 border-white sm:border sm:flex-row lg:w-5/12 sm:space-y-0">
              <input
                className="w-full p-4 text-base font-medium leading-none text-white placeholder-white bg-transparent border border-white sm:border-transparent focus:outline-none"
                placeholder="Email Address"
              />
              <button className="w-full px-6 py-4 bg-white border border-white focus:outline-none focus:ring-offset-2 focus:ring sm:border-transparent sm:w-auto hover:bg-opacity-75">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 照片牆 */}
      <div className="hidden lg:py-20 lg:justify-center lg:items-center lg:flex-col lg:flex bg-gray-50">
        <div className="w-11/12 xl:w-1/2">
          <h1
            tabIndex={0}
            className="text-6xl font-bold text-center text-gray-800 2xl:leading-10 leading-0"
          >
            Touching hundreds of lives
          </h1>
          <h2
            role="contentinfo"
            tabIndex={0}
            className="mt-5 text-base leading-normal text-center text-gray-600"
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            Lorem Ipsum is simply dummy text of the printing
          </h2>
        </div>

        <div className="flex flex-wrap items-start justify-center px-4 mt-4 2xl:px-20 lg:px-12">
          {/* 左上 */}
          <div className="mt-24">
            <div className="flex items-end ">
              <img
                tabIndex={0}
                src={`${process.env.PUBLIC_URL}/images/home/cookie.jpg`}
                alt=""
                className="object-cover w-20 h-20 mr-6 rounded-lg"
              />
              <img
                tabIndex={0}
                src={`${process.env.PUBLIC_URL}/images/home/mango.jpg`}
                alt=""
                className="object-cover w-48 rounded-lg h-36"
              />
            </div>
            <div className="flex items-center justify-end my-6">
              <img
                tabIndex={0}
                src={`${process.env.PUBLIC_URL}/images/home/lemon.jpg`}
                alt=""
                className="w-64 rounded-lg"
              />
            </div>
            <div className="flex items-start">
              <img
                tabIndex={0}
                src={`${process.env.PUBLIC_URL}/images/home/handMake.jpg`}
                alt=""
                className="object-cover w-48 h-48 rounded-lg"
              />
              <img
                tabIndex={0}
                src={`${process.env.PUBLIC_URL}/images/home/flower.jpg`}
                alt=""
                className="flex-shrink-0 object-cover w-20 h-20 ml-6 rounded-lg object-fit"
              />
            </div>
          </div>

          {/* 右上 */}
          <div className="mt-32 ml-6">
            <img
              tabIndex={0}
              src={`${process.env.PUBLIC_URL}/images/home/strawberry.jpg`}
              className="object-cover rounded-lg w-72 h-80"
              alt=""
            />
            <div className="flex items-start mt-6">
              <img
                tabIndex={0}
                src={`${process.env.PUBLIC_URL}/images/home/macha.jpg`}
                alt=""
                className="object-cover w-48 h-48 rounded-lg"
              />
              <img
                tabIndex={0}
                src={`${process.env.PUBLIC_URL}/images/home/strCakeRoll.jpg`}
                alt=""
                className="object-cover w-20 h-20 mt-8 ml-6 rounded-lg"
              />
            </div>
          </div>

          {/* 下 */}
          <div className="ml-6 mt-14">
            <div className="lg:flex ">
              <div>
                <img
                  tabIndex={0}
                  src={`${process.env.PUBLIC_URL}/images/home/store.jpg`}
                  alt=""
                  className="object-cover rounded-lg w-96 h-72 object-fit"
                />
              </div>
              <div>
                <div className="flex ml-6">
                  <img
                    tabIndex={0}
                    src={`${process.env.PUBLIC_URL}/images/home/taro.jpg`}
                    className="object-cover w-20 h-20 rounded-lg mt-14"
                    alt=""
                  />
                  <img
                    tabIndex={0}
                    src={`${process.env.PUBLIC_URL}/images/home/chocoMarka.jpg`}
                    className="object-cover w-20 h-24 ml-6 rounded-lg"
                    alt=""
                  />
                </div>
                <img
                  tabIndex={0}
                  src={`${process.env.PUBLIC_URL}/images/home/make.jpg`}
                  alt=""
                  className="object-cover w-48 h-32 mt-6 ml-6 rounded-lg"
                />
              </div>
            </div>
            <div className="flex mt-6">
              <img
                tabIndex={0}
                className="object-cover w-48 h-48 rounded-lg"
                src={`${process.env.PUBLIC_URL}/images/home/ingredient.jpg`}
                alt=""
              />
              <img
                tabIndex={0}
                className="object-cover h-56 ml-6 rounded-lg w-72"
                src={`${process.env.PUBLIC_URL}/images/home/lesson.jpg`}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
