import React, { useEffect, useState } from "react";
import { Textarea, Input } from "@material-tailwind/react";
import axios from "axios";
import { API_URL } from "../../utils/config";
import { useUserState } from "../../utils/redux/hooks-redux";
import { comment } from "postcss";
import { Button } from "@material-tailwind/react";
import CreateComment from "./CreateComment";

function AddComment({ order }) {
  const [currentUser] = useUserState();
  
  console.log("order", order);

  
  return (
    <>
      {order.map((v, i) => {
        return (
          <>
           <CreateComment order={order} v={v} i={i}/>
          </>
        );
      })}
    </>
  );
}

export default AddComment;
