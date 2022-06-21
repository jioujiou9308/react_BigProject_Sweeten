import { useState } from "react";
import dataZh from "./data-zh";
console.log(dataZh);

function CitySelector() {
  // 範例縣市區域資料
  const counties = ["台北市", "桃園市"];
  const townships = [
    ["中正區", "大同區", "中山區"],
    ["中壢區", "平鎮區", "龍潭區"],
  ];
  const postcodes = [
    ["100", "103", "104"],
    ["320", "324", "325"],
  ];
  // 記錄陣列被選中的索引值，預設值為-1相等於"請選擇"
  // countries與townships的索引值為相匹配
  // 例如countries選中'台北市'時，索引值為0,此時下個下拉選單的值為 townships[0]
  const [county, setCounty] = useState("");
  const [township, setTownship] = useState("");

  return (
    <>
      <h1 className="pt-2 text-xs">郵遞區號</h1>
      <select
        className="p-1 mr-2 text-xs"
        value={county}
        onChange={(e) => {
          setCounty(e.target.value);
          setTownship("");
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
        {console.log(county)}
        {county !== "" &&
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
      <p>
        郵遞區號：
        {county !== "" &&
          counties.indexOf(county) > -1 &&
          postcodes[counties.indexOf(county)] &&
          postcodes[counties.indexOf(county)][
            townships[counties.indexOf(county)].indexOf(township)
          ]}
      </p>
    </>
  );
}

export default CitySelector;
