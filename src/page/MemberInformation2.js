import React from "react";

import { Input } from "@material-tailwind/react";

function MemberInformation2() {
  return (
    <>
      <div className="px-2">
        <h2 className="py-2 border-b-2 h2 border-line">我的檔案</h2>
        <div className="flex justify-around mx-1 mt-10">
          <form>
            <div className="mb-2 md:flex md:items-center">
              <div className="md:w-1/4">
                <label
                  className="block pr-4 mb-1 md:mb-0"
                  for="inline-full-name"
                >
                  暱稱
                </label>
              </div>
              <div className="flex items-center py-2 border-b border-line">
                <input
                  className="w-full px-3 py-1 mr-3 "
                  type="text"
                  placeholder="Jane Doe"
                  aria-label="Full name"
                />
                {/* <button className="flex-shrink-0 px-2 py-1 text-sm hover:text-teal-900" type="button">
                      編輯
                    </button> */}
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
              <div className="flex items-center py-2 border-b border-line">
                <input
                  className="w-full px-2 py-1 mr-3 text-gray-700"
                  type="text"
                  placeholder="Jane Doe"
                  aria-label="Full name"
                />
                {/* <button className="flex-shrink-0 px-2 py-1 text-sm hover:text-teal-900" type="button">
                      編輯
                    </button> */}
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
              <div className="flex items-center py-2 border-b border-line">
                <input
                  className="px-2 py-1 mr-3"
                  type="text"
                  placeholder="Jane Doe"
                  aria-label="Full name"
                />
                {/* <button className="flex-shrink-0 px-2 py-1 text-sm hover:text-teal-900" type="button">
                      編輯
                    </button> */}
              </div>
            </div>
            <div className="mb-2 md:flex md:items-center">
              <div className="md:w-1/4">
                <label className="block mb-1 md:mb-0" for="inline-full-name">
                  手機號碼
                </label>
              </div>
              <div className="flex items-center py-2 border-b border-line">
                <input
                  className="w-full px-2 py-1 mx-2 mr-6"
                  type="text"
                  placeholder="Jane Doe"
                  aria-label="Full name"
                />
                {/* <button className="flex-shrink-0 px-2 py-1 text-sm hover:text-teal-900" type="button">
                      編輯
                    </button> */}
              </div>
            </div>
            <div className="mb-2 md:flex md:items-center">
              <div className="md:w-1/4">
                <label
                  className="block pr-6 mb-1 md:mb-0"
                  for="inline-full-name"
                >
                  性別
                </label>
              </div>
              <div className="flex items-center py-2 mt-2 border-b border-line">
                <div class="flex items-center mr-6">
                  <input
                    id="radio"
                    type="radio"
                    value=""
                    name="colored-radio"
                    className=""
                  />
                  <label for="radio" class="ml-2 text-sm font-normal">
                    男
                  </label>
                </div>
                <div class="flex items-center mr-6">
                  <input
                    id="radio"
                    type="radio"
                    value=""
                    name="colored-radio"
                    className=""
                  />
                  <label for="radio" class="ml-2 text-sm font-normal">
                    女
                  </label>
                </div>
                <div class="flex items-center mr-6">
                  <input
                    id="adio"
                    type="radio"
                    value=""
                    name="colored-radio"
                    className=""
                  />
                  <label for="radio" class="ml-2 text-sm font-normal">
                    不想說
                  </label>
                </div>
                {/* <button className="flex-shrink-0 px-2 py-1 text-sm hover:text-teal-900" type="button">
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
              <Input variant="standard" placeholder="" />
            </div>
            <div className="text-center">
              <button
                class="text-center bg-dark text-white font-bold py-2 px-4 mt-8"
                type="button"
              >
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
                src={
                  process.env.PUBLIC_URL +
                  "/images/memberCollectionAndOrder/user_pic.png"
                }
                alt=""
              />
            </div>
            <div className="text-center p">
              <button
                size="sm"
                className="px-1 mt-4 bg-white border blorder-line"
              >
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

export default MemberInformation2;
