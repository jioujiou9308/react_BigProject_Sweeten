import React, { useState } from "react";

import CitySelector from "../components/tw-city-selector/tw-city-selector";

function Index() {
  const [orderCityData, setOrderCityData] = useState("");
  const [shippingCityData, setShippingCityData] = useState("");

  const [fields, setFields] = useState({
    ordername: "",
    ordermobile: "",
    orderemail: "",
    orderaddress: "",
  });

  const [shippingFields, setShippingFields] = useState({
    shippingname: "",
    shippingmobile: "",
    shippingemail: "",
    shippingaddress: "",
  });

  const [fieldErrors, setFieldErrors] = useState({
    name: "",
    mobile: "",
    email: "",
    address: "",
  });

  const handleAddress = (e) => {
    const newFields = {
      ...fields,
      orderaddress: orderCityData + e.target.value,
    };
    setFields(newFields);
  };

  const handleShippingAddress = (e) => {
    const newShippingFields = {
      ...shippingFields,
      shippingaddress: shippingCityData + e.target.value,
    };
    setShippingFields(newShippingFields);
  };

  const handleChange = (e) => {
    const newData = { ...fields, [e.target.name]: e.target.value };

    setFields(newData);
  };

  const handleShippingChange = (e) => {
    const newShippingData = {
      ...shippingFields,
      [e.target.name]: e.target.value,
    };

    setShippingFields(newShippingData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("這裡送出表單資料到伺服器了");
  };

  const handleInvalid = (e) => {
    e.preventDefault();

    const newFieldErrors = {
      ...fieldErrors,
      [e.target.name]: e.target.validationMessage,
    };

    setFieldErrors(newFieldErrors);
  };

  const handleFormChange = (e) => {
    const newFieldErrors = {
      ...fieldErrors,
      [e.target.name]: "",
    };

    setFieldErrors(newFieldErrors);
  };
  console.log(fields);

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
                    type="phone"
                    name="ordermobile"
                    value={fields.ordermobile}
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
                  {fieldErrors.ordermobile !== "" && (
                    <div className="error" style={{ color: "red" }}>
                      {fieldErrors.ordermobile}
                    </div>
                  )}
                </div>
              </div>
              <div className="pt-3">
                <label className="text-xs">信箱</label>
                <input
                  type="email"
                  name="orderemail"
                  value={fields.orderemail}
                  onChange={handleChange}
                  required
                  className="w-full h-6 py-4 pl-2 text-sm focus:outline-none"
                  placeholder="請輸入電子郵件"
                />
              </div>
              {fieldErrors.orderemail !== "" && (
                <div className="error" style={{ color: "red" }}>
                  {fieldErrors.orderemail}
                </div>
              )}
              <div className="pt-3">
                <CitySelector setCityData={setOrderCityData} />
                
              </div>
              <div className="pt-2">
                <input
                  name="orderaddress"
                  value={fields.address}
                  onChange={handleAddress}
                  minLength={5}
                  required
                  type="address"
                  className="w-full h-6 py-4 pl-2 text-sm focus:outline-none"
                  placeholder="請輸入詳細地址"
                />
              </div>
              {fieldErrors.orderaddress !== "" && (
                <div className="error" style={{ color: "red" }}>
                  {fieldErrors.orderaddress}
                </div>
              )}
            </div>
            {/* 收件資訊 */}
            <div className="py-5">
              <span className="block p">收件人資料</span>
              <div className="py-2 ">
                <input
                  type="radio"
                  className="mr-2"
                  onClick={() => {
                    setShippingFields({
                      shippingname: fields.ordername,
                      shippingmobile: fields.ordermobile,
                      shippingemail: fields.orderemail,
                      shippingaddress: fields.orderaddress,
                    });
                  }}
                />
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
                  name="shippingemail"
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
                <CitySelector setCityData={setShippingCityData} />
              </div>
              <div className="pt-2">
                <input
                  name="shippingaddress"
                  value={shippingFields.address}
                  onChange={handleShippingAddress}
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
              onClick={() => {
                console.log(fields);
                console.log(shippingFields);
              }}
            >
              確認付款
            </button>
          </div>
        </div>
      </form>
      <a src="../../public/videos/animation_500_l4xxg244.gif"/>
    </>
  );
}

export default Index;
