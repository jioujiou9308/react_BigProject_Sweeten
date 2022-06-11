import React from "react";
import { useInput, useLoading } from "../utils/hooks/hooks";
import { userLinkGoogle, userLogout } from "../utils/firebase";

const Test = () => {
  const [WhileLoad, runLoading] = useLoading();
  const [Acount, getAcount] = useInput();
  const [Password, getPassword] = useInput();
  const [Name, getName] = useInput();
  const [Gender, getGender] = useInput();
  const [Birth, getBirth] = useInput();

  return (
    <>
      <Name className="my-1 border bg-primary" placeholder="Name" />
      <br />
      <Acount className="my-1 border bg-primary" placeholder="Acount" />
      <br />
      <Password className="my-1 border bg-primary" placeholder="Password" />
      <br />
      <Gender className="my-1 border bg-primary" placeholder="Gender" />
      <br />
      <Birth className="my-1 border bg-primary" placeholder="Birth" />
      <br />
      <button
        onClick={() => {
          console.log(getAcount.value);
          console.log(getPassword.value);
          console.log(getName.value);
          console.log(getGender.value);
          console.log(getBirth.value);
        }}
      >
        Log
      </button>
      <br />
      <WhileLoad
        onLoad={<button className=" animate-pulse">Loading</button>}
        doneLoad={
          <button
            onClick={() => {
              runLoading(userLogout, 3000);
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
