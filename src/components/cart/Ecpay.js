import React from "react";
import { API_URL } from "../../utils/config";
import { useCartState, useUserState } from "../../utils/redux/hooks-redux";

const Ecpay = () => {
  const [cart] = useCartState();
  const [user] = useUserState();
  const [info, products] = cart;
  /* ----------------------------------- 總價錢 ---------------------------------- */
  const amount = () =>
    products.reduce((pre, cur) => {
      return pre + cur.count * cur.price;
    }, 0);
  const fee = info.fee,
    tax = info.tax * amount();
  /* ---------------------------------- 商品描述 ---------------------------------- */
  const itemName = `sweeten食甜 #用戶 ${user.email}`;
  const desc = `小計:${amount()} 稅率:${(info.tax * 100).toFixed(1)} 運費:${
    info.fee
  }}`;
  return (
    <form action={`${API_URL}/ecpay`} method="POST">
      <div className=" hidden">
        <input
          type="text"
          name="TotalAmount"
          value={(amount() + fee + tax).toFixed(0)}
          placeholder="總價錢"
        />
        <input type="text" value={desc} name="TradeDesc" placeholder="描述" />
        <input
          type="text"
          value={itemName}
          name="ItemName"
          placeholder="商品名#分隔"
        />
        <input type="text" value={JSON.stringify(cart[1])} name="products" />
        <input type="text" value={"桃園聖德基督學院"} name="address" />
        <input type="text" value={1} name="order_status_id" />
        <input type="text" value={user.id} name="user_id" />
        <p>{"-form action-> server -redirect-> ecpay -redirect-> local"}</p>
        <p>
          信用卡號：4311-9522-2222-2222 <br />
          有效日期：大於今日
          <br /> 安全碼：222
        </p>
      </div>
      <button className="w-full py-2 text-white border border-white hover:bg-secondary">
        <span>確認付款</span>
      </button>
    </form>
  );
};

export default Ecpay;
