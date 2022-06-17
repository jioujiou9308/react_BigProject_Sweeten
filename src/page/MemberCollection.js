import React from "react";
import Member_collection_bar from "../components/memberCollection/Member_collection_bar";
import Member_search_bar from "../components/memberCollection/Member_search_bar";
import { AiFillHeart, AiOutlineStar } from "react-icons/ai";
// FIXME 這裡要用大駝峰
const Member_colloction = () => {
  // 假資料
  const products = [
    {
      id: 1,
      name: "標哥千層蛋糕",
      img: `${process.env.PUBLIC_URL}/images/memberCollectionAndOrder/member_order1.png`,
      price: 500,
      score: 4,
    },
    {
      id: 2,
      name: "蜂蜜蛋糕",
      img: `${process.env.PUBLIC_URL}/images/memberCollectionAndOrder/member_order2.png`,
      price: 500,
      score: 5,
    },
    {
      id: 3,
      name: "大麻蛋糕",
      img: `${process.env.PUBLIC_URL}/images/memberCollectionAndOrder/member_order3.png`,
      price: 750,
      score: 2,
    },
  ];
  return (
    <>
      <div className="mx-2 md:mx-0 ">
        <div className="mb-4 ">
          <Member_collection_bar />
        </div>
        <div className="mb-6">
          <Member_search_bar />
        </div>
        <div className="pt-8 bg-white md:pt-0 md:px-10">
          <h2 className="hidden py-2 border-b h2 md:block">我的收藏</h2>

          {products.map((product, i) => {
            const { id, name,img, price, score } = product;
            return (
              <>
                {/* 圖片 備註 評分愛心 1*/}
                <div className="flex items-center justify-around px-0 py-1 border-b md:py-6 md:px-8">
                  <div className="overflow-hidden ">
                    <img
                      className=""
                      src={img}
                      alt=""
                    />
                  </div>
                  {/* 商品價格活動 */}

                  <div className="mr-1 font-normal text-right md:ml-1 ">
                    <p className="mb-3 h4">商品</p>
                    <p className="mb-3 h4">價格</p>
                    <p className="md:hidden h4">活動</p>
                    <p className="hidden md:block h4">目前活動</p>
                  </div>

                  <div>
                    <p className="mb-3 p">{name}</p>
                    <p className="mb-3 p">{price}</p>
                    <button className="px-1 text-white p bg-warning">
                      母親節特賣
                    </button>
                  </div>

                  {/* 評分 */}
                  <div className="hidden text-center md:block mx-18 ">
                    <p className="note">尚未評價</p>
                    <h2 className="my-2 h3">{score}/5</h2>
                    <div className="flex ">
                      <AiOutlineStar className="w-6 h-6" />
                      <AiOutlineStar className="w-6 h-6" />
                      <AiOutlineStar className="w-6 h-6" />
                      <AiOutlineStar className="w-6 h-6" />
                      <AiOutlineStar className="w-6 h-6" />
                    </div>
                  </div>

                  {/* 愛心&購買 */}
                  <div className="ml-4 ">
                    <AiFillHeart className="mx-auto icon-xl text-secondary" />
                    <button className="p-1 mt-6 text-white md:px-5 md:py-2 bg-warning p">
                      立即購買
                    </button>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Member_colloction;
