import React from "react";
import { useNavigate } from "react-router-dom";
import { useCartState } from "../../utils/redux/hooks-redux";

function Summary(props) {
  const navigate = useNavigate();
  const [productsInOrder, setProductsInOrder] = useCartState();
  console.log(productsInOrder);

  let totalCount = 0;
  let temPrice = 0;
  productsInOrder[1].forEach((v, i) => {
    temPrice = temPrice + v.count * v.price;
    totalCount = totalCount + v.count;
  });
  const afterDiscount =
    temPrice * productsInOrder[0].discount;
  
  const plusTax =
   afterDiscount * productsInOrder[0].tax + afterDiscount;

  const totalPrice =
   plusTax + productsInOrder[0].fee
  console.log(totalPrice);
  return (
    <>
      <div className="bg-primary lg:w-1/3 flex flex-col justify-between m-8 px-8 pb-8 max-h-[38rem]">
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
            <p className="">-${Math.ceil((1 - productsInOrder[0].discount)* temPrice)}</p>
          </div>
        </div>
           {/* 明細計算 */}
          <div className="flex justify-between pt-12">
            <p className="">項目</p>
            <p className="">共{totalCount}件</p>
          </div>
          <div className="flex justify-between pt-5">
            <p className="">Tax</p>
            <p className="">${afterDiscount * productsInOrder[0].tax}</p>
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
            onClick={() => navigate("/main/checkOut")}
          >
            Checkout
          </button>
        </div>
      </div>
    </>
  );
}

export default Summary;
