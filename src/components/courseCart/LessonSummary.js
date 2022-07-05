import React from "react";

const LessonSummary = () => {
  return (
    <>
      <div className="bg-primary w-full flex flex-col justify-between lg:m-8 px-8 pb-8 max-h-[38rem] lg:basis-1/3">
        <div>
          <p className="py-5 font-black h3">購物明細</p>
          <hr />
          {/* promo code */}
          <div className="pt-5">
            <label
              htmlFor="promo"
              className="inline-block mb-2 text-sm font-semibold"
            >
              優惠碼
            </label>
            <div className="flex">
              <input
                type="text"
                id="promo"
                placeholder="Enter your code"
                className="w-full p-2 text-sm focus:outline-none"
              />
              <button className="px-5 py-2 text-white border hover:bg-secondary">
                Apply
              </button>
            </div>
            <div className="flex justify-between pt-3">
              <p className="">折扣</p>
              <p className="">-$150</p>
            </div>
          </div>
          {/* 明細計算 */}
          <div className="flex justify-between pt-12">
            <p className="">人數</p>
            <p className="">共5人</p>
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
              totalPrice
            </p>
          </div>
          <button
            className="w-full py-2 text-white border hover:bg-secondary"
            // onClick={() => navigate("/main/checkOut")}
          >
            Checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default LessonSummary;
