import React, { useEffect, useState } from "react";
import { Input, Button, Select, Option } from "@material-tailwind/react";
import axios from "axios";
import { motion } from "framer-motion";
// import MenuTag from "../components/menuTag/MenuTag";
import MemberMenuTag from "../components/menuTag/MemberMenuTag";
import { useUserState } from "../utils/redux/hooks-redux";
import { API_URL, IMAGE_URL } from "../utils/config";
import { toast } from "react-toastify";

//----------------------會員資訊-----------------------

const genders = ["選擇性別", "男", "女", "不提供"];

const MemberInformation = () => {
  const [user] = useUserState();
  const [member, setMember] = useState({
    id: user.id,
    full_name: "",
    email: "",
    phone: "",
    birthday: "",
    gender_id: "",
    user_photo_id: "",
    path: "",
  });
  console.log(member);
  function handleChange(e) {
    setMember({ ...member, [e.target.name]: e.target.value });
  }
  function handleChangeGender(e) {
    setMember({ ...member, gender_id: e });
  }
  // -------- 取得會員的資料 --------
  useEffect(() => {
    let getUser = async () => {
      // let path = `${IMAGE_URL}/user/${user.id}`;
      // let response = await axios.get(`${API_URL}/user/${user.id}`, member);
      let response = await axios.get(`${API_URL}/user/${user.id}`, member);
      setMember({
        full_name: response.data[0].full_name,
        email: response.data[0].email,
        phone: response.data[0].phone,
        birthday: response.data[0].birthday,
        gender_id: response.data[0].gender_id,
        user_photo_id: response.data[0].user_photo_id,
        path: response.data[0].path,
      });
    };
    getUser();
  }, [user]);

  // -------- 修改會員資料進資料庫 --------
  async function handleSubmit(e) {
    try {
      axios.patch(`${API_URL}/user/${user.id}`, member);
      toast.success("會員資料修改成功!");
      setMember({ ...member });
    } catch (e) {
      console.log(e);
    }
  }

  //-------------------------會員照片--------------------------------
  const [path, setPath] = useState("");
  const [userPhoto, setUserPhoto] = useState({
    id: user.id,
    photo: "",
  });
  console.log(`http://localhost:8001/public${member.path}`);
  console.log(member.path);
  // ----------會員照片上傳-------------
  function handlePhoto(e) {
    setUserPhoto({ ...userPhoto, photo: e.target.files[0] });

    let render = new FileReader();
    render.onload = () => {
      setPath(render.result);
    };
    render?.readAsDataURL(e?.target?.files[0]);
    e.target.value = "";
  }

  // -------- 新增會員片進資料庫 --------

  async function handlePhotoSubmit(e) {
    try {
      toast.success("會員照片上傳成功!");
      let formData = new FormData();
      formData.append("id", userPhoto.id);
      formData.append("photo", userPhoto.photo);
      axios.post(`${API_URL}/user/photo`, formData);
    } catch (e) {
      console.error(e);
    }
  }

  // 頁面重整 function

  return (
    <div className="mx-auto">
      <MemberMenuTag />
      <div className="lg:flex">
        <div className="rounded-tl rounded-tr xl:w-3/5 lg:w-3/5 xl:rounded-bl xl:rounded-tr-none">
          <div className="px-8 mx-auto xl:w-5/6 xl:px-0">
            <h1 className="font-bold text-gray-800 focus:outline-none h1">
              我的檔案
            </h1>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "auto" }}
              transition={{ ease: "easeOut", duration: 2, delay: 1 }}
              className="bg-gradient-to-r pb-[5px] from-sub to-transparent"
            ></motion.div>
            {/* 大頭照 .*/}
            <div className="flex flex-wrap items-center px-2 sm:flex-row">
              <div className="relative object-cover w-40 h-40 mt-6 border rounded-full">
                <img
                  value=""
                  src={`${process.env.PUBLIC_URL}/images/memberInformation/user_small.png`}
                  alt=""
                  className="object-cover w-full h-full rounded-full opacity-40"
                />
                {/* 預覽圖片 */}
                {userPhoto.photo !== "" ? (
                  <>
                    <div className="w-full h-full text-center">
                      <img
                        alt=""
                        className="absolute top-0 object-cover w-auto h-full m-auto rounded-full"
                        src={path}
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="w-full h-full text-center">
                      <img
                        alt=""
                        className="absolute top-0 object-cover w-auto h-full m-auto rounded-full"
                        src={`http://localhost:8001/public${member.path}`}
                      />
                      <p className="hidden">{path}</p>
                    </div>
                  </>
                )}
              </div>
            </div>
            {/* 表單 */}
            <div className="items-center mt-8 md:flex">
              {/* 姓名*/}
              <div className="flex flex-col">
                <div className="flex items-end w-64 gap-4">
                  <Input
                    variant="standard"
                    label="姓名"
                    color="brown"
                    type="text"
                    id="full_name"
                    name="full_name"
                    required
                    value={member.full_name}
                    onChange={handleChange}
                  />
                </div>
              </div>
              {/* 手機號碼 */}
              <div className="flex flex-col mt-8 md:ml-12 md:mt-0">
                <div className="flex flex-col">
                  <div className="flex items-end w-64 gap-4">
                    <Input
                      variant="standard"
                      label="手機號碼"
                      color="brown"
                      required
                      type="tel"
                      id="phone"
                      name="phone"
                      value={member.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* email */}
            <div className="items-center mt-8 md:flex">
              <div className="flex flex-col">
                <div className="flex items-end w-64 gap-4">
                  <Input
                    variant="standard"
                    label="email"
                    color="brown"
                    type="email"
                    required
                    id="email"
                    name="email"
                    value={member.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
              {/* 性別 */}
              <div className="flex flex-col mt-8 md:ml-12 md:mt-0">
                <div className="flex flex-col">
                  <div className="flex items-end w-64 gap-4">
                    <Select
                      variant="standard"
                      label={genders[member.gender_id]}
                      type="text"
                      color="brown"
                      id="gender_id"
                      name="gender_id"
                      value={member.gender_id}
                      onChange={handleChangeGender}
                    >
                      <Option value="1">男</Option>
                      <Option value="2">女</Option>
                      <Option value="3">不提供</Option>
                    </Select>
                  </div>
                </div>
              </div>
            </div>
            {/* 生日 */}
            <div className="items-center mt-8 md:flex">
              <div className="flex flex-col">
                <div className="flex items-end w-64 gap-4">
                  <Input
                    variant="standard"
                    label="生日"
                    color="brown"
                    type="date"
                    id="birthday"
                    name="birthday"
                    value={member.birthday}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>
            <Button
              size="sm"
              color="brown"
              variant="outlined"
              className="flex items-center justify-center border rounded focus:outline-none mt-7 md:mt-14 hover:bg-gray-100"
              type="submit"
              onClick={handleSubmit}
            >
              <span className="font-medium text-center p">儲存設定</span>
              <svg
                className="mt-1 ml-3"
                width={12}
                height={8}
                viewBox="0 0 12 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8.01 3H0V5H8.01V8L12 4L8.01 0V3Z" fill="#242731" />
              </svg>
            </Button>
          </div>
        </div>

        {/* 拖曳區*/}
        <div className="pt-5 pb-5 mt-20 xl:w-2/5 lg:w-2/5 xl:pr-5 xl:pl-0">
          <div className="relative border-2 border-dashed h-80 w-80">
            <input
              name="photo"
              type="file"
              id="photo"
              className="object-cover w-full h-full opacity-0 "
              accept="image/*"
              onChange={handlePhoto}
            />
            <img
              value="photo"
              src={`${process.env.PUBLIC_URL}/images/memberInformation/uploadImg.png`}
              alt=""
              className="absolute object-cover w-1/2 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 h-1/3 opacity-40"
            />

            <Button
              size="sm"
              color="brown"
              variant="outlined"
              className="mt-4 border rounded mx-28"
              type="submit"
              onClick={handlePhotoSubmit}
            >
              <p className="font-medium text-center">上傳照片</p>
            </Button>
            {/* 預覽圖片 */}
            {userPhoto.photo !== "" ? (
              <>
                <div className="w-full h-full text-center">
                  <img
                    alt=""
                    className="absolute top-0 object-cover w-auto h-full m-auto "
                    src={path}
                  />
                </div>
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberInformation;
