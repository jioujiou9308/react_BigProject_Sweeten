import React from "react";
import {
  AiOutlineMessage,
  AiOutlineShoppingCart,
  AiOutlineHeart,
} from "react-icons/ai";

const CardProduct = () => {
  return (
    <section className="">
      <div className="container">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4 md:w-1/2 xl:w-1/4 ">
            <div className="overflow-hidden bg-white hover:shadow-[5px_5px_1px_1px_#F39898]">
              <div className="w-full  max-h-[250px] lg:h-[280px] overflow-hidden">
                <img
                  className="w-full "
                  src={require("../IMAGE/green.jpg")}
                  alt="Background"
                />
              </div>
              <div className="px-3 pt-5 text-center">
                <h3>
                  <a
                    href="/"
                    className="font-semibold
                        text-dark text-xl
                        sm:text-[22px]
                        md:text-xl
                        lg:text-[22px]
                        xl:text-xl
                        2xl:h3
                        mb-4
                        block"
                  >
                    綠綠的蛋糕
                  </a>
                </h3>
                <div className="flex justify-between mt-2">
                  <div>
                    <p className="mb-3 text-base leading-relaxed text-body-color">
                      售價:1000
                    </p>
                  </div>
                  <div className="flex mt-1">
                    <AiOutlineMessage className="w-[20px] h-[20px]" />
                    <AiOutlineShoppingCart className="w-[20px] h-[20px]" />
                    <AiOutlineHeart className="w-[20px] h-[20px]" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ----------------------------------------------------------------------------- */}
          <div className="w-full px-4 md:w-1/2 xl:w-1/4">
            <div className="mb-10 overflow-hidden bg-white hover:shadow-[5px_5px_1px_1px_#F39898]">
              <div className="w-full  max-h-[250px] lg:h-[280px] overflow-hidden ">
                <img
                  className="w-full "
                  src={require("../IMAGE/green.jpg")}
                  alt="Background"
                />
              </div>
              <div className="px-3 pt-5 text-center">
                <h3>
                  <a
                    href="/"
                    className="
                        font-semibold
                        text-dark text-xl
                        sm:text-[22px]
                        md:text-xl
                        lg:text-[22px]
                        xl:text-xl
                        2xl:h3
                        mb-4
                        block
                        
                        "
                  >
                    綠綠的蛋糕
                  </a>
                </h3>
                <div className="flex justify-between mt-2">
                  <div>
                    <p className="mb-3 text-base leading-relaxed text-body-color">
                      售價:1000
                    </p>
                  </div>
                  <div className="flex mt-1">
                    <AiOutlineMessage className="w-[20px] h-[20px]" />
                    <AiOutlineShoppingCart className="w-[20px] h-[20px]" />
                    <AiOutlineHeart className="w-[20px] h-[20px]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2 xl:w-1/4">
            <div className="mb-10 overflow-hidden bg-white hover:shadow-[5px_5px_1px_1px_#F39898]">
              <div className="w-full  max-h-[250px] lg:h-[280px] overflow-hidden">
                <img
                  className="w-full "
                  src={require("../IMAGE/green.jpg")}
                  alt="Background"
                />
              </div>
              <div className="px-3 pt-5 text-center">
                <h3>
                  <a
                    href="/"
                    className="
                        font-semibold
                        text-dark text-xl
                        sm:text-[22px]
                        md:text-xl
                        lg:text-[22px]
                        xl:text-xl
                        2xl:h3
                        mb-4
                        block
                      
                        "
                  >
                    綠綠的蛋糕
                  </a>
                </h3>
                <div className="flex justify-between mt-2">
                  <div>
                    <p className="mb-3 text-base leading-relaxed text-body-color">
                      售價:1000
                    </p>
                  </div>
                  <div className="flex mt-1">
                    <AiOutlineMessage className="w-[20px] h-[20px]" />
                    <AiOutlineShoppingCart className="w-[20px] h-[20px]" />
                    <AiOutlineHeart className="w-[20px] h-[20px]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2 xl:w-1/4">
            <div className="mb-10 overflow-hidden bg-white hover:shadow-[5px_5px_1px_1px_#F39898]">
              <div className="w-full  max-h-[250px] lg:h-[280px] overflow-hidden">
                <img
                  className="w-full "
                  src={require("../IMAGE/green.jpg")}
                  alt="Background"
                />
              </div>
              <div className="px-3 pt-5 text-center">
                <h3>
                  <a
                    href="/"
                    className="
                        font-semibold
                        text-dark text-xl
                        sm:text-[22px]
                        md:text-xl
                        lg:text-[22px]
                        xl:text-xl
                        2xl:h3
                        mb-4
                        block
                        
                        "
                  >
                    綠綠的蛋糕
                  </a>
                </h3>
                <div className="flex justify-between mt-2">
                  <div>
                    <p className="mb-3 text-base leading-relaxed text-body-color">
                      售價:1000
                    </p>
                  </div>
                  <div className="flex mt-1">
                    <AiOutlineMessage className="w-[20px] h-[20px]" />
                    <AiOutlineShoppingCart className="w-[20px] h-[20px]" />
                    <AiOutlineHeart className="w-[20px] h-[20px]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardProduct;
