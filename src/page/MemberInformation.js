import { useState } from "react";
import axios from "axios";
import { Input, Button } from "@material-tailwind/react";
import { API_URL } from "../utils/config";

const MemberInformation = () => {
  const [member, setMember] = useState({
    nickname: "",
    nmae: "",
    email: "",
    phone: "",
    photo: "",
  });

  function handleChange(e) {
    setMember({ ...member, [e.targer.name]: e.targer.value });
  }

  function handlePhoto(e) {
    setMember({ ...member, photo: e.targer.files[0] });
  }

  async function hadleSubmit(e) {
    e.preventDefaulte();
    try {
      let formDate = new FormData();
      formDate.append("nickname", member.email);
      formDate.append("name", member.name);
      formDate.append("email", member.email);
      formDate.append("phohe", member.phone);
      formDate.append("photo", member.photo);
      let response = axios.post(`${(API_URL / MemberInformation, formDate)}`);
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <>
      <div className="px-2">
        <h2 className="py-2 border-b-2 h2 border-line">我的檔案</h2>
        <div className="flex justify-around mx-1 mt-10">
          <form method="POST" action="#">
            <div className="mb-2 md:flex md:items-center">
              <div className="md:w-1/4">
                <label
                  className="block pr-4 mb-1 md:mb-0"
                  for="inline-full-name"
                >
                  暱稱
                </label>
              </div>
              <div className="mx-4">
                <Input
                  id="nickname"
                  name="nickname"
                  variant="standard"
                  color="brow"
                  placeholder=""
                  type="text"
                  required
                  value={member.nickname}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="mb-2 md:flex md:items-center">
              <div className="md:w-1/4">
                <label
                  className="block pr-4 mb-1 md:mb-0"
                  for="inline-full-name"
                >
                  姓名
                </label>
              </div>
              <div className="mx-4">
                <Input
                  variant="standard"
                  color="brown"
                  placeholder=""
                  type="text"
                  required
                  id="name"
                  name="name"
                  value={member.name}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="mb-2 md:flex md:items-center">
              <div className="md:w-1/4">
                <label
                  className="block pr-4 mb-1 md:mb-0"
                  for="inline-full-name"
                >
                  E-mail
                </label>
              </div>
              <div className="mx-4">
                <Input
                  variant="standard"
                  color="brown"
                  type="email"
                  placeholder=""
                  required
                  value={member.email}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="mb-2 md:flex md:items-center">
              <div className="md:w-1/4">
                <label className="block mb-1 md:mb-0 " for="inline-full-name">
                  手機號碼
                </label>
              </div>
              <div className="mx-4">
                <Input
                  variant="standard"
                  color="brown"
                  type="tel"
                  placeholder=""
                  id="phone"
                  name="name"
                  value={member.phone}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="md:flex md:items-center">
              <div className="md:w-1/4">
                <label className="block mb-1 md:mb-0" for="inline-full-name">
                  生日
                </label>
              </div>
              <div className="mx-4">
                <Input variant="standard" color="brown" placeholder="" />
              </div>
            </div>
            <div className="mt-8">
              <Button
                className="flex mx-auto bg-dark"
                type="submit"
                onClick={hadleSubmit}
              >
                儲存設定
              </Button>
            </div>
          </form>
          {/* 桌機板中間的桿桿 */}
          <div className="hidden border border-line md:block"></div>
          {/* 桌機版使用者圖片 */}
          <div className="hidden md:block">
            <div>
              <img
                className="mx-auto"
                src={
                  process.env.PUBLIC_URL +
                  "/images/memberCollectionAndOrder/user_pic.png"
                }
                alt=""
              />
            </div>
            <div className="mt-5 text-center">
              <input
                size="sm"
                label="選擇圖片"
                type="file"
                id="photo"
                className="border-2 rounded-sm g"
                nmae="photo"
                onChange={handlePhoto}
              />
            </div>
            <p className="mt-4 text-center note">檔案大小：最大3MB.</p>
            <p className="text-center note">檔案格式：JPG, PNG</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MemberInformation;
