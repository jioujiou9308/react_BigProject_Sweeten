import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

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

function UserCommentCard() {
  return (
    <>
      <div className="flex flex-wrap justify-around px-10">
        {products.map((product, i) => {
          const { id, name, img, price, score } = product;
          return (
            <>
              <Card className="p-0 mt-6 rounded-sm w-60">
                <CardBody className="text-center">
                  <img
                    src={img}
                    alt="img-blur-shadow"
                    className="mx-auto mb-6 w-[200px]"
                  />{" "}
                  <span className=" h2">{name}</span>
                  <Typography>
                    <div className="flex items-center justify-center">
                      <span className="mr-2 h3"> {score}/5</span>
                      {star(score)}
                    </div>
                    {score == "-" ? (
                      <span>尚未評論</span>
                    ) : (
                      <span className="text-white">尚未評論</span>
                    )}
                  </Typography>
                </CardBody>
                <CardFooter
                  divider
                  className="flex items-center justify-between py-3"
                >
                  <Typography
                    variant="small"
                    color="grey"
                    className="flex gap-1"
                  >
                    <span className="note">150則評論</span>
                  </Typography>
                  <Button size="sm" className="rounded-sm bg-warning">
                    查看評論
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
