import { useState } from "react";
import postData from "./data-zh"

function CitySelector() {
  // 引入縣市區域資料
  const counties = postData.counties;
  const townships = postData.districts.map((arr) => arr[0]);
  const postcodes = postData.districts.map((arr) => arr[1]);

  // 記錄陣列被選中的索引值，預設值為-1相等於"請選擇"
  // countries與townships的索引值為相匹配
  // 例如countries選中'台北市'時，索引值為0,此時下個下拉選單的值為 townships[0]
  const [county, setCounty] = useState('');
  const [township, setTownship] = useState('');

  return (
    <>
      <h1 className="pt-2 mb-1 text-xs">地址</h1>
    <div className="flex">
      <div className="w-10 h-6 p-1 mr-2 text-xs text-center bg-white ">
        {county !== '' &&
          counties.indexOf(county) > -1 &&
          postcodes[counties.indexOf(county)] &&
          postcodes[counties.indexOf(county)][
            townships[counties.indexOf(county)].indexOf(township)
          ]}
      </div>
      <select
        className="p-1 mr-2 text-xs"
        value={county}
        onChange={(e) => {
          setCounty(e.target.value);
          setTownship('');
        }}
      >
        <option value="">請選擇縣市</option>
        {counties.map((v, i) => {
          return (
            <option key={i} value={v}>
              {v}
            </option>
          );
        })}
      </select>
      <select
        className="p-1 mr-2 text-xs"
        value={township}
        onChange={(e) => {
          setTownship(e.target.value);
        }}
      >
        <option value="">請選擇區域</option>
        {/* 確保counties.indexOf(country)回傳必有索引值，否則會發生錯誤 */}
        {county !== '' &&
          counties.indexOf(county) > -1 &&
          townships[counties.indexOf(county)] &&
          townships[counties.indexOf(county)].map((v, i) => {
            return (
              <option key={i} value={v}>
                {v}
              </option>
            );
          })}
      </select>
    </div>  
    </>
  );
}

export default CitySelector;
