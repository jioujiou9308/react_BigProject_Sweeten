import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCartState, useUserState } from "../../utils/redux/hooks-redux";

function Summary(props) {
  const navigate = useNavigate();
  const [productsInOrder, setProductsInOrder] = useCartState();
  const [currentUser] = useUserState();
  const [onClickBtn, setOnClickBtn] = useState(false);
  // console.log(currentUser.id);

  let totalCount = 0;
  let temPrice = 0;
  productsInOrder[1].forEach((v, i) => {
    temPrice = temPrice + v.count * v.price;
    totalCount = totalCount + v.count;
  });

  const plusTax = Math.ceil(temPrice * productsInOrder[0].tax) + temPrice;

  const totalPrice = plusTax + productsInOrder[0].fee;

  function handleCheckOut() {
    if (currentUser.id == 0) {
      setOnClickBtn(true);
      return;
    } else {
      navigate("/main/checkOut");
    }
  }

  return (
    <>
      <div className="bg-primary lg:w-1/3 flex flex-col justify-between m-8 px-8 pb-8 max-h-[38rem] relative">
        <div>
          <p className="py-5 font-black h3">購物明細</p>
          <hr />
          {/* promo code */}
          {/* <div className="pt-5">
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
            <p className="">-${Math.ceil((1 - productsInOrder[0].discount)* temPrice)}</p>
          </div>
        </div> */}
          {/* 明細計算 */}
          <div className="flex justify-between pt-12">
            <p className="">項目</p>
            <p className="">共{totalCount}件</p>
          </div>
          <div className="flex justify-between pt-5">
            <p className="">Tax</p>
            <p className="">${Math.ceil(temPrice * productsInOrder[0].tax)}</p>
          </div>
          <div className="flex justify-between pt-5">
            <p className="">運費</p>
            <p className="">${productsInOrder[0].fee}</p>
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
          <button
            className="w-full py-2 text-white border hover:bg-secondary"
            onClick={handleCheckOut}
          >
            Checkout
          </button>
          {onClickBtn ? (
            <div className="absolute mx-auto text-center -translate-x-1/2 text-warning bottom-2 left-1/2">
              <p className="mt-3">請先登入帳戶</p>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
}

export default Summary;
