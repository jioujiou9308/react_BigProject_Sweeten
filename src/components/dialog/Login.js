import React, { useRef } from "react";
import { Input, Button, Checkbox } from "@material-tailwind/react";
import { openLogin, openSignup } from "../../utils/redux/modalSlice";
import { updateUser } from "../../utils/redux/userSlice";
import { useDispatch } from "react-redux/es/exports";
import { API_URL } from "../../utils/config";
import { toast } from "react-toastify";
import axios from "axios";

const Login = () => {
  const dispatch = useDispatch();
  const inputRef = useRef([]);

  /* ------------------------------- toggle form ------------------------------ */
  const handleOpen = () => {
    dispatch(openSignup());
    dispatch(openLogin());
  };
  /* ---------------------------------- 會員登入 ---------------------------------- */
  const handleLogin = (e) => {
    e.preventDefault();
    const formKeys = ["email", "password"];
    const postBody = {};

    // make post data
    inputRef.current.forEach((node, i) => {
      const input = node.children[0];
      postBody[formKeys[i]] = input.value;
    });
    axios
      .post(API_URL + "/auth/login", postBody)
      .then((res) => {
        // 登入成功
        const { data: currentUser } = res;
        toast.success(`${currentUser.email} 登入成功!`);
        dispatch(updateUser(currentUser));
        dispatch(openLogin());
      })
      .catch((e) => {
        // 登入失敗
        console.log(e);
      });
  };
  // TODO 表單驗證 錯誤訊息

  return (
    <div
      className="block w-full bg-white rounded-lg shadow-lg sm:flex sm:mx-0"
      style={{ height: "500px" }}
    >
      {/* 輸入欄位 */}
      <div className="flex flex-col w-4/5 h-full p-4 mx-auto sm:w-3/5">
        <div className="flex flex-col justify-center flex-1 mb-8">
          <h1 className="text-4xl font-thin text-center">Welcome Back</h1>
          <div className="w-full mt-4">
            <div className="w-3/4 mx-auto form-horizontal">
              <div className="flex flex-col mt-4">
                <Input
                  id="email"
                  type="text"
                  className="flex-grow h-8 px-2 border rounded border-grey-400"
                  name="email"
                  label="email"
                  ref={(node) => (inputRef.current[0] = node)}
                />
              </div>
              <div className="flex flex-col mt-4">
                <Input
                  id="password"
                  type="password"
                  className="flex-grow h-8 px-2 border rounded border-grey-400"
                  name="password"
                  label="password"
                  ref={(node) => (inputRef.current[1] = node)}
                  required
                />
              </div>
              <div className="flex items-center mt-4">
                <Checkbox type="checkbox" name="remember" id="remember" />
                <label htmlFor="remember" className="text-sm text-grey-dark">
                  Remember Me
                </label>
              </div>
              <div className="flex flex-col mt-8">
                <Button
                  className="px-4 py-2 text-sm font-semibold text-white bg-blue-500 rounded hover:bg-blue-700"
                  onClick={handleLogin}
                >
                  Login
                </Button>
              </div>
            </div>
            <div className="mt-4 text-center">
              <p>
                <a
                  className="text-xs no-underline hover:underline text-blue-dark"
                  href="{{ route('password.request') }}"
                >
                  忘記帳密
                </a>
              </p>
              <p>
                <a
                  className="text-xs no-underline hover:underline text-blue-dark"
                  href="#1"
                  onClick={handleOpen}
                >
                  註冊用戶
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 照片 */}
      <div className="hidden h-full overflow-hidden sm:block">
        <img
          className="object-cover w-full h-full rounded-r-lg"
          src={process.env.PUBLIC_URL + "/images/login/cupcakes.jpg"}
          alt=""
        />
      </div>
    </div>
  );
};

export default Login;
