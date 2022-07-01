import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Input, Button } from '@material-tailwind/react';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import axios from 'axios';

const MemberInformation = () => {
  const InputCamera = styled('input')({
    display: 'none',
  });
  const [member, setMember] = useState({
    nickname: 'aaa',
    name: 'aaa',
    email: '123@com',
    phone: '0912345678',
    birthday: '',
    photo: '',
  });
  console.log(member);
  function handleChange(e) {
    setMember({ ...member, [e.target.name]: e.target.value });
  }
  async function handleSubmit(e) {
    try {
      let response = axios.post(`$(API_URL)`, member);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div>
      <div className="w-full p-10">
        <h1 className="focus:outline-none h1 font-bold text-gray-800">
          我的檔案
        </h1>
        {/* 大頭照 */}
        <div className="px-2 flex items-center sm:flex-row flex-wrap">
          <div className="h-32 w-32 mb-4 lg:mb-0 mr-4 mt-6 relative">
            <img
              src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_3_7.png"
              alt=""
              className="h-full w-full rounded-full overflow-hidden shadow"
            />
            <div className="absolute bottom-0 left-11 cursor-pointer flex flex-col justify-center items-center text-gray-100">
              <label htmlFor="icon-button-file">
                <InputCamera
                  accept="image/*"
                  id="icon-button-file"
                  type="file"
                />
                <IconButton aria-label="upload picture" component="span">
                  <PhotoCamera />
                </IconButton>
              </label>
            </div>
          </div>
        </div>
        {/* 表單 */}
        {/* 暱稱 */}
        <div className="mt-8 md:flex items-center">
          <div className="flex flex-col">
            <div className="flex w-64 items-end gap-4">
              <Input
                variant="standard"
                color="brown"
                label="暱稱"
                type="text"
                id="nickname"
                name="nickname"
                value={member.nickname}
                onChange={handleChange}
              />
            </div>
          </div>
          {/* 姓名 */}
          <div className="flex flex-col md:ml-12 md:mt-0 mt-8">
            <div className="flex flex-col">
              <div className="flex w-64 items-end gap-4">
                <Input
                  variant="standard"
                  label="姓名"
                  color="brown"
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={member.name}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </div>
        {/* email */}
        <div className="mt-8 md:flex items-center">
          <div className="flex flex-col">
            <div className="flex w-64 items-end gap-4">
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
          {/* 手機號碼 */}
          <div className="flex flex-col md:ml-12 md:mt-0 mt-8">
            <div className="flex flex-col">
              <div className="flex w-64 items-end gap-4">
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
        {/* 生日 */}
        <div className="mt-8 md:flex items-center">
          <div className="flex flex-col">
            <div className="flex w-64 items-end gap-4">
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
          className="flex items-center justify-center focus:outline-none border rounded mt-7 md:mt-14 hover:bg-gray-100"
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
  );
};

export default MemberInformation;
