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
      <section className="w-full my-5 px-3 bg-white lg:max-h-[240px] lg:flex   overflow-hidden  ">
        <div className=" lg:w-1/2">
          <img
            // 這裡的圖片先將高度拉滿版，在使用object-cover變正常長寬
            className="object-contain "
            src="/images/course/hand.jpg"
            alt="Background"
          />
        </div>
        {/* TODO 粗體 , 字行 */}
        <div className="flex flex-col items-center justify-between lg:w-1/2">
          <div className="font-medium text-center h3">星空馬卡龍</div>
          <div className="flex text-center p lg:w-3/4 ">
            粉紅、粉藍、粉黃三種色彩不規則渲染
            金色、銀色星星糖片親手妝點迷幻宇宙
            每一顆都是獨一無二的夢幻星空馬卡龍
          </div>
          <div className="w-full text-center">
            <div className="flex justify-center p">
              製作難度:
              <div className="flex items-center ">
                <AiFillStar className="" />
                <AiFillStar />
                <AiFillStar />
              </div>
            </div>
            <div className="p">製作時間:120 min</div>
          </div>
          <div className="flex justify-between w-1/2">
            <div>
              <p className="leading-relaxed p">售價:1000</p>
            </div>
            <div className="flex items-center ">
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
