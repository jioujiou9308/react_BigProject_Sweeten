import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../styles.css";

// import required modules
import { Pagination, Navigation } from "swiper";
import { useNavigate } from "react-router-dom";

//假資料們
const products = [
  {
    id: 1,
    name: "葡萄柚蛋糕",
    price: 500,
    img:
    "http://localhost:8001/public/product/1657186358833.jpg",
  },
  {
    id: 2,
    name: "柚蛋糕",
    price: 470,
    img:
    "http://localhost:8001/public/product/1657186358833.jpg",
  },
  {
    id: 3,
    name: "草莓蛋糕",
    price: 700,
    img:
    "http://localhost:8001/public/product/1657186358833.jpg",
  },
  {
    id: 5,
    name: "巧克力蛋糕",
    price: 900,
    img:
    "http://localhost:8001/public/product/1657186358833.jpg",
  },
  {
    id: 6,
    name: "巧克力蛋糕",
    price: 300,
    img:
    "http://localhost:8001/public/product/1657186358833.jpg",
  },
 
  {
    id: 8,
    name: "巧克力蛋糕",
    price: 3100,
    img:
    "http://localhost:8001/public/product/1657186358833.jpg",
  },
  {
    id: 9,
    name: "巧克力蛋糕",
    price: 300,
    img:
    "http://localhost:8001/public/product/1657186358833.jpg",
  },
];


function YouMayLikeProduct() {
  const navigate = useNavigate()
  const [getThere, setGetThere]=useState(1)
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
        className="mySwiper "
      >
        {products.map((product, i) => {
          const { id, name, price, img } = product;
          return (
            <>
              <SwiperSlide className="bg-sub">
                <div className="">
                  <div className="overflow-hidden cursor-pointer h-36 w-44">
                    <img src={img} alt=""  onClick={()=>{
                      setGetThere(id)
                      navigate(`/main/product/${getThere}`);
                    }}/>
                  </div>
                 
                  <div className="text-center w-44">
                     <Link to ={`/main/product/${getThere}`} onClick={()=>{setGetThere(id)}}><p className="py-1 text-white cursor-pointer p bg-secondary note-words" >
                      查看商品
                    </p></Link>
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
