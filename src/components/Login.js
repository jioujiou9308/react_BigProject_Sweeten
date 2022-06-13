import React from "react";

const Login = () => {
  return (
    <div className="h-screen w-screen">
      <div className="flex flex-col items-center flex-1 h-full justify-center px-4 sm:px-0">
        <div
          className="sm:flex rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/2 bg-white sm:mx-0 justify-between"
          style={{ height: "500px" }}
        >
        
          {/* login surface */}
          <div className="flex flex-col w-3/5 p-4">
            <div className="flex flex-col flex-1 justify-center mb-8">
              <h1 className="text-4xl text-center font-thin">Welcome Back</h1>
              <div className="w-full mt-4">
                <form
                  className="form-horizontal w-3/4 mx-auto"
                  method="POST"
                  action="#"
                >
                  <div className="flex flex-col mt-4">
                    <input
                      id="email"
                      type="text"
                      className="flex-grow h-8 px-2 border rounded border-grey-400"
                      name="email"
                      value=""
                      placeholder="Email"
                    />
                  </div>
                  <div className="flex flex-col mt-4">
                    <input
                      id="password"
                      type="password"
                      className="flex-grow h-8 px-2 rounded border border-grey-400"
                      name="password"
                      required
                      placeholder="Password"
                    />
                  </div>
                  <div className="flex items-center mt-4">
                    <input
                      type="checkbox"
                      name="remember"
                      id="remember"
                      className="mr-2"
                    />{" "}
                    <label for="remember" className="text-sm text-grey-dark">
                      Remember Me
                    </label>
                  </div>
                  <div className="flex flex-col mt-8">
                    <button
                      type="submit"
                      className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-4 rounded"
                    >
                      Login
                    </button>
                  </div>
                </form>
                <div className="text-center mt-4">
                  <a
                    className="no-underline hover:underline text-blue-dark text-xs"
                    href="{{ route('password.request') }}"
                  >
                    Forgot Your Password?
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* image */}
          <div className="hidden sm:block sm:overflow-hidden sm:h-full">
          {/* TODO - 調整一下手機板照片 */}
            <img
              className="w-full h-full sm:rounded-r-lg object-cover transform rotate-90 sm:rotate-0"
              src={process.env.PUBLIC_URL + "/images/login/cupcakes.jpg"}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
