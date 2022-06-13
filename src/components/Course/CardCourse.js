import React from "react";
import {
  AiOutlineMessage,
  AiOutlineShoppingCart,
  AiOutlineHeart,
  AiFillStar,
} from "react-icons/ai";

const CardCourse = () => {
  return (
    <>
      <section className="w-full m-5 bg-white lg:flex">
        <div className=" lg:w-1/2">
          <img
            // 這裡的圖片先將高度拉滿版，在使用object-cover變正常長寬
            className="object-cover h-full"
            src={require("../IMAGE/hand.jpg")}
            alt="Background"
          />
        </div>
        <div className="flex flex-col items-center justify-around lg:w-1/2">
          <div className="w-full p-3 text-3xl font-medium text-center">
            星空馬卡龍
          </div>
          <div className="flex text-xl text-center lg:w-1/2">
            粉紅、粉藍、粉黃三種色彩不規則渲染
            金色、銀色星星糖片親手妝點迷幻宇宙
            每一顆都是獨一無二的夢幻星空馬卡龍
          </div>
          <div className="w-full text-center">
            <div className="flex justify-center p-2 text-xl">
              製作難度:
              <div className="flex items-center ">
                <AiFillStar className="" />
                <AiFillStar />
                <AiFillStar />
              </div>
            </div>
            <div className="text-xl">製作時間:120 min</div>
          </div>
          <div className="flex justify-between w-1/2">
            <div>
              <p className=" text-body-color leading-relaxed text-xl">
                售價:1000
              </p>
            </div>
            <div className="flex items-center">
              <AiOutlineMessage className="w-[20px] h-[20px] mr-2" />
              <AiOutlineShoppingCart className="w-[20px] h-[20px] mr-2" />
              <AiOutlineHeart className="w-[20px] h-[20px]" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CardCourse;
