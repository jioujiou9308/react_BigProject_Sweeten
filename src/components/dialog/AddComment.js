import React, { useEffect, useState } from "react";
import { Textarea, Input } from "@material-tailwind/react";
import axios from "axios";
import { API_URL } from "../../utils/config";
import { useUserState } from "../../utils/redux/hooks-redux";
import { comment } from "postcss";
import { Button } from "@material-tailwind/react";

function AddComment({ order }) {
  const [currentUser] = useUserState();
  const [myComment, setMyComment] = useState([]);
  const [scoreInput, setScoreInput] = useState("");
  const [contentInput, setContentInput] = useState("");
  console.log("order", order);

  useEffect(() => {
    let getMyComment = async () => {
      let response = await axios.get(
        API_URL + `/user/comment/${currentUser.id}`
      );
      setMyComment(response.data);
      console.log("mycomment", response.data);
    };
    getMyComment();
  }, []);
  return (
    <>
      {order.map((v, i) => {
        return (
          <>
            <div
              className="flex justify-between w-full p-2 mb-2 border border-line"
              // data-aos="fade-down"
              // data-aos-easing="ease-in-out"
              // data-aos-duration="500"
            >
              {/* 商品價格數量 */}
              <div className="flex justify-between w-full">
                <div className="flex justify-start ">
                  <div className="mr-2 overflow-hidden">
                    <img
                      className="scale-105 "
                      src={`${process.env.PUBLIC_URL}/images/memberCollectionAndOrder/member_order1.png`}
                      alt=""
                    />
                  </div>

                  <div className="mx-3 p">
                    <p>商品</p>

                    <p className="my-2">分數</p>
                    <p>評論</p>
                  </div>

                  <div className="p">
                    <p className="mb-1">{v.name}</p>
                    <Input
                      variant="outlined"
                      label="請輸入分數"
                      type="number"
                      className=""
                      min={1}
                      max={5}
                      color="amber"
                      value={scoreInput}
                      onChange={(e)=>{
                        setScoreInput(e.target.value)
                        
                      }}
                    />

                    <Textarea
                      variant="outlined"
                      label="請輸入評論..."
                      color="amber"
                      className="rounded-sm"
                      value={contentInput}
                      onChange={(e)=>{
                        setContentInput(e.target.value)
                        // console.log(e.target.value)
                      }}
                    />
                  </div>
                </div>
                <div>
                  <Button
                    size="sm"
                    className="rounded-sm translate-y-36 bg-warning"
                    onClick={async () => {
                      await axios.post(API_URL + "/user/comment", {
                        user_id: currentUser.id,
                        product_id: order[i].product_id,
                        score: scoreInput ,
                        content:contentInput ,
                      });
                      setContentInput('')
                      setScoreInput('')
                    }}
                  >
                    提交評論
                  </Button>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}

export default AddComment;
