import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../styles.css";

// import required modules
import { Pagination, Navigation } from "swiper";

//假資料們
const products = [
  {
    id: 1,
    name: "葡萄柚蛋糕",
    price: 500,
    img:
      process.env.PUBLIC_URL + "/images/productDetail/product_demo1_lower.png",
  },
  {
    id: 2,
    name: "柚蛋糕",
    price: 470,
    img:
      process.env.PUBLIC_URL + "/images/productDetail/product_demo1_lower.png",
  },
  {
    id: 3,
    name: "草莓蛋糕",
    price: 700,
    img:
      process.env.PUBLIC_URL + "/images/productDetail/product_demo1_lower.png",
  },
  {
    id: 4,
    name: "巧克力蛋糕",
    price: 300,
    img:
      process.env.PUBLIC_URL + "/images/productDetail/product_demo1_lower.png",
  },
];

//TODO 會被aside擋住，無法滿版
function YouMayLikeProduct() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {products.map((product, i) => {
          const { id, name, price, img } = product;
          return (
            <>
              <SwiperSlide>
                <div className="pb-12 ">
                  <div className="h-32 overflow-hidden w-36">
                    <img src={img} alt="" />
                  </div>
                  <div className="text-center w-36">
                    <p className="py-1 text-white p bg-secondary note-words">
                      加入購物車
                    </p>
                    <p className="p">{name}</p>
                    <p className="note">$ {price}</p>
                  </div>
                </div>
              </SwiperSlide>
            </>
          );
        })}
      </Swiper>
    </>
  );
}

export default YouMayLikeProduct;
