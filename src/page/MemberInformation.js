import React from "react";
import { Button } from "@material-tailwind/react";

function MemberInformation() {
  return (
    <>
      <div className="px-2 ">
        <h1 className="py-2 border-b-2 border-line h2 ">我的檔案</h1>

        {/* 讓桌機板可以flexdiv */}
        <div className="flex justify-center mt-10 md:justify-around">
          <div>
            <div className="flex ">
              {/* 條列ㄉtitle */}
              <div className="flex justify-center mt-3 ">
                <div className="mr-5 h4">
                  <h3  className="mb-4 text-right"  >暱稱</h3>
                  <h3 className="mb-4 text-right">姓名</h3>
                  <h3 className="mb-4 text-right">E-mail</h3>
                  <h3 className="mb-4 text-right">手機號碼</h3>
                  <h3 className="mb-4 text-right">性別</h3>
                  <h3 className="mb-4 text-right">生日</h3>
                </div>

                <div className="p">
                <div className="flex justify-between pb-1 mb-2 border-b border-line">
                  <p className="pr-20">中壢李姓選民</p>
                  <p className="hidden md:block p">編輯</p>
                </div>
                <div className="flex justify-between pb-1 mb-3 border-b border-line">
                  <p className="pr-20">李選民</p>
                  <p className="hidden md:block p">編輯</p>
                </div>

                <div className="flex justify-between pb-1 mb-3 border-b border-line">
                  <p className="pr-20">abc******@gmail.com</p>
                  <p className="hidden md:block p">編輯</p>
                </div>

                <div className="flex justify-between pb-1 mb-3 border-b border-line">
                  <p className="pr-20">*******801</p>
                  <p className="hidden md:block p">編輯</p>
                </div>

                
                  <div className="flex items-center justify-around pb-1 mb-3 border-b border-line">                   
                    <input type="radio" />
                    <label>男性</label>

                    <input type="radio" />
                    <label>女性</label>

                    <input type="radio" />
                    <label>其他</label>
                  </div>
                  <div className="flex justify-around">
                    <select name="" id="">
                      <option value="">1995</option>
                    </select>
                    <select name="" id="">
                      <option value="">5月</option>
                    </select>
                    <select name="" id="">
                      <option value="">5</option>
                    </select>
                  </div>
                </div>

                
              </div>
            </div>
            <div className="text-center">
            <Button variant="filled"  className="px-4 py-1 text-white rounded-none md:mt-20 border-line h3 bg-dark"> <span className="p">儲存設定</span> </Button>
              
            </div>
          </div>
          {/* 桌機板中間ㄉ桿桿 */}
<div className="hidden border border-line md:block"></div>
          {/* 桌機板使用者圖片 */}
          <div className="hidden md:block ">
            <div className="">
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
            <Button variant="filled"  className="mt-4 border rounded-none border-line"><span className="text-line p">選擇圖片</span> </Button>
              <p className="mt-4">檔案大小 : 最大3MB</p>
              <p>檔案格式 : JPG, PNG</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MemberInformation;
