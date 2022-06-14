import React, { useState } from "react";

function Index() {
  const [show, setShow] = useState(false);
  return (
    <>
      <div
        className="fixed w-full h-full overflow-x-hidden overflow-y-auto bg-black bg-opacity-90"
        id="chec-div"
      >
        <div
          className="absolute right-0 z-10 w-full h-full overflow-x-hidden transition duration-700 ease-in-out transform translate-x-0"
          id="checkout"
        >
          <div className="flex flex-col justify-end md:flex-row" id="cart">
            <div
              className="w-full h-screen py-8 pl-4 pr-10 overflow-x-hidden overflow-y-auto bg-white lg:w-1/2 md:pl-10 md:pr-4 md:py-12"
              id="scroll"
            >
              <p className="pt-3 text-5xl font-black leading-10 text-gray-800">
                Bag
              </p>
              <div className="items-center py-8 border-t border-gray-200 md:flex mt-14">
                <div className="w-1/4">
                  <img
                    src="https://cdn.tuk.dev/assets/templates/e-commerce-kit/bestSeller3.png"
                    alt=""
                    className="object-cover object-center w-full h-full"
                  />
                </div>
                <div className="md:pl-3 md:w-3/4">
                  <p className="pt-4 text-xs leading-3 text-gray-800 md:pt-0">
                    RF293
                  </p>
                  <div className="flex items-center justify-between w-full pt-1">
                    <p className="text-base font-black leading-none text-gray-800">
                      North wolf bag
                    </p>
                    <select className="px-1 py-2 mr-6 border border-gray-200 focus:outline-none">
                      <option>01</option>
                      <option>02</option>
                      <option>03</option>
                    </select>
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
                    <div className="flex itemms-center">
                      <p className="text-xs leading-3 text-gray-800 underline cursor-pointer">
                        Add to favorites
                      </p>
                      <p className="pl-5 text-xs leading-3 text-red-500 underline cursor-pointer">
                        Remove
                      </p>
                    </div>
                    <p className="text-base font-black leading-none text-gray-800">
                      $9,000
                    </p>
                  </div>
                </div>
              </div>
              <div className="items-center py-8 border-t border-gray-200 md:flex">
                <div className="w-1/4">
                  <img
                    src="https://cdn.tuk.dev/assets/templates/e-commerce-kit/bestSeller2.png"
                    alt=""
                    className="object-cover object-center w-full h-full"
                  />
                </div>
                <div className="w-full md:pl-3 md:w-3/4">
                  <p className="pt-4 text-xs leading-3 text-gray-800 md:pt-0">
                    RF293
                  </p>
                  <div className="flex items-center justify-between w-full pt-1">
                    <p className="text-base font-black leading-none text-gray-800">
                      Luxe Signature Ring
                    </p>
                    <select className="px-1 py-2 mr-6 border border-gray-200 focus:outline-none">
                      <option>01</option>
                      <option>02</option>
                      <option>03</option>
                    </select>
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
                    <div className="flex itemms-center">
                      <p className="text-xs leading-3 text-gray-800 underline cursor-pointer">
                        Add to favorites
                      </p>
                      <p className="pl-5 text-xs leading-3 text-red-500 underline cursor-pointer">
                        Remove
                      </p>
                    </div>
                    <p className="text-base font-black leading-none text-gray-800">
                      $9,000
                    </p>
                  </div>
                </div>
              </div>
              <div className="items-center py-8 border-t border-b border-gray-200 md:flex">
                <div className="w-1/4 h-full">
                  <img
                    src="https://cdn.tuk.dev/assets/templates/e-commerce-kit/bestSeller1.png"
                    alt=""
                    className="object-cover object-center w-full h-full"
                  />
                </div>
                <div className="w-full md:pl-3 md:w-3/4">
                  <p className="pt-4 text-xs leading-3 text-gray-800 md:pt-0">
                    RF293
                  </p>
                  <div className="flex items-center justify-between w-full pt-1">
                    <p className="text-base font-black leading-none text-gray-800">
                      Luxe Signature Shoes
                    </p>
                    <select className="px-1 py-2 mr-6 border border-gray-200 focus:outline-none">
                      <option>01</option>
                      <option>02</option>
                      <option>03</option>
                    </select>
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
                    <div className="flex itemms-center">
                      <p className="text-xs leading-3 text-gray-800 underline cursor-pointer">
                        Add to favorites
                      </p>
                      <p className="pl-5 text-xs leading-3 text-red-500 underline cursor-pointer">
                        Remove
                      </p>
                    </div>
                    <p className="text-base font-black leading-none text-gray-800">
                      $9,000
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-full bg-gray-100 md:w-1/3 xl:w-1/4">
              <div className="flex flex-col justify-between py-20 overflow-y-auto md:h-screen px-14">
                <div>
                  <p className="text-4xl font-black leading-9 text-gray-800">
                    Summary
                  </p>
                  <div className="flex items-center justify-between pt-16">
                    <p className="text-base leading-none text-gray-800">
                      Subtotal
                    </p>
                    <p className="text-base leading-none text-gray-800">
                      $9,000
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-5">
                    <p className="text-base leading-none text-gray-800">
                      Shipping
                    </p>
                    <p className="text-base leading-none text-gray-800">$30</p>
                  </div>
                  <div className="flex items-center justify-between pt-5">
                    <p className="text-base leading-none text-gray-800">Tax</p>
                    <p className="text-base leading-none text-gray-800">$35</p>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between pt-20 pb-6 lg:pt-5">
                    <p className="text-2xl leading-normal text-gray-800">
                      Total
                    </p>
                    <p className="text-2xl font-bold leading-normal text-right text-gray-800">
                      $10,240
                    </p>
                  </div>
                  <button
                    onClick={() => setShow(!show)}
                    className="w-full py-5 text-base leading-none text-white bg-gray-800 border border-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                  >
                    Checkout
                  </button>
                </div>
              </div>
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
