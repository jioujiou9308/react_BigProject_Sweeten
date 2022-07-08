import React, { useEffect, useState } from "react";
import { Input, Button, Select, Option } from "@material-tailwind/react";
import axios from "axios";
import { motion } from "framer-motion";
import MenuTag from "../components/menuTag/MenuTag";
import { useUserState } from "../utils/redux/hooks-redux";
import { API_URL, IMAGE_URL } from "../utils/config";
import { toast } from "react-toastify";


//----------------------會員資訊-----------------------

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
      console.log(response.data[0]);
      setMember({
        full_name: response.data[0].full_name,
        email: response.data[0].email,
        phone: response.data[0].phone,
        birthday: response.data[0].birthday,
        gender_id: response.data[0].gender_id,
        user_photo_id: response.data[0].user_photo_id,
        path: response.data[0].path,
      });
      console.log(response.data[0]);
    };
    getUser();
  }, []);

  // -------- 修改會員資料進資料庫 --------
  async function handleSubmit(e) {
    e.preventDefault();
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
  console.log(userPhoto);

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
    e.preventDefault();
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
      <MenuTag />
      <div className="w-full p-10">
        <h1 className="font-bold text-gray-800 focus:outline-none h1">
          我的檔案
        </h1>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "auto" }}
          transition={{ ease: "easeOut", duration: 2 }}
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
            <img
              value="photo"
              src={`${process.env.PUBLIC_URL}/images/memberInformation/uploadImg.png`}
              alt=""
              className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/3 object-cover absolute opacity-40"
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
