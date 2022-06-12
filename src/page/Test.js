import React from "react";
import { userLinkGoogle, userLogout } from "../utils/auth/";
import { useMultiInput, useLoading } from "../utils/hooks/";

const Test = () => {
  const [WhileLoad, runLoad] = useLoading();

  const [Inputs, allRef] = useMultiInput(["name", "acount", "password"]);

  return (
    <>
      {/* useMultiInput */}
      <Inputs.Acount className=" bg-primary" />
      <br />
      <Inputs.Password className=" bg-primary" />
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
        loading={<button className=" animate-pulse">Loading</button>}
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
    </>
  );
};

export default Test;
