import React, { useEffect, useState } from "react";
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
import { API_URL } from "../utils/config";
import axios from "axios";
import {
  useCartState,
  useFavoriteState,
  useUserState,
} from "../utils/redux/hooks-redux";
import { toast } from "react-toastify";
import { calcLength } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { clearConfigCache } from "prettier";

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
  const navigate = useNavigate();
  const [cart, setCart] = useCartState();
  const [isOn, setIsOn] = useState(1);
  const [memberCollection, setMemberCollection] = useFavoriteState();
  const [comment, setComment] = useState([]);
  const [currentUser] = useUserState();
  const [searchWord, setSearchWord] = useState("");
  console.log(currentUser);

  //讀取資料
  let getMemberCollection = async () => {
    let response = await axios.get(
      API_URL + `/user/favorite_product/all_data/${currentUser.id}`
    );
    setMemberCollection(response.data);
    console.log("喜歡ㄉ商品", response.data);
  };
  useEffect(() => {
    getMemberCollection();

    let getComment = async () => {
      let response = await axios.get(
        API_URL + `/user/comment/${currentUser.id}`
      );
      setComment(response.data);
      console.log("comment", response.data);
    };
    getComment();
  }, [currentUser]);

  return (
    <>
      <div className="mx-0 ">
        <div className="">
          <MemberCollectionBar isOn={isOn} setIsOn={setIsOn} />
        </div>
        <div className="my-6">
          <MemberSearchBar
            searchWord={searchWord}
            setSearchWord={setSearchWord}
          />
        </div>
        <div className="pt-8 bg-white md:pt-0 md:px-10">
          <h2 className="hidden py-2 border-b h2 md:block">
            {isOn == 1 ? "我的收藏" : "商品評論"}
          </h2>
          {/* 如果內容為空會顯示 */}
          {isOn == 1 && memberCollection.length == 0 && (
            <h1 className="mt-4 text-center h2">尚無項目</h1>
          )}
          {isOn != 1 && comment.length == 0 && (
            <h1 className="mt-4 text-center h2">尚無項目</h1>
          )}

          {isOn == 1 &&
            memberCollection
              .filter(
                (item) =>
                  item.name.includes(searchWord) || item.id.includes(searchWord)
              )
              .map((v, i) => {
                const { user_id, product_id, id, name, price } = v;
                return (
                  <>
                    {/* 圖片 備註 評分*/}
                    <div className="flex items-center justify-between px-0 py-1 border-b md:justify-around md:py-6 md:px-8">
                      <div className="overflow-hidden w-[70px] md:w-[140px]">
                        <img
                          className="object-contain rounded-sm"
                          src={`http://localhost:8001/public/product/${product_id}.jpg`}
                          alt="collection"
                        />
                      </div>
                      {/* 商品價格活動 */}

                      <div className="mr-1 font-normal text-right md:ml-1 ">
                        <p className="mb-3 md:h4">商品</p>
                        <p className="mb-3 md:h4">價格</p>
                        <p className="md:hidden ">活動</p>
                        <p className="hidden md:block h4">目前活動</p>
                      </div>

                      <div>
                        <p className="mb-3 md:p">{name}</p>
                        <p className="mb-3 md:p">{price}</p>
                        <button className="px-1 text-white md:p bg-warning">
                          母親節特賣
                        </button>
                      </div>
                      {/* 評分 */}
                      {/* 有評分score變數 */}
                      {comment?.findIndex(
                        (comment) => comment.id === product_id
                      ) > -1 ? (
                        <div className="hidden text-center md:block mx-18 ">
                          <p className="mb-1 mr-2 note">評價</p>
                          <h2 className=" h3">
                            {
                              comment.find(
                                (comment) => comment.id === product_id
                              ).score
                            }
                            /5
                          </h2>

                          <div className="flex">
                            {star(
                              comment.find(
                                (comment) => comment.id === product_id
                              ).score
                            )}
                          </div>
                        </div>
                      ) : (
                        <div className="hidden text-center md:block mx-18 ">
                          <p className="mr-2 note">尚未評價</p>
                          <h2 className=" h3">-/5</h2>
                          <div className="flex">{star(0)}</div>
                        </div>
                      )}
                      {/* 沒有評分 */}

                      {/* 移除&購買 */}
                      <div className="flex-col md:ml-4 ">
                        <Button
                          size="sm"
                          className="flex items-center px-2 mb-3 rounded-sm md:px-4 md:p bg-warning"
                          onClick={() => {
                            let productIndex = cart[1].findIndex(function (
                              data,
                              index
                            ) {
                              return data.name === name;
                            });
                            // console.log('productInx',productIndex);
                            if (productIndex > -1) {
                              let newCount = {
                                ...v,
                                count: cart[1][productIndex].count + 1,
                              };
                              let cartList = [...cart[1]];
                              cartList[productIndex] = newCount;
                              let newData = [cart[0], cartList];
                              setCart(newData);
                            } else {
                              let newCount = { ...v, count: 1 };
                              let cartList = [...cart[1], newCount];
                              let newData = [cart[0], cartList];
                              setCart(newData);
                            }
                            navigate("/main/cart");
                          }}
                        >
                          立即購買 <AiOutlineShoppingCart className="icon-sm" />
                        </Button>

                        <Button
                          size="sm"
                          color="amber"
                          variant="outlined"
                          className="px-2 rounded-sm md:p md:px-4"
                        >
                          <span
                            className="flex items-center "
                            onClick={async () => {
                              console.log(user_id);
                              let response = await axios.delete(
                                `${API_URL}/user/favorite_product/${user_id}?product_id=${product_id}`
                              );
                              // console.log(response);
                              toast.info("已移除收藏");
                              axios
                                .get(
                                  API_URL +
                                    `/user/favorite_product/all_data/${currentUser.id}`
                                )
                                .then(({ data }) => {
                                  setMemberCollection(data);
                                })
                                .catch((e) => console.log(e));
                            }}
                          >
                            移除收藏 <AiOutlineDelete className="icon-sm" />
                          </span>
                        </Button>
                      </div>
                    </div>
                  </>
                );
              })}
        </div>

        {isOn == 2 && <UserCommentCard isOn={isOn} setIsOn={setIsOn} searchWord={searchWord}/>}
      </div>
    </>
  );
};

export default MemberColloction;
