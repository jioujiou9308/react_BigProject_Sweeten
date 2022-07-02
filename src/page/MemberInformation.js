import React, { useState } from 'react';
import { Input, Button, IconButton } from '@material-tailwind/react';
import axios from 'axios';
import { useDropzone } from 'react-dropzone';
import { FaCamera } from 'react-icons/fa';

const MemberInformation = () => {
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
  // react-dropzone
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <div className="container mx-auto">
      <div className="lg:flex">
        <div className="xl:w-3/5 lg:w-3/5 py-5 xl:rounded-bl rounded-tl rounded-tr xl:rounded-tr-none">
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
 {/* 拖曳區 */}
        <div className="xl:w-2/5 lg:w-2/5 h-80 lg:my-40 xl:pr-5 xl:pl-0 rounded-tr rounded-br border-dashed border-2 mr-2">
          <div {...getRootProps({ className: 'dropzone' })} className="">
            <Input
              type="file"
              className="h-1/2 w-full border-hidden"
              accept="image/*"
              {...getInputProps()}
            />
            <IconButton type="file" variant="text" className="flex mx-auto mt-20">
              <FaCamera className="icon-lg" color="gray" />
            </IconButton>
            <p className="p text-center">請拖曳照片至此</p>
          </div>
        </div>
      </div>
    </div>

    // <div className="flex flex-col lg:flex-row justify-between">
    //   <div className="w-full p-10 md:w-1/2 order-first">
    //     <h1 className="focus:outline-none h1 font-bold text-gray-800">
    //       我的檔案
    //     </h1>
    //     {/* 大頭照 */}
    //     <div className="px-2 flex items-center sm:flex-row flex-wrap">
    //       <div className="h-32 w-32 mb-4 lg:mb-0 mr-4 mt-6 relative">
    //         <img
    //           src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_3_7.png"
    //           alt=""
    //           className="h-full w-full rounded-full overflow-hidden shadow"
    //         />
    //       </div>
    //     </div>
    //     {/* 表單 */}
    //     {/* 暱稱 */}
    //     <div className="mt-8 md:flex items-center">
    //       <div className="flex flex-col">
    //         <div className="flex w-64 items-end gap-4">
    //           <Input
    //             variant="standard"
    //             color="brown"
    //             label="暱稱"
    //             type="text"
    //             id="nickname"
    //             name="nickname"
    //             value={member.nickname}
    //             onChange={handleChange}
    //           />
    //         </div>
    //       </div>
    //       {/* 姓名 */}
    //       <div className="flex flex-col md:ml-12 md:mt-0 mt-8">
    //         <div className="flex flex-col">
    //           <div className="flex w-64 items-end gap-4">
    //             <Input
    //               variant="standard"
    //               label="姓名"
    //               color="brown"
    //               type="text"
    //               id="name"
    //               name="name"
    //               required
    //               value={member.name}
    //               onChange={handleChange}
    //             />
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     {/* email */}
    //     <div className="mt-8 md:flex items-center">
    //       <div className="flex flex-col">
    //         <div className="flex w-64 items-end gap-4">
    //           <Input
    //             variant="standard"
    //             label="email"
    //             color="brown"
    //             type="email"
    //             required
    //             id="email"
    //             name="email"
    //             value={member.email}
    //             onChange={handleChange}
    //           />
    //         </div>
    //       </div>
    //       {/* 手機號碼 */}
    //       <div className="flex flex-col md:ml-12 md:mt-0 mt-8">
    //         <div className="flex flex-col">
    //           <div className="flex w-64 items-end gap-4">
    //             <Input
    //               variant="standard"
    //               label="手機號碼"
    //               color="brown"
    //               required
    //               type="tel"
    //               id="phone"
    //               name="phone"
    //               value={member.phone}
    //               onChange={handleChange}
    //             />
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     {/* 生日 */}
    //     <div className="mt-8 md:flex items-center">
    //       <div className="flex flex-col">
    //         <div className="flex w-64 items-end gap-4">
    //           <Input
    //             variant="standard"
    //             label="生日"
    //             color="brown"
    //             type="date"
    //             id="birthday"
    //             name="birthday"
    //             value={member.birthday}
    //             onChange={handleChange}
    //             required
    //           />
    //         </div>
    //       </div>
    //     </div>
    //     <Button
    //       size="sm"
    //       color="brown"
    //       variant="outlined"
    //       className="flex items-center justify-center focus:outline-none border rounded mt-7 md:mt-14 hover:bg-gray-100"
    //       type="submit"
    //       onClick={handleSubmit}
    //     >
    //       <span className="font-medium text-center p">儲存設定</span>
    //       <svg
    //         className="mt-1 ml-3"
    //         width={12}
    //         height={8}
    //         viewBox="0 0 12 8"
    //         fill="none"
    //         xmlns="http://www.w3.org/2000/svg"
    //       >
    //         <path d="M8.01 3H0V5H8.01V8L12 4L8.01 0V3Z" fill="#242731" />
    //       </svg>
    //     </Button>
    //   </div>
    //   {/* 拖曳區 */}
    //   <div className="flex mt-6 mx-auto order-last border-dashed border-2 h-1/2 w-full">
    //     <div
    //       {...getRootProps({ className: 'dropzone' })}
    //       className=""
    //     >
    //       <Input
    //         type="file"
    //         className="border-dashed h-1/2 w-full"
    //         accept="image/*"
    //         {...getInputProps()}
    //       />
    //       <IconButton
    //         type="file"
    //         variant="text"
    //         className="flex absolute top-10 left-32"
    //       >
    //         <FaCamera className="icon-lg" color="gray" />
    //       </IconButton>
    //     </div>
    //     <div className="flex mx-auto">
    //       <h4 className="p mt-4">請選擇圖片</h4>
    //       <ul>{files}</ul>
    //     </div>
    //   </div>
    // </div>
  );
};

export default MemberInformation;
