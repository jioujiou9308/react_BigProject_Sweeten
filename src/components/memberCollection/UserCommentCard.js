import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import { AiOutlineStar, AiOutlineRight } from "react-icons/ai";


function UserCommentCard() {
 
  return (
    <>
      <Card className="p-0 mt-6 rounded-sm w-60">
        
        <CardBody className="text-center">
         
           <img
            src={`${process.env.PUBLIC_URL}/images/memberCollectionAndOrder/member_order1.png`}
            alt="img-blur-shadow"
            className="mx-auto mb-6 w-[200px]"
          /> <span className="mb-2 h2">標哥千層蛋糕</span>
        
          <Typography>
           
           
            <div className="flex items-center justify-center">
             <span className="mr-2 h3"> 4/5</span>
              <AiOutlineStar className="icon"/>
              <AiOutlineStar className="icon" />
              <AiOutlineStar className="icon" />
              <AiOutlineStar className="icon" />
              <AiOutlineStar className="icon" />
            </div>
          </Typography>
        </CardBody>
        <CardFooter divider className="flex items-center justify-between py-3">
          <Typography variant="small" color="grey" className="flex gap-1">
            <span className="note">150則評論</span>
          </Typography>
          <Button size="sm" className="rounded-sm bg-warning">
            查看評論
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}

export default UserCommentCard;
