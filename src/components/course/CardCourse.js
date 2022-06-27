import React from "react";
import {
  AiOutlineMessage,
  AiOutlineShoppingCart,
  AiOutlineHeart,
  AiFillStar,
  AiOutlineStar,
} from "react-icons/ai";
//難度星星ㄉ假資料
const level = [4, 5, 3, 2];
const starLevel = (level) => {
  let arr = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= level) {
      arr.push(<AiFillStar />);
    } else {
      arr.push(<AiOutlineStar />);
    }
  }
  return arr;
};
// console.log(level)

const CardCourse = (props) => {
  const { id, name, img, description, price, duration, index } = props;
  return (
    <>
      <section className="w-full my-5 px-3 bg-white lg:max-h-[240px] lg:flex   overflow-hidden  ">
        <div className=" lg:w-1/2">
          <img
            // 這裡的圖片先將高度拉滿版，在使用object-cover變正常長寬
            className="object-contain "
            src={img}
            alt="Background"
          />
        </div>
        {/* TODO 粗體 , 字行 */}
        <div className="flex flex-col items-center justify-between lg:w-1/2">
          <div className="font-medium text-center h3">{name}</div>
          <div className="flex text-center p lg:w-3/4 ">{description}</div>
          <div className="w-full text-center">
            <div className="flex justify-center p">
              製作難度:
              <div className="flex items-center ">{starLevel(level[index])}</div>
            </div>
            <div className="p">製作時間:{duration} min</div>
          </div>
          <div className="flex justify-between w-1/2">
            <div>
              <p className="leading-relaxed p">售價:{price}</p>
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
