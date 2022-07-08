import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";

import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../styles.css";
import axios from 'axios';
import { API_URL } from "../../utils/config";

// import required modules
import { Pagination, Navigation } from "swiper";
import { useNavigate } from "react-router-dom";


function YouMayLikeProduct() {
  const navigate = useNavigate()
  const [product, setProduct] = useState([])
  
  useEffect(()=>{
     //抓所有商品(沒有分頁)
     axios
     .get(API_URL + "/product/all")
     .then(({ data }) => {
      setProduct(data.data);
      console.log(data.data)
     })
     .catch((e) => console.log(e));
  },[])
  
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
        {product?.filter((item)=>item.price<200)?.map((product, i) => {
          const { id, name, price} = product;
          return (
            <>
              <SwiperSlide className="bg-sub">
                <div className="">
                  <div className="overflow-hidden cursor-pointer h-36 w-44">
                    <img src={`http://localhost:8001/public/product/${id}.jpg`} alt="product" className="object-contain "/>
                  </div>
                 
                  <div className="text-center w-44">
                     <Link to ={`/main/product/${id}`} ><p className="py-1 text-white cursor-pointer p bg-secondary note-words" >
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
