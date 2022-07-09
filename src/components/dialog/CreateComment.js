import React, { useEffect, useState } from "react";
import { Textarea, Input } from "@material-tailwind/react";
import axios from "axios";
import { API_URL } from "../../utils/config";
import { useUserState } from "../../utils/redux/hooks-redux";
import { comment } from "postcss";
import { Button } from "@material-tailwind/react";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { toast } from "react-toastify";

function CreateComment({ order, v, i }) {
  const [currentUser] = useUserState();
  const [myComment, setMyComment] = useState([]);
  //   const [scoreInput, setScoreInput] = useState("");
  const [contentInput, setContentInput] = useState("");
  const [star, setStar] = useState(0);
  console.log("v", v);
  //定義抓commentㄉfunc
  let getMyComment = async () => {
    let response = await axios.get(API_URL + `/user/comment/${currentUser.id}`);
    setMyComment(response.data);
    console.log("mycomment", response.data);
  };

  //生成星星ㄉfunc
  const getStar = (n) => {
    let result = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= n) {
        result.push(
          <AiFillStar
            className="cursor-pointer"
            onClick={() => {
              //   console.log("fill " + i);
              setStar(i);
            }}
          />
        );
      } else {
        result.push(
          <AiOutlineStar
            className="cursor-pointer"
            onClick={() => {
              //   console.log("Outline " + i);
              setStar(i);
            }}
          />
        );
      }
    }
    return result;
  };

  useEffect(() => {
    getMyComment();
  }, []);

  //提交評論按鈕
  const commentHandler = async (e) => {
    if (contentInput === "" || star === 0) {
      toast.info("分數或評論未填寫");
      e.preventDefault();
    } else {
      await axios.post(API_URL + "/user/comment", {
        user_id: currentUser.id,
        product_id: order[i].product_id,
        score: star,
        content: contentInput,
      });
      toast.success("評論成功");
      getMyComment();
      setContentInput("");
      setStar(0);
    }
  };

  console.log(currentUser.id, order[i].product_id, star, contentInput);
  return (
    <>
      {/* 桌機板 */}
      <div
        className="justify-between hidden w-full p-2 mb-2 border md:flex border-line"
        // data-aos="fade-down"
        // data-aos-easing="ease-in-out"
        // data-aos-duration="500"
      >
        {/* 商品價格數量 */}
        <div className="flex justify-between w-full">
          <div className="flex justify-start ">
            <div className="mr-2 overflow-hidden w-[120px]">
              <img
                className="object-contain "
                src={`http://localhost:8001/public/product/${v.product_id}.jpg`}
                alt="product"
              />
            </div>

            <div className=" md:mx-3 md:p">
              <p>商品</p>
              <p className="my-2">分數</p>
              <p>評論</p>
            </div>

            <div className="md:p">
              <p className="">{v.name}</p>

              {myComment.findIndex(
                (item) => parseInt(item.id) === parseInt(v.product_id)
              ) === -1 ? (
                <>
                  {/* score input */}
                  <div className="flex items-center my-2">
                    {/* <Input
                      variant="outlined"
                      label="請輸入分數"
                      type="number"
                      min={1}
                      max={5}
                      color="amber"
                      value={scoreInput}
                      onChange={(e) => {
                          setScoreInput(e.target.value);
                      }}
                    /> */}
                    <div className="flex mr-3">{getStar(star)}</div>
                    <div>{star}/5</div>
                  </div>
                  {/* 評論textarea */}
                  <div>
                    <Textarea
                      variant="outlined"
                      label="請輸入評論..."
                      color="amber"
                      className="rounded-sm"
                      value={contentInput}
                      maxLength={200}
                      minLength={20}
                      onChange={(e) => {
                        setContentInput(e.target.value);
                        //   console.log(e.target.value)
                      }}
                    />
                  </div>
                </>
              ) : (
                <>
                  {/* 評論過ㄉ分數 */}

                  <div className="flex items-center my-2">
                    {/* 星星 */}
                    <div className="flex mr-3">
                      {getStar(
                        myComment[
                          myComment.findIndex(
                            (item) =>
                              parseInt(item.id) === parseInt(v.product_id)
                          )
                        ].score
                      )}
                    </div>
                    {/* 分數 */}
                    <div>
                      {
                        myComment[
                          myComment.findIndex(
                            (item) =>
                              parseInt(item.id) === parseInt(v.product_id)
                          )
                        ].score
                      }
                      /5
                    </div>
                  </div>

                  {/* 評論過ㄉ評論 */}
                  <div>
                    {
                      myComment[
                        myComment.findIndex(
                          (item) => parseInt(item.id) === parseInt(v.product_id)
                        )
                      ].content
                    }
                  </div>
                </>
              )}
            </div>
          </div>
          <div>
            {myComment.findIndex(
              (item) => parseInt(item.id) === parseInt(v.product_id)
            ) === -1 ? (
              <>
                <Button
                  size="sm"
                  className="rounded-sm translate-y-36 bg-warning"
                  onClick={commentHandler}
                >
                  提交評論
                </Button>
              </>
            ) : (
              <>您已評論過</>
            )}
          </div>
        </div>
      </div>

      {/* 手機板 */}

      <div className="w-full p-2 mb-2 border border-line md:hidden">
        <div className="flex justify-around p">
          <div className="w-[80px] ">
            <img
              className="object-contain "
              src={`http://localhost:8001/public/product/${v.product_id}.jpg`}
              alt="product"
            />
          </div>

          <div className="flex flex-col justify-center">
            <div className="flex ">
              <div className="mr-2">
                <p>商品</p>
              </div>
              <div>
                <p>{v.name}</p>
              </div>
            </div>

            <div className="flex">
              <div className="mr-2">
                <p>數量</p>
              </div>
              <div>
                <p>{v.memo}</p>
              </div>
            </div>
          </div>
        </div>
        {/* 評論 */}
        <div className="px-5">
          {myComment.findIndex(
            (item) => parseInt(item.id) === parseInt(v.product_id)
          ) === -1 ? (
            <>
              {/* score input */}
              <div className="flex items-center my-2">
                {/* <Input
                      variant="outlined"
                      label="請輸入分數"
                      type="number"
                      min={1}
                      max={5}
                      color="amber"
                      value={scoreInput}
                      onChange={(e) => {
                          setScoreInput(e.target.value);
                      }}
                    /> */}
                <div className="flex mr-3">{getStar(star)}</div>
                <div>{star}/5</div>
              </div>
              {/* 評論textarea */}
              <div>
                <Textarea
                  variant="outlined"
                  label="請輸入評論..."
                  color="amber"
                  className="rounded-sm"
                  value={contentInput}
                  maxLength={200}
                  minLength={20}
                  onChange={(e) => {
                    setContentInput(e.target.value);
                    //   console.log(e.target.value)
                  }}
                />
              </div>
            </>
          ) : (
            <>
              {/* 評論過ㄉ分數 */}

              <div className="flex items-center my-2">
                {/* 星星 */}
                <div className="flex mr-3">
                  {getStar(
                    myComment[
                      myComment.findIndex(
                        (item) => parseInt(item.id) === parseInt(v.product_id)
                      )
                    ].score
                  )}
                </div>
                {/* 分數 */}
                <div>
                  {
                    myComment[
                      myComment.findIndex(
                        (item) => parseInt(item.id) === parseInt(v.product_id)
                      )
                    ].score
                  }
                  /5
                </div>
              </div>

              {/* 評論過ㄉ評論 */}
              <div>
                {
                  myComment[
                    myComment.findIndex(
                      (item) => parseInt(item.id) === parseInt(v.product_id)
                    )
                  ].content
                }
              </div>
            </>
          )}
        </div>

        {/* 按鈕 */}
        <div className="my-2 text-center">
          {myComment.findIndex(
            (item) => parseInt(item.id) === parseInt(v.product_id)
          ) === -1 ? (
            <>
              <Button
                size="sm"
                className="px-10 rounded-sm bg-warning"
                onClick={commentHandler}
              >
                提交評論
              </Button>
            </>
          ) : (
            <>
              <p className="translate-x-24 translate-y-2 ">您已評論過</p>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default CreateComment;
