import React from "react";
import { Input, Button, Checkbox } from "@material-tailwind/react";
import { openLogin, openSignup } from "../../utils/redux/modalSlice";
import { useDispatch } from "react-redux/es/exports";

const Login = () => {
  const dispatch = useDispatch();
  const handleOpen = () => {
    dispatch(openSignup());
    dispatch(openLogin());
  };
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
            <form
              className="w-3/4 mx-auto form-horizontal"
              method="POST"
              action="#"
            >
              <div className="flex flex-col mt-4">
                <Input
                  id="email"
                  type="text"
                  className="flex-grow h-8 px-2 border rounded border-grey-400"
                  name="email"
                  label="email"
                />
              </div>
              <div className="flex flex-col mt-4">
                <Input
                  id="password"
                  type="password"
                  className="flex-grow h-8 px-2 border rounded border-grey-400"
                  name="password"
                  label="password"
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
                  type="submit"
                  className="px-4 py-2 text-sm font-semibold text-white bg-blue-500 rounded hover:bg-blue-700"
                >
                  Login
                </Button>
              </div>
            </form>
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
