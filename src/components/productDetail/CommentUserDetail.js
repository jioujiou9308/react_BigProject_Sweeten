import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_URL } from "../../utils/config";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

function CommentUserDetail(props) {
  const { user_id, content, score } = props;
  const [user, setUser] = useState([]);

  useEffect(() => {
    let getUser = async () => {
      let res = await axios.get(API_URL + `/user/${user_id}`);
      setUser(res.data);
      console.log("user", res.data);
    };
    getUser();
  }, []);

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

  return (
    <>
      <div className="flex justify-center py-4 md:ml-10 md:justify-start md:border-b-2 ">
        <div className="flex items-center justify-center overflow-auto text-center text-white rounded-full h-11 w-14 p md:h3 md:mr-8 mr-14 bg-theme md:w-14 md:h-14 bg-secondary">
          {user[0]?.email?.slice(0, 1).toUpperCase()}
        </div>

        <div className="w-4/5 ">
          <div className="flex mb-2">{stars(score)}</div>
          <p className="p">{content}</p>
        </div>
      </div>
    </>
  );
}

export default CommentUserDetail;
