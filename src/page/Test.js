import React from "react";
import { useLoading } from "../utils/hooks/hooks";
import { userLinkGoogle, userLogout } from "../utils/firebase";
import useMultiInput from "../utils/hooks/useMultiInput";

const Test = () => {
  const [WhileLoad, runLoad] = useLoading();

  const [components, allRef] = useMultiInput(["name", "acount", "password"]);
  const { Acount, Password } = components;

  return (
    <>
      {/* // useMultiInput */}
      <Acount className=" bg-primary" />
      <br />
      <Password className=" bg-primary" />
      <br />
      <button
        onClick={() => {
          console.log(allRef.current);
          console.log(allRef.get());
          allRef.clear();
        }}
      >
        get
      </button>
      <br />

      {/* // firebase auth */}
      <WhileLoad
        onLoad={<button className=" animate-pulse">Loading</button>}
        doneLoad={
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
    </>
  );
};

export default Test;
