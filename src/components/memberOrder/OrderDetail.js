import React from "react";

function OrderDetail() {
  return (
    <>
      <div className="flex justify-center text-white bg-warning">
        <div className="flex border-r">
          <div>
            <p>運送方式:</p>
            <p>付款方式:</p>
            <p>收件信息:</p>
          </div>

          <div>
            <p>常溫運送</p>
            <p>信用卡</p>
            <p>320桃園市中壢區新生路二段421號</p>
            <p>李選民 收</p>
          </div>
        </div>
        <div className="flex">
          <div className="flex">
            <div>
              <p>訂單狀態 :</p>
              <p>使用優惠 :</p>
              <p>總計數量 :</p>
            </div>
            <div>
              <p>待出貨</p>
              <p>無</p>
              <p>8</p>
            </div>
          </div>
          <div className="flex">
            <div>
              <p>訂單狀態 :</p>
              <p>使用優惠 :</p>
              <p>總計數量 :</p>
            </div>
            <div>
              <p>待出貨</p>
              <p>無</p>
              <p>8</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderDetail;
