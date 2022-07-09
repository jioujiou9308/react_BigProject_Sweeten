import { toast } from "react-toastify";
import React, { useEffect, useState } from "react";
import {
  AiFillHeart,
  AiFillPlusCircle,
  AiFillMinusCircle,
  AiOutlineStar,
  AiOutlineRight,
  AiFillStar,
} from "react-icons/ai";
import UserComment from "../components/productDetail/UserComment";
import YouMayLikeProduct from "../components/productDetail/YouMayLikeProduct";
import { Button } from "@material-tailwind/react";
//import material tailwind ㄉ button
import { API_URL } from "../utils/config";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import {
  useCartState,
  useFavoriteState,
  useUserState,
} from "../utils/redux/hooks-redux";

function ProductDetail() {
  const [clickCount, setClickCount] = useState(1);
  const [favProduct, setFavProduct] = useFavoriteState();
  const [productDetail, setProductDetail] = useState([]);
  const [comment, setComment] = useState([]);
  const [currentUser] = useUserState();
  const [cart, setCart] = useCartState();

  const { id } = useParams();
  const navigate = useNavigate();
  // console.log(id);

  let getFavProduct = async () => {
    let response = await axios.get(
      API_URL + `/user/favorite_product/all_data/${currentUser.id}`
    );
    setFavProduct(response.data);
    console.log("此用戶喜歡ㄉ商品", response.data);
  };

  useEffect(() => {
    //抓這個商品資料
    let getProductDetail = async () => {
      let response = await axios.get(`${API_URL}/product/${id}`);
      setProductDetail(response.data);
      console.log(response.data);
    };
    getProductDetail();
    //抓所有評論
    let getComment = async () => {
      console.log("fetch");
      let response = await axios.get(`${API_URL}/product/comment/${id}`);
      setComment(response.data);
      console.log("comment", response.data);
    };
    getComment();
    //看喜歡ㄉproduct有哪些

    getFavProduct();
  }, [id]);
  //抓此商品平均分數
  const averageScore = () => {
    let result = 0;
    for (let i = 0; i < comment.length; i++) {
      result += comment[i].score;
      result = Math.round(result / comment.length);
    }
    return result;
  };

  const isFavor = favProduct.filter((item) => item.product_id == id);

  //生成星星
  const stars = (score) => {
    let elementArr = [];
    for (let i = 0; i < 5; i++) {
      if (i < score) {
        elementArr.push(<AiFillStar className=" comment-star" />);
      } else {
        elementArr.push(<AiOutlineStar />);
      }
    }
    return elementArr;
  };
  // 加入最愛
  const favSwitchHandler = async () => {
    if (isFavor.length < 1) {
      //isFavor長度等於0要post

      await axios.post(API_URL + `/user/favorite_product`, {
        user_id: currentUser.id,
        product_id: id,
      });
      toast.success("已加入最愛");

      getFavProduct();
    } else {
      //isFavor長度大於0要delete

      await axios.delete(
        API_URL + `/user/favorite_product/${currentUser.id}?product_id=${id}`
      );
      toast.info("已從最愛移除");
      getFavProduct();
    }
  };

  return (
    <>
      {productDetail.map((v, i) => {
        const { id, name, price, description, express_id, created_at } = v;
        return (
          <>
            <div className="bg-white ">
              {/* 桌機板DEMO */}
              <div className="hidden md:flex">
                {/* demo大圖(左側)桌機板 */}
                <div className="w-2/5 mt-8 mr-16 ml-7">
                  <img
                    className="object-contain max-w-full mx-auto"
                    src={`http://localhost:8001/public/product/${id}.jpg`}
                    alt=""
                  />
                  {/* DEMO左側三張小圖 */}
                  <div className="flex justify-center w-1/2 mx-auto mt-14">
                    <img
                      className="w-1/3 mx-1"
                      src={`${process.env.PUBLIC_URL}/images/productDetail/product_demo1_upper_small.png`}
                      alt=""
                    />
                    <img
                      className="w-1/3 mx-1"
                      src={
                        process.env.PUBLIC_URL +
                        "/images/productDetail/product_demo2_upper_small.png"
                      }
                      alt=""
                    />
                    <img
                      className="w-1/3 mx-1"
                      src={
                        process.env.PUBLIC_URL +
                        "/images/productDetail/product_demo3_upper_small.png"
                      }
                      alt=""
                    />
                  </div>
                </div>
                {/* DEMO右欄 桌機板*/}
                <div className="w-3/5 mr-10">
                  {/* 桌機板標題和副標字體+愛心 */}

                  <div className="border-b-2 ">
                    <div className="flex items-center justify-between mt-10">
                      <p className="h1">{name}</p>
                      <Button
                        variant="outlined"
                        className="border rounded-full select-none border-line text-line"
                        onClick={() => {
                          currentUser.id != 0
                            ? favSwitchHandler()
                            : toast.info("請登入會員");
                        }}
                      >
                        <AiFillHeart
                          className={`icon-xl select-none rounded-full ${
                            isFavor.length > 0 ? "text-secondary" : ""
                          } 
                         
                          `}
                        />
                      </Button>
                    </div>
                    <p className="mt-2 mb-5 h2">$ {price} NTD</p>
                  </div>

                  {/* 右欄尺寸桌機板 */}
                  <p className="mt-4 mb-2 p">尺寸</p>
                  {/* 尺寸按鈕桌機板  小字尺寸*/}

                  <button className="px-1 mr-5 size-btn-desk bg-light">
                    6吋
                  </button>
                  <button className="px-1 size-btn-desk">8吋</button>

                  <p className="mt-5 p">商品參與的優惠活動</p>
                  <p className="w-24 mt-2 text-center p bg-primary">
                    父親節特惠
                  </p>

                  {/* 數量和結帳按鈕桌機板 */}
                  <div className="flex items-center justify-between mt-8">
                    <div className="flex">
                      <AiFillMinusCircle
                        className="cursor-pointer icon-lg text-secondary"
                        onClick={() => {
                          if (clickCount > 1) {
                            setClickCount(clickCount - 1);
                          }
                        }}
                      />
                      <p className="mx-3">{clickCount}</p>
                      <AiFillPlusCircle
                        className="cursor-pointer icon-lg text-secondary"
                        onClick={() => {
                          setClickCount(clickCount + 1);
                        }}
                      />
                    </div>

                    <div className="flex justify-center ">
                      <Button
                        className="border-2 rounded-none border-sub"
                        variant="outlined"
                        onClick={() => {
                          if (currentUser.id == 0) {
                            toast.info("請登入會員");
                          } else {
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
                                count: cart[1][productIndex].count + clickCount,
                              };
                              let cartList = [...cart[1]];
                              cartList[productIndex] = newCount;
                              let newData = [cart[0], cartList];
                              setCart(newData);
                            } else {
                              let newCount = { ...v, count: clickCount };
                              let cartList = [...cart[1], newCount];
                              let newData = [cart[0], cartList];
                              setCart(newData);
                            }
                            toast.success("已加入購物車");
                            setClickCount(1);
                          }
                        }}
                      >
                        <span className="text-black p">加入購物車</span>
                      </Button>

                      <Button
                        className="ml-3 text-white border-2 rounded-none border-warning bg-warning"
                        variant="filled"
                        onClick={() => {
                          if (currentUser.id === 0) {
                            toast.info("請登入會員");
                          } else {
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
                                count: cart[1][productIndex].count + clickCount,
                              };
                              let cartList = [...cart[1]];
                              cartList[productIndex] = newCount;
                              let newData = [cart[0], cartList];
                              setCart(newData);
                              navigate("/main/cart");
                            } else {
                              let newCount = { ...v, count: clickCount };
                              let cartList = [...cart[1], newCount];
                              let newData = [cart[0], cartList];
                              setCart(newData);
                              setClickCount(1);
                              navigate("/main/cart");
                            }
                          }
                        }}
                      >
                        <span className="p">立即購買</span>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              {/* 展示圖手機板 */}
              <div className="md:hidden">
                <img
                  className="max-w-full px-2 pt-10 mx-auto b-8 m"
                  src={`http://localhost:8001/public/product/${id}.jpg`}
                  alt=""
                />

                {/* 愛心圖示手機板 */}
                <div className="flex justify-end my-4">
                  <Button
                    variant="outlined"
                    className="mr-3 rounded-full select-none text-line border-line"
                    onClick={() => {
                      currentUser.id != 0
                        ? favSwitchHandler()
                        : toast.info("請登入會員");
                    }}
                  >
                    <AiFillHeart
                      className={`icon-xl select-none rounded-full  ${
                        isFavor.length > 0 ? "text-secondary" : ""
                      }`}
                    />
                  </Button>
                </div>

                {/* 標題+價錢手機板 */}
                <div className="flex items-center justify-between px-5">
                  {/* 手機板標題字體ㄉclassname */}
                  <p className="h3">{name}</p>
                  <p className="h3">$ {price} NTD</p>
                </div>

                {/* 數量加減手機板 */}
                <div className="flex items-center my-5 ml-5">
                  <AiFillMinusCircle
                    className="cursor-pointer icon-xl text-secondary"
                    onClick={() => {
                      if (clickCount > 1) {
                        setClickCount(clickCount - 1);
                      }
                    }}
                  />
                  <p className="mx-5">{clickCount}</p>
                  <AiFillPlusCircle
                    className="cursor-pointer icon-xl text-secondary"
                    onClick={() => {
                      setClickCount(clickCount + 1);
                    }}
                  />
                </div>
                {/* 尺寸手機板 */}
                <div className="flex items-center justify-start ml-6">
                  <p className="p">尺寸</p>

                  <button className="px-2 ml-5 size-btn-desk bg-sub">
                    6吋
                  </button>
                  <button className="px-2 ml-5 size-btn-desk ">8吋</button>
                </div>

                <h2 className="mx-5 my-5 p">商品參與的優惠活動</h2>
                <p className="mx-5 mt-2 text-center p w-28 bg-primary">
                  父親節特惠
                </p>

                {/* 加入購物車按鈕手機板 */}
                <div className="flex justify-around my-6">
                  <Button
                    className="px-4 py-1 border-2 rounded-none border-sub"
                    variant="outlined"
                    onClick={() => {
                      if (currentUser.id == 0) {
                        toast.info("請登入會員");
                      } else {
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
                            count: cart[1][productIndex].count + clickCount,
                          };
                          let cartList = [...cart[1]];
                          cartList[productIndex] = newCount;
                          let newData = [cart[0], cartList];
                          setCart(newData);
                        } else {
                          let newCount = { ...v, count: clickCount };
                          let cartList = [...cart[1], newCount];
                          let newData = [cart[0], cartList];
                          setCart(newData);
                        }
                        toast.success("已加入購物車");
                        setClickCount(1);
                      }
                    }}
                  >
                    <span className="text-black p">加入購物車</span>
                  </Button>

                  <Button
                    className="px-4 text-white border-2 rounded-none shadow-primary border-warning bg-warning"
                    variant="filled"
                    onClick={() => {
                      if (currentUser.id == 0) {
                        toast.info("請登入會員");
                      } else {
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
                            count: cart[1][productIndex].count + clickCount,
                          };
                          let cartList = [...cart[1]];
                          cartList[productIndex] = newCount;
                          let newData = [cart[0], cartList];
                          setCart(newData);
                        } else {
                          let newCount = { ...v, count: clickCount };
                          let cartList = [...cart[1], newCount];
                          let newData = [cart[0], cartList];
                          setCart(newData);
                        }
                        setClickCount(1);
                        navigate("/main/cart");
                      }
                    }}
                  >
                    <span className="p">立即購買</span>
                  </Button>
                  {/* <button className="px-8 py-2 border-2 p md:px-4 md:py-1 border-sub">
              加入購物車
            </button>
            <button className="px-8 text-white border-2 p md:px-6 border-warning bg-warning">
              立即購買
            </button> */}
                </div>
              </div>
              {/* 商品說明&評論區桌機板+手機板 */}

              <div className="mx-8 md:mt-16 md:flex">
                <div className="w-full md:w-2/5">
                  <div className="mb-4">
                    <h2 className=" h2 md:ml-0">商品說明：</h2>
                    <p className="text-justify p">
                      {description.split("。")[0]}。
                    </p>
                  </div>

                  <div className="mb-4">
                    <h2 className=" h2">成分：</h2>
                    <p className="text-justify p">
                      {description.split("。")[1]}。
                    </p>
                  </div>

                  <div>
                    <h2 className=" h2">過敏原：</h2>
                    <p className="text-justify p">
                      {description.split("。")[2]}。
                    </p>
                  </div>
                </div>

                <div className="overflow-auto md:px-10 md:w-3/5">
                  {/* 評論區 上半部*/}

                  <div className="flex justify-between w-full h-1/5">
                    <div className="flex items-center justify-between w-full md:justify-between my-7">
                      <div>
                        <h2 className="h2 md:ml-8">商品評論</h2>
                        <p className="md:hidden p">({comment.length}則評論)</p>
                      </div>

                      <div className="flex items-center">
                        {stars(averageScore())}
                        <p className="mx-3 p">{averageScore()}/5</p>
                        <p className="hidden md:block p">
                          ({comment.length}則評論)
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* 評論區 下半部使用者 */}
                  <div className="">
                    <UserComment />
                  </div>

                  <div className="flex items-center justify-start mt-4 mb-12 ml-8 text-secondary md:hidden ">
                    {/* <p className="p">查看全部</p> */}
                    {/* <AiOutlineRight /> */}
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}

      {/* 你可能也會喜歡 */}
      <div className="hidden mt-8 bg-sub md:block">
        <p className="pt-3 text-center h2">你可能也會喜歡</p>

        <YouMayLikeProduct />
      </div>
    </>
  );
}

export default ProductDetail;
