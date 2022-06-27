import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Input, Button } from "@material-tailwind/react";

const Signup = () => {
  // -------- 切換密碼眼睛開關 --------
  const [eye, setEye] = useState({
    passwordEye: false,
    confirmPasswordEye: false,
  });
  // --------眼睛：切換顯示/隱藏密碼函式--------
  function passwordShow() {
    setEye(
      eye.passwordEye
        ? { ...eye, passwordEye: false }
        : { ...eye, passwordEye: true }
    );
  }
  function confirmPasswordShow() {
    setEye(
      eye.confirmPasswordEye
        ? { ...eye, confirmPasswordEye: false }
        : { ...eye, confirmPasswordEye: true }
    );
  }

  return (
    <div className="flex flex-wrap bg-white rounded-lg w-full shadow-lg mx-auto">
      <div className=" md:block hidden md:w-1/2 bg-cover">
        <img
          className="object-cover w-full h-full rounded-r-lg"
          src={"/images/try/bg/bg2.jpg"}
          alt=""
        />
      </div>
      <div className="md:w-1/2 mx-auto p-4">
        <form method="POST" action="#">
          <h2 className="h3 font-normal text-center">註冊會員</h2>
          <Input
            id="name"
            type="text"
            name="name"
            label="姓名"
            color="grey"
            required
            className="mt-4 focus:outline-none focus:shadow-outline rounded py-2 px-4 block w-full appearance-none text-base"
          />
          <Input
            id="email"
            type="email"
            name="email"
            label="E-mail"
            color="grey"
            required
            className="mt-4 focus:outline-none focus:shadow-outline border rounded py-2 px-4 block w-full appearance-none text-base"
          />
          <Input
            id="phone"
            type="tel"
            name="phone"
            label="手機號碼"
            color="grey"
            className="mt-4 focus:outline-none focus:shadow-outline border rounded py-2 px-4 block w-full appearance-none text-base"
          />
          <div className="relative">
            <Input
              id="password"
              type={eye.passwordEye ? "text" : "password"}
              name="password"
              color="grey"
              label="密碼"
              required
              className="mt-4 focus:outline-none focus:shadow-outline border rounded py-2 px-4 block w-full appearance-none text-base"
            />
            <div className=" absolute right-2 top-3" onClick={passwordShow}>
              {eye.passwordEye ? (
                <FiEye className="eye" />
              ) : (
                <FiEyeOff className="eye" />
              )}
            </div>
          </div>
          <div className="relative">
            <Input
              id="confirmPassword"
              type="password"
              name="confirmPassword"
              color="grey"
              label="確認密碼"
              required
              className="mt-4 focus:outline-none focus:shadow-outline border rounded py-2 px-4 block w-full appearance-none text-base"
            />
            <div
              className=" absolute right-2 top-3"
              onClick={confirmPasswordShow}
            >
              {eye.confirmPasswordEye ? (
                <FiEye className="eye" />
              ) : (
                <FiEyeOff className="eye" />
              )}
            </div>
          </div>
          <div className="text-center mt-8">
            <Button
              className="text-center bg-dark text-white font-normal py-2 px-4"
              type="submit"
              color="brown"
            >
              註冊
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
