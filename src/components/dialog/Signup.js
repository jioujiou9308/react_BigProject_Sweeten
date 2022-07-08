import React, { useRef, useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Input, Button } from "@material-tailwind/react";
import axios from "axios";
import {
  closeModal,
  openLogin,
  openSignup,
} from "../../utils/redux/modalSlice";
import { useDispatch } from "react-redux/es/exports";
import { API_URL } from "../../utils/config";
import { toast } from "react-toastify";

const Signup = () => {
  const dispatch = useDispatch();
  const inputRef = useRef([]);
  const [errState, setErrState] = useState({});
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
  /* ---------------------------------- 送出註冊表單 ---------------------------------- */
  const handleSubmit = (e) => {
    e.preventDefault();
    const formCols = ["name", "email", "phone", "password"];
    const formValue = {};
    // 製作data
    inputRef.current.forEach((node, i) => {
      const input = node.children[0],
        colName = formCols[i];
      formValue[colName] = input.value;
    });

    axios
      .post(API_URL + "/auth/email", formValue)
      .then((res) => {
        // 清空欄位
        inputRef.current.forEach((node) => {
          const input = node.children[0];
          input.value = "";
        });
        dispatch(openSignup());
        toast.success("註冊成功!");
      })
      .catch((e) => {
        const msg = e.response.data;
        toast.error(msg);
        const position = msg.split(":")[0];
        setErrState({ [position]: true });
        console.log(e);
      });
  };
  /* ---------------------------------- 切換至登入 ---------------------------------- */
  const handleOpen = () => {
    dispatch(closeModal());
    dispatch(openLogin());
  };
  // TODO 表單驗證 錯誤訊息
  return (
    <div className="flex flex-wrap w-full mx-auto bg-white rounded-lg shadow-lg">
      <div className="hidden bg-cover md:block md:w-1/2">
        <img
          className="object-cover w-full h-full rounded-r-lg"
          src={"/images/try/bg/bg2.jpg"}
          alt=""
        />
      </div>
      <div className="p-4 mx-auto md:w-1/2">
        <h2 className="font-normal text-center h3">註冊會員</h2>
        <Input
          id="name"
          type="text"
          name="name"
          label="姓名"
          color="grey"
          ref={(node) => (inputRef.current[0] = node)}
          error={errState["name"]}
          required
          className="block w-full px-4 py-2 mt-4 text-base rounded appearance-none focus:outline-none focus:shadow-outline"
        />
        <Input
          id="email"
          type="email"
          name="email"
          label="E-mail"
          color="grey"
          ref={(node) => (inputRef.current[1] = node)}
          error={errState["email"]}
          required
          className="block w-full px-4 py-2 mt-4 text-base border rounded appearance-none focus:outline-none focus:shadow-outline"
        />
        <Input
          id="phone"
          type="tel"
          name="phone"
          label="手機號碼"
          color="grey"
          error={errState["phone"]}
          ref={(node) => (inputRef.current[2] = node)}
          className="block w-full px-4 py-2 mt-4 text-base border rounded appearance-none focus:outline-none focus:shadow-outline"
        />
        <div className="relative">
          <Input
            id="password"
            type={eye.passwordEye ? "text" : "password"}
            name="password"
            color="grey"
            label="密碼"
            error={errState["password"]}
            className="block w-full px-4 py-2 mt-4 text-base border rounded appearance-none focus:outline-none focus:shadow-outline"
          />
          <div className="absolute right-2 top-3" onClick={passwordShow}>
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
            type={eye.confirmPasswordEye ? "text" : "password"}
            name="confirmPassword"
            color="grey"
            label="確認密碼"
            error={errState["password"]}
            ref={(node) => (inputRef.current[3] = node)}
            required
            className="block w-full px-4 py-2 mt-4 text-base border rounded appearance-none focus:outline-none focus:shadow-outline"
          />
          <div className="absolute right-2 top-3" onClick={confirmPasswordShow}>
            {eye.confirmPasswordEye ? (
              <FiEye className="eye" />
            ) : (
              <FiEyeOff className="eye" />
            )}
          </div>
        </div>

        <div className="mt-2 text-center">
          <Button
            className="px-4 py-2 mx-1 font-normal text-center text-white"
            type="submit"
            color="brown"
            size="sm"
            variant="outlined"
            onClick={handleOpen}
          >
            返回登入
          </Button>
          <Button
            className="px-4 py-2 mx-1 font-normal text-center text-white bg-dark"
            type="submit"
            size="sm"
            color="brown"
            onClick={handleSubmit}
          >
            註冊
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
