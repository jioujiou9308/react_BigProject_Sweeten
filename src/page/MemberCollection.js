import React, { useState } from "react";
import MemberCollectionBar from "../components/memberCollection/MemberCollectionBar";
import MemberSearchBar from "../components/memberCollection/MemberSearchBar";
import {
  AiFillHeart,
  AiOutlineStar,
  AiFillStar,
  AiOutlineShoppingCart,
  AiOutlineDelete,
} from "react-icons/ai";
import { Button } from "@material-tailwind/react";
import UserCommentCard from "../components/memberCollection/UserCommentCard";

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
    score: "-",
  },
  {
    id: 3,
    name: "大麻蛋糕",
    img: `${process.env.PUBLIC_URL}/images/memberCollectionAndOrder/member_order3.png`,
    price: 750,
    score: 2,
  },
];

//生成評價星星
const star = (score) => {
  const arr = [];
  for (let i = 0; i < 5; i++) {
    if (i < score) {
      arr.push(<AiFillStar className="icon-sm" />);
    } else {
      arr.push(<AiOutlineStar className="icon-sm" />);
    }
  }
  return arr;
};

const MemberColloction = () => {
  const [isOn, setIsOn] = useState(1);
  return (
    <>
      <div className="mx-2 md:mx-0 ">
        <div className="">
          <MemberCollectionBar isOn={isOn} setIsOn={setIsOn} />
        </div>
        <div className="my-6">
          <MemberSearchBar />
        </div>
        <div className="pt-8 bg-white md:pt-0 md:px-10">
          <h2 className="hidden py-2 border-b h2 md:block">
            {isOn == 1 ? "我的收藏" : "商品評論"}
          </h2>

          {isOn == 1 &&
            products.map((product, i) => {
              const { id, name, img, price, score } = product;
              return (
                <>
                  {/* 圖片 備註 評分愛心 1*/}
                  <div className="flex items-center justify-around px-0 py-1 border-b md:py-6 md:px-8">
                    <div className="overflow-hidden ">
                      <img className="" src={img} alt="" />
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
                      <p className="note">
                        {score == "-" ? "尚未評價" : "評價"}
                      </p>
                      <h2 className="my-2 h3">{score}/5</h2>
                      <div className="flex">{star(score)}</div>
                    </div>

                    {/* 移除&購買 */}
                    <div className="flex-col ml-4 ">
                      <Button
                        size="sm"
                        className="flex items-center mb-3 rounded-sm md:p bg-warning"
                      >
                        立即購買 <AiOutlineShoppingCart className="icon-sm" />
                      </Button>

                      <Button
                        size="sm"
                        color="amber"
                        variant="outlined"
                        className="rounded-sm md:p"
                      >
                        <span className="flex items-center ">
                          移除收藏 <AiOutlineDelete className="icon-sm" />
                        </span>{" "}
                      </Button>
                    </div>
                  </div>
                </>
              );
            })}
        </div>
        {isOn == 2 && <UserCommentCard />}
      </div>
    </>
  );
};

export default MemberColloction;
