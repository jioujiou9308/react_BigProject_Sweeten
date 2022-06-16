import React from "react";
import {
  AiFillHeart,
  AiFillPlusCircle,
  AiFillMinusCircle,
  AiOutlineStar,
  AiOutlineRight,
} from "react-icons/ai";
import UserComment from "../components/courseDetail/UserComment";
import YouMayLikeCourse from "../components/courseDetail/YouMayLikeCourse";


const CourseDetail = () => {
  return (
    <>
      <div className="bg-white pb-60">
        {/* 桌機板DEMO */}
        <div className="hidden md:flex">
          {/* demo大圖(左側)桌機板 */}
          <div className="w-1/2 mr-10 mt-14 ml-7">
            <img
              className="max-w-full"
              src={
                process.env.PUBLIC_URL +
                "/images/courseDetial/course_demo_upper.png"
              }
              alt=""
            />
          </div>
          {/* DEMO右欄 桌機板*/}
          <div className="w-1/2 mr-7">
            {/* 桌機板標題和副標字體+愛心 */}
            <div className="border-b-2 ">
              <div className="flex justify-between mt-10">
                <p className="h2">日光舞茶</p>
                <AiFillHeart className="icon-xl text-secondary" />
              </div>
              <p className="mt-2 mb-5 h3">$ 1080 NTD</p>
            </div>

            {/* 右欄尺寸桌機板 */}
            <p className="mt-4 mb-2 p">尺寸</p>
            {/* 尺寸按鈕桌機板  小字尺寸*/}
            <button className="mr-4 size-btn-desk p">6吋</button>

            <p className="mt-5 p">商品參與的優惠活動</p>
            <p className="mt-2 text-center w-28 bg-primary p">父親節特惠</p>

            {/* 數量和結帳按鈕桌機板 */}
            <div className="flex justify-between mt-8 ">
              <div className="flex">
                <AiFillMinusCircle className="icon-lg text-secondary" />
                <p className="mx-3">1</p>
                <AiFillPlusCircle className="icon-lg text-secondary" />
              </div>

              <div className="flex justify-center ">
                <button className="px-3 py-1 ml-4 p pborder-2 border-sub">
                  加入購物車
                </button>
                <button className="px-3 ml-4 text-white border-2 p border-warning bg-warning">
                  立即購買
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* 展示圖手機板 */}
        <div className="mx-8 md:hidden">
          <img
            className="max-w-full px-8 pt-10 mb-8"
            src={
              process.env.PUBLIC_URL +
              "/images/courseDetial/course_demo_upper.png"
            }
            alt=""
          />

          {/* 愛心圖示手機板 */}
          <div className="flex justify-end">
            <AiFillHeart className="my-3 mr-5 icon-xl text-secondary" />
          </div>

          {/* 標題+價錢手機板 */}
          <div className="flex justify-between px-2">
            {/* 手機板標題字體ㄉclassname */}
            <p className="h2">日光舞茶</p>
            <p className="h2">$ 1080 NTD</p>
          </div>

          {/* 數量加減手機板 */}
          <div className="flex items-center my-5 ml-5">
            <AiFillMinusCircle className="icon-xl text-secondary" />
            <p className="mx-5">1</p>
            <AiFillPlusCircle className="icon-xl text-secondary" />
          </div>
          {/* 尺寸手機板 */}
          <div className="flex items-center justify-start ml-6">
            <p className="p">尺寸</p>
            <button className="ml-5 size-btn-desk">6吋</button>
            <button className="ml-5 size-btn-desk bg-light">8吋</button>
          </div>

          <h2 className="my-5 p">商品參與的優惠活動</h2>
          <p className="mt-2 text-center p w-28 bg-primary">父親節特惠</p>

          {/* 加入購物車按鈕手機板 */}
          <div className="flex justify-between my-6">
            <button className="px-8 py-2 border-2 p md:px-4 md:py-1 border-sub">
              加入購物車
            </button>
            <button className="px-8 text-white border-2 p md:px-6 border-warning bg-warning">
              立即購買
            </button>
          </div>
        </div>
        {/* 商品說明&評論區桌機板+手機板 */}

        <div className="mx-8 md:mt-16 md:flex">
          <div className="w-full md:pr-10 md:w-1/2">
            <div className="mb-4">
              <h2 className="ml-2 md:ml-0 h3">商品特色：</h2>
              <p className="text-justify p">
                『體現茶的獨特風韻』
                將鐵觀音特有的微酸果韻融入慕斯中，同時採用義大利傳統製法，捨棄鮮奶油改以瑞士蛋白霜製作，使口感質地更加輕盈順口，另外在慕斯夾層更加入鐵觀音茶凍，讓綿密口感中增添咀嚼感，入口後清新茶香在嘴裡擴散，尾韻則帶有淡淡花香，伴隨著底層的巧克力戚風蛋糕，使整體風味增添溫潤感。
              </p>
            </div>

            <div className="mb-4">
              <h2 className="ml-2 md:ml-0 h3">原料：</h2>
              <p className="text-justify p">
                蛋黃液、蛋白液、細砂糖、沙拉油、鮮奶、蛋糕專用粉、可可粉、鐵觀音茶粉、開水、馬斯卡彭乳酪、吉利丁片、防潮糖粉、58%巧克力、苦甜巧克力、白巧克力
              </p>
            </div>

            <div>
              <h2 className="ml-2 md:ml-0 h3">過敏原：</h2>
              <p className="text-justify p">
                我們不得不面對一個非常尷尬的事實。
              </p>
            </div>
          </div>

          <div className="overflow-auto md:pl-5 md:w-1/2">
            {/* 評論區 上半部*/}
            <div className="flex justify-between w-full h-1/5">
              <div className="flex items-center justify-around w-full my-7 md:inline">
                <div>
                  <h2 className="h2">商品評論</h2>
                  <p className="md:hidden p">(6則評論)</p>
                </div>

                <div className="flex items-center">
                  <AiOutlineStar className="comment-star" />
                  <AiOutlineStar className="comment-star" />
                  <AiOutlineStar className="comment-star" />
                  <AiOutlineStar className="comment-star" />
                  <p className="mx-3 p">4/5</p>
                  <p className="hidden md:block p">(6則評論)</p>
                </div>
              </div>

              <div className="items-center hidden md:w-2/5 md:justify-end md:flex text-secondary">
                <p className="p">查看全部</p>
                <AiOutlineRight className="pt-2" />
              </div>
            </div>

            {/* 評論區 下半部使用者 */}
            <div className="">
              <UserComment />
              <UserComment />
              <UserComment />
              <UserComment />
              <UserComment />
            </div>

            <div className="flex items-center justify-start mt-4 mb-12 ml-8 text-secondary md:hidden">
              <p className="p">查看全部</p>
              <AiOutlineRight className="icon-xl" />
            </div>
          </div>
        </div>
      </div>
      {/* 你可能也會喜歡 */}
      <div className="px-10 absolute bottom-[240px] hidden w-screen right-0 my-8 bg-theme md:block bg-sub">
        <p className="pt-3 pb-6 text-center h2">你可能也會喜歡</p>
        <YouMayLikeCourse/>
      </div>
    </>
  );
};

export default CourseDetail;
