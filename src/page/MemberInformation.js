import React from "react";

import TextField from "@mui/material/TextField";
import {Input,Button} from "@material-tailwind/react";

function MemberInformation() {
  return (
    <>
      <div className="px-2">
        <h2 className="h2 py-2 border-b-2 border-line">我的檔案</h2>
          <div className="flex mt-10 justify-around mx-1">
              <form>
                <div className="md:flex md:items-center mb-2">
                  <div className="md:w-1/4">
                    <label className="block mb-1 md:mb-0 pr-4" for="inline-full-name">
                      暱稱
                    </label>
                  </div>
                  <div className="flex items-center border-b border-line py-2">
                    <input className="w-full mr-3 py-1 px-3 " type="text" placeholder="Jane Doe" aria-label="Full name" />
                    {/* <button className="flex-shrink-0 text-sm py-1 px-2 hover:text-teal-900" type="button">
                      編輯
                    </button> */}
                  </div>
                </div>
                <div className="md:flex md:items-center mb-2">
                  <div className="md:w-1/4">
                    <label className="block mb-1 md:mb-0 pr-4" for="inline-full-name">
                      姓名
                    </label>
                  </div>
                  <div className="flex items-center border-b border-line py-2">
                    <input className="w-full text-gray-700 mr-3 py-1 px-2" type="text" placeholder="Jane Doe" aria-label="Full name" />
                    {/* <button className="flex-shrink-0 text-sm py-1 px-2 hover:text-teal-900" type="button">
                      編輯
                    </button> */}
                  </div>
                </div>
                <div className="md:flex md:items-center mb-2">
                  <div className="md:w-1/4">
                    <label className="block mb-1 md:mb-0 pr-4" for="inline-full-name">
                      E-mail
                    </label>
                  </div>
                  <div className="flex items-center border-b border-line py-2">
                    <input className="mr-3 py-1 px-2" type="text" placeholder="Jane Doe" aria-label="Full name" />
                    {/* <button className="flex-shrink-0 text-sm py-1 px-2 hover:text-teal-900" type="button">
                      編輯
                    </button> */}
                  </div>
                </div>
                <div className="md:flex md:items-center mb-2">
                  <div className="md:w-1/4">
                    <label className="block mb-1 md:mb-0" for="inline-full-name">
                      手機號碼
                    </label>
                  </div>
                  <div className="flex items-center border-b border-line py-2">
                    <input className="w-full mr-6 py-1 px-2 mx-2" type="text" placeholder="Jane Doe" aria-label="Full name" />
                    {/* <button className="flex-shrink-0 text-sm py-1 px-2 hover:text-teal-900" type="button">
                      編輯
                    </button> */}
                  </div>
                </div>
                <div className="md:flex md:items-center mb-2">
                  <div className="md:w-1/4">
                    <label className="block mb-1 md:mb-0 pr-6" for="inline-full-name">
                      性別
                    </label>
                  </div>
                  <div className="flex items-center border-b border-line py-2 mt-2">
                    <div class="flex items-center mr-6">
                      <input id="radio" type="radio" value="" name="colored-radio" className=""/>
                      <label for="radio" class="ml-2 text-sm font-normal">男</label>
                    </div>
                    <div class="flex items-center mr-6">
                      <input id="radio" type="radio" value="" name="colored-radio" className=""/>
                      <label for="radio" class="ml-2 text-sm font-normal">女</label>
                    </div>
                     <div class="flex items-center mr-6">
                      <input id="adio" type="radio" value="" name="colored-radio" className=""/>
                      <label for="radio" class="ml-2 text-sm font-normal">不想說</label>
                    </div>
                    {/* <button className="flex-shrink-0 text-sm py-1 px-2 hover:text-teal-900" type="button">
                      編輯
                    </button> */}
                  </div>
                </div>
                <div className="md:flex md:items-center">
                  <div className="md:w-1/4">
                    <label className="block mb-1 md:mb-0" for="inline-full-name">
                      生日
                    </label>
                  </div>
                  <Input variant="standard"  placeholder="" />
                </div>
                <div className="text-center">
                  <button class="text-center bg-dark text-white font-bold py-2 px-4 mt-8" type="button">
                      儲存設定
                  </button>
                </div>
              </form>
            {/* 桌機板中間的桿桿 */}
            <div className="hidden border border-line md:block"></div>
            {/* 桌機版使用者圖片 */}
            <div className="hidden md:block">
              <div>
                <img
                  className="mx-auto"
                  src={process.env.PUBLIC_URL + "/images/memberCollectionAndOrder/user_pic.png"}
                  alt=""
                />
                </div>
                <div className="text-center p">
                  <button size="sm" className="mt-4 bg-white border blorder-line px-1">
                    <span className="text-dark">選擇圖片</span>
                  </button>
                  <p className="mt-4 note">檔案大小：最大3MB</p>
                  <p className="note">檔案格式：JPG, PNG</p>
                </div>
            </div>
          </div>
      </div>
    </>
  );
}

export default MemberInformation;
