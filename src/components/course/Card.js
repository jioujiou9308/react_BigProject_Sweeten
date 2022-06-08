import React from "react";
import {
  AiOutlineMessage,
  AiOutlineShoppingCart,
  AiOutlineHeart,
} from "react-icons/ai";
{
  /* <div className="flex justify-between">
                <div>
                  <p class="text-base text-body-color leading-relaxed mb-7">
                    售價:1000
                  </p>
                </div>
                <div className="flex">
                  <AiOutlineMessage className="w-[20px] h-[20px]" />
                  <AiOutlineShoppingCart className="w-[20px] h-[20px]" />
                  <AiOutlineHeart className="w-[20px] h-[20px]" />
                </div>
              </div> */
}

const Card = () => {
  return (
    <section class=" ">
      <div class="container">
        <div class="flex flex-wrap -mx-4">
          <div class="w-full md:w-1/2 xl:w-1/4 px-4">
            <div class="bg-white rounded-lg overflow-hidden mb-10">
              <div className="w-full lg:max-w-[280px] max-h-[250px] lg:h-[280px] overflow-hidden">
                <img
                  className="w-full "
                  src={require("../IMAGE/green.jpg")}
                  alt="Background"
                />
              </div>
              <div class="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
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
                        hover:text-primary
                        "
                  >
                    綠綠的蛋糕
                  </a>
                </h3>
                <p class="text-base text-body-color leading-relaxed mb-7">
                  Lorem ipsum dolor sit amet pretium consectetur adipiscing
                  elit. Lorem consectetur adipiscing elit.
                </p>
              </div>
            </div>
          </div>
          <div class="w-full md:w-1/2 xl:w-1/4 px-4">
            <div class="bg-white rounded-lg overflow-hidden mb-10">
              <img
                className="w-[280px] h-[280px]"
                src={require("../IMAGE/green.jpg")}
                alt="Background"
              />
              <div class="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
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
                        hover:text-primary
                        "
                  >
                    綠綠的蛋糕
                  </a>
                </h3>
                <p class="text-base text-body-color leading-relaxed mb-7">
                  Lorem ipsum dolor sit amet pretium consectetur adipiscing
                  elit. Lorem consectetur adipiscing elit.
                </p>
              </div>
            </div>
          </div>
          <div class="w-full md:w-1/2 xl:w-1/4 px-4">
            <div class="bg-white rounded-lg overflow-hidden mb-10">
              <img
                src="https://cdn.tailgrids.com/1.0/assets/images/cards/card-01/image-02.jpg"
                alt="image"
                class="w-full"
              />
              <div class="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                <h3>
                  <a
                    href="javascript:void(0)"
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
                        hover:text-primary
                        "
                  >
                    The ultimate UX and UI guide to card design
                  </a>
                </h3>
                <p class="text-base text-body-color leading-relaxed mb-7">
                  Lorem ipsum dolor sit amet pretium consectetur adipiscing
                  elit. Lorem consectetur adipiscing elit.
                </p>
                <a
                  href="javascript:void(0)"
                  class="
                     inline-block
                     py-2
                     px-7
                     border border-[#E5E7EB]
                     rounded-full
                     text-base text-body-color
                     font-medium
                     hover:border-primary hover:bg-primary hover:text-white
                     transition
                     "
                >
                  View Details
                </a>
              </div>
            </div>
          </div>
          <div class="w-full md:w-1/2 xl:w-1/4 px-4">
            <div class="bg-white rounded-lg overflow-hidden mb-10">
              <img
                src="https://cdn.tailgrids.com/1.0/assets/images/cards/card-01/image-03.jpg"
                alt="image"
                class="w-full"
              />
              <div class="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                <h3>
                  <a
                    href="javascript:void(0)"
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
                        hover:text-primary
                        "
                  >
                    Creative Card Component designs graphic elements
                  </a>
                </h3>
                <p class="text-base text-body-color leading-relaxed mb-7">
                  Lorem ipsum dolor sit amet pretium consectetur adipiscing
                  elit. Lorem consectetur adipiscing elit.
                </p>
                <a
                  href="javascript:void(0)"
                  class="
                     inline-block
                     py-2
                     px-7
                     border border-[#E5E7EB]
                     rounded-full
                     text-base text-body-color
                     font-medium
                     hover:border-primary hover:bg-primary hover:text-white
                     transition
                     "
                >
                  View Details
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
