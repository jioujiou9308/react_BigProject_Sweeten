import { useState } from 'react'

function CitySelector() {
  // 範例縣市區域資料
  const counties = ['台北市', '桃園市']
  const townships = [
    ['中正區', '大同區', '中山區'],
    ['中壢區', '平鎮區', '龍潭區'],
  ]

  // 記錄陣列被選中的索引值，預設值為-1相等於"請選擇"
  // countries與townships的索引值為相匹配
  // 例如countries選中'台北市'時，索引值為0,此時下個下拉選單的值為 townships[0]
  const [countryIndex, setCountryIndex] = useState(-1)
  const [townshipIndex, setTownshipIndex] = useState(-1)

  return (
    <>
      <h1 className="pt-2 text-xs">郵遞區號</h1>
      <select
        className="p-1 mr-2 text-xs"
        value={countryIndex}
        onChange={(e) => {
          // 保持state的資料類型一致為number(與初始值相同)
          // 注意e.target.value為字串類型
          setCountryIndex(Number(e.target.value))
          // 區域下拉要跳回"請選擇" 預設值-1
          setTownshipIndex(-1)
        }}
      >
        <option value="-1">請選擇縣市</option>
        {counties.map((v, i) => {
          return <option key={i} value={i}>{v}</option>
        })}
      </select>
      <select
      className="p-1 mr-2 text-xs"
        value={townshipIndex}
        onChange={(e) => {
          // 保持state的資料類型一致為number(與初始值相同)
          // 注意e.target.value為字串類型
          setTownshipIndex(Number(e.target.value))
        }}
      >
        <option value="-1">請選擇區域</option>
        {countryIndex > -1 &&
          townships[countryIndex].map((v, i) => {
            return <option key={i} value={i}>{v}</option>
          })}
      </select>
    </>
  )
}

export default CitySelector