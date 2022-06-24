import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useProductState } from "../../utils/redux/hooks-redux";
import { useCartState } from "../../utils/redux/hooks-redux";

const Card = (props) => {
  // {
  //   id: 1,
  //   name: "馬卡龍蛋糕",
  //   price: 400,
  //   img: "/images/course/hand.jpg",
  // }
  const { id, name, price, expirePrice, restItem, img } = props.product;
  const [cart, setCart] = useCartState();
  console.log(cart);
  return (
    <>
      <div className=" mb-6 mx-1 xl:w-[13rem]">
        <div className="flex flex-col items-center justify-center mr-1 ">
          <img
            className="object-cover w-full rounded-sm h-[15rem]"
            src={img}
            alt="T-Shirt"
          />
          <div className="flex items-center justify-end w-full mt-2">
            <h4 className="w-full text-lg font-medium dark:text-gray-200">
              {name}
            </h4>
            {/* <div className="flex items-center ">
              <AiOutlineMessage className="icon-sm" />
              <AiOutlineShoppingCart className="icon" />
              <AiOutlineHeart className="icon-sm" />
            </div> */}
          </div>
          <div className="flex justify-between w-full">
            <div className="flex mr-2 text-blue-500">
              <div className="line-through decoration-[red] p  opacity-50">
                ${price}
              </div>
              <div className="self-center p">
                <AiOutlineArrowRight />
              </div>
              <div className="p">${expirePrice}</div>
            </div>
            <div className=" p">剩餘:{restItem}</div>
          </div>

          <button
            className="flex items-center justify-center w-full px-2 py-2 mt-4 text-white rounded-sm opacity-100 hover:opacity-80 bg-dark focus:outline-none "
            onClick={() => {
              const { product } = props;
              product.count = 1;
              setCart([...cart, product]);
            }}
          >
            <span className="mx-1">加入購物車</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
