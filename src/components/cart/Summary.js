import React from 'react';
import { useNavigate } from "react-router-dom";

function Summary(props) {
  const { totalNumber, totalPrice } = props;
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-secondary lg:w-1/3 flex flex-col justify-between m-8 p-8 max-h-[38rem]">
            {/* 明細上半部 */}
            <div>
              <p className="font-black h2">Summary</p>
              <div className="flex justify-between pt-12">
                <p className="">項目</p>
                <p className="">共{totalNumber}件</p>
              </div>
              <div className="flex justify-between pt-5">
                <p className="">運費</p>
                <p className="">$30</p>
              </div>
              <div className="flex justify-between pt-5">
                <p className="">Tax</p>
                <p className="">$35</p>
              </div>
            </div>
            {/* promo code */}
            <div className="pt-10">
              <label
                for="promo"
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
                <button className="px-5 py-2 text-white border hover:bg-primary">
                  Apply
                </button>
              </div>
              <div className="flex justify-between pt-3">
                <p className="">折扣</p>
                <p className="">-$35</p>
              </div>
            </div>
            {/* 明細下半部 總計 */}
            <div>
              <div className="flex items-center justify-between pt-20 pb-6 lg:pt-10">
                <p className="text-2xl font-semibold leading-normal">總計</p>
                <p className="text-2xl font-bold leading-normal text-right ">
                  ${totalPrice}
                </p>
              </div>
              <button className="w-full py-2 text-white border hover:bg-primary" onClick={()=>navigate("/main/checkOut")}>
                Checkout
              </button>
            </div>
        </div>
    </>
  );
}

export default Summary;
