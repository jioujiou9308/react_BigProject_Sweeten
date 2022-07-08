import React from "react";
import { useState, useEffect } from "react";
import Tag from "./Tag";
import axios from "axios";
import { API_URL } from "../../utils/config";

// const titleList = ["蛋糕", "餅乾", "點心", "冰品"];

const pathname = window.location.href;
const memberPage = pathname.includes("member");
// console.log(pathname.includes("member") ? "yes" : "no");

const MenuTag = () => {
  const [productOrUser, setProductOrUser] = useState({ page: "product" });
  const [allCategory, setAllCategory] = useState([]);

  const categoryTag = allCategory?.filter((item) => String(item.id)[0] == 1);
  //NOTE categoryTag是空陣列
  console.log("categorytag", categoryTag);

  useEffect(() => {
    if (memberPage) {
      const memberTagList = [
        { id: 1, name: "訂單" },
        { id: 2, name: "蒐藏" },
        { id: 3, name: "會員檔案" },
      ];
      setAllCategory(memberTagList);
      console.log(memberTagList);
    } else {
      axios
        .get(API_URL + "/product/category")
        .then(({ data }) => {
          // 家如即期良品的標籤 => 導向即期良品
          data.push({ id: 199, name: "即期良品" });
          setAllCategory(data);
          console.log("categorytag", data);
        })
        .catch((e) => console.log(e));
    }
  }, []);

  return (
    <div className="absolute top-0 flex overflow-hidden -translate-y-full">
      {categoryTag.map((title, i) => (
        <Tag key={title} title={title.name} i={i} id={title.id} />
      ))}
    </div>
  );
};

export default MenuTag;
