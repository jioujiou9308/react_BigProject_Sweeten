import React, { useState } from "react";
import { userLinkGoogle, userLogout, userLogin, auth } from "../utils/auth/";
import { useMultiInput, useLoading } from "../utils/hooks/";
import axios from "axios";
import { API_URL } from "../utils/config";
import { AiFillPlusCircle } from "react-icons/ai";

const testUser = {
  name: "test",
  email: "testtest@gmail.com",
  password: "testtest",
};

const Test = () => {
  const [WhileLoad, runLoad] = useLoading();
  const [Inputs, allRef] = useMultiInput(["name", "acount", "password"]);
  const [render, setRender] = useState("");
  return (
    <>
      {/* useMultiInput */}
      <Inputs.Acount className=" bg-primary" />
      <br />
      <Inputs.Password type="password" className=" bg-primary" />
      <br />
      <Inputs.Name className=" bg-primary" />
      <br />
      <button
        onClick={() => {
          // console.log("allRef.current");
          // console.log(allRef.current);
          console.log("allRef.get()");
          console.log(allRef.get());
          allRef.clear();
        }}
      >
        get
      </button>

      <br />
      {/* // firebase auth */}
      <WhileLoad
        loading={
          <button
            onClick={() => {
              runLoad(userLogout, 3000);
            }}
            className=" animate-pulse"
          >
            Loading
          </button>
        }
        done={
          <button
            onClick={() => {
              runLoad(userLogout, 3000);
            }}
          >
            logout
          </button>
        }
      />
      <br />
      <button onClick={userLinkGoogle}>login</button>
      <br />
      <button
        onClick={() => {
          axios
            .post(API_URL + "/auth/login", testUser, { withCredentials: true })
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err));
        }}
      >
        SIGNIN
      </button>
      <h1 className="h1">className name: h1 // slogan</h1>
      <h2 className="h2">className name: h2 // 頁面標題</h2>
      <h3 className="h3">className name: h3 // 文章標題</h3>
      <h4 className="h4">className name: h4 // 副標</h4>
      <p className="p">className name: p // 內文</p>
      <p className="note">className name: note //提醒</p>
      <p>{render}</p>
      <div className="flex">
        icon-sm
        <AiFillPlusCircle className="icon-sm" />
      </div>
      <div className="flex">
        icon
        <AiFillPlusCircle className="icon" />
      </div>
      <div className="flex">
        icon-lg
        <AiFillPlusCircle className="icon-lg" />
      </div>
      <div className="flex">
        icon-xl
        <AiFillPlusCircle className="icon-xl" />
      </div>
    </>
  );
};

export default Test;
