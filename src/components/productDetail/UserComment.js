import React from "react";
import { AiOutlineStar } from "react-icons/ai";
const UserComment = () => {

  return (
    <div className="flex justify-center py-4 md:justify-start md:border-b-2">
      <div className="overflow-hidden border-2 rounded-full md:mr-8 mr-14 bg-theme w-14">
        <img
        src={process.env.PUBLIC_URL + "/images/productDetail/user 1.png"}
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
        <p className="p">!!</p>
      </div>
    </div>
  );
};

export default UserComment;
