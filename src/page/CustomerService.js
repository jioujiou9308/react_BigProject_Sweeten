import React from "react";

function CustomerService() {
  return (
    <>
      <div className="px-16">
        <div className="border-b-2 border-line mt-5">
          <h1 className="h1 pb-2">客服中心</h1>
        </div>

        <div className="flex items-center py-4">
          <div className="mr-3 border-2 overflow-hidden border-line rounded-full">
            <img
              className="scale-75 m-0"
              src={
                process.env.PUBLIC_URL +
                "/images/memberCollectionAndOrder/user_small.png"
              }
              alt=""
            />
          </div>
          {/* 對話框 */}
          <div className="p p-2 border border-line text-center">
            <p>親愛的用戶您好，請提供您在網站上遇上的問題。</p>
          </div>
        </div>
      </div>

      {/* 輸入訊息欄 */}
      <div className="border-t flex  items-center border-line p-4">
             
                <div className="p bg-line flex justify-between p-3 mx-4  w-full">
                    <button className="border bg-white px-2">送出</button>
                    <input type="text" placeholder="請提供您的問題" className=" bg-line text-right"/>
                </div>
              
              <div className="mr-3 border-2 overflow-hidden border-line rounded-full">
            <img
              className="scale-75 m-0"
              src={
                process.env.PUBLIC_URL +
                "/images/memberCollectionAndOrder/user_small.png"
              }
              alt=""
            />
          </div>
      </div>
    </>
  );
}

export default CustomerService;
