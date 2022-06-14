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
            <div className="p-8 bg-white lg:w-2/3 md:p-12"
              id="scroll">
              <p className="h2 font-black">
                Bag
              </p>
              {/* each item div */}
              <div className="items-center py-8 border-t border-gray-200 md:flex mt-14">
                <div className="md:w-1/4 w-full">
                  <img
                    src="https://cdn.tuk.dev/assets/templates/e-commerce-kit/bestSeller3.png"
                    alt=""
                    className="object-cover object-center w-full max-h-40"
                  />
                </div>
                <div className="md:pl-3 md:w-3/4">
                  <div className="flex items-center justify-between w-full pt-1">
                    <p className="font-black">
                      North wolf bag
                    </p>
                    <div className="flex items-center">
                      <AiOutlineMinus />
                      <p className="text-lg p-3">1</p>
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
                    <p className="text-base font-black  ">
                      $9,000
                    </p>
                  </div>
                </div>
              </div>
              {/* 第二個item******************************* */}
              <div className="items-center py-8 border-t border-gray-200 md:flex">
                <div className="md:w-1/4 w-full">
                  <img
                    src="https://cdn.tuk.dev/assets/templates/e-commerce-kit/bestSeller2.png"
                    alt=""
                    className="object-cover object-center w-full max-h-40"
                  />
                </div>
                <div className="md:pl-3 md:w-3/4">
                  <div className="flex items-center justify-between w-full pt-1">
                    <p className="font-black">
                      Luxe Signature Ring
                    </p>
                    <div className="flex items-center">
                      <AiOutlineMinus />
                      <p className="text-lg p-3">1</p>
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
                      
                      <p className="text-xs leading-3  underline cursor-pointer">
                        Add to favorites
                      </p>
                      <p className="pl-5 text-xs leading-3 text-red-500 underline cursor-pointer">
                        Remove
                      </p>
                    </div>
                    <p className="text-base font-black  ">
                      $9,000
                    </p>
                  </div>
                </div>
              </div>
              {/* third oneeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee */}
              <div className="items-center py-8 border-t border-gray-200 md:flex">
                <div className="md:w-1/4 w-full">
                  <img
                    src="https://cdn.tuk.dev/assets/templates/e-commerce-kit/bestSeller1.png"
                    alt=""
                    className="object-cover object-center w-full max-h-40"
                  />
                </div>
                <div className="md:pl-3 md:w-3/4">
                  <div className="flex items-center justify-between w-full pt-1">
                    <p className="font-black">
                      Luxe Signature Ring
                    </p>
                    <div className="flex items-center">
                      <AiOutlineMinus />
                      <p className="text-lg p-3">1</p>
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
                      
                      <p className="text-xs leading-3  underline cursor-pointer">
                        Add to favorites
                      </p>
                      <p className="pl-5 text-xs leading-3 text-red-500 underline cursor-pointer">
                        Remove
                      </p>
                    </div>
                    <p className="text-base font-black  ">
                      $9,000
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Summary column */}
              <div className="bg-secondary lg:w-1/4 flex flex-col justify-between m-8 p-8 max-h-[30rem]">
                {/* 明細上半部 */}
                <div>
                  <p className="h2 font-black">
                    Summary
                  </p>
                  <div className="flex justify-between pt-16">
                    <p className="">
                      Subtotal
                    </p>
                    <p className="">
                      $9,000
                    </p>
                  </div>
                  <div className="flex justify-between pt-5">
                    <p className="">
                      Shipping
                    </p>
                    <p className="">$30</p>
                  </div>
                  <div className="flex justify-between pt-5">
                    <p className="">Tax</p>
                    <p className="">$35</p>
                  </div>
                </div>
                {/* 明細下半部 總計 */}
                <div>
                  <div className="flex items-center justify-between pt-20 pb-6 lg:pt-5">
                    <p className="text-2xl leading-normal ">
                      Total
                    </p>
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
    </>
  );
}

export default Index;
