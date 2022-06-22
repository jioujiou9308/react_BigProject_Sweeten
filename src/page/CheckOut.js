import React from "react";
import CitySelector from "../components/tw-city-selector/tw-city-selector";
{/* import { Radio } from "@material-tailwind/react";
import { BiRadioCircleMarked,BiRadioCircle } from "react-icons/bi"; */}


function Index() {
  return (
    <>
      {/* contact & credit card */}
      <div className="p-10 border-t md:pl-0 md:flex mt-14">
        {/* 訂購資訊 */}
        <div className="p-5 mb-10 md:mr-10 bg-primary">
          <div className="pb-5 border-b">
            <span className="block pb-3 font-medium h3">訂購資訊</span>
            <span className="block p">訂購人資料</span>
            <div className="grid grid-cols-2 gap-2">
              <label className="pt-2 mb-1 text-xs">姓名</label>
              <label className="pt-2 text-xs">電話</label>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <input
                  type="text"
                  className="w-full h-6 py-4 pl-2 text-sm focus:outline-none"
                  placeholder="請輸入真實全名"
                />
              </div>
              <div>
                <input
                  type="text"
                  className="w-full h-6 py-4 pl-2 text-sm focus:outline-none"
                  placeholder="請輸入電話號碼"
                />
              </div>
            </div>
            <div className="pt-3">
              <label className="text-xs">信箱</label>
              <input
                type="text"
                className="w-full h-6 py-4 pl-2 text-sm focus:outline-none"
                placeholder="請輸入電子郵件"
              />
            </div>
            <div className="pt-3">
               <CitySelector/> 
            </div>
            <div className="pt-2">
              <input
                type="text"
                className="w-full h-6 py-4 pl-2 text-sm focus:outline-none"
                placeholder="請輸入詳細地址"
              />
            </div>
            {/* 付款方式 */}
            <div className="pt-3">
              <label className="block text-xs">付款方式</label>
              <div className="flex">
                <div className="py-2 mr-5">
                  <input type="radio" class="mr-2" onClick={
                      ()=>{}
                  }/>
                  <label className="text-sm">線上刷卡</label>
                </div>
                <div className="py-2 mr-5">
                  <input type="radio" class="mr-2" onClick={
                      ()=>{}
                  }/>
                  <label className="text-sm">轉帳匯款</label>
                </div>
                <div className="py-2 mr-5">
                  <input type="radio" class="mr-2" onClick={
                      ()=>{}
                  }/>
                  <label className="text-sm">超商取貨付款</label>
                </div>
                <div className="py-2 mr-5">
                  <input type="radio" class="mr-2" onClick={
                      ()=>{}
                  }/>
                  <label className="text-sm">超商代碼繳費</label>
                </div>
              </div>
              {/* <Radio color="pink"   className="text-sm"/> */}
              {/* <BiRadioCircleMarked className="text-xl"/>
              <BiRadioCircle   className="text-xl" onClick={()=>{}}/> */}
            </div>
            {/* 配送方式 */}
            <div className="pt-3">
              <label className="block text-xs">配送方式</label>
              <div className="flex">
                <div className="py-2 mr-5">
                  <input type="radio" class="mr-2" onClick={
                      ()=>{}
                  }/>
                  <label className="text-sm">門市自取</label>
                </div>
                <div className="py-2 mr-5">
                  <input type="radio" class="mr-2" onClick={
                      ()=>{}
                  }/>
                  <label className="text-sm">超商取件</label>
                </div>
                <div className="py-2 mr-5">
                  <input type="radio" class="mr-2" onClick={
                      ()=>{}
                  }/>
                  <label className="text-sm">宅配到府</label>
                </div>
              </div>
            </div>
          </div>
          {/* 收件資訊 */}
          <div className="py-5">
            <span className="block p">收件人資料</span>
            <div className="py-2 ">
                <input type="radio" class="mr-2" onClick={
                    ()=>{}
                }/>
                <label className="text-sm">同訂購人資訊</label>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <label className="pt-2 mb-1 text-xs">姓名</label>
              <label className="pt-2 text-xs">電話</label>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <input
                  type="text"
                  className="w-full h-6 py-4 pl-2 text-sm focus:outline-none"
                  placeholder="請輸入真實全名"
                />
              </div>
              <div>
                <input
                  type="text"
                  className="w-full h-6 py-4 pl-2 text-sm focus:outline-none"
                  placeholder="請輸入電話號碼"
                />
              </div>
            </div>
            <div className="pt-3">
              <label className="text-xs ">信箱</label>
              <input
                type="text"
                className="w-full h-6 py-4 pl-2 text-sm focus:outline-none"
                placeholder="請輸入電子郵件"
              />
            </div>
            <div className="pt-3">
               <CitySelector/> 
            </div>
            <div className="pt-2">
              <input
                type="text"
                className="w-full h-6 py-4 pl-2 text-sm focus:outline-none"
                placeholder="請輸入詳細地址"
              />
            </div>
            
          </div>
        </div>

        {/* 信用卡 */}
        <div className="p-5 overflow-visible md:mr-10 bg-primary">
          <span className="block pb-3 font-medium h3">Card Details</span>

          <span className="text-xs">Card Type</span>

          <div className="flex justify-between mt-2 overflow-visible">
            <div className="relative px-4 py-2 rounded bg-secondary w-52 h-28 right-10">
              <span className="text-lg italic font-medium underline">VISA</span>

              <div className="flex justify-between pt-4">
                <span className="text-xs font-medium ">****</span>
                <span className="text-xs font-medium ">****</span>
                <span className="text-xs font-medium ">****</span>
                <span className="text-xs font-medium ">****</span>
              </div>

              <div className="flex justify-between mt-3">
                <span className="text-xs ">Giga Tamarashvili</span>
                <span className="text-xs ">12/18</span>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center">
              <img
                src="https://img.icons8.com/color/96/000000/mastercard-logo.png"
                width="40"
                alt=""
                className="relative right-5"
              />
              <span className="relative text-xs font-medium bottom-2 right-5">
                mastercard.
              </span>
            </div>
          </div>

          <div className="flex flex-col pt-3">
            <label className="text-xs">Name on Card</label>
            <input
              type="text"
              className="w-full h-6 py-4 pl-2 text-sm focus:outline-none"
              placeholder="Giga Tamarashvili"
            />
          </div>

          <div className="flex flex-col pt-3">
            <label className="text-xs">Card Number</label>
            <input
              type="text"
              className="w-full h-6 py-4 pl-2 text-sm focus:outline-none"
              placeholder="****     ****      ****      ****"
            />
          </div>

          <div className="grid grid-cols-3 gap-2 pt-2 mb-3">
            <div className="col-span-2 ">
              <label className="text-xs">Expiration Date</label>
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="text"
                  className="w-full h-6 py-4 pl-2 text-sm focus:outline-none"
                  placeholder="mm"
                />
                <input
                  type="text"
                  className="w-full h-6 py-4 pl-2 text-sm focus:outline-none"
                  placeholder="yyyy"
                />
              </div>
            </div>

            <div className="">
              <label className="text-xs">CVV</label>
              <input
                type="text"
                className="w-full h-6 py-4 pl-2 text-sm focus:outline-none"
                placeholder="XXX"
              />
            </div>
          </div>

          <button className="w-full py-2 text-white border hover:bg-secondary">
            Submit Order
          </button>
        </div>
      </div>
    </>
  );
}

export default Index;
