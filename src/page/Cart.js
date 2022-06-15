import React, { useState } from "react";
import {
  AiOutlinePlus,
  AiOutlineMinus,
  AiOutlineHeart,
  AiOutlineDelete,
} from "react-icons/ai";
function Index() {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="">
        {/* bag & summary */}
        <div className="flex flex-col lg:flex-row" id="cart">
          {/* bag column */}
          <div className="p-8 bg-white lg:w-2/3 md:p-12" id="scroll">
            <p className="font-black h2">Bag</p>
            {/* each item div */}
            <div className="items-center py-8 border-t border-gray-200 md:flex mt-14">
              <div className="w-full md:w-1/4">
                <img
                  src="https://cdn.tuk.dev/assets/templates/e-commerce-kit/bestSeller3.png"
                  alt=""
                  className="object-cover object-center w-full max-h-40"
                />
              </div>
              <div className="md:pl-3 md:w-3/4">
                <div className="flex items-center justify-between w-full pt-1">
                  <p className="font-black">North wolf bag</p>
                  <div className="flex items-center">
                    <AiOutlineMinus />
                    <p className="p-3 text-lg">1</p>
                    <AiOutlinePlus />
                  </div>
                </div>
                <p className="pt-2 text-xs leading-3 text-gray-600">
                  Height: 10 inches
                </p>
                <p className="py-4 text-xs leading-3 text-gray-600">
                  Color: Black
                </p>
                <p className="text-xs leading-3 text-gray-600 w-96">
                  Composition: 100% calf leather
                </p>
                <div className="flex items-center justify-between pt-5 pr-6">
                  <div className="flex">
                    <AiOutlineHeart />
                    <AiOutlineDelete />
                  </div>
                  <p className="text-base font-black ">$9,000</p>
                </div>
              </div>
            </div>
            {/* 第二個item******************************* */}
            <div className="items-center py-8 border-t border-gray-200 md:flex">
              <div className="w-full md:w-1/4">
                <img
                  src="https://cdn.tuk.dev/assets/templates/e-commerce-kit/bestSeller2.png"
                  alt=""
                  className="object-cover object-center w-full max-h-40"
                />
              </div>
              <div className="md:pl-3 md:w-3/4">
                <div className="flex items-center justify-between w-full pt-1">
                  <p className="font-black">Luxe Signature Ring</p>
                  <div className="flex items-center">
                    <AiOutlineMinus />
                    <p className="p-3 text-lg">1</p>
                    <AiOutlinePlus />
                  </div>
                </div>
                <p className="pt-2 text-xs leading-3 text-gray-600">
                  Height: 10 inches
                </p>
                <p className="py-4 text-xs leading-3 text-gray-600">
                  Color: Black
                </p>
                <p className="text-xs leading-3 text-gray-600 w-96">
                  Composition: 100% calf leather
                </p>
                <div className="flex items-center justify-between pt-5 pr-6">
                  <div className="flex items-center">
                    <p className="text-xs leading-3 underline cursor-pointer">
                      Add to favorites
                    </p>
                    <p className="pl-5 text-xs leading-3 text-red-500 underline cursor-pointer">
                      Remove
                    </p>
                  </div>
                  <p className="text-base font-black ">$9,000</p>
                </div>
              </div>
            </div>
            {/* third oneeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee */}
            <div className="items-center py-8 border-t border-gray-200 md:flex">
              <div className="w-full md:w-1/4">
                <img
                  src="https://cdn.tuk.dev/assets/templates/e-commerce-kit/bestSeller1.png"
                  alt=""
                  className="object-cover object-center w-full max-h-40"
                />
              </div>
              <div className="md:pl-3 md:w-3/4">
                <div className="flex items-center justify-between w-full pt-1">
                  <p className="font-black">Luxe Signature Ring</p>
                  <div className="flex items-center">
                    <AiOutlineMinus />
                    <p className="p-3 text-lg">1</p>
                    <AiOutlinePlus />
                  </div>
                </div>
                <p className="pt-2 text-xs leading-3 text-gray-600">
                  Height: 10 inches
                </p>
                <p className="py-4 text-xs leading-3 text-gray-600">
                  Color: Black
                </p>
                <p className="text-xs leading-3 text-gray-600 w-96">
                  Composition: 100% calf leather
                </p>
                <div className="flex items-center justify-between pt-5 pr-6">
                  <div className="flex items-center">
                    <p className="text-xs leading-3 underline cursor-pointer">
                      Add to favorites
                    </p>
                    <p className="pl-5 text-xs leading-3 text-red-500 underline cursor-pointer">
                      Remove
                    </p>
                  </div>
                  <p className="text-base font-black ">$9,000</p>
                </div>
              </div>
            </div>
          </div>
          {/* Summary column */}
          <div className="bg-secondary lg:w-1/3 flex flex-col justify-between m-8 p-8 max-h-[38rem]">
            {/* 明細上半部 */}
            <div>
              <p className="font-black h2">Summary</p>
              <div className="flex justify-between pt-12">
                <p className="">Subtotal</p>
                <p className="">$9,000</p>
              </div>
              <div className="flex justify-between pt-5">
                <p className="">Shipping</p>
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
                Promo Code
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
                <p className="">Discount</p>
                <p className="">-$35</p>
              </div>
            </div>
            {/* 明細下半部 總計 */}
            <div>
              <div className="flex items-center justify-between pt-20 pb-6 lg:pt-10">
                <p className="text-2xl font-semibold leading-normal">Total</p>
                <p className="text-2xl font-bold leading-normal text-right ">
                  $10,240
                </p>
              </div>
              <button className="w-full py-2 text-white border hover:bg-primary">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>
        {` /* width */
                #scroll::-webkit-scrollbar {
                    width: 1px;
                }

                /* Track */
                #scroll::-webkit-scrollbar-track {
                    background: #f1f1f1;
                }

                /* Handle */
                #scroll::-webkit-scrollbar-thumb {
                    background: rgb(133, 132, 132);
                }
`}
      </style>
      <div className="w-1/2 p-5 overflow-visible bg-primary">
        <span className="block pb-3 font-medium h3">Card Details</span>

        <span className="text-xs">Card Type</span>

        <div className="flex justify-between mt-2 overflow-visible">
          <div className="relative px-4 py-2 rounded bg-secondary w-52 h-28 right-10">
            <span className="text-lg italic font-medium underline">VISA</span>

            <div className="flex justify-between pt-4">
              <span className="text-xs font-medium ">****</span>
              <span className="text-xs font-medium ">****</span>
              <span className="text-xs font-medium ">****</span>
              <span className="text-xs font-medium ">****</span>
            </div>

            <div className="flex justify-between mt-3">
              <span className="text-xs ">Giga Tamarashvili</span>
              <span className="text-xs ">12/18</span>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center">
            <img
              src="https://img.icons8.com/color/96/000000/mastercard-logo.png"
              width="40"
              className="relative right-5"
            />
            <span className="relative text-xs font-medium bottom-2 right-5">
              mastercard.
            </span>
          </div>
        </div>

        <div className="flex flex-col pt-3">
          <label className="text-xs">Name on Card</label>
          <input
            type="text"
            className="w-full h-6 py-4 text-sm focus:outline-none"
            placeholder="Giga Tamarashvili"
          />
        </div>

        <div className="flex flex-col pt-3">
          <label className="text-xs">Card Number</label>
          <input
            type="text"
            className="w-full h-6 py-4 text-sm focus:outline-none"
            placeholder="****     ****      ****      ****"
          />
        </div>

        <div className="grid grid-cols-3 gap-2 pt-2 mb-3">
          <div className="col-span-2 ">
            <label className="text-xs">Expiration Date</label>
            <div className="grid grid-cols-2 gap-2">
              <input
                type="text"
                className="w-full h-6 py-4 text-sm focus:outline-none"
                placeholder="mm"
              />
              <input
                type="text"
                className="w-full h-6 py-4 text-sm focus:outline-none"
                placeholder="yyyy"
              />
            </div>
          </div>

          <div className="">
            <label className="text-xs">CVV</label>
            <input
              type="text"
              className="w-full h-6 py-4 text-sm focus:outline-none"
              placeholder="XXX"
            />
          </div>
        </div>

        <button className="w-full py-2 text-white border hover:bg-secondary">
          Check Out
        </button>
      </div>
    </>
  );
}

export default Index;
