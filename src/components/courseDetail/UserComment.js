import React from "react";
import { AiOutlineStar } from "react-icons/ai";
const UserComment = () => {
  const comments = [
    {
      id:1,
      user_id:23,
      img:`${process.env.PUBLIC_URL}/images/productDetail/user 1.png`,
      content:"讚",
      score:4
    },
    {
      id:2,
      user_id:43,
      img:`${process.env.PUBLIC_URL}/images/productDetail/user 1.png`,
      content:"可可",
      score:1
    },
    {
      id:3,
      user_id:24,
      img:`${process.env.PUBLIC_URL}/images/productDetail/user 1.png`,
      content:"讚窩",
      score:3
    },
    {
      id:4,
      user_id:70,
      img:`${process.env.PUBLIC_URL}/images/productDetail/user 1.png`,
      content:"優",
      score:4
    },
  ];
  return (
<>
{comments.map((comment, i)=>{
  const {id, user_id, img, content, score}=comment;
  return (
    <>
    <div className="flex justify-center py-4 md:justify-start md:border-b-2">
      <div className="overflow-hidden border-2 rounded-full md:mr-8 mr-14 bg-theme w-14">
        <img
        src={img}
          alt=""
        />
      </div>

      <div>
        <div className="flex mb-2">
          <AiOutlineStar className=" comment-star" />
          <AiOutlineStar className="comment-star" />
          <AiOutlineStar className="comment-star" />
          <AiOutlineStar className="comment-star" />
          <AiOutlineStar className="comment-star" />
        </div>
        <p className="p">{content}</p>
      </div>
    </div>
    </>
  )
})}

  {/* <div className="flex justify-center py-4 md:justify-start md:border-b-2">
      <div className="overflow-hidden border-2 rounded-full md:mr-8 mr-14 bg-theme w-14">
        <img
        src={`${process.env.PUBLIC_URL}/images/productDetail/user 1.png`}
          alt=""
        />
      </div>

      <div>
        <div className="flex mb-2">
          <AiOutlineStar className=" comment-star" />
          <AiOutlineStar className="comment-star" />
          <AiOutlineStar className="comment-star" />
          <AiOutlineStar className="comment-star" />
          <AiOutlineStar className="comment-star" />
        </div>
        <p className="p">五星好評!</p>
      </div>
    </div> */}
</>
    
  );
};

export default UserComment;
