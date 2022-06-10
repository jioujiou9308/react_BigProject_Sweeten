import React from "react";
import {
  AiOutlineMessage,
  AiOutlineShoppingCart,
  AiOutlineHeart,
} from "react-icons/ai";

const CardProduct = () => {
  return (
    // FIXME class 改成 classname
    <section class=" ">
      <div class="container">
        <div class="flex flex-wrap -mx-4">
          <div class="w-full md:w-1/2 xl:w-1/4 px-4">
            <div class="bg-white rounded-lg overflow-hidden mb-10">
              <div className="w-full  max-h-[250px] lg:h-[280px] overflow-hidden">
                <img
                  className="w-full "
                  src={require("../IMAGE/green.jpg")}
                  alt="Background"
                />
              </div>
              <div class="pt-5 px-3 text-center">
                <h3>
                  {/* FIXME <a>加網址連結 */}
                  <a
                    class="font-semibold
                        text-dark text-xl
                        sm:text-[22px]
                        md:text-xl
                        lg:text-[22px]
                        xl:text-xl
                        2xl:text-[22px]
                        mb-4
                        block"
                  >
                    綠綠的蛋糕
                  </a>
                </h3>
                <div className="flex justify-between mt-2">
                  <div>
                    <p class="text-base text-body-color leading-relaxed mb-3">
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
          <div class="w-full md:w-1/2 xl:w-1/4 px-4">
            <div class="bg-white rounded-lg overflow-hidden mb-10">
              <div className="w-full  max-h-[250px] lg:h-[280px] overflow-hidden">
                <img
                  className="w-full "
                  src={require("../IMAGE/green.jpg")}
                  alt="Background"
                />
              </div>
              <div class="pt-5 px-3 text-center">
                <h3>
                  <a
                    class="
                        font-semibold
                        text-dark text-xl
                        sm:text-[22px]
                        md:text-xl
                        lg:text-[22px]
                        xl:text-xl
                        2xl:text-[22px]
                        mb-4
                        block
                        
                        "
                  >
                    綠綠的蛋糕
                  </a>
                </h3>
                <div className="flex justify-between mt-2">
                  <div>
                    <p class="text-base text-body-color leading-relaxed mb-3">
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
          <div class="w-full md:w-1/2 xl:w-1/4 px-4">
            <div class="bg-white rounded-lg overflow-hidden mb-10">
              <div className="w-full  max-h-[250px] lg:h-[280px] overflow-hidden">
                <img
                  className="w-full "
                  src={require("../IMAGE/green.jpg")}
                  alt="Background"
                />
              </div>
              <div class="pt-5 px-3 text-center">
                <h3>
                  <a
                    class="
                        font-semibold
                        text-dark text-xl
                        sm:text-[22px]
                        md:text-xl
                        lg:text-[22px]
                        xl:text-xl
                        2xl:text-[22px]
                        mb-4
                        block
                      
                        "
                  >
                    綠綠的蛋糕
                  </a>
                </h3>
                <div className="flex justify-between mt-2">
                  <div>
                    <p class="text-base text-body-color leading-relaxed mb-3">
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
          <div class="w-full md:w-1/2 xl:w-1/4 px-4">
            <div class="bg-white rounded-lg overflow-hidden mb-10">
              <div className="w-full  max-h-[250px] lg:h-[280px] overflow-hidden">
                <img
                  className="w-full "
                  src={require("../IMAGE/green.jpg")}
                  alt="Background"
                />
              </div>
              <div class="pt-5 px-3 text-center">
                <h3>
                  <a
                    class="
                        font-semibold
                        text-dark text-xl
                        sm:text-[22px]
                        md:text-xl
                        lg:text-[22px]
                        xl:text-xl
                        2xl:text-[22px]
                        mb-4
                        block
                        
                        "
                  >
                    綠綠的蛋糕
                  </a>
                </h3>
                <div className="flex justify-between mt-2">
                  <div>
                    <p class="text-base text-body-color leading-relaxed mb-3">
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
