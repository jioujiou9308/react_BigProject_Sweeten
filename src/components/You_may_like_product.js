import React from "react";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";

//TODO 會被aside擋住，無法滿版
function You_may_like() {
  return (
    <>
      <div className="flex justify-center pb-10">
        <AiOutlineLeft className="mt-16 icon-xl text-secondary" />
        <div className="flex">
          {/* DEMO1 */}
          <div className="mx-4 ">
            <div className="h-32 overflow-hidden w-36">
              <img src={process.env.PUBLIC_URL +"/images/You_may_like_product/product_demo1_lower.png"} alt="" />
            </div>
            <div className="text-center w-36">
              <p className="py-1 text-white p bg-secondary note-words">
                加入購物車
              </p>
              <p className="p">葡萄柚蛋糕</p>
              <p className="note">$ 900</p>
            </div>
          </div>
          {/* DEMO 2 */}
          <div className="mx-4 ">
            <div className="h-32 overflow-hidden w-36">
              <img src={process.env.PUBLIC_URL +"/images/You_may_like_product/product_demo1_lower.png"} alt="" />
            </div>
            <div className="text-center w-36">
              <p className="py-1 text-white p bg-secondary note-words">
                加入購物車
              </p>
              <p className="p">葡萄柚蛋糕</p>
              <p className="note">$ 900</p>
            </div>
          </div>
          {/* DEMO3 */}
          <div className="mx-4 ">
            <div className="h-32 overflow-hidden w-36">
              <img src={process.env.PUBLIC_URL +"/images/You_may_like_product/product_demo1_lower.png"} alt="" />
            </div>
            <div className="text-center w-36">
              <p className="py-1 text-white p bg-secondary note-words">
                加入購物車
              </p>
              <p className="p">葡萄柚蛋糕</p>
              <p className="note">$ 900</p>
            </div>
          </div>
          {/* DEMO 4 */}
          <div className="mx-4 ">
            <div className="h-32 overflow-hidden w-36">
              <img src={process.env.PUBLIC_URL +"/images/You_may_like_product/product_demo1_lower.png"} alt="" />
            </div>
            <div className="text-center w-36">
              <p className="py-1 text-white p bg-secondary note-words">
                加入購物車
              </p>
              <p className="p">葡萄柚蛋糕</p>
              <p className="note">$ 900</p>
            </div>
          </div>
        </div>
        <AiOutlineRight className="mt-16 icon-xl text-secondary" />
      </div>
    </>
  );
}

export default You_may_like;
