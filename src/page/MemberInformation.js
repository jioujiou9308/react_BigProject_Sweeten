import React from "react";

function MemberInformation() {
  return (
    <>
      <div className="px-2 ">
        <h1 className="py-2 border-b-2 border-line h2 ">我的檔案</h1>

        <div className="flex">
          {/* 條列ㄉtitle */}
          <div className="flex justify-center mt-3 md:w-3/5">
            <div className="mr-5 h4">
              <h3 className="mb-4 text-right">暱稱</h3>
              <h3 className="mb-4 text-right">姓名</h3>
              <h3 className="mb-4 text-right">E-mail</h3>
              <h3 className="mb-4 text-right">手機號碼</h3>
              <h3 className="mb-4 text-right">性別</h3>
              <h3 className="mb-4 text-right">生日</h3>
            </div>

            <div className="p">
              <p className="pb-1 mb-3 border-b border-line">中壢李姓選民</p>
              <p className="pb-1 mb-3 border-b border-line">李選民</p>
              <p className="pb-1 mb-3 border-b border-line">
                abc******@gmail.com
              </p>
              <p className="pb-1 mb-3 border-b border-line">*******801</p>
              <div className="pb-1 mb-3 border-b border-line"></div>
              <div></div>
            </div>
          </div>
        </div>
        <div className="text-center">
          <button className="px-4 py-1 text-white border-line h3 bg-dark">
            儲存設定
          </button>
        </div>

        {/* 桌機板使用者圖片 */}
        <div className="w-2/5">
          <div className="">
            <img
              src={
                process.env.PUBLIC_URL +
                "/images/memberCollectionAndOrder/user_pic.png"
              }
              alt=""
            />
          </div>

          <button>選擇圖片</button>
          <p>檔案大小 : 最大3MB</p>
          <p>檔案格式 : JPG, PNG</p>
        </div>
      </div>
    </>
  );
}

export default MemberInformation;
