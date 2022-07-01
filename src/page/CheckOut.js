import React, { useState } from "react";

import CitySelector from "../components/tw-city-selector/tw-city-selector";

function Index() {
  const [cityData, setCityData] = useState("");
  const [fields, setFields] = useState({
    name: "",
    mobile: "",
    email: "",
    cityData: "",
    address: "",
  });
  const [shippingFields, setShippingFields] = useState({
    name: "",
    mobile: "",
    email: "",
    cityData: "",
    address: "",
  });
  console.log(fields);
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
  // 同訂購人資料onClick
  const handleCheck = (e) => {
    if (e.target.checked) {
      setShippingFields({
        name: fields.name,
        mobile: fields.mobile,
        email: fields.email,
        cityData: fields.cityData,
        address: fields.address,
      });
    }
    if (!e.target.checked) {
      setShippingFields({
        name: "",
        mobile: "",
        email: "",
        cityData: "",
        address: "",
      });
    }
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
                    name="name"
                    value={fields.name}
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
                  {fieldErrors.name !== "" && (
                    <div className="error" style={{ color: "red" }}>
                      {fieldErrors.name}
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
                <CitySelector
                  setCityData={setCityData}
                  setFields={setFields}
                  fields={fields}
                />
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
            {/* 收件資訊================================================= */}
            <div className="py-5">
              <span className="block p">收件人資料</span>
              <div className="py-2 ">
                <input type="checkbox" className="mr-2" onClick={handleCheck} />
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
                    name="name"
                    value={shippingFields.name}
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
                    name="mobile"
                    value={shippingFields.mobile}
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
                  {fieldErrors.name !== "" && (
                    <div className="error" style={{ color: "red" }}>
                      {fieldErrors.name}
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
                  value={shippingFields.email}
                  onChange={handleShippingChange}
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
                <CitySelector
                  setCityData={setCityData}
                  setFields={setFields}
                  fields={fields}
                  shippingFields={shippingFields}
                />
              </div>
              <div className="pt-2">
                <input
                  name="address"
                  value={shippingFields.address}
                  onChange={handleShippingChange}
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
    </>
  );
}

export default Index;
