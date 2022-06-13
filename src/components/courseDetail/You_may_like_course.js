import React from "react";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";

//TODO 會被aside擋住，無法滿版
function You_may_like_course() {
  return (
    <>
      <div className="flex justify-center pb-10">
        <AiOutlineLeft className="mt-16 text-secondary" />
        <div className="flex">
          {/* DEMO1 */}
          <div>
            <div className="w-5/6 mx-auto overflow-hidden">
              <img src={process.env.PUBLIC_URL +"/images/You_may_like_course/course_demo_lower.png"} alt="" />
            </div>
            <div className="w-5/6 mx-auto text-center">
              <p className="py-1 text-white p bg-secondary">
                加入購物車
              </p>
              <p className="p">葡萄柚蛋糕</p>
              <p className="note">$ 900</p>
            </div>
          </div>
           {/* DEMO2 */}
           <div>
            <div className="w-5/6 mx-auto overflow-hidden">
              <img src={process.env.PUBLIC_URL +"/images/You_may_like_course/course_demo_lower.png"} alt="" />
            </div>
            <div className="w-5/6 mx-auto text-center">
              <p className="py-1 text-white p bg-secondary">
                加入購物車
              </p>
              <p className="p">葡萄柚蛋糕</p>
              <p className="note">$ 900</p>
            </div>
          </div>
        </div>
        <AiOutlineRight className="mt-16 text-secondary" />
      </div>
    </>
  );
}

export default You_may_like_course;
