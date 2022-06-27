import React, { useState } from "react";

import CitySelector from "../components/tw-city-selector/tw-city-selector";

function Index() {
  const [fields, setFields] = useState({
    ordername: "",
    ordermobile: "",
    orderemail: "",
    orderaddress: "",
  });

  const [fieldErrors, setFieldErrors] = useState({
    name: "",
    mobile: "",
    email: "",
    address: "",
  });

  const handleChange = (e) => {
    const newData = { ...fields, [e.target.name]: e.target.value };

    setFields(newData);
  };

  const [shippingFields, setShippingFields] = useState({
    shippingname: "",
    shippingmobile: "",
    shippingemail: "",
    shippingaddress: "",
  });

  const handleShippingChange = (e) => {
    const newShippingData = {
      ...shippingFields,
      [e.target.name]: e.target.value,
    };

    setShippingFields(newShippingData);
  };
  // 表單通過html5驗証時會呼叫
  const handleSubmit = (e) => {
    // 阻擋表單預設行為
    e.preventDefault();

    // 送到伺服器…ajax…fetch...
    console.log("這裡送出表單資料到伺服器了");
  };

  // 表單出現不合法的html5驗証時會呼叫
  const handleInvalid = (e) => {
    // 阻擋表單預設行為(錯誤的泡泡訊息)
    e.preventDefault();

    const newFieldErrors = {
      ...fieldErrors,
      [e.target.name]: e.target.validationMessage,
    };

    setFieldErrors(newFieldErrors);

    //console.log(e.target.validationMessage)
  };

  // 當整個表單有變動時會觸發
  // 只是為了暫時清除錯誤訊息而已
  const handleFormChange = (e) => {
    const newFieldErrors = {
      ...fieldErrors,
      [e.target.name]: "",
    };

    setFieldErrors(newFieldErrors);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        onInvalid={handleInvalid}
        onChange={handleFormChange}
      >
        {/* contact & credit card */}
        <div className="p-10 border-t mt-14">
          {/* 訂購資訊 */}
          <div className="p-5 mb-10 bg-primary">
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
                    name="ordername"
                    value={fields.ordername}
                    minLength={2}
                    onChange={handleChange}
                    required
                    className="w-full h-6 py-4 pl-2 text-sm focus:outline-none"
                    placeholder="請輸入真實全名"
                  />
                </div>

                <div>
                  <input
                    type="mobile"
                    name="mobile"
                    value={fields.mobile}
                    onChange={handleChange}
                    required
                    maxLength={10}
                    minLength={10}
                    className="w-full h-6 py-4 pl-2 text-sm focus:outline-none"
                    placeholder="請輸入電話號碼"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  {fieldErrors.ordername !== "" && (
                    <div className="error" style={{ color: "red" }}>
                      {fieldErrors.ordername}
                    </div>
                  )}
                </div>
                <div>
                  {fieldErrors.mobile !== "" && (
                    <div className="error" style={{ color: "red" }}>
                      {fieldErrors.mobile}
                    </div>
                  )}
                </div>
              </div>
              <div className="pt-3">
                <label className="text-xs">信箱</label>
                <input
                  type="email"
                  name="email"
                  value={fields.email}
                  onChange={handleChange}
                  required
                  className="w-full h-6 py-4 pl-2 text-sm focus:outline-none"
                  placeholder="請輸入電子郵件"
                />
              </div>
              {fieldErrors.email !== "" && (
                <div className="error" style={{ color: "red" }}>
                  {fieldErrors.email}
                </div>
              )}
              <div className="pt-3">
                <CitySelector />
              </div>
              <div className="pt-2">
                <input
                  name="address"
                  value={fields.address}
                  onChange={handleChange}
                  minLength={5}
                  required
                  type="address"
                  className="w-full h-6 py-4 pl-2 text-sm focus:outline-none"
                  placeholder="請輸入詳細地址"
                />
              </div>
              {fieldErrors.address !== "" && (
                <div className="error" style={{ color: "red" }}>
                  {fieldErrors.address}
                </div>
              )}
            </div>
            {/* 收件資訊 */}
            <div className="py-5">
              <span className="block p">收件人資料</span>
              <div className="py-2 ">
                <input type="radio" className="mr-2" onClick={() => {}} />
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
                    name="shippingname"
                    value={shippingFields.shippingname}
                    minLength={2}
                    onChange={handleShippingChange}
                    required
                    className="w-full h-6 py-4 pl-2 text-sm focus:outline-none"
                    placeholder="請輸入真實全名"
                  />
                </div>

                <div>
                  <input
                    type="mobile"
                    name="shippingmobile"
                    value={shippingFields.shippingmobile}
                    onChange={handleShippingChange}
                    required
                    maxLength={10}
                    minLength={10}
                    className="w-full h-6 py-4 pl-2 text-sm focus:outline-none"
                    placeholder="請輸入電話號碼"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  {fieldErrors.shippingname !== "" && (
                    <div className="error" style={{ color: "red" }}>
                      {fieldErrors.shippingname}
                    </div>
                  )}
                </div>
                <div>
                  {fieldErrors.shippingmobile !== "" && (
                    <div className="error" style={{ color: "red" }}>
                      {fieldErrors.shippingmobile}
                    </div>
                  )}
                </div>
              </div>
              <div className="pt-3">
                <label className="text-xs">信箱</label>
                <input
                  type="email"
                  name="email"
                  value={shippingFields.shippingemail}
                  onChange={handleShippingChange}
                  required
                  className="w-full h-6 py-4 pl-2 text-sm focus:outline-none"
                  placeholder="請輸入電子郵件"
                />
              </div>
              {fieldErrors.shippingemail !== "" && (
                <div className="error" style={{ color: "red" }}>
                  {fieldErrors.shippingemail}
                </div>
              )}
              <div className="pt-3">
                <CitySelector />
              </div>
              <div className="pt-2">
                <input
                  name="shippingaddress"
                  value={shippingFields.shippingaddress}
                  onChange={handleShippingChange}
                  minLength={5}
                  required
                  type="address"
                  className="w-full h-6 py-4 pl-2 text-sm focus:outline-none"
                  placeholder="請輸入詳細地址"
                />
              </div>
              {fieldErrors.shippingaddress !== "" && (
                <div className="error" style={{ color: "red" }}>
                  {fieldErrors.shippingaddress}
                </div>
              )}
            </div>
            <button
              type="submit"
              className="w-full py-2 text-white border hover:bg-secondary"
              onClick={() => {}}
            >
              確認付款
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default Index;
