import { React, useState, useEffect } from "react";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import axios from "axios";
import { API_URL } from "../../utils/config";
import { useParams } from "react-router-dom";

const UserComment = () => {
  const { id } = useParams();
  const [comment, setComment] = useState([]);
  useEffect(() => {
    let getComment = async () => {
      let response = await axios.get(
        `${API_URL}/product/comment/product/${id}`
      );
      setComment(response.data);
      console.log(response.data);
    };
    getComment();
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
      {comment.length == 0 ? (
        <>
          <h1 className="pt-10 text-center h1">目前尚無評價</h1>
        </>
      ) : (
        comment.map((comment, i) => {
          const { id, user_id, content, score } = comment;
          return (
            <>
              <div className="flex justify-center py-4 md:justify-start md:border-b-2">
                <div className="overflow-hidden border-2 rounded-full md:mr-8 mr-14 bg-theme w-14">
                  <img src="/images/productDetail/user 1.png" alt="" />
                </div>

                <div>
                  <div className="flex mb-2">{stars(score)}</div>
                  <p className="p">{content}</p>
                </div>
              </div>
            </>
          );
        })
      )}
    </>
  );
};

export default UserComment;
