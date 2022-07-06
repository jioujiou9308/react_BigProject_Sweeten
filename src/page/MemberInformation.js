import React, { useEffect, useState } from "react";
import { Input, Button, Select, Option } from "@material-tailwind/react";
import axios from "axios";
import { motion } from "framer-motion";
import MenuTag from "../components/menuTag/MenuTag";
import { useUserState } from "../utils/redux/hooks-redux";
import { API_URL } from "../utils/config";
const genders = ["選擇性別", "男", "女", "不提供"];

const MemberInformation = () => {
  const [user] = useUserState();
  console.log(user.id);
  const [member, setMember] = useState({
    id: user.id,
    full_name: "",
    email: "",
    phone: "",
    birthday: "",
    gender_id: "",
    user_photo_id: "",
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
      let response = await axios.get(`${API_URL}/user/${user.id}`, member);
      console.log(response.data[0]);
      setMember({
        full_name: response.data[0].full_name,
        email: response.data[0].email,
        phone: response.data[0].phone,
        birthday: response.data[0].birthday,
        gender_id: response.data[0].gender_id,
        user_photo_id: response.data[0].user_photo_id,
      });
    };
    getUser();
  }, []);

  // ----------會員照片上傳-------------
  const [path, setPath] = useState("");
  const [userPhoto, setUserPhoto] = useState({
    id: user.id,
    photo: "",
  });
  console.log(userPhoto);

  function handlePhoto(e) {
    setUserPhoto({ ...userPhoto, photo: e.target.files[0] });

    let render = new FileReader();
    render.onload = () => {
      setPath(render.result);
    };
    render?.readAsDataURL(e?.target?.files[0]);
    e.target.value = "";
  }

  // -------- 修改會員資料進資料庫 --------

  async function handlePhotoSubmit(e) {
    console.log("13", userPhoto);

    try {
      let formData = new FormData();
      formData.append("id", userPhoto.id);
      formData.append("photo", userPhoto.photo);
      axios.post(`${API_URL}/user/photo`, formData);
    } catch (e) {
      console.error(e);
    }
  }

  async function handleSubmit(e) {
    try {
      axios.patch(`${API_URL}/user/${user.id}`, member);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="mx-auto">
      <MenuTag />
      <div className="lg:flex">
        <div className="xl:w-3/5 lg:w-3/5  xl:rounded-bl rounded-tl rounded-tr xl:rounded-tr-none">
          <div className="xl:w-5/6 xl:px-0 px-8 mx-auto">
            <h1 className="font-bold text-gray-800 focus:outline-none h1">
              我的檔案
            </h1>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "auto" }}
              transition={{ ease: "easeOut", duration: 2, delay: 1 }}
              className="bg-gradient-to-r pb-[5px] from-sub to-transparent"
            ></motion.div>
            {/* 大頭照 */}
            <div className="flex flex-wrap items-center px-2 sm:flex-row">
              <div className="relative w-32 h-32 mt-6 mb-4 mr-4 lg:mb-0">
                <img
                  src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_3_7.png"
                  alt=""
                  className="w-full h-full overflow-hidden rounded-full shadow"
                />
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
        <div className="xl:w-2/5 lg:w-2/5 pt-5 pb-5 xl:pr-5 xl:pl-0 mt-20">
          <div className="border-2 border-dashed h-80 w-80 relative">
            <input
              name="photo"
              type="file"
              id="photo"
              className="w-full h-full object-cover opacity-0 "
              accept="image/*"
              onChange={handlePhoto}
            />
            <Button
              size="sm"
              color="brown"
              variant="outlined"
              className="border rounded mt-4 mx-28"
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
                    className="w-auto h-full m-auto object-cover absolute top-0 "
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
