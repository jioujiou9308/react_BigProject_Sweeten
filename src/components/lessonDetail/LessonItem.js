import React from "react";

const LessonItem = (props) => {
  const { courseCart } = props;
  console.log(courseCart);
  return (
    <>
      {/* items */}
      <div className="flex flex-col items-start justify-start w-full py-4 bg-gray-50 md:py-6 md:p-6 lg:p-8">
        <h1 className="w-full text-3xl font-semibold text-center text-gray-800 lg:text-3xl lg:leading-9 lg:text-start lg:ml-5">
          課程預約資訊
        </h1>
        <div className="flex flex-col items-start justify-start w-full px-5 pb-5 mt-4 border-b border-gray-200 md:pb-0 md:flex-row md:space-x-6 xl:space-x-8">
          <div className="w-full px-0 mx-auto mb-3 h-60 sm:w-2/3 md:w-3/5 lg:w-full">
            <img
              className="object-cover w-full h-full"
              src={courseCart[5].image1}
              alt=""
            />
          </div>

          <div className="w-full ">
            {/* 人數 */}
            <h3 className="text-xl font-semibold leading-6 text-gray-800 xl:text-2xl ">
              課程：{courseCart[3]}
            </h3>
            <div className="font-bold text-gray-800 p">人數:</div>
            <div className="sm:flex-row">
              <p className="p">大人： {courseCart[1]}</p>
              <p className="p">小孩： {courseCart[2]}</p>
            </div>
            {/* 時段 */}
            <div className="my-2 font-bold leading-none text-gray-800 p">
              時段:
            </div>
            <p>{courseCart[0]}</p>
            <p className="text-base font-black text-right">
              價格: {courseCart[4]}/人
            </p>
          </div>
        </div>
        {/* 人數時段 */}

        {/* 注意事項 */}
        <div className="flex flex-col items-start justify-start w-full p-5">
          <p className="text-warning">課程說明：</p>
          <p>
            • 預約課程前請詳細閱讀甜點課程的材料成分並評估自身食物過敏原反應！
            {/* 產品為新鮮製，如有不能吃的成分請事先告知。三歲前的小朋友請避開巧克力等含咖啡因或含酒精的成分 */}
          </p>
          <p>• 教室現場提供的設備： 製作甜點用的機器設備 / 製作甜點相關用具 / 圍裙 / 手套...等</p>
          <p>• 課程結束後可帶走的物品: 製作完成的甜點 (附包裝盒及紙袋)</p>
          <p className="text-warning">注意事項：</p>
          {/* <p>• 費用為食材費，所以按人頭數計算</p> */}
          <p>• 因烘焙材料須提前準備，請先完成線上付款，以便確認材料數量</p>

          <p>
            • 預定當天所有座位【保留10分鐘】，且需全員到齊，未出席者視為放棄，不退費。
          </p>
          <p>
            • 3 次（含）以上訂位未到且未告知取消者，半年內將無法再享有線上課程預約服務。
          </p>
          <p className="text-warning">取消訂單須知：</p>
          <p>• 預定日期 7 日前可免費取消</p>
          <p>• 預定日期前 3 ~ 6 日取消，扣除課程費用 30%</p>
          <p>• 預定日期前 2 日取消，扣除扣除課程費用 40%</p>
          <p>• 預定日期前 1 日取消，扣除扣除課程費用 50%</p>
        </div>
        <div className="w-full">
          {" "}
          <p className="text-center text-warning">
            {" "}
            若有相關問題請至官網線上客服，有專人為您服務。
          </p>
        </div>
      </div>
    </>
  );
};

export default LessonItem;
