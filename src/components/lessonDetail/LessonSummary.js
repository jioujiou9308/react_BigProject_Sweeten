import React from "react";
import { useNavigate } from "react-router-dom";

const LessonSummary = (props) => {
  const { courseDetail } = props;
  const navigate = useNavigate();
  console.log(courseDetail);
  const adult = Number(courseDetail[1]);
  const child = Number(courseDetail[2]);
  let totalPerson = adult + child;
  let price = Number(courseDetail[4]);
  let totalPrice = totalPerson * price;
  return (
    <>
      <div className="bg-primary w-full flex flex-col justify-between lg:m-8 px-8 pb-8 max-h-[38rem] lg:basis-1/3">
        <div>
          <p className="py-5 font-black h3">購物明細</p>
          <hr />
          {/* promo code */}
          <div className="pt-5">
            <div className="flex justify-between pt-3">
              <p className="">折扣</p>
              <p className="">-$150</p>
            </div>
          </div>
          {/* 明細計算 */}
          <div className="flex justify-between pt-12">
            <p className="">人數</p>
            <p className="">共{totalPerson}人</p>
          </div>
          <div className="flex justify-between pt-5">
            <p className="">Tax</p>
            <p className="">$100</p>
          </div>
        </div>

        {/* 明細下半部 總計 */}
        <div>
          <div className="flex items-center justify-between pt-20 pb-6 lg:pt-10">
            <p className="text-2xl font-semibold leading-normal">總計</p>
            <p className="text-2xl font-bold leading-normal text-right ">
              {totalPrice}
            </p>
          </div>
          <button
            className="w-full py-2 text-white border hover:bg-secondary"
            onClick={() => navigate("/main/checkOut")}
          >
            Checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default LessonSummary;
