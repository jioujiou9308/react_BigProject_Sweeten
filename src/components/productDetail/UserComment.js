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
        `${API_URL}/product/comment/${id}`
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

  //生成字母
  const getLetter=()=>{
    let arr = ['A','B','C','S','G','W','K','P'];
    let letter = '';
    for(let i = 0; i <1;i++){
      letter+=arr[Math.floor(Math.random()*8)]
    }
    return letter
    
  }

  return (
    <>
      {comment.length == 0 ? (
        <>
          <h1 className="pt-10 text-center h1">目前尚無評價</h1>
        </>
      ) : (
        comment?.map((comment, i) => {
          const { id, user_id, content, score } = comment;
          return (
            <>
              <div className="flex justify-center py-4 md:ml-10 md:justify-start md:border-b-2">
                <div className="pt-2 overflow-hidden text-center border-2 rounded-full h3 md:mr-8 mr-14 bg-theme w-14">
                  {/* {(Math.random()*10).toFixed(0)} */}
                  {getLetter()}
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
