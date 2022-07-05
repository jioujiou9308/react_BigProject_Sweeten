import React, { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import axios from "axios";
import { API_URL } from "../../utils/config";
import { useUserState } from "../../utils/redux/hooks-redux";
import { useNavigate } from "react-router-dom";

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

function UserCommentCard() {
  const [comment, setComment] = useState([]);
  const [currentUser] = useUserState();
  const navigate = useNavigate();

  let getComment = async () => {
    let response = await axios.get(API_URL + `/user/comment/${currentUser.id}`);
    setComment(response.data);
    console.log("comment", response.data);
  };

  useEffect(() => {
    getComment();
  }, []);

  return (
    <>
      <div className="flex flex-wrap justify-around px-10">
        {comment?.map((comment, i) => {
          const { id, product_name, score, product_id } = comment;
          return (
            <>
              <Card className="p-0 mt-6 rounded-sm w-60">
                <CardBody className="text-center">
                  <img
                    src="/images/memberCollectionAndOrder/member_order1.png"
                    alt="img-blur-shadow"
                    className="mx-auto mb-6 w-[200px]"
                  />
                  <span className=" h2">{product_name}</span>
                  <Typography>
                    <div className="flex items-center justify-center mt-3">
                      <span className="mr-2 h3"> {score}/5</span>
                      {star(score)}
                    </div>
                    {/* {score == "-" ? (
                      <span>尚未評論</span>
                    ) : (
                      <span className="text-white">尚未評論</span>
                    )} */}
                  </Typography>
                </CardBody>
                <CardFooter
                  divider
                  className="flex items-center justify-between px-5 py-3"
                >
                  <Button
                    size="sm"
                    className="rounded-sm bg-warning"
                    onClick={() => {
                      navigate(`/main/product/${id}`);
                    }}
                  >
                    查看所有評論
                  </Button>

                  <Button
                    size="sm"
                    color="amber"
                    variant="outlined"
                    className="bg-white rounded-sm "
                    onClick={async () => {
                      //NOTE 刪不掉 
                      await axios.delete(API_URL + `/product/comment/${id}`);
                      getComment();
                    }}
                  >
                    刪除評論
                  </Button>
                </CardFooter>
              </Card>
            </>
          );
        })}
      </div>
    </>
  );
}

export default UserCommentCard;
