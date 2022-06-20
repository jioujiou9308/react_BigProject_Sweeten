import React from "react";
import { Button } from "@material-tailwind/react";

function MemberInformation() {
  return (
    <>
      <div className="px-2">
        <h2 className="h2 py-2 border-b-2 border-line">我的檔案</h2>
          <div className="flex mt-10 justify-around mx-1">
              <form>
                <div class="md:flex md:items-center mb-2">
                  <div class="md:w-1/4">
                    <label class="block text-gray-500 md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                      暱稱
                    </label>
                  </div>
                  <div class="flex items-center border-b border-line py-2">
                    <input class="w-full text-gray-700 mr-3 py-1 px-2 " type="text" placeholder="Jane Doe" aria-label="Full name" />
                    <button class="flex-shrink-0 text-sm py-1 px-2 hover:text-teal-900" type="button">
                      編輯
                    </button>
                  </div>
                </div>
                <div class="md:flex md:items-center mb-2">
                  <div class="md:w-1/4">
                    <label class="block text-gray-500 md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                      姓名
                    </label>
                  </div>
                  <div class="flex items-center border-b border-line py-2">
                    <input class="w-full text-gray-700 mr-3 py-1 px-2" type="text" placeholder="Jane Doe" aria-label="Full name" />
                    <button class="flex-shrink-0 text-sm py-1 px-2 hover:text-teal-900" type="button">
                      編輯
                    </button>
                  </div>
                </div>
                <div class="md:flex md:items-center mb-2">
                  <div class="md:w-1/4">
                    <label class="block text-gray-500 md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                      E-mail
                    </label>
                  </div>
                  <div class="flex items-center border-b border-line py-2">
                    <input class="text-gray-700 mr-3 py-1 px-2" type="text" placeholder="Jane Doe" aria-label="Full name" />
                    <button class="flex-shrink-0 text-sm py-1 px-2 hover:text-teal-900" type="button">
                      編輯
                    </button>
                  </div>
                </div>
                <div class="md:flex md:items-center mb-2">
                  <div class="md:w-1/4">
                    <label class="block text-gray-500 md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                      手機號碼
                    </label>
                  </div>
                  <div class="flex items-center border-b border-line py-2">
                    <input class="w-full text-gray-700 mr-3 py-1 px-2" type="text" placeholder="Jane Doe" aria-label="Full name" />
                    <button class="flex-shrink-0 text-sm py-1 px-2 hover:text-teal-900" type="button">
                      編輯
                    </button>
                  </div>
                </div>
                <div class="md:flex md:items-center mb-2">
                  <div class="md:w-1/4">
                    <label class="block text-gray-500 md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                      性別
                    </label>
                  </div>
                  <div class="flex items-center border-b border-line py-2">
                    <input class="w-full text-gray-700 mr-3 py-1 px-2" type="text" placeholder="Jane Doe" aria-label="Full name" />
                    <button class="flex-shrink-0 text-sm py-1 px-2 hover:text-teal-900" type="button">
                      編輯
                    </button>
                  </div>
                </div>
                <div class="md:flex md:items-center mb-2">
                  <div class="md:w-1/4">
                    <label class="block text-gray-500 md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                      生日
                    </label>
                  </div>
                  <div class="flex items-center border-b border-line py-2">
                    <input class="w-full text-gray-700 mr-3 py-1 px-2" type="text" placeholder="Jane Doe" aria-label="Full name" />
                    <button class="flex-shrink-0 text-sm py-1 px-2 hover:text-teal-900" type="button">
                      編輯
                    </button>
                  </div>
                </div>
                <div className="text-center">
                  <button class="text-center bg-dark text-white font-bold py-2 px-4" type="button">
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
