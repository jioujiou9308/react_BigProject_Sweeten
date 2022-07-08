import React from "react";
import { useState, useEffect } from "react";
import Tag from "./Tag";
import axios from "axios";
import { API_URL } from "../../utils/config";

// const titleList = ["蛋糕", "餅乾", "點心", "冰品"];

const MenuTag = () => {
  const [path, setPath] = useState(true);
  const [allCategory, setAllCategory] = useState([]);

  function getPath() {
    const pathName = () => window.location.href;
    // console.log("This is the test", pathName());
    // const memberPage = pathname().includes("member");
    // console.log(
    //   "This is the test",
    //   pathName().includes("member") ? "yes" : "no"
    // );
    return pathName().includes("member") ? setPath(true) : setPath(false);
  }

  const categoryTag = allCategory?.filter((item) => String(item.id)[0] == 1);
  //NOTE categoryTag是空陣列
  console.log("categorytag", categoryTag);

  useEffect(() => {
    getPath();
    if (path) {
      const memberTagList = [
        { id: 1000, name: "會員檔案" },
        { id: 1001, name: "訂單查詢" },
        { id: 1002, name: "蒐藏清單" },
      ];
      setAllCategory(memberTagList);
      // console.log(memberTagList);
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
  }, [path]);

  return (
    <div className="absolute top-0 flex overflow-hidden -translate-y-full">
      {categoryTag.map((title, i) => (
        <Tag key={title} title={title.name} i={i} id={title.id} />
      ))}
    </div>
  );
};

export default MenuTag;
