import React from "react";
import { useMultiInput } from "../utils/hooks/";
import { AiFillPlusCircle } from "react-icons/ai";

// const testUser = {
//   name: "test",
//   email: "testtest@gmail.com",
//   password: "testtest",
// };

const Test = () => {
  const [Inputs, allRef] = useMultiInput(["name", "acount", "password"]);
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

      <h1 className="h1">className name: h1 // slogan</h1>
      <h2 className="h2">className name: h2 // 頁面標題</h2>
      <h3 className="h3">className name: h3 // 文章標題</h3>
      <h4 className="h4">className name: h4 // 副標</h4>
      <p className="p">className name: p // 內文</p>
      <p className="note">className name: note //提醒</p>
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
